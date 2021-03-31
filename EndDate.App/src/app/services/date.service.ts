import { Injectable } from '@angular/core';

import { DatePipe, WeekDay } from '@angular/common';

export enum Direction {
    Backward = -1,
    Forward = 1
}

@Injectable({
    providedIn: 'root',
})
export class DateService {

    /******************************************************** VARIABLES ********************************************************/



    public monthNames: string[] = ["january", "february", "march", "april", "may", "june", "july", "augustus", "september", "october", "november", "december"];

    private readonly PATTERN: string = "yyyy-MM-ddTHH:mm:ss.SSS";
    private readonly ISO8601: RegExp = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;
    private readonly ISDATE: RegExp = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d$/;

    /******************************************************** LIFE CYCLE ********************************************************/

    constructor(private _datePipe: DatePipe) {



    }

    /******************************************************** PUBLIC ********************************************************/

    /**
     * 
     * @param body
     */
    public convertToDate(body: any): any {
        if (body === null || body === undefined) {
            return body;
        }

        if (typeof body !== 'object') {
            return body;
        }

        for (const key of Object.keys(body)) {

            const value = body[key];


            
            if (this._isIso8601(value)) {
                body[key] = new Date(value);
                
            }
            else if (typeof value === 'object') {
                this.convertToDate(value);
            }
        }
    }

    /**
     * 
     * @param body
     */
    public convertToString(body: any): any {
        if (body === null || body === undefined) {
            return body;
        }

        if (typeof body !== 'object') {
            return body;
        }

        for (const key of Object.keys(body)) {
            const value = body[key];

            if (value instanceof Date) {
                body[key] = this.toJSONLocal(value);
            }
            else if (typeof value === 'object') {
                this.convertToString(value);
            }
        }
    }

    /**
     * 
     * @param day
     */
    public getCorrectWeekDay(day: WeekDay): number {
        return day == WeekDay.Sunday ? 7 : day;
    }

    /**
     * 
     * @param date
     * @param day
     * @param direction
     */
    public ensureDay(date: Date, day: number, direction: Direction = Direction.Forward): void {
        while (date.getDate() != day) {
            date.setDate(date.getDate() + direction);
        }
    }

    /**
     * 
     * @param date
     * @param day
     */
    public ensureWeekDay(date: Date, day: WeekDay, direction: Direction = Direction.Forward): void {
        if (!direction) {
            direction = Direction.Forward;
        }

        while (date.getDay() != day) {
            date.setDate(date.getDate() + direction);
        }
    }

    /**
     * 
     * @param d1
     * @param d2
     */
    public getMonthDiff(d1: Date, d2: Date): number {
        let months: number = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();

        return months <= 0 ? 0 : months;
    }

    /**
     * 
     * @param d1
     * @param d2
     */
    public getWeekDiff(d1: Date, d2: Date): number {
        const from: Date = new Date(+d1 < +d2 ? d1 : d2);
        const to: Date = new Date(+d1 > +d2 ? d1 : d2);

        let week: number = 0;

        while (+from < +to) {
            from.setDate(from.getDate() + 7);

            week++;
        }

        return week;
    }

    /**
     * 
     * @param d1
     * @param d2
     */
    public getSecondDiff(d1: Date, d2: Date): number {
        const from: Date = new Date(+d1 < +d2 ? d1 : d2);
        const to: Date = new Date(+d1 > +d2 ? d1 : d2);

        const diff: number = +to - +from;

        return diff / 1000;
    }

    /**
     * 
     * @param ignoreTime
     */
    public today(ignoreTime: boolean = true): Date {
        const date: Date = new Date();

        if (ignoreTime === true) {
            date.setHours(0, 0, 0, 0);
        }

        return date;
    }

    /**
     * 
     * @param ignoreTime
     */
    public tomorrow(ignoreTime: boolean = true): Date {
        const date: Date = new Date(this.today(ignoreTime));

        date.setDate(date.getDate() + 1);

        return date;
    }

    /**
     * 
     * @param date
     */
    public toJSONLocal(date: Date): string {
        if (!date) {
            return null;
        }

        return this._datePipe.transform(date, this.PATTERN);
    }

    /**
     * 
     * @param ignoreTime
     */
    public yesterday(ignoreTime: boolean = true): Date {
        const date: Date = new Date(this.today(ignoreTime));

        date.setDate(date.getDate() - 1);

        return date;
    }

    /******************************************************** PRIVATE ********************************************************/

    /**
     * 
     * @param value
     */
    private _isIso8601(value: any): boolean {
        if (value === null || value === undefined) {
            return false;
        }

        return this.ISO8601.test(value) || this.ISDATE.test(value);
    }
}