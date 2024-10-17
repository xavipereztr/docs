"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[8884],{92141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var s=r(74848),a=r(28453),n=r(11470),o=r(19365),i=r(97577);const d={title:"Fused (Python)"},l=void 0,u={id:"getting-data/fused",title:"Fused (Python)",description:"Fused is a cloud analytics platform to process data with User Defined Functions (UDFs). UDFs are reusable Python functions that can be invoked from anywhere. The Fused Overture UDF enables you to quickly load Overture data, perform operations like joins with other datasets, visualize results directly on your browser, and integrate smoothly with data tools.",source:"@site/docs/getting-data/fused.mdx",sourceDirName:"getting-data",slug:"/getting-data/fused",permalink:"/getting-data/fused",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729196639e3,frontMatter:{title:"Fused (Python)"},sidebar:"docs",previous:{title:"Python Command-line Tool",permalink:"/getting-data/overturemaps-py"},next:{title:"Athena (AWS)",permalink:"/getting-data/athena-aws"}},h={},c=[{value:"Load data with the Overture UDF",id:"load-data-with-the-overture-udf",level:2},{value:"Install Fused",id:"install-fused",level:3},{value:"Define the area of interest",id:"define-the-area-of-interest",level:3},{value:"Run the Overture UDF",id:"run-the-overture-udf",level:3},{value:"Next steps",id:"next-steps",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.fused.io/",children:"Fused"})," is a cloud analytics platform to process data with ",(0,s.jsx)(t.a,{href:"https://docs.fused.io/core-concepts/write/",children:"User Defined Functions"})," (UDFs). UDFs are reusable Python functions that can be invoked from anywhere. The Fused Overture UDF enables you to quickly load Overture data, perform operations like joins with other datasets, visualize results directly on your browser, and integrate smoothly with data tools."]}),"\n",(0,s.jsx)(t.h2,{id:"load-data-with-the-overture-udf",children:"Load data with the Overture UDF"}),"\n",(0,s.jsxs)(t.p,{children:["The Fused Overture UDF loads data from GeoParquet files of the Overture Dataset hosted by ",(0,s.jsx)(t.a,{href:"https://beta.source.coop/repositories/fused/overture/description/",children:"Source Cooperative"}),". You can view the source code of the Fused Overture UDF in this ",(0,s.jsx)(t.a,{href:"https://github.com/fusedio/udfs/blob/main/public/Overture_Maps_Example/Overture_Maps_Example.py",children:"GitHub repo"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"install-fused",children:"Install Fused"}),"\n",(0,s.jsxs)(t.p,{children:["We install the ",(0,s.jsx)(t.a,{href:"https://pypi.org/project/fused/",children:"Fused Python library"})," with pip."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"pip install fused>=1.10.0\n"})}),"\n",(0,s.jsx)(t.h3,{id:"define-the-area-of-interest",children:"Define the area of interest"}),"\n",(0,s.jsxs)(t.p,{children:["We specify the area for the UDF to download data by passing a ",(0,s.jsx)(t.code,{children:"GeoDataFrame"})," to the ",(0,s.jsx)(t.code,{children:"bbox"})," parameter."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import fused\nimport geopandas as gpd\nimport shapely\n\nbbox = gpd.GeoDataFrame(\n    geometry=[shapely.box(-73.9847, 40.7666, -73.9810, 40.7694)], \n    crs=4326\n)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"run-the-overture-udf",children:"Run the Overture UDF"}),"\n",(0,s.jsxs)(t.p,{children:["We may run the Fused Overture UDF with ",(0,s.jsx)(t.code,{children:"fused.run"})," (see more about ",(0,s.jsx)(t.code,{children:"fused.run"})," on the ",(0,s.jsx)(t.a,{href:"https://docs.fused.io/core-concepts/run/#fusedrun",children:"Fused docs"}),"). We specify the area to load data with the ",(0,s.jsx)(t.code,{children:"bbox"})," parameter. The UDF also provides optional parameters to select specific Overture releases, datasets, and columns - giving you flexibility to fetch only the data you need."]}),"\n",(0,s.jsxs)(n.default,{queryString:"fused-run",children:[(0,s.jsx)(o.default,{value:"buildings",label:"Buildings",children:(0,s.jsx)(i.A,{query:"fused.run('UDF_Overture_Maps_Example', bbox=bbox, overture_type='building') "})}),(0,s.jsx)(o.default,{value:"water",label:"Water",children:(0,s.jsx)(i.A,{query:"fused.run('UDF_Overture_Maps_Example', bbox=bbox, overture_type='water')"})}),(0,s.jsx)(o.default,{value:"divisions",label:"Divisions",children:(0,s.jsx)(i.A,{query:"fused.run('UDF_Overture_Maps_Example', bbox=bbox, overture_type='division_boundary')\nfused.run('UDF_Overture_Maps_Example', bbox=bbox, overture_type='division')\nfused.run('UDF_Overture_Maps_Example', bbox=bbox, overture_type='division_area')"})}),(0,s.jsx)(o.default,{value:"segments-connectors",label:"Segments & Connectors",children:(0,s.jsx)(i.A,{query:"fused.run('UDF_Overture_Maps_Example', bbox=bbox, overture_type='segment')\nfused.run('UDF_Overture_Maps_Example', bbox=bbox, overture_type='connector')"})}),(0,s.jsx)(o.default,{value:"landuse",label:"Land Use",children:(0,s.jsx)(i.A,{query:"fused.run('UDF_Overture_Maps_Example', bbox=bbox, overture_type='land_use')"})})]}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Visualize Overture datasets interactively in the ",(0,s.jsx)(t.a,{href:"https://www.fused.io/workbench/catalog/Overture_Maps_Example-64071fb8-2c96-4015-adb9-596c3bac6787",children:"Fused UDF Editor"})]}),"\n",(0,s.jsxs)(t.li,{children:["See an ",(0,s.jsx)(t.a,{href:"/examples/fused/",children:"example"})," of how to join Overture with other datasets"]}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},97577:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(21432),a=r(44586),n=r(74848);function o(e){const{siteConfig:{customFields:t}}=(0,a.A)();var r=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);r=(r=r.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",t.overtureRelease.split(".",1));var o=e.language||"sql";return(0,n.jsx)(s.default,{language:o,title:e.title,children:r})}}}]);