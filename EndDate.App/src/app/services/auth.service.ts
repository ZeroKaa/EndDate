import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable, ReplaySubject } from 'rxjs';
import { authConfig } from './auth-config';
import { UserService } from './user.service';


export interface ILoginReturn {
    authenticated: boolean;
    routes?: string;
}

interface AppConfigAzureActiveDirectory {
    issuer: string;
    clientId: string;
}

export interface AppConfig {
    aad: AppConfigAzureActiveDirectory;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private readonly stateKey: string = "eoc_redirect_url";
    private _connectedSubject: ReplaySubject<boolean> = new ReplaySubject<boolean>();
    public get connected$(): Observable<boolean> {
        return this._connectedSubject.asObservable();
    }
    public connected: boolean = false;


    constructor(
        private _oauthService: OAuthService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _userService: UserService

    ) {


        this._oauthService.configure(authConfig);
        this._authenticate().then(() => this._connectedSubject.next());


    }

    private async _authenticate(): Promise<boolean> {



        if (this._oauthService.hasValidAccessToken() === false && sessionStorage.getItem(this.stateKey) === null) {
            sessionStorage.setItem(this.stateKey, location.pathname)
        }


        if (!this._userService.currentUser) {
            let data: boolean = await this._oauthService.loadDiscoveryDocumentAndLogin();

            if (data === true) {
                let email: string = this._oauthService.getIdentityClaims()['upn'];
                this._userService.currentUser = { email: email };
                this.connected = true;
                this._oauthService.setupAutomaticSilentRefresh();

                if (this._oauthService.hasValidAccessToken()) {
                    const state: string = sessionStorage.getItem(this.stateKey);
                    sessionStorage.removeItem(this.stateKey)

                    if (state) {
                        this._router.navigateByUrl(state);
                    }
                }
            }
            else {
                localStorage.removeItem("intranet.users");
            }
        }

        return true;

    }
    /******************************************************** PUBLIC ********************************************************/
    // TODO: The token should be refreshed when expired
    public async ensureUser(): Promise<ILoginReturn> {


        let valueReturned: ILoginReturn = { authenticated: false, routes: null };






        if (!this._userService.currentUser) {

            await this._oauthService.loadDiscoveryDocument();
            await this._oauthService.tryLoginCodeFlow().then(async () => {
                const accessToken = sessionStorage.getItem('access_token');
                let email: string = this._oauthService.getIdentityClaims()['upn'];

                this._userService.currentUser = { email: email };

                valueReturned.routes = location.href;
                valueReturned.authenticated = true;


                if (this._userService.currentUser) {

                    valueReturned.authenticated = true;

                }

                if (this.connected == false) {
                    this.connected = true;
                    this._connectedSubject.next();
                }

            });

        }

        return valueReturned;
    }
}
