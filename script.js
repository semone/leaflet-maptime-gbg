// initialize the map
var map = L.map('map').setView([ 57.70887000, 11.97456000], 10);

// load a tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 17,
      minZoom: 0
}).addTo(map);


//Add tram and stations step 1
//L.geoJson(trams).addTo(map);

// Create custom marker step2
var tramIcon = L.icon({
    iconUrl: 'tram.png',
    iconSize: [20,20]
});

/*
L.geoJson(trams,{
	pointToLayer: function(feature,latlng){
		return L.marker(latlng,{icon: tramIcon});
	}
}).addTo(map);*/

// Add Popup to stations, Interaction step 3
/*L.geoJson(trams,{
pointToLayer: function(feature,latlng) {
 	var marker = L.marker(latlng,{icon: tramIcon});
  	marker.bindPopup(feature.properties.name + '<br/>' + feature.properties.ref);
  	return marker;
}
}).addTo(map);*/

//Add municipalities to map step 4
//L.geoJson(municipalities).addTo(map);

//Add some colors to the municipalities step 5
L.geoJson( municipalities, {
    style: function(feature){
      var fillColor,
          density = feature.properties.KNBEF96;
      if ( density > 100000 ) fillColor = "#006837";
      else if ( density > 40000 ) fillColor = "#31a354";
      else if ( density > 20000 ) fillColor = "#78c679";
      else if ( density > 10000 ) fillColor = "#c2e699";
      else if ( density > 0 ) fillColor = "#ffffcc";
      else fillColor = "#f7f7f7";  // no data
      return { color: "#999", weight: 1, fillColor: fillColor, fillOpacity: .6 };
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup( "<strong>" + feature.properties.KNNAMN + "</strong><br/>" + feature.properties.KNBEF96 + " invånare" )
    }
}).addTo(map);

// Add clustering for tram stops step 6
var stationIcon = L.icon({
    iconUrl: 'station.png',
    iconSize: [20,20]
});
var airIcon = L.icon({
    iconUrl: 'plane.png',
    iconSize: [30,30]
});
var tramsLayer = L.geoJson(trams, {
	pointToLayer: function(feature,latlng){
		var marker = L.marker(latlng);
		if (feature.properties.type === 'station') {
			marker.setIcon(stationIcon);
		} else if (feature.properties.type == 'tram_stop') {
			marker.setIcon(tramIcon);
		} else { // aerodrome
			marker.setIcon(airIcon);
		}
		var info = "";  
		if (feature.properties.ref !== null) {
			info = feature.properties.ref;
		}
    	marker.bindPopup(feature.properties.name + '<br/>' + info);
    	return marker;
 	}
});

var clusters = L.markerClusterGroup();
clusters.addLayer(tramsLayer);
map.addLayer(clusters);

