import { HelloWorld } from '../helloWorld';

describe('HelloWorld', function (): void {

  describe('printHelloMessage', function () {
    it('should print message', function (): void {
      const helloWorld = new HelloWorld();
      expect(helloWorld.printHelloMessage()).toStrictEqual('Hello World');
    });
  });
});
