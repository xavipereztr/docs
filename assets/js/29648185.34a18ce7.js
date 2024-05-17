"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[1214],{19718:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var a=r(74848),o=r(28453);const t={title:"Land cover is live"},s=void 0,l={permalink:"/blog/2024/05/16/land-cover",source:"@site/blog/2024-05-16-land-cover.mdx",title:"Land cover is live",description:"land cover gif",date:"2024-05-16T00:00:00.000Z",tags:[],readingTime:2.385,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Land cover is live"},unlisted:!1,nextItem:{title:"Exploring our beta release",permalink:"/blog/2024/04/22/beta-release"}},d={authorsImageUrls:[]},c=[{value:"Mapmakers rejoice!",id:"mapmakers-rejoice",level:2},{value:"Exploring land cover",id:"exploring-land-cover",level:2}];function i(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"land cover gif",src:r(72390).A+"",width:"1359",height:"580"})}),"\n",(0,a.jsx)(n.h2,{id:"mapmakers-rejoice",children:"Mapmakers rejoice!"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://docs.overturemaps.org/release/latest",children:"May release"})," of Overture Maps includes new high-resolution land cover data ",(0,a.jsx)(n.em,{children:"and"})," new cartographic schema properties."]}),"\n",(0,a.jsxs)(n.p,{children:["Our ",(0,a.jsx)(n.code,{children:"land_cover"})," layer is vectorized data derived from the ",(0,a.jsx)(n.a,{href:"https://esa-worldcover.org/en",children:"European Space Agency\u2019s 2020 WorldCover (10m) rasters"}),". It's similar to the land cover layer in the ",(0,a.jsx)(n.a,{href:"https://daylightmap.org/2023/10/11/landcover.html",children:"Daylight"})," map distribution, but Overture Maps added higher-resolution data (zoom level 15) with more detail and land cover classes. You'll find 10 subtypes in the new data: snow, forest, urban, grass, crop, barren, wetland, moss, mangrove, and shrub."]}),"\n",(0,a.jsxs)(n.p,{children:['Our May release also includes schema properties that offer cartographic "hints" for optimal use of Overture Maps data in mapmaking. We added ',(0,a.jsx)(n.code,{children:"min_zoom"})," and ",(0,a.jsx)(n.code,{children:"max_zoom"})," to define the recommended zooms for each resolution of land cover, using the common \u201cslippy maps\u201d zoom level specification. This is a first step toward improving the user experience for mapmakers. We plan to expand these properties in future releases of Overture Maps data."]}),"\n",(0,a.jsx)(n.h2,{id:"exploring-land-cover",children:"Exploring land cover"}),"\n",(0,a.jsxs)(n.p,{children:["In the example below, we'll show you how to extract, process, and visualize land cover data for an area of interest using ",(0,a.jsx)(n.a,{href:"https://developmentseed.org/lonboard/latest/",children:"lonboard"})," and the Overture Maps Python command-line tool. We recommend that you consult ",(0,a.jsx)(n.a,{href:"https://developmentseed.org/lonboard/latest/examples/overture-maps/",children:"the Overture Maps buildings example"})," in the lonboard docs to better understand the methods used here."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"land cover",src:r(35924).A+"",width:"2841",height:"767"})}),"\n",(0,a.jsxs)(n.p,{children:["You'll need to install ",(0,a.jsx)(n.a,{href:"https://developmentseed.org/lonboard/latest/#install",children:"lonboard"})," and ",(0,a.jsx)(n.a,{href:"https://github.com/OvertureMaps/overturemaps-py",children:"overturemaps-py"})," before you get started."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"#pip install overturemaps\npip install -e . #clone repo and install pre-release version in directory\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import pandas as pd\nimport geopandas as gpd\nimport overturemaps #dev branch, pre-release \nfrom shapely import wkb\nfrom lonboard import Map, PolygonLayer\nfrom lonboard.colormap import apply_categorical_cmap\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# specify bounding box\nbbox =  -78.6429, 39.463, -73.7806, 41.6242\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# read in Overture Maps land_cover data type\ntable = overturemaps.record_batch_reader("land_cover", bbox).read_all()\ntable = table.combine_chunks()\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# convert to dataframe\ndf = table.to_pandas()\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# filter for higher resolution land_cover features\ndf_h = df[df.cartography.apply(lambda x: x['min_zoom'] == 8)]\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# create color map for land_cover subtypes, loosely based on natural-color palette: https://www.shadedrelief.com/shelton/c.html\ncolor_map = {\n    "urban": [167, 162, 186],\n    "forest": [134, 178, 137],\n    "barren": [245, 237, 213],\n    "shrub": [239, 218, 182],\n    "grass": [254, 239, 173],\n    "crop": [222, 223, 154],\n    "wetland": [158, 207, 195], \n    "mangrove": [83, 171, 128],\n    "moss": [250, 230, 160],\n    "snow": [255, 255, 255],\n    #"none": [108, 159, 184],   \n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# apply color map to land_cover subtypes\ncolors = apply_categorical_cmap(df_h.subtype, color_map)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# dataframe to geodataframe, set crs\ngdf = gpd.GeoDataFrame(\n    df_h, \n    geometry=df_h['geometry'].apply(wkb.loads), \n    crs=\"EPSG:4326\"\n)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# reproject to Pennsylvania State Plane (https://epsg.io/2272) \n# gdf = gdf.to_crs(2272)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# create map layer \nlayer = PolygonLayer.from_geopandas(\n    gdf= gdf[['id','subtype', 'cartography', 'geometry']].reset_index(drop=True),\n    get_fill_color=colors,\n    get_line_color=colors,\n)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'#render map\nview_state = {\n    "longitude": -76.2,\n    "latitude": 39.6,\n    "zoom": 8,\n    "pitch": 65,\n    "bearing": 5,\n}\nm = Map(layer, view_state=view_state)\nm\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},72390:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/lc-c21dcecb5a1eb0a0b7ed5428f9c4f694.gif"},35924:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/notebook-overture-lc-9b4cdc6573cb3433034dc8b5de8feb91.png"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var a=r(96540);const o={},t=a.createContext(o);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);