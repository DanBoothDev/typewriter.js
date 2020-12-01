const DEFAULT_TYPE_SPEED = 250;

// Add new chars
function asyncLetter(letter, speed) {
    return new Promise(resolve => {
        setTimeout(() => resolve(letter), speed);
    });
}

async function* asyncLetterGenerator(text, speed) {
    const letters = [...text];
    while (letters.length > 0) {
        const letter = letters.shift();
        yield asyncLetter(letter, speed);
    }
}

async function typeText(targetElement, text, delay = DEFAULT_TYPE_SPEED) {
    for await (const letter of asyncLetterGenerator(text, delay)) {
        targetElement.textContent += letter;
    }
}

// Remove existing chars
function asyncRemoveIndex(index, speed) {
    return new Promise(resolve => {
        setTimeout(() => resolve(index), speed);
    })
}

async function* asyncLetterRemoveGenerator(numChars, speed) {
    let letterIdx = 0;
    while (letterIdx < numChars) {
        letterIdx += 1;
        yield asyncRemoveIndex(letterIdx, speed);
    }
}

async function removeText(targetElement, numChars, delay = DEFAULT_TYPE_SPEED) {
    for await (const letter of asyncLetterRemoveGenerator(numChars, delay)) {
        targetElement.textContent = targetElement.textContent.slice(0, -1);
    }
}

///////////
export { typeText, removeText };