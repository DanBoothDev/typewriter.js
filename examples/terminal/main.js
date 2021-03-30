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


function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // move the div from anywhere inside the div:
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = `${(elmnt.offsetTop - pos2)}px`;
        elmnt.style.left = `${(elmnt.offsetLeft - pos1)}px`;
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// enable drag
dragElement(document.getElementById("terminal"));
// start typing
delay(createIntro);