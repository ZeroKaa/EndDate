import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IBankHoliday } from '../../models/calculation.interface';
import { BankHolidaysService } from '../../services/bank-holidays.service';



@Component({
    selector: 'open',
    templateUrl: './open.component.html',
    styleUrls: ['./open.component.scss']
})
export class OpenComponent implements OnInit {

    /******************************************************** LIFE CYCLE ********************************************************/

    public form: FormGroup;


    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _fb: FormBuilder

    ) {
        this.buildForm();
    }


    public async ngOnInit(): Promise<void> {

    }


    public buildForm() {
        this.form = this._fb.group({
            simulation: [null, Validators.required]
        });
    }


    public open() {

        var fr = new FileReader();
        fr.onload = () => {
            sessionStorage.setItem('open_simulation', fr.result.toString());
            this._router.navigateByUrl('/');
            
        }
        fr.readAsText(this.form.value.simulation[0]);
    }

}
