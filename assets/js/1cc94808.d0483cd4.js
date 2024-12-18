"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[8375],{63803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var a=r(63305),s=r(74848),i=r(28453),o=r(74235),n=r(15947);let l={title:"Exploring our beta release",description:"Highlights from Overture Maps beta release"},d=void 0,h={authorsImageUrls:[]},u=[{value:"Making geospatial fast",id:"making-geospatial-fast",level:2},{value:"Easier-to-use schema",id:"easier-to-use-schema",level:2},{value:"Bridges, islands, waterfalls, and more!",id:"bridges-islands-waterfalls-and-more",level:2},{value:"Stay tuned for more highlights",id:"stay-tuned-for-more-highlights",level:2}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Last week Overture Maps ",(0,s.jsx)(t.a,{href:"https://overturemaps.org/overture-maps-foundation-releases-beta-of-its-first-open-map-dataset/",children:"announced the beta release"})," of our schema and data. After months of hard work and steady improvements, we are nearing production-level stability. In a series of posts over the next few weeks -- starting with this one -- we\u2019ll unpack the highlights and improvements you'll see in this release and beyond."]}),"\n",(0,s.jsx)(t.h2,{id:"making-geospatial-fast",children:"Making geospatial fast"}),"\n",(0,s.jsxs)(t.p,{children:["The first thing you'll notice is how much faster you can ",(0,s.jsx)(t.a,{href:"https://docs.overturemaps.org/getting-data/locally/",children:"pull Overture Maps data out of the cloud"}),". We made this possible by working closely with open-source collaborators on the repartitioning and ",(0,s.jsx)(t.a,{href:"https://cloudnativegeo.org/blog/2024/03/coming-soon-geoparquet-1.1/",children:"spatial optimization"})," of our GeoParquet files. Meanwhile, our friends at DuckDB, one of our favorite SQL tools, ",(0,s.jsx)(t.a,{href:"https://github.com/duckdb/duckdb/pull/10314",children:"added a feature"})," that improves the performance of queries with bounding boxes."]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsxs)("summary",{children:["Query speeds have improved significantly from our February release to the April beta release. This example compares DuckDB queries for buildings in Philadelphia. ",(0,s.jsx)(t.a,{href:"https://github.com/opengeospatial/geoparquet/discussions/188#discussioncomment-8909348",children:"See here for more information about our performance testing"}),"."]}),(0,s.jsxs)(o.default,{children:[(0,s.jsxs)(n.default,{value:"february",label:"2024-02-15-alpha.0 release",default:!0,children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"SELECT \n*\nFROM \n    read_parquet('s3://overturemaps-us-west-2/release/2024-02-15-alpha.0/theme=buildings/type=building/*', filename=true, hive_partitioning=1)\nWHERE \n    bbox.minx > -75.60154\n    AND bbox.maxx < -74.955763\n    AND bbox.miny > 39.867004\n    AND bbox.maxy < 40.137992;\n"})}),(0,s.jsxs)(t.p,{children:["820,915 buildings",(0,s.jsx)(t.br,{}),"\n","~120s"]})]}),(0,s.jsxs)(n.default,{value:"april",label:"2024-04-16-beta.0 release",default:!0,children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"SELECT \n*\nFROM   \n    read_parquet('s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=buildings/type=building/*', filename=true, hive_partitioning=1)\nWHERE \n    bbox.xmin > -75.60154\n    AND bbox.xmax < -74.955763\n    AND bbox.ymin > 39.867004\n    AND bbox.ymax < 40.137992\n"})}),(0,s.jsxs)(t.p,{children:["852,487 buildings",(0,s.jsx)(t.br,{}),"\n","~25s"]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["We're continuing to make things faster and easier for users. Along with the folks at Development Seed, an ",(0,s.jsx)(t.a,{href:"https://overturemaps.org/about/members/",children:"Overture Maps Foundation member"}),", we're ",(0,s.jsx)(t.a,{href:"https://developmentseed.org/lonboard/latest/examples/overture-maps/",children:"building special tools for Overture Maps data on top of lonboard"}),", their Python library for visualizing large geospatial datasets in Jupyter. And recently our friends at Wherobots ",(0,s.jsx)(t.a,{href:"https://wherobots.com/overture-maps-data-cloud-native-geoparquet-apache-sedona/",children:"took a comprehensive look"})," at how our use of GeoParquet makes querying and analyzing our data with Apache Sedona very efficient."]}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, we're moving forward with the community to iterate on data, software, and specifications with the shared goal of making geospatial ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"fast"})}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"easier-to-use-schema",children:"Easier-to-use schema"}),"\n",(0,s.jsxs)(t.p,{children:["Another highlight of the beta release is the transition to an easier-to-use schema for our administrative boundary data. We first ",(0,s.jsx)(t.a,{href:"https://github.com/OvertureMaps/schema/discussions/117",children:"explored this idea"})," with the Overture Maps community in February, and after two short months of work, the ",(0,s.jsx)(t.a,{href:"https://docs.overturemaps.org/guides/divisions/",children:"new divisions schema and data"})," are ready to go. Here's a query to ",(0,s.jsx)(t.code,{children:"divisions"})," that grabs geometries for all the countries in the world:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"SELECT *\n   FROM read_parquet('s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=divisions/type=division_area/*', filename=true, hive_partitioning=1)\nWHERE subtype = 'country';\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can see that the ",(0,s.jsx)(t.code,{children:"divisions"})," query above is much simpler than a comparable query to ",(0,s.jsx)(t.code,{children:"admins"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"WITH admins AS (\n    SELECT *\n    FROM read_parquet('s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=admins/type=*/*', filename=true, hive_partitioning=1)\n  )\n\n  SELECT *\n    FROM admins country_locality\n    JOIN admins country_area\n      ON country_area.locality_id = country_locality.id\n   WHERE country_locality.locality_type = 'country';\n\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We plan to ",(0,s.jsx)(t.a,{href:"https://docs.overturemaps.org/release-notes/",children:"deprecate admins"})," by the July release. In the meantime, both ",(0,s.jsx)(t.code,{children:"admins"})," and ",(0,s.jsx)(t.code,{children:"divisions"})," will be available to users."]}),"\n",(0,s.jsx)(t.h2,{id:"bridges-islands-waterfalls-and-more",children:"Bridges, islands, waterfalls, and more!"}),"\n",(0,s.jsxs)(t.p,{children:["We added more rich detail to our ",(0,s.jsx)(t.code,{children:"base"})," layer in this release, including an ",(0,s.jsx)(t.code,{children:"infrastructure"})," type with familiar features from ",(0,s.jsx)(t.a,{href:"https://daylightmap.org/",children:"Facebook\u2019s Daylight map distribution"}),". We also added new subtypes and classes for the ",(0,s.jsx)(t.code,{children:"land"}),", ",(0,s.jsx)(t.code,{children:"land_use"}),", and ",(0,s.jsx)(t.code,{children:"water"})," feature types. You'll find a comprehensive listing of the subtypes and classes for each feature type in our ",(0,s.jsx)(t.a,{href:"https://docs.overturemaps.org/schema/reference/base/infrastructure",children:"schema reference docs"}),". Ready to make your own map? We have a ",(0,s.jsx)(t.a,{href:"https://docs.overturemaps.org/examples/build-a-map/#13/47.6/-122.33/0/45",children:"tutorial to help you get started"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"stay-tuned-for-more-highlights",children:"Stay tuned for more highlights"}),"\n",(0,s.jsxs)(t.p,{children:["We'll be back soon with more posts that explore our path from the beta release to production. In the meantime, we invite you to ",(0,s.jsx)(t.a,{href:"https://docs.overturemaps.org/getting-data/",children:"get started with our data"})," and share with us your ",(0,s.jsx)(t.a,{href:"https://github.com/OvertureMaps/data/discussions",children:"comments and feedback"}),"."]})]})}function p(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},63305:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/04/22/beta-release","source":"@site/blog/2024-04-22-beta-release.mdx","title":"Exploring our beta release","description":"Highlights from Overture Maps beta release","date":"2024-04-22T00:00:00.000Z","tags":[],"readingTime":2.965,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Exploring our beta release","description":"Highlights from Overture Maps beta release"},"unlisted":false,"prevItem":{"title":"Land cover is live","permalink":"/blog/2024/05/16/land-cover"},"nextItem":{"title":"Welcome!","permalink":"/blog/2024/04/21/welcome"}}')}}]);