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

newDomelement2.selectorCreate();

document.addEventListener("DOMContentLoaded", square.selectorCreate());

window.addEventListener("keydown", (event) => {
    const squareElement = document.querySelector(square.selector);
    let step = 10;

    switch(event.code) {
        case "ArrowUp":
            console.log("I will move up");
            // squareElement.style.top += step;
            step = step + 10;
            console.log(step);
            break;
        case "ArrowDown":
            console.log("I will move down");
            break;
        case "ArrowLeft":
            console.log("I will move left");
            break; 
        case "ArrowRight":
            console.log("I will move right");
            break;       
    }
});

square.top = "10px";




