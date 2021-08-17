
const divElem = document.getElementById('element').innerHTML = "Div is changed"

console.log(divElem);

function addElement() {
    const ul = document.getElementById('ul__list');
    const li = document.createElement("li");
    const inputValue = document.getElementById("inputValue").value;
    console.log(inputValue)
    if(inputValue === " "){
        alert("INPUT CANNOT BE EMPTY");
    }else {
        li.appendChild(document.createTextNode(inputValue));
        ul.appendChild(li);
    }
}



function swapElem() {
    let buttonStyle = document.getElementById("button");
    console.log(buttonStyle);

  let toggled = buttonStyle.classList.toggle("swap-elem-style");

    if(toggled) {
        buttonStyle.classList.remove("button__attr");
    }else {
        buttonStyle.classList.remove("swap-elem-style");
        buttonStyle.classList.add("button__attr");
    }
}


function toggleDiv() {
     const elements = document.getElementsByClassName('multiple-elements');

    if(elements.item(0).innerHTML == "10") {
        elements.item(0).innerHTML = "1";
        elements.item(1).innerHTML = "2";
        elements.item(2).innerHTML = "3";    
    }else {
        elements.item(0).innerHTML = "10";
        elements.item(1).innerHTML = "20";
        elements.item(2).innerHTML = "30";
    }
}


function swapAllSections() {
    //const button = document.getElementById('allSectionsButton');
    let allSections = document.getElementsByTagName("section");

    for (let i = 0; i < allSections.length; i++) {
        const element = allSections[i];
        element.classList.add("new-color-for-sections");
    }

}

