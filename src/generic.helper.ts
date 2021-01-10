import { INewTypeConstructor } from './interfaces/INewTypeConstructor';

/**
 * Tries it's best to mimic .NET Activator.CreateInstance to instantiate an instance of
 * a generic param, typescript has piss poor reflection capabilities though, so it can not
 * instantiate a generic param at runtime, the type you want to init must be known at compile time.
 *
 * @example Activator.createInstance<MyType>(any, number, of, params, passed, to, generic);
 */
export class Activator {

  /**
   * Should pass in the Type you want to instantiate and any associated ctor params.
   *
   * @see NewTypeConstructor
   *
   * @param ctor
   * @param args
   */
  public static createInstance<T>(ctor: INewTypeConstructor<T>, ...args: unknown[]): T {
    return new ctor(args);
  }
}
