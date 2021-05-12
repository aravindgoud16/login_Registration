import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show = false;
  loginform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\\.([a-zA-Z]{2,5})$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{8,}'
      ),
    ]),
  });

  constructor(public userService: UsersService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.userService.onSubmit(this.loginform);
  }
}
