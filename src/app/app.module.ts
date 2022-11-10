import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReminderComponent } from './reminder/reminder.component';
import { AddReminderComponent } from './reminder/add-reminder/add-reminder.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,ReminderComponent,AddReminderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
