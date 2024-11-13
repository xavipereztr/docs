"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[1957],{26155:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=s(74848),r=s(28453);s(11470),s(19365),s(97577);const i={title:"2024-09-18.0",slug:"2024-09-18.0"},t=void 0,l={permalink:"/release/2024-09-18.0",source:"@site/release-blog/2024/2024-09-18.0.mdx",title:"2024-09-18.0",description:"Overview",date:"2024-09-18T00:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"2024-09-18.0",slug:"2024-09-18.0"},unlisted:!1,prevItem:{title:"2024-10-23.0",permalink:"/release/2024-10-23.0"},nextItem:{title:"2024-08-20.0",permalink:"/release/2024-08-20.0"}},d={authorsImageUrls:[]},o=[{value:"Overview",id:"overview",level:2},{value:"Microsoft Azure:",id:"microsoft-azure",level:4},{value:"Amazon S3:",id:"amazon-s3",level:4},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Deprecations",id:"deprecations",level:2},{value:"Theme-specific updates",id:"theme-specific-updates",level:2},{value:"Addresses",id:"addresses",level:3},{value:"Base",id:"base",level:3},{value:"Buildings",id:"buildings",level:3},{value:"Divisions",id:"divisions",level:3},{value:"Places",id:"places",level:3},{value:"Transportation",id:"transportation",level:3},{value:"Global Entity Reference System (GERS) changelog",id:"global-entity-reference-system-gers-changelog",level:2},{value:"Schema Changelog",id:"schema-changelog",level:2},{value:"Attribution",id:"attribution",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.strong,{children:["The ",(0,a.jsx)(n.code,{children:"2024-09-18.0"})," release of Overture data is now available."]}),"  We are still on ",(0,a.jsx)(n.code,{children:"v.1.1.0"})," of the Overture schema, as we did not cut a new schema version with this data release. The base, buildings, divisions, and places themes are stable, which means the only changes to these themes are data improvements and bug fixes. We added new road data from TomTom, mostly in Saudi Arabia, to the transportation theme (beta). To the addresses theme (alpha) we added new data for Finland and Chile, and we replaced NAD-sourced address features in New York City with addresses from NYC Open Data."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Overture's GeoParquet files are now released according to the ",(0,a.jsx)(n.a,{href:"https://geoparquet.org/releases/v1.1.0/",children:"GeoParquet v1.1.0 specification"}),", with the ",(0,a.jsx)(n.code,{children:"covering"})," metadata included."]})}),"\n",(0,a.jsx)(n.p,{children:"The datasets are available as GeoParquet files stored on both AWS and Azure.\nThe release paths are:"}),"\n",(0,a.jsx)(n.h4,{id:"microsoft-azure",children:"Microsoft Azure:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"wasbs://release@overturemapswestus2.blob.core.windows.net/2024-09-18.0\n"})}),"\n",(0,a.jsx)(n.h4,{id:"amazon-s3",children:"Amazon S3:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"s3://overturemaps-us-west-2/release/2024-09-18.0\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can access the datasets by following the process outlined ",(0,a.jsx)(n.a,{href:"https://docs.overturemaps.org/getting-data/",children:"here"}),". We encourage users to report bugs and provide feedback on the data, schema, and GERS on one of our Overture GitHub repositories:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema",children:"Schema"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/OvertureMaps/data",children:"Data"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/OvertureMaps/docs",children:"Docs"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/OvertureMaps/overturemaps-py",children:"Python command-line tool"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/OvertureMaps/io-site",children:"Explore site"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,a.jsx)(n.p,{children:"There are no breaking changes this month."}),"\n",(0,a.jsx)(n.h2,{id:"deprecations",children:"Deprecations"}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"2024-08-20.0"})," release notes, we announced the deprecation of the ",(0,a.jsx)(n.code,{children:"connector_ids"})," property in the transportation schema. We plan to remove that property by the October release. It has been replaced by the new ",(0,a.jsx)(n.code,{children:"connectors"})," property, introduced in the schema last month."]}),"\n",(0,a.jsx)(n.h2,{id:"theme-specific-updates",children:"Theme-specific updates"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"The base, buildings, divisions, and places themes are in GA. The transportation theme is in beta, and the addresses theme is in alpha."})}),"\n",(0,a.jsx)(n.h3,{id:"addresses",children:"Addresses"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"added 3,897,449 new addresses in Finland."}),"\n",(0,a.jsx)(n.li,{children:"added 4,042,071 new addresses in Chile."}),"\n",(0,a.jsx)(n.li,{children:"completed \u201ccut and replace\u201d work in NYC, which entailed removing NAD-sourced address features and replacing them with addresses from NYC Open Data."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"base",children:"Base"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"made incremental changes to improve the accuracy and quality of the dataset."}),"\n",(0,a.jsxs)(n.li,{children:["refreshed data with ",(0,a.jsx)(n.a,{href:"https://daylightmap.org/2024/09/09/daylight-v154-released.html",children:"Daylight v1.54"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"buildings",children:"Buildings"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"made incremental changes to improve the accuracy and quality of the dataset."}),"\n",(0,a.jsxs)(n.li,{children:["refreshed data with ",(0,a.jsx)(n.a,{href:"https://daylightmap.org/2024/09/09/daylight-v154-released.html",children:"Daylight v1.54"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"divisions",children:"Divisions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["rolled back to the August version of the ",(0,a.jsx)(n.code,{children:"divisions"})," data because a bug fix in the latest version caused a regression in ",(0,a.jsx)(n.code,{children:"local_type"})," property coverage."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"places",children:"Places"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"made incremental changes to improve the accuracy and quality of the dataset."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"transportation",children:"Transportation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"added more than 1000km of non-OSM road segments from TomTom to improve data in Saudi Arabia and fix a coverage gap."}),"\n",(0,a.jsx)(n.li,{children:"added OSM source version and update time for all applicable features."}),"\n",(0,a.jsx)(n.li,{children:"added more precise length calculation for linearly referenced values."}),"\n",(0,a.jsxs)(n.li,{children:["removed invalid ",(0,a.jsx)(n.code,{children:"connector_id"})," segment references."]}),"\n",(0,a.jsxs)(n.li,{children:["increased precision on ",(0,a.jsx)(n.code,{children:"connectors"})," at LR value."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"global-entity-reference-system-gers-changelog",children:"Global Entity Reference System (GERS) changelog"}),"\n",(0,a.jsx)(n.p,{children:"The GERS changelog captures any changes in Overture features between this release and the previous release. The changelog is available as Parquet files - partitioned by theme, type, and change type - at the following locations on Azure and AWS:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"wasbs://changelog@overturemapswestus2.blob.core.windows.net/2024-09-18.0\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"s3://overturemaps-us-west-2/changelog/2024-09-18.0\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can find more information about ",(0,a.jsx)(n.a,{href:"https://docs.overturemaps.org/gers/changelog/",children:"using the GERS Changelog in our documentation"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"schema-changelog",children:"Schema Changelog"}),"\n",(0,a.jsxs)(n.p,{children:["There are no schema changes this month, other than minor improvements to the schema documentation. The schema changelog is ",(0,a.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema/releases",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"attribution",children:"Attribution"}),"\n",(0,a.jsxs)(n.p,{children:["You'll find information about attribution and licensing ",(0,a.jsx)(n.a,{href:"/attribution",children:"here"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},97577:(e,n,s)=>{s.d(n,{A:()=>t});var a=s(21432),r=s(44586),i=s(74848);function t(e){const{siteConfig:{customFields:n}}=(0,r.A)();var s=e.query.replace("__OVERTURE_RELEASE",n.overtureRelease);s=(s=s.replace("__ATHENA_OVERTURE_RELEASE","v"+n.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",n.overtureRelease.split(".",1));var t=e.language||"sql";return(0,i.jsx)(a.default,{language:t,title:e.title,children:s})}}}]);