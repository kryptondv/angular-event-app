import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
export class LoginComponent implements OnInit {
  mouseOverLogin = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login(formValues: IFormValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
  }
}
