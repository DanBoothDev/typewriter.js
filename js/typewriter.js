const DEFAULT_TYPE_SPEED = 250;


async function* generateLetter(text, delay) {
    const letters = [...text];
    while (letters.length > 0) {
        const letter = letters.shift();
        await new Promise(resolve => setTimeout(resolve, delay));
        yield letter;
    }
}

async function typeText(targetElement, text, delay = DEFAULT_TYPE_SPEED) {
    for await (const letter of generateLetter(text, delay)) {
        targetElement.textContent += letter;
    }
}

async function* generateLetterIndex(numChars, delay) {
    let letterIdx = 0;
    while (letterIdx < numChars) {
        await new Promise(resolve => setTimeout(resolve, delay));
        yield letterIdx++;
    }
}

async function removeText(targetElement, numChars, delay = DEFAULT_TYPE_SPEED) {
    for await (const value of generateLetterIndex(numChars, delay)) {
        if (targetElement.textContent.length == 0) break;
        targetElement.textContent = targetElement.textContent.slice(0, -1);
    }
}

export { typeText, removeText };