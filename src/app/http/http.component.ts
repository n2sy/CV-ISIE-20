import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  link = 'https://jsonplaceholder.typjbjkjkicode.com/users';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.link).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("That's all !");
      }
    );
  }
}
