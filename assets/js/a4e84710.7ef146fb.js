"use strict";(self.webpackChunkoverture_how_to=self.webpackChunkoverture_how_to||[]).push([[289],{4878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>N,default:()=>R,frontMatter:()=>D,metadata:()=>O,toc:()=>L});var a=n(5893),o=n(1151),i=n(9286),l=n(4866),s=n(5162),r=n(7294),c=n(4613),d=n.n(c),p=n(8999),m="#3063d2",h="#09bac6",u="#EBD5BD",x="#dce6ef",g="#a7bfd7",y="#071F3F",b="#071F3F",f="#dce6ef";const j={placeHighZoom:{id:"placeHighZoom",type:"symbol",source:"placenames","source-layer":"placenames",minzoom:9,maxzoom:24,layout:{"text-field":["get","name"],"text-font":["Noto Sans Bold"],"text-size":["step",["zoom"],14,10,["match",["get","locality_type"],["borough"],14,["suburb"],12,0],12,["match",["get","locality_type"],["borough"],16,["suburb"],14,["neighborhood"],10,0],14,["match",["get","locality_type"],["borough"],18,["suburb"],16,["neighborhood"],12,0],15,["match",["get","locality_type"],["borough"],20,["suburb"],18,["neighborhood"],14,0],16,["match",["get","locality_type"],["borough"],20,["suburb"],18,["neighborhood"],14,["block"],12,0]],"text-transform":["step",["zoom"],"none",11,"uppercase"],"text-max-width":6,"symbol-avoid-edges":!0,"text-padding":10,"text-justify":"auto"},paint:{"text-color":b,"text-halo-color":f,"text-halo-width":1}},placeMidZoom:{id:"placeMidZoom",type:"symbol",source:"placenames","source-layer":"placenames",minzoom:8,maxzoom:24,filter:["all",["has","name"],["step",["zoom"],["==","$type","Point"],8,["match",["get","localityType"],["settlement"],!0,!1],9,["match",["get","localityType"],["urban","settlement"],!0,!1]]],layout:{"text-field":["get","name"],"text-font":["Noto Sans Bold"],"text-size":["step",["zoom"],10,9,["match",["get","localityType"],["megacity"],20,["metropolis"],18,["city"],16,["municipality"],14,["town"],10,0],10,["match",["get","localityType"],["megacity"],22,["metropolis"],20,["city"],18,["municipality"],16,["town"],12,0],12,["match",["get","localityType"],["megacity"],22,["metropolis"],20,["city"],18,["municipality"],16,["town"],12,["village"],10,0],14,["match",["get","subclass"],["megacity"],22,["metropolis"],20,["city"],18,["municipality"],16,["town"],14,["village","hamlet"],12,0],15,["match",["get","subclass"],["megacity"],22,["metropolis"],20,["city"],18,["municipality"],16,["town"],14,["village","hamlet"],14,0],16,["match",["get","subclass"],["village","hamlet"],16,0]],"text-transform":["step",["zoom"],"none",11,"uppercase"],"text-padding":["step",["zoom"],10,9,8,10,5,12,3],"text-max-width":6,"symbol-avoid-edges":!0,"symbol-sort-key":["get","sort_key"],"text-justify":"auto"},paint:{"text-color":b,"text-halo-color":f,"text-halo-width":1}}},w={id:"buildings",type:"fill-extrusion",minzoom:12,maxzoom:24,source:"buildings","source-layer":"buildings",paint:{"fill-extrusion-color":"#dce6ef","fill-extrusion-opacity":.6,"fill-extrusion-base":0,"fill-extrusion-height":["case",["has","height"],["to-number",["get","height"]],3.2]}},z={id:"placesLabel",type:"symbol",source:"places","source-layer":"places",filter:["all",["has","name"],[">",["get","confidence"],.75]],minzoom:15,maxzoom:24,layout:{"text-field":["concat","\u25a0\n",["get","name"]],"text-font":["Noto Sans Bold"],"text-max-width":5,"text-size":10,"text-line-height":1,"text-justify":"center","text-anchor":"center","text-radial-offset":.8,"text-padding":4},paint:{"text-color":b,"text-halo-color":f,"text-halo-width":1}},v={footwayCasing:{id:"footwayCasing",type:"line",source:"roads","source-layer":"roads",minzoom:15,maxzoom:24,filter:["match",["get","class"],["footway"],!0,!1],layout:{"line-cap":"round","line-join":"round"},paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],12,.25,20,1.3],"line-gap-width":["interpolate",["exponential",1.5],["zoom"],12,.5,16,3,22,25],"line-color":x}},footway:{id:"footway",type:"line",source:"roads","source-layer":"roads",minzoom:15,maxzoom:24,filter:["match",["get","class"],["footway"],!0,!1],layout:{"line-cap":"round","line-join":"round"},paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],12,.5,16,3,22,25],"line-color":"#b9ccdf"}},parkingAisleUnknownCasing:{id:"parkingAisleUnknownCasing",type:"line",source:"roads","source-layer":"roads",minzoom:14,maxzoom:24,filter:["match",["get","class"],["parking_aisle","unknown"],!0,!1],layout:{"line-cap":"round","line-join":"round"},paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],12,.25,20,1.3],"line-gap-width":["interpolate",["exponential",1.5],["zoom"],12,.5,16,3.5,22,75],"line-color":x}},residentialCasing:{id:"residentialCasing",type:"line",source:"roads","source-layer":"roads",minzoom:12,maxzoom:24,filter:["match",["get","class"],["residential"],!0,!1],layout:{"line-cap":"round","line-join":"round"},paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],12,.75,20,1.3],"line-gap-width":["interpolate",["exponential",1.5],["zoom"],12,1,16,6,22,125],"line-color":x}},secondaryTertiaryCasing:{id:"secondaryTertiaryCasing",type:"line",source:"roads","source-layer":"roads",minzoom:11,maxzoom:24,filter:["match",["get","class"],["secondary","tertiary"],!0,!1],paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],12,1,20,1.3],"line-gap-width":["interpolate",["exponential",1.5],["zoom"],10,.5,12,2.2,16,6.6,22,160],"line-color":x}},primaryCasing:{id:"primaryCasing",type:"line",source:"roads","source-layer":"roads",minzoom:8,maxzoom:24,filter:["match",["get","class"],["primary"],!0,!1],layout:{"line-cap":["step",["zoom"],"butt",16,"round"],"line-join":["step",["zoom"],"miter",16,"round"]},paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],12,1,20,1.4],"line-gap-width":["interpolate",["exponential",1.5],["zoom"],8,.5,12,3.1,16,9.3,22,175],"line-color":x}},parkingAisleUnknown:{id:"parkingAisleUnknown",type:"line",source:"roads","source-layer":"roads",minzoom:14,maxzoom:24,filter:["match",["get","class"],["parking_aisle","unknown"],!0,!1],layout:{"line-cap":"round","line-join":"round"},paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],12,.5,16,3.5,22,75],"line-color":g}},residential:{id:"residential",type:"line",source:"roads","source-layer":"roads",minzoom:12,maxzoom:24,filter:["match",["get","class"],["residential"],!0,!1],layout:{"line-cap":["step",["zoom"],"butt",13,"round"],"line-join":["step",["zoom"],"miter",13,"round"]},paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],12,1,16,6,22,125],"line-color":g}},secondaryTertiary:{id:"secondaryTertiary",type:"line",source:"roads","source-layer":"roads",minzoom:10,maxzoom:24,filter:["match",["get","class"],["secondary","tertiary"],!0,!1],layout:{"line-cap":["step",["zoom"],"butt",13,"round"],"line-join":["step",["zoom"],"miter",13,"round"]},paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],10,.5,12,2.2,16,6.6,22,160],"line-color":g}},primary:{id:"primary",type:"line",source:"roads","source-layer":"roads",minzoom:8,maxzoom:24,filter:["match",["get","class"],["primary"],!0,!1],layout:{"line-cap":["step",["zoom"],"butt",13,"round"],"line-join":["step",["zoom"],"miter",13,"round"]},paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],8,.5,12,3.1,16,9.3,22,175],"line-color":g}},motorwayCasing:{id:"motorwayCasing",type:"line",source:"roads","source-layer":"roads",minzoom:6,maxzoom:24,filter:["match",["get","class"],["motorway"],!0,!1],layout:{"line-cap":["step",["zoom"],"butt",13,"round"],"line-join":["step",["zoom"],"miter",13,"round"]},paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],12,1,20,1.4],"line-gap-width":["interpolate",["exponential",1.5],["zoom"],6,.5,12,3.3,16,9.9,22,175],"line-color":x}},motorway:{id:"motorway",type:"line",source:"roads","source-layer":"roads",minzoom:6,maxzoom:24,filter:["match",["get","class"],["motorway"],!0,!1],layout:{"line-cap":["step",["zoom"],"butt",12,"round"],"line-join":["step",["zoom"],"miter",12,"round"]},paint:{"line-width":["interpolate",["exponential",1.5],["zoom"],6,.5,12,3.3,16,9.9,22,175],"line-color":"#95b2d0"}},residentialLabel:{id:"residentialLabel",type:"symbol",source:"roads","source-layer":"roads",minzoom:13,maxzoom:24,filter:["match",["get","class"],["residential","unknown"],!0,!1],layout:{"text-transform":"uppercase","text-size":["interpolate",["linear"],["zoom"],13,9,18,["match",["get","class"],["access","path"],9,12]],"text-max-angle":30,"symbol-spacing":["interpolate",["linear"],["zoom"],13,200,16,400],"text-field":["get","name"],"text-font":["Noto Sans Bold"],"symbol-placement":"line","text-padding":5},paint:{"text-color":y,"text-halo-color":"hsl(0,0%,100%)","text-halo-width":1}},highwayLabel:{id:"highwayLabel",type:"symbol",source:"roads","source-layer":"roads",minzoom:13,maxzoom:24,filter:["match",["get","class"],["motorway","primary","secondary","tertiary"],!0,!1],layout:{"text-transform":"uppercase","text-size":["interpolate",["linear"],["zoom"],13,9,18,["match",["get","class"],["access","path"],9,12]],"text-max-angle":30,"symbol-spacing":["interpolate",["linear"],["zoom"],13,200,16,400],"text-field":["get","name"],"text-font":["Noto Sans Bold"],"symbol-placement":"line"},paint:{"text-color":y,"text-halo-color":"hsl(0,0%,100%)","text-halo-width":1}}},S={land:{id:"land",type:"fill",source:"base","source-layer":"land",filter:["match",["get","subtype"],["land"],!0,!1],minzoom:0,maxzoom:24,paint:{"fill-color":"#ccdae8"}},sand:{id:"sand",type:"fill",source:"base","source-layer":"land",filter:["match",["get","subtype"],["sand"],!0,!1],minzoom:0,maxzoom:24,paint:{"fill-color":u}},wetland:{id:"wetland",type:"fill",source:"base","source-layer":"land",filter:["match",["get","subtype"],["wetland"],!0,!1],minzoom:0,maxzoom:24,paint:{"fill-color":"#00A9BF"}},forest:{id:"forest",type:"fill",source:"base","source-layer":"land",filter:["match",["get","subtype"],["forest","grass","scrub"],!0,!1],minzoom:0,maxzoom:24,paint:{"fill-color":"#09bac6"}}},_={parks:{id:"parks",type:"fill",source:"base","source-layer":"landuse",filter:["match",["get","subtype"],["park"],!0,!1],minzoom:0,maxzoom:24,paint:{"fill-color":h}},golfGreens:{id:"golfGreens",type:"fill",source:"base","source-layer":"landuse",filter:["==",["get","class"],"fairway"],minzoom:0,maxzoom:24,paint:{"fill-color":h}},recSand:{id:"golfBunker",type:"fill",source:"base","source-layer":"landuse",filter:["match",["get","surface"],["recreation_sand"],!0,!1],minzoom:0,maxzoom:24,paint:{"fill-color":u}}},T={waterPolygons:{id:"water-fill",type:"fill",source:"base","source-layer":"water",filter:["==",["geometry-type"],"Polygon"],minzoom:0,maxzoom:24,paint:{"fill-color":m}},waterLinestrings:{id:"water-line",type:"line",source:"base","source-layer":"water",filter:["==",["geometry-type"],"LineString"],minzoom:0,maxzoom:24,paint:{"line-width":3,"line-color":m}}};function A(){const e=(0,r.useRef)(null),t=(0,r.useRef)(null),[n]=(0,r.useState)(-122.33),[o]=(0,r.useState)(47.6),[i]=(0,r.useState)(13);return(0,r.useEffect)((()=>{if(t.current)return;let a=new p.b$;d().addProtocol("pmtiles",a.tile),t.current=new(d().Map)({container:e.current,center:[n,o],zoom:i,minZoom:10,pitch:45,hash:!0,cooperativeGestures:{windowsHelpText:"Use Ctrl + scroll to zoom the map.",macHelpText:"Use \u2318 + scroll to zoom the map.",mobileHelpText:"Use 2 fingers to move the map."},style:{light:{anchor:"viewport",color:"white",intensity:.8},version:8,glyphs:"https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",sources:{roads:{type:"vector",url:"pmtiles://../../example-map/tiles/roads.pmtiles"},places:{type:"vector",url:"pmtiles://../../example-map/tiles/places.pmtiles"},placenames:{type:"vector",url:"pmtiles://../../example-map/tiles/placenames.pmtiles"},buildings:{type:"vector",url:"pmtiles://../../example-map/tiles/buildings.pmtiles"},base:{type:"vector",url:"pmtiles://../../example-map/tiles/base.pmtiles"}},layers:[{id:"background",type:"background",minzoom:0,maxzoom:24,paint:{"background-color":"hsl(216,20%,95%)"}},S.land,S.sand,S.wetland,S.forest,_.recSand,_.parks,_.golfGreens,T.waterPolygons,T.waterLinestrings,v.footwayCasing,v.footway,v.parkingAisleUnknownCasing,v.residentialCasing,v.secondaryTertiaryCasing,v.primaryCasing,v.parkingAisleUnknown,v.residential,v.secondaryTertiary,v.primary,v.motorwayCasing,v.motorway,v.residentialLabel,v.highwayLabel,w,z,j.placeHighZoom,j.placeMidZoom]}}),t.current.addControl(new(d().NavigationControl),"top-right"),t.current.addControl(new(d().FullscreenControl));return t.current.addControl(new class{constructor(e){switch(this._options={...e},this._container=document.createElement("div"),this._container.classList.add("maplibregl-ctrl"),this._container.classList.add("closed"),this._options.expandDirection||"right"){case"top":this._container.classList.add("reverse");case"down":this._container.classList.add("column");break;case"left":this._container.classList.add("reverse");case"right":this._container.classList.add("row")}}onAdd(e){this._map=e;const t=document.createElement("input");t.type="range",t.value=50,t.addEventListener("change",(t=>{console.log(t.target.value),e.setFilter("placesLabel",["all",[">=",["number",["get","confidence"]],t.target.value/100]])}));const n=document.createElement("button");n.classList.add("layer"),n.classList.add("active"),n.innerHTML="Places",n.addEventListener("click",(()=>{"visible"==e.getLayoutProperty("placesLabel","visibility")?(e.setLayoutProperty("placesLabel","visibility","none"),n.classList.remove("active"),t.disabled=!0):(e.setLayoutProperty("placesLabel","visibility","visible"),n.classList.add("active"),t.disabled=!1)}));const a=document.createElement("div");return a.appendChild(n),a.appendChild(t),this._container.appendChild(a),this._container}onRemove(){this._container.parentNode?.removeChild(this._container),delete this._map}},"bottom-left"),t.current.addControl(new(d().AttributionControl)({customAttribution:'<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>, <a href="https://overturemaps.org" target="_blank">OvertureMaps Foundation</a>'}),"bottom-right"),()=>{d().removeProtocol("pmtiles")}}),[n,o,i]),(0,a.jsx)("div",{className:"map-wrap",children:(0,a.jsx)("div",{ref:e,className:"map"})})}const D={title:"Build a Basemap"},N="Building a Basemap With Overture",O={id:"visualizing-data/build-a-map",title:"Build a Basemap",description:"Step 1: Download only what you need",source:"@site/docs/visualizing-data/build-a-map.mdx",sourceDirName:"visualizing-data",slug:"/visualizing-data/build-a-map",permalink:"/visualizing-data/build-a-map",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Build a Basemap"},sidebar:"docs",previous:{title:"Visualizing Places Data in Rapid",permalink:"/visualizing-data/visualizing-places"},next:{title:"Global Entity Reference System",permalink:"/gers/"}},E={},L=[{value:"Step 1: Download only what you need",id:"step-1-download-only-what-you-need",level:3},{value:"Step 2: Creating a map with Maplibre + PMTiles",id:"step-2-creating-a-map-with-maplibre--pmtiles",level:3},{value:"Step 3: Styling the layers",id:"step-3-styling-the-layers",level:3}];function q(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"building-a-basemap-with-overture",children:"Building a Basemap With Overture"}),"\n",(0,a.jsx)(A,{}),"\n",(0,a.jsx)(t.h3,{id:"step-1-download-only-what-you-need",children:"Step 1: Download only what you need"}),"\n",(0,a.jsxs)(t.p,{children:["Overture data is released in the cloud-native format ",(0,a.jsx)(t.code,{children:"geoparquet"}),". It is further partitioned by ",(0,a.jsx)(t.em,{children:"theme"})," and ",(0,a.jsx)(t.em,{children:"type"}),". Downloading the data through a tool like ",(0,a.jsx)(t.a,{href:"https://duckdb.org/",children:"DuckDB"})," can take advantage of these properties, giving the best performance. After downloading and converting the data to GeoJSON, we can use ",(0,a.jsx)(t.a,{href:"https://github.com/felt/tippecanoe",children:"tippecanoe"})," to create a ",(0,a.jsx)(t.a,{href:"https://github.com/protomaps/PMTiles",children:(0,a.jsx)(t.code,{children:"PMTiles"})})," archive for each theme."]}),"\n",(0,a.jsxs)(l.Z,{queryString:"theme-data",children:[(0,a.jsxs)(s.Z,{value:"places",label:"Places",default:!0,children:[(0,a.jsxs)(t.p,{children:["The places data theme represents business and points of interest in the real world. Read more about the places data schema in the ",(0,a.jsx)(t.a,{href:"https://docs.overturemaps.org/schema/reference/places/place",children:"documentation"}),"."]}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The following DuckDB query downloads places data within a specific bounding box and writes a ",(0,a.jsx)(t.code,{children:"GeoJSON"})," file."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"  LOAD spatial;\n  LOAD httpfs;\n  -- Access the data on AWS in this example\n  SET s3_region='us-west-2';\n\n  COPY (\n      SELECT\n          names.primary AS name,\n          categories.main as category,\n          ROUND(confidence,2) as confidence,\n          ST_GeomFromWKB(geometry) as geometry\n      FROM read_parquet('s3://overturemaps-us-west-2/release/2024-03-12-alpha.0/theme=places/*/*',\n                          filename=true, hive_partitioning=1)\n      WHERE\n          -- Point geometry doesn't require looking at both min and max:\n          bbox.minX BETWEEN -122.68 AND -121.98 AND\n          bbox.minY BETWEEN 47.36 AND 47.79)\n  TO 'seattle_places.geojson'\n  WITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326');\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Next, create a ",(0,a.jsx)(t.code,{children:"pmtiles"})," archive from ",(0,a.jsx)(t.code,{children:"seattle_places.geojson"})," with ",(0,a.jsx)(t.a,{href:"https://github.com/felt/tippecanoe",children:"tippecanoe"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"tippecanoe -fo places.pmtiles -Z13 -z13 -l places seattle_places.geojson\n"})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Tippecanoe flag explanation"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-fo places.pmtiles"})," The output file will be places.pmtiles. It will be overwritten if it exists."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-Z13"})," and ",(0,a.jsx)(t.code,{children:"-z13"})," will produce a tileset starting at zoom 13 and going up to zoom 13 (only 1 zoom level)."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-l places"}),' names the layer "places"']}),"\n"]})]}),"\n"]}),"\n"]})]}),(0,a.jsxs)(s.Z,{value:"placenames",label:"Placenames",default:!0,children:[(0,a.jsx)(t.p,{children:"The admins theme contains named localities and their administrative boundaries. To add labels for populated places to the map, we query the admins theme to get the primary name for each locality."}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The following DuckDB queries downloads placenames from the admins theme within the bounding box and saves it as ",(0,a.jsx)(t.code,{children:"seattle_placenames.geojson"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:" LOAD spatial;\n LOAD azure;\n -- Access the data on Microsoft Azure in this example\n SET azure_storage_connection_string = 'DefaultEndpointsProtocol=https;AccountName=overturemapswestus2;AccountKey=;EndpointSuffix=core.windows.net';\n COPY (\n     SELECT\n         subtype,\n         locality_type,\n         names.primary as name,\n         ST_GeomFromWKB(geometry) as geometry\n     FROM read_parquet('azure://release/2024-03-12-alpha.0/theme=admins/type=locality/*',\n                         filename=true, hive_partitioning=1)\n     WHERE bbox.minX > -122.679404 AND bbox.maxX < -121.978275\n     AND bbox.minY > 47.360619 AND bbox.maxY < 47.786336\n ) TO 'seattle_placenames.geojson'\n WITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326');\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Run ",(0,a.jsx)(t.a,{href:"https://github.com/felt/tippecanoe",children:"tippecanoe"})," to produce a ",(0,a.jsx)(t.code,{children:"pmtiles"})," archive from ",(0,a.jsx)(t.code,{children:"seattle_placenames.geojson"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"tippecanoe -fo placenames.pmtiles -Z5 -z10 -l placenames seattle_placenames.geojson\n"})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Tippecanoe flag explanation"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-fo placenames.pmtiles"})," is our output file. It will be overwritten if it exists."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-Z5"})," and ",(0,a.jsx)(t.code,{children:"-z10"})," will produce a tileset starting at zoom 5 and going up to zoom 13."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-l placenames"}),' names the layer "placenames"']}),"\n"]})]}),"\n"]}),"\n"]})]}),(0,a.jsxs)(s.Z,{value:"buildings",label:"Buildings",default:!0,children:[(0,a.jsx)(t.p,{children:"Overture contains billions of buildings distirbuted across hundreds of geoparquet files."}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The following DuckDB query reads only the metadata of each file and then downloads ",(0,a.jsx)(t.em,{children:"only"})," the buildings within our bounding box to a line-delimited ",(0,a.jsx)(t.code,{children:"GeoJSONSeq"})," file."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"LOAD spatial;\nLOAD azure;\n\n-- Access the data on Microsoft Azure in this example\nSET azure_storage_connection_string = 'DefaultEndpointsProtocol=https;AccountName=overturemapswestus2;AccountKey=;EndpointSuffix=core.windows.net';\nCOPY (\nSELECT\n    names.primary as name,\n    height,\n    level,\n    ST_GeomFromWKB(geometry) as geometry\nFROM read_parquet('azure://release/2024-03-12-alpha.0/theme=buildings/type=building/*', filename=true, hive_partitioning=1)\nWHERE bbox.minX > -122.679404 AND bbox.maxX < -121.978275\nAND bbox.minY > 47.360619 AND bbox.maxY < 47.786336\n) TO 'seattle_buildings.geojsonseq'\nWITH (FORMAT GDAL, DRIVER 'GeoJSONSeq', SRS 'EPSG:4326');\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Run ",(0,a.jsx)(t.a,{href:"https://github.com/felt/tippecanoe",children:"tippecanoe"})," to produce a ",(0,a.jsx)(t.code,{children:"pmtiles"})," archive from ",(0,a.jsx)(t.code,{children:"seattle_buildings.geojsonseq"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"tippecanoe -fo buildings.pmtiles -Z13 -z13 -l buildings -P seattle_buildings.geojsonseq\n"})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Tippecanoe flag explanation"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-fo buildings.pmtiles"})," is our output file. It will be overwritten if it exists."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-Z13"})," and ",(0,a.jsx)(t.code,{children:"-z13"})," will produce a tileset starting at zoom 13 and going up to zoom 13 (so only 1 zoom level)."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-l buildings"}),' names the layer "buildings"']}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-P"})," allows tippecanoe to read the file in parallel. Since we created a GeoJSON sequence file instead of a single GeoJSON Feature Collection, tippecanoe can process the input data more efficiently."]}),"\n"]})]}),"\n"]}),"\n"]})]}),(0,a.jsxs)(s.Z,{value:"roads",label:"Roads",default:!0,children:[(0,a.jsxs)(t.p,{children:["Overture's transportation theme has two types: ",(0,a.jsx)(t.code,{children:"connectors"})," and ",(0,a.jsx)(t.code,{children:"segments"}),". Since we want to render the road lines, we will query for ",(0,a.jsx)(t.code,{children:"type=segment"})]}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["This DuckDB query downloads road segments from Overture to a ",(0,a.jsx)(t.code,{children:"GeoJSONSeq"})," file."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"LOAD spatial;\nLOAD httpfs;\nCOPY (\n    SELECT\n        level,\n        names.primary AS name,\n        JSON_EXTRACT_STRING(road, '$.class') AS class,\n        ST_GeomFromWKB(geometry) as geometry\n    FROM read_parquet('s3://overturemaps-us-west-2/release/2024-03-12-alpha.0/theme=transportation/type=segment/*',filename=true, hive_partitioning=1)\n    WHERE\n        subtype = 'road'\n        AND bbox.minX > -122.679404 AND bbox.maxX < -121.978275\n        AND bbox.minY > 47.360619 AND bbox.maxY < 47.786336\n) TO 'seattle_roads.geojsonseq'\nWITH (FORMAT GDAL, DRIVER 'GeoJSONSeq', SRS 'EPSG:4326');\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Run ",(0,a.jsx)(t.a,{href:"https://github.com/felt/tippecanoe",children:"tippecanoe"})," to produce a ",(0,a.jsx)(t.code,{children:"pmtiles"})," archive from ",(0,a.jsx)(t.code,{children:"seattle_roads.geojsonseq"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"tippecanoe -fo roads.pmtiles -Z10 -B10 -z13 -l roads -P seattle_roads.geojsonseq\n"})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Tippecanoe flag explanation"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-fo roads.pmtiles"})," is our output file. It will be overwritten if it exists."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-Z10"})," and ",(0,a.jsx)(t.code,{children:"-z13"})," will produce a tileset starting at zoom 10 and going up to zoom 13."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-B10"})," will ensure that all featuers are present from zoom level 10."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-l roads"}),' names the layer "roads"']}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-P"})," allows tippecanoe to read the file in parallel. Since we created a GeoJSON sequence file instead of a single GeoJSON Feature Collection, tippecanoe can process the input data more efficiently."]}),"\n"]})]}),"\n"]}),"\n"]})]}),(0,a.jsx)(s.Z,{value:"base",label:"Base (Land, Land Use & Water)",default:!0,children:(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"land"}),", ",(0,a.jsx)(t.code,{children:"land_use"}),", and ",(0,a.jsx)(t.code,{children:"water"})," are the three types available in the ",(0,a.jsx)(t.code,{children:"base"})," theme. We can use 3 separate queries to obtain the features and then we can combine them into a single pmtiles archive with different layers."]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsxs)("summary",{children:["1. DuckDB query to produce ",(0,a.jsx)(t.code,{children:"land.geojsonseq"})]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"LOAD spatial;\nLOAD httpfs;\nCOPY (\nSELECT\n    subtype,\n    class,\n    names.primary AS name,\n    ST_GeomFromWKB(geometry) as geometry\nFROM read_parquet('s3://overturemaps-us-west-2/release/2024-03-12-alpha.0/theme=base/type=land/*',filename=true, hive_partitioning=1)\nWHERE\n    bbox.minX > -122.679404 AND bbox.maxX < -121.978275\n    AND bbox.minY > 47.360619 AND bbox.maxY < 47.786336\n)\nTO 'seattle_land.geojsonseq'\nWITH (FORMAT GDAL, DRIVER 'GeoJSONSeq', SRS 'EPSG:4326');\n"})})]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsxs)("summary",{children:["2. DuckDB query to produce ",(0,a.jsx)(t.code,{children:"land_use.geojsonseq"})]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"LOAD spatial;\nLOAD httpfs;\nCOPY (\n    SELECT\n        subtype,\n        class,\n        names.primary AS name,\n        surface,\n        ST_GeomFromWKB(geometry) as geometry\n    FROM read_parquet('s3://overturemaps-us-west-2/release/2024-03-12-alpha.0/theme=base/type=land_use/*',filename=true, hive_partitioning=1)\n    WHERE\n        bbox.minX > -122.679404 AND bbox.maxX < -121.978275\n        AND bbox.minY > 47.360619 AND bbox.maxY < 47.786336\n    )\nTO 'seattle_land_use.geojsonseq'\nWITH (FORMAT GDAL, DRIVER 'GeoJSONSeq', SRS 'EPSG:4326');\n"})})]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsxs)("summary",{children:["3. DuckDB query to produce ",(0,a.jsx)(t.code,{children:"water.geojsonseq"})]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"LOAD spatial;\nLOAD httpfs;\nCOPY (\n    SELECT\n        subtype,\n        class,\n        names.primary AS name,\n        ST_GeomFromWKB(geometry) as geometry\n    FROM read_parquet('s3://overturemaps-us-west-2/release/2024-03-12-alpha.0/theme=base/type=water/*',filename=true, hive_partitioning=1)\n    WHERE\n        subtype in ('ocean', 'lake', 'pond', 'reservoir', 'river', 'stream', 'water', 'canal')\n        AND bbox.minX > -123 AND bbox.maxX < -122\n        AND bbox.minY > 47 AND bbox.maxY < 48\n    )\nTO 'seattle_water.geojsonseq'\nWITH (FORMAT GDAL, DRIVER 'GeoJSONSeq', SRS 'EPSG:4326');\n"})}),(0,a.jsx)(t.p,{children:"Note: We use a slightly larger bounding box to capture the Ocean water polygons, too"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Run ",(0,a.jsx)(t.a,{href:"https://github.com/felt/tippecanoe",children:"tippecanoe"})," to produce a ",(0,a.jsx)(t.code,{children:"pmtiles"})," archive with three ",(0,a.jsx)(t.code,{children:"geojsonseq"})," file as input:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"tippecanoe -fo base.pmtiles -Z8 -z13 -P \\\n    --named-layer=land:seattle_land.geojsonseq \\\n    --named-layer=landuse:seattle_land_use.geojsonseq \\\n    --named-layer=water:seattle_water.geojsonseq\n"})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Tippecanoe flag explanation"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-fo tiles/base.pmtiles"})," is our output file. It will be overwritten if it exists."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-Z8"})," and ",(0,a.jsx)(t.code,{children:"-z13"})," will produce a tileset starting at zoom 8 going up to zoom 13."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"--named-layer=land:seattle_land.geojsonseq"})," creates the ",(0,a.jsx)(t.code,{children:"land"})," layer from the contents of ",(0,a.jsx)(t.code,{children:"seattle_land.geojson"})," (and similarly for the other files)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"-P"})," allows tippecanoe to read the file in parallel. Since we created a GeoJSON sequence file instead of a single GeoJSON Feature Collection, tippecanoe can process the input data more efficiently."]}),"\n"]})]}),"\n"]}),"\n"]})})]}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.h3,{id:"step-2-creating-a-map-with-maplibre--pmtiles",children:"Step 2: Creating a map with Maplibre + PMTiles"}),"\n",(0,a.jsx)(t.p,{children:"At this point, we have created five PMTiles archives from the five Overture themes:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"places.pmtiles"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"placenames.pmtiles"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"buildings.pmtiles"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"roads.pmtiles"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"base.pmtiles"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The map on this page combines a ",(0,a.jsx)(t.a,{href:"https://docs.maptiler.com/react/maplibre-gl-js/how-to-use-maplibre-gl-js/",children:"react maplibre example"})," with ",(0,a.jsx)(t.a,{href:"https://codesandbox.io/s/black-dream-oycvf2?file=/src/App.js",children:"PMTiles"}),". You can ",(0,a.jsx)(t.a,{href:"https://github.com/OvertureMaps/docs/blob/main/src/components/map.js",children:"view the source"})," for the above map on github for a complete example using react, or, check out the ",(0,a.jsx)(t.a,{href:"https://labs.overturemaps.org/overture-with-daylight",children:"map based on July's release"})," for a non-react implementation of PMTiles."]}),"\n",(0,a.jsxs)(t.p,{children:["Using PMTiles with react requires adding the ",(0,a.jsx)(t.a,{href:"https://docs.protomaps.com/pmtiles/maplibre",children:"PMtiles protocol"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import maplibregl from 'maplibre-gl';\nimport { Protocol } from 'pmtiles';\n\nuseEffect(() => {\n  let protocol = new Protocol();\n  maplibregl.addProtocol(\"pmtiles\",protocol.tile);\n\n  ... initialize your map here ...\n\n  return () => {\n    maplibregl.removeProtocol(\"pmtiles\");\n  }\n}, []);\n"})}),"\n",(0,a.jsx)(t.p,{children:"Then, reference the tile archives with a relative path when initializing the map:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'  style: {\n    sources: {\n      roads: {\n        type: "vector",\n        url: "pmtiles://../example-map/tiles/roads.pmtiles"\n      },\n      places: {\n        type: "vector",\n        url: "pmtiles://../example-map/tiles/places.pmtiles"\n      },\n    ...\n'})}),"\n",(0,a.jsx)(t.h3,{id:"step-3-styling-the-layers",children:"Step 3: Styling the layers"}),"\n",(0,a.jsxs)(t.p,{children:["Each tab below contains the complete styles in the ",(0,a.jsx)(t.a,{href:"https://maplibre.org/maplibre-style-spec/",children:"Maplibre Style Spec"})," for the map on this page."]}),"\n",(0,a.jsxs)(l.Z,{queryString:"map-layer",children:[(0,a.jsx)(s.Z,{value:"places",label:"Places",default:!0,children:(0,a.jsx)(i.Z,{language:"json",children:JSON.stringify(z,null,2)})}),(0,a.jsx)(s.Z,{value:"placenames",label:"Placenames",default:!0,children:(0,a.jsx)(i.Z,{language:"json",children:JSON.stringify(j,null,2)})}),(0,a.jsx)(s.Z,{value:"buildings",label:"Buildings",default:!0,children:(0,a.jsx)(i.Z,{language:"json",children:JSON.stringify(w,null,2)})}),(0,a.jsx)(s.Z,{value:"roads",label:"Roads",default:!0,children:(0,a.jsx)(i.Z,{language:"json",children:JSON.stringify(v,null,2)})}),(0,a.jsx)(s.Z,{value:"land",label:"Land",default:!0,children:(0,a.jsx)(i.Z,{language:"json",children:JSON.stringify(S,null,2)})}),(0,a.jsx)(s.Z,{value:"landuse",label:"Landuse",default:!0,children:(0,a.jsx)(i.Z,{language:"json",children:JSON.stringify(_,null,2)})}),(0,a.jsx)(s.Z,{value:"water",label:"Water",default:!0,children:(0,a.jsx)(i.Z,{language:"json",children:JSON.stringify(T,null,2)})})]})]})}function R(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(q,{...e})}):q(e)}}}]);