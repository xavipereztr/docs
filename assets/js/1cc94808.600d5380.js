"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[8375],{63803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=r(74848),n=r(28453),s=r(11470),o=r(19365);const i={title:"Exploring our beta release",description:"Highlights from Overture Maps beta release"},l=void 0,u={permalink:"/blog/2024/04/22/beta-release",source:"@site/blog/2024-04-22-beta-release.mdx",title:"Exploring our beta release",description:"Highlights from Overture Maps beta release",date:"2024-04-22T00:00:00.000Z",tags:[],readingTime:2.965,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Exploring our beta release",description:"Highlights from Overture Maps beta release"},unlisted:!1,prevItem:{title:"Land cover is live",permalink:"/blog/2024/05/16/land-cover"},nextItem:{title:"Welcome!",permalink:"/blog/2024/04/21/welcome"}},d={authorsImageUrls:[]},c=[{value:"Making geospatial fast",id:"making-geospatial-fast",level:2},{value:"Easier-to-use schema",id:"easier-to-use-schema",level:2},{value:"Bridges, islands, waterfalls, and more!",id:"bridges-islands-waterfalls-and-more",level:2},{value:"Stay tuned for more highlights",id:"stay-tuned-for-more-highlights",level:2}];function h(e){const t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Last week Overture Maps ",(0,a.jsx)(t.a,{href:"https://overturemaps.org/overture-maps-foundation-releases-beta-of-its-first-open-map-dataset/",children:"announced the beta release"})," of our schema and data. After months of hard work and steady improvements, we are nearing production-level stability. In a series of posts over the next few weeks -- starting with this one -- we\u2019ll unpack the highlights and improvements you'll see in this release and beyond."]}),"\n",(0,a.jsx)(t.h2,{id:"making-geospatial-fast",children:"Making geospatial fast"}),"\n",(0,a.jsxs)(t.p,{children:["The first thing you'll notice is how much faster you can ",(0,a.jsx)(t.a,{href:"https://docs.overturemaps.org/getting-data/locally/",children:"pull Overture Maps data out of the cloud"}),". We made this possible by working closely with open-source collaborators on the repartitioning and ",(0,a.jsx)(t.a,{href:"https://cloudnativegeo.org/blog/2024/03/coming-soon-geoparquet-1.1/",children:"spatial optimization"})," of our GeoParquet files. Meanwhile, our friends at DuckDB, one of our favorite SQL tools, ",(0,a.jsx)(t.a,{href:"https://github.com/duckdb/duckdb/pull/10314",children:"added a feature"})," that improves the performance of queries with bounding boxes."]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsxs)("summary",{children:["Query speeds have improved significantly from our February release to the April beta release. This example compares DuckDB queries for buildings in Philadelphia. ",(0,a.jsx)(t.a,{href:"https://github.com/opengeospatial/geoparquet/discussions/188#discussioncomment-8909348",children:"See here for more information about our performance testing"}),"."]}),(0,a.jsxs)(s.default,{children:[(0,a.jsxs)(o.default,{value:"february",label:"2024-02-15-alpha.0 release",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"SELECT \n*\nFROM \n    read_parquet('s3://overturemaps-us-west-2/release/2024-02-15-alpha.0/theme=buildings/type=building/*', filename=true, hive_partitioning=1)\nWHERE \n    bbox.minx > -75.60154\n    AND bbox.maxx < -74.955763\n    AND bbox.miny > 39.867004\n    AND bbox.maxy < 40.137992;\n"})}),(0,a.jsxs)(t.p,{children:["820,915 buildings",(0,a.jsx)(t.br,{}),"\n","~120s"]})]}),(0,a.jsxs)(o.default,{value:"april",label:"2024-04-16-beta.0 release",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"SELECT \n*\nFROM   \n    read_parquet('s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=buildings/type=building/*', filename=true, hive_partitioning=1)\nWHERE \n    bbox.xmin > -75.60154\n    AND bbox.xmax < -74.955763\n    AND bbox.ymin > 39.867004\n    AND bbox.ymax < 40.137992\n"})}),(0,a.jsxs)(t.p,{children:["852,487 buildings",(0,a.jsx)(t.br,{}),"\n","~25s"]})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["We're continuing to make things faster and easier for users. Along with the folks at Development Seed, an ",(0,a.jsx)(t.a,{href:"https://overturemaps.org/about/members/",children:"Overture Maps Foundation member"}),", we're ",(0,a.jsx)(t.a,{href:"https://developmentseed.org/lonboard/latest/examples/overture-maps/",children:"building special tools for Overture Maps data on top of lonboard"}),", their Python library for visualizing large geospatial datasets in Jupyter. And recently our friends at Wherobots ",(0,a.jsx)(t.a,{href:"https://wherobots.com/overture-maps-data-cloud-native-geoparquet-apache-sedona/",children:"took a comprehensive look"})," at how our use of GeoParquet makes querying and analyzing our data with Apache Sedona very efficient."]}),"\n",(0,a.jsxs)(t.p,{children:["As you can see, we're moving forward with the community to iterate on data, software, and specifications with the shared goal of making geospatial ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.em,{children:"fast"})}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"easier-to-use-schema",children:"Easier-to-use schema"}),"\n",(0,a.jsxs)(t.p,{children:["Another highlight of the beta release is the transition to an easier-to-use schema for our administrative boundary data. We first ",(0,a.jsx)(t.a,{href:"https://github.com/OvertureMaps/schema/discussions/117",children:"explored this idea"})," with the Overture Maps community in February, and after two short months of work, the ",(0,a.jsx)(t.a,{href:"https://docs.overturemaps.org/guides/divisions/",children:"new divisions schema and data"})," are ready to go. Here's a query to ",(0,a.jsx)(t.code,{children:"divisions"})," that grabs geometries for all the countries in the world:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"SELECT *\n   FROM read_parquet('s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=divisions/type=division_area/*', filename=true, hive_partitioning=1)\nWHERE subtype = 'country';\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can see that the ",(0,a.jsx)(t.code,{children:"divisions"})," query above is much simpler than a comparable query to ",(0,a.jsx)(t.code,{children:"admins"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"WITH admins AS (\n    SELECT *\n    FROM read_parquet('s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=admins/type=*/*', filename=true, hive_partitioning=1)\n  )\n\n  SELECT *\n    FROM admins country_locality\n    JOIN admins country_area\n      ON country_area.locality_id = country_locality.id\n   WHERE country_locality.locality_type = 'country';\n\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We plan to ",(0,a.jsx)(t.a,{href:"https://docs.overturemaps.org/release-notes/",children:"deprecate admins"})," by the July release. In the meantime, both ",(0,a.jsx)(t.code,{children:"admins"})," and ",(0,a.jsx)(t.code,{children:"divisions"})," will be available to users."]}),"\n",(0,a.jsx)(t.h2,{id:"bridges-islands-waterfalls-and-more",children:"Bridges, islands, waterfalls, and more!"}),"\n",(0,a.jsxs)(t.p,{children:["We added more rich detail to our ",(0,a.jsx)(t.code,{children:"base"})," layer in this release, including an ",(0,a.jsx)(t.code,{children:"infrastructure"})," type with familiar features from ",(0,a.jsx)(t.a,{href:"https://daylightmap.org/",children:"Facebook\u2019s Daylight map distribution"}),". We also added new subtypes and classes for the ",(0,a.jsx)(t.code,{children:"land"}),", ",(0,a.jsx)(t.code,{children:"land_use"}),", and ",(0,a.jsx)(t.code,{children:"water"})," feature types. You'll find a comprehensive listing of the subtypes and classes for each feature type in our ",(0,a.jsx)(t.a,{href:"https://docs.overturemaps.org/schema/reference/base/infrastructure",children:"schema reference docs"}),". Ready to make your own map? We have a ",(0,a.jsx)(t.a,{href:"https://docs.overturemaps.org/examples/build-a-map/#13/47.6/-122.33/0/45",children:"tutorial to help you get started"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"stay-tuned-for-more-highlights",children:"Stay tuned for more highlights"}),"\n",(0,a.jsxs)(t.p,{children:["We'll be back soon with more posts that explore our path from the beta release to production. In the meantime, we invite you to ",(0,a.jsx)(t.a,{href:"https://docs.overturemaps.org/getting-data/",children:"get started with our data"})," and share with us your ",(0,a.jsx)(t.a,{href:"https://github.com/OvertureMaps/data/discussions",children:"comments and feedback"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var a=r(96540),n=r(18215),s=r(23104),o=r(56347),i=r(205),l=r(57485),u=r(31682),d=r(89466);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,c]=m({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,d.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),g=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,s]),tabValues:s}}var b=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function x(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),n=i[r].value;n!==a&&(u(t),o(n))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(j,{...e,children:c(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var a=r(96540);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);