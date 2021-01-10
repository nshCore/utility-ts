// eslint-disable-next-line
import { Constructor } from './types';

export class MixinHelper {
  /**
   * This func returns a mixin class which is extended from T
   * Helpful if you you need to call a protected ctor from an inherited class.
   *
   * @param Base
   */
  public static mixinProtectedBase<TBase extends Constructor, T>(
    Base: TBase,
  ): {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (init: Partial<T>): any;
    // eslint-disable-next-line @typescript-eslint/ban-types
    prototype: {};
  } {
    return class extends Base {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      public constructor(...args: any[]) {
        super(...args);
      }
    };
  }
}
