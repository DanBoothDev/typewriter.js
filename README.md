# typewriter.js

typewriter.js is a Javascript module for emulating a type writer affect.

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/join/b2ab7cab-7c58-49fa-bc8c-efa05a51500c)

## Example

See demo [Glitch](https://typewriter-js.glitch.me/examples/index.html) or check [examples/](examples/index.html)

## Usage

```js
// import module
import { typeText, removeText } from "../js/typewriter.js";
```

With animation

```js
// define the target element
let titleBlock = document.querySelector("#title-block");
// enable animated cursor
titleBlock.classList.add("animated-cursor");
// begin typing
typeText(titleBlock, "Hello World").then(() => {
  // remove text
  removeText(titleBlock, "World".length).then(() => {
    // disable animated cursor
    titleBlock.classList.remove("animated-cursor");
  });
});
```

Without animation

```js
// define the target element
let titleBlock = document.querySelector("#title-block");
// begin typing
typeText(titleBlock, "Hello World").then(() => {
  // remove text
  removeText(titleBlock, "World".length);
});
```


## License

[MIT](https://choosealicense.com/licenses/mit/)
