
import { RadialProgressValidate } from './radial-progress.validate';
import { ERROR_MESSAGES } from './model/errorMessages';

const testClass = new RadialProgressValidate();

describe('Test passing values to radial progress', () => {
  describe('Test value', () => {

    test('Value must exits', () => {
      const data = {};
      expect(() => {
        testClass.validateData(data);
      }).toThrow(ERROR_MESSAGES[0]);

    });

    test('Error value is number', () => {
      const data = {
        value: 'A'
      };
      expect(() => {
        testClass.validateData(data);
      }).toThrow(ERROR_MESSAGES[0]);
    });

    test('Error value is greater than 100', () => {
      const data = {
        value: 110
      };
      expect(() => {
        testClass.validateData(data);
      }).toThrow(ERROR_MESSAGES[1]);
    });

    test('Error value is lower than 0', () => {
      const data = {
        value: -23
      };
      expect(() => {
        testClass.validateData(data);
      }).toThrow(ERROR_MESSAGES[1]);
    });
  });

  describe('Test styles', () => {

    test('Error color must be a string', () => {
      const data = {
        style: {
          color: 1
        }
      };
      expect(() => {
        testClass.validateStyle(data);
      }).toThrow(ERROR_MESSAGES[2]);
    });

    test('Error fontColor must be a string', () => {
      const data = {
        style: {
          fontColor: 1
        }
      };
      expect(() => {
        testClass.validateStyle(data);
      }).toThrow(ERROR_MESSAGES[3]);
    });

    test('Error lineWith must be a string', () => {
      const data = {
        style: {
          lineWith: 'A',
        }
      };
      expect(() => {
        testClass.validateStyle(data);
      }).toThrow(ERROR_MESSAGES[4]);
    });

    test('Error lineWith is bigger than radius', () => {
      const data = {
        style: {
          lineWith: 60,
        }
      };
      expect(() => {
        testClass.validateStyle(data, 50);
      }).toThrow(ERROR_MESSAGES[5]);
    });

  });

});

