import { IHello } from './IHello';

export class HelloWorld implements IHello {

  public message: string;

  public constructor() {
    this.message = 'Hello World';
  }

  public printHelloMessage(): string {
    return this.message;
  }
}
