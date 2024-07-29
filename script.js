//Set initial variables
const gameArea = document.querySelector(".game-area");
const colorSelectionArea = document.querySelector(".color-selection-area");
const boardSizeNumber = document.querySelector('#board-size');

let gridSize = boardSizeNumber.value;

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
    console.log(`Game Area: ${gameAreaWidth}px`);
    console.log(`Pixel Size: ${newPixelWidth}px`);
    console.log(`Grid Size: ${gridSize}`);
}

//Update grid size on change
boardSizeNumber.addEventListener('change', () => {
    gridSize = boardSizeNumber.value;
    updatePixelSize();
});



// Call the function initially and also on window resize
window.addEventListener('load', updatePixelSize);
window.addEventListener('resize', updatePixelSize);


//TODO: Add color selection
//TODO: Add random color option
//TODO: Add clear button
//TODO: Add darkening effect