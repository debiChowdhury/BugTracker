import { Component } from '@angular/core';    
import * as moment from 'moment';          

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bugName: any ='';
  bugList: any = [];
  newBug: any;
  existingBugs = [];
  closedBug = 0;
  closed =0;
  
  bugSortBy: string = 'name';
  bugSortDescendingOrder: boolean = false;
  
  onNewBugCreated(value) {
    this.bugList.push(value);
  }
  
 toggleBug(value) {
   value.isClosed = !value.isClosed;
   console.log(value);
   this.closedBug = (value.isClosed ? this.closedBug += 1 : this.closedBug -= 1);
 }
  
 removeClosedBugs() {
   this.bugList = this.bugList.filter(bug => !bug.isClosed); 
   this.closedBug = 0;

 }
}
