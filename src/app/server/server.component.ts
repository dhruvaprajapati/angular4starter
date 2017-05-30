/**
 * Created by dhruv on 30-05-2017.
 */
import { Component } from '@angular/core';
// Decorator
@Component({
  selector : 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
  color: white;
  }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
