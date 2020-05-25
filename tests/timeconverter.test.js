const assert = require('assert');
const TimeConverter = require('../src/timeconverter');

describe('Time Converter', () => {
  it('should convert ms correctly', () => {
    const actualText = TimeConverter.convert(523);
    const expectedText = '523ms';

    assert.deepStrictEqual(actualText, expectedText);
  });

  it('should convert s ms correctly', () => {
    const actualText = TimeConverter.convert(4523);
    const expectedText = '4s 523ms';

    assert.deepStrictEqual(actualText, expectedText);
  });

  it('should convert min s ms correctly', () => {
    const actualText = TimeConverter.convert(724523);
    const expectedText = '12min 4s 523ms';

    assert.deepStrictEqual(actualText, expectedText);
  });

  it('should convert min 0s ms correctly', () => {
    const actualText = TimeConverter.convert(720523);
    const expectedText = '12min 0s 523ms';

    assert.deepStrictEqual(actualText, expectedText);
  });

  it('should convert hr min s ms correctly', () => {
    const actualText = TimeConverter.convert(36720523);
    const expectedText = '10hr 12min 0s 523ms';

    assert.deepStrictEqual(actualText, expectedText);
  });

  it('should convert d hr min s ms correctly', () => {
    const actualText = TimeConverter.convert(209520523);
    const expectedText = '2d 10hr 12min 0s 523ms';

    assert.deepStrictEqual(actualText, expectedText);
  });
  
});