import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './errors/error404/error404.component';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
} from './events';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  CollapsibleWellComponent,
  DurationPipe,
  Toastr,
  TOASTR_TOKEN,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective 
} from './common';

declare let toastr: Toastr;
declare let $: any;

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: $ },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
