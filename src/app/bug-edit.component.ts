import { Component,Output,EventEmitter } from '@angular/core';
import * as moment from 'moment';


@Component({
    selector: 'app-bug-edit',
    template:`<section class="edit">
	<label for="">Bug Name :</label>
	<input type="text" name="bugName" id="bugName" [(ngModel)]="bugName">
	<input type="button" value="Create New" (click)="addNewBugs($event)">
</section>`
})
export class BugEditComponent {
    @Output()
    bugCreated: EventEmitter<any> = new EventEmitter();
    bugName: string;

    
    addNewBugs(val) {
        let newBug = {
            name: this.bugName,
            createdTime: moment().format('LLLL'),
            isClosed: false
        };
        this.bugCreated.emit(newBug);
        this.bugName = '';
       
    }
 
}
