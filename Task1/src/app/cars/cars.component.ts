import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{

  cars:any[]
  flag:boolean

  constructor()
  {
    this.flag = false
    this.cars = [
      {
        make : 'Bugatti',
        model : 'Veryon',
        year : 2017
      },

      {
        make : 'Ferrari',
        model : 'GTO 296',
        year : 2019
      },

      {
        make : 'Porsche',
        model : 'Taycan',
        year : 2014
      },

      {
        make : 'Lamborghini',
        model : 'Gallardo',
        year : 2020
      }
    ]
  }

  public getCars(){
    return this.cars
  }

  public toggleMe()
  {
    this.flag = !this.flag
  }
  ngOnInit(): void {   }

}
