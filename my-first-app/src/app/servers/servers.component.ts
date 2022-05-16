import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  servers = ['TestServer1', 'TestServer2'];

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetServerStatus() {
    this.serverName = 'TestServer';
    this.serverCreationStatus = 'No server was created!';
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    setTimeout(this.resetServerStatus.bind(this), 2000);
  }

  ngOnInit(): void {}
}
