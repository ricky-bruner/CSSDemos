// let rows = `<div class="row"></div>`;
// let rows2 = `<div class="row2"></div>`;
// let rows3 = `<div class="row3"></div>`;
// let hexagons = `<div class="hexagon"></div>`;
// let hexagons2 = `<div class="hexagon2"></div>`;
// let hexagons3 = `<div class="hexagon3"></div>`;
// let container = document.querySelector('.container');
// let container2 = document.querySelector('.container2');
// let container3 = document.querySelector('.container3');


// for(let i = 0; i <= 3; i++){
//     rows += rows;
//     rows2 += rows2;
//     rows3 += rows3;
// }

// for(let i = 0; i <= 3; i++){
//     hexagons += hexagons;
//     hexagons2 += hexagons2;
//     hexagons3 += hexagons3;
// }

// container.innerHTML += rows;
// domRows = document.querySelectorAll('.row');
// domRows.forEach(r => {
//     r.innerHTML = hexagons;
// });

// container2.innerHTML += rows2;
// domRows2 = document.querySelectorAll('.row2');
// domRows2.forEach(r => {
//     r.innerHTML = hexagons2;
// });

// container3.innerHTML += rows3;
// domRows3 = document.querySelectorAll('.row3');
// domRows3.forEach(r => {
//     r.innerHTML = hexagons3;
// });


let buildCursor = (demoContainer, container) => {
    demoContainer.innerHTML += `<div id="cursor"></div>`;
    let cursor = document.getElementById("cursor");
    demoContainer.addEventListener('mousemove', function(e){
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}

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

document.querySelector('#under').addEventListener("click", () => {
    buildDemo("");
});

document.querySelector('#border').addEventListener("click", () => {
    buildDemo("2");
});

document.querySelector('#full').addEventListener("click", () => {
    buildDemo("3");
})