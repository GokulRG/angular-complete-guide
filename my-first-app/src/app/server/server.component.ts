import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        background-color: green;
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  id: number = 1;
  status: string = 'Online';

  constructor() {
    this.status = Math.random() > 0.5 ? 'Online' : 'Offline';
    this.id = Math.ceil(Math.random() * 10000);
  }

  getServerStatus(): string {
    return this.status;
  }

  getColor() {
    return this.status === 'Online' ? '' : 'red';
  }
}
