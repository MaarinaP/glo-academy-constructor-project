'use strict';

const DomElement = {
    selector: "",
    height: "300px",
    width: "500px",
    bg: "white",
    fontSize: "50px",
    selectorCreate: function () {
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
    }
};

const newDomelement = Object.create(DomElement);

newDomelement.selector = ".yellow_home";
newDomelement.bg = "yellow";
newDomelement.height = "50px";
newDomelement.selectorCreate();
console.log(newDomelement);

const newDomelement2 = Object.create(DomElement);

newDomelement2.selector = "#green_home";
newDomelement2.bg = "green";
newDomelement2.fontSize = "70px";
newDomelement2.selectorCreate();
console.log(newDomelement2);