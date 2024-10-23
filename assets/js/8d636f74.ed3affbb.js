"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[1839],{38919:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=s(74848),r=s(28453);s(11470),s(19365),s(97577);const a={title:"2024-10-23.0",slug:"latest"},t=void 0,o={permalink:"/release/latest",source:"@site/release-blog/2024/2024-10-23.0.mdx",title:"2024-10-23.0",description:"Overview",date:"2024-10-23T00:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"2024-10-23.0",slug:"latest"},unlisted:!1,nextItem:{title:"2024-09-18.0",permalink:"/release/2024-09-18.0"}},l={authorsImageUrls:[]},d=[{value:"Overview",id:"overview",level:2},{value:"Microsoft Azure:",id:"microsoft-azure",level:4},{value:"Amazon S3:",id:"amazon-s3",level:4},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Deprecations",id:"deprecations",level:2},{value:"Theme-specific updates",id:"theme-specific-updates",level:2},{value:"Addresses",id:"addresses",level:3},{value:"Base",id:"base",level:3},{value:"Buildings",id:"buildings",level:3},{value:"Divisions",id:"divisions",level:3},{value:"Places",id:"places",level:3},{value:"Transportation",id:"transportation",level:3},{value:"Global Entity Reference System (GERS) changelog",id:"global-entity-reference-system-gers-changelog",level:2},{value:"Schema changelog",id:"schema-changelog",level:2},{value:"Attribution",id:"attribution",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["The ",(0,i.jsx)(n.code,{children:"2024-10-23.0"})," release of Overture data and ",(0,i.jsx)(n.code,{children:"v1.2.0"})," of the Overture schema are now available."]})," As part of Overture's mission to improve data quality and coverage and to expand the number of sources we use to make our datasets,\nwe added in this release address data for several new countries, transportation data in Saudi Arabia and Italy from TomTom, and building height data from Microsoft and Esri Community Maps contributors."]}),"\n",(0,i.jsx)(n.p,{children:"The October release is available as GeoParquet files stored on both AWS and Azure. The release paths are:"}),"\n",(0,i.jsx)(n.h4,{id:"microsoft-azure",children:"Microsoft Azure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"wasbs://release@overturemapswestus2.blob.core.windows.net/2024-10-23.0\n"})}),"\n",(0,i.jsx)(n.h4,{id:"amazon-s3",children:"Amazon S3:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"s3://overturemaps-us-west-2/release/2024-10-23.0\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["We are now releasing Overture's GeoParquet files in accordance with the ",(0,i.jsx)(n.a,{href:"https://geoparquet.org/releases/v1.1.0/",children:"GeoParquet v1.1.0 specification"}),", with the covering metadata included."]})}),"\n",(0,i.jsxs)(n.p,{children:["You can access the datasets by following the process outlined ",(0,i.jsx)(n.a,{href:"https://docs.overturemaps.org/getting-data/",children:"here"}),". We encourage you to ask questions, report bugs, and provide feedback via our ",(0,i.jsx)(n.a,{href:"https://github.com/OvertureMaps/data",children:"data"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema",children:"schema"})," repositories on GitHub. If you have a suggestion for a new dataset or if you have data you'd like to contribute to Overture, you can email us at ",(0,i.jsx)(n.strong,{children:"data AT overturemaps.org"}),". We\u2019d love to hear from you."]}),"\n",(0,i.jsx)(n.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,i.jsxs)(n.p,{children:["We removed the ",(0,i.jsx)(n.code,{children:"connector_ids"})," property from the schema and replaced it with a new ",(0,i.jsx)(n.code,{children:"connectors"})," property. You'll find more information about this change ",(0,i.jsx)(n.a,{href:"https://docs.overturemaps.org/blog/2024/08/15/preview-august-release/#connectors",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"deprecations",children:"Deprecations"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"2024-08-20.0"})," ",(0,i.jsx)(n.a,{href:"https://docs.overturemaps.org/release/2024-08-20.0/",children:"release notes"}),", we announced the deprecation of the ",(0,i.jsx)(n.code,{children:"connector_ids"})," property in the transportation schema. We have removed that property in this release."]}),"\n",(0,i.jsx)(n.h2,{id:"theme-specific-updates",children:"Theme-specific updates"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The base, buildings, divisions, and places themes are in GA. The transportation theme is in beta, and the addresses theme is in alpha."})}),"\n",(0,i.jsx)(n.h3,{id:"addresses",children:"Addresses"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["added new address features in the following countries:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"89.9 million"})," in Brazil"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"1.7 million"})," in Croatia"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"5.9 million"})," in German",(0,i.jsx)(n.a,{href:"https://youtu.be/WBpDs-BfwO0?feature=shared",children:"y"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"19.6 million"})," in Japan"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"2.6 million"})," in Norway"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"7.7 million"})," in Poland"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"1.6 million"})," in Slovakia"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["updated the ",(0,i.jsx)(n.a,{href:"https://www.transportation.gov/gis/national-address-database",children:"US National Address Database"})," to v17"]}),"\n",(0,i.jsxs)(n.li,{children:["added data from the ",(0,i.jsx)(n.a,{href:"https://opendata.cityofnewyork.us/",children:"NYC Open Data"})," portal"]}),"\n",(0,i.jsx)(n.li,{children:"fixed a bug that resulted in both the US National Address Database and NYC Open Data being included for Queens"}),"\n",(0,i.jsx)(n.li,{children:"fixed a typo in the Geoscape Australia source name"}),"\n",(0,i.jsx)(n.li,{children:"changed the data source name for Chile to CL-INE and Portugal to PT-INE to distinguish the two"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"base",children:"Base"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"fixed lake features in Manitoba, Canada"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"buildings",children:"Buildings"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"fixed building features with class but no subtype property"}),"\n",(0,i.jsx)(n.li,{children:"fixed building height data missing in September release"}),"\n",(0,i.jsx)(n.li,{children:"fixed building height data derived from lidar"}),"\n",(0,i.jsx)(n.li,{children:"fixed ML buildings in water"}),"\n",(0,i.jsx)(n.li,{children:"added new data from OSM (2024-10-05)"}),"\n",(0,i.jsx)(n.li,{children:"added new data from Microsoft (2024-09-24)"}),"\n",(0,i.jsx)(n.li,{children:"added new from Esri Community Maps contributors (2024-10-15)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"divisions",children:"Divisions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"updated the subtype of 38 dependencies, e.g. Puerto Rico"}),"\n",(0,i.jsx)(n.li,{children:"fixed microhood/neighborhood discrepancy between feature types"}),"\n",(0,i.jsx)(n.li,{children:"updated regions in North Macedonia"}),"\n",(0,i.jsx)(n.li,{children:"moved features with a suburbs tag into a new macrohood subtype"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"places",children:"Places"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"no updates"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"transportation",children:"Transportation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["removed ",(0,i.jsx)(n.code,{children:"connector_ids"})," property; more information ",(0,i.jsx)(n.a,{href:"https://docs.overturemaps.org/blog/2024/08/15/preview-august-release/#connectors",children:"here"})]}),"\n",(0,i.jsx)(n.li,{children:"removed duplicate coordinates for 100 segment geometries"}),"\n",(0,i.jsx)(n.li,{children:"fixed most remaining schema mismatch issues, primarily for turn restrictions"}),"\n",(0,i.jsx)(n.li,{children:"filtered out abandoned/disused railways until they can be properly flagged, affecting 336K segments"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"global-entity-reference-system-gers-changelog",children:"Global Entity Reference System (GERS) changelog"}),"\n",(0,i.jsx)(n.p,{children:"The GERS changelog captures any changes in Overture features between this release and the previous release. The changelog is available as Parquet files \u2014 partitioned by theme, type, and change type \u2014 at the following locations on Azure and AWS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"wasbs://changelog@overturemapswestus2.blob.core.windows.net/2024-10-23.0\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"s3://overturemaps-us-west-2/changelog/2024-10-23.0\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can find more information about ",(0,i.jsx)(n.a,{href:"https://docs.overturemaps.org/gers/changelog/",children:"the GERS Changelog in our documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"schema-changelog",children:"Schema changelog"}),"\n",(0,i.jsxs)(n.p,{children:["The changelog for Overture schema ",(0,i.jsx)(n.code,{children:"v1.2.0"})," is ",(0,i.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema/releases",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"attribution",children:"Attribution"}),"\n",(0,i.jsxs)(n.p,{children:["You'll find information about attribution and licensing ",(0,i.jsx)(n.a,{href:"/attribution",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},97577:(e,n,s)=>{s.d(n,{A:()=>t});var i=s(21432),r=s(44586),a=s(74848);function t(e){const{siteConfig:{customFields:n}}=(0,r.A)();var s=e.query.replace("__OVERTURE_RELEASE",n.overtureRelease);s=(s=s.replace("__ATHENA_OVERTURE_RELEASE","v"+n.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",n.overtureRelease.split(".",1));var t=e.language||"sql";return(0,a.jsx)(i.default,{language:t,title:e.title,children:s})}}}]);