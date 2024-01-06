import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[NumberService,StringService]
})
export class ChildComponent {
  public resultNumber : String = "";
  public resultString : number = 0;
  constructor(objNumer : NumberService,objString : StringService){
    this.resultNumber = objNumer.chkPrime(2);
    this.resultString = objString.CountCapital("Marvellous Infosystem");
  }
}
