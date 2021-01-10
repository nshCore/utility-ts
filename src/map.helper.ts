export class MapHelper {
  /**
   * Produces the same result as FlatMap in es2019, but around 40% quicker.
   * Takes an arr of objs and returns a flat array of the target props.
   *
   * @see https://jsben.ch/xaTCY
   * @param arr
   * @param key
   * @constructor
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static FastFlatMap(arr: Array<any>, key: string): Array<any> {
    return arr.reduce((acc, val) => acc.concat(val[key]), []);
  }
}
