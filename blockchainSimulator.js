const CryptoJS = require('crypto-js');

class Transaction {
    constructor(sender, receiver, amount) {
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class Block {
    constructor(index, timestamp, transactions, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return CryptoJS.SHA256(this.index + this.timestamp + JSON.stringify(this.transactions) + this.previousHash).toString();
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.pendingTransactions = [];
        this.miningReward = 100; // Reward for mining a new block (in a real scenario, this would be dynamic)
    }

    createGenesisBlock() {
        return new Block(0, new Date().toISOString(), [], "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress) {
        const newBlock = new Block(
            this.chain.length,
            new Date().toISOString(),
            this.pendingTransactions,
            this.getLatestBlock().hash
        );
        this.chain.push(newBlock);

        console.log("Block successfully mined!");
        console.log("Hash: " + newBlock.hash);
        
        // Reward for mining
        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];
    }

    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address) {
        let balance = 0;

        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.sender === address) {
                    balance -= trans.amount;
                }
                if (trans.receiver === address) {
                    balance += trans.amount;
                }
            }
        }

        return balance;
    }
}

const myBlockchain = new Blockchain();

// Simulate transactions
myBlockchain.createTransaction(new Transaction('Alice', 'Bob', 50));
myBlockchain.createTransaction(new Transaction('Bob', 'Alice', 20));

// Mine the pending transactions
myBlockchain.minePendingTransactions('MinerAddress');

// Display the blockchain
console.log(JSON.stringify(myBlockchain.chain, null, 4));
