import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoguserComponent } from './loguser/loguser.component';
import { LogempComponent } from './logemp/logemp.component';
import { RegisterComponent } from './register/register.component';
import { EmphomeComponent } from './emphome/emphome.component';
import { DelaccComponent } from './delacc/delacc.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustlistofaccsComponent } from './custlistofaccs/custlistofaccs.component';
import { CustfundtransferComponent } from './custfundtransfer/custfundtransfer.component';
import { CusttranshistoryComponent } from './custtranshistory/custtranshistory.component';
import { FundTransferSameaccComponent } from './fund-transfer-sameacc/fund-transfer-sameacc.component';
import { FundTransferOtheraccComponent } from './fund-transfer-otheracc/fund-transfer-otheracc.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    HelpComponent,
    NotFoundComponent,
    LoguserComponent,
    LogempComponent,
    RegisterComponent,
    EmphomeComponent,
    DelaccComponent,
    CustomerDashboardComponent,
    CustlistofaccsComponent,
    CustfundtransferComponent,
    CusttranshistoryComponent,
    FundTransferSameaccComponent,
    FundTransferOtheraccComponent,
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SidebarModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'home',
        component:HomeComponent,
        children:[
          {
            path:'logemp',
            component:LogempComponent
          },
          {
            path:'loguser',
            component:LoguserComponent
          }

        ]
      },
      {
        path:'services',
        component:ServicesComponent
      },
      {
        path:'help',
        component:HelpComponent
      },      
      {
        path:'emphome',
        component:EmphomeComponent,
      },
          {
            path:'register',
            component:RegisterComponent
          },
          {
            path:'deleteaccount',
            component:DelaccComponent
          },
      
      {
        path:'customer-dashboard',
        component:CustomerDashboardComponent,
        children:[
          {
            path:'custfundtransfer',
            component:CustfundtransferComponent,
            children:[
              {
                path:'fund-transfer-sameacc',
                component:FundTransferSameaccComponent
              },
              {
                path:'fund-transfer-otheracc',
                component:FundTransferOtheraccComponent
              }
            ]
          },
          {
            path:'custlistofaccs',
            component:CustlistofaccsComponent
          },
          {
            path:'custtranshistory',
            component:CusttranshistoryComponent
          }
        ]
      },
      {
        path:'**',
        component:NotFoundComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
