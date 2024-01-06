import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public CountCapital(value:string):number{
    let result:number=0;
    for(var iCnt=0;iCnt<value.length;iCnt++){
      if(value[iCnt]>="A" && value[iCnt]<="Z")
      result++;
    }
    return result;
  }
}
