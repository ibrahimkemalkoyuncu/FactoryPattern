import { Injectable } from '@angular/core';
import { Shape } from './Shape';

@Injectable({
  providedIn: 'root'
})
export class CircleService  implements Shape{

  constructor() { }


  draw() {
      console.log("Inside Circle::draw() method.");
    }

  }
