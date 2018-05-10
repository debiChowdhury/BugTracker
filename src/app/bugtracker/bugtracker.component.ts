import {
  Component,
  OnInit
} from '@angular/core';
import * as moment from 'moment';
import {
  Router
} from '@angular/router';
import {
  BugDetailsComponent
} from '../bug-details/bug-details.component';

@Component({
  selector: 'app-bugtracker',
  templateUrl: './bugtracker.component.html',
  styleUrls: ['./bugtracker.component.css']
})
export class BugtrackerComponent implements OnInit {
  bugName: any = '';
  bugList: any = [];
  newBug: any;
  existingBugs = [];
  closedBug = 0;
  closed = 0;
  storedBugs;
  bugSortBy = 'name';
  bugSortDescendingOrder = false;
  hoveredBug;

  constructor(private router: Router) {}

  ngOnInit() {
    this.storedBugs = JSON.parse(localStorage.getItem('bugList'));
    if (this.storedBugs) {
      this.bugList = this.storedBugs;
    }
  }

  onNewBugCreated(value) {
    if (value.name) {
      this.bugList.push(value);
      localStorage.setItem('bugList', JSON.stringify(this.bugList));
    }
  }

  toggleBug(value) {
    // event.stopPropagation();
    // e.preventDefault();
    value.isClosed = !value.isClosed;
    this.closedBug = (value.isClosed ? this.closedBug += 1 : this.closedBug -= 1);
  }

  removeClosedBugs() {
    this.bugList = this.bugList.filter(bug => !bug.isClosed);
    this.closedBug = 0;
    localStorage.setItem('bugList', JSON.stringify(this.bugList));
  }
  showBugDetails(event, bug) {
    //  event.stopPropagation();
    //  event.preventDefault();
    console.log('clicking on  li', bug, event.target);
    this.router.navigate(['/details/', {
      id: bug.id
    }]);
  }
  showButton(bug) {
    this.hoveredBug = bug;
    this.hoveredBug.showBtn = true;
  }

  hideButton() {
    // this.hoveredBug = bug;
    this.hoveredBug.showBtn = false;
  }

  removeBug(bug) {
    const index = this.bugList.indexOf(bug);
    this.bugList.splice(index, 1);
    localStorage.setItem('bugList', JSON.stringify(this.bugList));
  }
}
