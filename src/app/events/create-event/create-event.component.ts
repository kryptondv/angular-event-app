import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../event.model';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;

  constructor(private router: Router, private eventService: EventsService) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues: IEvent) {
    this.eventService.saveEvent(formValues);
  }
}
