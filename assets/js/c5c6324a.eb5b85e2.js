"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[314],{27710:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=t(74848),o=t(28453),r=t(11470),s=t(19365),i=t(97577);const l={title:"Sedona / Spark"},d=void 0,c={id:"getting-data/sedona",title:"Sedona / Spark",description:"As a series of GeoParquet files, Overture data is already optimized for distributed computing environments. The following example shows you how to work with Overture data in Sedona, a cluster computing system for spatial data.",source:"@site/docs/getting-data/sedona.mdx",sourceDirName:"getting-data",slug:"/getting-data/sedona",permalink:"/getting-data/sedona",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:173153178e4,frontMatter:{title:"Sedona / Spark"},sidebar:"docs",previous:{title:"Synapse (Azure)",permalink:"/getting-data/synapse-azure"},next:{title:"Examples",permalink:"/examples/"}},p={},u=[{value:"Example",id:"example",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["As a series of GeoParquet files, Overture data is already optimized for distributed computing environments. The following example shows you how to work with Overture data in ",(0,n.jsx)(a.a,{href:"https://sedona.apache.org/",children:"Sedona"}),", a cluster computing system for spatial data."]}),"\n",(0,n.jsxs)(a.p,{children:["For this example, you can spin up a single-node Sedona Docker image from ",(0,n.jsx)(a.a,{href:"https://hub.docker.com/r/apache/sedona",children:"Apache Software Foundation DockerHub"}),". In production, Sedona can be deployed to nearly any cloud environment (Databricks, AWS EMR, etc.), or check out ",(0,n.jsx)(a.a,{href:"https://www.wherobots.com",children:"Wherobots"})," to learn more about hosted  Sedona environments."]}),"\n",(0,n.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(a.p,{children:["To get started with the single-node docker image, ensure your ",(0,n.jsx)(a.a,{href:"https://www.docker.com/",children:"docker"})," client is started, and then run:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"docker pull apache/sedona\ndocker run -p 8888:8888 apache/sedona:latest\n"})}),"\n",(0,n.jsxs)(a.p,{children:["A Jupyter Lab and notebook examples is now available in your browser at ",(0,n.jsx)(a.a,{href:"http://localhost:8888/",children:"http://localhost:8888"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Create a new Python notebook with the following first cell:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'from sedona.spark import *\n\nconfig = SedonaContext.builder().config(\n    "fs.s3a.aws.credentials.provider",\n    "org.apache.hadoop.fs.s3a.AnonymousAWSCredentialsProvider"\n    ).getOrCreate()\nsedona = SedonaContext.create(config)\n'})}),"\n",(0,n.jsx)(a.p,{children:"After initializing your PySpark/Sedona environment, you can load theme data directly from S3. The following examples leverage Sedona's understanding of GeoParquet, so we can take full advantage of spatial queries:"}),"\n",(0,n.jsxs)(r.default,{queryString:"theme",children:[(0,n.jsxs)(s.default,{value:"places",label:"Places",children:[(0,n.jsx)(i.A,{query:'places = sedona.read.format("geoparquet").load(\n    "s3a://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=places/type=place/")',lang:"python"}),(0,n.jsx)(a.p,{children:"For example, to find all of the places in Seattle, you can apply a spatial filter with the bounding box for Seattle:"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'places.filter("""ST_Contains(\n    ST_GeomFromWKT(\'POLYGON((-122.459681 47.734124, -122.224433 47.734124, -122.224433 47.481002, -122.459681 47.481002, -122.459681 47.734124))\'),\n    geometry)""").limit(100).show()\n'})}),(0,n.jsx)(a.p,{children:"Or, find all of the places within 1km of the Space Needle with the following query:"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'places.filter("""ST_DistanceSpheroid(\n    ST_GeomFromWKT(\'POINT(-122.3493 47.6204)\'),\n    geometry) < 1000\n""")\n'})})]}),(0,n.jsx)(s.default,{value:"buildings",label:"Buildings",children:(0,n.jsx)(i.A,{query:'buildings = sedona.read.format("geoparquet").load(\n    "s3a://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=buildings/type=building/")',lang:"python"})}),(0,n.jsx)(s.default,{value:"divisions",label:"Divisions",children:(0,n.jsx)(i.A,{query:'divisions = sedona.read.format("geoparquet").load(\n    "s3a://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=divisions/type=division_area/")',lang:"python"})}),(0,n.jsx)(s.default,{value:"transportation",label:"Transportation",children:(0,n.jsx)(i.A,{query:'roads = sedona.read.format("geoparquet").load(\n    "s3a://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=transportation/type=segment/")',lang:"python"})})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsx)(a.p,{children:"These are just examples to show you how to interface with Overture data in Sedona. Running locally on a single-node docker image doesn't offer any performance benefits, but when deployed in a distributed cloud environment, you can operate on the entire Overture dataset."})}),"\n",(0,n.jsxs)(a.p,{children:["For more examples from wherobots, check out their Overture-related ",(0,n.jsx)(a.a,{href:"https://github.com/wherobots/OvertureMaps",children:"Notebook examples"}),"."]})]})}function m(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},97577:(e,a,t)=>{t.d(a,{A:()=>s});var n=t(21432),o=t(44586),r=t(74848);function s(e){const{siteConfig:{customFields:a}}=(0,o.A)();var t=e.query.replace("__OVERTURE_RELEASE",a.overtureRelease);t=(t=t.replace("__ATHENA_OVERTURE_RELEASE","v"+a.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",a.overtureRelease.split(".",1));var s=e.language||"sql";return(0,r.jsx)(n.default,{language:s,title:e.title,children:t})}}}]);