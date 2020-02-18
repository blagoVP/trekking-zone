import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatch(c: AbstractControl): ValidationErrors{
  console.log(c.value.password);
return c.value.password === c.value.rePassword && c.value.password !== null ? null : {passwordMatch: true}
}
