mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: campground.geometry.coordinates,
    zoom: 8
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .addTo(map)

new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(campground.geometry.coordinates)
    .setHTML(`<h3>${campground.title}</h3><p>${campground.location}</p>`)
    .addTo(map);