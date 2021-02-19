import { LOCALE_ID, NgModule } from '@angular/core';
import {  HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { ButtonModule, CalendarModule, DatePickerModule, FormModule, NG_UI_TRANSLATOR, SwitchModule, TabModule, TooltipModule } from '@sfpd/ng-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { TranslationsService } from './services/translation.service';
import localeFr from '@angular/common/locales/fr';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { BankHolidaysComponent } from './components/bank-holidays/bank-holidays.component';
import { OpenComponent } from './components/open/open.component';
import { LeaveTypesService } from './services/leave-types.service';
import { LeaveTypesComponent } from './components/leave-types/leave-types.component';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { AuthInterceptor } from './services/auth.interceptor';


require.context('../assets/img', true);
registerLocaleData(localeFr);

@NgModule({
    declarations: [AppComponent, HomeComponent, SimulatorComponent, BankHolidaysComponent, LeaveTypesComponent, OpenComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormModule,
        DatePickerModule,
        FileUploadModule,
        BrowserAnimationsModule,
        ButtonModule,
        HttpClientModule,
        CommonModule,
        CalendarModule,
        SwitchModule,
        TabModule,
        TooltipModule,
        OAuthModule.forRoot({
            resourceServer: {
                sendAccessToken: true
            }
        })
    ],
    providers: [HttpClient, DatePipe,
        {
            provide: LOCALE_ID,
            useValue: 'fr'
        },
        {
            provide: NG_UI_TRANSLATOR,
            useClass: TranslationsService
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        { provide: OAuthStorage, useValue: sessionStorage },
    ],
    exports: [AppRoutingModule],
    bootstrap: [AppComponent]
})
export class AppModule { }


