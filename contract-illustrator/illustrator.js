'use strict'


const leftDiv  = document.getElementsByClassName('left')[0];
const rightDiv = document.getElementsByClassName('right')[0]; 

const codeElement = document.getElementById('code');

// Key words
const contractWordRegExp = /contract /i;
const functionWordRegExp = /function /i;


const divElement = document.createElement('div');
const contractDivClass = document.getElementsByClassName('contractDiv')[0];


// handlers
const codeHandler = () =>{

    
    const codeSnippet = codeElement.value;

    let searchContractWord = contractWordRegExp.test(codeSnippet);

    

    switch (true){

        case contractWordRegExp.test(codeSnippet):
            
            divElement.classList.add('contractDiv');
            rightDiv.appendChild(divElement);
            break;

        case  functionWordRegExp.test(codeSnippet): 
            
            divElement.classList.add('functionDiv');
            if(contractDivClass){

                contractDivClass.appendChild(functionDivElement);

            }else{
                rightDiv.appendChild(divElement);
            }
            
            console.log('function found');
            break;  


        default:   
        console.log('Nothing to show'); 


    }
    

}