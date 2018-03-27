const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { assert } = chai;

const Set = artifacts.require('Set');

const EVMThrow = message => `VM Exception while processing transaction: ${message}`;

contract('Set', () => {
  beforeEach(async () => {
    this.set = await Set.new();
  });

  it('should add 10 elements to set', async () => {
    // given
    const array = [...Array(10).keys()];

    // when
    await this.set.addElements(array);

    // then
    const inArray = await this.set.elements(8);
    const notInArray = await this.set.elements(10);

    assert.isTrue(inArray);
    assert.isFalse(notInArray);
  });

  it('should add 50 elements to set', async () => {
    // given
    const array = [...Array(50).keys()];

    // when
    await this.set.addElements(array);

    // then
    const inArray = await this.set.elements(8);
    const notInArray = await this.set.elements(50);

    assert.isTrue(inArray);
    assert.isFalse(notInArray);
  });

  it('should add 100 elements to set', async () => {
    // given
    const array = [...Array(100).keys()];

    // when
    await this.set.addElements(array);

    // then
    const inArray = await this.set.elements(8);
    const notInArray = await this.set.elements(100);

    assert.isTrue(inArray);
    assert.isFalse(notInArray);
  });

  it('should add 1000 elements to set', async () => {
    // given
    const array = [...Array(1000).keys()];

    // when
    const transaction =  this.set.addElements(array);

    // then
    await assert.isRejected(transaction, EVMThrow('out of gas'));
  });
});
