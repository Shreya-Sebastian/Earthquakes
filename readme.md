# Earthquake Visualizer

An interactive web visualisation of significant earthquakes and tsunamis around the world, from historical records to 2025. A world map, a timeline, a scatterplot and a detail panel are linked, so a selection in one view filters the others.

**Live demo:** https://shreya-sebastian.github.io/Earthquakes/

## Features

- **World map.** Every earthquake as a point on an OpenLayers map, with tectonic plate boundaries drawn on top. Dot size and colour can be mapped to magnitude, focal depth, Modified Mercalli Intensity, deaths, injuries, damage or houses destroyed and damaged; colour can also show the country or whether the earthquake caused a tsunami. A toggle switches the points to a heatmap, and earthquakes can be selected on the map by clicking or Ctrl-dragging a box.
- **Timeline.** A grid of year ranges against months, coloured by the number of earthquakes. Click and drag to select a timeframe and zoom into it; a button steps back to the previous year ranges.
- **Scatterplot.** Any two attributes against each other (magnitude against focal depth by default). Click or Ctrl-drag to select earthquakes, which are then highlighted on the map and timeline.
- **Detail view.** The full record of a selected earthquake, including its date and time, impact figures and any tsunamis it caused.
- **Tsunami filter.** Restricts every view to earthquakes that caused a tsunami.
- **Points of interest.** Preset selections that lead into notable patterns: events with many people missing, events with many houses destroyed, and low-magnitude earthquakes that caused a lot of damage.

## Data

| File | Contents |
|---|---|
| `earthquakes.geojson` | 6,393 significant earthquakes with location, magnitude, depth, intensity and impact fields |
| `tsunamis.geojson` | 2,512 tsunami events, linked to the earthquakes that caused them |
| `TectonicPlateBoundaries.geojson` | Tectonic plate boundary lines |

The records were exported as tab-separated files and converted to GeoJSON with `tsv_to_geojson.py`, which turns each row with valid coordinates into a point feature and keeps all non-empty fields as properties.

## Run locally

```bash
cd frontend
npm install
npm run start
```

To build the static site:

```bash
cd frontend
npx vite build      # output in frontend/dist
```

Every push to `main` builds the site and deploys it to GitHub Pages through `.github/workflows/deploy-pages.yml`.

## Built with

D3 for the timeline, scatterplot and detail view; OpenLayers for the map and heatmap; Vite for development and builds.

## Changes since the course

Made by Shreya Sebastian in this fork after the course ended:

- Deployment to GitHub Pages.
- Timeline colours on a log scale with a multi-hue palette, so year ranges with few records stay visible; selections are shown in a contrasting orange-red palette.
- Header icons removed; the title now has a subtitle and a colour bar in the timeline palette.
- Point-of-interest buttons are green, so they are not confused with the blue tsunami points.
- The column for earthquakes without a recorded month (renamed from Undef to Unknown and set slightly apart) can now be selected like any month; before, those earthquakes were left out of every timeline selection.

## Authors

Group project by Wouter Büthker, Alperen Güncan, Amanda and Shreya Sebastian. The original repository is [WouterButhker/Earthquakes](https://github.com/WouterButhker/Earthquakes).
