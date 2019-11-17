import { Component, ElementRef } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';

import * as d3 from 'd3';
import { WrapperComponentD3 } from '@ng-library/common-library';

import { CircularMeasuresService } from '../shared/circular-measures.service';
import { ProgressBarGraph } from './progress-bar-graph.class';

@Component({
  selector: 'ngl-radial-progress-bar',
  template: ``,
  styles: [],
  providers: [
    CircularMeasuresService
  ]
})
export class RadialProgressBarComponent extends ProgressBarGraph implements OnChanges  {

  currentElementId: string;

  constructor(
    public elementRef: ElementRef,
    private circularMeasuresService: CircularMeasuresService
  ) {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {

    // Remove previous graphs
    if ( changes.graphData.previousValue ) {
      d3.select(`#svg-${this.currentElementId}`).remove();
    }

    this.graphElement = new WrapperComponentD3(this.elementRef);
    this.currentElementId = this.graphElement.uid;

    this.minSize = this.circularMeasuresService.calcMinSize(this.graphElement.width, this.graphElement.height);
    this.valueDegree = this.circularMeasuresService.arcValue(this.graphData.value);

    this.foregroundCircle.call(this);
    this.progressBar.call(this);

    if ( this.graphData.showValue ) {
      this.appendText.call(this);
    }
  }

}
