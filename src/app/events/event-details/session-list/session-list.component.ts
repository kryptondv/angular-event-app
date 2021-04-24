import { Component, Input } from '@angular/core';
import { ISession } from '../../event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent {
  @Input() sessions: ISession[];
}
