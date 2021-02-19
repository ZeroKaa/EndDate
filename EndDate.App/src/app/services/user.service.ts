import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root',
})
export class UserService {

    public currentUser: IUser = null;
   
}


export interface IUser {
     email: string;
}





