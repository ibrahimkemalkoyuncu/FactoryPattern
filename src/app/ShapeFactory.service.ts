import { Injectable } from '@angular/core';
import { AppInjector } from './app-injector';
import { CircleService } from './Circle.service';
import { RectangleService } from './Rectangle.service';
import { Shape } from './Shape';
import { SquareService } from './Square.service';

@Injectable({
  providedIn: 'root',
})
export class ShapeFactoryService {
  constructor() {}

  public getShape(shapeType: string): any {

    if (shapeType == null) {
       return null;
    }

    let shape: any; // Sharp = null;

    if (shapeType === "CIRCLE") {
      shape = AppInjector.getInjector().get(CircleService);
    } else if (shapeType === "RECTANGLE") {
      shape = AppInjector.getInjector().get(RectangleService);
    } else if (shapeType ==="SQUARE") {
      shape = AppInjector.getInjector().get(SquareService);
    }

    return shape;
  }
}
