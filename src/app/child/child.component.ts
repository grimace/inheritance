import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent extends BaseComponent implements OnInit {

  selector = 'child_id';

  constructor() {
    super();
  }

  ngOnInit(): void {
    // console.log('getSelector returns : ',this.getSelector());
  }

  ngAfterViewInit() {
    console.log('getSelector returns : ',this.getSelector());
  }

  getSelector() {
    return super.getSelector();
  }

}
