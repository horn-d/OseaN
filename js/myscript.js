"use strict";



mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuZWRpY3Rob3JuIiwiYSI6ImNrYWh0c282djBqbHQzM280OWcxNTBvM2MifQ.X1GAcQy2BFLpIb_lbUP2hg';




var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [10.155, 56.117],
    zoom: 5.1
});


var geojson = {
    type: 'FeatureCollection',
    features: [{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [10.149877, 56.117150]
            },
            properties: {
                title: 'Guldtanden',
                description: 'Ringvej Syd 104, <br> 8230 Viby '
            }
                },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [10.158938, 56.119736]
            },
            properties: {
                title: 'Aarhus Erhvers Akademi',
                description: 'Sønderhøj 30,<br> 8230 Viby '
            }
                },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [10.531220, 56.184817]
            },
            properties: {
                title: 'Fuglsøcentret',
                description: 'Dragesmurvej 6,<br> 8420 Knebel'
            }
                },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [10.588915, 57.719510]
            },
            properties: {
                title: 'Skagen restaurant',
                description: 'Sønderhøj 30,<br> 8230 Viby '
            }
                }
            ]
};

geojson.features.forEach(function (marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({
                offset: 25
            }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map);

});






function myFunction () {
    alert ("I am an alert box!")
}








"use strict";

function dialog(hoejde, bredde, baggrundsfarve, fontfarve, placering, indhold, knapper) {

    const htmlkrop = document.body;
    htmlkrop.insertAdjacentHTML('afterend', '<div id="modaldialog" class="modal_dialog"><div id="modalindhold"></div></div>');
    // afterbody er efter </body> hvor der bliver indsat en <div id="modaldialog" classs="modaldialog">

    const modalindhold = document.getElementById("modalindhold");
    modalindhold.classList.add("modal_indhold");

    const modaldialog = document.getElementById("modaldialog");
    let dialogIndhold = '<span onclick="modaldialog.remove()" class="close">X</span><p><br>' + indhold + '</p>';
    // "modaldialog.remove() fjerner modaldialog boksen ved tryk på kryds

    modalindhold.style.width = bredde;
    modalindhold.style.height = hoejde;
    modalindhold.style.backgroundColor = baggrundsfarve;
    modalindhold.style.color = fontfarve;
    //

    if (placering === "centrer") {
        modalindhold.style.left = "50%";
        modalindhold.style.top = "50%";
        modalindhold.style.transform = "translate(-50%,-50%)";
        modalindhold.style.boxShadow = "5px 5px 5px black";
    } else if (placering === "bund") {
        modalindhold.style.left = "0";
        modalindhold.style.bottom = "0";
    } else if (placering === "top") {
        modalindhold.style.left = "0";
        modalindhold.style.top = "0";

    }if (knapper) {
        dialogIndhold += '<div class="knappanel"><button type="button" class="knapper">Fortryd</button><button type="button" class="knapper">OK</button></div>';}modalindhold.innerHTML = dialogIndhold;}

// Hovedprogram
document.getElementById("topknap").addEventListener("click", function () {
    dialog("150px", "100%", "lightgrey", "red", "top", "Toppen", true);});

document.getElementById("bundknap").addEventListener("click", function () {
    dialog("150px", "100%", "blue", "red", "bund", "Bunden", true);});

document.getElementById("centrerknap").addEventListener("click", function () {
    dialog("150px", "350px", "yellow", "blue", "centrer", "Centreret", false);});
