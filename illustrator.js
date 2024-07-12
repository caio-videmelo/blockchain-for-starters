'use strict';

// Verifica se estamos no ambiente do navegador antes de usar o document
if (typeof document !== 'undefined') {
    const leftDiv = document.getElementsByClassName('left')[0];
    const rightDiv = document.getElementsByClassName('right')[0];
    const codeElement = document.getElementById('code');

    // Key words
    const contractWordRegExp = /contract /i;
    const functionWordRegExp = /function /i;

    const divElement = document.createElement('div');

    // Handler para analisar o código digitado e mostrar os elementos correspondentes
    function codeHandler() {
        const codeSnippet = codeElement.value;

        if (contractWordRegExp.test(codeSnippet)) {
            divElement.className = 'contractDiv';
            rightDiv.appendChild(divElement);
        } else if (functionWordRegExp.test(codeSnippet)) {
            divElement.className = 'functionDiv';
            if (document.querySelector('.contractDiv')) {
                document.querySelector('.contractDiv').appendChild(divElement);
            } else {
                rightDiv.appendChild(divElement);
            }
        } else {
            console.log('Nada a mostrar.');
        }
    }

    codeElement.addEventListener('keyup', codeHandler);
}
