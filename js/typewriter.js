const DEFAULT_TYPE_SPEED = 250;

/**
 * Generate letters in from a given text string, using a delay.
 *
 * @async
 * @generator
 * @function generateLetter
 * @param {string} text - The text to use.
 * @param {int} delay - The delay between each letter.
 * @yields {string} The next letter in the text.
 */
async function* generateLetter(text, delay) {
    const letters = [...text];
    while (letters.length > 0) {
        const letter = letters.shift();
        await new Promise(resolve => setTimeout(resolve, delay));
        yield letter;
    }
}

/**
 * Adds text one letter at a time with a delay between each letter.
 *
 * @async
 * @function typeText
 * @param {object} targetElement - The target element that be modified.
 * @param {string} text - The text to write.
 * @param {int} delay - The delay between each letter.
 */
async function typeText(targetElement, text, delay = DEFAULT_TYPE_SPEED) {
    for await (const letter of generateLetter(text, delay)) {
        targetElement.textContent += letter;
    }
}

/**
 * Generate an index between 0 and maxIdx, using a delay.
 *
 * @async
 * @generator
 * @function generateLetterIndex
 * @param {int} maxIdx - Number of characters to remove.
 * @param {int} delay - The delay between each letter.
 * @yields {int} The next index.
 */
async function* generateLetterIndex(maxIdx, delay) {
    let idx = 0;
    while (idx < maxIdx) {
        await new Promise(resolve => setTimeout(resolve, delay));
        yield idx++;
    }
}

/**
 * Removes text one letter at a time with a delay between each letter.
 *
 * @async
 * @function removeText
 * @param {object} targetElement - The target element that be modified.
 * @param {string} numChars - Number of characters to remove.
 * @param {int} delay - The delay between each letter.
 */
async function removeText(targetElement, numChars, delay = DEFAULT_TYPE_SPEED) {
    for await (const value of generateLetterIndex(numChars, delay)) {
        if (targetElement.textContent.length == 0) break;
        targetElement.textContent = targetElement.textContent.slice(0, -1);
    }
}

export { typeText, removeText };