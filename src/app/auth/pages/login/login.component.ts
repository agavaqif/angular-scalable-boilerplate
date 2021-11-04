import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Sample Validation
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
        // Validators.pattern(
        //   "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
        // )
      ])
      });
  }

  onLogin(): void {
    // console.log(this.loginForm.value);
    this.submitted = true;
    console.log(this.loginForm.controls.password.errors)
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.authService.logIn();
    }
  }

  get formControls() {
    return this.loginForm.controls;
  }

}
