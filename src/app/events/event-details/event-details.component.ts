import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../event.model';
import { EventsService } from '../events.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  options = ['all', 'beginner', 'intermediate', 'advanced'];

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.eventsService.getEvent(+this.route.snapshot.params.id)!;
  }

  get filteredSessions() {
    return (
      this.event?.sessions.filter((session) =>
        this.filterBy === 'all'
          ? true
          : session.level.toLowerCase() === this.filterBy
      ) || []
    );
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    const newSession = { id: uuidv4(), ...session };
    this.event.sessions.push(session);
    this.eventsService.updateEvent(this.event);
    this.addMode = false;
  }
}
