import { Component, OnInit, ElementRef } from '@angular/core';
import { D3Container } from 'common-library';

@Component({
  selector: 'ngl-radial-progress',
  template: `
    <p>
      radial-progress works!
    </p>
  `,
  styles: []
})
export class RadialProgressComponent implements OnInit {

  private _d3Container: D3Container;

  constructor(
    public elementRef: ElementRef
  ) { }

  ngOnInit() {
    // Create D3 Container
    this._d3Container = new D3Container(this.elementRef);
    console.info(this._d3Container);
  }

}
