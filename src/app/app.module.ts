import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrimTextPipe } from './pipes/trim-text-pipes';
import { SortPipe } from './pipes/sort-pipes';
import { AppComponent } from './app.component';
import { BugEditComponent } from './bug-edit.component';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    TrimTextPipe,
    SortPipe,
    BugEditComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
