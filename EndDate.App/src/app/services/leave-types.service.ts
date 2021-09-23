import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILeaveType } from '../models/calculation.interface';
import { DateService } from './date.service';



@Injectable({
    providedIn: 'root',
})
export class LeaveTypesService {

    constructor(
        private _http: HttpClient, 
        private _date : DateService
    ) {

    }

    public async getAll(): Promise<ILeaveType[]> {
        var values = this._http.get<ILeaveType[]>('/api/leavetype').toPromise();
        this._date.convertToDate(values);
        return values;
    }

    public async add(leaveType: ILeaveType) {
        await this._http.post('/api/leavetype', leaveType).toPromise();
    }

    public async delete(leaveType: ILeaveType) {
        await this._http.post('/api/leavetype/delete', leaveType).toPromise();
    }

    public async toggleExtending(leaveType: ILeaveType) {
        await this._http.put('/api/leavetype/extending', leaveType).toPromise();
    }

    public async toggleExtendingHolidays(leaveType: ILeaveType) {
        await this._http.put('/api/leavetype/extending-holiday', leaveType).toPromise();
    }

    public async toggleAlerting(leaveType: ILeaveType) {
        await this._http.put('/api/leavetype/alerting', leaveType).toPromise();
    }

}





