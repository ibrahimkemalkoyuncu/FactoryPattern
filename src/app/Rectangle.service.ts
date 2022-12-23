import { Injectable } from '@angular/core';
import { Shape } from './Shape';

@Injectable({
  providedIn: 'root'
})
export class RectangleService implements Shape{

constructor() { }


draw() {
    console.log("Inside Rectangle::draw() method.");
  }

}
