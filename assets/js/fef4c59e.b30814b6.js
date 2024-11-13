"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[9888],{8252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(74848),s=n(28453),r=n(97577);const o="SELECT TOP 10 *\nFROM\n    OPENROWSET(\n        BULK 'https://overturemapswestus2.blob.core.windows.net/release/__OVERTURE_RELEASE/theme=places/type=place/',\n        FORMAT = 'PARQUET'\n    )\nWITH\n    (\n        names VARCHAR(MAX),\n        categories VARCHAR(MAX),\n        websites VARCHAR(MAX),\n        phones VARCHAR(MAX),\n        bbox VARCHAR(200),\n        geometry VARBINARY(MAX)\n    )\n    AS\n        [result]\nWHERE\n        TRY_CONVERT(FLOAT, JSON_VALUE(bbox, '$.xmin')) > -122.4447744\n    AND TRY_CONVERT(FLOAT, JSON_VALUE(bbox, '$.xmax')) < -122.2477071\n    AND TRY_CONVERT(FLOAT, JSON_VALUE(bbox, '$.ymin')) > 47.5621587\n    AND TRY_CONVERT(FLOAT, JSON_VALUE(bbox, '$.ymax')) < 47.7120663\n",i={title:"Synapse (Azure)"},l=void 0,c={id:"getting-data/synapse-azure",title:"Synapse (Azure)",description:"You will need to create an account to use Synapse and other Microsoft Azure services.",source:"@site/docs/getting-data/synapse-azure.mdx",sourceDirName:"getting-data",slug:"/getting-data/synapse-azure",permalink:"/getting-data/synapse-azure",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:173153178e4,frontMatter:{title:"Synapse (Azure)"},sidebar:"docs",previous:{title:"Athena (AWS)",permalink:"/getting-data/athena-aws"},next:{title:"Sedona / Spark",permalink:"/getting-data/sedona"}},u={},p=[];function A(e){const t={a:"a",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["You will need to create an account to use ",(0,a.jsx)(t.a,{href:"https://azure.microsoft.com/en-us/products/synapse-analytics/",children:"Synapse"})," and other Microsoft Azure services."]}),"\n",(0,a.jsxs)(t.p,{children:["In your Azure account, create a ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/synapse-analytics/get-started-create-workspace",children:"Synapse workspace"}),". You can then run this example query to get places in Seattle:"]}),"\n",(0,a.jsx)(r.A,{query:o}),"\n",(0,a.jsxs)(t.p,{children:["More information is available at ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/training/modules/query-data-lake-using-azure-synapse-serverless-sql-pools/3-query-files",children:'"Query files using a serverless SQL pool"'})," on Microsoft Learn."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(A,{...e})}):A(e)}},97577:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(21432),s=n(44586),r=n(74848);function o(e){const{siteConfig:{customFields:t}}=(0,s.A)();var n=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);n=(n=n.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",t.overtureRelease.split(".",1));var o=e.language||"sql";return(0,r.jsx)(a.default,{language:o,title:e.title,children:n})}}}]);