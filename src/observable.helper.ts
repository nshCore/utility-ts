import { Observable } from 'rxjs';

export class ObservableHelper {

  /**
   * Converts a value that may be wrapped into a Promise or Observable into a Promise-wrapped
   * value.
   */
  public static async awaitPromiseOrObservable<T>(value: T | Promise<T> | Observable<T>): Promise<T> {
    let result = await value;
    if (result instanceof Observable) {
      result = await result.toPromise();
    }
    return result;
  }
}
