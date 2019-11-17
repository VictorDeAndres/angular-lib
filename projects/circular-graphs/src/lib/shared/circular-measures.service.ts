import * as d3 from 'd3';

export class CircularMeasuresService {

  constructor() { }

  /**
   * calcMinSize
   *
   * Calculate the minimum size between the height and width of the container element
   * with this value i will calculate the radius of progress bar.
   *
   * @param value value to represent
   * @returns number
   */
  calcMinSize(width: number, height: number): number {
    return width > height
      ? height
      : width;
  }




  /**
   * arcValue
   *
   * Calculate the arc to show.
   * Convert the pass value into a number that represent the degrees in a circle
   *
   * @param value value to represent
   * @returns number
   */
  arcValue(value: number): number {
    const interValue = d3.scaleLinear()
      .domain([0, 100])
      .range([0, 360]);

    return interValue(value);
  }

}
