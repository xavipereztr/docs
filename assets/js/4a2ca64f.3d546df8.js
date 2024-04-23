"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[2403],{6805:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=s(5893),n=s(1151);const a={title:"Overture Feature Model"},i=void 0,o={id:"guides/feature-model/index",title:"Overture Feature Model",description:"Key concepts",source:"@site/docs/guides/feature-model/index.mdx",sourceDirName:"guides/feature-model",slug:"/guides/feature-model/",permalink:"/guides/feature-model/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Overture Feature Model"},sidebar:"docs",previous:{title:"User Guides",permalink:"/guides/"},next:{title:"Names",permalink:"/guides/feature-model/names"}},l={},d=[{value:"Key concepts",id:"key-concepts",level:2},{value:"Features represent entities",id:"features-represent-entities",level:2},{value:"Common properties",id:"common-properties",level:2},{value:"Complex attributes",id:"complex-attributes",level:2},{value:"Extensible attributes",id:"extensible-attributes",level:2},{value:"Measurements",id:"measurements",level:2},{value:"Data formats",id:"data-formats",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"key-concepts",children:"Key concepts"}),"\n",(0,r.jsxs)(t.p,{children:["Overture Maps data is described using the ",(0,r.jsx)(t.a,{href:"https://www.ogc.org/standard/sfa/",children:"simple feature model"})," specified by the Open Geospatial Consortium. Each feature includes a geometric object with a unique ID and associated properties. For example, the Town Hall building in Seattle is represented in the Overture Maps buildings dataset as a ",(0,r.jsx)(t.a,{href:"https://geojson.org/",children:"GeoJSON"})," feature that looks like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "id": "08828d542c9fffff02ffffff1953aec1",\n  "type": "Feature",\n  "geometry": {\n    "type": "Polygon",\n    "coordinates": [\n      [ [-122.3301821, 47.6090116],[-122.3301197, 47.6089409],[-122.3300642, 47.6088779],[-122.3300094, 47.6088158],[-122.329729, 47.6089282],[-122.3297466, 47.6089481],[-122.3296561, 47.6089844],[-122.3296934, 47.6090266],[-122.3297562, 47.6090978], [-122.3298113, 47.6091603],[-122.3298611, 47.6092168],[-122.3299517, 47.6091804],[-122.329963, 47.6091932],[-122.3299793, 47.6091867],[-122.3301728, 47.6091091],[-122.3301916, 47.6091016],[-122.3301714, 47.6090787],[-122.330223, 47.609058] ]\n    ]\n  },\n  "properties": {\n    "theme": "buildings",\n    "type": "building",\n    "version": 0,\n    "update_time": "2023-01-30T00:04:13.000Z",\n    "height": 22.7,\n    "num_floors": 3,\n    "class": "civic",\n    "names": {\n      "primary": "Town Hall Seattle"\n    },\n    "sources": [\n      {\n        "property": "dataset",\n        "dataset": "OpenStreetMap,"\n        "record_id": "w140675988@10"\n      },\n      {\n        "property": "/properties/height",\n        "dataset": "USGS Lidar"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"features-represent-entities",children:"Features represent entities"}),"\n",(0,r.jsx)(t.p,{children:"Features in Overture Maps represent entities in the real world. An entity is a physical thing or concept: a segment of road, a city boundary, a grocery store, a building, or a park. Overture assigns unique IDs to these features. In most cases it's helpful to think of an entity and a feature as the same thing, but in practice it can be more complicated. An entity could be represented by multiple features in a geospatial dataset, and a feature in a dataset might be a representation of multiple entities. For example, a school building and its entrances and exits might be considered a single entity in the real world but could be represented as multiple features in a dataset, each feature with a unique ID."}),"\n",(0,r.jsx)(t.h2,{id:"common-properties",children:"Common properties"}),"\n",(0,r.jsx)(t.p,{children:"Every feature in Overture Maps has a core set of properties."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"theme"}),": themes are top-level categories of map features."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"type"}),": a theme may have multiple types of features; the transportation theme, for example, has both segments and connectors."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"sources"}),": this is the array of information about the data sources from which a feature's attributes originated."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"version"}),": the version number of a feature is incremented in each Overture release whenever the geometry or attributes of the feature change."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"update_time"}),": the timestamp indicates when the feature was last updated."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Additional properties in the schema come from different theme and type values. For example, in the building described above, the buildings ",(0,r.jsx)(t.code,{children:"theme"})," with building ",(0,r.jsx)(t.code,{children:"type"})," has a ",(0,r.jsx)(t.code,{children:"class"})," property that defines what kind of building it is, in this case a civic building. It also has an optional ",(0,r.jsx)(t.code,{children:"height"})," property. You can find more detail about the properties associated with each theme and type in ",(0,r.jsx)(t.a,{href:"https://docs.overturemaps.org/schema",children:"schema reference"})," section of this documentation."]}),"\n",(0,r.jsx)(t.h2,{id:"complex-attributes",children:"Complex attributes"}),"\n",(0,r.jsx)(t.p,{children:"Some feature properties are quite complex and require further explanation."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"names",children:"Names"})}),": where applicable, complex attributes such as names will always use the same schema across all themes."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"scoping-rules",children:"Scoped and rule-based properties"})}),": a scoping property narrows the scope of its parent property and may only apply to a particular instance of the parent property; rule-based property is an array of rules, which are objects containing at least one scoping property."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"extensible-attributes",children:"Extensible attributes"}),"\n",(0,r.jsxs)(t.p,{children:["Any additional top-level property prefixed with ",(0,r.jsx)(t.code,{children:"ext_"})," may be added to an Overture Maps feature, usually via the conflation of an external dataset and an Overture Maps dataset."]}),"\n",(0,r.jsx)(t.h2,{id:"measurements",children:"Measurements"}),"\n",(0,r.jsxs)(t.p,{children:["Measurements of real-world objects and features follow ",(0,r.jsx)(t.a,{href:"https://www.bipm.org/en/publications/si-brochure",children:"The International System of Units (SI)"}),": heights, widths, lengths, etc. In the Overture Maps schema, these values are provided as scalar numeric value without units such as feet or meters. Overture does this to maximize consistency and predictability."]}),"\n",(0,r.jsx)(t.p,{children:"Quantities specified in regulatory rules, norms and customs follow local specifications wherever possible. In the schema, these values are provided as two-element arrays where the first element is the scalar numeric value and the second value is the units. Overture uses local units of measurement -- feet in the United States and meters in the EU, for example."}),"\n",(0,r.jsx)(t.h2,{id:"data-formats",children:"Data formats"}),"\n",(0,r.jsxs)(t.p,{children:["Overture Maps describes data using a GeoJSON mental model and represents data as GeoJSON features. Overture Maps distributes data as ",(0,r.jsx)(t.a,{href:"https://geoparquet.org/",children:"GeoParquet"}),". This documentation includes many examples of how to work with data stored in GeoParquet files."]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var r=s(7294);const n={},a=r.createContext(n);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);