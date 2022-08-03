const button = document.getElementById('button');
const inputCor = document.getElementById('inputCor');

function mudarCor() {
    let cor = '#ffffff';
    switch (inputCor.value.toLowerCase()) {
        case 'azul': case 'blue':
            cor = '0000ff';
            break;
        case 'amarelo': case 'yellow':
            cor = 'ffff00';
            break;
        case 'verde': case 'green':
            cor = '008000';
            break;
        case 'vermelho': case 'red':
            cor = 'ff0000';
            break;
        default:
            break;
    }
    document.documentElement.style.setProperty('--bg-color', `#${cor}`);
    
}

inputCor.addEventListener('change', mudarCor);
button.addEventListener('click', mudarCor);
document.addEventListener('keypress', (event) => {
    console.log(event);
    if (event.key == 'Enter') {
        mudarCor();
    }
})