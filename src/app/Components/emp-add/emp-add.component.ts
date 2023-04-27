import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {

  url: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addUserForm = new FormGroup({
    fname: new FormControl(''),
    mname: new FormControl(''),
    lname: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    department: new FormControl(''),
    position: new FormControl(''),
    PAN: new FormControl(''),
    aadhar: new FormControl(''),
    companyLocation: new FormControl(''),
    DOB: new FormControl(''),
    joiningDate: new FormControl(''),
    gender: new FormControl(''),
  });

  formData() {
    this.http.post('https://socet-project-default-rtdb.firebaseio.com/users.json', this.addUserForm.value)
    console.log(this.addUserForm.value)
  }

}
