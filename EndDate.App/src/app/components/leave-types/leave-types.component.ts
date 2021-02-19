import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ILeaveType } from '../../models/calculation.interface';
import { LeaveTypesService } from '../../services/leave-types.service';




@Component({
    selector: 'leave-types',
    templateUrl: './leave-types.component.html',
    styleUrls: ['./leave-types.component.scss']
})
export class LeaveTypesComponent implements OnInit {

    /******************************************************** LIFE CYCLE ********************************************************/
    public types: ILeaveType[];
    public form: FormGroup;
    public adding = false;
    public addRequested = false;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _leaveTypes: LeaveTypesService,
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
            await this._leaveTypes.add(this.form.value);
            this.form.reset({ code: '',description:'', isExtending:false});
            await this.refresh();
            this.adding = false;
            this.addRequested = false;
        }
    }

    public async delete(t: ILeaveType) {
        await this._leaveTypes.delete(t);
        await this.refresh();
    }

    public buildForm() {
        this.form = this._fb.group({
            code: ['', Validators.required],
            description: ['', null],
            isExtending: [false, null]
        });


    }

    private async refresh() {
        this.types = await this._leaveTypes.getAll();
    }

    public async toggleExtend(t: ILeaveType) {
        await this._leaveTypes.toggleExtending(t);
        await this.refresh();
    }

    public async toggleExtendHolidays(t: ILeaveType) {
        await this._leaveTypes.toggleExtendingHolidays(t);
        await this.refresh();
    }
}
