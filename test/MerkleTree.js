const { assert } = require('chai');
const MerkleTreeImpl = require('./utils/merkleTree');

const MerkleTree = artifacts.require('MerkleTree');

contract('MerkleTree', () => {
  beforeEach(async () => {
    this.merkleTree = await MerkleTree.new();
  });

  it('should return true if element exists in 10 elements tree', async () => {
    // given
    const elements = [...Array(10).keys()];
    const merkleTree = new MerkleTree(elements);

    const root = merkleTree.getHexRoot();
    const proof = merkleTree.getHexProof(elements[0]);
    const leaf = bufferToHex(sha3(elements[9]));

    // when
    const result = await merkleTree.inTree(proof, root, leaf);

    // then
    assert.isOk(result);
  });

  it('should return true if element exists in 50 elements tree', async () => {
    // given
    const elements = [...Array(50).keys()];
    const merkleTree = new MerkleTree(elements);

    const root = merkleTree.getHexRoot();
    const proof = merkleTree.getHexProof(elements[0]);
    const leaf = bufferToHex(sha3(elements[9]));

    // when
    const result = await merkleTree.inTree(proof, root, leaf);

    // then
    assert.isOk(result);
  });

  it('should return true if element exists in 100 elements tree', async () => {
    // given
    const elements = [...Array(100).keys()];
    const merkleTree = new MerkleTree(elements);

    const root = merkleTree.getHexRoot();
    const proof = merkleTree.getHexProof(elements[0]);
    const leaf = bufferToHex(sha3(elements[9]));

    // when
    const result = await merkleTree.inTree(proof, root, leaf);

    // then
    assert.isOk(result);
  });

  it('should return true if element exists in 1000 elements tree', async () => {
    // given
    const elements = [...Array(1000).keys()];
    const merkleTree = new MerkleTree(elements);

    const root = merkleTree.getHexRoot();
    const proof = merkleTree.getHexProof(elements[0]);
    const leaf = bufferToHex(sha3(elements[9]));

    // when
    const result = await merkleTree.inTree(proof, root, leaf);

    // then
    assert.isOk(result);
  });
});
