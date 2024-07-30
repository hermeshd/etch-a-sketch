//Set initial variables
const gameArea = document.querySelector(".game-area");
const colorSelectionArea = document.querySelector(".color-selection-area");
const boardSizeNumber = document.querySelector('#board-size');
const gameSetup = document.querySelector('.game-setup');

//Set initial grid size and color
let gridSize = boardSizeNumber.value;
let pixelColor = 'black';

//Update pixel size based on grid size
function updatePixelSize() {

    const gameArea = document.querySelector('.game-area');
    let pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {
        pixel.remove();
    });

    for (let i = 1; i <= (gridSize ** 2); i++) {
        const pixel = document.createElement("div");
        const gameAreaWidth = gameArea.getBoundingClientRect().width;
        const newPixelWidth = (gameAreaWidth - 2) / gridSize;
        pixel.classList.add("pixel");
        pixel.style.width = (newPixelWidth - 2) + 'px';
        pixel.style.height = (newPixelWidth - 2) + 'px';
        gameArea.appendChild(pixel);
    }
}

//Update grid size on change
boardSizeNumber.addEventListener('change', () => {
    gridSize = boardSizeNumber.value;
    updatePixelSize();
});

//Change color when hovering over pixel
const paintMode = document.querySelector('#toggle-painting');
//Normal colors
const changeColorHandler = (event) => {
    if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = pixelColor;
    }
};

//Random color
const randomColorHandler = (event) => {
    if (event.target.classList.contains('pixel')) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = "#" + randomColor;
        console.log(randomColor);
    }
};

//Toggle paint mode
paintMode.addEventListener('change', () => {
    if (paintMode.checked) {
        if (pixelColor === 'random') {
            gameArea.addEventListener('mouseover', randomColorHandler);
        } else {
            gameArea.addEventListener('mouseover', changeColorHandler);
        }
    } else {
        gameArea.removeEventListener('mouseover', changeColorHandler);
    }
});

//Clear game area
const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white';
    });
});

//Change pixel color on click
gameSetup.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
        pixelColor = event.target.style.backgroundColor;
    } else if (event.target.classList.contains('random')) {
        pixelColor = 'random';
    } else if (event.target.classList.contains('darken')) {
        pixelColor = 'darken';
    }
    console.log(pixelColor);
});

// Call the function initially and also on window resize
window.addEventListener('load', updatePixelSize);

// window.addEventListener('resize', updatePixelSize);


//TODO: Fix random color and maybe add darken color