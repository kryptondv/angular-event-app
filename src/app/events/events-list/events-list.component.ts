import { Component, OnInit } from '@angular/core';
import { IEvent } from '../event.model';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  
  constructor(private eventsService: EventsService){}

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }
}
