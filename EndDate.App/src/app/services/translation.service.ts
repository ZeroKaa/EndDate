import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root',
})
export class TranslationsService {

    public loading: boolean;


    constructor(
    ) {

    }

    translate(key: string, params?: any[]): string {
        var one = this._translations.find(t => t.Key == key);
        if (one) {
            return one.Value;
        }
        else {
            return key;
        } 
    }
    

    private _translations = [{ "Key": "ng-ui-date-picker-march", "Value": "mars" }, { "Key": "ng-ui-date-picker-may", "Value": "mai" }, { "Key": "ng-ui-date-picker-monday", "Value": "lu" }, { "Key": "ng-ui-date-picker-november", "Value": "novembre" }, { "Key": "ng-ui-date-picker-october", "Value": "octobre" }, { "Key": "ng-ui-date-picker-saturday", "Value": "sa" }, { "Key": "ng-ui-date-picker-september", "Value": "septembre" }, { "Key": "ng-ui-date-picker-june", "Value": "juin" }, { "Key": "ng-ui-date-picker-sunday", "Value": "di" }, { "Key": "ng-ui-date-picker-tuesday", "Value": "ma" }, { "Key": "ng-ui-date-picker-wednesday", "Value": "me" }, { "Key": "ng-ui-form-control-optional", "Value": "Optionnel" }, { "Key": "ng-ui-date-picker-thursday", "Value": "je" }, { "Key": "ng-ui-date-picker-july", "Value": "juillet" }, { "Key": "ng-ui-date-picker-january", "Value": "janvier" }, { "Key": "ng-ui-date-picker-friday", "Value": "ve" }, { "Key": "ng-ui-date-picker-april", "Value": "avril" }, { "Key": "ng-ui-date-picker-august", "Value": "août" }, { "Key": "ng-ui-date-picker-december", "Value": "décembre" }, { "Key": "ng-ui-date-picker-february", "Value": "février" }];
}





