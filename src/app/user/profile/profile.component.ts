import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from 'src/app/common/toastr.service';
import { AuthService } from '../auth.service';

interface IFormValues {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  mouseOverSave = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit(): void {
    const firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
    ]);

    const lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName,
      lastName,
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues: IFormValues) {
    if (this.profileForm.valid) {
      const { firstName, lastName } = formValues;

      this.authService.updateCurrentUser(firstName, lastName);

      this.toastr.success('Profile saved')
    }
  }
}
