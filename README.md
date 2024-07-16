# Simple Blockchain in JavaScript

This project implements a simple example of a blockchain using JavaScript. It includes a basic user interface for adding new blocks to the blockchain and displaying information about the created blocks.

## Requirements

- Node.js (version >= 12.0.0)
- CryptoJS (installed via npm)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/caio-videmelo/blockchain-for-starters/
   cd repository-name
   ```

## Install the necessary dependencies:

````
npm install
````

## How to Use

To run the code, you have two options depending on the desired environment:

### In the Browser

Open the `index.html` file in any modern web browser.

Fill out the form with the desired data and submit it to add a new block to the blockchain.

### In Node.js

Run the JavaScript file in Node.js:

````
node blockchainSimulator.js
````

Note: This mode won't have the user interface as Node.js does not support DOM access.

## Funcionalidades

Adicionar Bloco: Preencha o formulário com dados e envie para adicionar um novo bloco à blockchain.

Visualizar Blockchain: Cada bloco adicionado será listado com informações como número do bloco, dados, hash e hash anterior.

## Project Structure

blockchainSimulator.js: Implementation of the blockchain and block addition logic.

index.html: User interface for adding blocks.

The index.html file provides the structure and layout of the web application. It includes references to the CSS and JavaScript files and sets up the basic interface.

HTML Structure:

  A header to display the title of the application.

  A button (<button id="generateBlockBtn">Generate Block</button>) to trigger the creation of new blocks.

Script and CSS:

Links to the styles.css file for styling.
Includes the CryptoJS library for hashing.
Links to the blockchainSimulator.js file for the blockchain logic.

stylesV4.css: Styles for the user interface.

The stylesV4.css file contains the styles for the web application, ensuring it is visually appealing and user-friendly.

## Contribution

Contributions are welcome! Feel free to send pull requests with improvements, bug fixes, or new features.
