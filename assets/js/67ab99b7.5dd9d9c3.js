"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[9084],{44308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=n(74848),s=n(28453),r=n(21122),o=n(86025);const a={title:"Shape and connectivity"},l="Shape and connectivity",c={id:"schema/concepts/by-theme/transportation/shape-connectivity",title:"Shape and connectivity",description:"The Overture transportation theme captures the physical shape and connectivity",source:"@site/docs/schema/concepts/by-theme/transportation/shape-connectivity.mdx",sourceDirName:"schema/concepts/by-theme/transportation",slug:"/schema/concepts/by-theme/transportation/shape-connectivity",permalink:"/schema/concepts/by-theme/transportation/shape-connectivity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Shape and connectivity"},sidebar:"schema",previous:{title:"Roads",permalink:"/schema/concepts/by-theme/transportation/roads"},next:{title:"Travel modes",permalink:"/schema/concepts/by-theme/transportation/travel-modes"}},d={},h=[{value:"Connectors",id:"connectors",level:2},{value:"Segments",id:"segments",level:2},{value:"Physical connectivity",id:"physical-connectivity",level:3},{value:"Start, end, and orientation",id:"start-end-and-orientation",level:3},{value:"Heading",id:"heading",level:3},{value:"Directionality",id:"directionality",level:3},{value:"Sub-types",id:"sub-types",level:3},{value:"Level (Z-order)",id:"level-z-order",level:3},{value:"Segmentation",id:"segmentation",level:2},{value:"Shape stability",id:"shape-stability",level:3},{value:"Overture ID stability",id:"overture-id-stability",level:3},{value:"Interior connectors",id:"interior-connectors",level:3},{value:"Geometric scoping",id:"geometric-scoping",level:3},{value:"Loops",id:"loops",level:3}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"shape-and-connectivity",children:"Shape and connectivity"}),"\n",(0,i.jsx)(t.p,{children:"The Overture transportation theme captures the physical shape and connectivity\nof the transportation network through the interaction of the theme's two feature\ntypes: segments and connectors."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsxs)("figure",{children:[(0,i.jsx)(r.A,{alt:"Three segments physically joined by a connector",sources:{light:(0,o.A)("/img/transportation/network-light.png"),dark:(0,o.A)("/img/transportation/network-dark.png")}}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"A connector physically joining three segments."})})})]})}),"\n",(0,i.jsx)(t.h2,{id:"connectors",children:"Connectors"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/schema/reference/transportation/connector",children:"connector"})," feature type carries point geometry which describes a location where a physical connection between two or more segments occurs (or may occur in the\nfuture)."]}),"\n",(0,i.jsx)(t.p,{children:"Connectors have no properties apart from geometry and standard Overture\nfeature properties. All other aspects of the transportation theme are\nmodeled on segments."}),"\n",(0,i.jsx)(t.h2,{id:"segments",children:"Segments"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/schema/reference/transportation/segment",children:"segment"})," feature type carries ",(0,i.jsx)(t.code,{children:"LineString"})," geometry which describes the physical shape of a section of the transportation network. A segment may represent an entity with a\ntangible real-world existence, such as a paved road; or it may represent\nan intangible entity, such as a ferry route, which has a well-known\nshape but no observable presence in the real world."]}),"\n",(0,i.jsx)(t.h3,{id:"physical-connectivity",children:"Physical connectivity"}),"\n",(0,i.jsx)(t.p,{children:"Two or more segments are physically connected at a given connector if\neach segment's connectors property contains a reference to the\nconnector."}),"\n",(0,i.jsx)(t.p,{children:"The connector geometry's coordinates should preferably be contained\nwithin the segment geometry's coordinates, in which case the connector\ncoordinates define the point of physical connection. This constraint\nwill always be met by official Overture data releases. Where this is not\npossible, the point of physical connection is the closest point to the\nconnector coordinates which intersects the segment geometry."}),"\n",(0,i.jsx)(t.p,{children:"Conversely, two segments are not physically connected if their\nconnectors properties do not reference a shared connector, even if\ntheir geometries overlap or even share a coordinate in common."}),"\n",(0,i.jsx)(t.p,{children:"Travel from a point on one segment to a point on another\nphysically-connected segment is allowed, unless limited by an explicit\nrestriction such as an access or turn restriction."}),"\n",(0,i.jsx)(t.p,{children:"All segments in official Overture transportation data releases have a\nminimum of two connectors, one at each end of the geometry, even if\nthose endpoint connectors are not attached to any other segment. This is\nnot a mandatory minimum and is not enforced by the schema. It is done\nto allow new segments to connect into the existing network without\nneeding to change the properties of existing segments."}),"\n",(0,i.jsx)(t.h3,{id:"start-end-and-orientation",children:"Start, end, and orientation"}),"\n",(0,i.jsx)(t.p,{children:"The first coordinate in a segment's geometry is the start of the\nsegment and the last coordinate is the end. A segment is oriented\naway from the start and toward the end. The examples below show two\nsegment geometries with identical coordinates, oriented in opposite\ndirections."}),"\n",(0,i.jsx)("div",{style:{width:"49.5%",float:"left"},children:(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"type: LineString\ncoordinates:\n  - [1, 0]   # Start\n  - [0, 0]\n  - [-1, 0]  # End\n"})}),(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(r.A,{alt:"West-oriented segment geometry",sources:{light:(0,o.A)("/img/transportation/oriented-west-light.svg"),dark:(0,o.A)("/img/transportation/oriented-west-dark.svg")}})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This segment geometry is oriented due west."})})})})]})}),"\n",(0,i.jsx)("div",{style:{width:"49.5%",float:"right"},children:(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"type: LineString\ncoordinates:\n  - [-1, 0]  # Start\n  - [0, 0]\n  - [1, 0]   # End\n"})}),(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(r.A,{alt:"East-oriented segment geometry",sources:{light:(0,o.A)("/img/transportation/oriented-east-light.svg"),dark:(0,o.A)("/img/transportation/oriented-east-dark.svg")}})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This segment geometry is oriented due east."})})})})]})}),"\n",(0,i.jsx)("div",{style:{clear:"both"}}),"\n",(0,i.jsx)(t.h3,{id:"heading",children:"Heading"}),"\n",(0,i.jsx)(t.p,{children:"Travel along a segment's geometry can follow one of two possible\nheadings: forward or backward. The forward heading proceeds\ntoward the end of the segment; while the backward heading proceeds\nback toward the start of the segment."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsxs)("figure",{children:[(0,i.jsx)(r.A,{alt:"Travel heading along a segment oriented due east.",sources:{light:(0,o.A)("/img/transportation/heading-light.svg"),dark:(0,o.A)("/img/transportation/heading-dark.svg")}}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Travel heading along a segment."})})})]})}),"\n",(0,i.jsx)(t.h3,{id:"directionality",children:"Directionality"}),"\n",(0,i.jsx)(t.p,{children:"\ud83d\udea7 We are developing a segment-level directionality concept to indicate what travel headings are allowed or prohibited along the segment. This effort is\nongoing, so please check back soon."}),"\n",(0,i.jsx)(t.h3,{id:"sub-types",children:"Sub-types"}),"\n",(0,i.jsxs)(t.p,{children:["Segment features have a ",(0,i.jsx)(t.code,{children:"subtype"})," property whose value gives more\nspecific information about the segment's role within the transportation\nnetwork."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"subtype"})," property may be one of ",(0,i.jsx)(t.code,{children:"road"}),", ",(0,i.jsx)(t.code,{children:"rail"}),", or ",(0,i.jsx)(t.code,{children:"water"})," but\nonly ",(0,i.jsx)(t.code,{children:"road"})," is currently well defined. A ",(0,i.jsx)(t.code,{children:"road"})," segment models any kind\nof road, street, or trail, including a dedicated path for walking,\ncycling and similar activities. For more information about ",(0,i.jsx)(t.code,{children:"road"})," segments, see the page on ",(0,i.jsx)(t.a,{href:"/schema/concepts/by-theme/transportation/roads",children:"roads"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"level-z-order",children:"Level (Z-order)"}),"\n",(0,i.jsx)(t.p,{children:"Segment geometry is two-dimensional. In the real, 3D, world, however the\nentities represented by segments can be above or below each other, as\nmay happen with tunnels, bridges, overpasses, and stacked multi-level\nhighway interchanges. To accurately render top-down 2D maps, it is\nimportant to know the relative stacking order, or Z-order, of segments."}),"\n",(0,i.jsxs)(t.p,{children:["Segment Z-order is given by the ",(0,i.jsx)(t.code,{children:"level"})," property. A ",(0,i.jsx)(t.code,{children:"level"})," value of\n",(0,i.jsx)(t.code,{children:"0"})," indicates visual level, with positive numbers indicating above\nvisual level, negative numbers indicating below visual level, and in\ngeneral, a lesser number indicating a lower position in the stacking\norder than a greater number."]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsxs)("figure",{children:[(0,i.jsx)(r.A,{alt:"Level 0 segments stacked above level -1 segments.",sources:{light:(0,o.A)("/img/transportation/level-light.png"),dark:(0,o.A)("/img/transportation/level-dark.png")}}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Ground level segments stacking above tunnel segments."})})})]})}),"\n",(0,i.jsxs)(t.p,{children:["Note that two segments with different ",(0,i.jsx)(t.code,{children:"level"})," values may be physically\nconnected, since ",(0,i.jsx)(t.code,{children:"level"})," is an approximation for rendering and is not\nmeant be a precise indication of elevation at different points along the\nsegment. Connectors do not have a ",(0,i.jsx)(t.code,{children:"level"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"segmentation",children:"Segmentation"}),"\n",(0,i.jsx)(t.p,{children:"The term segmentation describes the process of converting upstream source data\ninto Overture transportation shape and connectivity data modeled as segments and\nconnectors."}),"\n",(0,i.jsx)(t.h3,{id:"shape-stability",children:"Shape stability"}),"\n",(0,i.jsx)(t.p,{children:"A primary goal of Overture's segmentation process is to promote stability of\nsegment shape across Overture data releases. For example, if a certain\nreal-world stretch of Main Street is represented by a single segment with\nparticular geometry in release 1, we will strive to avoid slicing the exact same\ngeometry up into two, three, or four segments in release 2."}),"\n",(0,i.jsx)(t.p,{children:"Note that aiming for segment shape stability categorically does not mean that\nOverture aims for a stable transportation dataset. On the contrary, we aim to\ncontinuously improve data accuracy and coverage, and expect the transportation\nnetwork dataset to constantly evolve and grow as a result. Our goal is simply\nto minimize unnecessary, semantically meaningless, changes in how the geometry\nis sliced into segments across data releases."}),"\n",(0,i.jsx)(t.p,{children:"Several features of the transportation theme schema were designed to allow the\nsegmentation process to achieve its segment stability goal. These features\ninclude:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#interior-connectors",children:"interior connectors"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#geometric-scoping",children:"geometrically scoped"})," segment properties."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"overture-id-stability",children:"Overture ID stability"}),"\n",(0,i.jsxs)(t.p,{children:["Overture pursues shape stability to improve the ability to assess whether two segments from different points in time (or from different upstream data\nsources) represent the same real world entity. Overture's success at this assessment directly feeds into the stability and precision of ",(0,i.jsx)(t.a,{href:"https://docs.overturemaps.org/gers",children:"Overture IDs"})," assigned to segments. In turn, higher Overture ID stability and precision makes transportation theme data more useful for conflation."]}),"\n",(0,i.jsx)(t.h3,{id:"interior-connectors",children:"Interior connectors"}),"\n",(0,i.jsx)(t.p,{children:"A key feature of the Overture transportation schema which enables shape\nstability is the ability of segments to support connectors at interior positions\nalong their geometry, not only at their endpoints. The ability to add internal\nconnectors prevents the segmentation process from having to blindly follow every\nsplit or join introduced in upstream source data."}),"\n",(0,i.jsxs)(t.p,{children:["For example, imagine a square city block bordered by road on all four sides has\nbeen mapped in the source data, but a back alley dividing the block along the\neast-west axis has not. If the back alley is subsequently mapped in the source\ndata, the Overture segmentation process can connect to the transportation\nnetwork without having to subdivide any existing segments by simply introducing\ninternal connectors on the north-south road segments bordering the block to the east and west. As a result, the ",(0,i.jsx)(t.a,{href:"https://docs.overturemaps.org/gers",children:"Overture IDs"})," of the north-south road segments remain as they were and no data needs to be re-conflated."]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("div",{style:{width:"50%",float:"left",textAlign:"center"},children:(0,i.jsx)(r.A,{alt:"A city block without with back alley omitted.",sources:{light:(0,o.A)("/img/transportation/interior-connectors-before-light.png"),dark:(0,o.A)("/img/transportation/interior-connectors-before-dark.png")}})}),(0,i.jsx)("div",{style:{width:"50%",float:"right",textAlign:"center"},children:(0,i.jsx)(r.A,{alt:"A city block after adding a new back alley segment.",sources:{light:(0,o.A)("/img/transportation/interior-connectors-after-light.png"),dark:(0,o.A)("/img/transportation/interior-connectors-after-dark.png")}})}),(0,i.jsx)("div",{style:{clear:"both"}}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"A square city block bordered by four roads before (left) and after (right) mapping the back alley using internal connectors."})})})})]}),"\n",(0,i.jsx)(t.p,{children:"Note that in the above example, an official Overture data release would insert\ncoordinates in the middle of the north-south segments, if they did not already\nexist, because Overture data releases will always ensure that every segment's\ngeometry includes all of its connectors. From a computer's perspective, this is\na very minor alteration of the segment's shape."}),"\n",(0,i.jsx)(t.h3,{id:"geometric-scoping",children:"Geometric scoping"}),"\n",(0,i.jsxs)(t.p,{children:["Many segment properties may include a linear reference so that they apply only\nto a part of the segment geometry. We refer to these linearly-referenced\nproperty values as being geometrically scoped and discuss geometric scoping at greater length in the page on ",(0,i.jsx)(t.a,{href:"/schema/concepts/scoping-rules",children:"scoped properties"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Geometric scoping allows the segmentation algorithm to avoid introducing\nsegment splits simply because a certain property has different values along\ndifferent parts of the geometry. Like interior connectors, geometrically-scoped\nproperties enable the segmentation process to make decisions that promote shape\nstability, ultimately resulting in more precise and stable ",(0,i.jsx)(t.a,{href:"https://docs.overturemaps.org/gers",children:"Overture IDs"})," and less churn in conflated data."]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsxs)("figure",{children:[(0,i.jsx)(r.A,{alt:"A single segment with a geometrically-scoped speed limit",sources:{light:(0,o.A)("/img/transportation/geometrically-scoped-speed-limit-light.png"),dark:(0,o.A)("/img/transportation/geometrically-scoped-speed-limit-dark.png")}}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"A single segment with multiple geometrically-scoped speed limit values."})})})]})}),"\n",(0,i.jsx)(t.h3,{id:"loops",children:"Loops"}),"\n",(0,i.jsx)(t.p,{children:"Although it is technically possible to use the Overture schema to express a\nsegment forming a connected loop, such loops are considered invalid and will\nnever be produced by the segmentation algorithm."}),"\n",(0,i.jsxs)(t.p,{children:["An illegal loop where one of a segment connects to the other end can be\ncorrected by splitting the segment and introducing a second connector to\nmaintain physical connectivity. An illegal self-crossing loop of degree ",(0,i.jsx)(t.em,{children:"N"}),"\ncan be corrected by splitting the segment into N pieces."]}),"\n",(0,i.jsx)("div",{style:{width:"49.5%",float:"left",textAlign:"center"},children:(0,i.jsxs)("figure",{children:[(0,i.jsx)("div",{style:{width:"50%",float:"left"},children:(0,i.jsx)(r.A,{alt:"Illegal circular loop.",sources:{light:(0,o.A)("/img/transportation/circle-looped-light.png"),dark:(0,o.A)("/img/transportation/circle-looped-dark.png")}})}),(0,i.jsx)("div",{style:{width:"50%",float:"left"},children:(0,i.jsx)(r.A,{alt:"One possible correction for illegal circular loop.",sources:{light:(0,o.A)("/img/transportation/circle-unlooped-light.png"),dark:(0,o.A)("/img/transportation/circle-unlooped-dark.png")}})}),(0,i.jsx)("div",{style:{clear:"both"}}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"An illegal loop connected at its endpoints (left) and a possible correction (right)."})})})})]})}),"\n",(0,i.jsx)("div",{style:{width:"49.5%",float:"right",textAlign:"center"},children:(0,i.jsxs)("figure",{children:[(0,i.jsx)("div",{style:{width:"50%",float:"left"},children:(0,i.jsx)(r.A,{alt:"Illegal self-crossing loop.",sources:{light:(0,o.A)("/img/transportation/crossing-looped-light.png"),dark:(0,o.A)("/img/transportation/crossing-looped-dark.png")}})}),(0,i.jsx)("div",{style:{width:"50%",float:"left"},children:(0,i.jsx)(r.A,{alt:"One possible correction to self-crossing loop.",sources:{light:(0,o.A)("/img/transportation/crossing-unlooped-light.png"),dark:(0,o.A)("/img/transportation/crossing-unlooped-dark.png")}})}),(0,i.jsx)("div",{style:{clear:"both"}}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"An illegal self-crossing loop (left) and a possible correction (right)."})})})})]})}),"\n",(0,i.jsx)("div",{style:{clear:"both"}})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);