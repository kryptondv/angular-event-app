import { Injectable } from '@angular/core';
import { ISession } from '../event.model';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
  constructor() {}

  deleteVoter(session: ISession, userName: string): void {
    session.voters = session.voters.filter((voter) => voter !== userName);
  }

  addVoter(session: ISession, userName: string): void {
    session.voters.push(userName);
  }

  userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.includes(userName);
  }
}
