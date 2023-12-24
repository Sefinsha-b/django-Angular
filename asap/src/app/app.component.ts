import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// title": "5678",
//     "description
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '';
  description: string = '';

  constructor(private http: HttpClient) {}

  makePostRequest() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    const postData = {
      title: this.title,
      description: this.description,
    };

    // Example POST request
    this.http.post('http://127.0.0.1:8000/geeks1/', postData, httpOptions)
      .subscribe(response => {
        console.log(response);
        // Handle the response as needed (e.g., redirect, show a message, etc.)
      });
  }
}
