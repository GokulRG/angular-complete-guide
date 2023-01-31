import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {

  showParagraph = false;
  buttonClicks:string[] = [];
  onButtonClick() {
    this.showParagraph = !this.showParagraph;
    this.buttonClicks.push(new Date().toString());
  }
}
