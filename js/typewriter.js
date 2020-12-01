const DEFAULT_TYPE_SPEED = 250;


function asyncLetter(letter, speed = DEFAULT_TYPE_SPEED) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(letter);
        }, speed);
    });
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

export { typeText }