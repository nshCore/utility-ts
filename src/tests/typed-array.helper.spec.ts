import { TypedArrayHelper } from '../typed-array.helper';

describe('TypedArrayHelper', function (): void {
  it('should be defined', function (): void {
    expect(new TypedArrayHelper()).toBeDefined();
  });

  it('should check type arrays strictly', function (): void {
    expect(TypedArrayHelper.isStrictTypedArray(new Int8Array())).toBeTruthy();
    expect(TypedArrayHelper.isStrictTypedArray(new Int16Array())).toBeTruthy();
    expect(TypedArrayHelper.isStrictTypedArray(new Int32Array())).toBeTruthy();
    expect(TypedArrayHelper.isStrictTypedArray(new Uint8Array())).toBeTruthy();
    expect(TypedArrayHelper.isStrictTypedArray(new Uint16Array())).toBeTruthy();
    expect(TypedArrayHelper.isStrictTypedArray(new Uint32Array())).toBeTruthy();
    expect(TypedArrayHelper.isStrictTypedArray(new Float32Array())).toBeTruthy();
    expect(TypedArrayHelper.isStrictTypedArray(new Float64Array())).toBeTruthy();
    expect(TypedArrayHelper.isStrictTypedArray([])).toBeFalsy();
    // eslint-disable-next-line @typescript-eslint/no-array-constructor
    expect(TypedArrayHelper.isStrictTypedArray(new Array())).toBeFalsy();
  });

  it('should check type arrays loosely', function (): void {
    expect(TypedArrayHelper.isLooseTypedArray(new Int8Array())).toBeTruthy();
    expect(TypedArrayHelper.isLooseTypedArray(new Int16Array())).toBeTruthy();
    expect(TypedArrayHelper.isLooseTypedArray(new Int32Array())).toBeTruthy();
    expect(TypedArrayHelper.isLooseTypedArray(new Uint8Array())).toBeTruthy();
    expect(TypedArrayHelper.isLooseTypedArray(new Uint16Array())).toBeTruthy();
    expect(TypedArrayHelper.isLooseTypedArray(new Uint32Array())).toBeTruthy();
    expect(TypedArrayHelper.isLooseTypedArray(new Float32Array())).toBeTruthy();
    expect(TypedArrayHelper.isLooseTypedArray(new Float64Array())).toBeTruthy();
    expect(TypedArrayHelper.isLooseTypedArray([])).toBeFalsy();
    // eslint-disable-next-line @typescript-eslint/no-array-constructor
    expect(TypedArrayHelper.isStrictTypedArray(new Array())).toBeFalsy();
  });

  it('should convert buffer from Uint8Array', function (): void {
    const typedArr = new Uint8Array([
      1,
      2,
      3,
    ]);
    const buf = TypedArrayHelper.typedArrayToBuffer(typedArr);

    expect(Buffer.from([
      1,
      2,
      3,
    ])).toStrictEqual(buf);
    expect(Buffer.isBuffer(buf)).toBeTruthy();
    expect(buf).toBeInstanceOf(Buffer);
    expect(buf.readUInt8(0)).toStrictEqual(1);
    expect(buf.readUInt8(1)).toStrictEqual(2);
    expect(buf.readUInt8(2)).toStrictEqual(3);
  });

  it('should convert buffer from Uint32Array', function (): void {
    const typedArr = new Uint32Array([
      1,
      2,
      3,
    ]);
    const buf = TypedArrayHelper.typedArrayToBuffer(typedArr);

    expect(Buffer.from([
      1,
      0,
      0,
      0,
      2,
      0,
      0,
      0,
      3,
      0,
      0,
      0,
    ])).toStrictEqual(buf);
    expect(Buffer.isBuffer(buf)).toBeTruthy();
    expect(buf).toBeInstanceOf(Buffer);
    expect(buf.readUInt32LE(0)).toStrictEqual(1);
    expect(buf.readUInt32LE(4)).toStrictEqual(2);
    expect(buf.readUInt32LE(8)).toStrictEqual(3);
  });

  it('should convert buffer from ArrayBuffer', function (): void {
    const typedArr = new Uint32Array([
      1,
      2,
      3,
    ]).subarray(1, 2);
    const buf = TypedArrayHelper.typedArrayToBuffer(typedArr);

    expect(Buffer.from([
      2,
      0,
      0,
      0,
    ])).toStrictEqual(buf);
    expect(Buffer.isBuffer(buf)).toBeTruthy();
    expect(buf).toBeInstanceOf(Buffer);
    expect(buf.readUInt32LE(0)).toStrictEqual(2);
  });
});
