import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultSection = 'dsen';
  myComment = 'Rien à signaler';
  invalide = false;
  constructor(private loginServ: LoginService, private router: Router) {}

  ngOnInit(): void {}

  login(identifiants) {
    this.loginServ.seConnecter(identifiants.value).subscribe(
      (response) => {
        localStorage.setItem('token', response['token']);
        this.router.navigateByUrl('/cv');
        this.invalide = false;
      },
      (error) => {
        this.invalide = true;
        console.log(error);
      }
    );
  }

  // showForm(f) {
  //   console.log(f);
  // }

  // resetForm(f) {
  //   f.reset();
  // }

  // generatePwd(f) {
  //   f.setValue({
  //     "example": "",
  //     "identifiants": {
  //       "email": "",
  //       "password": "generatedPassword123"
  //     },
  //     "section": "",
  //     "comment": ""
  //   })
  // }

  // pwdGen(f) {
  //   f.form.patchValue({
  //     "identifiants" : {
  //       "password": "generatedPassword456"
  //     }

  //   })
  // }
}
