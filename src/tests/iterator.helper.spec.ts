import { IteratorHelper } from '../iterator.helper';

describe('times', function (): void {
  it('Should call the func 2 times ', async function (): Promise<void> {
    const result = await IteratorHelper.timesAsync<string>(2, async () => await 'a');

    expect(result.length).toBe(2);
    expect(result).toStrictEqual([
      'a',
      'a',
    ]);
  });
});
