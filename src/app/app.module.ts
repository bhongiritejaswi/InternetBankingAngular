import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoguserComponent } from './loguser/loguser.component';
import { LogempComponent } from './logemp/logemp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    HelpComponent,
    NotFoundComponent,
    LoguserComponent,
    LogempComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
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
        path:'logemp',
        component:LogempComponent
      },
      {
        path:'loguser',
        component:LoguserComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
