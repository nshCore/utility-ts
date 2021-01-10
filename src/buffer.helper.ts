import { InvalidBufferError } from './exceptions/invalidBuffer.exception';
import { TypedArrayHelper } from './typed-array.helper';

export class BufferHelper {
  /**
   * converts various types to a buffer
   * @param stringOrBuffer
   * @param encoding
   */
  public static async toBuffer(
    stringOrBuffer: string | Buffer | Uint8Array | Promise<string | Buffer | Uint8Array> | number,
    encoding: BufferEncoding = 'binary',
  ): Promise<Buffer> {
    if (Buffer.isBuffer(stringOrBuffer)) {
      return stringOrBuffer;
    } else if (stringOrBuffer === null) {
      throw new InvalidBufferError('Buffer is null');
    } else if (typeof stringOrBuffer === 'string') {
      return Buffer.from(stringOrBuffer, encoding);
    } else if (stringOrBuffer instanceof Uint8Array) {
      return TypedArrayHelper.typedArrayToBuffer(stringOrBuffer);
    } else if (stringOrBuffer instanceof Promise) {
      const result = await BufferHelper.toBuffer(stringOrBuffer);
      return result;
    } else if (Number.isInteger(stringOrBuffer)) {
      const result = await BufferHelper.toBuffer(stringOrBuffer.toString());
      return result;
    }
    throw new InvalidBufferError('Invalid type; string or buffer expected');
  }
}
