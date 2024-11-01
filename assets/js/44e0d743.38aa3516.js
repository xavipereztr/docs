"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[3372],{61944:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>j,contentTitle:()=>x,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var r=t(74848),n=t(28453),i=t(11470),d=t(19365),a=t(97577);const o="LOAD spatial; --noqa\nLOAD httpfs;  --noqa\n-- Access the data on AWS in this example\nSET s3_region='us-west-2';\n\nSELECT\n  *\nFROM\n  read_parquet('s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=addresses/type=*/*', filename=true, hive_partitioning=1)\nWHERE\n  bbox.xmin > -114.305\n  AND bbox.xmax < -113.784\n  AND bbox.ymin > 50.854\n  AND bbox.ymax < 51.219;\n",l="LOAD spatial; --noqa\nLOAD httpfs;  --noqa\n-- Access the data on AWS in this example\nSET s3_region='us-west-2';\n\nSELECT\n  count(*),\n  country\nFROM\n  read_parquet('s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=addresses/type=*/*', filename=true, hive_partitioning=1)\nGROUP BY country;\n",h="LOAD spatial; --noqa\nLOAD httpfs;  --noqa\n-- Access the data on AWS in this example\nSET s3_region='us-west-2';\n\nCOPY (\n    SELECT\n      id,\n      number,\n      street,\n      unit,\n      postcode,\n      geometry  -- DuckDB v.1.1.0 will autoload this as a `geometry` type\n    FROM\n      read_parquet('s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=addresses/type=*/*', filename=true, hive_partitioning=1)\n    WHERE\n    \tcountry = 'NZ'\n  )\n  TO\n    'NZaddresses.shp'\n  WITH (\n    FORMAT GDAL,\n    DRIVER 'ESRI Shapefile',\n    SRS 'EPSG:4326'\n  );\n",c="INSTALL spatial;                  -- noqa\nLOAD spatial;                     -- noqa\n\n-- Access the data on AWS in this example\nSET s3_region='us-west-2';\n\nCOPY (\n  -- Create a temp table with the state of Utah\n  WITH utah AS (\n    SELECT\n      id AS utah_id,\n      geometry AS utah_geom -- DuckDB v.1.1.0 will autoload this as a `geometry` type\n    FROM\n      read_parquet('s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=divisions/type=division_area/*', filename=true, hive_partitioning=1)\n    WHERE\n      id = '085022383fffffff0167572d4665d6f9'\n  ),\n\n  -- Use the geometry of Utah to filter addresses within the state's boundary\n  addresses AS (\n    SELECT\n      *,\n      geometry -- DuckDB v.1.1.0 will autoload this as a `geometry` type\n    FROM\n      read_parquet('s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=addresses/type=*/*', filename=true, hive_partitioning=1)\n    INNER JOIN\n      utah\n    ON ST_WITHIN(geometry, utah.utah_geom)\n    WHERE\n      country = 'US'\n  )\n\n  -- Export the places selection to a CSV file\n  SELECT\n    id,\n    street,\n    number,\n    unit\n  FROM\n    addresses\n)\nTO\n  'utah_addresses.csv';\n",u={title:"Addresses",description:"Global address points"},x=void 0,p={id:"guides/addresses",title:"Addresses",description:"Global address points",source:"@site/docs/guides/addresses.mdx",sourceDirName:"guides",slug:"/guides/addresses",permalink:"/guides/addresses",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1730485335e3,frontMatter:{title:"Addresses",description:"Global address points"},sidebar:"docs",previous:{title:"Data Guides",permalink:"/guides/"},next:{title:"Base",permalink:"/guides/base"}},j={},m=[{value:"Overview",id:"overview",level:2},{value:"Dataset description",id:"dataset-description",level:2},{value:"Feature type descriptions",id:"feature-type-descriptions",level:3},{value:"Data columns",id:"data-columns",level:3},{value:"Data access and retrieval",id:"data-access-and-retrieval",level:2},{value:"Data manipulation and analysis",id:"data-manipulation-and-analysis",level:2},{value:"Revision history",id:"revision-history",level:2},{value:"Version info",id:"version-info",level:3},{value:"Support",id:"support",level:2},{value:"Feedback",id:"feedback",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Issues",id:"issues",level:3}];function f(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Details:u}=s;return u||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.em,{children:["Note: This theme is currently in Alpha and we anticipate significant changes over the next several releases. We invite the Overture community to test the addresses schema and data and offer feedback via the ",(0,r.jsx)(s.a,{href:"https://github.com/OvertureMaps/data/issues",children:"data"})," and ",(0,r.jsx)(s.a,{href:"https://github.com/OvertureMaps/schema/issues",children:"schema"})," repos."]})}),"\n",(0,r.jsxs)(s.p,{children:["Overture maintains over 344 million address point entities. Data in the address theme is derived from a variety of sources, mostly distributed by ",(0,r.jsx)(s.a,{href:"https://openaddresses.io/",children:"OpenAddresses"})," and ",(0,r.jsx)(s.a,{href:"https://www.addressforall.org/en/",children:"AddressForAll"}),", but also relies on open data from the ",(0,r.jsx)(s.a,{href:"https://data.cityofnewyork.us/City-Government/NYC-Address-Points/g6pj-hd8k",children:"City of New York"})," and the ",(0,r.jsx)(s.a,{href:"https://www.transportation.gov/gis/national-address-database",children:"U.S. Department of Transportation"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["For licensing information, please see the ",(0,r.jsx)(s.a,{href:"https://docs.overturemaps.org/attribution/",children:"Attribution and Licensing page"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Address data can be used for a variety of purposes, which can include:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Mapping"}),": Addresses may be displayed on the map for reference purposes."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Geocoding"}),": Addresses are a primary component of high-accuracy geocoding services (i.e. converting text for an address to a complete address with a location)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Conflation"}),": Addresses can be used to conflate to other data themes (e.g. places, buildings) where appropriate for mapping or other use cases (e.g. refining search)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Standardization"}),": Parsing an input address into address components based on an existing schema or address model."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Normalization"}),": Adhering to standard and consistent forms of address components."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Validation and Verification"}),": Confirming an address exists within a known list of addresses."]}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{style:{textAlign:"center"},children:(0,r.jsx)(s.img,{alt:"Overture address coverage",src:t(87764).A+"",width:"1728",height:"958"})})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{style:{textAlign:"center"},children:(0,r.jsx)(s.em,{children:"Coverage of Overture address data, visualized using H3 cells."})})})})]}),"\n",(0,r.jsx)(s.h2,{id:"dataset-description",children:"Dataset description"}),"\n",(0,r.jsx)(s.h3,{id:"feature-type-descriptions",children:"Feature type descriptions"}),"\n",(0,r.jsxs)(s.p,{children:["An ",(0,r.jsx)(s.code,{children:"address"})," is a feature type that represents a physical place through a series of attributes: street number, street name, unit, address_levels, postalcode and/or country. They also have a ",(0,r.jsx)(s.code,{children:"Point"})," geometry, which provides an approximate location of the position most commonly associated with the feature. We encourage you to consult the ",(0,r.jsxs)(s.a,{href:"/schema/reference/addresses/address",children:["schema reference documentation for the ",(0,r.jsx)(s.code,{children:"address"})," feature type"]}),"."]}),"\n",(0,r.jsxs)(u,{children:[(0,r.jsx)("summary",{children:"Counts, per country, of the address feature type"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Country"}),(0,r.jsx)(s.th,{children:"Address Count"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BR"}),(0,r.jsx)(s.td,{children:"89,899,299"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"US"}),(0,r.jsx)(s.td,{children:"80,322,430"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MX"}),(0,r.jsx)(s.td,{children:"30,278,896"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"FR"}),(0,r.jsx)(s.td,{children:"26,041,499"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"JP"}),(0,r.jsx)(s.td,{children:"19,576,027"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CA"}),(0,r.jsx)(s.td,{children:"16,457,790"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AU"}),(0,r.jsx)(s.td,{children:"15,698,769"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"NL"}),(0,r.jsx)(s.td,{children:"9,750,341"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CO"}),(0,r.jsx)(s.td,{children:"7,786,046"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PL"}),(0,r.jsx)(s.td,{children:"7,669,619"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DE"}),(0,r.jsx)(s.td,{children:"5,997,070"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PT"}),(0,r.jsx)(s.td,{children:"5,911,139"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CL"}),(0,r.jsx)(s.td,{children:"4,042,071"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DK"}),(0,r.jsx)(s.td,{children:"3,923,693"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"FI"}),(0,r.jsx)(s.td,{children:"3,897,449"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CH"}),(0,r.jsx)(s.td,{children:"3,147,964"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"NO"}),(0,r.jsx)(s.td,{children:"2,571,756"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AT"}),(0,r.jsx)(s.td,{children:"2,492,155"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"NZ"}),(0,r.jsx)(s.td,{children:"2,358,669"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"EE"}),(0,r.jsx)(s.td,{children:"2,214,298"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"HR"}),(0,r.jsx)(s.td,{children:"1,680,578"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SK"}),(0,r.jsx)(s.td,{children:"1,630,351"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LT"}),(0,r.jsx)(s.td,{children:"1,036,251"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LU"}),(0,r.jsx)(s.td,{children:"164,415"})]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"data-columns",children:"Data columns"}),"\n",(0,r.jsx)(s.p,{children:"The addresses GeoParquet file contains the following properties:"}),"\n",(0,r.jsxs)(u,{children:[(0,r.jsx)("summary",{children:"Schema for the GeoParquet files in the addresses theme"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"id"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"A feature ID. This may be an ID associated with the Global Entity Reference System (GERS) if\u2014and-only-if the feature represents an entity that is part of GERS."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"geometry"})}),(0,r.jsx)(s.td,{children:"blob"}),(0,r.jsx)(s.td,{children:"A WKB representation of the entity's geometry - a Point, Polygon, MultiPolygon, or LineString."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"bbox"})}),(0,r.jsx)(s.td,{children:"array"}),(0,r.jsxs)(s.td,{children:["The bounding box of an entity's geometry, represented with float values, in a ",(0,r.jsx)(s.code,{children:"xmin, xmax, ymin, ymax"})," format."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"country"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"ISO 3166-1 alpha-2 country code of the country or country-like entity, that this address represents or belongs to."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"postcode"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"The postcode for the address."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"street"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:'The street name associated with this address. The street name can include the street "type" or street suffix, e.g., Main Street. Ideally this is fully spelled out and not abbreviated but we acknowledge that many address datasets abbreviate the street name so it is acceptable.'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"number"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:'The house number for this address. This field may not strictly be a number. Values such as "74B", "189 1/2", "208.5" are common as the number part of an address and they are not part of the "unit" of this address.'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"unit"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"The suite/unit/apartment/floor number."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"address_levels"})}),(0,r.jsx)(s.td,{children:"array"}),(0,r.jsx)(s.td,{children:"The administrative levels present in an address. The number of values in this list and their meaning is country-dependent. For example, in the United States we expect two values: the state and the municipality. In other countries there might be only one. Other countries could have three or more. The array is ordered with the highest levels first."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"version"})}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"Version number of the feature, incremented in each Overture release where the geometry or attributes of this feature changed."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"sources"})}),(0,r.jsx)(s.td,{children:"array"}),(0,r.jsx)(s.td,{children:"The array of source information for the properties of a given feature, with each entry being a source object which lists the property in JSON Pointer notation and the dataset that specific value came from. All features must have a root level source which is the default source if a specific property's source is not specified."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"filename"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Name of the S3 file being queried."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"theme"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Name of the Overture theme being queried."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"type"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Name of the Overture feature type being queried."})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"data-access-and-retrieval",children:"Data access and retrieval"}),"\n",(0,r.jsx)(s.p,{children:"Overture's data themes, including addresses, are freely available on both Amazon S3 and Microsoft Azure Blob Storage at these locations:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Provider"}),(0,r.jsx)(s.th,{children:"Location"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Amazon S3"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"s3://overturemaps-us-west-2/release/"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Azure Blob Storage"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"https://overturemapswestus2.blob.core.windows.net/release/"})})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Overture distributes its datasets as ",(0,r.jsx)(s.a,{href:"https://geoparquet.org/",children:"GeoParquet"}),", a column-oriented spatial data format that is a backwards-compatible extension of ",(0,r.jsx)(s.a,{href:"https://parquet.apache.org/",children:"Apache Parquet"}),'. Parquet (and GeoParquet) is optimized for "cloud-native" queries, which means you can use many developer-friendly tools to efficiently fetch column "chunks" of cloud-hosted data. We encourage users who are new to GeoParquet to consult ',(0,r.jsx)(s.a,{href:"https://guide.cloudnativegeo.org/geoparquet/",children:"this guide"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://docs.overturemaps.org/getting-data/",children:"The Getting Data section of this documentation"})," offers instructions for using several tools to access Overture data, including DuckDB and Overture's Python command-line tool. See examples below for addresses."]}),"\n",(0,r.jsx)(s.p,{children:"We recommend querying and downloading only the Overture data you need.\nIf you have a particular geographic area of interest, there are several options for using a simple bounding box to extract address data."}),"\n",(0,r.jsxs)(i.default,{children:[(0,r.jsxs)(d.default,{value:"DuckDB",label:"DuckDB",default:!0,children:[(0,r.jsxs)(s.p,{children:["First, follow the ",(0,r.jsx)(s.a,{href:"/getting-data/duckdb/",children:"setup guide for DuckDB"}),"."]}),(0,r.jsx)(s.p,{children:"DuckDB allows you to pass a bounding box in your query to select features in a specified geogrpahic area."}),(0,r.jsx)(s.p,{children:"This example returns address data for Calgary, CA and the surrounding area:"}),(0,r.jsx)(a.A,{query:o})]}),(0,r.jsxs)(d.default,{value:"Python Command-line Tool",label:"Python Command-line Tool",default:!0,children:[(0,r.jsxs)(s.p,{children:["You can find Overture's official Python command-line tool ",(0,r.jsx)(s.a,{href:"https://github.com/OvertureMaps/overturemaps-py",children:"here"}),"."]}),(0,r.jsx)(s.p,{children:"This tool helps to download Overture data within a region of interest and converts it to a few different file formats. In this example, a bounding box is passed to obtain all address data around Boston, MA:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"overturemaps download --bbox=-71.068,42.353,-71.058,42.363 -f geojson --type=address -o boston.geojson\n"})}),(0,r.jsx)(s.p,{children:"This command results in the following address points, displayed in QGIS:"}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Boston address coverage via bbox",src:t(42386).A+"",width:"2892",height:"1712"})}),(0,r.jsx)(s.p,{children:"Right now there is only one option to the overturemaps utility: download. It will download Overture Maps data with an optional bounding box into the specified file format. When specifying a bounding box, only the minimum data is transferred. The result is streamed out and can handle arbitrarily large bounding boxes."}),(0,r.jsx)(s.p,{children:"Command-line options:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"--bbox"})," (optional): west, south, east, north longitude and latitude coordinates. When omitted the entire dataset for the specified type will be downloaded"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"-f"}),' (required: one of "geojson", "geojsonseq", "geoparquet"): output format']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"--output/-o"})," (optional): Location of output file. When omitted output will be written to stdout."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"--type/-t"})," (required): The Overture map data type to be downloaded. Examples of types are building for building footprints, place for POI places data, etc. Run overturemaps download --help for the complete list of allowed types"]}),"\n"]}),(0,r.jsx)(s.p,{children:"This downloads data directly from Overture's S3 bucket without interacting with any other servers. By including bounding box extents on each row in the Overture distribution, the underlying Parquet readers use the Parquet summary statistics to download the minimum amount of data necessary to extract data from the desired region."})]})]}),"\n",(0,r.jsx)(s.h2,{id:"data-manipulation-and-analysis",children:"Data manipulation and analysis"}),"\n",(0,r.jsx)(s.p,{children:"Using this query, you can get a count of addresses per country:"}),"\n",(0,r.jsxs)(u,{children:[(0,r.jsx)("summary",{children:"Query"}),(0,r.jsx)(a.A,{query:l})]}),"\n",(0,r.jsx)(s.p,{children:"This query will create a shapefile of address data in New Zealand, with limited attributes:"}),"\n",(0,r.jsxs)(u,{children:[(0,r.jsx)("summary",{children:"Query"}),(0,r.jsx)(a.A,{query:h})]}),"\n",(0,r.jsxs)(s.p,{children:["This query will create a CSV file of address within the State of Utah, using the ",(0,r.jsx)(s.code,{children:"divisions"})," theme data in a spatial query:"]}),"\n",(0,r.jsxs)(u,{children:[(0,r.jsx)("summary",{children:"Query"}),(0,r.jsx)(a.A,{query:c})]}),"\n",(0,r.jsx)(s.h2,{id:"revision-history",children:"Revision history"}),"\n",(0,r.jsx)(s.h3,{id:"version-info",children:"Version info"}),"\n",(0,r.jsxs)(s.p,{children:["You can find the most recent release notes ",(0,r.jsx)(s.a,{href:"https://docs.overturemaps.org/release/latest/",children:"here"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"support",children:"Support"}),"\n",(0,r.jsx)(s.h3,{id:"feedback",children:"Feedback"}),"\n",(0,r.jsxs)(s.p,{children:["You can find a list of Overture repositories ",(0,r.jsx)(s.a,{href:"https://github.com/orgs/OvertureMaps/repositories",children:"here"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Discussions are generally reserved for broader conversations around the addresses project as a whole (supporting a new workflow, adding a dataset, null attributes)."}),"\n",(0,r.jsx)(s.p,{children:"Issues are generally reserved for more specific concerns with specific entities in the dataset (geometry validation, missing entities, duplicate entities) or country-specific concerns."}),"\n",(0,r.jsx)(s.h3,{id:"discussions",children:"Discussions"}),"\n",(0,r.jsx)(s.p,{children:"You can start and add to discussions in each of the public Overture repositories. Some examples:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"General Overture Discussions"}),": ",(0,r.jsx)(s.a,{href:"https://github.com/orgs/OvertureMaps/discussions",children:"https://github.com/orgs/OvertureMaps/discussions"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Data Discussions"}),": ",(0,r.jsx)(s.a,{href:"https://github.com/OvertureMaps/data/discussions",children:"https://github.com/OvertureMaps/data/discussions"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Schema Discussions"}),": ",(0,r.jsx)(s.a,{href:"https://github.com/OvertureMaps/schema/discussions",children:"https://github.com/OvertureMaps/schema/discussions"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Discussions around Overture's address data should be filed in the Data repository."}),"\n",(0,r.jsx)(s.h3,{id:"issues",children:"Issues"}),"\n",(0,r.jsx)(s.p,{children:"You can start and add to issues in each of the public Overture repositories, too. Some examples:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Data Issues"}),": ",(0,r.jsx)(s.a,{href:"https://github.com/OvertureMaps/data/issues",children:"https://github.com/OvertureMaps/data/issues"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Schema Issues"}),": ",(0,r.jsx)(s.a,{href:"https://github.com/OvertureMaps/schema/issues",children:"https://github.com/OvertureMaps/schema/issues"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Tiles issues"}),": ",(0,r.jsx)(s.a,{href:"https://github.com/OvertureMaps/overture-tiles/issues",children:"https://github.com/OvertureMaps/overture-tiles/issues"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Issues around Overture's address data should be filed in the data repository."})]})}function g(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},97577:(e,s,t)=>{t.d(s,{A:()=>d});var r=t(21432),n=t(44586),i=t(74848);function d(e){const{siteConfig:{customFields:s}}=(0,n.A)();var t=e.query.replace("__OVERTURE_RELEASE",s.overtureRelease);t=(t=t.replace("__ATHENA_OVERTURE_RELEASE","v"+s.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",s.overtureRelease.split(".",1));var d=e.language||"sql";return(0,i.jsx)(r.default,{language:d,title:e.title,children:t})}},87764:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/address-coverage-h3-october-aee3b670e60bd0dc05bdf39c80d3740d.png"},42386:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/boston-export-ed41fca253ffcf92dc3bc4ecd5372fe2.png"}}]);