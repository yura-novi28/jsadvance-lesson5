import { Component } from '@angular/core';
import { CenzorComponent } from "./cenzor/cenzor.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { UserListComponent } from "./user-list/user-list.component";
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-works',
  imports: [CenzorComponent, TaskListComponent, UserListComponent, RouterModule, RouterOutlet],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {

}
