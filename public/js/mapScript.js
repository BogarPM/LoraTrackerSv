var map = L.map('map').setView([51.505, -0.09], 13);
const mapUrl = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';

L.tileLayer(mapUrl).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
for(var i = 1;i<11;i++){
    L.marker([51.5 + i, -0.09 + i]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
}