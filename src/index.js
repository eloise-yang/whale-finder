import { generateRandomPos } from "./math";
import { receiver1Params } from "./receiverpos";
import { receiver2Params } from "./receiverpos";
import { receiver3Params } from "./receiverpos";





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
 * Draws a receiver
 * @param {*} cx The x position of the center of the circle 
 * @param {*} cy The y position of the center of the circle
 * @param {*} r The radius of the circle
 * @param {*} ctx the context of the canvas on which it is drawn
 */
const drawReceiver = (cx, cy, r, ctx) => {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = "black";
    ctx.fill();
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

    //draws a receiver
    drawReceiver(receiver1Params.x, receiver1Params.y, receiver1Params.r, ctx);
    drawReceiver(receiver2Params.x, receiver2Params.y, receiver2Params.r, ctx);
    drawReceiver(receiver3Params.x, receiver3Params.y, receiver3Params.r, ctx);
}

//defines an audio context
//audioContext, err = audio.NewContext(44100);
//loads in file
//f, err: = ebitenutil.OpenFile("whale call.mp3");
//d, err: = wav.Decode(audioContext, f);
//audioPlayer, err = audio.NewPlayer(audioContext, d);


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


    //draws a receiver
    drawReceiver(receiver1Params.x, receiver1Params.y, receiver1Params.r, ctx);
    drawReceiver(receiver2Params.x, receiver2Params.y, receiver2Params.r, ctx);
    drawReceiver(receiver3Params.x, receiver3Params.y, receiver3Params.r, ctx);

    //handle generating whale using button 
    const whaleButton = document.getElementById("generatewhalebutton");
    whaleButton.onclick = () => drawRandomWhale(canvas, ctx);

    const soundButton = document.getElementById("generatesoundbutton");



}

// once the page is loaded, call the function that initializes the canvas
document.addEventListener("DOMContentLoaded", drawCanvas);