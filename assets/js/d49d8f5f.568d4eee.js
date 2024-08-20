"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[6195],{57455:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var n=r(74848),a=r(28453);const t={title:"Base",description:"Infrastructure, Land, Landuse, Landcover, and Water features."},i=void 0,c={id:"guides/base",title:"Base",description:"Infrastructure, Land, Landuse, Landcover, and Water features.",source:"@site/docs/guides/base.mdx",sourceDirName:"guides",slug:"/guides/base",permalink:"/guides/base",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1724188826e3,frontMatter:{title:"Base",description:"Infrastructure, Land, Landuse, Landcover, and Water features."},sidebar:"docs",previous:{title:"Addresses",permalink:"/guides/addresses"},next:{title:"Buildings",permalink:"/guides/buildings"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Schema design choices",id:"schema-design-choices",level:2},{value:"Schema reference",id:"schema-reference",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(s.p,{children:["The Overture Maps ",(0,n.jsx)(s.code,{children:"base"})," theme provides the land and water features that are necessary to render a complete basemap. These features are currently derived from the ",(0,n.jsx)(s.a,{href:"https://daylightmap.org/earth/",children:"Daylight Earth Tables"})," schema and include the ",(0,n.jsx)(s.a,{href:"https://daylightmap.org/coastlines.html",children:"Daylight Coastlines"}),". The theme includes five feature types:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"infrastructure"})}),": Infrastructure features such as communication towers and lines, piers, and bridges."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"land"})}),": physical representations of land surfaces derived from the inverse of OSM Coastlines; translates natural tags from OpenStreetMap."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"land_cover"})}),": derived from ",(0,n.jsx)(s.a,{href:"https://esa-worldcover.org/en",children:"ESA WorldCover"}),", high-resolution optical Earth observation data."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"land_use"})}),": classifications of the human use of a section of land; translates landuse tag from OpenStreetMap."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"water"})}),": physical representations of inland and ocean marine surfaces; translates natural and waterway tags from OpenStreetMap."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"schema-design-choices",children:"Schema design choices"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["basic classification of features into ",(0,n.jsx)(s.code,{children:"type"}),", ",(0,n.jsx)(s.code,{children:"subtype"})," and ",(0,n.jsx)(s.code,{children:"class"})," where appropriate."]}),"\n",(0,n.jsxs)(s.li,{children:["parsing and normalization of common OSM tags, such as ",(0,n.jsx)(s.code,{children:"height"})," and ",(0,n.jsx)(s.code,{children:"ele"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["extraction of consistent OSM tags, such as ",(0,n.jsx)(s.code,{children:"wikidata"})," to top-level properties."]}),"\n",(0,n.jsx)(s.li,{children:"direct pass-through of remaining relevant OSM tags."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"schema-reference",children:"Schema reference"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/schema/reference/base/infrastructure",children:"Explore the schema for the infrastructure feature type"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/schema/reference/base/land",children:"Explore the schema for the land feature type"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/schema/reference/base/land_cover",children:"Explore the schema for the land cover feature type"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/schema/reference/base/land_use",children:"Explore the schema for the land use feature type"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/schema/reference/base/water",children:"Explore the schema for the water feature type"}),"."]}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);