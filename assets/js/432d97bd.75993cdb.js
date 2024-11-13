"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[64],{49376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(74848),s=a(28453),o=a(97577);const n={title:"Getting Overture Data"},i=void 0,l={id:"getting-data/index",title:"Getting Overture Data",description:"Overture's six data themes &mdash; addresses, base, buildings, divisions, places, and transportation &mdash; are freely available on both Amazon S3 and Microsoft Azure Blob Storage at these locations:",source:"@site/docs/getting-data/index.mdx",sourceDirName:"getting-data",slug:"/getting-data/",permalink:"/getting-data/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:173153178e4,frontMatter:{title:"Getting Overture Data"},sidebar:"docs",previous:{title:"Introduction",permalink:"/"},next:{title:"DuckDB",permalink:"/getting-data/duckdb"}},d={},c=[{value:"GeoParquet",id:"geoparquet",level:2},{value:"Getting a small to medium amount of data (recommended)",id:"getting-a-small-to-medium-amount-of-data-recommended",level:2},{value:"What if I want ALL the data?",id:"what-if-i-want-all-the-data",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Overture's six data themes \u2014 ",(0,r.jsx)(t.a,{href:"/guides/addresses",children:"addresses"}),", ",(0,r.jsx)(t.a,{href:"/guides/base",children:"base"}),", ",(0,r.jsx)(t.a,{href:"/guides/buildings",children:"buildings"}),", ",(0,r.jsx)(t.a,{href:"/guides/divisions",children:"divisions"}),", ",(0,r.jsx)(t.a,{href:"/guides/places",children:"places"}),", and ",(0,r.jsx)(t.a,{href:"/guides/transportation",children:"transportation"})," \u2014 are freely available on both Amazon S3 and Microsoft Azure Blob Storage at these locations:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Provider"}),(0,r.jsx)(t.th,{children:"Location"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Amazon S3"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"s3://overturemaps-us-west-2/release/ <RELEASE>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Azure Blob Storage"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"https://overturemapswestus2.blob.core.windows.net/release/ <RELEASE>"})})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["We release data monthly. The latest ",(0,r.jsx)(t.code,{children:"<RELEASE>"})," is:"]}),"\n",(0,r.jsx)(o.A,{query:"__OVERTURE_RELEASE/",language:"text"}),"\n",(0,r.jsx)(t.h2,{id:"geoparquet",children:"GeoParquet"}),"\n",(0,r.jsxs)(t.p,{children:["Overture distributes its datasets as ",(0,r.jsx)(t.a,{href:"https://geoparquet.org/",children:"GeoParquet"}),", a column-oriented spatial data format that is a backwards-compatible extension of ",(0,r.jsx)(t.a,{href:"https://parquet.apache.org/",children:"Apache Parquet"}),'. Parquet (and GeoParquet) is optimized for "cloud-native" queries, which means you can use many developer-friendly tools to efficiently fetch column "chunks" of cloud-hosted data. We encourage users who are new to GeoParquet to consult ',(0,r.jsx)(t.a,{href:"https://guide.cloudnativegeo.org/geoparquet/",children:"this guide"}),". Our ",(0,r.jsx)(t.a,{href:"/guides",children:"data guides"})," include the GeoParquet column descriptions for each feature type."]}),"\n",(0,r.jsx)(t.h2,{id:"getting-a-small-to-medium-amount-of-data-recommended",children:"Getting a small to medium amount of data (recommended)"}),"\n",(0,r.jsxs)(t.p,{children:["If you're new to Overture data, we ",(0,r.jsx)(t.em,{children:"strongly recommend"})," starting with small to medium amounts of data. You can access the data using the services available in AWS and Azure, where the data are stored, or by using a locally-installed query engine like ",(0,r.jsx)(t.a,{href:"https://duckdb.org/",children:"DuckDB"}),". This allows you to download only the subset of data you want. You can also try Overture's experimental Python command-line tool to download data by feature type and area of interest. Or you can visually inspect all of Overture's data themes using our ",(0,r.jsx)(t.a,{href:"https://explore.overturemaps.org/",children:"Explore tool"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"duckdb",children:"DuckDB"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"overturemaps-py",children:"Overture's Python command-line tool"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://explore.overturemaps.org/",children:"Overture's Explore tool"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"athena-aws",children:"Amazon Athena"})," (account required)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"synapse-azure",children:"Microsoft Synapse"})," (account required)"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"what-if-i-want-all-the-data",children:"What if I want ALL the data?"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Are you sure? Each Overture GeoParquet file is ~1 GB and the total size of all the GeoParquet files is ",(0,r.jsx)(t.strong,{children:">600 GB"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"It is possible to download the GeoParquet files directly from either Azure Blob Storage or Amazon S3. Here's how you can do it:"}),"\n",(0,r.jsxs)(t.p,{children:["After installing the ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"AWS CLI"}),", you can download the files from S3 using the below command. Set ",(0,r.jsx)(t.code,{children:"<DESTINATION>"})," to a local directory path to download the files, or to an ",(0,r.jsx)(t.code,{children:"s3://"})," path you control to copy them into your S3 bucket."]}),"\n",(0,r.jsx)(o.A,{query:"aws s3 cp --region us-west-2 --no-sign-request --recursive s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/ <DESTINATION>",language:"text"}),"\n",(0,r.jsxs)(t.p,{children:["You can download the files from Azure Blob Storage using ",(0,r.jsx)(t.a,{href:"https://azure.microsoft.com/en-us/products/storage/storage-explorer/",children:"Azure Storage Explorer"})," or the ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&bc=%2Fazure%2Fstorage%2Fblobs%2Fbreadcrumb%2Ftoc.json#download-azcopy",children:"AzCopy"})," command. An example ",(0,r.jsx)(t.code,{children:"azcopy"})," command is given below."]}),"\n",(0,r.jsx)(o.A,{query:'azcopy copy "https://overturemapswestus2.dfs.core.windows.net/release/__OVERTURE_RELEASE/" "<<local directory path>>"  --recursive',language:"text"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},97577:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(21432),s=a(44586),o=a(74848);function n(e){const{siteConfig:{customFields:t}}=(0,s.A)();var a=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);a=(a=a.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",t.overtureRelease.split(".",1));var n=e.language||"sql";return(0,o.jsx)(r.default,{language:n,title:e.title,children:a})}}}]);