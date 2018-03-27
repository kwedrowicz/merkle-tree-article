const MerkleProof = artifacts.require('MerkleProof');
const MerkleTree = artifacts.require('MerkleTree');

module.exports = function(deployer) {
  deployer.deploy(MerkleProof);
  deployer.link(MerkleProof, MerkleTree);
};
