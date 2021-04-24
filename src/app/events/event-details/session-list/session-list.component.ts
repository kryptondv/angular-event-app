import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { ISession } from '../../event.model';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent {
  @Input() sessions: ISession[];

  constructor(
    private authService: AuthService,
    private voterService: VoterService
  ) {}

  toggleVote(session: ISession) {
    const userName = this.authService.currentUser.userName;
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, userName);
    } else {
      this.voterService.addVoter(session, userName);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(
      session,
      this.authService.currentUser.userName
    );
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }
}
