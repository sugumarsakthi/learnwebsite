import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginform!: FormGroup;
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router){}
  ngOnInit(){   
    this.loginform = new FormGroup({
      'loginemail': new FormControl ('',[Validators.required,Validators.email]),
      'loginpassword':new FormControl ('',Validators.required),
    });
    this.registerForm = new FormGroup({
      'regusername':new FormControl ('',Validators.required),
      'regmail': new FormControl ('',[Validators.required,Validators.email]),
      'regpass':new FormControl ('',Validators.required),
      'regconfirmpass':new FormControl ('',Validators.required),
    })
  }
  loginpage(){
  }
  signuppage(){
    this.router.navigate(['/home']);
  }
  onsubmit(){
    this.submitted = true;
    this.router.navigate(['/home']);
    console.log(this.loginform);
  }
  registersubmit(){
    this.submitted = true;
    this.router.navigate(['/home']);
    console.log(this.registerForm);
  }
 
}
