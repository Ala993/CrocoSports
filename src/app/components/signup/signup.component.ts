import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../validation-result';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName:['',[ Validators.required, Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      pwd:['', [Validators.required,Validators.minLength(8),
        PasswordValidator.numstrong,PasswordValidator.upstrong,PasswordValidator.lowstrong]],
      pwdConfirm:['',[]]
    })
  }
  signup(){
    console.log('Signed up' , this.signupForm.value)
  }

}
