import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupValidationService } from 'src/app/signup-validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  constructor(private formBuilder : FormBuilder , private validator : SignupValidationService ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName:['',[ Validators.required, Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      pwd:['', [Validators.required,Validators.minLength(8),
        this.validator.numstrong,this.validator.lowstrong,this.validator.upstrong]],
      pwdConfirm:['']
    })
  }
  signup(){
    console.log('Signed up' , this.signupForm.value)
  }

}
