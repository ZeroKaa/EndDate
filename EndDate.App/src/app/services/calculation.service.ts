import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICalculationOutput } from '../models/calculation.interface';
import { DateService } from './date.service';



@Injectable({
    providedIn: 'root',
})
export class CalculationService {

    public loading: boolean;


    constructor(
        private _http: HttpClient,
        private _date : DateService
    ) {

    }

    public async calculate(input: any): Promise<ICalculationOutput> {
        this._date.convertToString(input);
        var s = await this._http.post<ICalculationOutput>('/api/calculator', input).toPromise();
        
        return s;
    }


}





