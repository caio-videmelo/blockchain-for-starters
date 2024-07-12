// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Blockchain {
    struct Block {
        uint index;
        uint timestamp;
        string data;
        bytes32 previousHash;
        bytes32 hash;
    }
    
    Block[] public blockchain;
    uint public chainLength;
    
    constructor() {
        createGenesisBlock();
    }
    
    function createGenesisBlock()
private {
        Block memory genesisBlock = Block({
            index: 0,
            timestamp:
block.timestamp,
            data: "Genesis Block",
            previousHash: 0x0,
            hash: calculateHash(0, block.timestamp, "Genesis Block", 0x0)
        });
blockchain.push(genesisBlock);
        chainLength++;
} 
    function addBlock(string memory data) public {
        Block memory previousBlock = blockchain[blockchain.length - 1];
        Block memory newBlock = Block({
            index:
previousBlock.index + 1,
            timestamp:
block.timestamp,
            data: data,
            previousHash:
previousBlock.hash,
            hash:
calculateHash(previousBlock.index + 1, block.timestamp, data, previousBlock.hash)
        });
        blockchain.push(newBlock);
        chainLength++;
    } 
function calculateHash(uint index, uint timestamp, string memory data, bytes32 previousHash)
private pure returns (bytes32) {
    return
keccak256(abi.encodePacked(index, timestamp, data, previousHash));
} 
function getBlock(uint index) public view returns (uint, uint, string memory, bytes32, bytes32) { 
    Block memory blockData = blockchain[index];
    return (blockData.index,
            blockData.timestamp,
            blockData.data,
            blockData.previousHash,
            blockData.hash);
    } 
    function getBlockchain() public view returns (Block[] memory) { 
        return blockchain; 
    } 
}
