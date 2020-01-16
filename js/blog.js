function hoverEffect(element){
    element.style.zIndex = "5";
}

function clickedOnPost(element){
    let linkOfThePost = element.children[0].children[1].children[3].href;
    window.open(linkOfThePost,"_self");
}

function search(){
    //show textbox to write at and when the button has been pressed show results
}