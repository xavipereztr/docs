"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[8900],{7274:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var i=a(74848),s=a(28453),r=(a(21432),a(11470),a(19365),a(97577));const l={description:"inspect Overture geometries in Rapid",title:"Overture + Rapid"},n=void 0,d={id:"examples/rapid-id",title:"Overture + Rapid",description:"inspect Overture geometries in Rapid",source:"@site/docs/examples/rapid-id.mdx",sourceDirName:"examples",slug:"/examples/rapid-id",permalink:"/examples/rapid-id",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:173160342e4,frontMatter:{description:"inspect Overture geometries in Rapid",title:"Overture + Rapid"},sidebar:"docs",previous:{title:"Overture + Kepler.gl",permalink:"/examples/kepler-gl"},next:{title:"Overture + PMTiles",permalink:"/examples/overture-tiles"}},p={},o=[{value:"Places",id:"places",level:2},{value:"Buildings",id:"buildings",level:2}];function c(e){const t={a:"a",h2:"h2",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"places",children:"Places"}),"\n",(0,i.jsx)(t.p,{children:"In this example, we will load Overture Places data into Rapid so that we can visualize and inspect the geometries and their properties."}),"\n",(0,i.jsxs)(t.p,{children:["To open Rapid v2, navigate to ",(0,i.jsx)(t.a,{href:"https://rapideditor.org/edit",children:"https://rapideditor.org/edit"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Zoom in using the + or - hotkeys, the mouse scroll wheel, etc. to an area where you want to see Overture Places data."}),"\n",(0,i.jsx)(t.p,{children:"Click the 'Map Data' sidebar button or hit the 'F' hotkey. Then, click the three dots icon next to 'Custom Data'."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Map Data Panel in Rapid",src:a(90368).A+"",width:"402",height:"626"})}),"\n",(0,i.jsx)(t.p,{children:"You will see the Custom Data dialog. Paste this URL:"}),"\n",(0,i.jsx)(r.A,{query:"https://overturemaps-tiles-us-west-2-beta.s3.amazonaws.com/__PMTILES_OVERTURE_RELEASE/places.pmtiles",language:"text"}),"\n",(0,i.jsx)(t.p,{children:"into the text input and hit 'OK'."}),"\n",(0,i.jsx)(t.p,{children:"Wait a few moments, and you should see some places data start to show up on the map. These places are clickable and inspectable:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Rapid with Places Data Overlay",src:a(85710).A+"",width:"1106",height:"815"})}),"\n",(0,i.jsx)(t.p,{children:"Alternatively, Rapid can load the data automatically if the URL is formatted like this."}),"\n",(0,i.jsx)(r.A,{query:"https://rapideditor.org/edit#data=https://overturemaps-tiles-us-west-2-beta.s3.amazonaws.com/__PMTILES_OVERTURE_RELEASE/places.pmtiles",language:"text"}),"\n",(0,i.jsx)(t.h2,{id:"buildings",children:"Buildings"}),"\n",(0,i.jsx)(t.p,{children:"Rapid can also load polygon or line features in addition to point features."}),"\n",(0,i.jsx)(r.A,{query:"https://rapideditor.org/edit#data=https://overturemaps-tiles-us-west-2-beta.s3.amazonaws.com/__PMTILES_OVERTURE_RELEASE/buildings.pmtiles",language:"text"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Rapid with Buildings Data Overlay",src:a(50471).A+"",width:"1100",height:"620"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},97577:(e,t,a)=>{a.d(t,{A:()=>l});var i=a(21432),s=a(44586),r=a(74848);function l(e){const{siteConfig:{customFields:t}}=(0,s.A)();var a=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);a=(a=a.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",t.overtureRelease.split(".",1));var l=e.language||"sql";return(0,r.jsx)(i.default,{language:l,title:e.title,children:a})}},50471:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/rapid-buildings-data-0e3e16637430ad9475b818aa3c5fb7bd.png"},85710:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/rapid-places-data-e2b08eb680769aa3179eda6e2c84406c.png"},90368:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/visualizing-places-d2be54f0ece40561899d10c3bd23b8b0.png"}}]);