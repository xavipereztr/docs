"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[4673],{36388:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var r=a(93410),n=a(74848),o=a(28453);let s={title:"Transportation theme navigates to GA"},i=void 0,l={authorsImageUrls:[]},h=[];function d(e){let t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Over the past several releases, Overture has been laying the groundwork to transition our transportation theme from beta to general availability (GA). This post provides a brief roadmap of the work we\u2019ve done to reach that goal, along with a request for our community to continue testing the data and providing valuable feedback."}),"\n",(0,n.jsx)(t.p,{children:"First, let\u2019s talk about what GA means for the transportation theme. We have a few guiding principles:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'There are no "trust violations" in the schema and data. It needs to "just work" when a developer writes code based on our schema and documentation.'}),"\n",(0,n.jsx)(t.li,{children:"The road geometry and attributes should be on par with the roads in OSM."}),"\n",(0,n.jsx)(t.li,{children:"Roads have stable GERS IDs and those IDs can be references for attaching additional data."}),"\n",(0,n.jsx)(t.li,{children:"The road features we capture should support our core use cases: rendering for display, GERS referencing, and basic routing capabilities."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Most of our work over the past few months has been around #1 and #2. We've been resolving data-schema violations by fixing inconsistencies in our schema and issues with the data transformation steps in our pipeline. To satisfy #3, we\u2019ve been monitoring changes in GERS IDs from release to release, and our metrics show the vast majority of roads are maintaining stable IDs."}),"\n",(0,n.jsx)(t.p,{children:"We've had to break a few things in our schema to make way for improvements:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["To better support routing use cases, we added to the segment feature type a new property called ",(0,n.jsx)(t.code,{children:"connectors"}),": an array of IDs with pre-computed linear reference values that explicitly link segments and connector features via coordinates. Each connector is a possible routing decision point, meaning it defines a place along the segment in which there is possibility to transition to other segments that share the same connector. This new property \u2014 a replacement for the old ",(0,n.jsx)(t.code,{children:"connector_ids"})," property \u2014 will reduce complexity and improve accuracy as we calculate the intersections between segment and connector features. You can read more about this improvement ",(0,n.jsx)(t.a,{href:"https://docs.overturemaps.org/blog/2024/08/15/preview-august-release/#transportation-schema-changes",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.a,{href:"https://docs.overturemaps.org/release/2024-11-13.0/",children:"November release"}),", we removed ",(0,n.jsx)(t.code,{children:"lanes"})," from the schema to eliminate a significant trust violation. The ",(0,n.jsx)(t.code,{children:"lanes"})," property has existed in the schema for months but we never populated it with data in our releases, which is a poor experience for our community. We intend to redesign ",(0,n.jsx)(t.code,{children:"lanes"})," in the coming months."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"With these changes, we are confident we\u2019ve met our requirements for general availability (GA). We'll continue refining our schema and improving our data throughout 2025. We encourage our community to keep the feedback coming, particularly around data quality and our core use cases of map display, routing, and matching data via GERS."}),"\n",(0,n.jsx)(t.p,{children:"Here are some specific ways you can help:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Examine Overture transportation data in your areas of interest and compare it to local sources of data. Bonus: combine transportation data with Overture places, buildings, and base data to make a map. Here are some suggestions for downloading data using ",(0,n.jsx)(t.a,{href:"https://docs.overturemaps.org/getting-data/overturemaps-py/",children:"Overture's Python CLI"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Philadelphia area"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"overturemaps download --bbox=-75.8264,39.7032,-74.5213,40.444 -f geoparquet --type=segment -o overture-segments-philadelphia.geoparquet\n"})}),"\n",(0,n.jsx)(t.p,{children:"Riyadh Province, Saudia Arabia"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"overturemaps download --bbox=38.97,21.33,48.66,25.98 -f geoparquet --type=segment -o overture-segments-riyadh.geoparquet\n"})}),"\n",(0,n.jsx)(t.p,{children:"Campobasso, Italy"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"overturemaps download --bbox=13.8152,40.8473,15.6336,42.0773 -f geoparquet --type=segment -o overture-segments-campobasso.geoparquet\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Test our ",(0,n.jsx)(t.a,{href:"https://github.com/OvertureMaps/transportation-splitter",children:"transportation spitter tool"})," and help us improve it. PRs are welcome!"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Feed our data into a routing engine and let us know how it goes. Paul Ramsey from Crunchy Data shared ",(0,n.jsx)(t.a,{href:"https://www.crunchydata.com/blog/vehicle-routing-with-postgis-and-overture-data",children:"a vehicle routing example using PostGIS and Overture data"}),". We'd like to see our users trying ",(0,n.jsx)(t.a,{href:"https://valhalla.github.io/valhalla/",children:"Valhalla"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/graphhopper/graphhopper-maps",children:"Grasshopper"})," too. We are considering building a native Overture router and/or adding support to an existing open source router, such as Valhalla and Grasshopper, so that Overture consumers can easily use transportation data out of the box."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Reach out to us at ",(0,n.jsx)(t.a,{href:"mailto:community@overturemaps.org",children:"community@overturemaps.org"})," if you have a specific use case that you'd like to discuss with us."]}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},93410:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/12/18/transportation-to-ga","source":"@site/blog/2024-12-18-transportation-to-ga.mdx","title":"Transportation theme navigates to GA","description":"Over the past several releases, Overture has been laying the groundwork to transition our transportation theme from beta to general availability (GA). This post provides a brief roadmap of the work we\u2019ve done to reach that goal, along with a request for our community to continue testing the data and providing valuable feedback.","date":"2024-12-18T00:00:00.000Z","tags":[],"readingTime":3.19,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Transportation theme navigates to GA"},"unlisted":false,"nextItem":{"title":"What to expect in Overture\u2019s October release","permalink":"/blog/2024/10/21/preview-october-release"}}')}}]);