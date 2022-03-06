'use strict';

const DomElement = function (selector, height, width, bg, fontSize, position = "absolute") {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = position;
    this.selectorCreate = function () {
        let styleBg = "background-color:" + this.bg;
        let styleHeight = ";height:" + this.height;
        let styleWidth = ";width:" + this.width;
        let styleFontSize = ";font-size:" + this.fontSize;
        let stylePosition = ";position:" + this.position;
        let style = styleBg + styleHeight + styleWidth + styleFontSize + stylePosition;

        if (this.selector.charAt(0) === ".") {
            let newDiv = document.createElement("div");
            newDiv.className = this.selector.substring(1);
            newDiv.innerHTML = "Hello, I am a square";
            document.body.append(newDiv);
            newDiv.style.cssText = style;
        } else if (this.selector.charAt(0) === "#") {
            let newParagraph = document.createElement("p");
            newParagraph.id = this.selector.substring(1);
            newParagraph.innerHTML = "I am green";
            document.body.append(newParagraph);
            let paragraphStyle = "background-color:" + this.bg;
            newParagraph.style.cssText = paragraphStyle;
            newParagraph.style.cssText = style;
        }
    };
};

const newDomelement2 = new DomElement("#green_home", "100px", "700px", "green", "70px");
const square = new DomElement(".yellow_home", "100px", "100px", "yellow", "25px");

const moveElement = (event) => {

    switch(event.code) {
        case "ArrowUp":
            squareElement.style.top = (parseInt(squareElement.style.top) - 10) + "px";
            break;
        case "ArrowDown":
            squareElement.style.top = (parseInt(squareElement.style.top) + 10) + "px";
            break;
        case "ArrowLeft":
            squareElement.style.left = (parseInt(squareElement.style.left) - 10) + "px";
            break; 
        case "ArrowRight":
            squareElement.style.left = (parseInt(squareElement.style.left) + 10) + "px";
            break;       
    }
};

newDomelement2.selectorCreate();

document.addEventListener("DOMContentLoaded", square.selectorCreate());

const squareElement = document.querySelector(square.selector);

squareElement.style.top = "10px";
squareElement.style.left = "10px";

window.addEventListener("keydown", moveElement); 






