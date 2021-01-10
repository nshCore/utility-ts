/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloneHelper } from '../clone.helper';

class Foo {}

describe('simpleDeepClone', function (): void {
  it('clones a simple flat object', function (): void {
    const target = {
      a: 1,
      b: 2,
    };
    const result = CloneHelper.simpleDeepClone(target);

    expect(result).toStrictEqual(target);
    expect(result).not.toBe(target);
  });

  it('clones a simple deep object', function (): void {
    const target = {
      a: 1,
      b: {
        c: 3,
        d: [
          1,
          2,
          3,
        ],
      },
    };
    const result = CloneHelper.simpleDeepClone(target);

    expect(result).toStrictEqual(target);
    expect(result).not.toBe(target);
  });

  it('clones a simple flat array', function (): void {
    const target = [
      1,
      2,
      3,
    ];
    const result = CloneHelper.simpleDeepClone(target);

    expect(result).toStrictEqual(target);
    expect(result).not.toBe(target);
  });

  it('clones a simple deep array', function (): void {
    const target = [
      1,
      [
        2,
        3,
      ],
      [
        4,
        [
          5,
          [
            6,
          ],
        ],
      ],
    ];
    const result = CloneHelper.simpleDeepClone(target);

    expect(result).toStrictEqual(target);
    expect(result).not.toBe(target);
  });

  it('passes through primitive types', function (): void {
    expect(CloneHelper.simpleDeepClone(1)).toBe(1);
    expect(CloneHelper.simpleDeepClone('a')).toBe('a');
    expect(CloneHelper.simpleDeepClone(true as any)).toBe(true);
    expect(CloneHelper.simpleDeepClone(null as any)).toBeNull();
    expect(CloneHelper.simpleDeepClone(undefined as any)).toBeUndefined();
  });

  it('does not clone class instance', function (): void {
    const target = new Foo();
    const result = CloneHelper.simpleDeepClone(target);

    expect(result).toBe(target);
  });

  it('does not clone class instance in array', function (): void {
    const foo = new Foo();
    const target = [
      foo,
    ];
    const result = CloneHelper.simpleDeepClone(target);

    expect(result).toStrictEqual(target);
    expect(result).not.toBe(target);
    expect(result[0]).toBe(target[0]);
  });

  it('does not clone class instance in object', function (): void {
    const foo = new Foo();
    const target = {
      a: foo,
    };
    const result = CloneHelper.simpleDeepClone(target);

    expect(result).toStrictEqual(target);
    expect(result).not.toBe(target);
    expect(result.a).toBe(target.a);
  });

  it('clone does not share references with original', function (): void {
    const original = {
      user: {
        name: 'mike',
      },
    };
    const clone = CloneHelper.simpleDeepClone(original);

    original.user.name = 'pete';

    expect(clone.user.name).toStrictEqual('mike');
  });
});
