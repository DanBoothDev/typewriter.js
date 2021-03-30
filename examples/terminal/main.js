import { typeText, removeText } from '../../js/typewriter.js';

function createPromptRow(targetId, textId) {
    let target = document.getElementById(targetId);
    let div = document.createElement('div');
    div.id = 'terminal__prompt';

    let locationSpan = document.createElement('span');
    locationSpan.id = 'terminal__prompt--location';
    locationSpan.appendChild(document.createTextNode('~'));
    div.appendChild(locationSpan);

    let decoratorSpan = document.createElement('span');
    decoratorSpan.className = 'terminal__prompt--text';
    decoratorSpan.appendChild(document.createTextNode('$\u00A0'));
    div.appendChild(decoratorSpan);

    let promptText = document.createElement('span');
    promptText.id = textId;
    promptText.className = 'terminal__prompt--text';
    div.appendChild(promptText);

    target.appendChild(div);
}

function delay(callbackFunc) {
    setTimeout(function () {
        callbackFunc();
    }, 1000);
}

function createProgrammer() {
    let rowId = 'funny'
    createPromptRow('terminal__body', rowId);

    let titleBlock = document.getElementById(rowId);
    // enable animated cursor
    titleBlock.classList.add('animated-cursor');
    // begin typing
    typeText(titleBlock, 'I write code').then(() => {
        // disable animated cursor
        titleBlock.classList.remove('animated-cursor');
        delay(createDir);
    });
}

function createIntro() {
    // create intro line
    let rowId = 'intro'
    createPromptRow('terminal__body', rowId);

    let titleBlock = document.getElementById(rowId);
    // enable animated cursor
    titleBlock.classList.add('animated-cursor');
    // begin typing
    typeText(titleBlock, 'Hi, my name is Dan').then(() => {
        // disable animated cursor
        titleBlock.classList.remove('animated-cursor');
        delay(createProgrammer);
    });
}

delay(createIntro);