import { CalendarEvent } from '@sfpd/ng-ui';

export interface ICalculationOutput {
    errors: string[];
    totalDays;
    totalBankHolidays: number;
    totalExtensions: number;
    totalWorked: number;
    totalLeaves: number;
    calculatedEndDate: Date;
    extensions: IJustification[];
    missings: IJustification[];
    startDate: Date;
    endDate: Date;
    alerts: IAlertDay[];
}

export interface IAlertDay {
    date: Date;
    code: string;

}
export interface IJustification {
    date: Date;
    codes: ILeaveType[];
}

export interface IBankHoliday {
    date: Date;
}

export interface IExtensionCalendarEvent extends CalendarEvent {
    title?: string;
    type: string;
}

export interface ILeaveType {
    code: string;
    description?: string;
    isExtending: boolean;
    isExtendingBetweenHolidays: boolean;
    isAlerting:boolean;
}