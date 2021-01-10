export interface INewTypeConstructor<T> {
  new (...args: unknown[]): T;
}
