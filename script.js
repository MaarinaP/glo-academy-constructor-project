'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.selectorCreate = function () {
        let bgColour = "background-color:" + this.bg + ";height:" + this.height + ";width:" + this.width + ";font-size:" + this.fontSize;

        if (this.selector.charAt(0) === ".") {
            let newDiv = document.createElement("div");
            newDiv.className = this.selector;
            newDiv.innerHTML = "This is a div";
            document.body.append(newDiv);
            newDiv.style.cssText = bgColour;
        } else if (this.selector.charAt(0) === "#") {
            let newParagraph = document.createElement("p");
            newParagraph.id = this.selector;
            newParagraph.innerHTML = "This is a paragraph";
            document.body.append(newParagraph);
            let paragraphStyle = "background-color:" + this.bg;
            newParagraph.style.cssText = paragraphStyle;
            newParagraph.style.cssText = bgColour;
        }
    };
};

const newDomelement = new DomElement(".yellow_home", "50px", "500px", "yellow", "50px");
newDomelement.selectorCreate();

const newDomelement2 = new DomElement("#green_home", "100px", "900px", "green", "70px");
newDomelement2.selectorCreate();

// newDomelement.selector = ".yellow_home";
// newDomelement.bg = "yellow";
// newDomelement.height = "50px";
// newDomelement.selectorCreate();
// console.log(newDomelement);

// const newDomelement2 = Object.create(DomElement);

// newDomelement2.selector = "#green_home";
// newDomelement2.bg = "green";
// newDomelement2.fontSize = "70px";
// newDomelement2.selectorCreate();
// console.log(newDomelement2);