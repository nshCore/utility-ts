/* eslint-disable */
import { NumberHelper } from '../number.helper';

describe('NumberHelper', function (): void {
  it('should be defined', function (): void {
    expect(new NumberHelper()).toBeDefined();
  });

  describe('should throw if invalid number passed', function (): void {

    expect(() => NumberHelper.parseFormattedNumber('')).toThrowError();
    // @ts-ignore
    expect(() => NumberHelper.parseFormattedNumber(null)).toThrowError();
    // @ts-ignore
    expect(() => NumberHelper.parseFormattedNumber(undefined)).toThrowError();
  });

  it('returns a number when a number is passed', function (): void {
    expect(NumberHelper.parseFormattedNumber(123)).toBe(123);
    expect(NumberHelper.parseFormattedNumber(123.123456789)).toBe(123.123456789);
    expect(NumberHelper.parseFormattedNumber(0.123)).toBe(0.123);
    expect(NumberHelper.parseFormattedNumber(-123)).toBe(-123);
    expect(NumberHelper.parseFormattedNumber(-123.123456789)).toBe(-123.123456789);
    expect(NumberHelper.parseFormattedNumber(-0.123)).toBe(-0.123);
    expect(NumberHelper.parseFormattedNumber(0)).toBe(0);
  });

  it('returns a number when a string is passed', function (): void {
    expect(NumberHelper.parseFormattedNumber('123')).toBe(123);
    expect(NumberHelper.parseFormattedNumber('123.45')).toBe(123.45);
    expect(NumberHelper.parseFormattedNumber('123.123456789')).toBe(123.123456789);
    expect(NumberHelper.parseFormattedNumber('0.123')).toBe(0.123);
    expect(NumberHelper.parseFormattedNumber('0')).toBe(0);
  });

  it('returns a number when a string with formatting is passed', function (): void {
    expect(NumberHelper.parseFormattedNumber('NZD $123.00')).toBe(123);
    expect(NumberHelper.parseFormattedNumber('12,345,678.90')).toBe(12345678.9);
    expect(NumberHelper.parseFormattedNumber('12 345 678.90')).toBe(12345678.9);
    expect(NumberHelper.parseFormattedNumber("12'345'678.90")).toBe(12345678.9);
    expect(NumberHelper.parseFormattedNumber('42% per annum')).toBe(42);
    expect(NumberHelper.parseFormattedNumber('.123')).toBe(0.123);
    expect(NumberHelper.parseFormattedNumber('-.456')).toBe(-0.456);
    expect(NumberHelper.parseFormattedNumber('789.')).toBe(789);
  });

  it('returns a number when a string is passed with custom decimal separator', function (): void {
    expect(
      NumberHelper.parseFormattedNumber('123,0', {
        decimal: ',',
      }),
    ).toBe(123);
    expect(
      NumberHelper.parseFormattedNumber('12.345.678,90', {
        decimal: ',',
      }),
    ).toBe(12345678.9);
    expect(
      NumberHelper.parseFormattedNumber("12.345.678'90", {
        decimal: "'",
      }),
    ).toBe(12345678.9);
    expect(
      NumberHelper.parseFormattedNumber('0·123', {
        decimal: '·',
      }),
    ).toBe(0.123);
  });

  it('returns NaN when an invalid string value is passed', function (): void {
    expect(NumberHelper.parseFormattedNumber('blah')).toBe(NaN);
    expect(NumberHelper.parseFormattedNumber('3.2.1')).toBe(NaN);
    expect(NumberHelper.parseFormattedNumber('123-456')).toBe(NaN);
    expect(NumberHelper.parseFormattedNumber('-.')).toBe(NaN);
  });

  it('returns number with commas', function (): void {
    expect(NumberHelper.getNumberWithCommas(10)).toBe('10');
    expect(NumberHelper.getNumberWithCommas(100)).toBe('100');
    expect(NumberHelper.getNumberWithCommas('100')).toBe('100');
    expect(NumberHelper.getNumberWithCommas(1000)).toBe('1,000');
    expect(NumberHelper.getNumberWithCommas(10000)).toBe('10,000');
    expect(NumberHelper.getNumberWithCommas(101111)).toBe('101,111');
    expect(NumberHelper.getNumberWithCommas(1123456)).toBe('1,123,456');
    expect(NumberHelper.getNumberWithCommas(11234567)).toBe('11,234,567');
  });
});
