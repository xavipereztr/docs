"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[5945],{61751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var r=n(15629),s=n(74848),i=n(28453),a=n(74235),l=n(15947);n(48821);let d={title:"2024-06-13-beta.1",slug:"2024-06-13-beta.0"},o=void 0,c={authorsImageUrls:[]},h=[{value:"New data: GERS changelog",id:"new-data-gers-changelog",level:3},{value:"Breaking changes",id:"breaking-changes",level:3},{value:"Deprecations",id:"deprecations",level:3},{value:"Schema changelog",id:"schema-changelog",level:3},{value:"Theme-specific updates",id:"theme-specific-updates",level:3},{value:"Attribution",id:"attribution",level:3}];function u(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"24 June 2024"})}),(0,s.jsx)(t.p,{children:"Today Overture released a patch to fix data issues in the June release. This hotfix addressed the following regressions:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["in the transportation theme, a bug in one of our automated processes inadvertently caused the conversion of unicode characters to ASCII. This affected roughly 10% of ",(0,s.jsx)(t.code,{children:"segment"})," features that contained characters outside of the ASCII range, primarily names but possibly things like speed limit/weight restrictions if those properties contained values with characters outside that range."]}),"\n",(0,s.jsxs)(t.li,{children:["in the buildings theme, the ",(0,s.jsx)(t.code,{children:"roof_height"})," property was not fully populated; the hotfix adds 143k ",(0,s.jsx)(t.code,{children:"roof_height"})," values to the release."]}),"\n"]}),(0,s.jsx)(t.p,{children:"The new release paths are:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Azure path: wasbs://release@overturemapswestus2.blob.core.windows.net/2024-06-13-beta.1\n\nAWS path: s3://overturemaps-us-west-2/release/2024-06-13-beta.1\n"})})]}),"\n",(0,s.jsxs)(t.p,{children:["Overture's ",(0,s.jsx)(t.code,{children:"2024-06-13-beta.0"})," release is available in GeoParquet and stored on AWS and Azure. You can access the datasets by following the process outlined ",(0,s.jsx)(t.a,{href:"https://docs.overturemaps.org/getting-data/",children:"here"}),". We encourage users to report bugs and provide feedback on the data, schema, and GERS via any publicly-available Overture Maps repository on GitHub:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/OvertureMaps/schema",children:"Schema"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/OvertureMaps/data",children:"Data"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/OvertureMaps/docs",children:"Docs"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/OvertureMaps/overturemaps-py",children:"Python command-line tool"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/OvertureMaps/io-site",children:"Explore site"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Depending on feedback, we anticipate moving to a general availability (GA) release soon."}),"\n",(0,s.jsx)(t.h3,{id:"new-data-gers-changelog",children:"New data: GERS changelog"}),"\n",(0,s.jsxs)(t.p,{children:["You'll find in this release a new GERS changelog that captures feature changes from the previous release to the current release. The changelog is available as Parquet files \u2014 partitioned by theme, type, and ",(0,s.jsx)(t.code,{children:"change_type"})," \u2014 at the following locations:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"wasbs://changelog@overturemapswestus2.blob.core.windows.net/2024-06-13-beta.0\n\ns3://overturemaps-us-west-2/changelog/2024-06-13-beta.0\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Valid values for the ",(0,s.jsx)(t.code,{children:"change_type"})," include:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"added: Overture ID is new and was not in the previous release"}),"\n",(0,s.jsx)(t.li,{children:"removed: Overture ID is not in the current release and was in the previous release"}),"\n",(0,s.jsx)(t.li,{children:"data_changed: Overture ID is in the current release and was in the previous release and the feature's attributes or geometry have changed"}),"\n",(0,s.jsx)(t.li,{children:"unchanged: Overture ID is in the current release and was in the previous release, and the feature's attributes and geometry have not changed"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,s.jsx)(t.p,{children:'In response to feedback from developers and data analysts in the Overture ecosystem, we simplified ("flattened") the structure of our road data to make it easier to query road attributes. To make this transition easier for users, we included the now deprecated road JSON column in this release. We will remove the road JSON column in the next release.'}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Breaking change in structure of road data"}),(0,s.jsx)("div",{children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"old JSON path"}),(0,s.jsx)(t.th,{children:"new Parquet column"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"road.restrictions.speed_limits"}),(0,s.jsx)(t.td,{children:"speed_limits"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"road.restrictions.access"}),(0,s.jsx)(t.td,{children:"access_restrictions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"road.restrictions.prohibited_transitions"}),(0,s.jsx)(t.td,{children:"prohibited_transitions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"road.surface"}),(0,s.jsx)(t.td,{children:"road_surface"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"road.flags"}),(0,s.jsx)(t.td,{children:"road_flags"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"road.width"}),(0,s.jsx)(t.td,{children:"width_rules"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"road.lanes"}),(0,s.jsx)(t.td,{children:"lanes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"road.level"}),(0,s.jsx)(t.td,{children:"level_rules"})]})]})]})})]}),"\n",(0,s.jsx)(t.p,{children:"Also in this release, we simplified the non-geometry vehicle scoping block."}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Breaking change in structure of vehicle scoping block"}),(0,s.jsx)("div",{children:(0,s.jsxs)(a.default,{children:[(0,s.jsx)(l.default,{value:"old speed_limits structure",label:"old speed_limits structure",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"speed_limits:\n  when:\n    ...\n    vehicle:\n      axle_count:\n        is_more_than:\n          value:\n          unit:\n        is_less_than:\n          ...\n        ...\n        ...\n      height:\n        ...\n      length:\n        ...\n      weight:\n        ...\n      width:\n        ...\n"})})}),(0,s.jsx)(l.default,{value:"new speed_limits structure",label:"new speed_limits structure",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"speed_limits:\n  when:\n    ...\n    vehicle:\n      - dimension: <axle_count, height, length, weight, width>\n        comparison: <greater_than, greater_than_equal, equal, less_than, less_than_equal>\n        value: str\n        unit: str\n"})})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"deprecations",children:"Deprecations"}),"\n",(0,s.jsx)(t.p,{children:"In the transportation theme, we deprecated the road JSON column and will remove it in the next release. We replaced the road JSON column with structured Parquet columns for road attributes."}),"\n",(0,s.jsx)(t.p,{children:"We deprecated the admins theme and replaced it with the divisions theme. This will be the last supported release for the admins schema and data. In the next release, admins will be available in an archive but not supported."}),"\n",(0,s.jsx)(t.h3,{id:"schema-changelog",children:"Schema changelog"}),"\n",(0,s.jsxs)(t.p,{children:["See our schema ",(0,s.jsx)(t.a,{href:"https://github.com/OvertureMaps/schema/releases",children:"changelog"})," here."]}),"\n",(0,s.jsx)(t.h3,{id:"theme-specific-updates",children:"Theme-specific updates"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Divisions/Admins"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"added support for MultiLineString geometries to improve the stability of Overture IDs for boundary features"}),"\n",(0,s.jsx)(t.li,{children:"extended the schema to support multiple capitals of a division"}),"\n",(0,s.jsx)(t.li,{children:"added the option to include or exclude boundaries based on perspectives"}),"\n",(0,s.jsx)(t.li,{children:"updated OpenStreetMap data to 2024.06.05"}),"\n",(0,s.jsx)(t.li,{children:"changed modeling of municipalities/cities in Brazil from counties to localities, which we believe better reflects ground truth"}),"\n",(0,s.jsx)(t.li,{children:"made improvements to the names data and fixed several bugs"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Base"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["added the ",(0,s.jsx)(t.code,{children:"surface"})," attribute to infrastructure and land feature types"]}),"\n",(0,s.jsx)(t.li,{children:"made incremental updates from OSM, based on Daylight v1.48"}),"\n",(0,s.jsxs)(t.li,{children:["added to the land_cover feature type a new cartographic property ",(0,s.jsx)(t.code,{children:"cartography.sort_key"}),": an ascending number signifying the importance of a feature in relation to other features."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Buildings"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"made regular updates to buildings, including adding the latest open data from OSM, Esri Community Maps, and Microsoft"}),"\n",(0,s.jsx)(t.li,{children:"expanded the previous definition of class for buildings to include specific amenity tags that are either already an official Overture place category or can be matched to one"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Places"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"began a comprehensive audit of data quality"}),"\n",(0,s.jsx)(t.li,{children:"worked on calibrating confidence values"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Transportation"})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Breaking change: transformed road properties from JSON to structured Parquet columns"}),"\n",(0,s.jsx)(t.li,{children:"Breaking change: restructured vehicle constraint property"}),"\n"]})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"updated speed limit min/max values"}),"\n",(0,s.jsx)(t.li,{children:"added 19K previously filtered segments which contained self-intersecting lines that are still OGC-valid"}),"\n",(0,s.jsx)(t.li,{children:"fixed OSM source ids for connectors"}),"\n",(0,s.jsxs)(t.li,{children:["known issue: in ",(0,s.jsx)(t.code,{children:"road_flags"})," a value of 0 or 1 on the linear referencing between property can be null in some cases"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"attribution",children:"Attribution"}),"\n",(0,s.jsxs)(t.p,{children:["You'll find information about attribution and licensing ",(0,s.jsx)(t.a,{href:"https://docs.overturemaps.org/attribution/",children:"here"}),"."]})]})}function p(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},48821:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(74848),s=n(76634),i=n(90062);function a(e){let{siteConfig:{customFields:t}}=(0,i.A)();var n=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);n=(n=n.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",t.overtureRelease.split(".",1));var a=e.language||"sql";return(0,r.jsx)(s.default,{language:a,title:e.title,children:n})}},15629:e=>{e.exports=JSON.parse('{"permalink":"/release/2024-06-13-beta.0","source":"@site/release-blog/2024-beta/2024-06-13-beta.0.mdx","title":"2024-06-13-beta.1","description":"24 June 2024","date":"2024-06-13T00:00:00.000Z","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"2024-06-13-beta.1","slug":"2024-06-13-beta.0"},"unlisted":false,"prevItem":{"title":"2024-07-22.0","permalink":"/release/2024-07-22.0"},"nextItem":{"title":"2024-05-16-beta.0","permalink":"/release/2024-05-16-beta.0"}}')}}]);