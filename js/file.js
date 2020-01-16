function highlightNext(element, color) {
    var next = element;
    do { // find next td node
        next = next.nextSibling;
    }
    while (next && !('nodeName' in next && next.nodeName === 'TD'));
    if (next) {
        next.style.color = color;
    }
}

function highlightBG(element, color) {
    element.style.backgroundColor = color;
    element.style.transition = "3s ease";
}


function resizeBorder(element){
    element.style.borderBottom = "2px dotte #34495e";
    console.log("dsad");
}

function hoverEffect(element){
    element.style.zIndex = "5";
}

function hoverOut(element){
    element.style.zIndex = "1";
}

