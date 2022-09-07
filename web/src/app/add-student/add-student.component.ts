import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { idText } from 'typescript';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
public message = "";

  constructor() { }

  ngOnInit() {
  }

  submit(form: NgForm) {

    console.log("Form Submitted!");

    console.log(form.value); 
    var valid = true;

    // Add validation here

    // If validation passess
    if(valid) {

      var idNum = form.value.idnum;
      var fname = form.value.firstname;
      var lname = form.value.lastname;
      var email = form.value.email;
      var major = form.value.major;
      var avg = form.value.average;

     var student: Student;
     student = {
      id: idNum,
      firstName: fname,
      lastName: lname,
      email: email,
      major: major,
      avgGrade: avg
    }

      console.log(student);

      // Make API Call to add student

      this.message = "Form was submitted";

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