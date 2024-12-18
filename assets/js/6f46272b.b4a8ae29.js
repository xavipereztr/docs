"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[5404],{30204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>i,toc:()=>m});let i=JSON.parse('{"id":"schema/concepts/by-theme/buildings/index","title":"Buildings schema concepts","description":"Overview","source":"@site/docs/schema/concepts/by-theme/buildings/index.mdx","sourceDirName":"schema/concepts/by-theme/buildings","slug":"/schema/concepts/by-theme/buildings/","permalink":"/schema/concepts/by-theme/buildings/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Buildings schema concepts"},"sidebar":"schema","previous":{"title":"Base schema concepts","permalink":"/schema/concepts/by-theme/base/"},"next":{"title":"3D Parts","permalink":"/schema/concepts/by-theme/buildings/3d_buildings"}}');var r=t(74848),a=t(28453),l=t(74235),s=t(15947),o=t(48821);let d={title:"Buildings schema concepts"},c=void 0,h={},m=[{value:"Overview",id:"overview",level:2},{value:"Feature types",id:"feature-types",level:2},{value:"Theme concepts",id:"theme-concepts",level:2},{value:"Properties Derived from OpenStreetMap Tags",id:"properties-derived-from-openstreetmap-tags",level:3},{value:"Building Heights from OpenStreetMap",id:"building-heights-from-openstreetmap",level:3},{value:"Parsing &amp; Conversion",id:"parsing--conversion",level:4},{value:"Schema reference",id:"schema-reference",level:2}];function u(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The Overture buildings theme captures the compilation of many building attributes from a variety of open data sources including OpenStreetMap, Esri Community Maps, Microsoft, and Google."}),"\n",(0,r.jsx)(n.h2,{id:"feature-types",children:"Feature types"}),"\n",(0,r.jsx)(n.p,{children:"The buildings theme has two feature types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"building"})," is a polygon or multipolygon geometry that represents the building's footprint (or roofprint, if traced from imagery)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"building_part"})," is a polygon that describes part of a building. These come from the OSM features with the tag ",(0,r.jsx)(n.code,{children:"building:part=yes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"theme-concepts",children:"Theme concepts"}),"\n",(0,r.jsxs)(n.p,{children:["Both building and building_part types may have many ",(0,r.jsx)(n.strong,{children:"shape"})," related properties. These are useful for expressing the physical shape characteristics of the buidling including ",(0,r.jsx)(n.code,{children:"roof_height"}),", ",(0,r.jsx)(n.code,{children:"roof_shape"}),", ",(0,r.jsx)(n.code,{children:"roof_material"}),", ",(0,r.jsx)(n.code,{children:"facade_material"}),", etc."]}),"\n",(0,r.jsx)(n.h3,{id:"properties-derived-from-openstreetmap-tags",children:"Properties Derived from OpenStreetMap Tags"}),"\n",(0,r.jsxs)(n.p,{children:["In OpenStreetMap, an object is defined as a building by the presence of ",(0,r.jsx)(n.code,{children:"building"})," tag. Most commonly, the value is simply, ",(0,r.jsx)(n.code,{children:"building=yes"}),". However, in cases where there is a more descriptive value, we capture that information along with other building attributes such as height, roof shape, material, etc. and map them to a finite list of values defined in the building schema."]}),"\n",(0,r.jsx)(n.p,{children:"You can see the SQL query logic that transforms OSM tags into Overture properties for each of these attributes below:"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"How do I interpret these queries?"}),(0,r.jsxs)(n.p,{children:["Each ",(0,r.jsx)(n.code,{children:"WHEN"})," line in the ",(0,r.jsx)(n.code,{children:"CASE"})," statement is a condition that defines the value of the Overture property. For example:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"WHEN lower(trim(element_at(tags, 'building'))) IN ('clinic','hospital') THEN 'medical'\n"})}),(0,r.jsxs)(n.p,{children:["Here, ",(0,r.jsx)(n.code,{children:"lower(trim(element_at(tags, 'building')))"})," is accessing the value of the ",(0,r.jsx)(n.code,{children:"building"})," tag in OSM (and ensuring it is lowercase). Therefore, when either the ",(0,r.jsx)(n.code,{children:"building=clinic"})," or ",(0,r.jsx)(n.code,{children:"building=hospital"})," tag is present, the statement returns ",(0,r.jsx)(n.code,{children:"medical"}),". In this case, this defines the ",(0,r.jsx)(n.strong,{children:"subtype"})," for a medical building."]})]}),"\n",(0,r.jsxs)(l.default,{children:[(0,r.jsx)(s.default,{value:"Subtype",children:(0,r.jsx)(o.A,{query:"CASE\n    -- Prioritize the `building` tag to determine the subtype\n    -- Agricultural\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'agricultural',\n        'barn',\n        'cowshed',\n        'farm',\n        'farm_auxiliary',\n        'glasshouse',\n        'greenhouse',\n        'silo',\n        'stable',\n        'sty'\n    ) THEN 'agricultural'\n\n    -- Civic\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'civic',\n        'fire_station',\n        'government',\n        'government_office',\n        'public'\n    ) THEN 'civic'\n\n    -- Commercial\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'commercial',\n        'hotel',\n        'kiosk',\n        'marketplace',\n        'office',\n        'restaurant',\n        'retail',\n        'shop',\n        'supermarket',\n        'warehouse'\n    ) THEN 'commercial'\n\n    -- Education\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'college',\n        'kindergarten',\n        'school',\n        'university'\n    ) THEN 'education'\n\n    -- Entertainment\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'grandstand',\n        'pavilion',\n        'sports_centre',\n        'sports_hall',\n        'stadium'\n    ) THEN 'entertainment'\n\n    -- Industrial\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'factory',\n        'industrial',\n        'manufacture'\n    ) THEN 'industrial'\n\n    -- Medical\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'clinic',\n        'hospital'\n    ) THEN 'medical'\n\n    -- Military\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'bunker',\n        'military'\n    ) THEN 'military'\n\n    -- Outbuilding\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'allotment_house',\n        'carport',\n        'roof',\n        'outbuilding',\n        'shed'\n    ) THEN 'outbuilding'\n\n    -- Religious\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'cathedral',\n        'chapel',\n        'church',\n        'monastery',\n        'mosque',\n        'presbytery',\n        'religious',\n        'shrine',\n        'synagogue',\n        'temple',\n        'wayside_shrine'\n    ) THEN 'religious'\n\n    -- Residential\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'apartments',\n        'bungalow',\n        'cabin',\n        'detached',\n        'dormitory',\n        'duplex',\n        'dwelling_house',\n        'garage',\n        'garages',\n        'ger',\n        'house',\n        'houseboat',\n        'hut',\n        'residential',\n        'semi',\n        'semidetached_house',\n        'static_caravan',\n        'stilt_house',\n        'terrace',\n        'townhouse',\n        'trullo'\n    ) THEN 'residential'\n\n    -- Service\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'beach_hut',\n        'boathouse',\n        'digester',\n        'guardhouse',\n        'service',\n        'slurry_tank',\n        'storage_tank',\n        'toilets',\n        'transformer_tower'\n    ) THEN 'service'\n\n    -- Transportation\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n        'hangar',\n        'parking',\n        'train_station',\n        'transportation'\n    ) THEN 'transportation'\n\n    -- Consider any amenity / tourism tags if no other building tag was present\n    WHEN lower(trim(element_at(tags, 'amenity'))) IN (\n        'nursing_home'\n    ) THEN 'residential'\n\n    WHEN lower(trim(element_at(tags, 'amenity'))) IN (\n        'bus_station',\n        'parking'\n    ) THEN 'transportation'\n\n    WHEN lower(trim(element_at(tags, 'amenity'))) IN (\n        'place_of_worship'\n    ) THEN 'religious'\n\n    WHEN lower(trim(element_at(tags, 'amenity'))) IN (\n        'clinic',\n        'dentist',\n        'doctors',\n        'hospital',\n        'pharmacy'\n    ) THEN 'medical'\n\n    WHEN lower(trim(element_at(tags, 'amenity'))) IN (\n        'casino',\n        'conference_centre',\n        'events_venue',\n        'cinema',\n        'theatre',\n        'arts_centre',\n        'nightclub'\n    ) THEN 'entertainment'\n\n    WHEN lower(trim(element_at(tags, 'tourism'))) IN (\n        'aquarium',\n        'attraction',\n        'gallery',\n        'museum'\n    ) THEN 'entertainment'\n\n    WHEN lower(trim(element_at(tags, 'amenity'))) IN (\n        'bar',\n        'cafe',\n        'fast_food',\n        'food_court',\n        'fuel',\n        'ice_cream',\n        'pub',\n        'restaurant'\n    ) THEN 'commercial'\n\n    WHEN lower(trim(element_at(tags, 'amenity'))) IN (\n        'animal_shelter',\n        'community_centre',\n        'courthouse',\n        'fire_station',\n        'library',\n        'police',\n        'post_office',\n        'public_bath',\n        'public_building',\n        'ranger_station',\n        'shelter',\n        'social_centre',\n        'townhall',\n        'veterinary'\n    ) THEN 'civic'\n\n    WHEN lower(trim(element_at(tags, 'amenity'))) IN (\n        'college',\n        'driving_school',\n        'kindergarten',\n        'music_school',\n        'school',\n        'university'\n    ) THEN 'education'\n\n    -- buildings that are part of bridge structures\n    WHEN  lower(trim(element_at(tags, 'bridge:support'))) <> 'no'\n    THEN 'transportation'\n\n    WHEN lower(trim(element_at(tags, 'bridge:structure'))) <> 'no'\n    THEN 'transportation'\n\n    ELSE NULL\nEND"})}),(0,r.jsx)(s.default,{value:"Class",children:(0,r.jsx)(o.A,{query:"CASE\n    -- Prioritize these amenity tags when present because they are also used to determine subtype:\n    WHEN lower(trim(element_at(tags, 'amenity'))) IN (\n        'library',\n        'parking',\n        'post_office'\n    ) THEN lower(trim(element_at(tags, 'amenity')))\n\n    -- Certain building tags become the class value to further describe the building subtype\n    WHEN lower(trim(element_at(tags, 'building'))) IN (\n\n        -- Agricultural\n        'agricultural',\n        'barn',\n        'cowshed',\n        'farm',\n        'farm_auxiliary',\n        'glasshouse',\n        'greenhouse',\n        'silo',\n        'stable',\n        'sty',\n\n        -- Civic\n        'civic',\n        'fire_station',\n        'government',\n        'public',\n\n        --Commercial\n        'commercial',\n        'hotel',\n        'kiosk',\n        'office',\n        'retail',\n        'supermarket',\n        'warehouse',\n\n        --Education\n        'college',\n        'kindergarten',\n        'school',\n        'university',\n\n        --Entertainment\n        'grandstand',\n        'pavilion',\n        'sports_centre',\n        'sports_hall',\n        'stadium',\n\n        --Industrial\n        'factory',\n        'industrial',\n        'manufacture',\n\n        --Medical\n        'hospital',\n\n        --Military\n        'bunker',\n        'military',\n\n        --Outbuilding\n        'allotment_house',\n        'carport',\n        'roof',\n        'outbuilding',\n        'shed',\n\n        --Religious\n        'cathedral',\n        'chapel',\n        'church',\n        'monastery',\n        'mosque',\n        'presbytery',\n        'religious',\n        'shrine',\n        'synagogue',\n        'temple',\n        'wayside_shrine',\n\n        --Residential\n        'apartments',\n        'bungalow',\n        'cabin',\n        'detached',\n        'dormitory',\n        'dwelling_house',\n        'garage',\n        'garages',\n        'ger',\n        'house',\n        'houseboat',\n        'hut',\n        'residential',\n        'semi',\n        'semidetached_house',\n        'static_caravan',\n        'stilt_house',\n        'terrace',\n        'trullo',\n\n        --Service\n        'beach_hut',\n        'boathouse',\n        'digester',\n        'guardhouse',\n        'service',\n        'slurry_tank',\n        'storage_tank',\n        'toilets',\n        'transformer_tower',\n\n        -- Transportation\n        'hangar',\n        'parking',\n        'train_station',\n        'transportation'\n    ) THEN lower(trim(element_at(tags, 'building')))\n\n    -- Certain building are part of bridge structures\n    WHEN lower(trim(element_at(tags, 'bridge:support'))) <> 'no'\n    THEN 'bridge_structure'\n\n    WHEN lower(trim(element_at(tags, 'bridge:structure'))) <> 'no'\n    THEN 'bridge_structure'\n\n    -- No other allowed classes\n    ELSE NULL\nEND"})}),(0,r.jsx)(s.default,{value:"Facade",children:(0,r.jsx)(o.A,{query:"CASE\n    WHEN lower(trim(element_at(tags, 'building:material'))) IN (\n        'brick',\n        'slate',\n        'ladrillos',\n        'masonry',\n        'silicate brick',\n        'bricks',\n        'unburnt brick',\n        'silicate_brick',\n        'brick_block',\n        'muddy_brick'\n    ) THEN 'brick'\n    WHEN lower(trim(element_at(tags, 'building:material'))) IN (\n        'cement_block',\n        'block',\n        'cement block',\n        'cement_blocks',\n        'cement blocks'\n    ) THEN 'cement_block'\n    WHEN lower(trim(element_at(tags, 'building:material'))) IN (\n        'clay',\n        'mud',\n        'rammed_earth',\n        'loam',\n        'earth',\n        'grass',\n        'pressed_soil_blocks'\n    ) THEN 'clay'\n    WHEN lower(trim(element_at(tags, 'building:material'))) IN (\n        'concrete',\n        'concrete masonry unit',\n        'cement',\n        'concrete_reinforced',\n        'reinforced_concrete'\n    ) THEN 'concrete'\n    WHEN lower(trim(element_at(tags, 'building:material'))) IN (\n        'glass',\n        'mirror'\n    ) THEN 'glass'\n    WHEN lower(trim(element_at(tags, 'building:material'))) IN (\n        'metal',\n        'steel',\n        'metal_plates',\n        'tin',\n        'iron_sheet',\n        'copper',\n        'metal_sheet',\n        'ironsheets',\n        'panel',\n        'aluminium'\n    ) THEN 'metal'\n    WHEN lower(trim(element_at(tags, 'building:material'))) IN (\n        'plaster',\n        'plastered',\n        'hard'\n    ) THEN 'plaster'\n    WHEN lower(trim(element_at(tags, 'building:material'))) IN (\n        'plastic',\n        'vinyl',\n        'plastic_sheeting',\n        'composite',\n        'vinyl_siding'\n    ) THEN 'plastic'\n    WHEN lower(trim(element_at(tags, 'building:material'))) IN (\n        'stone',\n        'limestone',\n        'sandstone',\n        'granite',\n        'marble',\n        'tiles'\n    ) THEN 'stone'\n    WHEN lower(trim(element_at(tags, 'building:material'))) IN (\n        'timber_framing',\n        'traditional'\n    ) THEN 'timber_framing'\n    WHEN lower(trim(element_at(tags, 'building:material'))) IN (\n        'wood',\n        'reed',\n        'wattle_and_daub',\n        'timber_planks',\n        'wood/masonry',\n        'wood/bamboo',\n        'bamboo'\n    ) THEN 'wood'\n\n    -- when building:material isn't usable then try building:facade:material\n\n    WHEN lower(trim(element_at(tags, 'building:facade:material'))) IN (\n        'brick',\n        'slate',\n        'ladrillos',\n        'masonry',\n        'silicate brick',\n        'bricks',\n        'unburnt brick',\n        'silicate_brick',\n        'brick_block',\n        'muddy_brick'\n    ) THEN 'brick'\n    WHEN lower(trim(element_at(tags, 'building:facade:material'))) IN (\n        'cement_block',\n        'block',\n        'cement block',\n        'cement_blocks',\n        'cement blocks'\n    ) THEN 'cement_block'\n    WHEN lower(trim(element_at(tags, 'building:facade:material'))) IN (\n        'clay',\n        'mud',\n        'rammed_earth',\n        'loam',\n        'earth',\n        'grass',\n        'pressed_soil_blocks'\n    ) THEN 'clay'\n    WHEN lower(trim(element_at(tags, 'building:facade:material'))) IN (\n        'concrete',\n        'concrete masonry unit',\n        'cement',\n        'concrete_reinforced',\n        'reinforced_concrete'\n    ) THEN 'concrete'\n    WHEN lower(trim(element_at(tags, 'building:facade:material'))) IN (\n        'glass',\n        'mirror'\n    ) THEN 'glass'\n    WHEN lower(trim(element_at(tags, 'building:facade:material'))) IN (\n        'metal',\n        'steel',\n        'metal_plates',\n        'tin',\n        'iron_sheet',\n        'copper',\n        'metal_sheet',\n        'ironsheets',\n        'panel',\n        'aluminium'\n    ) THEN 'metal'\n    WHEN lower(trim(element_at(tags, 'building:facade:material'))) IN (\n        'plaster',\n        'plastered',\n        'hard'\n    ) THEN 'plaster'\n    WHEN lower(trim(element_at(tags, 'building:facade:material'))) IN (\n        'plastic',\n        'vinyl',\n        'plastic_sheeting',\n        'composite',\n        'vinyl_siding'\n    ) THEN 'plastic'\n    WHEN lower(trim(element_at(tags, 'building:facade:material'))) IN (\n        'stone',\n        'limestone',\n        'sandstone',\n        'granite',\n        'marble',\n        'tiles'\n    ) THEN 'stone'\n    WHEN lower(trim(element_at(tags, 'building:facade:material'))) IN (\n        'timber_framing',\n        'traditional'\n    ) THEN 'timber_framing'\n    WHEN lower(trim(element_at(tags, 'building:facade:material'))) IN (\n        'wood',\n        'reed',\n        'wattle_and_daub',\n        'timber_planks',\n        'wood/masonry',\n        'wood/bamboo',\n        'bamboo'\n    ) THEN 'wood'\n    ELSE NULL\nEND"})}),(0,r.jsx)(s.default,{value:"Roof Shape",children:(0,r.jsx)(o.A,{query:"CASE\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'dome'\n    ) THEN 'dome'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'flat'\n    ) THEN 'flat'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'gambrel'\n    ) THEN 'gambrel'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'gabled',\n        'pitched',\n        'crosspiched',\n        'double_pitch',\n        'gabled_height_moved',\n        'hip-and-gabled',\n        'gable',\n        'gabled_row',\n        'round_gabled',\n        'dutch_gabled',\n        'monopitch',\n        '2 faces (pitched)',\n        '2 face (pitched)',\n        'gabeled',\n        'gabed',\n        'gambled',\n        'double_gabled',\n        'gabred',\n        'cross_gabled'\n    ) THEN 'gabled'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'half-hipped',\n        'half_hipped'\n    ) THEN 'half_hipped'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'hipped',\n        'side_hipped',\n        'hyped',\n        'equal_hipped',\n        '4 faces (hipped)',\n        'side_half-hipped',\n        'side_half_hipped'\n    ) THEN 'hipped'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'mansard'\n    ) THEN 'mansard'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'onion',\n        'cone',\n        'conical'\n    ) THEN 'onion'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'pyramidal'\n    ) THEN 'pyramidal'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'round'\n    ) THEN 'round'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'saltbox',\n        'double_saltbox',\n        'quadruple_saltbox'\n    ) THEN 'saltbox'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'sawtooth'\n    ) THEN 'sawtooth'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'skillion',\n        'lean_to',\n        'triple_skillion'\n    ) THEN 'skillion'\n    WHEN lower(trim(element_at(tags, 'roof:shape'))) IN (\n        'spherical'\n    ) THEN 'spherical'\n    ELSE NULL\nEND"})}),(0,r.jsx)(s.default,{value:"Roof Material",children:(0,r.jsx)(o.A,{query:"CASE\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'asphalt_shingle',\n        'asphalt',\n        'concrete slab',\n        'concrete',\n        'rcc'\n    ) THEN 'concrete'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'copper'\n    ) THEN 'copper'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'a/c sheets',\n        'asbestos',\n        'eternit'\n    ) THEN 'eternit'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'glass',\n        'acrylic_glass'\n    ) THEN 'glass'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'grass',\n        'plants',\n        'roof_greening'\n    ) THEN 'grass'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'gravel'\n    ) THEN 'gravel'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'corrugated_iron_sheets',\n        'corrugated_iron',\n        'corrugated',\n        'iron_sheet',\n        'metal_sheet',\n        'metal:sheet',\n        'metal',\n        'tin',\n        'zinc',\n        'zink'\n    ) THEN 'metal'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'plastic',\n        'composite'\n    ) THEN 'plastic'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'roof_tiles',\n        'tile',\n        'tiles',\n        'roof-tiles',\n        'clay_tiles'\n    ) THEN 'roof_tiles'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'brick',\n        'marble',\n        'sandstone',\n        'slate',\n        'stone'\n    ) THEN 'slate'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'solar_panels'\n    ) THEN 'solar_panels'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'tar_paper'\n    ) THEN 'tar_paper'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'cadjan_palmyrah_straw',\n        'thatch'\n    ) THEN 'thatch'\n    WHEN lower(trim(element_at(tags, 'roof:material'))) IN (\n        'wood',\n        'wooden'\n    ) THEN 'wood'\n    ELSE NULL\nEND"})})]}),"\n",(0,r.jsx)(n.h3,{id:"building-heights-from-openstreetmap",children:"Building Heights from OpenStreetMap"}),"\n",(0,r.jsx)(n.p,{children:"There are multiple ways to describe the height of an object in OSM. Overture, however, defines height as the number of meters from the ground to the tallest point of the feature. Therefore, we must parse and convert from the OSM string value."}),"\n",(0,r.jsx)(n.p,{children:"We look for height values in the following OSM tags:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"height"})," - The overall height of a building or building part."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"est_height"})," - The estimated height of a building or building part."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"min_height"})," - The minimum height of a building part."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"roof_height"})," - The height of the roof of a building or building part."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The OSM wiki specifically lists the following height values as valid: ",(0,r.jsx)(n.code,{children:"4"}),", ",(0,r.jsx)(n.code,{children:"4 m"}),", ",(0,r.jsx)(n.code,{children:"1.35"}),", ",(0,r.jsx)(n.code,{children:"7'4\""}),".  However, there are many other formats present in the data that should be considered."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Comprehensive list of different height tag formats in OSM"}),(0,r.jsx)(n.p,{children:"As of June 2024:"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Format"}),(0,r.jsx)(n.th,{children:"Count"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X"})}),(0,r.jsx)(n.td,{children:"16,222,092"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X m"})}),(0,r.jsx)(n.td,{children:"615,927"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X meter"})}),(0,r.jsx)(n.td,{children:"212"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X metre"})}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X'"})}),(0,r.jsx)(n.td,{children:"142,366"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X ft"})}),(0,r.jsx)(n.td,{children:"721"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X feet"})}),(0,r.jsx)(n.td,{children:"7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X'Y\""})}),(0,r.jsx)(n.td,{children:"2,432"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'X"'})}),(0,r.jsx)(n.td,{children:"6"})]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"parsing--conversion",children:"Parsing & Conversion"}),"\n",(0,r.jsx)(n.p,{children:"There are a handful of common formatting issues that we generally allow when parsing height values including leading / trailing white space and incorrectly placed decimal points. We apply the following regular expressions to determine the unit of measurement and then perform the appropriate conversion:"}),"\n",(0,r.jsxs)(l.default,{children:[(0,r.jsxs)(s.default,{value:"No Units",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"^\\s*\\d+(\\.\\d*)?\\s*$\n"})}),(0,r.jsx)(n.p,{children:"Height strings that contain only a number value with no indicated units are\nassumed to be meters. These values are not rounded.\nExamples:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10"})," => 10"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"  10 "})," => 10"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10.0"})," => 10"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10."})," => 10"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10.6543"})," => 10.6543"]}),"\n"]})]}),(0,r.jsxs)(s.default,{value:"Metric",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"^\\s*\\d+(\\.\\d*)?\\s*(m|meter|metre)s?\\s*$\n"})}),(0,r.jsxs)(n.p,{children:["Height strings with a number follwed by a metric unit that matches the singular\nor plural version form of ",(0,r.jsx)(n.code,{children:"m"}),", ",(0,r.jsx)(n.code,{children:"meter"}),", and ",(0,r.jsx)(n.code,{children:"metre"})," strings after the number are\nalso treated as meters and the units are stripped. These values are not rounded.\nExamples:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10m"})," => 10"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:" 10 meters"})," => 10"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10.0 metre "})," => 10"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10. meter"})," => 10"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10.6543meter"})," => 10.6543"]}),"\n"]})]}),(0,r.jsxs)(s.default,{value:"Imperial",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"^\\s*\\d+(\\.\\d*)?\\s*(''|ft|feet)\\s*$\n^\\s*\\d+(\\.\\d*)?\\s*''\\s*\\d+(\\.\\d*)?\\s*\"\\s*$\n^\\s*\\d+(\\.\\d*)?\"\\s*$\n"})}),(0,r.jsxs)(n.p,{children:["Height strings with a number followed by an imperial unit are matched and converted to meters. Strings that are recognized as indicating units of feet are ",(0,r.jsx)(n.code,{children:"'"}),", ",(0,r.jsx)(n.code,{children:"ft"}),", and ",(0,r.jsx)(n.code,{children:"feet"}),". Strings that are recognized as indicating units of inches are ",(0,r.jsx)(n.code,{children:'"'}),". Inches and feet are matched in combination with each other or alone. When both feet and inches are indicated the ",(0,r.jsx)(n.code,{children:"'"})," string must be used to indicate feet and the inches value and ",(0,r.jsx)(n.code,{children:'"'})," string must be after the feet value. These values are then converted into meters by multiplying feet by ",(0,r.jsx)(n.code,{children:"0.3048"}),". Inches are multiplied by ",(0,r.jsx)(n.code,{children:"0.0254"}),". The final meters value is then rounded to two decimal places."]}),(0,r.jsx)(n.p,{children:"Examples:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10'"})," => 3.05"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10.65 ft"})," => 3.25"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10.65 feet "})," => 3.25"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10. '"})," => 3.05"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10.65feet"})," => 3.05"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10' 13\""})," => 3.38"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10'  13\" "})," => 3.38"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10'13\""})," => 3.38"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10' 13\""})," => 3.38"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10'  13\" "})," => 3.38"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"10'13\""})," => 3.38"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"schema-reference",children:"Schema reference"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/schema/reference/buildings/building",children:"Explore the schema for the building feature type"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/schema/reference/buildings/building_part",children:"Explore the schema for the building_part feature type"})}),"\n"]})]})}function g(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},48821:(e,n,t)=>{t.d(n,{A:()=>l});var i=t(74848),r=t(76634),a=t(90062);function l(e){let{siteConfig:{customFields:n}}=(0,a.A)();var t=e.query.replace("__OVERTURE_RELEASE",n.overtureRelease);t=(t=t.replace("__ATHENA_OVERTURE_RELEASE","v"+n.overtureRelease.replaceAll(".","_").replaceAll("-","_"))).replace("__PMTILES_OVERTURE_RELEASE",n.overtureRelease.split(".",1));var l=e.language||"sql";return(0,i.jsx)(r.default,{language:l,title:e.title,children:t})}}}]);