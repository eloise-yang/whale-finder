/**
 *  generates random posistion, but not really random. Only close to random.
 * @param {*} maxX maximum x position on screen
 * @param {*} maxY maximum y position on screen 
 */
export const generateRandomPos = (maxX, maxY) => {
    maxX = maxX - 20;
    maxY = maxY - 20;
    const coordinates = {
        x: Math.random() * maxX,
        y: Math.random() * maxY
    }
    return coordinates
}