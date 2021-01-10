import { CommonHelper } from './common.helper';

export class CloneHelper {

  /**
   * An extremely fast function for deep-cloning an object which only contains simple
   * values, i.e. primitives, arrays and nested simple objects.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/ban-types
  public static simpleDeepClone<T extends string | number | any[] | object>(input: T): T {
    // if not array or object or is null return self
    if (typeof input !== 'object' || input === null) {
      return input;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let output: any;
    let i: number | string;
    // handle case: array
    if (input instanceof Array) {
      let l;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      output = [] as any[];
      for (i = 0, l = input.length; i < l; i++) {
        output[i] = CloneHelper.simpleDeepClone(input[i]);
      }
      return output;
    }
    if (CommonHelper.isClassInstance(input)) {
      return input;
    }
    // handle case: object
    output = {
    };
    for (i in input) {
      if (input.hasOwnProperty(i)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        output[i] = CloneHelper.simpleDeepClone((input as any)[i]);
      }
    }
    return output;
  }
}
