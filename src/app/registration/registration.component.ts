import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  signinData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  // users: any = {}
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\\.([a-zA-Z]{2,5})$'),
    ]),
    // password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{8,}'
      ),
    ]),
    // confirmPassword: new FormControl('',[Validators.required]),
  });

  constructor(privatefrombuilders: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    // console.warn(this.profileForm.value.firstName);
    const f = localStorage.getItem('users');
    // console.log(f);
    const users = f ? JSON.parse(f) : [];
    // console.log(users);

    const existed = users.find((u: any) => u.email === this.profileForm.value.email);

    if (!existed) {
      users.push({
        fName: this.profileForm.value.firstName,
        lName: this.profileForm.value.lastName,
        email: this.profileForm.value.email,
        password: this.profileForm.value.password,
      });
      alert('thankyou for registration');
    } else {
      alert('user alredy exits');
    }

    localStorage.setItem('users', JSON.stringify(users));
  }

}