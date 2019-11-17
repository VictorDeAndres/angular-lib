import { Input } from '@angular/core';

import * as d3 from 'd3';
import { ProgressBar } from './iProgress-bar';
import { CircularGraphs } from './../shared/circular-graphs.class';
import { CircularMeasuresService } from '../shared/circular-measures.service';

export class ProgressBarGraph extends CircularGraphs {

  @Input() graphData: ProgressBar;

  private _graphElement;
  private _minSize: number;
  private _valueDegree: number;

  constructor() {
    super();
  }

  get graphElement() {
    return this._graphElement;
  }

  set graphElement(graphelement) {
    this._graphElement = graphelement;
  }

  set minSize(minsize) {
    this._minSize = minsize;
  }

  set valueDegree(valuedegree) {
    this._valueDegree = valuedegree;
  }




  /**
   * foregroundCircle
   *
   * Draw Foreground circle
   */
  foregroundCircle(): void {
    const currenData = {
      radius: this._minSize / 2,
      startAngle: 2,
      endAngle: 0,
      color: this.graphData.color || '#fc4c02',
      opacity: 0.2
    };

    this.drawCircle(currenData, this._graphElement);
  }




  /**
   * _drawProgressBar
   *
   * Draw the progress bar
   */
  progressBar(): void {
    const currenData = {
      radius: this._minSize / 2,
      startAngle: this._valueDegree / 180,
      endAngle: 0,
      color: this.graphData.color || '#fc4c02',
    };

    this.drawCircle(currenData, this._graphElement);
  }




  /**
   * _appendText
   *
   * Append the value of percentage in center of circle.
   */
  appendText(): void {

    const textGraph = this._graphElement.svgContainer
      .append('text')
      .attr('font-size', `${this._minSize / 5}px`)
      .attr('font-family', 'Arial')
      .attr('font-weight', '800')
      .style('fill', this.graphData.color || 'red')
      .text(`${this.graphData.value.toFixed(0)}%`);

    // Size of text element.
    const heightText = textGraph.node().getBoundingClientRect().height;
    const widthText = textGraph.node().getBoundingClientRect().width;

    // Move text to center
    textGraph
      .attr('x', ( this._graphElement.width / 2 ) - ( widthText / 2))
      .attr('y', ( this._graphElement.height / 2 ) + ( heightText / 4));
  }
}
