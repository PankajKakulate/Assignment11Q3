import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public chkPrime(value:number):string{
    let resultString: string="";
    let cnt=2;
    while(cnt<value){
      if(value%cnt!=0)
      cnt++;
    else{
      
      break;
    }
    }
    if(cnt==value){
      resultString="prime";
    }else{
      resultString="not prime";
    }
    return resultString;
  }
}
