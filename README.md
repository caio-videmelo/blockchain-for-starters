<h1>Blockchain Application:</h1>

This project is a simple blockchain simulation implemented using HTML, CSS, and JavaScript. The application allows users to generate blocks and visualize the blockchain structure dynamically in a web browser.

<h1>Files Overview:</h1>

a. blockchainSimulator.js
The blockchainSimulator.js file contains the core logic for the blockchain simulation. It defines the Block and Blockchain classes and manages the process of adding new blocks to the blockchain.

Block Class:

constructor(index, timestamp, data, previousHash = ''): Initializes a new block with the given index, timestamp, data, and previous hash. It also calculates the hash for the block using the calculateHash method.
calculateHash(): Computes the SHA256 hash of the block's index, timestamp, data, and previous hash.

Blockchain Class:

constructor(): Initializes the blockchain with a genesis block by calling the createGenesisBlock method.
createGenesisBlock(): Creates the first block (genesis block) in the blockchain.
getLatestBlock(): Returns the latest block in the blockchain.
addBlock(newBlock): Adds a new block to the blockchain after setting its previous hash and calculating its own hash.

Event Listener:

Adds an event listener to the "Generate Block" button to create and add a new block to the blockchain, and then updates the display.

Display Function:

displayBlockchain(): Updates the DOM to display the current state of the blockchain.

b. indexV2.html
The indexV2.html file provides the structure and layout of the web application. It includes references to the CSS and JavaScript files and sets up the basic interface.

HTML Structure:

A header (Blockchain Demo) to display the title of the application.
A button (<button id="generateBlockBtn">Generate Block</button>) to trigger the creation of new blocks.
A div (<div id="blockchainDisplay"></div>) to display the blockchain structure.

Script and CSS:

Links to the stylesV4.css file for styling.
Includes the CryptoJS library for hashing.
Links to the blockchainSimulator.js file for the blockchain logic.

c. stylesV4.css
The stylesV4.css file contains the styles for the web application, ensuring it is visually appealing and user-friendly.

Styling the Page:

Sets a white background color for the page.
Styles the "Generate Block" button with a dark pink color and sets the font color to black.

Block Display:

Styles the individual blocks in the blockchain display, providing clear separation and readability.

<h1>How to Use:</h1>

To use this blockchain application, follow these steps:

<h1>Clone the Repository:</h1>

Clone the repository to your local machine using:
git clone <repository_url>

<h1>Open the Application:</h1>

Open the indexV2.html file using a local server (such as Live Server in Visual Studio Code) to ensure all scripts and styles load correctly.

<h1>Generate Blocks:</h1>

Click the "Generate Block" button to create and add new blocks to the blockchain. The blockchain structure will be displayed below the button.

<h1>Requirements:</h1>

Web Browser: A modern web browser (e.g., Chrome, Firefox, Edge) is required to run the application.
Local Server: Use a local server to open the indexV2.html file for proper loading of scripts and styles.

<h1>Acknowledgments:</h1>

This project uses the CryptoJS library for hashing.
Feel free to contribute to this project by submitting pull requests or opening issues.
