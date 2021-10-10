import { FormControl } from "@angular/forms";

export interface ValidationResult {
    [key: string]: boolean;
}

export class PasswordValidator {

    public static numstrong(control: FormControl): ValidationResult {
        let hasNumber = /\d/.test(control.value);
        const valid = hasNumber ;
        if (!valid) {
            // return what´s not valid
            return { strong: true };
        }
        return null;
    }
    public static upstrong(control: FormControl): ValidationResult {
        let hasUpper = /[A-Z]/.test(control.value);
        const valid = hasUpper ;
        if (!valid) {
            // return what´s not valid
            return { strong: true };
        }
        return null;
    }public static lowstrong(control: FormControl): ValidationResult {
       let hasLower = /[a-z]/.test(control.value);
        const valid = hasLower ;
        if (!valid) {
            // return what´s not valid
            return { strong: true };
        }
        return null;
    }
}
