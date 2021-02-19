import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    /******************************************************** LIFE CYCLE ********************************************************/

    constructor(

       
        private _router: Router,
        private _route: ActivatedRoute,
       
         
    ) {
        
    }

   

    public async ngOnInit(): Promise<void> {

      

        
    }
}
