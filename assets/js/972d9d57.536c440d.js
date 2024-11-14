"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[66],{40984:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=s(74848),t=s(28453);const r={description:"Overture Documentation",slug:"/",title:"Introduction"},i=void 0,o={id:"introduction",title:"Introduction",description:"Overture Documentation",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:173160342e4,frontMatter:{description:"Overture Documentation",slug:"/",title:"Introduction"},sidebar:"docs",next:{title:"Getting Overture Data",permalink:"/getting-data/"}},d={},c=[{value:"Overture data",id:"overture-data",level:2},{value:"Overture schema",id:"overture-schema",level:2},{value:"Vision",id:"vision",level:2},{value:"Address the core, enable the periphery",id:"address-the-core-enable-the-periphery",level:3},{value:"Invent across the gap",id:"invent-across-the-gap",level:3},{value:"Backward-compatible is forward-compatible",id:"backward-compatible-is-forward-compatible",level:3},{value:"Always open",id:"always-open",level:3},{value:"Contact us",id:"contact-us",level:2}];function h(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Welcome! Overture provides free and open map data normalized to a ",(0,n.jsx)(a.a,{href:"schema",children:"common schema"}),". Our ",(0,n.jsx)(a.a,{href:"guides",children:'six data "themes"'})," \u2014 ",(0,n.jsx)(a.a,{href:"guides/addresses",children:"addresses"}),", ",(0,n.jsx)(a.a,{href:"guides/buildings",children:"buildings"}),", ",(0,n.jsx)(a.a,{href:"guides/base",children:"base"}),", ",(0,n.jsx)(a.a,{href:"guides/divisions",children:"divisions"}),", ",(0,n.jsx)(a.a,{href:"guides/places",children:"places"}),", and ",(0,n.jsx)(a.a,{href:"guides/transportation",children:"transportation"})," \u2014 contain more than 3.7 billion features and will continue to expand in size and scale. The data we use to build our datasets comes from many sources, including OpenStreetMap, Meta, Microsoft, Esri, OpenAddresses, and ",(0,n.jsx)(a.a,{href:"attribution",children:"more"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["In this documentation, you'll find ",(0,n.jsx)(a.a,{href:"getting-data",children:"instructions"})," for accessing and handling Overture's large datasets, ",(0,n.jsx)(a.a,{href:"//docs.overturemaps.org/schema/",children:"reference material"})," to help you understand the Overture schema, comprehensive ",(0,n.jsx)(a.a,{href:"guides",children:"guides"})," to working with the many themes and types of Overture data, and ",(0,n.jsx)(a.a,{href:"examples",children:"hands-on examples"})," using data wrangling, analysis, and visualization tools you know and love. Want to see what our community has been building? Check out the ",(0,n.jsx)(a.a,{href:"community",children:"community projects"})," section of our documentation for inspiration."]}),"\n",(0,n.jsx)(a.h2,{id:"overture-data",children:"Overture data"}),"\n",(0,n.jsxs)(a.p,{children:["We ",(0,n.jsx)(a.a,{href:"release",children:"release"})," our data monthly as ",(0,n.jsx)(a.a,{href:"https://guide.cloudnativegeo.org/geoparquet/",children:"cloud-native GeoParquet"})," files, partitioned by theme and type. Each data theme contains one or more feature types, mapped in this way:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'type_theme_map = {\n    "address": "addresses",\n    "building": "buildings",\n    "building_part": "buildings",\n    "division": "divisions",\n    "division_area": "divisions",\n    "division_boundary": "divisions",\n    "place": "places",\n    "segment": "transportation",\n    "connector": "transportation",\n    "infrastructure": "base",\n    "land": "base",\n    "land_cover": "base",\n    "land_use": "base",\n    "water": "base"\n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["You'll find the GeoParquet column definitions for each feature type in our data ",(0,n.jsx)(a.a,{href:"guides",children:"guides"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"overture-schema",children:"Overture schema"}),"\n",(0,n.jsxs)(a.p,{children:["Although we release our data as GeoParquet, the Overture schema is defined by the ",(0,n.jsx)(a.a,{href:"https://json-schema.org/",children:"JSON"})," schema, and ",(0,n.jsx)(a.a,{href:"https://geojson.org/",children:"GeoJSON"})," is used as the canonical geospatial format. GeoJSON provides us with a mental model and language to express data constructions in the ",(0,n.jsx)(a.a,{href:"https://schema.overturemaps.org/schema.yaml",children:"schema"}),". In our ",(0,n.jsx)(a.a,{href:"//docs.overturemaps.org/schema/reference",children:"schema reference docs"}),", we describe key schema concepts for each theme and definitions and examples for each feature type."]}),"\n",(0,n.jsx)(a.h2,{id:"vision",children:"Vision"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.a,{href:"https://overturemaps.org/about/members/",children:"member companies of the Overture Maps Foundation"})," are working collaboratively to build the datasets and schema. They share a common vision:"]}),"\n",(0,n.jsx)(a.h3,{id:"address-the-core-enable-the-periphery",children:"Address the core, enable the periphery"}),"\n",(0,n.jsx)(a.p,{children:'The Overture schema doesn\'t solve every problem. It offers complete, out-of-the-box solutions for the most fundamental "core" use cases. At the same time, the schema\'s extensible structure enables a wide range of other use cases ("the periphery").'}),"\n",(0,n.jsx)(a.h3,{id:"invent-across-the-gap",children:"Invent across the gap"}),"\n",(0,n.jsx)(a.p,{children:"The mapping community already has access to many excellent tools, standards and practices. The Overture schema reuses these existing solutions to maximize compatibility and focus on solving unaddressed pain points."}),"\n",(0,n.jsx)(a.h3,{id:"backward-compatible-is-forward-compatible",children:"Backward-compatible is forward-compatible"}),"\n",(0,n.jsx)(a.p,{children:"No design is future-proof, but good designs stay relevant by adding features without breaking what already works. The Overture schema can be enhanced in a backward-compatible way."}),"\n",(0,n.jsx)(a.h3,{id:"always-open",children:"Always open"}),"\n",(0,n.jsx)(a.p,{children:"The Overture schema and data formats aim for compatibility with free and open-source tools, avoiding dependency on proprietary technologies."}),"\n",(0,n.jsx)(a.h2,{id:"contact-us",children:"Contact us"}),"\n",(0,n.jsx)(a.p,{children:"We want to hear from you. Ask questions, report bugs, provide feedback, and submit contributions via our public Overture GitHub repositories:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://github.com/OvertureMaps/schema",children:"Schema"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://github.com/OvertureMaps/data",children:"Data"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://github.com/OvertureMaps/docs",children:"Docs"})}),"\n"]})]})}function l(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);