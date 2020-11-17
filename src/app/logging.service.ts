import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  public log(level, message) {
      console.log(level, message);
  }
}
