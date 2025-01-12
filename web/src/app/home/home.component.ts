import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as internal from 'assert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public students: Student[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Student[]>(baseUrl + 'students').subscribe(result => {
      this.students = result;
    }, error => console.error(error));
  }
}

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  major: string;
  avgGrade: number;
}