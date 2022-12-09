'use strict';

// Requirements
// 1. Create a block that can take number, data, hash and previous hash
// 2. Link the blocks using the previous hashes
// 3. Enter new block everytime you enter new data

// Chain
let chain = [];
let blockNumber = 1;

// Block
class Block{

    constructor(number,data,hash,prevhash="000000"){

        this.number = number;
        this.data = data;
        this.hash = hash;
        this.previousHash = prevhash;

    }

    previoushash(_prevHash){
        return _prevHash;
    }


}

const formElement = document.getElementById("formID");
const listsElement = document.getElementById("card");




    // data submission logic
formElement.addEventListener("submit",function(event){
    event.preventDefault();


    let _data = event.target.data.value;
    let _prev = chain.length > 0 ? chain[chain.length-1].hash : "000000000";
    let _hash = CryptoJS.SHA256(_data);
    let newBlock = new Block(blockNumber,_data,_hash,_prev);

    blockNumber++;

    chain.push(newBlock);
    console.log(chain);

    let listItem = document.createElement('li');

    let listDivElement = document.createElement('div');
    let h3Element = document.createElement('h3');
    let pElement = document.createElement('p');
    let pElementHash = document.createElement('p');
    let pElementPrev = document.createElement('p');

    // h3 content
    
    h3Element.innerText = chain[chain.length-1].number;
    listDivElement.appendChild(h3Element);

    // p for data
    pElement.innerHTML = chain[chain.length-1].data;
    listDivElement.appendChild(pElement);

    // p for hash
    pElementHash.innerHTML = chain[chain.length-1].hash;
    listDivElement.appendChild(pElementHash);

    // p for previousHash
    pElementPrev.innerHTML = chain[chain.length-1].previousHash;
    listDivElement.appendChild(pElementPrev);


    listItem.appendChild(listDivElement);
    listsElement.appendChild(listItem);


});



//console.log(hash.toString(CryptoJS.enc.Base64));

console.log('debug');

