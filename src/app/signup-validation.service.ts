import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupValidationService {
strongN : any ;
strongL : any ;
strongU : any ;

  constructor() { }
  public numstrong(control: FormControl) {
    let hasNumber = /\d/.test(control.value);
    const valid = hasNumber ;
    if (!valid) {
        // return what´s not valid
        return { strongN: true };
    }
    return null;
  }
  public upstrong(control: FormControl) {
    let hasUpper = /[A-Z]/.test(control.value);
    const valid = hasUpper ;
    if (!valid) {
        // return what´s not valid
        return { strongU: true };
    }
    return null;
  }
  public lowstrong(control: FormControl) {
   let hasLower = /[a-z]/.test(control.value);
    const valid = hasLower ;
    if (!valid) {
        // return what´s not valid
        return { strongL: true };
    }
    return null;
  }

}
