export class IteratorHelper {

  /**
   * Repeats a function N times.
   *
   * @param n
   * @param iteratee
   */
  public static async timesAsync<TResult>(
    n: number,
    iteratee: (...args: unknown[]) => Promise<TResult>,
  ): Promise<TResult[]> {
    const rs = [] as Array<Promise<TResult>>;
    for (let i = 0; i < n; i++) {
      const r = iteratee();
      rs.push(r);
    }
    const result = await Promise.all(rs);
    return result;
  }

  public static times<TResult>(n: number, iteratee: (...args: unknown[]) => TResult): TResult[] {
    const rs = [] as TResult[];
    for (let i = 0; i < n; i++) {
      const r = iteratee();
      rs.push(r);
    }
    return rs;
  }
}
