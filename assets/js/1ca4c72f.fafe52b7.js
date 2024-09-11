"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[8686],{59725:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var r=a(74848),n=a(28453),s=a(11470),l=a(19365),o=a(97577);const i="LOAD httpfs;\nCOPY(\n    SELECT\n        *\n    FROM\n        read_parquet(\"s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=*/type=*/*\", union_by_name=true)\n    WHERE\n            bbox.xmin >= -105.30 AND bbox.ymin >= 39.98\n        AND bbox.xmax <= -105.24 AND bbox.ymax <= 40.07\n) TO 'boulder_co_overture.parquet' WITH (FORMAT PARQUET);\n",u="LOAD spatial;\nLOAD httpfs;\n-- Roads\nCOPY (\n    SELECT\n        names.primary AS name,\n        JSON_EXTRACT(road, '$.class') AS class,\n        ST_GeomFromWKB(geometry) as geometry\n    FROM read_parquet('s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/theme=transportation/type=segment/*')\n    WHERE\n        subtype = 'road'\n        AND bbox.xmin > -122.68 AND bbox.xmax < -121.98\n        AND bbox.ymin > 47.36 AND bbox.ymax < 47.79\n) TO 'seattle_roads.shp'\nWITH (FORMAT GDAL, DRIVER 'Esri Shapefile', SRS 'EPSG:4326');\n",d={description:"drag and drop GeoParquet files into QGIS",title:"Overture + QGIS"},c=void 0,h={id:"examples/QGIS",title:"Overture + QGIS",description:"drag and drop GeoParquet files into QGIS",source:"@site/docs/examples/QGIS.mdx",sourceDirName:"examples",slug:"/examples/QGIS",permalink:"/examples/QGIS",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:172605874e4,frontMatter:{description:"drag and drop GeoParquet files into QGIS",title:"Overture + QGIS"},sidebar:"docs",previous:{title:"Overture + Maplibre",permalink:"/examples/build-a-map"},next:{title:"Data Guides",permalink:"/guides/"}},p={},f=[{value:"Download Overture Data",id:"download-overture-data",level:2},{value:"Add the data to QGIS",id:"add-the-data-to-qgis",level:2}];function m(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this example, we'll show you how to get Overture Maps data into ",(0,r.jsx)(t.a,{href:"https://www.qgis.org/",children:"QGIS"}),", a powerful and popular open source geographic information system. QGIS can ingest almost every spatial data format, including ",(0,r.jsx)(t.a,{href:"https://parquet.apache.org/docs/",children:"Parquet"})," and ",(0,r.jsx)(t.a,{href:"https://geoparquet.org/",children:"GeoParquet"}),". Once you get your data into QGIS, the sky's the limit for data analysis, data conflation, visualization and beautiful mapmaking."]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsxs)("summary",{children:["Instructions: Install a version of QGIS with GDAL > 3.5 that can read ",(0,r.jsx)(t.code,{children:"(geo)parquet"})]}),(0,r.jsxs)(s.default,{children:[(0,r.jsxs)(l.default,{value:"mac",label:"MacOS",default:!0,children:[(0,r.jsxs)(t.p,{children:["You can find the latest installers for Mac here: ",(0,r.jsx)(t.a,{href:"https://github.com/opengisch/qgis-conda-builder/releases",children:"github.com/opengisch/qgis-conda-builder/releases"})]}),(0,r.jsxs)(t.p,{children:["Additionally, the ",(0,r.jsx)(t.a,{href:"https://anaconda.org/conda-forge/qgis",children:"conda packages"})," of QGIS have support for Parquet."]})]}),(0,r.jsx)(l.default,{value:"windows",label:"Windows",default:!0,children:(0,r.jsx)(t.p,{children:"Most distributions of QGIS for Windows have support for parquet."})}),(0,r.jsxs)(l.default,{value:"linux",label:"Linux",default:!0,children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://anaconda.org/conda-forge/qgis",children:"conda packages"})," of QGIS have support for Parquet."]}),(0,r.jsx)(t.p,{children:"Additionally, there is a Flatpak QGIS package that includes support for Parquet:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"flatpak install --user https://dl.flathub.org/build-repo/94031/org.qgis.qgis.flatpakref\n"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"download-overture-data",children:"Download Overture Data"}),"\n",(0,r.jsxs)(s.default,{children:[(0,r.jsxs)(l.default,{value:"DuckDB",children:[(0,r.jsxs)(t.p,{children:["Using only the ",(0,r.jsx)(t.code,{children:"bbox"})," parameters, we can efficiently retrieve all Overture data without processing any geometries. With SELECT ",(0,r.jsx)(t.code,{children:"*"}),", we will simply download ",(0,r.jsx)(t.em,{children:"all"})," of the data in Overture across all themes and types. Note: if your query is interupted by a connection error, you might try running the following command first: ",(0,r.jsx)(t.code,{children:"SET http_keep_alive=false;"}),"."]}),(0,r.jsx)(o.A,{query:i}),(0,r.jsxs)(t.p,{children:["Note that this query gathers data from all Overture themes with ",(0,r.jsx)(t.code,{children:"theme=*/type=*/*"}),". The resulting file has ",(0,r.jsx)(t.em,{children:"all"})," of the columns and multiple geometry types."]})]}),(0,r.jsxs)(l.default,{value:"DuckDB Spatial",children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"spatial"})," plugin allows DuckDB to read the geometry and convert the file to a common spatial format. This query will download all of the ",(0,r.jsx)(t.code,{children:"road"})," subtypes of ",(0,r.jsx)(t.code,{children:"segments"})," in the ",(0,r.jsx)(t.code,{children:"transportation"})," theme to a ",(0,r.jsx)(t.em,{children:"shapefile"}),"."]}),(0,r.jsx)(o.A,{query:u})]}),(0,r.jsxs)(l.default,{value:"Python",children:[(0,r.jsxs)(t.p,{children:["The new ",(0,r.jsx)(t.a,{href:"https://github.com/OvertureMaps/overturemaps-py",children:(0,r.jsx)(t.code,{children:"overturemaps-py"})})," Python utility can download Overture data as both ",(0,r.jsx)(t.code,{children:"geojson"})," and ",(0,r.jsx)(t.code,{children:"geoparquet"}),". This example downloads buildlings around Boston."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ pip install overturemaps\n\n$ overturemaps download --bbox=-71.068,42.353,-71.058,42.363 \\\n    -f geoparquet --type=building --output=boston.geoparquet\n"})}),(0,r.jsxs)(t.p,{children:["Note: run ",(0,r.jsx)(t.code,{children:"overturemaps download --help"})," for a full list of types and output formats."]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"add-the-data-to-qgis",children:"Add the data to QGIS"}),"\n",(0,r.jsx)(t.p,{children:"All of the data files we created in the previous step are vector files that can be added as layers in QGIS. The easiest method is to drag-and-drop the file(s) directly into the map canvas."}),"\n",(0,r.jsx)("img",{src:"/img/examples/qgis-parquet-drag-drop.gif",alt:"Drag-n-drop parquet files in QGIS",width:"65%"})]})}function b(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});a(96540);var r=a(18215);const n={tabItem:"tabItem_Ymn6"};var s=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,l),hidden:a,children:t})}},11470:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var r=a(96540),n=a(18215),s=a(23104),l=a(56347),o=a(205),i=a(57485),u=a(31682),d=a(89466);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,c]=f({queryString:a,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,d.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,s]),tabValues:s}}var b=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function v(e){let{className:t,block:a,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const t=e.currentTarget,a=i.indexOf(t),n=o[a].value;n!==r&&(u(t),l(n))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:c,onClick:d,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,x.jsx)(j,{...e,children:c(e.children)},String(t))}},97577:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(21432),n=a(44586),s=a(74848);function l(e){const{siteConfig:{customFields:t}}=(0,n.A)();var a=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);a=(a=a.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",t.overtureRelease.split(".",1));var l=e.language||"sql";return(0,s.jsx)(r.default,{language:l,title:e.title,children:a})}}}]);