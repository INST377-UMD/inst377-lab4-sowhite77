let isBlue = true;

function alertMe() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        alert(`Hi ${name}!`);
    }
}
function changeColor() {
    const currentColor = getComputedStyle(document.body).backgroundColor;
    console.log('Attempting to change color of text, current color is: ', currentColor);

    if (currentColor === 'rgb(255, 0, 0)') {  
        document.body.style.backgroundColor = 'purple';
    } else {
        document.body.style.backgroundColor = 'red';
    }

    console.log('Successfully changed color of text, new color is: ', document.body.style.backgroundColor);
}
function validateText() {
    const text = document.getElementById('textInput').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert('Special character detected!');
    } else {
        alert('Ur good, thats valid.');
    }
}

function addText() {
    const title = document.getElementById('pageTitle');
    if (!title.innerHTML.toLowerCase().includes('add text')) {
        title.innerHTML += ' Add Text';
    }
}
