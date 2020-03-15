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

//Build Scrolling Text Demo
let buildScrollingBannerDemo = () => {
    demoContainer.innerHTML = `<div class="scrolling-text"><section></section></div>`;
    let container = document.querySelector('.scrolling-text');
    let divs = `<div class="section-div"></div>`;
    let h2s = `<h2></h2>`;
    let lorem = "Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire."

    for(let i = 0; i < 1; i++){
        divs += `<div class="section-div"></div>`;
    }

    section = document.querySelector("section");
    section.innerHTML = divs;
    divs = document.querySelectorAll(".section-div");
    divs.forEach(d => {
        d.innerHTML = h2s;
    })
    h2s = document.querySelectorAll("h2");
    h2s.forEach(h => {
        h.innerText = lorem;
    })
}

//Build Rain Demo
let buildRainDemo = () => {
    demoContainer.innerHTML = `<div class="rain-container"><section></section></div>`;
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

document.querySelector('#rain').addEventListener("click", () => {
    buildRainDemo();
});