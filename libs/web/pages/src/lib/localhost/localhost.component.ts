import { Component } from '@angular/core';

@Component({
  selector: 'home-page-localhost',
  templateUrl: './localhost.component.html',
  styleUrls: ['./localhost.component.scss'],
})
export class LocalhostComponent {
  port = 3000

  get localhostUrl() {
    return `http://localhost:${this.port}`
  }
}
