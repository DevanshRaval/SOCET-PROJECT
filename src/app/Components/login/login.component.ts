import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    hrEmpSelection: new FormControl('',Validators.required  ),
    name: new FormControl('',Validators.required  ),
    password: new FormControl('',Validators.required  )
  });

  submit() {
    console.log(this.loginForm.value)
    if(this.loginForm.value.hrEmpSelection ==='hr'){
      this.router.navigate(['admin-homepage'])
    }
    else{
      this.router.navigateByUrl('home')
    }
  }


}
