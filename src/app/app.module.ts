import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddLogFormComponent } from './components/add-log-form/add-log-form.component';
import { LogsComponent } from './components/logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddLogFormComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
