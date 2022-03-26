import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
    {path: '', component: TasksComponent} 
  ]) ],
  declarations: [ AppComponent, HelloComponent,TasksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
