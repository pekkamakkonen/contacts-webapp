import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactService} from './contact/services/contact.service';
import {ContactHttpService} from './contact/services/contact-http.service';
import {HttpClientModule} from '@angular/common/http';
import {ContactDetailComponent} from './contact/contact-detail/contact-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialComponentsModule} from './ui/material-components/material-components.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AvatarModule} from 'ng2-avatar';
import {TextToColorPipe} from './contact/pipes/text-to-color.pipe';
import {NgPipesModule} from 'ngx-pipes';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';
import {ToolbarService} from './ui/toolbar/toolbar.service';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/new', component: ContactDetailComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    TextToColorPipe,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MaterialComponentsModule,
    FlexLayoutModule,
    AvatarModule.forRoot(),
    NgPipesModule
  ],
  providers: [
    ContactService,
    ContactHttpService,
    ToolbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
