
import { ERROR_MESSAGES } from './model/errorMessages';

export class RadialProgressValidate {

  constructor() {}

  /**
   * validateData
   *
   * Validate receveid data
   * @param inputData Received data
   * @returns void
   */
  validateData(inputData: any): void {

    // Check if the value exists and is a number
    if ( !inputData.value || typeof inputData.value !== 'number' ) {
      throw new Error(ERROR_MESSAGES[0]);
    }

    // Check if the value is between 0 and 100
    if ( inputData.value < 0 || inputData.value > 100 ) {
      throw new Error(ERROR_MESSAGES[1]);
    }
  }

  /**
   * validateStyle
   *
   * Validate the style received. The styles are not required
   * @param  inputData Received styles
   * @returns void
   */
  validateStyle(inputData: any, radius: number = 0): void {

    // Check color is string
    if ( inputData.style.color && typeof inputData.style.color !== 'string' ) {
      throw new Error(ERROR_MESSAGES[2]);
    }

    // Check fontColor is string
    if ( inputData.style.fontColor && typeof inputData.style.fontColor !== 'string' ) {
      throw new Error(ERROR_MESSAGES[3]);
    }

    // Check lineWith is number
    if ( typeof inputData.style.lineWith && typeof inputData.style.lineWith !== 'number' ) {
      throw new Error(ERROR_MESSAGES[4]);
    }

    if ( inputData.style.lineWith > radius ) {
      throw new Error(ERROR_MESSAGES[5]);
    }
  }

}
