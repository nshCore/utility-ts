export class TypedArrayHelper {
  /**
   * String names of typed arrays for loose equality
   */
  public static readonly names = {
    '[object Int8Array]': true,
    '[object Int16Array]': true,
    '[object Int32Array]': true,
    '[object Uint8Array]': true,
    '[object Uint8ClampedArray]': true,
    '[object Uint16Array]': true,
    '[object Uint32Array]': true,
    '[object Float32Array]': true,
    '[object Float64Array]': true,
  };

  /**
   * Checks to see if an array is a TypedArray, strictly
   * @param arr
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public static isStrictTypedArray(arr): boolean {
    return (
      arr instanceof Int8Array ||
      arr instanceof Int16Array ||
      arr instanceof Int32Array ||
      arr instanceof Uint8Array ||
      arr instanceof Uint8ClampedArray ||
      arr instanceof Uint16Array ||
      arr instanceof Uint32Array ||
      arr instanceof Float32Array ||
      arr instanceof Float64Array
    );
  }

  /**
   * loosely checks an array type
   * @param arr
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public static isLooseTypedArray(arr): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return TypedArrayHelper.names[toString.call(arr)];
  }

  /**
   * converts typedArray to buffer without an expensive copy operation.
   * @param arr
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public static typedArrayToBuffer(arr): Buffer {
    if (TypedArrayHelper.isStrictTypedArray(arr)) {
      let buf = Buffer.from(arr.buffer);
      if (arr.byteLength !== arr.buffer.byteLength) {
        buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
      }
      return buf;
    }
    return Buffer.from(arr);
  }
}
