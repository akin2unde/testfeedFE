import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { AES, enc, mode, pad } from "crypto-js";

export class Util {
    static appSecreteKey= 'tsdNG001RN#@_5';
     static  encode(plainText:string):string
     {
       let key = enc.Utf8.parse(Util.appSecreteKey);
       let encryptedBytes = AES.encrypt(plainText, key, {mode: mode.ECB, padding: pad.Pkcs7});
       let encryptedString = encryptedBytes.toString();
       return encryptedString;
     }
     static getSvg(name:string,isImage:boolean)
     {
       let iconPath: string = "../../assets/icons/";
       let imagePath: string = "../../assets/images/";
       return isImage?imagePath+name:iconPath+name;
     }
}
export function validMail(): ValidatorFn 
{
  const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = EMAIL_REGEXP.test(control.value);

    if (isValid) {
      return null;
    } else {
      return {validMail: false};
    }
  };
}

export function required(): ValidatorFn {  
  return (control: AbstractControl): { [key: string]: any } | null =>  
      control.value ? null : {required: true};
}
export function noLeadTrailSpace(): ValidatorFn { 
  return (control: AbstractControl): { [key: string]: any } | null =>  
     !control.value || (!control.value.startsWith(' ') && !control.value.endsWith(' ')) ? null : { 'noLeadTrailSpace': true };
}
export function minLength(length:number): ValidatorFn { 
  return (control: AbstractControl): { [key: string]: any } | null =>  
  {
    const isValid = !control.value || control.value.length>=length;
    return isValid ? null : { 'minLength': true };
  }
}
export function maxLength(length:number): ValidatorFn { 
  return (control: AbstractControl): { [key: string]: any } | null =>  
  {
    const isValid = !control.value || control.value.length<=length;
    return isValid ? null : { 'maxLength': false };
  }
}