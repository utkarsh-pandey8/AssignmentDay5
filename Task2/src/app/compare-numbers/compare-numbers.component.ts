import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-numbers',
  templateUrl: './compare-numbers.component.html',
  styleUrls: ['./compare-numbers.component.css']
})
export class CompareNumbersComponent implements OnInit {

  x:number
  y:number

  constructor(){
    this.x = 100
    this.y = 200
  }

  public getX():number{
    return this.x
  }
  public getY():number{
    return this.y
  }
  
  ngOnInit(): void {
    
  }
}
