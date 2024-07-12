class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return CryptoJS.SHA256(this.index + this.timestamp + this.data + this.previousHash).toString();
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, new Date().toISOString(), "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

const myBlockchain = new Blockchain();

document.getElementById('generateBlockBtn').addEventListener('click', () => {
    const newBlock = new Block(
        myBlockchain.chain.length,
        new Date().toISOString(),
        "Some transaction data"
    );
    myBlockchain.addBlock(newBlock);
    displayBlockchain();
});

function displayBlockchain() {
    const displayElement = document.getElementById('blockchainDisplay');
    displayElement.innerHTML = ''; // Clear previous content
    myBlockchain.chain.forEach(block => {
        const blockElement = document.createElement('div');
        blockElement.classList.add('block');
        blockElement.innerHTML = `
            <p><strong>Index:</strong> ${block.index}</p>
            <p><strong>Timestamp:</strong> ${block.timestamp}</p>
            <p><strong>Data:</strong> ${block.data}</p>
            <p><strong>Previous Hash:</strong> ${block.previousHash}</p>
            <p><strong>Hash:</strong> ${block.hash}</p>
        `;
        displayElement.appendChild(blockElement);
    });
}

// Load the initial state of the blockchain
displayBlockchain();
