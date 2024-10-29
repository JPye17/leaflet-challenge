// Creating the map project
let myMap = L.map('map').setView([-25.2744, 133.7751], 3);

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Set our API URL
const url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-03-09&endtime=2023-03-16";

// Call the API with D3 to get the data
d3.json(url).then(data => {
  // Create a leaflet layer group for earthquakes
  let earthquakes = L.layerGroup();
  
  // Loop through the features in the data
  data.features.forEach(feature => {
    const { coordinates } = feature.geometry;
    const [lng, lat, depth] = coordinates;
    const magnitude = feature.properties.mag;
    
    // Create a circle marker for the earthquake
    const marker = L.circleMarker([lat, lng], {
      radius: magnitude * 3,
      color: '#000',
      weight: 1,
      fillColor: getColor(depth),
      fillOpacity: 0.7
    });
    
    // Add a popup to the marker with information about the earthquake
    marker.bindPopup(`
      <strong>Location:</strong> ${feature.properties.place}<br>
      <strong>Magnitude:</strong> ${magnitude}<br>
      <strong>Depth:</strong> ${depth} km
    `);
    
    // Add the marker to the layer group
    earthquakes.addLayer(marker);
  });
  
  // Add the layer group to the map
  earthquakes.addTo(myMap);

  // Define a function to get the color based on the depth of the earthquake
  function getColor(d) {
    return d > 90 ? '#800026' :
           d > 70 ? '#BD0026' :
           d > 50 ? '#E31A1C' :
           d > 30 ? '#FC4E2A' :
           d > 10 ? '#FD8D3C' :
           d > -10 ? '#FFEDA0' :
           '#FFFFCC';
  }

  // Create a legend control
  let legend = L.control({ position: 'bottomright' });

  // Add the legend to the map
  legend.onAdd = function () {
    const div = L.DomUtil.create('div', 'info legend');
    const depths = [-10, 10, 30, 50, 70, 90];

    // Loop through depth intervals and generate a label with a colored square for each interval
    depths.forEach((depth, i) => {
      div.innerHTML += `
        <i style="background:${getColor(depth + 1)}"></i> 
        ${depth}${depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+'}<br>
      `;
    });

    return div;
  };

  legend.addTo(myMap);
});