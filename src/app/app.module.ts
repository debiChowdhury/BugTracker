import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrimTextPipe } from './pipes/trim-text-pipes';
import { SortPipe } from './pipes/sort-pipes';
import { AppComponent } from './app.component';
import { BugEditComponent } from './bug-edit.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BugDetailsComponent } from './bug-details/bug-details.component';
import { BugtrackerComponent } from './bugtracker/bugtracker.component';



@NgModule({
  declarations: [
    AppComponent,
    TrimTextPipe,
    SortPipe,
    BugEditComponent,
    BugDetailsComponent,
    BugtrackerComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      'path': '', component: BugtrackerComponent
    }, {
      'path':':id',component:BugDetailsComponent  
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
