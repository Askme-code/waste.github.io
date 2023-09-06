
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "WasteCollectioncenter_1": {
            "type": "geojson",
            "data": json_WasteCollectioncenter_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_WasteCollectioncenter_1_0",
            "type": "circle",
            "source": "WasteCollectioncenter_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 26.190464285714285, 2], 'circle-color': '#b80808', 'circle-opacity': 1.0, 'circle-stroke-width': 0.7142857142857143, 'circle-stroke-color': '#b80808'}
        }
],
}