/* 
------------------------------- JavaScript Documentation -------------------------------
Structure: Hardcoded into the html file is the demoContainer div that is meant to house the CSS 
Demo for each section. Each "build" method below will first wipe the container to replace with the 
structure for the specified demo, then build in the html elements required for the UI Demo. The 
main purpose for this file was to eliminate the massive amount of HTML that is hardcoded in these 
Demos on the Udemy Course. 
----------------------------------------------------------------------------------------
Below the methods lies the buttons from the menu section of the HTML, each with a click listener 
primed to launch the demo. 
----------------------------------------------------------------------------------------
The demos are all layed out pretty straightforward, save for the Fluid Simulation demo housed in 
buildFluidDemo(). In order to get the controls to disappear when a user clicks close, I had to 
remove the elements from the DOM on load of the Demo so they they did go away rather than stack. 
The original Udemy course for this work hid the menu entirely with CSS,but I opted to leave it for 
the user to decide.
----------------------------------------------------------------------------------------
Additional: The course required that fluidSimulation.js and dat.gui.min.js be copy and pasted into 
the project. I renamed script.js to fluidSimulation.js because I already had this scripts.js file. 
Inside of fluidSimulation, I had to place everything into a method and call it on demo load for 
the Fluid Demo. That is the only modification I have made to that file.
*/


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

//Build Cube Demo
let buildCubeDemo = (demoNumber) => {
    demoContainer.innerHTML = `<div class="cube-container"><div class="container${demoNumber}"></div></div>`;
    
    let cubeContainer = document.querySelector(`.container${demoNumber}`);
    let rows = `<div class="row${demoNumber}"></div>`;
    let cubes = `<div class="cube${demoNumber}"></div>`;
    let spans = `<span></span><span></span><span></span>`;

    for(let i = 0; i <= 3; i++){
        rows += rows;
        cubes += cubes;
    }

    cubeContainer.innerHTML = rows;
    
    rows = document.querySelectorAll(`.row${demoNumber}`);
    
    rows.forEach(r => {
        r.innerHTML = cubes;
    });
    
    cubes = document.querySelectorAll(`.cube${demoNumber}`);
    
    cubes.forEach(c => {
        c.innerHTML = spans;
    })
}

//Build Fluid Demo
let buildFluidDemo = () => {
    demoContainer.innerHTML = `<canvas></canvas>`;
    
    let menu = document.querySelector(".dg.ac");
    
    if(menu !== null){
        menu.innerHTML = ``;
    }

    useFluidSimulation();

    document.querySelector(".close-button").addEventListener("click", () => {
        document.querySelector(".dg.main.a").style.display = "none";
    });
}

//Build Split Demo
let buildSplitDemo = () => {
    demoContainer.innerHTML = `<div class="split-container"><section><div class="side" id="side1"></div><div class="side" id="side2"></div></section></div>`;

    let side1 = document.querySelector("#side1");
    let side2 = document.querySelector("#side2");
    
    window.addEventListener("scroll", () => {
        side1.style.left = -+window.pageYOffset + "px";
        side2.style.left = +window.pageYOffset + "px";
    })
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

document.querySelector('#cube').addEventListener("click", () => {
    buildCubeDemo("4");
});

document.querySelector('#fluid').addEventListener("click", () => {
    buildFluidDemo();
});

document.querySelector('#split').addEventListener("click", () => {
    buildSplitDemo();
});