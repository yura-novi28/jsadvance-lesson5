import { Component, Input } from '@angular/core';
import { ITask } from '../task-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() arrTasks: Array<ITask> = [];
  public inputEdit: string = '';
  public arrBoolean: Array<boolean> = [];
  public editCheck = false;
  public editIndex!: number;

  deleteTask(index: number) {
    this.arrTasks.splice(index, 1);
  }
  editTask(index: number) {
    this.editIndex = index;
    this.inputEdit = this.arrTasks[index].text;
    this.arrTasks.forEach((item, i) => { 
      this.arrBoolean[i] = item.done;
      item.done = false;
    })
    this.editCheck = true;
  }
  editTaskSave() {
    this.arrTasks[this.editIndex].text = this.inputEdit;
    this.editCheck = false;
    this.arrTasks.forEach((item, i) => { 
      item.done = this.arrBoolean[i];
    })
  }
}
