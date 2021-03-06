import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: IUser;

  constructor() {}

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'John',
      lastName: 'Wayne',
    };
  }

  get isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
