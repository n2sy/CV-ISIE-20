import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  defaultSection = "dsen";
  myComment = "Rien à signaler"
  constructor() { }

  ngOnInit(): void {
  }

  showForm(f) {
    console.log(f.value);
  }

  resetForm(f) {
    f.reset();
  }

  generatePwd(f) {
    f.setValue({
      "example": "",
      "identifiants": {
        "email": "",
        "password": "generatedPassword123"
      },
      "section": "",
      "comment": ""
    })
  }

  generatePwdII(f : NgForm) {
    f.form.patchValue({
      "password": "generatedPassword456"
    })
  }

}
