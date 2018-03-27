pragma solidity ^0.4.19;


contract Set {

    mapping(uint => bool) public elements;

    function addElements(uint[] _array) public {
        for (uint8 i = 0; i < _array.length; i++) {
            elements[_array[i]] = true;
        }
    }
}
