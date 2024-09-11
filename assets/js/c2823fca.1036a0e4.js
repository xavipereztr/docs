"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[1001],{70736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(74848),a=n(28453);n(97577);const r={title:"Global Entity Reference System (GERS)",slug:"/gers"},i=void 0,d={id:"gers/index",title:"Global Entity Reference System (GERS)",description:"Unique IDs",source:"@site/docs/gers/index.mdx",sourceDirName:"gers",slug:"/gers",permalink:"/gers",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1726064371e3,frontMatter:{title:"Global Entity Reference System (GERS)",slug:"/gers"},sidebar:"docs",previous:{title:"Transportation",permalink:"/guides/transportation"},next:{title:"GERS Changelog",permalink:"/gers/changelog"}},l={},c=[{value:"Unique IDs",id:"unique-ids",level:2},{value:"Reichstag Building",id:"reichstag-building",level:4},{value:"Brandenburg Gate",id:"brandenburg-gate",level:4},{value:"Understand GERS",id:"understand-gers",level:2},{value:"Using GERS",id:"using-gers",level:2},{value:"Associating data",id:"associating-data",level:4},{value:"Contributing data",id:"contributing-data",level:4}];function h(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"unique-ids",children:"Unique IDs"}),"\n",(0,s.jsxs)(t.p,{children:["Every Overture feature is assigned a unique ID of 32 characters and 128 bits. For most features types, the ID is intended to be ",(0,s.jsx)(t.a,{href:"stability",children:"stable"}),". This means an ID assigned to a ",(0,s.jsx)(t.code,{children:"building"})," feature, for example, won't change even if the building's properties change, including changes to its geometry."]}),"\n",(0,s.jsx)(t.p,{children:"Let's examine the IDs for two iconic buildings in Berlin."}),"\n",(0,s.jsx)(t.h4,{id:"reichstag-building",children:(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Reichstag_building",children:"Reichstag Building"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Overture release"}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.code,{children:"change_type"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"2024-07-22.0"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"08b1f1d488708fff0200bf6d40c1cf8f"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"data_changed"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"latest"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"08b1f1d488708fff0200bf6d40c1cf8f"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"data_changed"})})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"brandenburg-gate",children:(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Brandenburg_Gate",children:"Brandenburg Gate"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Overture release"}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.code,{children:"change_type"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"2024-07-22.0"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"08b1f1d488601fff02002aee6ba961a4"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"data_changed"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"latest"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"08b1f1d488601fff02002aee6ba961a4"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"data_changed"})})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The IDs are stable from the July 2024 ",(0,s.jsx)(t.a,{href:"/release/2024-07-22.0/",children:"GA release"})," to the ",(0,s.jsx)(t.a,{href:"/release",children:"latest release"}),", and will remain stable over subsequent releases. Stable IDs make it possible to query the ",(0,s.jsx)(t.a,{href:"changelog",children:"changelog"})," and detect changes to the feature data associated with those IDs. The type of change logged for the two buildings in Berlin is ",(0,s.jsx)(t.code,{children:"data_changed"}),", which usually indicates improvements to the data."]}),"\n",(0,s.jsx)(t.h2,{id:"understand-gers",children:"Understand GERS"}),"\n",(0,s.jsx)(t.p,{children:"Stable, unique feature IDs form the basis of Overture's Global Entity Reference System (GERS). GERS is a mechanism for structuring, encoding, and matching map data. Through GERS, you can:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"stability",children:"track the stability"})," of Overture features by GERS ID"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"gers-demonstrations",children:"match features"})," across an Overture dataset and a third-party dataset and assign GERS IDs to the matched features"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"gers-demonstrations",children:"associate third-party data"})," to Overture features by GERS ID"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"changelog",children:"detect changes"})," to Overture data from one release to another by querying across stable IDs in the GERS changelog"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"using-gers",children:"Using GERS"}),"\n",(0,s.jsx)(t.p,{children:"We envision the Overture community using GERS in two general ways:"}),"\n",(0,s.jsx)(t.h4,{id:"associating-data",children:"Associating data"}),"\n",(0,s.jsx)(t.p,{children:"You can independently associate your own data (or a third-party dataset) with Overture data. For example, you might want to link real-time traffic data to Overture road segments, insurance data to Overture buildings, or restaurant reviews to features in Overture's places dataset. When third-party data is matched to an Overture feature it picks up that feature's GERS ID and becomes \"GERS-enabled\" data, ready to be associated via ID to any other GERS-enabled dataset in the Overture ecosystem."}),"\n",(0,s.jsx)(t.h4,{id:"contributing-data",children:"Contributing data"}),"\n",(0,s.jsx)(t.p,{children:"You can contribute data to the Overture Maps Foundation, and our engineering team will match the features in your dataset to features in Overture. Matched features may be assigned an existing GERS ID, and we may generate new IDs for new features."}),"\n",(0,s.jsxs)(t.p,{children:["You'll find theme-specific examples of GERS use cases in the ",(0,s.jsx)(t.a,{href:"gers-demonstrations",children:"GERS demonstrations"})," section of this documentation."]})]})}function o(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},97577:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(21432),a=n(44586),r=n(74848);function i(e){const{siteConfig:{customFields:t}}=(0,a.A)();var n=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);n=(n=n.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",t.overtureRelease.split(".",1));var i=e.language||"sql";return(0,r.jsx)(s.default,{language:i,title:e.title,children:n})}}}]);