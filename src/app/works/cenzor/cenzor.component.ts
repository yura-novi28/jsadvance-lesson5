import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cenzor',
  imports: [FormsModule, RouterModule, RouterOutlet, CommonModule],
  templateUrl: './cenzor.component.html',
  styleUrl: './cenzor.component.scss'
})
export class CenzorComponent {
  public arrBadWords: Array<string> = [];
  public inputPlace = 'word here..'
  public areaPlace = 'text here..'
  public inputValue = '';
  public areaValue = '';
  public checkBooleanInput = false;
  public checkBooleanArea = false;
  
  buttonAdd() {
    if(this.inputValue.trim() === '') {
      this.checkBooleanInput = true;
      this.inputPlace = 'Please write a word!';
    }
    else{
      this.checkBooleanInput = false;
      this.inputPlace = 'word here..';
      this.arrBadWords.push(this.inputValue);
      this.inputValue = '';
    }
    this.arrBadWords.push(this.inputValue)
  }
  buttonCenzor() {
    if(this.areaValue.trim() === '') {
      this.checkBooleanArea = true;
      this.areaPlace = 'Please write a text!';
    }
    else{
      this.checkBooleanArea = false;
      this.areaPlace = 'text here..';
      let arr = this.areaValue.split(' ');
      arr.map((word, i) => {
        if(this.arrBadWords.includes(word)) {
          arr[i] = '*'.repeat(word.length);
        }
      })
      this.areaValue = arr.join(' ');
    }
  }
  resetButton(){
    this.arrBadWords = [];
    this.inputPlace = 'word here..'
    this.areaPlace = 'text here..'
    this.inputValue = '';
    this.areaValue = '';
    this.checkBooleanInput = false;
    this.checkBooleanArea = false;
  }
}
