import { generateRandomPos } from "./math";
/**
 * returns an image of a whale
 */
const getwhaleImage = () => {
    const image = new Image;
    image.src = "https://img.icons8.com/office/80/000000/whale.png";
    return image;
}

/**
 * Draws a whale
 * @param {*} whaleImage The image of the whale
 * @param {*} xPos The x position of the image
 * @param {*} yPos The y position of the image
 * @param {*} canvasCtx The context of the canvas on which it is drawn
 */
const drawWhale = (whaleImage, xPos, yPos, canvasCtx) => {
    whaleImage.onload = () => {
        console.log("your image has loaded");
        canvasCtx.drawImage(whaleImage, xPos, yPos);
    }
}

/**
 * draws a random whale on the canvas
 */
const drawRandomWhale = (canvas, ctx) => {
    // reset the canvas to clear any existing whale
    resetCanvas(canvas, ctx);

    // draw the whale
    const whalePos = generateRandomPos(canvas.width, canvas.height);
    const whaleImage = getwhaleImage();
    drawWhale(whaleImage, whalePos.x, whalePos.y, ctx);
}


/**
 * reset the canvas to the blue ocean
 * @param {*} canvas the canvas
 * @param {*} ctx the canvas context
 */
const resetCanvas = (canvas, ctx) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#2E4053";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * This function initializes the canvas
 */
const drawCanvas = () => {
    const canvas = document.getElementById("ocean");

    // set the height and the width 
    canvas.setAttribute('width', window.innerWidth * 0.8);
    canvas.setAttribute('height', window.innerHeight / 2);

    // grab the context so that you can draw on canvas
    const ctx = canvas.getContext("2d");

    // set the background color for the canvas 
    ctx.fillStyle = "#2E4053";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    //handle generating whale using button 
    const whaleButton = document.getElementById("generatewhalebutton");
    whaleButton.onclick = () => drawRandomWhale(canvas, ctx);

    //get a whale image 
    // const whalePos = generateRandomPos(canvas.width, canvas.height);
    // const whaleImage = getwhaleImage();
    // drawWhale(whaleImage, whalePos.x, whalePos.y, ctx);
}



// once the page is loaded, call the function that initializes the canvas
document.addEventListener("DOMContentLoaded", drawCanvas);