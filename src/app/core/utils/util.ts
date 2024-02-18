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