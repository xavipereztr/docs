"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[314],{27710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=a(74848),n=a(28453);a(11470),a(19365),a(97577);const o={title:"Sedona"},s=void 0,l={id:"getting-data/sedona",title:"Sedona",description:"Python + Spatial SQL",source:"@site/docs/getting-data/sedona.mdx",sourceDirName:"getting-data",slug:"/getting-data/sedona",permalink:"/getting-data/sedona",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1724188826e3,frontMatter:{title:"Sedona"},sidebar:"docs",previous:{title:"Synapse (Azure)",permalink:"/getting-data/synapse-azure"},next:{title:"Examples",permalink:"/examples/"}},u={},i=[{value:"Python + Spatial SQL",id:"python--spatial-sql",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"python--spatial-sql",children:"Python + Spatial SQL"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://sedona.apache.org/",children:"Sedona"})," is a cluster computing system for spatial data. You can get a single-node Sedona Docker image from ",(0,r.jsx)(t.a,{href:"https://hub.docker.com/r/apache/sedona",children:"Apache Software Foundation DockerHub"})," or install Sedona to Databricks, AWS EMR and Snowflake using ",(0,r.jsx)(t.a,{href:"https://www.wherobots.ai/demo",children:"Wherobots"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"To get started with the single-node docker image, run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker pull apache/sedona\ndocker run -p 8888:8888 apache/sedona:latest\n"})}),"\n",(0,r.jsxs)(t.p,{children:["A Jupyter Lab and notebook examples will then be available at ",(0,r.jsx)(t.a,{href:"http://localhost:8888/",children:"localhost:8888"}),". The following Python + Spatial SQL code reads the Places dataset and runs a spatial filter query on it."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from sedona.spark import *\n\nconfig = SedonaContext.builder().config("fs.s3a.aws.credentials.provider", "org.apache.hadoop.fs.s3a.AnonymousAWSCredentialsProvider").getOrCreate()\nsedona = SedonaContext.create(config)\n\ndf = sedona.read.format("geoparquet").load("s3a://overturemaps-us-west-2/release/2024-03-12-alpha.0/theme=places/type=place")\ndf.filter("ST_Contains(ST_GeomFromWKT(\'POLYGON((-122.48 47.43,-122.20 47.75,-121.92 47.37,-122.48 47.43))\'), geometry) = true").show()\n'})}),"\n",(0,r.jsxs)(t.p,{children:["For more examples from wherobots, check out their Overture-related ",(0,r.jsx)(t.a,{href:"https://github.com/wherobots/OvertureMaps",children:"Notebook examples"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});a(96540);var r=a(18215);const n={tabItem:"tabItem_Ymn6"};var o=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,s),hidden:a,children:t})}},11470:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var r=a(96540),n=a(18215),o=a(23104),s=a(56347),l=a(205),u=a(57485),i=a(31682),c=a(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,d]=f({queryString:a,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=i??m;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&u(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function x(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=l[a].value;n!==r&&(i(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...o,className:(0,n.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function S(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(S,{...e,children:d(e.children)},String(t))}},97577:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(21432),n=a(44586),o=a(74848);function s(e){const{siteConfig:{customFields:t}}=(0,n.A)();var a=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);a=(a=a.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",t.overtureRelease.split(".",1));var s=e.language||"sql";return(0,o.jsx)(r.default,{language:s,title:e.title,children:a})}}}]);