"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[2574],{30071:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(74848),t=n(28453);n(11470),n(19365);const o={description:"fetch and visualize Overture data with Lonboard",title:"Overture + Lonboard"},s=void 0,l={id:"examples/lonboard",title:"Overture + Lonboard",description:"fetch and visualize Overture data with Lonboard",source:"@site/docs/examples/lonboard.mdx",sourceDirName:"examples",slug:"/examples/lonboard",permalink:"/examples/lonboard",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1730485335e3,frontMatter:{description:"fetch and visualize Overture data with Lonboard",title:"Overture + Lonboard"},sidebar:"docs",previous:{title:"Overture + Pandas",permalink:"/examples/pandas"},next:{title:"Overture + Fused",permalink:"/examples/fused"}},d={},i=[{value:"Examples",id:"examples",level:2},{value:"GeoArrow",id:"geoarrow",level:3},{value:"GeoPandas",id:"geopandas",level:3},{value:"<code>geodataframe</code> method in overturemaps-py",id:"geodataframe-method-in-overturemaps-py",level:3},{value:"Next steps",id:"next-steps",level:2}];function h(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:o}=a;return o||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["In this example, we'll walk through three ways to fetch, process, and visualize Overture data in a Jupyter notebook using ",(0,r.jsx)(a.a,{href:"https://developmentseed.org/lonboard/latest/",children:"Lonboard"})," and the ",(0,r.jsx)(a.a,{href:"https://github.com/OvertureMaps/overturemaps-py",children:"overturemaps-py"})," library. ",(0,r.jsx)(a.a,{href:"https://developmentseed.org/lonboard/latest/",children:"Lonboard"})," is a Python library that makes visualizing large map datasets in Jupyter notebooks fast and efficient. It's built on ",(0,r.jsx)(a.a,{href:"https://geoarrow.org/",children:"GeoArrow"})," and ",(0,r.jsx)(a.a,{href:"https://arrow.apache.org/docs/python/index.html",children:"GeoParquet"}),", which creates an opportunity for a fully binary workflow with Overture data."]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Installation requirements"})})}),(0,r.jsxs)(a.p,{children:["To follow along with these examples, you should have ",(0,r.jsx)(a.a,{href:"https://jupyter.org/",children:"JupyterLab or Jupyter Notebook"})," running and the following dependencies installed:"]}),(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://developmentseed.org/lonboard/latest/#install",children:"Lonboard"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://github.com/OvertureMaps/overturemaps-py",children:"overturemaps-py"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://geopandas.org/en/stable/index.html",children:"GeoPandas"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://pandas.pydata.org/",children:"Pandas"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://shapely.readthedocs.io/en/stable/",children:"Shapely"})}),"\n"]})]}),"\n",(0,r.jsxs)(a.p,{children:["The examples below are available in ",(0,r.jsx)(a.a,{href:"//github.com/OvertureMaps/docs/tree/main/static/notebooks",children:"the notebooks directory"})," in our docs repository on GitHub."]}),"\n",(0,r.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(a.p,{children:["In the first and simplest example, we'll use the ",(0,r.jsx)(a.a,{href:"https://github.com/OvertureMaps/overturemaps-py/blob/e9632d4d2481a472a22dfd2d0a47ec9798ced9ef/overturemaps/core.py#L17",children:"record_batch_reader"})," method in the overturemaps-py library to load Overture GeoParquet data directly into a PyArrow table. Then we'll use lonboard's built-in visualization tools to create an interactive map."]}),"\n",(0,r.jsx)(a.h3,{id:"geoarrow",children:"GeoArrow"}),"\n",(0,r.jsx)(a.p,{children:"First, let's import our toolkit."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"import overturemaps\nfrom lonboard import Map, PathLayer\n"})}),"\n",(0,r.jsx)(a.p,{children:"Next we'll get a bounding box for our area of interest."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"# specify bounding box in Milan\nbbox = 1.9402,48.7091,2.7784,49.0599\n"})}),"\n",(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.code,{children:"record_batch_reader"})," function accepts an Overture feature type and a bounding box as arguments. Let's grab some road data for Milan."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'# need feature type and bounding box as arguments\ntable = overturemaps.record_batch_reader("segment", bbox).read_all()\ntable = table.combine_chunks()\n'})}),"\n",(0,r.jsx)(a.p,{children:"We can inspect shape of the data."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"table.shape\n"})}),"\n",(0,r.jsx)(a.p,{children:"We can also dig into the complexity of the Overture transportation schema."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"table.schema\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Lonboard includes many built-in tools for visualizing map data. Here we're using ",(0,r.jsx)(a.a,{href:"https://developmentseed.org/lonboard/latest/api/layers/path-layer/",children:"PathLayer"})," to render the segment features. Then we can set parameters for our interactive map display."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'layer = PathLayer(\n    table=table.select(["id", "geometry", "subtype", "class", "names"]),\n    get_color=[200, 0, 200],\n    width_min_pixels=0.4,\n)\n\nview_state = {\n    "longitude": 9.18831,\n    "latitude": 45.464336,\n    "zoom": 12,\n}\nm = Map(layer, view_state=view_state)\nm\n'})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"roads in Milan",src:n(7502).A+"",width:"2346",height:"1254"})}),"\n",(0,r.jsx)(a.h3,{id:"geopandas",children:"GeoPandas"}),"\n",(0,r.jsx)(a.p,{children:"In the second example, we'll add a few steps in the notebook to convert the PyArrow table to a GeoPandas GeoDataFrame. Getting the data into a GeoDataFrame requires a few more tools, depending on which methods we use. Here's our expanded toolkit:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"import overturemaps\nimport pandas\nimport geopandas as gpd\nfrom shapely import wkb\nfrom lonboard import Map, PolygonLayer\n"})}),"\n",(0,r.jsx)(a.p,{children:"We'll use the same bounding box for Milan."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"# specify bounding box\nbbox = 1.9402, 48.7091, 2.7784, 49.0599\n"})}),"\n",(0,r.jsxs)(a.p,{children:["And we'll use the ",(0,r.jsx)(a.code,{children:"record_bath_reader"})," method to pull the data into a PyArrow table. This time we'll grab buildings data."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'# need feature type and bounding box as arguments\ntable = overturemaps.record_batch_reader("building", bbox).read_all()\ntable = table.combine_chunks()\n'})}),"\n",(0,r.jsx)(a.p,{children:"Converting the table to a Pandas DataFrame is straightforward."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"# convert to dataframe\ndf = table.to_pandas()\n"})}),"\n",(0,r.jsxs)(a.p,{children:["But we need an extra step to create the GeoDataFrame. Specifically we need to convert to the geometry to a ",(0,r.jsx)(a.a,{href:"https://shapely.readthedocs.io/en/stable/geometry.html",children:"Shapely geometry"})," as we load into a GeoDataFrame."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"# DataFrame to GeoDataFrame, set crs\ngdf = gpd.GeoDataFrame(\n    df,\n    geometry=df['geometry'].apply(wkb.loads),\n    crs=\"EPSG:4326\"\n)\n"})}),"\n",(0,r.jsxs)(a.p,{children:["We'll use Lonboard's ",(0,r.jsx)(a.a,{href:"https://developmentseed.org/lonboard/latest/api/layers/polygon-layer/",children:"PolygonLayer"})," to render the buildings. The we'll set the parameters for our interactive map display."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'\nlayer = PolygonLayer.from_geopandas(\n    gdf= gdf[[\'id\', \'geometry\', \'names\']].reset_index(drop=True),\n    get_fill_color=[93, 103, 157],\n    get_line_color=[0, 128, 128],\n)\n\nview_state = {\n    "longitude": 9.18831,\n    "latitude": 45.464336,\n    "zoom": 13,\n    "pitch": 45,\n}\nm = Map(layer, view_state=view_state)\nm\n'})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"buildings in Milan",src:n(77934).A+"",width:"2732",height:"1256"})}),"\n",(0,r.jsxs)(a.h3,{id:"geodataframe-method-in-overturemaps-py",children:[(0,r.jsx)(a.code,{children:"geodataframe"})," method in overturemaps-py"]}),"\n",(0,r.jsxs)(a.p,{children:["In the last example, we'll use the ",(0,r.jsxs)(a.a,{href:"https://github.com/OvertureMaps/overturemaps-py/blob/main/overturemaps/core.py#L51",children:[(0,r.jsx)(a.code,{children:"geodataframe"})," method"]})," in the overturemaps-py library to pull Overture data directly into a GeoDataFrame. This method handles all the conversions internally, making our lives easier and our notebooks cleaner."]}),"\n",(0,r.jsx)(a.p,{children:"Here's the toolkit:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"import geopandas\nfrom overturemaps import core\nfrom lonboard import Map, ScatterplotLayer\n"})}),"\n",(0,r.jsx)(a.p,{children:"Once again, we'll use the bounding box in Milan."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"# specify bounding box\nbbox = 9.106105, 45.427315, 9.263542, 45.5164\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Direct to GeoDataFrame using the ",(0,r.jsx)(a.code,{children:"geodataframe"})," method!"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'# read in Overture place feature type, direct to geodataframe\ngdf = core.geodataframe("place", bbox=bbox)\n'})}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.a,{href:"https://developmentseed.org/lonboard/latest/api/layers/scatterplot-layer/",children:"ScatterplotLayer"})," to render the point data and create an interactive map display in the notebook."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'# create map layer\nlayer = ScatterplotLayer.from_geopandas(\n    gdf,\n    get_fill_color=[0, 128, 128],\n    radius_min_pixels = 1.5,\n)\n\nview_state = {\n    "longitude": 9.18831,\n    "latitude": 45.464336,\n    "zoom": 13,\n    "pitch": 45,\n}\nm = Map(layer)\nm\n'})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"places in Milan",src:n(629).A+"",width:"2734",height:"1258"})}),"\n",(0,r.jsx)(a.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["For a more complex example with Lonboard and Overture data, head over to the ",(0,r.jsx)(a.a,{href:"https://developmentseed.org/lonboard/latest/examples/overture-maps/",children:"Lonboard docs"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Check out the example with land cover data and Lonboard on our engineering ",(0,r.jsx)(a.a,{href:"https://docs.overturemaps.org/blog/2024/05/16/land-cover/",children:"blog"}),"."]}),"\n"]})]})}function c(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},77934:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/buildings-milan-d67fb84658c3c178c6cdf6e2f44742a9.png"},629:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/places-milan-2c21226f90c4de6aa0e0615b708a12ba.png"},7502:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/road-network-milan-7185f89f06cb9ae2fcc906a1f14639d3.png"}}]);