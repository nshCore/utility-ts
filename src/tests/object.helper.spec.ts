import { ObjectHelper } from '../object.helper';

describe('ObjectHelper', function (): void {
  it('should be defined', function (): void {
    expect(new ObjectHelper()).toBeDefined();
  });

  it('should make all props a string', function (): void {
    const testObj = {
      key1: 1,
      key2: 'test',
    };

    Object.assign(testObj, ObjectHelper.objPropsToString(testObj));

    expect(testObj.key1).toStrictEqual('1');
    expect(testObj.key2).toStrictEqual('test');
  });

  it('should make all nested objs props as string', function (): void {
    const testObj = {
      key1: 1,
      key2: 'test',
      key3: {
        key3a: 1,
        key3b: 'test',
      },
    };

    Object.assign(testObj, ObjectHelper.objPropsToString(testObj));

    expect(testObj.key1).toStrictEqual('1');
    expect(testObj.key2).toStrictEqual('test');
    expect(testObj.key3.key3a).toStrictEqual('1');
    expect(testObj.key3.key3b).toStrictEqual('test');
  });

  it('should ignore null and undefined', function (): void {
    const testObj = {
      key1: 1,
      key2: 'test',
      key3: {
        key3a: 1,
        key3b: 'test',
      },
      key4: null,
      key5: undefined,
      key6: {
        key6a: 1,
        key6b: 'test',
        key6c: null,
        key6d: undefined,
      },
    };

    Object.assign(testObj, ObjectHelper.objPropsToString(testObj));

    expect(testObj.key1).toStrictEqual('1');
    expect(testObj.key2).toStrictEqual('test');
    expect(testObj.key3.key3a).toStrictEqual('1');
    expect(testObj.key3.key3b).toStrictEqual('test');
    expect(testObj.key4).toBeNull();
    expect(testObj.key5).toBe(undefined);
  });
});
