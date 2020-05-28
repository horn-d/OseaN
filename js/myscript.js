"use strict";



mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuZWRpY3Rob3JuIiwiYSI6ImNrYWh0c282djBqbHQzM280OWcxNTBvM2MifQ.X1GAcQy2BFLpIb_lbUP2hg';




var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/benedicthorn/ckahuid9y0b0o1ik8jfpyj799',
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
