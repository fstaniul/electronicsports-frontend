import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faSignInAlt, faKey, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  singInForm: FormGroup;

  userIcon = faUser;
  passwordIcon = faKey;
  signInIcon = faSignInAlt;
  resetPasswordIcon = faKey;

  passwordType = 'password';
  showPasswordIcon = faEye;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.singInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  showPassword() {
    this.showPasswordIcon = faEyeSlash;
    this.passwordType = 'text';
  }

  hidePassword() {
    this.showPasswordIcon = faEye;
    this.passwordType = 'password';
  }
}
