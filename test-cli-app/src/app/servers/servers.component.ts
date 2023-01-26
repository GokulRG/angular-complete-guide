import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServers = false;
  serverCreationStatus = "No server was created!";
  latestServerName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 3000);
  }

  onAddServerClicked() {
    this.serverCreationStatus = `New Server Created with name ${this.latestServerName}!`;
    const newServer = document.createElement("app-server");
    //newServer.innerHTML = '<app-server></app-server>';
    let serverContainer = document.querySelector('.servers-container');
    serverContainer?.appendChild(newServer);
    setTimeout(() => {
      this.serverCreationStatus = "No server was created!";
      const inputElement = document.getElementById('server-name') as HTMLInputElement;
      inputElement!.value = "";
    }, 2000);
  }

  // onServerNameChange(event: any) {
  //   this.latestServerName = event?.target?.value;
  // }
}
