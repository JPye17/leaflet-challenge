# leaflet-challenge

## Earthquake and Tectonic Plate Visualization

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

# The project is split into two parts:
* Earthquake Data Visualization: Earthquake locations, magnitudes, and depths are displayed using color-coded markers that provide additional details on click.
* Tectonic Plate Visualization: Tectonic plate boundaries are added as a separate overlay, allowing users to toggle between viewing just earthquakes or both earthquakes and plate boundaries.

## Features
* Interactive Map: Centered at a global level and allows zooming and panning.
* Layer Control: Toggle between:
* Street Map and Satellite Map views
* Earthquake data and tectonic plates overlays
* Dynamic Markers: Earthquake markers adjust in:
* Size: Based on earthquake magnitude
* Color: Based on earthquake depth
* Informative Popups: Each marker shows the earthquake's location, magnitude, depth, and date when clicked.
* Legend: Color-coded legend displays earthquake depth ranges.

## Technologies Used
* Leaflet.js: For map visualization
* D3.js: For data fetching and processing
* HTML, CSS, JavaScript: Core web technologies

## Usage
Once the project is open in the browser:
* Use the Layer Control on the top right to switch between Street Map and Satellite Map views.
* Toggle between Earthquakes and Tectonic Plates layers to visualize data independently or together.
* Click on Earthquake Markers to view more information, including location, magnitude, depth, and timestamp.
Legend at the bottom right explains color-coding for earthquake depths.
