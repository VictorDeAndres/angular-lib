import { Input } from '@angular/core';

import * as d3 from 'd3';
import { Doughnut } from './iDoughnut';
import { CircularGraphs } from '../shared/circular-graphs.class';
import { Colors } from '@ng-library/common-library';

export abstract class DoughnutGraph extends CircularGraphs {

  @Input() graphData: Doughnut;

  protected graphElement;
  protected minSize: number;
  protected segmentsDegree: Array<number>;

  constructor() {
    super();
  }


  /**
   * scaleData
   *
   * Convert the data values to array of values in percentage scale
   * @param data array of values
   * @returns Array
   */
  scaleData(data: Array<number>): Array<number> {
    const sumData = data.reduce( (prev, curr) => {
      return prev + curr;
    });

    const interValue = d3.scaleLinear()
      .domain([0, sumData])
      .range([0, 100]);

    return data.map( value => interValue(value));
  }



  /**
   * checkGraphDataColors
   *
   *
   * Check if the number of colors is the same in the values. If it is different, it generates a random color palette
   * @returns Doughnut['colors']
   */
  checkGraphDataColors(): Doughnut['colors'] {
    const colors = new Colors();
    return this.graphData.colors
      ? this.graphData.colors.length === this.graphData.values.length
        ? this.graphData.colors
        : [...this.graphData.colors, ...colors.generateRandomPallete(this.graphData.values.length - this.graphData.colors.length || 0 )]
      : colors.generateRandomPallete(this.graphData.values.length);
  }




  /**
   * drawSegment
   *
   * Draw circular segment
   */
  drawSegment(startAngle: number, endAngle: number, idx: number): void {
    const currenData = {
      radius: this.minSize / 2,
      startAngle,
      endAngle,
      color: this.graphData.colors[idx],
      padding: this.graphData.padding
    };

    this.drawCircle(currenData, this.graphElement);
  }




  /**
   * _appendText
   *
   * Append the value of percentage in center of circle.
   */
  appendText(): void {

    // const textGraph = this.graphElement.svgContainer
    //   .append('text')
    //   .attr('font-size', `${this.minSize / 5}px`)
    //   .attr('font-family', 'Arial')
    //   .attr('font-weight', '800')
    //   .style('fill', this.graphData.color || 'red')
    //   .text(`${this.graphData.value.toFixed(0)}%`);

    // // Size of text element.
    // const heightText = textGraph.node().getBoundingClientRect().height;
    // const widthText = textGraph.node().getBoundingClientRect().width;

    // // Move text to center
    // textGraph
    //   .attr('x', ( this.graphElement.width / 2 ) - ( widthText / 2))
    //   .attr('y', ( this.graphElement.height / 2 ) + ( heightText / 4));
  }
}
