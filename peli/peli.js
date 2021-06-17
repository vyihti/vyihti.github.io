"use strict";
const leveys = 5;
const korkeus = 5;
let sij = {x: 2, y: 2};
let table;
let hahmo;
window.onload = luoTaulukko;
window.addEventListener("keyup", ohjaa);

/**
 * Luodaan 5x5 peliruudukko
 */
function luoTaulukko() {
    table = document.createElement("table");

    for(let i = 0; i < korkeus; i++) {
        let rivi = document.createElement("tr");
        for(let j = 0; j<leveys; j++) {
            let solu = document.createElement("td");
            if( i === sij.y && j === sij.x) {
                solu.className="hahmo";
                hahmo = solu;
            }
            rivi.appendChild(solu);
        }
        table.appendChild(rivi);
    }
    document.body.appendChild(table);
}

function ohjaa (e) {
    let ohjaus = {37: function() {sij.x = (sij.x + 4)%leveys},
                  38: function() {sij.y = (sij.y + 4)%korkeus},
                  39: function() {sij.x = (sij.x + 1)%leveys},
                  40: function() {sij.y = (sij.y + 1)%korkeus}};
    ohjaus[e.keyCode]();
    hahmo.className="";
    hahmo = table.children[sij.y].children[sij.x];
    hahmo.className = "hahmo";
    e.preventDefault();
}