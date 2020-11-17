import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { ChildComponent } from './child/child.component';

import { AppInjector } from './injector.service';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    console.log('setting injector : ',injector);
    AppInjector.setInjector(injector);
  };
}
