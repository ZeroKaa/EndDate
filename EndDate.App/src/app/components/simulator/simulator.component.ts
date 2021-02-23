import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FileUploadValidators } from '@iplab/ngx-file-upload';
import { ICalculationOutput, IExtensionCalendarEvent } from '../../models/calculation.interface';
import { CalculationService } from '../../services/calculation.service';
import * as lodash from 'lodash';
import { DateService } from '../../services/date.service';
import { Session } from 'inspector';


export interface ICalculationInput {
    startDate: Date;
    endDate: Date;
    prestations: File[];
    leaves: File[];
}

@Component({
    selector: 'simulator',
    templateUrl: './simulator.component.html',
    styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {

    public form: FormGroup;
    public downloadForm: FormGroup;
    public state = "input";
    public result: ICalculationOutput;
    public events: IExtensionCalendarEvent[];
   

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _fb: FormBuilder,
        private _calculator: CalculationService,
        private _date: DateService
    ) {
        this.resetForm();
    }

    public async ngOnInit(): Promise<void> {
        if (sessionStorage.getItem('open_simulation')) {
            this.result = JSON.parse(sessionStorage.getItem('open_simulation'));
            
            this.updateCalendar();
            this.state = "results";
            sessionStorage.removeItem('open_simulation');
        }
    }

    public async save() {
        this.state = "loading";
        const v: ICalculationInput = this.form.value;
        var b64Prestations = await this.toBase64(v.prestations[0]);
        var b64Leaves = await this.toBase64(v.leaves[0]);

        this.result = await this._calculator.calculate({ startDate: v.startDate, endDate: v.endDate, prestations: b64Prestations, leaves: b64Leaves });
        
        this.updateCalendar();
        if (this.result && this.result.errors && this.result.errors.length == 0) {
            this.state = "results";
            localStorage.setItem("enddate_last_result", JSON.stringify(this.result));
        }
        else {
            this.state = "input";
        }
    }

    private updateCalendar() {
        var evts: IExtensionCalendarEvent[] = [];
        for (const m of this.result.extensions) {
            var date = new Date(m.date);
            var endDate = new Date(m.date);
            endDate.setHours(23, 59, 59);
            var title = '';
            for (const c of m.codes) {
                title += c.code + ",";
            }
            evts.push(
                {
                    from: date,
                    to: endDate,
                    title: title,
                    type: "extension"
                });
        }


        this.events = evts;
    }

    public resetForm() {

        this.form = this._fb.group({
            startDate: [null, Validators.required],
            endDate: [null, Validators.required],
            prestations: [null, Validators.required],
            leaves: [null, Validators.required]
        });

        this.downloadForm = this._fb.group({
            fileName: ['', Validators.required],
        });


    }

    public resetPage() {
        location.reload();
    }

    public downloadResult() {
        if (this.result) {
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.result));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", `${this.downloadForm.value.fileName}.json`);
            dlAnchorElem.click();   
        }
    }

    public toPdf() {
        if (this.result) {
            sessionStorage.setItem('open_simulation', JSON.stringify(this.result));
            this._router.navigateByUrl('/pdf');
        }
    }

    private toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
