import { Component, Input, OnInit } from '@angular/core';
import { ISession } from '../../event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: ISession[];
  constructor() { }

  ngOnInit(): void {
  }

}
