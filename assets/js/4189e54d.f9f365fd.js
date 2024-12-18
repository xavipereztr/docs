"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[1257],{68157:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var i=s(6013),a=s(74848),d=s(28453);let r={title:"2024-05-16-beta.0",slug:"2024-05-16-beta.0"},t=void 0,l={authorsImageUrls:[]},c=[{value:"Breaking changes",id:"breaking-changes",level:3},{value:"Deprecations",id:"deprecations",level:3},{value:"Schema Changelog",id:"schema-changelog",level:3},{value:"Theme-specific updates",id:"theme-specific-updates",level:3},{value:"Attribution",id:"attribution",level:3}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Here's what's new and updated in the Overture Maps ",(0,a.jsx)(n.code,{children:"2024-05-16-beta.0"}),' release. The "beta" designation indicates the data and schema are largely stable.']}),"\n",(0,a.jsxs)(n.p,{children:["Overture Maps ",(0,a.jsx)(n.code,{children:"2024-05-16-beta.0"})," is available in GeoParquet and stored on AWS and Azure. Users can select the data of interest and download it by following the process outlined ",(0,a.jsx)(n.a,{href:"https://docs.overturemaps.org/getting-data/",children:"here"}),". We encourage developers wishing to adopt Overture Maps base layers to begin evaluating and providing ",(0,a.jsx)(n.a,{href:"https://github.com/OvertureMaps/data/discussions",children:"feedback on the data, schema, and GERS IDs"}),". Depending on the feedback from this release and subsequent releases, we anticipate moving to a production release in the next few months."]}),"\n",(0,a.jsx)(n.h3,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"buildings"})," theme, we promoted ",(0,a.jsx)(n.code,{children:"class"})," to ",(0,a.jsx)(n.code,{children:"subtype"})," and introduced new ",(0,a.jsx)(n.code,{children:"class"})," values. This allows for more detail in a feature. Parking garages, for example, now have the attributes: ",(0,a.jsx)(n.code,{children:"subtype=transportation"})," and ",(0,a.jsx)(n.code,{children:"class=parking"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"deprecations",children:"Deprecations"}),"\n",(0,a.jsxs)(n.p,{children:["Last month, we announced the deprecation of our ",(0,a.jsx)(n.code,{children:"admins"})," theme and launched its replacement, ",(0,a.jsx)(n.code,{children:"divisions"}),". Because of issues with missing data in ",(0,a.jsx)(n.code,{children:"divisions"}),", we have extended the life of ",(0,a.jsx)(n.code,{children:"admins"}),". Here is the new deprecation schedule: the two themes will coexist in the May, June, and July 2024 releases; in the August 2024 release, we will fully remove ",(0,a.jsx)(n.code,{children:"admins"})," from our schema and data. More information on why we made this change ",(0,a.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema/discussions/117",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"schema-changelog",children:"Schema Changelog"}),"\n",(0,a.jsxs)(n.p,{children:["See our ",(0,a.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema/releases",children:"changelog"})," here."]}),"\n",(0,a.jsx)(n.h3,{id:"theme-specific-updates",children:"Theme-specific updates"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Divisions/Admins"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"refreshed data with OpenStreetMap snap on 10 May 2024"}),"\n",(0,a.jsxs)(n.li,{children:["populated ",(0,a.jsx)(n.code,{children:"region"})," field for ",(0,a.jsx)(n.code,{children:"division_area"})," type"]}),"\n",(0,a.jsxs)(n.li,{children:["populated ",(0,a.jsx)(n.code,{children:"local_type"})," field ",(0,a.jsx)(n.code,{children:"division"})," type"]}),"\n",(0,a.jsxs)(n.li,{children:["known issue: the ",(0,a.jsx)(n.code,{children:"capital_division_id"})," field in ",(0,a.jsx)(n.code,{children:"division"})," type is missing data"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["See information above about the deprecation of ",(0,a.jsx)(n.code,{children:"admins"})," schema and data"]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Base"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["added ",(0,a.jsx)(n.code,{children:"land_cover"})," schema and data derived from ESA WorldCover high-resolution Earth observation imagery"]}),"\n",(0,a.jsxs)(n.li,{children:["added new subtypes in ",(0,a.jsx)(n.code,{children:"infrastructure"})," type: ",(0,a.jsx)(n.code,{children:"barrier"}),", ",(0,a.jsx)(n.code,{children:"pedestrian"}),", ",(0,a.jsx)(n.code,{children:"utility"}),", ",(0,a.jsx)(n.code,{children:"waste_management"}),", ",(0,a.jsx)(n.code,{children:"water"})]}),"\n",(0,a.jsxs)(n.li,{children:["added ",(0,a.jsx)(n.code,{children:"min_zoom"})," and ",(0,a.jsx)(n.code,{children:"max_zoom"})," attributes for cartographic purposes"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Buildings"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["promoted ",(0,a.jsx)(n.code,{children:"class"})," to ",(0,a.jsx)(n.code,{children:"subtype"})," and introduced new class values for buildings. Where relevant, the class tag is the value of the building key in OSM. This allows anyone to use previous class types as subtype (backwards compatible) and introduces new class values that allow for more detail, like parking. Parking garages, for example, now have the attributes: ",(0,a.jsx)(n.code,{children:"subtype=transportation"}),", ",(0,a.jsx)(n.code,{children:"class=parking"}),"; example of new subtypes, promoted from class: ",(0,a.jsx)(n.code,{children:"agricultural"}),", ",(0,a.jsx)(n.code,{children:"civic"}),", ",(0,a.jsx)(n.code,{children:"commercial"}),", ",(0,a.jsx)(n.code,{children:"education"}),", ",(0,a.jsx)(n.code,{children:"entertainment"}),", ",(0,a.jsx)(n.code,{children:"industrial"}),", ",(0,a.jsx)(n.code,{children:"medical"}),", ",(0,a.jsx)(n.code,{children:"military"}),", ",(0,a.jsx)(n.code,{children:"outbuilding"}),", ",(0,a.jsx)(n.code,{children:"religious"}),", ",(0,a.jsx)(n.code,{children:"residential"}),", ",(0,a.jsx)(n.code,{children:"service"}),", ",(0,a.jsx)(n.code,{children:"transportation"})]}),"\n",(0,a.jsx)(n.li,{children:"made incremental updates from OSM since the previous release"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Places"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"made incremental changes to improve the accuracy and quality of the dataset"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Transportation"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"added missing vehicle travel mode"}),"\n",(0,a.jsxs)(n.li,{children:["added missing ",(0,a.jsx)(n.code,{children:"is_covered"})," road flag"]}),"\n",(0,a.jsxs)(n.li,{children:["populated ",(0,a.jsx)(n.code,{children:"is_abandoned"})," flag when relevant abandoned or disused tags are present"]}),"\n",(0,a.jsx)(n.li,{children:"added OSM source ids for connectors"}),"\n",(0,a.jsx)(n.li,{children:"fixed null linear referencing for names in some cases"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"attribution",children:"Attribution"}),"\n",(0,a.jsxs)(n.p,{children:["You'll find information about attribution and licensing ",(0,a.jsx)(n.a,{href:"https://docs.overturemaps.org/attribution/",children:"here"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},6013:e=>{e.exports=JSON.parse('{"permalink":"/release/2024-05-16-beta.0","source":"@site/release-blog/2024-beta/2024-05-16-beta.0.mdx","title":"2024-05-16-beta.0","description":"Here\'s what\'s new and updated in the Overture Maps 2024-05-16-beta.0 release. The \\"beta\\" designation indicates the data and schema are largely stable.","date":"2024-05-16T00:00:00.000Z","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"2024-05-16-beta.0","slug":"2024-05-16-beta.0"},"unlisted":false,"prevItem":{"title":"2024-06-13-beta.1","permalink":"/release/2024-06-13-beta.0"},"nextItem":{"title":"2024-04-16-beta.0","permalink":"/release/2024-04-16-beta.0"}}')}}]);