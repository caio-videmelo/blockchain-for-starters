### Explanation:

1. **Contract Declaration**: The `Blockchain` contract is declared;
2. **Block Structure**: The `Block` structure defines the components of a block in the blockchain;
3. **Genesis Block Creation**: The constructor calls the `createGenesisBlock` function to create the initial block;
4. **Add Block**: The `addBlock` function adds new blocks to the blockchain;
5. **Calculate Hash**: The `calculateHash` function calculates the hash of a block;
6. **Get Block**: The `getBlock` function returns the details of a specific block;
7. **Get Blockchain**: The `getBlockchain` function returns the entire blockchain.

### How to Use:

To use this contract, you can use tools like Remix to compile and deploy the contract on Ethereum. 
Here are the basic steps:

  1. **Copy the Solidity code**: Paste the above code into a new file in Remix with a .sol extension;
  2. **Compile the contract**: Use the Solidity compiler to compile the contract;
  3. **Deploy the contract**: Use the execution environment in Remix to deploy the contract on the Ethereum test network;
     
After deploying the contract, you can interact with it by calling the `addBlock` function to add new blocks and the `getBlock`
or `getBlockchain` functions to view existing blocks.
