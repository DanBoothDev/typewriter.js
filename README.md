# typewriter.js
typewriter.js is a Javascript module for emulating a type writer affect.

</br>

## Example
See [basic example](examples/index.html)

</br>

## Usage
```js
// import module
import { typeText, removeText } from '../js/typewriter.js';
```

With animation
```js
// define the target element
let titleBlock = document.querySelector("#title-block");
// enable animated cursor
titleBlock.classList.add('animated-cursor');
// begin typing
typeText(titleBlock, 'Hello World').then(() => {
    // remove text
    removeText(titleBlock, "World".length).then(() => {
        // disable animated cursor
        titleBlock.classList.remove('animated-cursor');
    });
});
```

Without animation
```js
// define the target element
let titleBlock = document.querySelector("#title-block");
// begin typing
typeText(titleBlock, 'Hello World').then(() => {
    // remove text
    removeText(titleBlock, "World".length);
});
```

</br>

## License
[MIT](https://choosealicense.com/licenses/mit/)