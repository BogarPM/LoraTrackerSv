console.log('asd');
var map = L.map('map').setView([23.6495569493007, -100.64121263285209], 13);
//var sock = io();
//let soc = io.connect('http://localhost:3000',{forceNew: true});
const mapUrl = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';

L.tileLayer(mapUrl).addTo(map);

L.marker([23.6495569493007, -100.64121263285209]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


/*for(var i = 1;i<11;i++){
    L.marker([51.5 + i, -0.09 + i]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
}*/