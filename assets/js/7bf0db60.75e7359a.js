"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[5578],{66948:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var s=t(74848),n=t(28453),r=t(97577);const l="SELECT *\nFROM overture.release.__ATHENA_OVERTURE_RELEASE\nLIMIT 10\n",o="SELECT id,\n       names,\n       addresses,\n       categories,\n       confidence,\n       sources,\n       ST_GeomFromBinary(geometry) AS geometry\nFROM\n    overture.release.__ATHENA_OVERTURE_RELEASE\nWHERE theme='places'\n    AND type='place'\n    AND bbox.xmin > -122.44\n        AND bbox.xmax < -122.25\n        AND bbox.ymin > 47.56\n        AND bbox.ymax < 47.71\n",c={title:"Athena (AWS)"},i=void 0,d={id:"getting-data/athena-aws",title:"Athena (AWS)",description:"You can follow the steps belows to access and query Overture data directly in AWS. Note: you will need to create an account to use Athena and other AWS services.",source:"@site/docs/getting-data/athena-aws.mdx",sourceDirName:"getting-data",slug:"/getting-data/athena-aws",permalink:"/getting-data/athena-aws",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1724188826e3,frontMatter:{title:"Athena (AWS)"},sidebar:"docs",previous:{title:"Python Command-line Tool",permalink:"/getting-data/overturemaps-py"},next:{title:"Synapse (Azure)",permalink:"/getting-data/synapse-azure"}},u={},h=[{value:"1. Add Overture as a data source",id:"1-add-overture-as-a-data-source",level:2},{value:"2. Inspect release tables",id:"2-inspect-release-tables",level:2},{value:"3. Access data from a release table",id:"3-access-data-from-a-release-table",level:2}];function p(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Details:c}=a;return c||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["You can follow the steps belows to access and query Overture data directly in AWS. Note: you will need to create an account to use ",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/athena/",children:"Athena"})," and other AWS services."]}),"\n",(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsxs)(a.p,{children:["Overture's S3 bucket is located in the us-west-2 AWS region, so you will need to set your region to ",(0,s.jsx)(a.code,{children:"us-west-2"}),"."]})}),"\n",(0,s.jsx)(a.h2,{id:"1-add-overture-as-a-data-source",children:"1. Add Overture as a data source"}),"\n",(0,s.jsxs)(a.p,{children:["Add Overture as a cross-account data source using ",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/data-sources-glue-cross-account.html",children:"these instructions"}),". The Catalog ID is ",(0,s.jsx)(a.code,{children:"913550007193"}),"."]}),"\n",(0,s.jsxs)(c,{children:[(0,s.jsx)("summary",{children:"AWS Glue Data Catalog"}),(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"AWS Glue Catalog",src:t(67144).A+"",width:"1936",height:"1454"})})})]}),"\n",(0,s.jsxs)(a.p,{children:["Depending on the permissions attached to your AWS user account/role, you may need to explicitly enable access to the Overture catalog. You can do that by ",(0,s.jsx)(a.a,{href:"https://console.aws.amazon.com/iam/home?#/policies?type=customer",children:"adding a new IAM policy"})," \u2014 we suggest calling it ",(0,s.jsx)(a.code,{children:"OvertureGlueCatalogAccess"})," \u2014 with the following permissions:"]}),"\n",(0,s.jsxs)(c,{children:[(0,s.jsx)("summary",{children:"IAM policy for Overture Glue Data Catalog access"}),(0,s.jsx)("div",{children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "glue:GetTable*",\n        "glue:GetDatabase*",\n        "glue:GetPartition*"\n      ],\n      "Resource": [\n        "arn:aws:glue:us-west-2:913550007193:catalog",\n        "arn:aws:glue:us-west-2:913550007193:database/release",\n        "arn:aws:glue:us-west-2:913550007193:table/*"\n      ]\n    }\n  ]\n}\n'})})})]}),"\n",(0,s.jsx)(a.h2,{id:"2-inspect-release-tables",children:"2. Inspect release tables"}),"\n",(0,s.jsxs)(a.p,{children:["Now each release is available as a table under the ",(0,s.jsx)(a.code,{children:"release"})," database in the ",(0,s.jsx)(a.code,{children:"overture"})," data source (note the ",(0,s.jsx)(a.code,{children:"v"})," at the beginning of the table name). The ",(0,s.jsx)(a.code,{children:"overture"})," data catalog will be updated with a new table for each new release."]}),"\n",(0,s.jsxs)(c,{children:[(0,s.jsx)("summary",{children:"Overture Maps release tables"}),(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Release Tables",src:t(2519).A+"",width:"432",height:"990"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"3-access-data-from-a-release-table",children:"3. Access data from a release table"}),"\n",(0,s.jsx)(a.p,{children:"You can access Overture data in a particular release like this:"}),"\n",(0,s.jsx)(r.A,{query:l}),"\n",(0,s.jsx)(a.p,{children:"Here's an example query to get ~25k places in Seattle:"}),"\n",(0,s.jsx)(r.A,{query:o}),"\n",(0,s.jsxs)(a.p,{children:["More information on using Athena is available in the ",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/what-is.html",children:"Amazon Athena User Guide"}),"."]})]})}function g(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},97577:(e,a,t)=>{t.d(a,{A:()=>l});var s=t(21432),n=t(44586),r=t(74848);function l(e){const{siteConfig:{customFields:a}}=(0,n.A)();var t=e.query.replace("__OVERTURE_RELEASE",a.overtureRelease);t=(t=t.replace("__ATHENA_OVERTURE_RELEASE","v"+a.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",a.overtureRelease.split(".",1));var l=e.language||"sql";return(0,r.jsx)(s.default,{language:l,title:e.title,children:t})}},67144:(e,a,t)=>{t.d(a,{A:()=>s});const s=t.p+"assets/images/aws-glue-data-catalog-values-56499d44a76f8a08a4ccd2037b1bab47.png"},2519:(e,a,t)=>{t.d(a,{A:()=>s});const s=t.p+"assets/images/overture-release-tables-c49628e54a42157c4c1bf259eaf0daf4.png"}}]);