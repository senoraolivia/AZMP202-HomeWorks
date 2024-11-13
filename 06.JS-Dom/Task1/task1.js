let increaseButton = document.getElementById('increaseSize');
let decreaseButton = document.getElementById('decreaseSize');
let colorInput = document.getElementById('colorInput');
let applyColorButton = document.getElementById('applyColor');
let paragraphs = document.querySelectorAll('.paragraphs p');

let currentFontSize = 15;

increaseButton.addEventListener('click', () => {
    currentFontSize += 2; 
    updateFontSize();
});

decreaseButton.addEventListener('click', () => {
    if (currentFontSize > 5) { 
        currentFontSize -= 2; 
        updateFontSize();
    }
});

applyColorButton.addEventListener('click', () => {
    let color = colorInput.value.trim();
    if (isValidColor(color)) {
        updateTextColor(color);
    } else {
        alert('Error');
    }
});

function updateFontSize() {
    paragraphs.forEach(paragraph => {
        paragraph.style.fontSize = `${currentFontSize}px`;
    });
}

function updateTextColor(color) {
    paragraphs.forEach(paragraph => {
        paragraph.style.color = color;
    });
}

function isValidColor(color) {
    const testElement = document.createElement('div');
    testElement.style.color = color;
    return testElement.style.color !== '';
}
