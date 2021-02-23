import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankHolidaysComponent } from './components/bank-holidays/bank-holidays.component';
import { HomeComponent } from './components/home/home.component';
import { LeaveTypesComponent } from './components/leave-types/leave-types.component';
import { OpenComponent } from './components/open/open.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { AuthGuardService } from './services/auth-gard.service';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'bank-holidays',
        component: BankHolidaysComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'leave-types',
        component: LeaveTypesComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'open',
        component: OpenComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'pdf',
        component: PdfComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
