//For Hover Hexagon Demo
let buildCursor = (demoContainer, container) => {
    demoContainer.innerHTML += `<div id="cursor"></div>`;
    let cursor = document.getElementById("cursor");
    demoContainer.addEventListener('mousemove', function(e){
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}

//Building Hexagon Demos
let buildDemo = (demoNumber) => {
    let demoContainer = document.querySelector('.demoContainer');
    demoContainer.innerHTML = `<div class="container${demoNumber}"></div>`;
    let container = document.querySelector(`.container${demoNumber}`);
    let rows = `<div class="row${demoNumber}"></div>`;
    let hexagons = `<div class="hexagon${demoNumber}"></div>`;

    for(let i = 0; i <= 3; i++){
        rows += rows;
        hexagons += hexagons;
    }

    container.innerHTML += rows;
    domRows = document.querySelectorAll(`.row${demoNumber}`);
    domRows.forEach(r => {
        r.innerHTML = hexagons;
    });

    if(demoNumber === ""){
        buildCursor(demoContainer, container);
    }
}


//Event Listeners for Menu Buttons
document.querySelector('#under').addEventListener("click", () => {
    buildDemo("");
});

document.querySelector('#border').addEventListener("click", () => {
    buildDemo("2");
});

document.querySelector('#full').addEventListener("click", () => {
    buildDemo("3");
})