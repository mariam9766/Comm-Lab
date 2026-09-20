function changeBackgroundColor() {
    document.querySelector('h1').style.backgroundColor = 'lightblue';
}

function changeFontSize(){
    document.body.style.fontSize = "100px";
}

document.querySelector('h1').addEventListener('click', changeBackgroundColor);

document.querySelector('p').addEventListener('mouseover', changeBackgroundColor);

document.querySelector('h1').addEventListener('mouseout')