import { Injectable } from '@angular/core';
import { Shape } from './Shape';

@Injectable({
  providedIn: 'root'
})
export class SquareService implements Shape{

  constructor() { }


  draw() {
      console.log("Inside Square::draw() method.");
    }

  }
