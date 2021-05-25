const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).background);

const getBGColor = (selectedElement) => {
return window.getComputedStyle(selectedElement).backgroundColor;
};


// var color = getBGColor(pink);

// pink.addEventListener('mouseenter', () => {
//     center.style.background = color;
// })

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    });
}

magicColorChanger(red, getBGColor(red));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(pink, getBGColor(pink));






