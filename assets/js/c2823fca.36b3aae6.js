"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[1001],{70736:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var r=s(74848),a=s(28453);s(97577);const n={title:"Global Entity Reference System (GERS)",slug:"/gers"},i=void 0,d={id:"gers/index",title:"Global Entity Reference System (GERS)",description:"The Global Entity Reference System (GERS) is a framework that structures, encodes, and matches map data to a shared universal reference within Overture. GERS, coupled with Overture datasets, is a potential standard for identifying and referencing the physical and conceptual entities we've defined in our world, such as office buildings, grocery stores, forests, countries, rivers, museums, capitals of provinces, and mailing addresses.",source:"@site/docs/gers/index.mdx",sourceDirName:"gers",slug:"/gers",permalink:"/gers",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1733330113e3,frontMatter:{title:"Global Entity Reference System (GERS)",slug:"/gers"},sidebar:"docs",previous:{title:"Transportation",permalink:"/guides/transportation"},next:{title:"GERS Changelog",permalink:"/gers/changelog"}},c={},l=[{value:"Structure of a GERS ID",id:"structure-of-a-gers-id",level:2},{value:"Reichstag Building",id:"reichstag-building",level:4},{value:"Brandenburg Gate",id:"brandenburg-gate",level:4},{value:"Using GERS",id:"using-gers",level:2},{value:"Associating data",id:"associating-data",level:4},{value:"Contributing data",id:"contributing-data",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Global Entity Reference System (GERS) is a framework that structures, encodes, and matches map data to a shared universal reference within Overture. GERS, coupled with Overture datasets, is a potential standard for identifying and referencing the physical and conceptual entities we've defined in our world, such as office buildings, grocery stores, forests, countries, rivers, museums, capitals of provinces, and mailing addresses."}),"\n",(0,r.jsx)(t.p,{children:"Overture assigns a unique ID to each feature in an Overture dataset. These unique IDs form the basis of GERS. The map feature, and therefore its GERS ID, represents an entity that exists in the real world. For example, a building housing a branch of a public library is represented in the Overture buildings dataset as a feature with its own unique ID. The public library is a place of interest, represented in the Overture places dataset with its own unique ID. The building and the library are distinct entities with distinct GERS IDs. If the library moves into a new building across town, the library's GERS ID will remain the same. The library's former building, now vacated, also keeps its GERS ID in the buildings dataset. This ensures stability and accuracy amid change."}),"\n",(0,r.jsx)(t.h2,{id:"structure-of-a-gers-id",children:"Structure of a GERS ID"}),"\n",(0,r.jsxs)(t.p,{children:["GERS IDs are 32 characters and 128 bits. For most features types, the GERS ID is intended to be ",(0,r.jsx)(t.a,{href:"stability",children:"stable"})," across ",(0,r.jsx)(t.a,{href:"/release",children:"Overture releases"}),". This means a GERS ID assigned to a building feature, for example, won't change even if the building's properties change, including changes to its geometry."]}),"\n",(0,r.jsx)(t.p,{children:"Let's examine the GERS IDs for two iconic buildings in Berlin."}),"\n",(0,r.jsx)(t.h4,{id:"reichstag-building",children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Reichstag_building",children:"Reichstag Building"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Overture release"}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.code,{children:"id"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.code,{children:"change_type"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"2024-07-22.0"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"08b1f1d488708fff0200bf6d40c1cf8f"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"data_changed"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"2024-08-20.0"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"08b1f1d488708fff0200bf6d40c1cf8f"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"data_changed"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"2024-09-18.0"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"08b1f1d488708fff0200bf6d40c1cf8f"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"data_changed"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"latest"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"08b1f1d488708fff0200bf6d40c1cf8f"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"unchanged"})})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"brandenburg-gate",children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Brandenburg_Gate",children:"Brandenburg Gate"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Overture release"}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.code,{children:"id"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.code,{children:"change_type"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"2024-07-22.0"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"08b1f1d488601fff02002aee6ba961a4"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"data_changed"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"2024-08-20.0"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"08b1f1d488601fff02002aee6ba961a4"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"unchanged"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"2024-09-18.0"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"08b1f1d488601fff02002aee6ba961a4"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"unchanged"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"latest"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"08b1f1d488601fff02002aee6ba961a4"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"unchanged"})})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The GERS IDs are stable from the July 2024 ",(0,r.jsx)(t.a,{href:"/release/2024-07-22.0/",children:"GA release"})," to the ",(0,r.jsx)(t.a,{href:"/release",children:"latest release"}),", and will remain stable over subsequent releases. Stable GERS IDs make it possible to query the ",(0,r.jsx)(t.a,{href:"changelog",children:"GERS changelog"})," and detect changes to the feature data associated with those GERS IDs. For each release listed above, the types of change logged for these buildings in Berlin is ",(0,r.jsx)(t.code,{children:"data_changed"}),", which usually indicates feature data improvements or updates, or ",(0,r.jsx)(t.code,{children:"unchanged"}),", which means no change in the feature data."]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Many users have noticed that in some Overture datasets the GERS IDs contain an ",(0,r.jsx)(t.a,{href:"https://h3geo.org",children:"H3 index"}),". As a reminder, Overture does ",(0,r.jsx)(t.strong,{children:"not"})," guarantee that a feature with an H3 index in its GERS ID will be permanently located in the expected H3 cell. We encourage you to use ",(0,r.jsx)(t.code,{children:"bbox"})," for data sharding and association."]})}),"\n",(0,r.jsx)(t.h2,{id:"using-gers",children:"Using GERS"}),"\n",(0,r.jsx)(t.p,{children:"These stable IDs, which form the backbone of GERS, make it possible to measure and track change over many Overture releases. Through GERS, you can:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"stability",children:"track the stability"})," of Overture features by their GERS IDs"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"gers-demonstrations",children:"match features"})," across an Overture dataset and a third-party dataset and assign GERS IDs to the matched features"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"gers-demonstrations",children:"associate third-party data"})," to Overture features by GERS ID"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"changelog",children:"detect changes"})," to Overture data from one release to another by querying across stable IDs in the GERS changelog"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"We envision our community using GERS to engage with Overture data in the following ways:"}),"\n",(0,r.jsx)(t.h4,{id:"associating-data",children:"Associating data"}),"\n",(0,r.jsx)(t.p,{children:"You can independently associate your own data (or a third-party dataset) with Overture data. For example, you might want to link real-time traffic data to Overture road segments, insurance data to Overture buildings, restaurant reviews to features in Overture's places dataset, and socioeconomic data features in Overture's divisions dataset. When third-party data is matched to an Overture feature it picks up that feature's GERS ID and becomes \"GERS-enabled\" data, ready to be associated via ID to any other GERS-enabled dataset in the Overture ecosystem."}),"\n",(0,r.jsx)(t.h4,{id:"contributing-data",children:"Contributing data"}),"\n",(0,r.jsx)(t.p,{children:"You can contribute data to the Overture Maps Foundation, and our engineering team will match the features in your dataset to features in Overture. Matched features may be assigned an existing GERS ID, and we may generate new IDs for new features."}),"\n",(0,r.jsxs)(t.p,{children:["You'll find theme-specific examples of GERS use cases in the ",(0,r.jsx)(t.a,{href:"gers-demonstrations",children:"GERS demonstrations"})," section of this documentation."]})]})}function o(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},97577:(e,t,s)=>{s.d(t,{A:()=>i});var r=s(21432),a=s(44586),n=s(74848);function i(e){const{siteConfig:{customFields:t}}=(0,a.A)();var s=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);s=(s=s.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",t.overtureRelease.split(".",1));var i=e.language||"sql";return(0,n.jsx)(r.default,{language:i,title:e.title,children:s})}}}]);