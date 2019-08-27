import { ChartsAxisRules, IChartData } from './charts-axis-rules';

const testClass = new ChartsAxisRules();

describe('ChartsAxisRules', () => {
  it('should create an instance', () => {
    expect(new ChartsAxisRules()).toBeTruthy();
  });

  describe('WChart requirements', () => {
    it('Domain has 2 values at least. Domain has one value', () => {
      const WChartData: IChartData = {
        domain: [1],
        values: [10, 100]
      };
      expect(
        testClass.chekDomainHas2ValuesAtLeast(WChartData.domain)
      ).toBeFalsy();
    });

    it('Domain has 2 values at least. Domain has two values', () => {
      const WChartData: IChartData = {
        domain: [1, 2],
        values: [10, 100]
      };
      expect(
        testClass.chekDomainHas2ValuesAtLeast(WChartData.domain)
      ).toBeTruthy();
    });

    it('Domain has 2 values at least. Domain has four values', () => {
      const WChartData: IChartData = {
        domain: [1, 2, 4, 10],
        values: [10, 100]
      };
      expect(
        testClass.chekDomainHas2ValuesAtLeast(WChartData.domain)
      ).toBeTruthy();
    });

    it('Check that number of values are at last the same than domain. Domain has 1 and values 2', () => {
      const WChartData: IChartData = {
        domain: [1],
        values: [10, 100]
      };
      expect(
        testClass.chekValuesHasAtLeastSameLengthDomain(WChartData.values, WChartData.domain)
      ).toBeTruthy();
    });

    it('Check that number of values are at last the same than domain. Domain has 2 and values 2', () => {
      const WChartData: IChartData = {
        domain: [1, 2],
        values: [10, 100]
      };
      expect(
        testClass.chekValuesHasAtLeastSameLengthDomain(WChartData.values, WChartData.domain)
      ).toBeTruthy();
    });

    it('Check that number of values are at last the same than domain. Domain has 4 and values 2', () => {
      const WChartData: IChartData = {
        domain: [1, 2, 4, 10],
        values: [10, 100]
      };
      expect(
        testClass.chekValuesHasAtLeastSameLengthDomain(WChartData.values, WChartData.domain)
      ).toBeFalsy();
    });
  });
});
