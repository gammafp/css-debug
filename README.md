# CSS-DEBUG
A tool for debugging CSS and HTML boxes.

![Base image](https://github.com/gammafp/css-debug/blob/main/page-test/img/base.png?raw=true)

### How to use it?

Donwload the project with:
```bash
> npm i --save-dev css-debug
```
Inside the project you have two folders SASS and CSS use the one that feels most comfortable to you, the main file is **sass/debug.scss** (in sass) or **css/debug.css** (in css).

css-debug have one class called debug-*, you can add color by replacing the asterisk with the X11 color you want ([CLICK HERE TO KNOW ABOUT COLORS X11](https://en.wikipedia.org/wiki/X11_color_names)), example:

```html
<div class="debug-deepskyblue"></div>
```
![use debug](https://github.com/gammafp/css-debug/blob/main/page-test/img/example-implementation.png?raw=true)

You can use hover debug with: (debug-color--hover) **debug-red--hover**:
```html
<div class="debug-deepskyblue debug-red--hover"></div>
```
![Hover](https://i.gyazo.com/3d98868a48e20e6923416dc65a3ecc75.gif)

You can remove the background with **no-bg**:
```html
<div class="debug-deepskyblue debug-no-bg"></div>
```
![No background](https://github.com/gammafp/css-debug/blob/main/page-test/img/example-implementation-nobg.png?raw=true)

You can remove the outline whith **debug-outline-none**:
```html
<div class="debug-deepskyblue debug-outline-none"></div>
```
![No outline](https://github.com/gammafp/css-debug/blob/main/page-test/img/example-implementation-outlinenone.png?raw=true)

You have the possibility to change the properties with css variables:
- --outline-size -> change the outline-size
- --alpha -> change the background-color alpha
- --color -> change the background-color (If you use this, the rgba alpha will be disabled, and you need pass it by css color)

Example with --outline-size
```html
<div class="debug-deepskyblue" style="--outline-size: 5px"></div>
```
![Change size](https://github.com/gammafp/css-debug/blob/main/page-test/img/example-implementation-size.png?raw=true)