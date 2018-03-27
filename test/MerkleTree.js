const { assert } = require('chai');
const MerkleTreeImpl = require('./utils/merkleTree');
const { sha3, bufferToHex } = require('ethereumjs-util');

const MerkleTree = artifacts.require('MerkleTree');

contract('MerkleTree', () => {
  beforeEach(async () => {
    this.merkleTree = await MerkleTree.new();
  });

  it('should return true if element exists in 10 elements tree', async () => {
    // given
    const elements = [...Array(10).keys()];
    const merkleTreeImpl = new MerkleTreeImpl(elements);

    const root = merkleTreeImpl.getHexRoot();
    const proof = merkleTreeImpl.getHexProof(elements[9]);
    const leaf = bufferToHex(sha3(elements[9]));

    await this.merkleTree.addRoot(root);

    // when
    const result = await this.merkleTree.inTree(proof, root, leaf);

    // then
    assert.isOk(result);
  });

  it('should return true if element exists in 50 elements tree', async () => {
    // given
    const elements = [...Array(50).keys()];
    const merkleTreeImpl = new MerkleTreeImpl(elements);

    const root = merkleTreeImpl.getHexRoot();
    const proof = merkleTreeImpl.getHexProof(elements[9]);
    const leaf = bufferToHex(sha3(elements[9]));

    await this.merkleTree.addRoot(root);

    // when
    const result = await this.merkleTree.inTree(proof, root, leaf);

    // then
    assert.isOk(result);
  });

  it('should return true if element exists in 100 elements tree', async () => {
    // given
    const elements = [...Array(100).keys()];
    const merkleTreeImpl = new MerkleTreeImpl(elements);

    const root = merkleTreeImpl.getHexRoot();
    const proof = merkleTreeImpl.getHexProof(elements[9]);
    const leaf = bufferToHex(sha3(elements[9]));

    await this.merkleTree.addRoot(root);

    // when
    const result = await this.merkleTree.inTree(proof, root, leaf);

    // then
    assert.isOk(result);
  });

  it('should return true if element exists in 1000 elements tree', async () => {
    // given
    const elements = [...Array(1000).keys()];
    const merkleTreeImpl = new MerkleTreeImpl(elements);

    const root = merkleTreeImpl.getHexRoot();
    const proof = merkleTreeImpl.getHexProof(elements[9]);
    const leaf = bufferToHex(sha3(elements[9]));

    await this.merkleTree.addRoot(root);

    // when
    const result = await this.merkleTree.inTree(proof, root, leaf);

    // then
    assert.isOk(result);
  });
});
