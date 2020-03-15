let demoContainer = document.querySelector('.demoContainer');

//For Hover Hexagon Demo
let buildHexagonCursor = () => {
    demoContainer.innerHTML += `<div id="cursor"></div>`;
    let cursor = document.getElementById("cursor");
    demoContainer.addEventListener('mousemove', function(e){
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}

//Build Hexagon Demos
let buildHexagonDemo = (demoNumber) => {   
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
        buildHexagonCursor();
    }
}

//Build Wave Circles Demo
let buildWavyCirclesDemo = () => {
    demoContainer.innerHTML = `<div class="wavy-body"><div class="loader"></div></div>`;
    let loader = document.querySelector('.loader');
    let spans = `<span></span>`;

    for(let i = 0; i <= 13; i++){
        spans += `<span></span>`;
    }

    loader.innerHTML = spans;
}

//Event Listeners for Menu Buttons
document.querySelector('#under').addEventListener("click", () => {
    buildHexagonDemo("");
});

document.querySelector('#border').addEventListener("click", () => {
    buildHexagonDemo("2");
});

document.querySelector('#full').addEventListener("click", () => {
    buildHexagonDemo("3");
});

document.querySelector('#circle').addEventListener("click", () => {
    buildWavyCirclesDemo();
});

document.querySelector('#banner').addEventListener("click", () => {
    buildScrollingBannerDemo();
});