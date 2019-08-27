import * as d3 from 'd3';
import { ChartsElement } from './charts-element';
import { ElementRef } from '@angular/core';

interface WrapperDimension {
  height: number;
  width: number;
}

interface WrapperPadding {
  horizontal: number;
  vertical: number;
}

interface Axis {
  id: string;
  element: any;
  axis: string;
  dimension: WrapperDimension;
  padding: WrapperPadding;
  domain: Array<any>;
  range: Array<number>;
  scaleband: string;
  guides: boolean;
  ticks: number;
  rotate?: boolean;
  fontSize?: number;
}

export class ChartsAxis extends ChartsElement {

  private _axis: Axis;
  private _x;
  private _y;
  private _horizontalRange: Array<number>;
  private _verticalRange: Array<number>;

  constructor(
    _elementRef: ElementRef
  ) {
    super(_elementRef);
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get horizontalRange(): Array<number> {
    return this._horizontalRange;
  }

  get verticalRange(): Array<number> {
    return this._verticalRange;
  }
  /**
   * generateAxis
   * Generate all needed data for building axis, and draw it.
   * @param axisParameters.  Building parameters
   * @returns void
   */
  public generateAxis(axisParameters: Axis): void {

    // Check padding
    if ( !axisParameters.padding ) {
      axisParameters.padding = {
        horizontal: 10,
        vertical: 10
      };
    } else {
      axisParameters.padding.horizontal = !axisParameters.padding.horizontal ? 10 : axisParameters.padding.horizontal;
      axisParameters.padding.vertical = !axisParameters.padding.vertical ? 10 : axisParameters.padding.vertical;
    }

    // eof check padding

    this._axis = {
      id: this.uid,
      axis: axisParameters.axis,
      element : this.svgContainer,
      dimension: {
        height: this.height,
        width: this.width
      },
      padding: {
        horizontal: axisParameters.padding.horizontal,
        vertical: axisParameters.padding.vertical
      },
      domain: axisParameters.domain,
      range: axisParameters.axis === 'x'
        ? [axisParameters.padding.horizontal, this.width - 10 ]
        : [10 , this.height - axisParameters.padding.vertical],
      scaleband: axisParameters.scaleband,
      guides: axisParameters.guides,
      ticks: axisParameters.ticks ? axisParameters.ticks : 9,
      rotate: axisParameters.rotate ? axisParameters.rotate : false,
      fontSize: axisParameters.fontSize ? axisParameters.fontSize : 8,
    };

    axisParameters.axis === 'x' ? this.GenerateXAxis() : this.GenerateYAxis();
    axisParameters.axis === 'x'
      ? this._horizontalRange = [axisParameters.padding.horizontal, this.width - 10 ]
      : this._verticalRange = [10 , this.height - axisParameters.padding.vertical];
  }

  /**
   *
   * X Axis
   *
   */

  /**
   * GenerateXAxis
   * Generate X Axis.
   * Allow types: 'Linear', 'Band' or 'Steps'
   * @returns void
   */
  public GenerateXAxis(): void {
    this._x = null;
    switch ( this._axis.scaleband ) {
      case 'linear':
        this._x = d3.scaleLinear()
          .domain(this._axis.domain)         // This is what is written on the Axis: from 0 to 100
          .range(this._axis.range);
        this.drawXAxis(this._x);
        break;
      case 'band':
        this._x = d3.scaleBand()
          .domain(this._axis.domain)         // This is what is written on the Axis: from 0 to 100
          .range(this._axis.range);
        this.drawXAxis(this._x);
        break;
      case 'steps':
        this.drawXAxisSteps();
        break;
      default:
        throw new Error('Error2');
    }

    if ( this._axis.guides ) {
      this.drawVerticalGuide();
    }

  }

  /**
   * drawXAxisSteps
   * Draw X Axis Steps, draw labels between ticks.
   * @returns void
   */
  private drawXAxisSteps(): void {

    drawTicks.call(this);
    drawLabels.call(this);

    function drawTicks() {
      const axisTicks  = d3.scaleLinear()
        .domain([0, this._axis.domain.length])
        .range(this._axis.range);

      const xAxis = d3.axisBottom(axisTicks)
        .ticks(this._axis.domain.length)
        .tickFormat( '' );

      this._axis.element
        .append('g')
        .attr('class', `horizontal-ticks-${this._axis.id}`)
        .style('color', '#a9b1bc')
        .style('stroke', '#646c77')
        .style('font-size', `${this._axis.fontSize}px`)
        .attr('transform', `translate(0,${this._axis.dimension.height - this._axis.padding.vertical})`)
        .call(xAxis);
    }

    function drawLabels() {
      const axisLabels  = d3.scaleLinear()
        .domain([0, ( this._axis.domain.length * 2 )])
        .range(this._axis.range);

      const showLabels = [];
      for ( let idx = 1; idx < this._axis.domain.length * 2 ; idx = idx + 2 ) {
        showLabels.push(idx);
      }

      const xAxis = d3.axisBottom(axisLabels)
        .tickValues(showLabels)
        .tickFormat( ( data, index ) => this._axis.domain[index] )
        .tickSize(0);

      this._axis.element
        .append('g')
        .style('color', '#a9b1bc')
        .style('stroke', '#646c77')
        .style('font-size', `${this._axis.fontSize}px`)
        .attr('transform', `translate(0,${this._axis.dimension.height - this._axis.padding.vertical + 5})`)
        .call(xAxis)
        .select('.domain').remove();
      }
  }

  /**
   * drawXAxis
   * Draw linear or band axis.
   * @param axis. Data of axis
   * @returns void
   */
  private drawXAxis(axis): void {
    this._axis.element
      .append('g')
      .attr('class', `horizontal-ticks-${this._axis.id}`)
      .style('color', '#a9b1bc')
      .style('stroke', '#646c77')
      .style('font-size', `${this._axis.fontSize}px`)
      .attr('transform', `translate(0,${this._axis.dimension.height - this._axis.padding.vertical})`)
      .call(d3.axisBottom(axis)
        .ticks(this._axis.ticks))
      .selectAll('text')
        .attr('transform', `translate(${this._axis.rotate ? -10 : 0}, ${this._axis.rotate ? 5 : 0})rotate(${this._axis.rotate ? -45 : 0})`)
        .style('text-anchor', `${this._axis.rotate ? 'end' : 'middle'}`);
  }

  /**
   * drawVerticalGuide
   * if enabled dwar vertical guides.
   * @returns void
   */
  private drawVerticalGuide(): void {
    if ( this._axis.scaleband === 'linear' || this._axis.scaleband === 'steps' ) {
      let guideTicks = null;
      let gTicks = null;

      switch ( this._axis.scaleband ) {
        case 'linear':
          guideTicks = d3.scaleLinear()
            .domain(this._axis.domain)         // This is what is written on the Axis: from 0 to 100
            .range(this._axis.range);

          gTicks = d3.axisBottom(guideTicks)
            .ticks( document.getElementsByClassName(`horizontal-ticks-${this._axis.id}`)[0].childElementCount - 1)
            .tickSize(-this._axis.dimension.height + this._axis.padding.vertical + 10)
            .tickFormat( '' );
          break;

        case 'steps':
          guideTicks  = d3.scaleLinear()
            .domain([0, this._axis.domain.length])
            .range(this._axis.range);

          gTicks = d3.axisBottom(guideTicks)
            .ticks(this._axis.domain.length)
            .tickSize(-this._axis.dimension.height + this._axis.padding.vertical + 10 )
            .tickFormat( '' );
          break;

        default:
          throw new Error('Error2');
        }

      this._axis.element
        .append('g')
        .style('color', '#e5e8ec')
        .attr('transform', `translate(0,${this._axis.dimension.height - this._axis.padding.vertical})`)
        .call(gTicks)
        .select('.domain').remove();
    }
  }

  /**
   *
   * Y Axis
   *
   */

  /**
   * GenerateXAxis
   * Generate X Axis.
   * Allow types: 'Linear', 'Band'.
   * @returns void
   */
  private GenerateYAxis(): void {

    this._y = null;
    switch ( this._axis.scaleband ) {
      case 'linear':
        this._y = d3.scaleLinear()
          .domain(this._axis.domain.reverse())         // This is what is written on the Axis: from 0 to 100
          .range(this._axis.range);
        this.drawYAxis(this._y);
        break;
      case 'band':
        this._y = d3.scaleBand()
          .domain(this._axis.domain)         // This is what is written on the Axis: from 0 to 100
          .range(this._axis.range);
        this.drawYAxis(this._y);
        break;
      default:
        throw new Error('Error2');

    }

    if ( this._axis.guides) {
      this.drawHorizontalGuide();
    }

  }

  /**
   * drawYAxis
   * Draw linear or band axis.
   * @param axis. Data of axis
   * @returns void
   */
  private drawYAxis(axis) {
    this._axis.element
      .append('g')
      .attr('class', `vertical-ticks-${this._axis.id}`)
      .style('color', '#a9b1bc')
      .style('stroke', '#646c77')
      .style('font-size', `${this._axis.fontSize}px`)
      .attr('transform', `translate(${this._axis.padding.horizontal}, 0)`)      // This controls the vertical position of the Axis
      .call(d3.axisLeft(axis)
        .ticks(this._axis.ticks));
  }

  /**
   * drawHorizontalGuide
   * if enabled draw horizontal guides.
   * @returns void
   */
  private drawHorizontalGuide() {

    let guideTicks = null;
    let gTicks = null;

    switch ( this._axis.scaleband ) {
      case 'linear':
        guideTicks = d3.scaleLinear()
          .domain(this._axis.domain)         // This is what is written on the Axis: from 0 to 100
          .range(this._axis.range);

        gTicks = d3.axisLeft(guideTicks)
          .ticks( document.getElementsByClassName(`vertical-ticks-${this._axis.id}`)[0].childElementCount - 1)
          .tickSize( -this._axis.dimension.width + this._axis.padding.horizontal + 10)
          .tickFormat( '' );
        break;
      default:
        throw new Error('Error2');
    }

    this._axis.element
      .append('g')
      .style('color', '#e5e8ec')
      .attr('transform', `translate(${this._axis.padding.horizontal}, 0)`)      // This controls the vertical position of the Axis
      .call(gTicks)
      .select('.domain').remove();
  }

}
