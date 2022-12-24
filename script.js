mapboxgl.accessToken = 'pk.eyJ1IjoiamF1aGFybXVoYW1tZWQiLCJhIjoiY2xjMWl6c3VtMGxkYzNwbGs2dWVidDVsZCJ9.1Lyl-BoNItxbKW9_j3c-QA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([55.2708, 25.2048])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 11,
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());


    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );
}

