import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [ChildComponent, CommonModule, FormsModule], 
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  public valueInput: string = '';
  public arrTasks: Array<ITask> = [];
  

  addButton() {
    if (this.valueInput !== '') {
      this.arrTasks.push({ text: this.valueInput, done: false });
      this.valueInput = '';
    }
  }
}

export interface ITask {
  text: string;
  done: boolean;
}
