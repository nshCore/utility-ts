import escapeStringRegexp from 'escape-string-regexp';
import { InvalidNumberError } from './exceptions/invalidNumber.exception';
import { INumberHelperOptionsInterface } from './interfaces/INumberHelperOptions';

export class NumberHelper {
  public static parseFormattedNumber(value: string | number, options?: INumberHelperOptionsInterface): number {

    if (value === null || typeof value === 'undefined' || value === '') {
      throw new InvalidNumberError('Number is null or undefined');
    }

    const numberOptions: INumberHelperOptionsInterface = {
      decimal: '.',
    };

    if (options !== undefined) {
      Object.assign(numberOptions, options);
    }

    if (value === null) {
      return Number.NaN;
    }

    if (typeof value === 'number' && isFinite(value)) {
      return value;
    }

    // eslint-disable-next-line require-unicode-regexp
    const sanitize = new RegExp(`[^\\d\\-${escapeStringRegexp(numberOptions.decimal)}]*`, 'g');

    const unformatted = value
      .toString()
      .replace(sanitize, '')
      .replace(numberOptions.decimal, '.');

    if (!unformatted) {
      return Number.NaN;
    }

    return Number(unformatted).valueOf();
  }

  public static getNumberWithCommas(num: number | string): string {
    // eslint-disable-next-line require-unicode-regexp
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
