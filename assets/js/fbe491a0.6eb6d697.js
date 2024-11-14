"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[3373],{14376:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>x,contentTitle:()=>m,default:()=>j,frontMatter:()=>p,metadata:()=>g,toc:()=>E});var t=n(74848),s=n(28453),r=n(11470),i=n(19365),o=n(97577);const l="LOAD spatial; -- noqa\n\nSET s3_region='us-west-2';\n\nCOPY(\n    SELECT\n       id,\n       names.primary as name,\n       CAST(elevation * 3.28084 AS INT) AS elevation_ft,\n       geometry -- DuckDB v.1.1.0 will autoload this as a `geometry` type\n    FROM read_parquet('s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=base/type=land/*', filename=true, hive_partitioning=1)\n    WHERE subtype = 'physical' AND class IN ('peak','volcano') AND elevation IS NOT NULL\n    AND bbox.xmin BETWEEN -124.71 AND -116.47\n    AND bbox.ymin BETWEEN 41.99 AND 46.30\n) TO 'oregon_peaks.geojson'\nWITH (FORMAT GDAL, DRIVER 'GeoJSON');\n",d="LOAD spatial; --noqa\nSET azure_storage_connection_string = 'DefaultEndpointsProtocol=https;AccountName=overturemapswestus2;AccountKey=;EndpointSuffix=core.windows.net';\n\nCOPY(\n  SELECT\n    id,\n    names.primary as primary_name,\n    height,\n    geometry   -- DuckDB v.1.1.0 will autoload this as a `geometry` type\n  FROM read_parquet('azure://release/__OVERTURE_RELEASE/theme=buildings/type=building/*', filename=true, hive_partitioning=1)\n  WHERE names.primary IS NOT NULL\n  AND bbox.xmin BETWEEN -84.36 AND -82.42\n  AND bbox.ymin BETWEEN 41.71 AND 43.33\n  LIMIT 100\n) TO 'detroit_buildings.geojsonseq' WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');\n",c="LOAD spatial; -- noqa\nSET s3_region='us-west-2';\n\nCOPY(\n    SELECT\n        id,\n        division_id,\n        names.primary,\n        geometry  -- DuckDB v.1.1.0 will autoload this as a `geometry` type\n        FROM\n            read_parquet('s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=divisions/type=division_area/*', hive_partitioning=1)\n        WHERE\n            subtype = 'county'\n            AND country = 'US'\n            AND region = 'US-PA'\n) TO 'pennsylvania_counties.gpkg' WITH (FORMAT GDAL, DRIVER 'GPKG');\n",u="LOAD spatial; -- noqa\n\nSET s3_region='us-west-2';\n\nCOPY(                                       -- COPY <query> TO <output> saves the results to disk.\n    SELECT\n       id,\n       names.primary as name,\n       confidence AS confidence,\n       CAST(socials AS JSON) as socials,    -- Ensure each attribute can be serialized to JSON\n       geometry                             -- DuckDB understands this to be a geometry type\n    FROM read_parquet('s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=places/type=place/*', filename=true, hive_partitioning=1)\n    WHERE categories.primary = 'pizza_restaurant'\n    AND bbox.xmin BETWEEN -75 AND -73       -- Only use the bbox min values\n    AND bbox.ymin BETWEEN 40 AND 41         -- because they are point geometries.\n\n) TO 'nyc_pizza.geojson' WITH (FORMAT GDAL, DRIVER 'GeoJSON');\n",h="LOAD spatial; -- noqa\n\nSET s3_region='us-west-2';\n\nCOPY(\n    SELECT\n       id,\n       names.primary as name,\n       class,\n       geometry   -- DuckDB v.1.1.0 will autoload this as a `geometry` type\n    FROM read_parquet('s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=transportation/type=segment/*', filename=true, hive_partitioning=1)\n    WHERE bbox.xmin > 2.276\n      AND bbox.ymin > 48.865\n      AND bbox.xmax < 2.314\n      AND bbox.ymax < 48.882\n) TO 'paris_roads.geojson' WITH (FORMAT GDAL, DRIVER 'GeoJSON');\n",p={title:"DuckDB"},m=void 0,g={id:"getting-data/duckdb",title:"DuckDB",description:"DuckDB is powerful analytics tool that allows you to query remote files and download only the data you want. You'll need to install at least DuckDB 1.1.0, which supports reading and writing geoparquet.",source:"@site/docs/getting-data/duckdb.mdx",sourceDirName:"getting-data",slug:"/getting-data/duckdb",permalink:"/getting-data/duckdb",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1731599095e3,frontMatter:{title:"DuckDB"},sidebar:"docs",previous:{title:"Getting Overture Data",permalink:"/getting-data/"},next:{title:"Python Command-line Tool",permalink:"/getting-data/overturemaps-py"}},x={},E=[{value:"Installation",id:"installation",level:2},{value:"Downloading Overture Data",id:"downloading-overture-data",level:2},{value:"Next steps",id:"next-steps",level:2}];function D(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://duckdb.org/",children:"DuckDB"})," is powerful analytics tool that allows you to query remote files and download only the data you want. You'll need to install at least ",(0,t.jsx)(a.a,{href:"https://duckdb.org/2024/09/09/announcing-duckdb-110.html",children:"DuckDB 1.1.0"}),", which supports reading and writing geoparquet."]}),"\n",(0,t.jsx)(a.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://duckdb.org/docs/installation/",children:"Install DuckDB"}),". You'll need extensions to work with spatial data in the cloud. Run the following commands in the DuckDB command line:"]}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"INSTALL SPATIAL;"})," to install the ",(0,t.jsx)(a.a,{href:"https://github.com/duckdblabs/duckdb_spatial",children:"duckdb_spatial"})," extension."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"INSTALL httpfs;"})," or ",(0,t.jsx)(a.code,{children:"INSTALL azure;"})," to read from either Amazon S3 (",(0,t.jsx)(a.a,{href:"https://duckdb.org/docs/guides/import/s3_import.html",children:"httpfs"}),") or Microsoft Azure Blob Storage (",(0,t.jsx)(a.a,{href:"https://duckdb.org/docs/extensions/azure",children:"azure"}),")."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"downloading-overture-data",children:"Downloading Overture Data"}),"\n",(0,t.jsx)(a.p,{children:"These SQL queries will access Overture data in the cloud and download only the attributes that you request."}),"\n",(0,t.jsxs)(r.default,{queryString:"query",children:[(0,t.jsxs)(i.default,{value:"Places",label:"Places",children:[(0,t.jsxs)(a.p,{children:["Download all pizza restaurants in New York City as a ",(0,t.jsx)(a.code,{children:"GeoJSON"})," file."]}),(0,t.jsx)(o.A,{query:u}),(0,t.jsxs)(a.p,{children:["See the ",(0,t.jsx)(a.a,{href:"/schema/reference/places/place",children:"places schema"})," to learn more about each attribute or the ",(0,t.jsx)(a.a,{href:"/schema/concepts/names/",children:"common schema concepts"})," to better understand ",(0,t.jsx)(a.code,{children:"names.primary"})," from ",(0,t.jsx)(a.code,{children:"names.common"}),"."]})]}),(0,t.jsxs)(i.default,{value:"Buildings",label:"Buildings",children:[(0,t.jsx)(a.p,{children:"Access Overture buildings data hosted on Azure to download named buildings around Detroit, Michigan. Saves as newline-delimited GeoJSON."}),(0,t.jsx)(o.A,{query:d})]}),(0,t.jsxs)(i.default,{value:"Roads",label:"Roads",children:[(0,t.jsxs)(a.p,{children:["Download roads in Paris around the ",(0,t.jsx)(a.em,{children:"Arc de Triomphe"})," and save as GeoJSON."]}),(0,t.jsx)(o.A,{query:h})]}),(0,t.jsxs)(i.default,{value:"Mountains",label:"Mountains",children:[(0,t.jsx)(a.p,{children:"Download mountain peaks in Oregon, USA from the base theme, convert the elevation attribute to feet, and save the result as a GeoJSON file."}),(0,t.jsx)(o.A,{query:l})]}),(0,t.jsxs)(i.default,{value:"Counties",label:"Counties",children:[(0,t.jsx)(a.p,{children:"County-level geometries for Pennsylvania from the divisions theme and outputs a GeoPackage."}),(0,t.jsx)(o.A,{query:c})]}),(0,t.jsxs)(i.default,{value:"geoparquet",label:"As GeoParquet",children:[(0,t.jsxs)(a.p,{children:["DuckDB v1.1.0 supports reading and writing GeoParquet directly. It recognizes the ",(0,t.jsx)(a.code,{children:"geometry"})," type and will write the appropriate metadata."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"COPY(\n  SELECT\n    *\n  FROM read_parquet('s3://overturemaps-us-west-2/release/2024-08-20.0/theme=places/type=place/*', filename=true, hive_partitioning=1)\n  LIMIT 100000\n) TO 'places.parquet';\n"})}),(0,t.jsxs)(a.p,{children:["DuckDB recognizes the input as geoparquet and will automatically cast the ",(0,t.jsx)(a.em,{children:"geometry"})," column to a ",(0,t.jsx)(a.code,{children:"GEOMETRY"})," type.\nThe ",(0,t.jsx)(a.code,{children:"COPY"})," command writes a parquet file of 100,000 places named ",(0,t.jsx)(a.code,{children:"places.parquet"})," with the appropriate geoparquet metadata."]})]})]}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsxs)(a.admonition,{type:"tip",children:[(0,t.jsxs)(a.p,{children:["To download the data as ",(0,t.jsx)(a.code,{children:"shapefile"}),", replace the last line of any of the above queries:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:") TO 'overture_data.shp' WITH (FORMAT GDAL, DRIVER 'ESRI Shapefile');\n"})}),(0,t.jsxs)(a.p,{children:["or as a ",(0,t.jsx)(a.code,{children:"geopackage"}),":"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:") TO 'overture_data.gpkg' WITH (FORMAT GDAL, DRIVER 'GPKG');\n"})}),(0,t.jsxs)(a.p,{children:["The DuckDB Spatial extension supports more than ",(0,t.jsx)(a.a,{href:"https://duckdb.org/docs/extensions/spatial.html#st_read--read-spatial-data-from-files",children:"50 geospatial file formats"}),"."]})]}),"\n",(0,t.jsx)(a.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Visualize the data in ",(0,t.jsx)(a.a,{href:"/examples/QGIS",children:"QGIS"})," or ",(0,t.jsx)(a.a,{href:"/examples/kepler-gl",children:"kepler.gl"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"/examples/build-a-map",children:"Make an interactive map"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["Consult one of our ",(0,t.jsx)(a.a,{href:"/guides/",children:"Data Guides"})," to learn more about the data and for more advanced queries."]}),"\n"]})]})}function j(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(D,{...e})}):D(e)}},97577:(e,a,n)=>{n.d(a,{A:()=>i});var t=n(21432),s=n(44586),r=n(74848);function i(e){const{siteConfig:{customFields:a}}=(0,s.A)();var n=e.query.replace("__OVERTURE_RELEASE",a.overtureRelease);n=(n=n.replace("__ATHENA_OVERTURE_RELEASE","v"+a.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",a.overtureRelease.split(".",1));var i=e.language||"sql";return(0,r.jsx)(t.default,{language:i,title:e.title,children:n})}}}]);