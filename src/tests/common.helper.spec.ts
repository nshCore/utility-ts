import { CommonHelper } from '../common.helper';

class Foo {}

describe('CommonHelper', function (): void {
  describe('generateAllCombinations()', function (): void {
    it('works with an empty input array', function (): void {
      const result = CommonHelper.generateAllCombinations([]);
      expect(result).toStrictEqual([]);
    });

    it('works with an input of length 1', function (): void {
      const result = CommonHelper.generateAllCombinations([
        [
          'red',
          'green',
          'blue',
        ],
      ]);
      expect(result).toStrictEqual([
        [
          'red',
        ],
        [
          'green',
        ],
        [
          'blue',
        ],
      ]);
    });

    it('works with an input of length 2', function (): void {
      const result = CommonHelper.generateAllCombinations([
        [
          'red',
          'green',
          'blue',
        ],
        [
          'small',
          'large',
        ],
      ]);
      expect(result).toStrictEqual([
        [
          'red',
          'small',
        ],
        [
          'red',
          'large',
        ],
        [
          'green',
          'small',
        ],
        [
          'green',
          'large',
        ],
        [
          'blue',
          'small',
        ],
        [
          'blue',
          'large',
        ],
      ]);
    });

    it('works with second array empty', function (): void {
      const result = CommonHelper.generateAllCombinations([
        [
          'red',
          'green',
          'blue',
        ],
        [],
      ]);
      expect(result).toStrictEqual([
        [
          'red',
        ],
        [
          'green',
        ],
        [
          'blue',
        ],
      ]);
    });
  });

  describe('isClassInstance()', function (): void {
    it('returns true for class instances', function (): void {
      expect(CommonHelper.isClassInstance(new Date())).toBe(true);
      expect(CommonHelper.isClassInstance(new Foo())).toBe(true);
      // tslint:disable-next-line:no-construct
      expect(CommonHelper.isClassInstance(new Number(1))).toBe(true);
    });

    it('returns false for not class instances', function (): void {
      expect(CommonHelper.isClassInstance(Date)).toBe(false);
      expect(CommonHelper.isClassInstance(1)).toBe(false);
      expect(CommonHelper.isClassInstance(Number)).toBe(false);
      expect(
        CommonHelper.isClassInstance({
          a: 1,
        }),
      ).toBe(false);
      expect(CommonHelper.isClassInstance([
        1,
        2,
        3,
      ])).toBe(false);
    });
  });
});
