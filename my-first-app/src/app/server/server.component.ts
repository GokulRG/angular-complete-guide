import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  id: number = 1000;
  status: string = 'Online';

  getServerStatus(): string {
    return this.status;
  }
}
