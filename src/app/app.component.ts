import { Component } from '@angular/core';
import { ShapeFactoryService } from './ShapeFactory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FactoryPattern';

  constructor(private shapeFactory: ShapeFactoryService) {


    let shapeDynamicServices = shapeFactory.getShape("CIRCLE");
    shapeDynamicServices.draw();

    shapeDynamicServices = shapeFactory.getShape('RECTANGLE');
    shapeDynamicServices.draw();

    shapeDynamicServices = shapeFactory.getShape('SQUARE');
    shapeDynamicServices.draw();
  }
}
