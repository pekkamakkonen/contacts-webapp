import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import {ContactService} from './contact/services/contact.service';
import {ContactHttpService} from './contact/services/contact-http.service';
import {HttpClientModule} from '@angular/common/http';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialComponentsModule} from './ui/material-components/material-components.module';

const appRoutes: Routes =  [
  { path: 'contacts', component: ContactListComponent},
  { path: 'contacts/:id', component: ContactDetailComponent},
  { path: '', redirectTo: '/contacts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MaterialComponentsModule
  ],
  providers: [
    ContactService,
    ContactHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
