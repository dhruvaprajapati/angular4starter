/**
 * Created by dhruv on 30-05-2017.
 */
import { Component } from '@angular/core';
// Decorator
@Component({
  selector : 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
