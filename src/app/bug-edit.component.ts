import { Component,Output,EventEmitter } from '@angular/core';
import * as moment from 'moment';


@Component({
    selector: 'app-bug-edit',
    template:`<section class="edit" style="position:relative;">
	<label for="" style="font-size: 25px;vertical-align: middle;">Bug Name :</label>
	<input class ="bug-name-input"type="text" name="bugName" id="bugName" [(ngModel)]="bugName">
	<input class='add-new-btn' type="button" value="Create New" (click)="addNewBugs($event)">
</section>`
})
export class BugEditComponent {
    @Output()
    bugCreated: EventEmitter<any> = new EventEmitter();
    bugName: string;
    bugId: number = 0;
    
    addNewBugs(val) {
        this.bugId += 1;
        let newBug = {
            name: this.bugName,
            createdTime: moment().format('LLLL'),
            isClosed: false,
            id: 'bug' + this.bugId
        };
        this.bugCreated.emit(newBug);
        this.bugName = '';
       
    }
 
}
