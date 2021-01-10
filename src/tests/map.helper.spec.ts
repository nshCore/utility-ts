import { MapHelper } from '../map.helper';

describe('MapHelper', function (): void {
  describe('FastFlatMap', function (): void {
    it('should return a flattened array of target array', function (): void {
      const sourceArrObj = [
        {
          name: 'payment-1',
          txs: [
            {
              tx: '1',
            },
            {
              tx: '2',
            },
          ],
        },
        {
          name: 'payment-2',
          txs: [
            {
              tx: '3',
            },
            {
              tx: '4',
            },
          ],
        },
      ];

      const targetArrObj = [
        {
          tx: '1',
        },
        {
          tx: '2',
        },
        {
          tx: '3',
        },
        {
          tx: '4',
        },
      ];

      expect(MapHelper.FastFlatMap(sourceArrObj, 'txs')).toStrictEqual(targetArrObj);
    });
  });
});
