import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
public message = "";
public success = true;
public fname;
public lname;
public email;
public major;
public avg;
public baseUrl;
private http : HttpClient;

  constructor(http: HttpClient,@Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl =  baseUrl;
  }

  ngOnInit() {
  }

  submit(form: NgForm) {

    // Valid flag
    var valid = true;
    
    // Store values in shorter variables
    this.fname = form.value.firstname;
    this.lname = form.value.lastname;
    this.email = form.value.email;
    this.major = form.value.major;
    this.avg = form.value.average;

    // Add validation here
    // Check if all fields ahve been filled out
    if(this.fname === undefined || this.fname === "" ||
    this.lname === undefined || this.lname === "" ||
    this.email === undefined || this.email === "" ||
    this.major === undefined || this.major === "" ||
    this.avg === undefined || this.avg === "") {
      valid = false;
    }

    // if avg above 100, set it back to 100
    if(this.avg > 100) {
      this.avg = 100;
    }
    // if avg below 0, set to 0
    if(this.avg < 0) {
      this.avg = 0;
    }

    // If validation passess
    if(valid) {

     var student: Student;

     student = {
      id: 100, // Make this dynamic
      firstName: this.fname,
      lastName: this.lname,
      email: this.email,
      major: this.major,
      avgGrade: this.avg
    }

    // Make API Call to add student
    this.http.post<boolean>(this.baseUrl + 'students/add',student).subscribe(result => {
      console.log(result);
      this.success = result;
    }, error => console.error(error)); 

      if(this.success) {
        this.message = "Form was submitted";
      }
      else {
        this.message = "An error occured, please try again";
      }

    }
    else {
      // Error in validation
      this.message = "Please ensure all fields are filled out";
    }
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