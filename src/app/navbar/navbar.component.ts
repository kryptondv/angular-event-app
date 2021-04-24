import { Component } from '@angular/core';
import { ISession } from '../events';
import { EventsService } from '../events/events.service';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchTerm: string = '';
  foundSessions: ISession[];
  modalId="sessions-modal";

  constructor(
    private authService: AuthService,
    private eventService: EventsService
  ) {}

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  get userName(): string {
    return this.authService.currentUser.firstName;
  }

  searchSessions(): void {
    this.eventService.searchSessions(this.searchTerm).subscribe((sessions: ISession[]) => {
      this.foundSessions = sessions;
    });
  }
}
