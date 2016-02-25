# Leaflet: Make a web map (the Gothenburg edition)!

**This is totally a rip off ot the great introduction to web maps using Leaflet written by Andy Woodruff and Ryan Mullins for Maptime Boston which can be found [here](http://maptimeboston.github.io/leaflet-intro/). The only thing changed is the data and the requirements of a local web server.**

## What is Leaflet? 

Leaflet is an open-source JavaScript library for interactive web maps. It's lightweight, simple, and flexible, and is probably the most popular open-source mapping library at the moment. Leaflet is developed by [Vladimir Agafonkin](http://agafonkin.com/en/) (currently of MapBox) and other contributors.

**What Leaflet does:** "Slippy" maps with tiled base layers, panning and zooming, and feature layers that you supply. It handles various basic tasks like converting data to map layers and mouse interactions, and it's easy to extend with [plugins](http://leafletjs.com/plugins.html). It will also work well across most types of devices. See [Anatomy of a Web Map](http://maptime.io/anatomy-of-a-web-map/#0) for an introduction to the most common kinds of web maps, which is what Leaflet is good for.

**What Leaflet does not do:** Provide any data for you! Leaflet is a framework for showing and interacting with map data, but it's up to you to provide that data, including a basemap. Leaflet is also not GIS, although it can be combined with tools like [CartoDB](https://cartodb.com/) for GIS-like capabilities. If you need total freedom of form, interaction, transitions, and map projections, consider working with something like [D3](https://d3js.org/).

**How this tutorial works:** It's structured around examples that progressively build upon one another, starting from scratch and ending with slightly advanced techniques. It assumes a basic knowledge of HTML and JavaScript, or at the very least assumes the will to tinker with the code to better understand what it does—and how to use it for your own work. It won't explain every little object or array, but will contain plenty of links. Many code blocks show only a 
snippet of code, highlighting the changes over previous examples. Click the "View this example on its own" link underneath a map to see complete code. For thorough documentation, see the [Leaflet site](http://leafletjs.com/reference.html).

**BEFORE YOU START!**

1. You'll want a proper text edit ([Sublime text](http://www.sublimetext.com/), [Atom](https://atom.io/) f.ex).
2. You will have to [download the files in this repo](https://github.com/semone/leaflet-maptime-gbg/archive/master.zip) or clone it to your computer. 
3. Open the index.html file in your browser and the script.js file in your proper editor!


## At first we have a simple Leaflet map
When you first open the index.html file you should see something like this
![Map for step 1](images/step1.png)




