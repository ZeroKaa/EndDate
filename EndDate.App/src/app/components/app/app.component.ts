import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
    selector: 'enddate',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    /******************************************************** LIFE CYCLE ********************************************************/

    constructor(

       
        private _router: Router,
        private _route: ActivatedRoute,
        private _auth : AuthService
         
    ) {
        
    }

    public applicationIsReady?: boolean = null;

    public async ngOnInit(): Promise<void> {   
        this._auth.connected$.subscribe(async () => {
            this.applicationIsReady = true;
        });
    }

    public newSimulation() {
        if (window.location.pathname == '/') {
            window.location.reload();
        }
        else {
            this._router.navigateByUrl('/');
        }
    }   

    public lastResultAvailable(): boolean {
        return localStorage.getItem("enddate_last_result") != null;
    }

    public reload() {
        var last = localStorage.getItem("enddate_last_result");
        if (last) {
            sessionStorage.setItem('open_simulation', last);
            this.newSimulation();
        }
    }
}
