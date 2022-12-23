import { Injector } from '@angular/core';

// @dynamic
export class AppInjector {

  private static injector: Injector;

  static setInjector(inject: Injector) {
    AppInjector.injector = inject;
  }

  static getInjector(): Injector {
    return AppInjector.injector;
  }
}
