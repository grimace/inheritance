import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { LoggingService } from '../logging.service';
import { AppInjector } from '../injector.service';

@Component({
  selector: 'app-base',
  template: `
    <p>
      base works!
    </p>
  `,
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  baseItems: Array<any> = [];
  appService: AppService;
  loggingService: LoggingService;
  // constructor() { }
  selector = 'base_id';

  ngOnInit(): void {
  }

  constructor() {

       const injector = AppInjector.getInjector();
       this.appService = injector.get(AppService);
       this.loggingService = injector.get(LoggingService);
       this.logNavigation();
   }

   protected logError(errorMessage: string) {
     this.loggingService.log('error',errorMessage);
   }
   private logNavigation() {
     this.loggingService.log('info','navigated to BaseComponent');
   }

   getSelector() {
     console.log('base getSelector()');
     return this.selector;
   }
}
