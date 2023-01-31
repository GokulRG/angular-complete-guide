import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServers = false;
  serverCreationStatus = "";
  latestServerName = '';
  servers: string[] = [];

  constructor() {
    this.servers.push('Test Server 1', 'Test Server 2');
    setTimeout(() => {
      this.allowNewServers = true;
    }, 3000);
  }

  onAddServerClicked() {
    this.servers.push(this.latestServerName);
    this.serverCreationStatus = `New Server Created with name ${this.latestServerName}!`;
  }

  // onServerNameChange(event: any) {
  //   this.latestServerName = event?.target?.value;
  // }
}
