"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[4504],{14787:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=o(74848),i=o(28453);const r={title:"Python Command-line Tool"},s=void 0,a={id:"getting-data/overturemaps-py",title:"Python Command-line Tool",description:"Overture's Python command-line tool helps you download data within a region of interest and converts it to several common geospatial file formats. This example shows how to use the tool to download Overture's land cover data in a Jupyter notebook.",source:"@site/docs/getting-data/overturemaps-py.mdx",sourceDirName:"getting-data",slug:"/getting-data/overturemaps-py",permalink:"/getting-data/overturemaps-py",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1733330113e3,frontMatter:{title:"Python Command-line Tool"},sidebar:"docs",previous:{title:"DuckDB",permalink:"/getting-data/duckdb"},next:{title:"Fused (Python)",permalink:"/getting-data/fused"}},l={},d=[{value:"Installation",id:"installation",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Overture's ",(0,n.jsx)(t.a,{href:"https://github.com/OvertureMaps/overturemaps-py",children:"Python command-line tool"})," helps you download data within a region of interest and converts it to several common geospatial file formats. ",(0,n.jsx)(t.a,{href:"/blog/2024/05/16/land-cover/",children:"This example"})," shows how to use the tool to download Overture's land cover data in a Jupyter notebook."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["This project is experimental and likely to change. See the ",(0,n.jsx)(t.a,{href:"https://github.com/OvertureMaps/overturemaps-py",children:"overturemaps-py repository"})," for timely updates."]})}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"pip install overturemaps"})}),"\n",(0,n.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsx)(t.p,{children:'Download the building footprints for the specific bounding box as GeoJSON and save to a file named "boston.geojson"'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ overturemaps download --bbox=-71.068,42.353,-71.058,42.363 -f geojson --type=building -o boston.geojson\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"download"})}),"\n",(0,n.jsx)(t.p,{children:"Right now there is only one option to the overturemaps utility: download. It will download Overture Maps data with an optional bounding box into the specified file format. When specifying a bounding box, only the minimum data is transferred. The result is streamed out and can handle arbitrarily large bounding boxes."}),"\n",(0,n.jsx)(t.p,{children:"Command-line options:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"--bbox"})," (optional): west, south, east, north longitude and latitude coordinates. When omitted the entire dataset for the specified type will be downloaded"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"-f"}),' (required: one of "geojson", "geojsonseq", "geoparquet"): output format']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"--output/-o"})," (optional): Location of output file. When omitted output will be written to stdout."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"--type/-t"})," (required): The Overture map data type to be downloaded. Examples of types are building for building footprints, place for POI places data, etc. Run overturemaps download --help for the complete list of allowed types"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This downloads data directly from Overture's S3 bucket without interacting with any other servers. By including bounding box extents on each row in the Overture distribution, the underlying Parquet readers use the Parquet summary statistics to download the minimum amount of data necessary to extract data from the desired region."}),"\n",(0,n.jsxs)(t.p,{children:["To help find bounding boxes of interest, we like this ",(0,n.jsx)(t.a,{href:"https://boundingbox.klokantech.com/",children:"bounding box"})," tool from ",(0,n.jsx)(t.a,{href:"https://www.klokantech.com/",children:"Klokantech"}),". Choose the CSV format and copy the value directly into the ",(0,n.jsx)(t.code,{children:"--bbox"})," field."]}),"\n",(0,n.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Contribute to ",(0,n.jsx)(t.a,{href:"//github.com/overturemaps/overturemaps-py",children:"overturemaps-py"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Visualize the data in ",(0,n.jsx)(t.a,{href:"/examples/QGIS",children:"QGIS"})," or ",(0,n.jsx)(t.a,{href:"/examples/kepler-gl",children:"kepler.gl"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/examples/build-a-map",children:"Make an interactive map"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Consult one of our ",(0,n.jsx)(t.a,{href:"/guides/",children:"guides"})," to learn more about the data and see examples of more advanced queries."]}),"\n",(0,n.jsxs)(t.li,{children:["Check out our Made by the Overture ",(0,n.jsx)(t.a,{href:"/community",children:"Community page"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Dig into the ",(0,n.jsx)(t.a,{href:"//docs.overturemaps.org/schema/",children:"Overture schema"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Talk to us on GitHub!"}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);