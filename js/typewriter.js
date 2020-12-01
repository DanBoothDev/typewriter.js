const DEFAULT_TYPE_SPEED = 250;


function asyncLetter(letter, speed = DEFAULT_TYPE_SPEED) {
    return new Promise(resolve => {
        setTimeout(() => resolve(letter), speed);
    });
}

function asyncRemoveIndex(index, speed) {
    return new Promise(resolve => {
        setTimeout(() => resolve(index), speed);
    })
}

async function* asyncLetterGenerator(text, speed = DEFAULT_TYPE_SPEED) {
    const letters = [...text];
    while (letters.length > 0) {
        const letter = letters.shift();
        yield asyncLetter(letter, speed);
    }
}

async function typeText(targetElement, text, delay) {
    for await (const letter of asyncLetterGenerator(text, delay)) {
        targetElement.textContent += letter;
    }
}

async function* asyncLetterRemoveGenerator(numChars, speed = DEFAULT_TYPE_SPEED) {
    let letterIdx = 0;
    while (letterIdx < numChars) {
        letterIdx += 1;
        yield asyncRemoveIndex(letterIdx, speed);
    }
}

async function removeText(targetElement, numChars, delay) {
    for await (const letter of asyncLetterRemoveGenerator(numChars, delay)) {
        targetElement.textContent = targetElement.textContent.slice(0, -1);
    }
}

export { typeText, removeText };