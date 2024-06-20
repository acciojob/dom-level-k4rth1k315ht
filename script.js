//your JS code here. If required.
const targetLevel = document.getElementById("level");

function getDomLevel(element){

let level=0;

// parentElement;

// clement = element.parentElement;

// element element.parentElement;

while(element){

level++;

element=element.parentElement;

}

return level;

}

const domLevel =getDomLevel(targetLevel);

alert(`The Level of the element is: ${domLevel}` );
