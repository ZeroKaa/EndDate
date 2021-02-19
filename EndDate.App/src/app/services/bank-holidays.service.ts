import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBankHoliday, ICalculationOutput } from '../models/calculation.interface';
import { DateService } from './date.service';



@Injectable({
    providedIn: 'root',
})
export class BankHolidaysService {

    


    constructor(
        private _http: HttpClient,
        private _date : DateService
    ) {

    }

    public async getAll(): Promise<IBankHoliday[]> {
        var values = this._http.get<IBankHoliday[]>('/api/bankholidays').toPromise();
        this._date.convertToDate(values);
        return values;
    }

    public async add(date: Date) {
        this._date.convertToString(date);
        await this._http.post('/api/bankholidays',{ date: date }).toPromise();
    }

    public async delete(date: IBankHoliday) {
        this._date.convertToString(date);
        await this._http.post('/api/bankholidays/delete',date).toPromise();
    }

}





