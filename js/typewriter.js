const DEFAULT_TYPE_SPEED = 250;


function asyncLetter(letter, delay) {
    return new Promise(resolve => {
        setTimeout(() => resolve(letter), delay);
    });
}

async function* asyncLetterGenerator(text, delay) {
    const letters = [...text];
    while (letters.length > 0) {
        const letter = letters.shift();
        yield asyncLetter(letter, delay);
    }
}

async function typeText(targetElement, text, delay = DEFAULT_TYPE_SPEED) {
    for await (const letter of asyncLetterGenerator(text, delay)) {
        targetElement.textContent += letter;
    }
}

async function* asyncLetterRemoveGenerator(numChars, delay) {
    let letterIdx = 0;
    while (letterIdx < numChars) {
        await new Promise(resolve => setTimeout(resolve, delay));
        yield letterIdx++;
    }
}

async function removeText(targetElement, numChars, delay = DEFAULT_TYPE_SPEED) {
    for await (const value of asyncLetterRemoveGenerator(numChars, delay)) {
        if (targetElement.textContent.length == 0) break;
        targetElement.textContent = targetElement.textContent.slice(0, -1);
    }
}

export { typeText, removeText };