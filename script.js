// initialize the map
var map = L.map('map').setView([ 57.70887000, 11.97456000], 10);

// load a tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 17,
      minZoom: 0
}).addTo(map);


