function allowDrop(ev) {
    ev.preventDefault();   //the default setting is to not let the function drop, so have to prevent the default
}

function dragend(ev) {
    ev.target.classList.remove("dragging");
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);//he dataTransfer.setData() method sets the data type and the value of the dragged data
    ev.target.className += ' dragging';  //when the dragging has been started, add 'dragging to its class name, just so 
}                                        //additional features can be utilised'

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data)); //Append the dragged element into the drop element

    setTimeout(() => {
        alert("A picture has been uploaded")
    }, 0);
}

const reset = document.querySelector(".btn");
reset.addEventListener("click", () => document.location.reload()); //reload teh whole scene, when buttion has been clicked



