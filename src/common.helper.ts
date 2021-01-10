export class CommonHelper {

  // eslint-disable-next-line @typescript-eslint/ban-types
  public static isObject(item: any): item is object {
    return item && typeof item === 'object' && !Array.isArray(item);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static isClassInstance(item: any): boolean {
    return CommonHelper.isObject(item) && item.constructor.name !== 'Object';
  }

  /**
   * Predicate with type guard, used to filter out null or undefined values
   * in a filter operation.
   */
  public static notNullOrUndefined<T>(val: T | undefined | null): val is T {
    return val !== undefined && val !== null;
  }

  /**
   * Used in exhaustiveness checks to assert a codepath should never be reached.
   */
  public static assertNever(value: never): never {
    throw new Error(`Expected never, got ${typeof value}`);
  }

  /**
   * Given an array of option arrays `[['red, 'blue'], ['small', 'large']]`, this method returns a new array
   * containing all the combinations of those options:
   *
   * @example
   * ```
   * generateAllCombinations([['red, 'blue'], ['small', 'large']]);
   * // =>
   * // [
   * //  ['red', 'small'],
   * //  ['red', 'large'],
   * //  ['blue', 'small'],
   * //  ['blue', 'large'],
   * // ]
   */
  public static generateAllCombinations<T>(
    optionGroups: T[][],
    combination: T[] = [],
    k = 0,
    output: T[][] = [],
  ): T[][] {
    if (k === 0) {
      // eslint-disable-next-line no-param-reassign
      optionGroups = optionGroups.filter(g => g.length > 0);
    }
    if (k === optionGroups.length) {
      output.push(combination);
      return [];
    }
    // tslint:disable:prefer-for-of
    for (let i = 0; i < optionGroups[k].length; i++) {
      CommonHelper.generateAllCombinations(optionGroups, combination.concat(optionGroups[k][i]), k + 1, output);
    }
    // tslint:enable:prefer-for-of
    return output;
  }
}
