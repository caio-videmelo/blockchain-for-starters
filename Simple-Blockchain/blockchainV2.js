const crypto = require('crypto');

class Block {
  constructor(index, previousHash, timestamp, data, hash) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    const timestamp = new Date().toISOString();
    return new Block(0, "0", timestamp, 0, this.calculateHash(0, "0", timestamp, 0));
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.hash = this.calculateHash(newBlock);
    this.chain.push(newBlock);
  }

  calculateHash(index, previousHash, timestamp, data) {
    const hash = crypto.createHash('sha256')
                      .update(index.toString() + previousHash + timestamp + JSON.stringify(data))
                      .digest('hex');
    return hash;
  }

  createBlock(data) {
    const latestBlock = this.getLatestBlock();
    const index = latestBlock.index + 1;
    const timestamp = new Date().toISOString();
    const previousHash = latestBlock.hash;
    return new Block(index, previousHash, timestamp, data, "");
  }

  mineBlock(data) {
    const newBlock = this.createBlock(data);
    newBlock.hash = this.calculateHash(newBlock.index, newBlock.previousHash, newBlock.timestamp, newBlock.data);
    this.addBlock(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== this.calculateHash(currentBlock.index, currentBlock.previousHash, currentBlock.timestamp, currentBlock.data)) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

// Utilização do Blockchain
const myBlockchain = new Blockchain();

console.log("Adicionando blocos...");
myBlockchain.mineBlock({ amount: 10 });
myBlockchain.mineBlock({ amount: 20 });
myBlockchain.mineBlock({ amount: 30 });

console.log("Blockchain válida?", myBlockchain.isChainValid());
console.log(JSON.stringify(myBlockchain, null, 2));
