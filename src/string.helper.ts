import { randomBytes } from 'crypto';

export class StringHelper {
  /**
   * pseudo random string generator, since it's pseudo dont use it for anything important
   * mainly here as a test helper.
   *
   * @param size
   */
  public static pseudoRandomString(size: number): string {
    return randomBytes(size).toString('hex');
  }
}
