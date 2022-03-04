import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import UserService from './UserService';
import { NextExampleComponent } from './next-example/next-example.component';
import { Observable } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    NextExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
