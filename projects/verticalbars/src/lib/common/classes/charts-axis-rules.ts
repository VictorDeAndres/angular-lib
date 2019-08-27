export interface IAxisInfo {
  min: number;
  max: number;
  scaleband: string;
  guides?: boolean;
  ticks?: number;
  rotate?: boolean;
  fontSize?: number;
}

export interface Padding {
  horizontal: number;
  vertical: number;
}

export interface IAxis {
  padding?: Padding;
  x?: IAxisInfo;
  y?: IAxisInfo;
}

export interface IChartData {
  axis?: IAxis;
  domain: Array<any>;
  values: Array<number>;
}

export class ChartsAxisRules  {

  constructor() {}

  /**
   * chekDomainHas2ValuesAtLeast
   *
   * Check domain has 2 values at least.
   * @param domain. Domain, labels of axis
   * @returns boolean
   */
  public chekDomainHas2ValuesAtLeast(domain: Array<any>): boolean {
    return domain.length > 1 ? true : false;
  }

  /**
   * chekValuesHasAtLeastSameLengthDomain
   *
   * Check that number of values are at last the same than domain.
   * @param values. Values to represent
   * @param domain. Label of axis
   * @returns boolean
   */
  public chekValuesHasAtLeastSameLengthDomain(values: Array<number>, domain: Array<any>): boolean {
    return values.length >= domain.length ? true : false;
  }

}
