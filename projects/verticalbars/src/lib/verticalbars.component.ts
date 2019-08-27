import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ChartsAxisRules, IChartData} from './common/classes/charts-axis-rules';
import { ChartsAxis } from './common/classes/charts-axis';

import * as d3 from 'd3';

@Component({
  selector: 'ngl-verticalbars',
  template: ``,
  providers: [ ChartsAxisRules ]
})
export class VerticalbarsComponent implements OnInit {

  @Input() graphData: IChartData;

  // tslint:disable-next-line: variable-name
  private _graphElement;
  // tslint:disable-next-line: variable-name
  private _x;
  // tslint:disable-next-line: variable-name
  private _y;

  constructor(
    public wchartAxisRules: ChartsAxisRules,
    public elementRef: ElementRef
  ) { }


  ngOnInit() {
    // this.checkValues(this.graphData);
    this._graphElement = new ChartsAxis(this.elementRef);

    // Draw x axys if exits data
    if ( this.graphData.axis && this.graphData.axis.x ) {
      this._graphElement.generateAxis(this.generateAxisObject('x', this.graphData));
    }

    // Draw y axys if exits data
    if ( this.graphData.axis && this.graphData.axis.y ) {
      this._graphElement.generateAxis(this.generateAxisObject('y', this.graphData));
    }

    if ( this.graphData.values.length === 1 ) {
      this.drawBars.call(this);
    } else {
      this.drawMultipleBars.call(this);
    }
  }

  /**
   * checkValues
   * check the pass values before generate object to draw the graph.
   * @returns void
   */
  checkValues(graphData: IChartData): void {
    // Rules
    if ( typeof graphData.domain !== 'object' ) {
      throw new Error('Domain must be an array.');
    }

    if ( !this.wchartAxisRules.chekDomainHas2ValuesAtLeast(graphData.domain) ) {
      throw new Error('Domain must have 2 values at least.');
    }

    if ( typeof graphData.values !== 'object' ) {
      throw new Error('Values must be an array.');
    }

    if ( !this.wchartAxisRules.chekValuesHasAtLeastSameLengthDomain(graphData.values, graphData.domain) ) {
      throw new Error('The length of values are greater or equal than length of domain.');
    }
  }

  /**
   * generateAxisObject
   * Generate axis object. If axis is y modify domain with min and max values.
   * @param axis. Axis to draw
   * @param graphData. The data to draw.
   * @returns object
   */
  generateAxisObject(axis: string, graphData): object {
    const drawAxis = graphData.axis[axis];
    drawAxis.axis = axis;
    // At y axis change domain values, and remove min and max properties
    if ( axis === 'x' ) {
      drawAxis.domain  = graphData.domain;
    } else {
      drawAxis.domain = [graphData.axis[axis].min, graphData.axis[axis].max];
      delete drawAxis.min;
      delete drawAxis.max;
    }
    // Add padding if exists
    if ( graphData.axis.padding ) {
      drawAxis.padding = graphData.axis.padding;
    }
    return drawAxis;
  }

  /**
   * drawBars
   * Draw vertical bars.
   * @returns void
   */
  drawBars(): void {
    // Get constant values for draw bars
    const x = this._graphElement.x;
    const y = this._graphElement.y;
    const height = this._graphElement.height;
    const paddingBottom = this.graphData.axis && this.graphData.axis.padding && this.graphData.axis.padding.vertical
      ? this.graphData.axis.padding.vertical
      : 10;

    // Draw vertical bars.
    this._graphElement.svgContainer
      .selectAll('.bar')
        .data(this.graphData.values[0])
      .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d, idx) => x(this.graphData.domain[idx]) + 2) // Add 2 pixel to x position. Padding between bars
        .attr('width', x.bandwidth() - 4) // Rest 4 pixel to width. Padding between bars
        .attr('y', (d) => y(d))
        .attr('height', (d) => height - paddingBottom - y(d))
        .style('fill', '#fc4c02');
  }

  /**
   * drawMultipleBars
   * Draw multiple vertical bars.
   * @returns void
   */
  drawMultipleBars(): void {
    // Mix data values.
    const data = this.MixData(this.graphData.values);

    // Generate new x domain / range.
    const x =  d3.scaleLinear()
      .domain([0, data.length])         // This is what is written on the Axis: from 0 to 100
      .range(this._graphElement.horizontalRange);

    // Get constant values for draw bars
    const y = this._graphElement.y;
    const height = this._graphElement.height;
    const paddingBottom = this.graphData.axis && this.graphData.axis.padding && this.graphData.axis.padding.vertical
      ? this.graphData.axis.padding.vertical
      : 10;
    // Calculate with of stack.
    // Subtract the min value for horizontal range from max value and divide between number of values.
    // Also subtract 4 for padding between bars.
    const width = (( this._graphElement.horizontalRange[1] - this._graphElement.horizontalRange[0] ) / data.length ) - 4;
    // Draw vertical bars.
    this._graphElement.svgContainer
      .selectAll('.bar')
        .data(data)
      .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d, idx) => x(idx) + 2)
        .attr('width', width)
        .attr('y', (d) => y(d))
        .attr('height', (d) => height - paddingBottom - y(d))
        .style('fill', '#fc4c02');
  }

  /**
   * MixData
   * Mix data arrays in one array to visualize.
   * @param  dataArrays. Arrays of data.
   * @returns Array
   */
  MixData(dataArrays): Array<number> {
    const lenghtSeries = dataArrays[0].length;
    const dataArray = [];
    for ( let idx = 0; idx < lenghtSeries; idx++ ) {
      // tslint:disable-next-line: prefer-for-of
      for ( let subIdx = 0; subIdx < dataArrays.length; subIdx++) {
        dataArray.push(dataArrays[subIdx][idx]);
      }
    }
    return dataArray;
  }

}

