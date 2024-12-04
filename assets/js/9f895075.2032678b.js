"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[2580],{61353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(74848),r=n(28453),s=n(97577);const i="LOAD spatial; -- noqa\nLOAD httpfs;  -- noqa\nSET s3_region='us-west-2';\n\nSELECT id, type, change_type\nFROM read_parquet('s3://overturemaps-us-west-2/changelog/2024-06-13-beta.0/theme=buildings/type=*/change_type=*/*', filename=true, hive_partitioning=1)\nWHERE\n        bbox.xmin > 37.165914\n        AND bbox.xmax < 37.902271\n        AND bbox.ymin > 10.221917\n        AND bbox.ymax < 10.751245;\n",h="LOAD spatial; -- noqa\nLOAD httpfs;  -- noqa\nSET s3_region='us-west-2';\n\nSELECT count(*), change_type\nFROM read_parquet('s3://overturemaps-us-west-2/changelog/2024-06-13-beta.0/theme=buildings/type=*/change_type=*/*', filename=true, hive_partitioning=1)\nWHERE\n        bbox.xmin > 37.165914\n        AND bbox.xmax < 37.902271\n        AND bbox.ymin > 10.221917\n        AND bbox.ymax < 10.751245\nGROUP BY change_type;\n",o="SELECT\n    release.id,\n    release.names.\"primary\" AS primary_name,\n    release.sources [ 1 ].dataset AS primary_source,\n    change_type,\n    ST_GEOMFROMBINARY(geometry) AS geometry\nFROM v2024_08_20_0 AS release\n    INNER JOIN changelog_v2024_07_22_0 AS changelog ON release.id = changelog.id\nWHERE release.theme = 'buildings'\n    AND release.bbox.xmin > 37.165914\n    AND release.bbox.xmax < 37.902271\n    AND release.bbox.ymin > 10.221917\n    AND release.bbox.ymax < 10.751245;\n",l={title:"GERS Changelog"},c=void 0,d={id:"gers/changelog",title:"GERS Changelog",description:"With each data release, Overture generates a GERS changelog to capture changes in the data tied to the unique ID for each feature. This information can be used to guide decisions about data matching, better understand data stability, and help detect data errors.",source:"@site/docs/gers/changelog.mdx",sourceDirName:"gers",slug:"/gers/changelog",permalink:"/gers/changelog",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1733330113e3,frontMatter:{title:"GERS Changelog"},sidebar:"docs",previous:{title:"Global Entity Reference System (GERS)",permalink:"/gers"},next:{title:"GERS Demonstrations",permalink:"/gers/gers-demonstrations"}},g={},u=[{value:"Types of changes",id:"types-of-changes",level:2},{value:"Querying the GERS changelog",id:"querying-the-gers-changelog",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["With each data release, Overture generates a ",(0,a.jsx)(t.a,{href:"../",children:"GERS"})," changelog to capture changes in the data tied to the unique ID for each feature. This information can be used to guide decisions about data matching, better understand data stability, and help detect data errors."]}),"\n",(0,a.jsx)(t.p,{children:"The GERS changelog is available as Parquet files \u2014 partitioned by theme, type, and change type \u2014 at the following locations:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Provider"}),(0,a.jsx)(t.th,{children:"Location"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Amazon S3"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"s3://overturemaps-us-west-2/changelog/"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Microsoft Azure"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"wasbs://changelog@overturemapswestus2.blob.core.windows.net/"})})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"The latest path is:"}),"\n",(0,a.jsx)(s.A,{query:"__OVERTURE_RELEASE/",language:"text"}),"\n",(0,a.jsx)(t.h2,{id:"types-of-changes",children:"Types of changes"}),"\n",(0,a.jsx)(t.p,{children:"The types of changes in the changelog include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"added"}),": the feature with this ID is new in the current release and was not present in the previous release"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"removed"}),": the feature with this ID is not present in the current release but was present in the previous release"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"data_changed"}),": the feature with this ID in the current release contains a change in geometry or properties from the feature with this ID that was in the previous release"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"unchanged"}),": the feature with this ID in the current release matches the geometry and properties of the feature with this ID that was in the previous release"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"querying-the-gers-changelog",children:"Querying the GERS changelog"}),"\n",(0,a.jsxs)(t.p,{children:["We can query the changelog with DuckDB to get a quick look at changes in data from the last release to the current release. In this example, we're grabbing ID, feature type, and change type for buildings in several towns across the ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Amhara_Region",children:"Amhara Region"})," in Ethiopia."]}),"\n",(0,a.jsx)(s.A,{query:i}),"\n",(0,a.jsx)(t.p,{children:"We can also get a count of building features by change type for our area of interest."}),"\n",(0,a.jsx)(s.A,{query:h}),"\n",(0,a.jsx)(t.p,{children:"Taking this one step further, this time using Athena to run our query, we can join the changelog and data via Overture ID to connect the change type and feature geometries and properties."}),"\n",(0,a.jsx)(s.A,{query:o}),"\n",(0,a.jsxs)(t.p,{children:["Finally we can use the results of our query to visualize building features by change type and inspect the properties for each feature. The example below, created using ",(0,a.jsx)(t.a,{href:"https://kepler.gl/",children:"kepler.gl"}),", shows buildings in ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Finote_Selam",children:"Finote Selam"}),", a city in the Amhara Region of Ethiopia. The data is from Overture's ",(0,a.jsx)(t.code,{children:"2024-06-13-beta.0"})," release, to which we added 100 million new buildings, many of them derived from satellite imagery by Microsoft."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Buildings By Change Type",src:n(21614).A+"",width:"2280",height:"1668"})})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},97577:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(21432),r=n(44586),s=n(74848);function i(e){const{siteConfig:{customFields:t}}=(0,r.A)();var n=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);n=(n=n.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",t.overtureRelease.split(".",1));var i=e.language||"sql";return(0,s.jsx)(a.default,{language:i,title:e.title,children:n})}},21614:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/buildings-change-type-amhara-region-1677aff88b0bdbaa62445a8ce3ebb249.png"}}]);