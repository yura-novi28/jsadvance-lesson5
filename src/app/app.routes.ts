import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserListComponent } from './works/user-list/user-list.component';
import { TaskListComponent } from './works/task-list/task-list.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent 
    },
    {
        path: 'works',
        component: WorksComponent,
        children: [
            {
                path: 'cenzor',
                component: CenzorComponent
            },
            {
                path: 'userList',
                component: UserListComponent
            },
            {
                path: 'taskList',
                component: TaskListComponent
            }
        ]
    }
];
