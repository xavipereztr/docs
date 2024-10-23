"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[5796],{57531:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=s(74848),r=s(28453);s(11470),s(19365),s(97577);const i={title:"2024-08-20.0",slug:"2024-08-20.0"},a=void 0,l={permalink:"/release/2024-08-20.0",source:"@site/release-blog/2024/2024-08-20.0.mdx",title:"2024-08-20.0",description:"Overview",date:"2024-08-20T00:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"2024-08-20.0",slug:"2024-08-20.0"},unlisted:!1,prevItem:{title:"2024-09-18.0",permalink:"/release/2024-09-18.0"},nextItem:{title:"2024-07-22.0",permalink:"/release/2024-07-22.0"}},o={authorsImageUrls:[]},h=[{value:"Overview",id:"overview",level:2},{value:"Microsoft Azure:",id:"microsoft-azure",level:4},{value:"Amazon S3:",id:"amazon-s3",level:4},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Deprecations",id:"deprecations",level:2},{value:"Theme-specific updates",id:"theme-specific-updates",level:2},{value:"Addresses",id:"addresses",level:3},{value:"Base",id:"base",level:3},{value:"Buildings",id:"buildings",level:3},{value:"Divisions",id:"divisions",level:3},{value:"Places",id:"places",level:3},{value:"Transportation",id:"transportation",level:3},{value:"Global Entity Reference System (GERS) changelog",id:"global-entity-reference-system-gers-changelog",level:2},{value:"Schema Changelog",id:"schema-changelog",level:2},{value:"Attribution",id:"attribution",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["Overture's ",(0,t.jsx)(n.code,{children:"2024-08-20.0"})," data release is now available."]})," The base, buildings, divisions, and places themes are stable, which means the only changes this month are data improvements and bug fixes. The transportation theme remains in beta and we have made several significant changes to the schema in this release. The addresses theme is in alpha."]}),"\n",(0,t.jsx)(n.p,{children:"The datasets are available as GeoParquet files stored on both AWS and Azure. The release paths are:"}),"\n",(0,t.jsx)(n.h4,{id:"microsoft-azure",children:"Microsoft Azure:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"wasbs://release@overturemapswestus2.blob.core.windows.net/2024-08-20.0\n"})}),"\n",(0,t.jsx)(n.h4,{id:"amazon-s3",children:"Amazon S3:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"s3://overturemaps-us-west-2/release/2024-08-20.0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can access the datasets by following the process outlined ",(0,t.jsx)(n.a,{href:"https://docs.overturemaps.org/getting-data/",children:"here"}),". We encourage users to report bugs and provide feedback on the data, schema, and GERS on one of our Overture GitHub repositories:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema",children:"Schema"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OvertureMaps/data",children:"Data"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OvertureMaps/docs",children:"Docs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OvertureMaps/overturemaps-py",children:"Python command-line tool"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OvertureMaps/io-site",children:"Explore site"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,t.jsx)(n.p,{children:"Changes were made to the transportation theme in this release to better support a variety of routing use cases. A summary of those changes, below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["we added a ",(0,t.jsx)(n.code,{children:"subclass"})," property that refines the descriptions of segments by:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"clearly specifying the usage of a length of road and using linear referencing, instead of further segmentation, to pinpoint a change in how the road is used"}),"\n",(0,t.jsx)(n.li,{children:"properly classifying information from OpenStreetMap"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["to better support routing use cases, we added to the segment feature type a new property called ",(0,t.jsx)(n.code,{children:"connectors"}),": an array of IDs with pre-computed linear reference values that explicitly link segment geometry with connector coordinates. This new property\u2014a replacement for the existing ",(0,t.jsx)(n.code,{children:"connector_ids"})," property\u2014will reduce complexity and improve accuracy as we calculate the intersections between segments and connectors."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["we added a ",(0,t.jsx)(n.code,{children:"destinations"})," property to the segment feature type. This property describes the transitions from one segment to another on the way to a specified location"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can read more about these changes on the ",(0,t.jsx)(n.a,{href:"https://docs.overturemaps.org/blog/2024/08/15/preview-august-release/",children:"engineering blog"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"deprecations",children:"Deprecations"}),"\n",(0,t.jsxs)(n.p,{children:["In this release, we deprecated the ",(0,t.jsx)(n.code,{children:"connector_ids"})," property in the transportation schema and plan to remove it by the October release. It will be replaced by the new ",(0,t.jsx)(n.code,{children:"connectors"})," property, introduced in the schema this month."]}),"\n",(0,t.jsx)(n.h2,{id:"theme-specific-updates",children:"Theme-specific updates"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The base, buildings, divisions, and places themes are in GA. The transportation theme is in beta, and the addresses theme is in alpha."})}),"\n",(0,t.jsx)(n.h3,{id:"addresses",children:"Addresses"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"3.15M new address features were added in Switzerland."}),"\n",(0,t.jsx)(n.li,{children:"addresses in 15 countries are now available."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"base",children:"Base"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["made incremental changes to improve the accuracy and quality of the dataset. Built from ",(0,t.jsx)(n.a,{href:"https://daylightmap.org/2024/08/12/daylight-v152-released.html",children:"Daylight v1.52"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"buildings",children:"Buildings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"removed 60M buildings over water and transportation segments."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"divisions",children:"Divisions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"added 12 features at the region subtype in the country of Georgia."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"places",children:"Places"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"made incremental changes to improve the accuracy and quality of the dataset"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"transportation",children:"Transportation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["we added a new ",(0,t.jsxs)(n.a,{href:"https://github.com/OvertureMaps/schema/pull/180",children:[(0,t.jsx)(n.code,{children:"subclass"})," property"]})," that refines the descriptions of segments."]}),"\n",(0,t.jsxs)(n.li,{children:["to better support routing use cases, we added to the segment feature type a new property called ",(0,t.jsx)(n.code,{children:"connectors"}),", replacing the  existing ",(0,t.jsx)(n.code,{children:"connector_ids"})," property."]}),"\n",(0,t.jsxs)(n.li,{children:["we added a ",(0,t.jsx)(n.code,{children:"destinations"})," property to the segment feature type."]}),"\n",(0,t.jsxs)(n.li,{children:["our transportation splitter tool was made available in ",(0,t.jsx)(n.a,{href:"https://github.com/OvertureMaps/transportation-splitter",children:"a public GitHub repository"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"fixed a bug that caused segments to be missing sources or other attributes, affecting ~100K segments."}),"\n",(0,t.jsx)(n.li,{children:"fixed name filtering to avoid including names with an invalid BCP-47 tag."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"global-entity-reference-system-gers-changelog",children:"Global Entity Reference System (GERS) changelog"}),"\n",(0,t.jsx)(n.p,{children:"The GERS changelog captures any changes in Overture features between this release and the previous release. The changelog is available as Parquet files - partitioned by theme, type, and change type - at the following locations on Azure and AWS:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"wasbs://changelog@overturemapswestus2.blob.core.windows.net/2024-08-20.0\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"s3://overturemaps-us-west-2/changelog/2024-08-20.0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can find more information about ",(0,t.jsx)(n.a,{href:"https://docs.overturemaps.org/gers/changelog/",children:"using the GERS Changelog in our documentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"schema-changelog",children:"Schema Changelog"}),"\n",(0,t.jsxs)(n.p,{children:["There are no schema changes this month, other than minor improvements to the schema documentation. The schema changelog is ",(0,t.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema/releases",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"attribution",children:"Attribution"}),"\n",(0,t.jsxs)(n.p,{children:["You'll find information about attribution and licensing ",(0,t.jsx)(n.a,{href:"https://docs.overturemaps.org/attribution/",children:"here"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},97577:(e,n,s)=>{s.d(n,{A:()=>a});var t=s(21432),r=s(44586),i=s(74848);function a(e){const{siteConfig:{customFields:n}}=(0,r.A)();var s=e.query.replace("__OVERTURE_RELEASE",n.overtureRelease);s=(s=s.replace("__ATHENA_OVERTURE_RELEASE","v"+n.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",n.overtureRelease.split(".",1));var a=e.language||"sql";return(0,i.jsx)(t.default,{language:a,title:e.title,children:s})}}}]);