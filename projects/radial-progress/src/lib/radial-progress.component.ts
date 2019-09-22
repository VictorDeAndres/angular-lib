import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { D3Container } from 'common-library';
import { RadialProgressValidate } from './radial-progress.validate';
import { IProgressBar } from './model/iProgressBar';

@Component({
  selector: 'ngl-radial-progress',
  template: ``,
  styles: [],
  providers: [RadialProgressValidate]
})
export class RadialProgressComponent implements OnInit {

  @Input() graphData: IProgressBar;

  private _d3Container: D3Container;

  constructor(
    private elementRef: ElementRef,
    private radialProgressValidate: RadialProgressValidate
  ) { }

  ngOnInit() {
    // Validate data
    this.radialProgressValidate.validateData(this.graphData);
    // Create D3 Container
    this._d3Container = new D3Container(this.elementRef);
  }

}
