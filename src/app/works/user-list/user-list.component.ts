import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule], 
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  public arrUsers: Array<IUser> = [];
  public loginValue: string = '';
  public passwordValue: string = '';
  public emailValue: string = '';
  public loginValueCheck = false;
  public passwordValueCheck = false;
  public emailValueCheck = false;
  public indexUser!: number;
  public checkButtonDelete = false;
  public checkButtonEdit = false;


  addUser(){
    if(this.loginValue.trim() === '' || this.passwordValue.trim() === '' || this.emailValue.trim() === ''){
      this.loginValueCheck = true;
      this.passwordValueCheck = true;
      this.emailValueCheck = true;
    }
    else{
      this.loginValueCheck = false;
      this.passwordValueCheck = false;
      this.emailValueCheck = false;
      let obj: IUser = {
        login: this.loginValue,
        password: this.passwordValue,
        email: this.emailValue
      }
      this.arrUsers.push(obj);
      this.loginValue = '';
      this.passwordValue = '';
      this.emailValue = '';
    }
  }
  deleteUser(i: number){
    this.arrUsers.splice(i, 1);
  }
  editUser(i: number){
    this.indexUser = i;
    this.loginValue = this.arrUsers[i].login;
    this.passwordValue = this.arrUsers[i].password;
    this.emailValue = this.arrUsers[i].email;
    this.checkButtonDelete = true;
    this.checkButtonEdit = true;

  }
  editUserSave(){
    this.arrUsers[this.indexUser].login = this.loginValue;
    this.arrUsers[this.indexUser].password = this.passwordValue;
    this.arrUsers[this.indexUser].email = this.emailValue;
    this.loginValue = '';
    this.passwordValue = '';
    this.emailValue = '';
    this.checkButtonDelete = false;
    this.checkButtonEdit = false;
  }
}

interface IUser {
  login: string;
  password: string;
  email: string;
}