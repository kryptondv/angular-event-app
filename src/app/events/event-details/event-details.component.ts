import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private eventsService: EventsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.eventsService.getEvent(+this.route.snapshot.params.id);
  }

}
