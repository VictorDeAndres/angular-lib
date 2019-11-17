import * as d3 from 'd3';

import { CircularGraph } from './iCircular-graphs';

export class CircularGraphs {

  constructor() { }

  /**
   * drawCircle
   *
   * Draw Circle
   */
  drawCircle(data: CircularGraph, graphElement ): void {

    data = this.defaultValues(data);

    const circle = d3.arc()
      .innerRadius(data.radius * 3 / 5)
      .outerRadius(data.radius)
      .startAngle(data.startAngle * Math.PI )
      .endAngle(data.endAngle); // just radians

    graphElement.svgContainer
      .append('g')
        // Center of wrapper
        .attr('transform', `translate(${graphElement.width / 2}, ${graphElement.height / 2})`)
        .attr('id', 'centerRadiusGraph')
          .append('path')
          .attr('fill', data.color)
          .style('opacity', data.opacity)
          .attr('d', circle);
  }

  private defaultValues(data: CircularGraph) {
    data.opacity = !data.opacity ? 1 : data.opacity;
    return data;
  }
}
