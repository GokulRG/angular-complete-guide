import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.css'],
})
export class ShowHideComponent implements OnInit {
  shouldShow = true;
  clicks = [];

  constructor() {}

  ngOnInit(): void {}

  toggleDisplay() {
    this.shouldShow = !this.shouldShow;
    this.clicks.push(this.shouldShow ? 'Shown' : 'Hidden');
  }

  getColor(index) {
    return index >= 5 ? 'blue' : '';
  }
}
