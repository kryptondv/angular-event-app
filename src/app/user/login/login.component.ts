import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
interface IFormValues {
  userName: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  mouseOverLogin = false;

  constructor(private authService: AuthService) {}

  login(formValues: IFormValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
  }
}
