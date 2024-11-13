"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[4091],{76612:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>j,contentTitle:()=>v,default:()=>w,frontMatter:()=>x,metadata:()=>f,toc:()=>y});var t=s(74848),i=s(28453),r=s(21432),a=s(11470),o=s(19365),l=s(21122),c=s(86025);const p="---\nid: overture:transportation:example:geometric-scoping\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates: [[0, 0], [1, 1]]\nproperties:\n  theme: transportation\n  type: segment\n  version: 1\n  subtype: road\n  class: primary\n  speed_limits:\n    - between: [0, 0.15]\n      max_speed:\n        value: 100\n        unit: km/h\n    - between: [0.15, 1]\n      max_speed:\n        value: 60\n        unit: km/h\n",d='---\nid: overture:transportation:example:temporal-scoping\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-122.90019762265949, 49.20784664905824]\n    - [-122.9003738558948, 49.207833436710956]\n    - [-122.90052986564378, 49.207871186265805]\nproperties:\n  theme: transportation\n  type: segment\n  version: 2\n  subtype: road\n  class: unknown\n  access_restrictions:\n    - access_type: denied\n      when:\n        mode: [bus]\n        during: "Mo-Fr 15:00-18:00"\n',h="---\nid: overture:transportation:example:subjective-heading-scoping\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-1.3023158, 54.5579329]\n    - [-1.3020090, 54.5577898]\n    - [-1.3014511, 54.5575155]\n    - [-1.3009618, 54.5572737]\n    - [-1.3004518, 54.5570288]\n    - [-1.3003009, 54.5569580]\nproperties:\n  theme: transportation\n  type: segment\n  version: 2\n  subtype: road\n  class: primary\n  access_restrictions:\n    - access_type: denied\n      when: { heading: backward }\n    - access_type: allowed\n      when:\n        heading: backward\n        mode: [bus]\n",u="---\nid: overture:transportation:example:subjective-usage-purpose-scoping\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-123.12700676422021, 49.279826628301635]\n    - [-123.12680748254229, 49.27995121574301]\nproperties:\n  theme: transportation\n  type: segment\n  version: 1\n  subtype: road\n  class: tertiary\n  access_restrictions:\n    - access_type: denied\n    - access_type: allowed\n      when: { using: [as_customer, at_destination] }\n",g="---\nid: overture:transportation:example:subjective-status-scoping\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-123.12791513926058, 49.287502049554945]\n    - [-123.12795068403449, 49.287522915661725]\n    - [-123.12797769806272, 49.28756882106529]\nproperties:\n  theme: transportation\n  type: segment\n  version: 1\n  subtype: road\n  class: tertiary\n  access_restrictions:\n    - access_type: denied\n    - access_type: allowed\n      when: { recognized: [as_private] }\n",m="---\nid: overture:transportation:example:subjective-vehicle-attributes-scoping\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-123.12791513926058, 49.287502049554945]\n    - [-123.12795068403449, 49.287522915661725]\n    - [-123.12797769806272, 49.28756882106529]\nproperties:\n  theme: transportation\n  type: segment\n  version: 1\n  subtype: road\n  class: residential\n  access_restrictions:\n    - access_type: denied\n      when:\n        vehicle:\n          - dimension: weight\n            comparison: greater_than\n            value: 23\n            unit: 't'\n",x={title:"Scoping rules"},v=void 0,f={id:"schema/concepts/scoping-rules",title:"Scoping rules",description:"Scoped and rule-based properties",source:"@site/docs/schema/concepts/scoping-rules.mdx",sourceDirName:"schema/concepts",slug:"/schema/concepts/scoping-rules",permalink:"/schema/concepts/scoping-rules",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Scoping rules"},sidebar:"schema",previous:{title:"Names",permalink:"/schema/concepts/names"},next:{title:"Reference",permalink:"/schema/reference"}},j={},y=[{value:"Scoped and rule-based properties",id:"scoped-and-rule-based-properties",level:2},{value:"Scoped values and scoping properties",id:"scoped-values-and-scoping-properties",level:3},{value:"Geometric scoping (linear referencing)",id:"geometric-scoping-linear-referencing",level:4},{value:"Temporal scoping (opening hours)",id:"temporal-scoping-opening-hours",level:4},{value:"Subjective scoping",id:"subjective-scoping",level:4},{value:"Travel-mode scoping",id:"travel-mode-scoping",level:4},{value:"Heading",id:"heading",level:4},{value:"Purpose of use scoping",id:"purpose-of-use-scoping",level:4},{value:"Status scoping (membership in a recognized group)",id:"status-scoping-membership-in-a-recognized-group",level:4},{value:"Vehicle attributes scoping",id:"vehicle-attributes-scoping",level:4},{value:"Rules and rule-based properties",id:"rules-and-rule-based-properties",level:2},{value:"Absolute form",id:"absolute-form",level:3},{value:"Rule evaluation algorithm",id:"rule-evaluation-algorithm",level:3}];function b(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"scoped-and-rule-based-properties",children:"Scoped and rule-based properties"}),"\n",(0,t.jsx)(n.p,{children:"In the real world, many facts and rules affecting entities have\nonly a partial application, meaning they don't apply everywhere, or\nthey don't apply at all times, or to everyone, or to all sets of\nexternal conditions. For example, access restrictions on a road segment\nmight not apply to all people or all kinds of vehicles, or they might\nvary according to the day of the week. "}),"\n",(0,t.jsx)(n.p,{children:"The Overture schema uses two related concepts to capture the partial application of facts and rules: scoped values and rule-based properties."}),"\n",(0,t.jsx)(n.h3,{id:"scoped-values-and-scoping-properties",children:"Scoped values and scoping properties"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.em,{children:"scoped"})," value is a value which only applies within a limited scope.\nMost scoped values are rules in the rule lists of\n",(0,t.jsx)(n.a,{href:"#rules-and-rule-based-properties",children:"rule-based properties"}),". However,\nscoped values also exist outside of rule-based properties. For\nexample, a signpost property belonging to a road segment might be\ngeometrically scoped to its position along the road."]}),"\n",(0,t.jsxs)(n.p,{children:["The scope in which a scoped value applies is controlled by one or more\nspecial child properties of the value known as ",(0,t.jsx)(n.em,{children:"scoping"})," properties."]}),"\n",(0,t.jsx)(n.h4,{id:"geometric-scoping-linear-referencing",children:"Geometric scoping (linear referencing)"}),"\n",(0,t.jsxs)(a.default,{children:[(0,t.jsxs)(o.default,{value:"description",label:"Description",default:!0,children:[(0,t.jsxs)(n.p,{children:["The geometric scoping properties ",(0,t.jsx)(n.code,{children:"at"})," and ",(0,t.jsx)(n.code,{children:"between"})," limit the scope of their parent value to a position or range of positions, respectively, along a segment's geometry. When the parent value is a rule object, the rule only matches the position or range of positions specified in the ",(0,t.jsx)(n.code,{children:"at"})," or ",(0,t.jsx)(n.code,{children:"between"})," property."]}),(0,t.jsxs)(n.p,{children:["The value of the ",(0,t.jsx)(n.code,{children:"at"})," property is a single real number ",(0,t.jsx)(n.code,{children:"a"})," where ",(0,t.jsx)(n.code,{children:"0"})," \u2264 ",(0,t.jsx)(n.code,{children:"a"}),"\n\u2264 ",(0,t.jsx)(n.code,{children:"1"}),". It represents a discrete position along the segment's geometry. The\nvalue of the ",(0,t.jsx)(n.code,{children:"between"})," property is a pair of numbers ",(0,t.jsx)(n.code,{children:"[a, b]"})," where ",(0,t.jsx)(n.code,{children:"0"})," \u2264\n",(0,t.jsx)(n.code,{children:"a"})," < ",(0,t.jsx)(n.code,{children:"b"})," \u2264 ",(0,t.jsx)(n.code,{children:"1"}),". It represents a range of positions along the segment's\ngeometry. The numbers ",(0,t.jsx)(n.code,{children:"a"})," and ",(0,t.jsx)(n.code,{children:"b"})," are interpreted as percentage displacements\nalong the parent segment's geometry starting from the start of the segment.\n(",(0,t.jsxs)(n.em,{children:['The terms "start" and "end" are explained in\n',(0,t.jsx)(n.a,{href:"https://docs.overturemaps.org/guides/transportation/shape-connectivity",children:"Shape and connectivity"}),"."]}),")"]}),(0,t.jsxs)(n.p,{children:["So, for example, the scoping property ",(0,t.jsx)(n.code,{children:'"at": 0.15'})," scopes its parent value\nto the position on the segment that is displaced 15% of the segment length from\nthe start."]}),(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsxs)("figure",{children:[(0,t.jsx)(l.A,{alt:"Diagram showing a single geometrically-scoped position",sources:{light:(0,c.A)("/img/transportation/geometric-scoping-position-light.svg"),dark:(0,c.A)("/img/transportation/geometric-scoping-position-dark.svg")}}),(0,t.jsx)("figcaption",{children:(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["The position along the segment geometry described by ",(0,t.jsx)(n.code,{children:'"at": 0.15'}),"."]})})})})]})}),(0,t.jsxs)(n.p,{children:["The scoping property ",(0,t.jsx)(n.code,{children:'"between": [0.35, 0.75]'})," scopes its parent value to the\nrange of positions on the segment beginning at 35% and extending to 75% of the\nsegment length from the start."]}),(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsxs)("figure",{children:[(0,t.jsx)(l.A,{alt:"Diagram showing a geometrically-scoped range",sources:{light:(0,c.A)("/img/transportation/geometric-scoping-range-light.svg"),dark:(0,c.A)("/img/transportation/geometric-scoping-range-dark.svg")}}),(0,t.jsx)("figcaption",{children:(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["The range on the segment geometry described by ",(0,t.jsx)(n.code,{children:'"between": [0.35, 0.75]'}),"."]})})})})]})})]}),(0,t.jsxs)(o.default,{value:"example",label:"Example",default:!0,children:[(0,t.jsx)(n.p,{children:"The example below shows a road segment whose speed limit is defined by\ntwo geometrically-scoped speed limit rules:"}),(0,t.jsx)(r.default,{language:"yaml",children:p})]})]}),"\n",(0,t.jsx)(n.h4,{id:"temporal-scoping-opening-hours",children:"Temporal scoping (opening hours)"}),"\n",(0,t.jsxs)(a.default,{children:[(0,t.jsxs)(o.default,{value:"description",label:"Description",default:!0,children:[(0,t.jsxs)(n.p,{children:["The temporal, or time-based, scoping construct ",(0,t.jsx)(n.code,{children:'when: { during: "..." }'})," limits\nthe scope of its parent value to one or more recurring time ranges. When the\nparent value is a rule object, the rule only matches the time range or time\nranges specified in the ",(0,t.jsx)(n.code,{children:"during"})," property."]}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"during"})," property must contain a string expressed in the OpenStreetMap\n",(0,t.jsx)(n.a,{href:"https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification",children:"opening hours specification"}),"."]})]}),(0,t.jsxs)(o.default,{value:"example",label:"Example",default:!0,children:[(0,t.jsx)(n.p,{children:"The example below shows a road segment with a temporally-scoped access\nrestriction rule. The rule states that non-bus travellers are prohibited\nfrom access to the segment on weekdays between 3PM and 6PM."}),(0,t.jsx)(r.default,{language:"yaml",children:d})]})]}),"\n",(0,t.jsx)(n.h4,{id:"subjective-scoping",children:"Subjective scoping"}),"\n",(0,t.jsxs)(n.p,{children:["Subjective scoping means that the scope of a property can be constrained based\non subjective factors like ",(0,t.jsx)(n.em,{children:"who"})," or ",(0,t.jsx)(n.em,{children:"what"})," is travelling on the transportation\nnetwork, or ",(0,t.jsx)(n.em,{children:"how"})," they are doing it."]}),"\n",(0,t.jsx)(n.p,{children:"The Overture transportation schema supports the following subjective factors:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#travel-mode-scoping",children:"Travel mode"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#heading",children:"Heading"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#purpose-of-use-scoping",children:"Purpose of use"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#status-scoping-membership-in-a-recognized-group",children:"Status or membership in a recognized group"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#vehicle-attributes-scoping",children:"Vehicle attributes"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The sub-headings below explain each of these subjective factors in greater\ndetail."}),"\n",(0,t.jsx)(n.h4,{id:"travel-mode-scoping",children:"Travel-mode scoping"}),"\n",(0,t.jsx)(n.p,{children:"A travel mode is a way of moving about the transportation network, for\nexample driving in a motor vehicle, or, more specifically, driving in a\nhigh-occupancy vehicle."}),"\n",(0,t.jsxs)(n.p,{children:["The property construct ",(0,t.jsx)(n.code,{children:"when: { mode: [...] }"})," limits the scope its\nparent value to apply only to people or things travelling using the\nlisted travel modes."]}),"\n",(0,t.jsxs)(n.p,{children:["To dive deeper into this topic, see the page on ",(0,t.jsx)(n.a,{href:"https://docs.overturemaps.org/guides/transportation/travel-modes",children:"travel modes"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"heading",children:"Heading"}),"\n",(0,t.jsxs)(a.default,{children:[(0,t.jsxs)(o.default,{value:"description",label:"Description",default:!0,children:[(0,t.jsxs)(n.p,{children:["Heading scoping limits the the scope of a parent value to apply only\nwhen the traveller is proceeding along the segment geometry in the named\ndirection, either ",(0,t.jsx)(n.code,{children:"forward"})," or ",(0,t.jsx)(n.code,{children:"backward"}),". (",(0,t.jsxs)(n.em,{children:["The directions ",(0,t.jsx)(n.code,{children:"forward"}),"\nand ",(0,t.jsx)(n.code,{children:"backward"})," are defined on the ",(0,t.jsx)(n.a,{href:"https://docs.overturemaps.org/guides/transportation/shape-connectivity",children:"shape and connectivity"})," page."]}),")"]}),(0,t.jsxs)(n.p,{children:["The property construct ",(0,t.jsx)(n.code,{children:"when: { heading: forward|backward }"})," applies\nheading scoping to a parent value."]})]}),(0,t.jsxs)(o.default,{value:"example",label:"Example",default:!0,children:[(0,t.jsx)(n.p,{children:"The example below shows a road segment with multiple heading-scoped\naccess restriction rules. The rules allow all standard travel modes for\nthe segment class to travel in the forward direction, but only allow\nbuses to travel in the backward direction."}),(0,t.jsx)(r.default,{language:"yaml",children:h})]})]}),"\n",(0,t.jsx)(n.h4,{id:"purpose-of-use-scoping",children:"Purpose of use scoping"}),"\n",(0,t.jsxs)(a.default,{children:[(0,t.jsxs)(o.default,{value:"description",label:"Description",default:!0,children:[(0,t.jsx)(n.p,{children:"Usage purpose scoping limits the scope of a parent value to apply only\nwhen the user is using the feature for one of the listed purposes. This\ntype of scoping is common when it matters that a person is in the\nprocess of doing something like making a delivery or acting as the\ncustomer of a business."}),(0,t.jsxs)(n.p,{children:["The property construct ",(0,t.jsx)(n.code,{children:"when: { using: [...] }"})," applies usage purpose\nscoping to a parent value."]})]}),(0,t.jsxs)(o.default,{value:"example",label:"Example",default:!0,children:[(0,t.jsx)(n.p,{children:"The example below shows a road segment representing a hotel driveway\nwhere through traffic is not permitted (only usage by hotel customers\nor as a final destination is allowed):"}),(0,t.jsx)(r.default,{language:"yaml",children:u})]})]}),"\n",(0,t.jsx)(n.h4,{id:"status-scoping-membership-in-a-recognized-group",children:"Status scoping (membership in a recognized group)"}),"\n",(0,t.jsxs)(a.default,{children:[(0,t.jsxs)(o.default,{value:"description",label:"Description",default:!0,children:[(0,t.jsx)(n.p,{children:"Status scoping limits the scope of a parent value to apply only when the\nuser has a certain recognized status or is a member of a recognized\ngroup. This type of scoping is useful when it matters whether a person\nor thing has a recognized characteristic, such as holding a permit or\nbeing an employee of a business or student at an academic institution."}),(0,t.jsxs)(n.p,{children:["The property construct ",(0,t.jsx)(n.code,{children:"when: { recognized: [...] }"})," applies status\nscoping to a parent value."]})]}),(0,t.jsxs)(o.default,{value:"example",label:"Example",default:!0,children:[(0,t.jsx)(n.p,{children:"The example below shows a road segment modeling a private condominium\ntower driveway where access is denied to the general public, but allowed\nto privately-authorized individuals, such as condo unit owners:"}),(0,t.jsx)(r.default,{language:"yaml",children:g})]})]}),"\n",(0,t.jsx)(n.h4,{id:"vehicle-attributes-scoping",children:"Vehicle attributes scoping"}),"\n",(0,t.jsxs)(a.default,{children:[(0,t.jsxs)(o.default,{value:"description",label:"Description",default:!0,children:[(0,t.jsx)(n.p,{children:"Vehicle attribute scoping limits the scope of a parent value to apply\nonly when the vehicle in use meets certain criteria."}),(0,t.jsxs)(n.p,{children:["The property construct ",(0,t.jsx)(n.code,{children:"when: { vehicle: [{ dimension: ..., comparison: ..., value: ... }] }"})," applies vehicle\nattributes scoping to a parent value."]}),(0,t.jsxs)(n.p,{children:["Note that vehicle attribute scoping can overlap to some degree with\n",(0,t.jsx)(n.a,{href:"#travel-mode-scoping",children:"travel mode scoping"}),'. For example, some access\nrules may be scoped to the travel mode "heavy goods vehicle", while\nanother equivalent access rule could be scoped to the vehicle attribute\n"gross vehicle weight".']})]}),(0,t.jsx)(o.default,{value:"example",label:"Example",default:!0,children:(0,t.jsx)(r.default,{language:"yaml",children:m})})]}),"\n",(0,t.jsx)(n.h2,{id:"rules-and-rule-based-properties",children:"Rules and rule-based properties"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.em,{children:"rule-based"})," property is a property whose value in a given situation is\ndetermined by evaluating a list of rules against the facts applicable to that\nsituation. Each individual rule in the list of rules is itself a scoped value,\na scoped value, and the assessment of which rule applies to a given set of facts\nis done by the rule evaluation algorithm."]}),"\n",(0,t.jsx)(n.h3,{id:"absolute-form",children:"Absolute form"}),"\n",(0,t.jsx)(n.p,{children:"There are cases when specifying a property value using rules makes sense, and\ncases where doing so is unnecessarily complicated because the real-world entity\nbeing modeled has a single unchanging state which is the same in all fact\nsituations. In these cases, most rule-based properties support a simpler\nabsolute form without a list of rules."}),"\n",(0,t.jsx)("div",{style:{clear:"both"}}),"\n",(0,t.jsx)(n.h3,{id:"rule-evaluation-algorithm",children:"Rule evaluation algorithm"}),"\n",(0,t.jsx)(n.p,{children:"Given a rule-based property, the actual value of the property in a given fact\npattern is determined by a three-step process: first, all matching rules are\nidentified; second, the single determining rule is chosen if possible; lastly,\nif there is no applicable rule, an appropriate default value may be assumed."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Matching rules."})," For a given rule and a given set of facts, the rule\n",(0,t.jsx)(n.em,{children:"matches"})," the facts if the scope of the rule contains all the facts, ",(0,t.jsx)(n.em,{children:"i.e."}),"\nthe facts fit within all of the scoping properties expressed in the rule. The\nmatching criteria for a rule can be thought of as the logical AND of all the\nscoping properties expressed in the rule."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Determining rule."})," For a given rule-based property and a given set of\nfacts, ",(0,t.jsx)(n.em,{children:"at most"})," one rule can ",(0,t.jsx)(n.em,{children:"determine"})," the property value. If only one\nrule matches, that rules determines the property value. If more than one rule\nmatches, the last matching rule in the list determines the value. (This is\nsimilar to how OpenStreetMap ",(0,t.jsx)(n.a,{href:"https://wiki.openstreetmap.org/wiki/Conditional_restrictions",children:"conditional restrictions"}),"\nevaluated.) Therefore it is important to write more general rules before more\nspecific ones in a rule list."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fallback to default."})," If there are no matching rules, an appropriate\ndefault value may apply, depending on the property being evaluated."]}),"\n"]})]})}function w(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}}}]);