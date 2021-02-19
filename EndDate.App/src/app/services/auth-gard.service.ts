import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    constructor(private _authService: AuthService, private _router: Router, private _user:UserService) { }

    public canActivate(routeAc: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this._authService.connected$.pipe(map(() => {
            var success = this._user.currentUser != null;
            if (!success) {
                this._router.navigateByUrl("/access-denied");
            }
            else {
                return true;
            }

            
        }));



    }
}
