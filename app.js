'use strict'

function changeColor() {
    const colorName = document.getElementById('color').value;
    let color = 'FFFFFF';

    switch (colorName) {
        case 'azul':
            color = '00b4d8';
            break;

        case 'vermelho':
            color = 'e63946';
            break;

        case 'verde':
            color = '84a98c';
            break;
        
        case 'amarelo':
            color = 'f4e409';
            break;

        default :
            break;
    }
    
    document.documentElement.style.setProperty('--bg-color', `#${color}`);
}
document.getElementById('color').addEventListener('change', changeColor);