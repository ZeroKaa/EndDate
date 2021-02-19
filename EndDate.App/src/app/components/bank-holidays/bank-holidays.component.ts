import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IBankHoliday } from '../../models/calculation.interface';
import { BankHolidaysService } from '../../services/bank-holidays.service';



@Component({
    selector: 'bank-holidays',
    templateUrl: './bank-holidays.component.html',
    styleUrls: ['./bank-holidays.component.scss']
})
export class BankHolidaysComponent implements OnInit {

    /******************************************************** LIFE CYCLE ********************************************************/
    public holidays: IBankHoliday[];
    public form: FormGroup;
    public adding = false;
    public addRequested = false;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _holidays: BankHolidaysService,
        private _fb: FormBuilder
    ) {
        this.buildForm();
    }


    public async ngOnInit(): Promise<void> {
        await this.refresh();
    }

    public async add() {
        if (this.form.valid) {
            this.adding = true;
            await this._holidays.add(this.form.value.date);
            this.form.reset({ date: null });
            await this.refresh();
            this.adding = false;
            this.addRequested = false;
        }
    }

    public async delete(date: IBankHoliday) {
        await this._holidays.delete(date);
        await this.refresh();
    }

    public buildForm() {
        this.form = this._fb.group({
            date: [null, Validators.required]
        });


    }

    private async refresh() {
        this.holidays = await this._holidays.getAll();
    }
}
