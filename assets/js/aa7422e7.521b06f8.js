"use strict";(self.webpackChunkoverture_schema=self.webpackChunkoverture_schema||[]).push([[177],{3821:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>N,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=t(7462),l=(t(7294),t(3905)),o=(t(2403),t(4762)),i=t(2425);const r={title:"Build a Basemap"},p="Building a Basemap from Overture Data",s={unversionedId:"using-the-data/build-a-map",id:"using-the-data/build-a-map",title:"Build a Basemap",description:"Step 1: Download the Data",source:"@site/docs/using-the-data/build-a-map.mdx",sourceDirName:"using-the-data",slug:"/using-the-data/build-a-map",permalink:"/using-the-data/build-a-map",draft:!1,tags:[],version:"current",frontMatter:{title:"Build a Basemap"},sidebar:"docs",previous:{title:"Locally (DuckDB)",permalink:"/accessing-the-data/locally"},next:{title:"Visualizing Places Data in Rapid",permalink:"/visualizing_places_data/visualizing-places"}},m={},u=[{value:"Step 1: Download the Data",id:"step-1-download-the-data",level:3}],c={toc:u},d="wrapper";function N(e){let{components:a,...t}=e;return(0,l.kt)(d,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"building-a-basemap-from-overture-data"},"Building a Basemap from Overture Data"),(0,l.kt)("h3",{id:"step-1-download-the-data"},"Step 1: Download the Data"),(0,l.kt)("p",null,"Because Overture data is released as a single collection of data in a cloud-native format (parquet), interfacing with the data through a service that can take advantage of the cloud-native properties of the data."),(0,l.kt)("p",null,"The queries presented here are meant to run in Amazon Athena against the ",(0,l.kt)("inlineCode",{parentName:"p"},"overture_2023_10_19_alpha_0")," table, as set up in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OvertureMaps/data#accessing-overture-maps-data-1"},"these instructions"),"."),(0,l.kt)("p",null,"Below are different queries for each theme that extract only the relevant attributes for each feature within a specific bounding box. In this case, Seattle, Washington, USA. Each Athena query produces a ",(0,l.kt)("inlineCode",{parentName:"p"},"CSV")," file which can be turned into ",(0,l.kt)("inlineCode",{parentName:"p"},"GeoJSON")," file using ",(0,l.kt)("a",{parentName:"p",href:"https://duckdb.org/"},"DuckDB")," and then run through ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/felt/tippecanoe"},"tippecanoe")," to produce a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/protomaps/PMTiles"},(0,l.kt)("inlineCode",{parentName:"a"},"PMTiles"))," archive:"),(0,l.kt)(o.Z,{queryString:"athena-query",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"buildings",label:"Buildings",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Athena query to produce ",(0,l.kt)("inlineCode",{parentName:"p"},"buildings.csv"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT class,\n    TRY(FILTER(names.common, x -> x.language = 'local')[1].value) as local_name,\n    height,\n    level,\n    CAST(sources AS JSON) as sources,\n    ST_ASTEXT(ST_GeomFromBinary(geometry)) as geometry_wkt\nFROM overture_2023_10_19_alpha_0\nWHERE theme = 'buildings' AND type = 'building'\n    AND bbox.minX > -122.679404 AND bbox.maxX < -121.978275\n    AND bbox.minY > 47.360619 AND bbox.maxY < 47.786336\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use DuckDB to convert ",(0,l.kt)("inlineCode",{parentName:"p"},"buildings.csv")," into a GeoJSONSeq file."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"DuckDB Query ( ",(0,l.kt)("code",null,"SQL")," )"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"COPY (\n    SELECT\n        \"class\",\n        \"local_name\",\n        \"height\",\n        \"level\",\n        \"sources\",\n        ST_GeomFromText(geometry_wkt) as geometry\n    FROM read_csv('csv/buildings.csv', header=True,\n        COLUMNS={\n            'class':'VARCHAR',\n            'local_name':'VARCHAR',\n            'height':'DOUBLE',\n            'level':'VARCHAR',\n            'sources':'VARCHAR',\n            'geometry_wkt':'VARCHAR'\n        }\n    )\n    ) TO 'geojson/buildings.geojsonseq'\nWITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');\n")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/felt/tippecanoe"},"tippecanoe")," to produce a ",(0,l.kt)("inlineCode",{parentName:"p"},"pmtiles")," archive from ",(0,l.kt)("inlineCode",{parentName:"p"},"buildings.geojsonseq")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tippecanoe -o tiles/buildings.pmtiles -Z13 -z13 -l buildings -P geojson/buildings.geojsonseq\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Tippecanoe flag explanation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-o tiles/buildings.pmtiles")," is our output file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-Z13")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"-z13")," will produce a tileset starting at zoom 13 and going up to zoom 13 (so only 1 zoom level)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-l buildings"),' names the layer "buildings"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-P")," allows tippecanoe to read the file in parallel. Since we created a GeoJSON sequence file instead of a single GeoJSON Feature Collection, tippecanoe can process the input data more efficiently.")))))),(0,l.kt)(i.Z,{value:"roads",label:"Roads",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Athena query to produce ",(0,l.kt)("inlineCode",{parentName:"p"},"roads.csv"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    level,\n    JSON_EXTRACT_SCALAR(road, '$.class') AS road_class,\n    JSON_EXTRACT_SCALAR(road, '$.roadNames.common[0].value') AS road_name,\n    sources[1].dataset AS source,\n    ST_ASTEXT(ST_GeomFromBinary(geometry)) as geometry_wkt\nFROM overture_2023_10_19_alpha_0\nWHERE theme = 'transportation' AND type = 'segment'\n    AND bbox.minX > -122.679404 AND bbox.maxX < -121.978275\n    AND bbox.minY > 47.360619 AND bbox.maxY < 47.786336\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use DuckDB to convert ",(0,l.kt)("inlineCode",{parentName:"p"},"roads.csv")," into a GeoJSONSeq file."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"COPY (\n    SELECT\n        road_class as class,\n        road_name as name,\n        level,\n        ST_GeomFromText(geometry_wkt) as geometry\n    FROM 'csv/roads.csv'\n    ) TO 'geojson/roads.geojsonseq'\nWITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/felt/tippecanoe"},"tippecanoe")," to produce a ",(0,l.kt)("inlineCode",{parentName:"p"},"pmtiles")," archive from ",(0,l.kt)("inlineCode",{parentName:"p"},"roads.geojsonseq")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tippecanoe -o tiles/roads.pmtiles -Z10 -B10 -z13 -l roads -P geojson/roads.geojsonseq\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Tippecanoe flag explanation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-o tiles/roads.pmtiles")," is our output file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-Z10")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"-z13")," will produce a tileset starting at zoom 10 and going up to zoom 13."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-B10")," will ensure that all featuers are present from zoom level 10."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-l roads"),' names the layer "roads"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-P")," allows tippecanoe to read the file in parallel. Since we created a GeoJSON sequence file instead of a single GeoJSON Feature Collection, tippecanoe can process the input data more efficiently.")))))),(0,l.kt)(i.Z,{value:"places",label:"Places",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Athena query to produce ",(0,l.kt)("inlineCode",{parentName:"p"},"places.csv"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    TRY(\n        FILTER(names.common, x->x.language = 'local') [ 1 ].value\n    ) as local_name,\n   categories.main as category,\n   ROUND(confidence,2) as confidence,\n   TRY(websites[1]) AS url,\n   TRY(addresses[1]) AS address,\n   sources[1] as source,\n   ST_ASTEXT(ST_GeomFromBinary(geometry)) as geometry_wkt\nFROM overture_2023_10_19_alpha_0\nWHERE theme = 'places' AND type = 'place'\n    AND bbox.minX > -122.679404 AND bbox.maxX < -121.978275\n    AND bbox.minY > 47.360619 AND bbox.maxY < 47.786336\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use DuckDB to convert ",(0,l.kt)("inlineCode",{parentName:"p"},"places.csv")," into a GeoJSONSeq file."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"COPY (\nSELECT\n    local_name as name,\n    confidence, category, url, address, source,\n    ST_GeomFromText(geometry_wkt) as geometry\nFROM 'csv/places.csv'\n) TO 'geojson/places.geojsonseq'\nWITH (FORMAT GDAL, DRIVER 'GeoJSONSeq', SRS 'EPSG:4326');\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/felt/tippecanoe"},"tippecanoe")," to produce a ",(0,l.kt)("inlineCode",{parentName:"p"},"pmtiles")," archive from ",(0,l.kt)("inlineCode",{parentName:"p"},"places.geojsonseq")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tippecanoe -fo tiles/places.pmtiles -Z13 -z13 -l places -P geojson/places.geojsonseq\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Tippecanoe flag explanation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-fo tiles/places.pmtiles")," is our output file, which we can overwrite (f) if it exists."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-Z13")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"-z13")," will produce a tileset starting at zoom 13 and going up to zoom 13 (so only 1 zoom level)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-l places"),' names the layer "buildings"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-P")," allows tippecanoe to read the file in parallel. Since we created a GeoJSON sequence file instead of a single GeoJSON Feature Collection, tippecanoe can process the input data more efficiently.")))))),(0,l.kt)(i.Z,{value:"water",label:"Water",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Athena query to produce ",(0,l.kt)("inlineCode",{parentName:"p"},"water.csv"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    subType,\n    class,\n    TRY(FILTER(names.common, x -> x.language = 'local')[1].value) as name,\n    height,\n    ST_ASTEXT(ST_GeomFromBinary(geometry)) as geometry_wkt\nFROM overture_2023_10_19_alpha_0\nWHERE theme = 'base' AND type = 'water' AND subType in ('ocean','lake','river')\n    AND bbox.minX > -122.679404 AND bbox.maxX < -121.978275\n    AND bbox.minY > 47.360619 AND bbox.maxY < 47.786336\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use DuckDB to convert ",(0,l.kt)("inlineCode",{parentName:"p"},"water.csv")," into a GeoJSON file (using GeoJSON instead of GeoJSONSeq purely as an example)."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"COPY (\n    SELECT\n        subType, class, name,\n        ST_GeomFromText(geometry_wkt) as geometry\n    FROM read_csv('csv/water.csv', auto_detect=True)\n    ) TO 'geojson/water.geojson'\nWITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326');\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/felt/tippecanoe"},"tippecanoe")," to produce a ",(0,l.kt)("inlineCode",{parentName:"p"},"pmtiles")," archive from ",(0,l.kt)("inlineCode",{parentName:"p"},"water.geojson")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tippecanoe -o tiles/water.pmtiles -Z8 -z10 -l buildings geojson/water.geojson\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Tippecanoe flag explanation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-o tiles/water.pmtiles")," is our output file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-Z8")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"-z13")," will produce a tileset starting at zoom 8 and going up to zoom 12."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-l water"),' names the layer "buildings"')))))),(0,l.kt)(i.Z,{value:"placenames",label:"Placenames",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Athena query to produce ",(0,l.kt)("inlineCode",{parentName:"p"},"placenames.csv"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    subType,\n    localityType,\n    TRY(FILTER(names.common, x -> x.language = 'local')[1].value) as local_name,\n    adminLevel,\n    ST_ASTEXT(ST_CENTROID(ST_GeomFromBinary(geometry))) as geometry_wkt\nFROM overture_2023_10_19_alpha_0\nWHERE theme = 'admins' AND type = 'locality'\n    AND bbox.minX > -122.679404 AND bbox.maxX < -121.978275\n    AND bbox.minY > 47.360619 AND bbox.maxY < 47.786336\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use DuckDB to convert ",(0,l.kt)("inlineCode",{parentName:"p"},"placenames.csv")," into a GeoJSON file."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"COPY (\n   SELECT\n       localityType,\n       local_name as name,\n       adminlevel,\n       ST_GeomFromText(geometry_wkt) as geometry\n   FROM read_csv_auto('csv/placenames.csv')\n) TO 'geojson/placenames.geojson'\nWITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326');\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/felt/tippecanoe"},"tippecanoe")," to produce a ",(0,l.kt)("inlineCode",{parentName:"p"},"pmtiles")," archive from ",(0,l.kt)("inlineCode",{parentName:"p"},"placenames.geojson")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tippecanoe -o tiles/placenames.pmtiles -Z5 -z10 -l buildings geojson/placenames.geojson\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Tippecanoe flag explanation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-o tiles/buildings.pmtiles")," is our output file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-Z5")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"-z10")," will produce a tileset starting at zoom 5 and going up to zoom 13."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-l placenames"),' names the layer "buildings"'))))))))}N.isMDXComponent=!0}}]);