pragma solidity ^0.4.19;

import "zeppelin-solidity/contracts/MerkleProof.sol";


contract MerkleTree {
    bytes32 public root;

    function addRoot(bytes32 _root) public {
        root = _root;
    }

    function inTree(bytes _proof, bytes32 _root, bytes32 _leaf) public view returns(bool) {
        require(_root == root);

        return MerkleProof.verifyProof(_proof, _root, _leaf);
    }
}
