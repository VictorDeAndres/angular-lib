import { Input } from '@angular/core';

import * as d3 from 'd3';
import { ProgressBar } from './iProgress-bar';
import { CircularGraphs } from './../shared/circular-graphs.class';

export abstract class ProgressBarGraph extends CircularGraphs {

  @Input() graphData: ProgressBar;

  protected graphElement;
  protected minSize: number;
  protected valueDegree: number;

  constructor() {
    super();
  }


  /**
   * foregroundCircle
   *
   * Draw Foreground circle
   */
  foregroundCircle(): void {
    const currenData = {
      id: `${this.graphElement.uid}__foreground`,
      radius: this.minSize / 2,
      startAngle: 0,
      endAngle: 360,
      color: this.graphData.color || '#fc4c02',
      opacity: 0.2,
      padding: false
    };

    this.drawCircle(currenData, this.graphElement);
  }



  /**
   * _drawProgressBar
   *
   * Draw the progress bar
   */
  progressBar(): void {
    const currenData = {
      id: `${this.graphElement.uid}__progress`,
      radius: this.minSize / 2,
      startAngle: 0,
      endAngle: this.valueDegree,
      color: this.graphData.color || '#fc4c02',
      padding: false
    };

    this.drawCircle(currenData, this.graphElement);
  }




  /**
   * _appendText
   *
   * Append the value of percentage in center of circle.
   */
  appendText(): void {

    const textGraph = this.graphElement.svgContainer
      .append('text')
      .attr('font-size', `${this.minSize / 5}px`)
      .attr('font-family', 'Arial')
      .attr('font-weight', '800')
      .style('fill', this.graphData.color || '#fc4c02')
      .text(`${this.graphData.value.toFixed(0)}%`);

    // Size of text element.
    const heightText = textGraph.node().getBoundingClientRect().height;
    const widthText = textGraph.node().getBoundingClientRect().width;

    // Move text to center
    textGraph
      .attr('x', ( this.graphElement.width / 2 ) - ( widthText / 2))
      .attr('y', ( this.graphElement.height / 2 ) + ( heightText / 4));
  }
}
