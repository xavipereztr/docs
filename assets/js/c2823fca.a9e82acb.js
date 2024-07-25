"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[1001],{70736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=a(74848),r=a(28453);a(97577);const i={title:"Global Entity Reference System (GERS)",slug:"/gers"},s=void 0,l={id:"gers/index",title:"Global Entity Reference System (GERS)",description:"Understanding GERS",source:"@site/docs/gers/index.mdx",sourceDirName:"gers",slug:"/gers",permalink:"/gers",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1721866215e3,frontMatter:{title:"Global Entity Reference System (GERS)",slug:"/gers"},sidebar:"docs",previous:{title:"Transportation",permalink:"/guides/transportation"},next:{title:"Stability by Feature Type",permalink:"/gers/stability"}},d={},o=[{value:"Understanding GERS",id:"understanding-gers",level:2},{value:"What does an Overture ID look like?",id:"what-does-an-overture-id-look-like",level:2},{value:"Stability and traceability",id:"stability-and-traceability",level:2},{value:"Using GERS",id:"using-gers",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"understanding-gers",children:"Understanding GERS"}),"\n",(0,n.jsxs)(t.p,{children:["The Global Entity Reference System (GERS) is a framework for structuring, encoding, and matching map data to a shared universal reference. All features in Overture have a unique ID, and for some feature types those unique IDs, called Overture IDs or GERS IDs, are registered to GERS and are intended to be ",(0,n.jsx)(t.a,{href:"stability",children:"stable"}),". GERS provides a mechanism to match features across datasets, track data stability, and detect errors in the data."]}),"\n",(0,n.jsx)(t.h2,{id:"what-does-an-overture-id-look-like",children:"What does an Overture ID look like?"}),"\n",(0,n.jsxs)(t.p,{children:["Unique IDs in Overture are 128 bits and 32 characters. Below you can inspect the unique IDs for five building features in Overture's latest release. The property appears as ",(0,n.jsx)(t.code,{children:"id"})," in the schema."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"D SELECT id FROM read_parquet('s3://overturemaps-us-west-2/release/2024-07-22.0/theme=buildings/type=building/*', filename=true, hive_partitioning=1) limit 5;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                id                \u2502\n\u2502             varchar              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 08bf2a40219b0fff0200c394dae731bd \u2502\n\u2502 08bf35ad6a05afff0200e90ab3b011fa \u2502\n\u2502 08bf35ad6a058fff020009945ce09d65 \u2502\n\u2502 08bf35ad6a04efff02006264a736fc56 \u2502\n\u2502 08bf35ad6a04afff0200cf5e511a3f1b \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502             5 rows               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,n.jsx)(t.h2,{id:"stability-and-traceability",children:"Stability and traceability"}),"\n",(0,n.jsxs)(t.p,{children:["Unique IDs registered to GERS are intended to be ",(0,n.jsx)(t.a,{href:"stability",children:"stable"})," \u2014 within a reasonable tolerance of error \u2014 across multiple Overture releases. When stability is not possible, we will attempt to provide traceability in a ",(0,n.jsx)(t.a,{href:"changelog",children:"GERS changelog"}),". For example:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"a single road segment is bisected by a new road and becomes two road segments: 1 unique ID \u2192 2 new unique IDs;"}),"\n",(0,n.jsx)(t.li,{children:"a large building footprint is determined to be four smaller buildings when a higher resolution dataset becomes available: 1 unique ID \u2192 4 new unique ID;"}),"\n",(0,n.jsx)(t.li,{children:"a building is shifted 10 meters to the west when higher resolution imagery is made available: the unique ID is preserved for that feature."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"using-gers",children:"Using GERS"}),"\n",(0,n.jsx)(t.p,{children:"Here are two general mechanisms for using GERS:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Associating data."})," You can independently associate your own data or third-party data to Overture data. If features in your dataset match features in an Overture dataset, you can assign existing Overture IDs to the matched features. Your data is now GERS-enabled data, ready to be associated via Overture ID to any other GERS-enabled dataset in the Overture ecosystem."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contributing data."})," If an organization contributes data to the Overture Maps Foundation, our engineering team will match the features in that dataset to features in Overture. Matched features may be assigned an existing Overture ID, and we may generate new Overture IDs for new features."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You'll find theme-specific examples in the ",(0,n.jsx)(t.a,{href:"gers-demonstrations",children:"GERS demonstrations"})," section of this documentation."]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},97577:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(21432),r=a(44586),i=a(74848);function s(e){const{siteConfig:{customFields:t}}=(0,r.A)();var a=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);a=a.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"));var s=e.language||"sql";return(0,i.jsx)(n.default,{language:s,title:e.title,children:a})}}}]);