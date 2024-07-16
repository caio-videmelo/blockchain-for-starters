'use strict';

const FORM_ID = "formID";
const CARD_ID = "card";
const DEFAULT_PREV_HASH = "000000";

let chain = [];
let blockNumber = 1;

class Block {
    constructor(number, data, hash, prevHash = DEFAULT_PREV_HASH) {
        this.number = number;
        this.data = data;
        this.hash = hash;
        this.previousHash = prevHash;
    }

    previousHash(prevHash) {
        return prevHash;
    }
}

// Função para adicionar um novo bloco à blockchain
function addBlock(formData) {
    let prevHash = chain.length > 0 ? chain[chain.length - 1].hash : DEFAULT_PREV_HASH;
    let hash = CryptoJS.SHA256(formData).toString();
    let newBlock = new Block(blockNumber, formData, hash, prevHash);

    blockNumber++;
    chain.push(newBlock);
    console.log(chain);
}

// Função para atualizar a interface do usuário com o novo bloco adicionado
function updateUIWithNewBlock() {
    let newBlock = chain[chain.length - 1];

    let listItem = document.createElement('li');
    let listDivElement = document.createElement('div');

    let h3Element = document.createElement('h3');
    h3Element.innerText = newBlock.number;
    listDivElement.appendChild(h3Element);

    let pElement = document.createElement('p');
    pElement.innerHTML = newBlock.data;
    listDivElement.appendChild(pElement);

    let pElementHash = document.createElement('p');
    pElementHash.innerHTML = newBlock.hash;
    listDivElement.appendChild(pElementHash);

    let pElementPrev = document.createElement('p');
    pElementPrev.innerHTML = newBlock.previousHash;
    listDivElement.appendChild(pElementPrev);

    listItem.appendChild(listDivElement);
    document.getElementById(CARD_ID).appendChild(listItem);
}

// Event listener para o formulário de submissão
document.getElementById(FORM_ID).addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = event.target.data.value;
    addBlock(formData); // Adiciona o bloco à blockchain
    updateUIWithNewBlock(); // Atualiza a interface do usuário com o novo bloco
});

console.log('debug');
