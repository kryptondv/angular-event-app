import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/common/toastr.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventsService: EventsService, private toastrService: ToastrService){}

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

  handleThumbnailClick(name: string){
    this.toastrService.success(name);
  }
}
