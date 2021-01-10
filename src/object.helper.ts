/* eslint-disable @typescript-eslint/ban-ts-comment,@typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { isObject } from 'class-validator';

export class ObjectHelper {
  /**
   * Sorts an object properties alphabetically taking into consideration capitalisation.
   *
   * @param data
   */
  // eslint-disable-next-line
  public static sortObjPropertiesAlphabetically(data: object): object {
    return Object.entries(data)
      .sort()
      .reduce((o, [
        k,
        v,
      ]) => {
        // @ts-ignore
        return (o[k.toLowerCase()] = v), o;
      }, {
      });
  }

  /**
   * Iterate over object properties and turn them to string.
   * Considers nested objs, null and undefined.
   **
   * @return {object}
   * @param obj
   */
  // eslint-disable-next-line
  public static objPropsToString(obj: object): object {

    for (const k of Object.keys(obj)) {
      // @ts-ignore
      if (typeof obj[k] === 'object' && obj[k] !== null) {
        // @ts-ignore
        this.objPropsToString(obj[k]);
        // @ts-ignore
      } else if (typeof obj[k] !== 'undefined' && obj[k] !== null) {
        // eslint-disable-next-line
        // @ts-ignore
        obj[k] = `${obj[k]}`;
      }
    }

    return obj;
  }

  /**
   * returns a string of object properties concatenated..
   *
   * @param data
   * @param separator
   */
  public static contactObjProperties(data: object, separator?: string): string {
    return Object.values(data).join(separator);
  }

  /**
   * Flatten a multidimensional object
   *
   * For example:
   *   flattenObject({ a: 1, b: { c: 2 } })
   * Returns:
   *   { a: 1, c: 2}
   */
  public static flattenObject(obj: object): object {
    // eslint-disable-next-line object-curly-newline
    const flattened = {};

    for (const key of Object.keys(obj)) {
      // @ts-ignore
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // @ts-ignore
        Object.assign(flattened, ObjectHelper.flattenObject(obj[key]));
      } else {
        // @ts-ignore
        flattened[key] = obj[key];
      }
    }

    return flattened;
  }

  /**
   * Strips null/undefined properties from an object.
   * @param {object} obj
   * @return {object}
   */
  public static stripNull(obj: object): object {
    // @ts-ignore
    Object.keys(obj).forEach((key) => (obj[key] == null) && delete obj[key]);
    return obj;
  }

  /**
   * Method does a recursive merge on object
   *
   * @param target
   * @param source
   */
  public static mergeDeep<T>(target: object, source: object): T {
    const output = Object.assign({
    }, target);
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach(key => {
        // @ts-ignore
        if (isObject(source[key])) {
          if (!(key in target)) Object.assign(output, {
            // @ts-ignore
            [key]: source[key],
          });
          // @ts-ignore
          else output[key] = this.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(output, {
            // @ts-ignore
            [key]: source[key],
          });
        }
      });
    }
    return output as T;
  }
}
