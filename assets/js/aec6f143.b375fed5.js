"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[338],{80315:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/10/21/preview-october-release","metadata":{"permalink":"/blog/2024/10/21/preview-october-release","source":"@site/blog/2024-10-21-preview-october-release.mdx","title":"What to expect in Overture\u2019s October release","description":"Overture Maps Data Blog","date":"2024-10-21T00:00:00.000Z","tags":[],"readingTime":1.595,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"What to expect in Overture\u2019s October release","description":"Overture Maps Data Blog"},"unlisted":false,"nextItem":{"title":"What to expect in Overture\u2019s August release","permalink":"/blog/2024/08/15/preview-august-release"}},"content":"This week Overture is [releasing](https://docs.overturemaps.org/release/latest/) datasets that include new \\naddresses across ten countries, new road features in Saudi Arabia and Italy from TomTom, \\nand new building height data from Microsoft and Esri Community Maps contributors. Here\'s a preview of what you\'ll find in our October release.\\n\\n\x3c!--truncate--\x3e\\n\\n| ![H3 cells addresses](/img/blog/address-coverage-h3-october.png) |\\n|:--:|\\n| *H3 coverage map of Overture addresses* |\\n\\n## Addresses around the world\\nIn July, Overture [launched](https://docs.overturemaps.org/release/2024-07-22.0/#new-theme-addresses) our addresses theme \\nwith 200 million features in 14 countries. Since then, \\nwe\u2019ve added data for ten additional countries, bringing the total feature count to over 344 million. \\nWe\u2019re building on great work by the open data community, including folks on the [OpenAddresses](https://openaddresses.io/)\\nand [AddressForAll](https://www.addressforall.org/en/) projects. \\n\\nAnd now we\'re excited to include another new source of open data for the U.S. Previously, Overture pulled all address data \\nin the United States from the [Department of Transportation\u2019s National \\nAddress Database (NAD)](https://www.transportation.gov/gis/national-address-database). \\nOver the September and October releases, we developed a cut-and-replace workflow to swap NAD data in New York City \\nwith data from [NYC Open Data](https://opendata.cityofnewyork.us/). Local data FTW! This is a process \\nwe will continue to refine so that we can more \\neasily fold in new data across all [Overture themes](https://docs.overturemaps.org/guides/).\\n\\n## Roads and building heights\\nAlso in the October release, you\u2019ll find new data from [TomTom](https://www.tomtom.com/), representing more than 30,000 kilometers of roads in Saudi Arabia \\nand Italy. We also added new building height data from both Microsoft and [Esri Community Maps contributors](https://communitymaps.arcgis.com/home/). \\nThese updates highlight Overture\u2019s goal to improve data quality and coverage by incorporating new data into each release, \\nwith a focus on [data sources](https://docs.overturemaps.org/attribution/) that have permissive open-source licenses.\\n\\nPlease [reach out to us on GitHub](https://github.com/OvertureMaps/data/discussions) with questions and feedback about our data. \\nIf you have a suggestion for a new dataset or if you have data you\'d like to contribute, you can email us at **data AT overturemaps.org**. We\u2019d love to hear from you."},{"id":"/2024/08/15/preview-august-release","metadata":{"permalink":"/blog/2024/08/15/preview-august-release","source":"@site/blog/2024-08-15-preview-august-release.mdx","title":"What to expect in Overture\u2019s August release","description":"Last month we released v1.0.0 of the Overture schema and \u201cgeneral availability\u201d versions of four themes:","date":"2024-08-15T00:00:00.000Z","tags":[],"readingTime":4.36,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"What to expect in Overture\u2019s August release"},"unlisted":false,"prevItem":{"title":"What to expect in Overture\u2019s October release","permalink":"/blog/2024/10/21/preview-october-release"},"nextItem":{"title":"Exploring Overture data, no SQL required","permalink":"/blog/2024/07/24/explore-site"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\nLast month we released [v1.0.0 of the Overture schema and \u201cgeneral availability\u201d versions of four themes](https://overturemaps.org/overture-maps-foundation-releases-general-availability-of-its-open-maps-datasets/):\\nbase, buildings, divisions, and places. Our [addresses theme](https://docs.overturemaps.org/guides/addresses/) launched in alpha with 200 million addresses\\nfor 14 countries; we anticipate adding more address data each month, country by country, starting with\\nSwitzerland in the August release.\\n\\nThe [transportation theme](https://docs.overturemaps.org/guides/transportation/) remains in beta and we expect to make significant changes over the next couple\\nmonths. In this post, we\'ll give you a preview of three key improvements to the transportation schema in the August\\nrelease, **which will be available next week**.\\n\\n## Transportation schema changes\\nThe schema changes we plan to implement over the next few releases will better support routing and map\\ndisplay use cases, and make it easier for our users to integrate Overture transportation data into their\\npipelines and products. These improvements are necessary if we are to achieve our goal of a GA release in October.\\nHere are the steps we\'re taking in the August release to move us toward that goal.\\n\\n### Subclasses\\n\\n| ![Diagram of class and subclass structures](/img/blog/class-subclass-diagram.png) |\\n|:--:|\\n| *A diagram of the new class and subclass structures* |\\n\\nWe [added a new `subclass` property](https://github.com/OvertureMaps/schema/pull/180) that refines the descriptions of segments by:\\n\\n- clearly specifying the usage of a length of road, and using linear referencing instead of further segmentation to pinpoint a change in how the road is used\\n- properly classifying detailed information from OpenStreetMap\\n\\nSubclasses require non-overlapping geometries, which will make it easier for routing engines to consume our\\nroad data and generate turn-by-turn directions. The new class and subclass structures allow us to capture more\\ninformation about roads from our data sources. For example, we\u2019ve been able\\nto move more than 30 million \u201cunknown\u201d road segments from OSM into the new subclasses, laying the groundwork\\nfor richer and more detailed map displays with Overture data.\\n\\nHere\'s how class, subclasses, and flags are modeled in the [Overture schema](https://github.com/OvertureMaps/schema/blob/main/schema/transportation/segment.yaml):\\n\\n```yaml\\nclass: footway\\nsubclass_rules:\\n  - value: sidewalk\\n    between: [0, 0.6]\\n  - value: crosswalk\\n    between: [0.6, 1.0]\\nroad_flags:\\n  - values: [is_bridge]\\n    between: [0.2, 0.3]\\n  - values: [is_under_construction]\\n    between: [0.3, 0.5]\\n\\nclass: service\\nsubclass_rules:\\n  - value: driveway\\n    between: [0, 0.5]\\n\\nclass: primary\\nsubclass: link\\nsubclass_rules:\\n  - value: link\\n```\\n\\n### Connectors\\nTo better support routing use cases, we added to the segment feature type [a new property](https://github.com/OvertureMaps/schema/pull/257) called\\n`connectors`: an array of IDs with pre-computed linear reference values that explicitly link segments and\\n[connector features](https://docs.overturemaps.org/schema/reference/transportation/connector/) via coordinates. The `connectors` property contains a list of connector features to which a segment feature is physically connected and the relative location of those connector features along the segment. Each connector is a possible routing decision point, meaning it defines a place along the segment in which there is possibility to transition to other segments that share the same connector.\\n\\nThis new property &mdash; a replacement for the existing `connector_ids`\\nproperty &mdash; will reduce complexity and improve accuracy as we calculate the intersections between segment and connector features. We plan to deprecate the `connector_ids` property in the August release and remove it from the schema in the October release.\\n\\nHere are examples from the Overture schema comparing the new and deprecated features:\\n<Tabs>\\n<TabItem value=\\"connectors\\" label=\\"new connectors property\\" default>\\n```yaml\\nid: overture:transportation:segment:123\\ntype: Feature\\ngeometry:\\n  type: LineString\\n  coordinates: [[0, 0], [0.03, 0], [0.10, 0]]\\nproperties:\\n  theme: transportation\\n  type: segment\\n  version: 1\\n  subtype: road\\n  class: secondary\\n  connectors:\\n    - connector_id: fooConnector\\n      at: 0\\n    - connector_id: barConnector\\n      at: 0.3\\n    - connector_id: bazConnector\\n      at: 1\\n  road_surface:\\n    - value: paved\\n```\\n</TabItem>\\n<TabItem value=\\"connector_ids\\" label=\\"deprecated connector_ids property\\" default>\\n```yaml\\nid: overture:transportation:segment:123\\ntype: Feature\\ngeometry:\\n  type: LineString\\n  coordinates: [[0, 0], [0.03, 0], [0.10, 0]]\\nproperties:\\n  theme: transportation\\n  type: segment\\n  version: 1\\n  subtype: road\\n  class: secondary\\n  connector_ids: [fooConnector, barConnector, bazConnector]\\n  road_surface:\\n    - value: paved\\n```\\n</TabItem>\\n</Tabs>\\n\\n### Destinations\\n\\n| ![Highway signs](/img/blog/highway-signs.png) |\\n|:--:|\\n| *Highway signs help us get from point A to Green Bay* |\\n\\nAlso in support of routing use cases, we [added a `destinations` property](https://github.com/OvertureMaps/schema/pull/176) to the segment feature type.\\nThis property describes the transitions from one segment to another on the way to a specified location.\\nIn turn-by-turn routing applications, this is what is known as \u201cfollow signs for\u201d &mdash; the human-readable\\ndirections and signposts along a road, highway, or interstate that get us from point A to point Z, by way\\nof any number of paths in between. We designed `destinations` with a flexible schema that will allow us to\\ncapture and model navigation data from many different sources.\\n\\nHere\'s an example of how highway sign information in the picture above is modeled in the `destinations` schema:\\n\\n```yaml\\ndestinations:\\n  - when:\\n    heading: forward\\n    from_connector_id: 08f274370d59a8840436ff3bad31c60e\\n    to_connector_id: 08f274370d59a8840436ff3bad31c60e\\n    to_segment_id: 08a274370d59ffff043fff3b802d7aa5\\n    final_heading: forward\\n    labels:\\n     - value: Green Bay\\n      type: unknown\\n     - value: I 43 North\\n      type: route_ref\\n    symbols:\\n     - NULL\\n```\\n\\n## Transportation splitter tool\\nRecently we made our [transportation splitter tool](https://github.com/OvertureMaps/transportation-splitter)\\navailable in a public GitHub repository. The tool is an experimental PySpark script and Jupyter notebook that offers\\nmultiple ways to split Overture\u2019s transportation features into smaller and simpler segments. Our new transportation guide includes [several examples of how to use it](https://docs.overturemaps.org/guides/transportation/#transportation-splitter). Please\\ntake it for a test drive and [let us know](https://github.com/OvertureMaps/transportation-splitter/issues) what you think!"},{"id":"/2024/07/24/explore-site","metadata":{"permalink":"/blog/2024/07/24/explore-site","source":"@site/blog/2024-07-24-explore-site.mdx","title":"Exploring Overture data, no SQL required","description":"Overture has launched a new browser-based tool to give users a no-code option to interact with our data. The Explore website is now the quickest way to get started with Overture, no SQL required//explore.overturemaps.org","date":"2024-07-24T00:00:00.000Z","tags":[],"readingTime":2.24,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Exploring Overture data, no SQL required"},"unlisted":false,"prevItem":{"title":"What to expect in Overture\u2019s August release","permalink":"/blog/2024/08/15/preview-august-release"},"nextItem":{"title":"Land cover is live","permalink":"/blog/2024/05/16/land-cover"}},"content":"Overture has launched a new browser-based tool to give users a no-code option to interact with our data. The Explore website is now the quickest way to get started with Overture, no SQL required: [https://explore.overturemaps.org](https://explore.overturemaps.org/#13.01/39.95692/-75.15583)\\n\\n| ![Exploring Philadelphia](/img/blog/explore-philadelphia2.gif) | \\n|:--:| \\n| *Checking out [\\"Lion Crushing a Serpent\\"](https://www.associationforpublicart.org/artwork/lion-crushing-a-serpent/) in Philadelphia\u2019s Rittenhouse Park* |\\n\\n## Not a map \\n\\nThe Explore tool might look like a map, but we prefer to think of it as an x-ray data inspector. We\u2019ve punted on making cartographic decisions in favor of displaying all of Overture\u2019s themes, all at once: addresses, base, buildings, divisions, places, and transportation. Our users are coming at the data with different perspectives and goals, and we want to provide as much information as possible. We also want to stoke your curiosity and inspire you to ask new questions of Overture data. \\n\\nSeeing all the data all at once might be a bit overwhelming. We recommend zooming to an area of interest, hovering over the layers icon in the upper left corner of the map, and toggling the data themes off and on. You can click on an individual map feature, like the famous [\\"Lion Crushing a Serpent\\"](https://youtu.be/rTl2ewUc6bA?feature=shared) statue, to inspect its properties. Want to download the data? In the upper right corner of the Explore site, you can click on the Download Visible button to generate a GeoJSON file containing all the data visible in the browser. \\n\\nThe [Explore site](https://explore.overturemaps.org/#13.01/39.95692/-75.15583) is currently in beta, and your feedback will inform the features we add in the coming months. If you have questions about the data, or if you want to report a problem with data quality or a glitch in the website, please click on the bug icon and [file an issue on GitHub](https://github.com/OvertureMaps/io-site/issues). (Note: we are actively working on fixing known issues with the downloaded data.)\\n\\n## Build with us\\n\\nThis project grew out of the diverse experiences and skill sets of the engineers working on Overture. We\u2019re using [WebAssembly](https://webassembly.org/) and Rust, specifically [geoarrow-rs](https://geoarrow.org/geoarrow-rs/), to query and download [Overture\u2019s GeoParquet files](https://docs.overturemaps.org/getting-data/). The front end is React and [Maplibre](https://maplibre.org/), and we\u2019re generating [PMTiles](https://docs.protomaps.com/pmtiles/) to visualize the data. It\u2019s a serverless site, using all cloud-native data storage formats. We also plan to make [PMTiles available with each Overture release](https://github.com/OvertureMaps/overture-tiles). Special thanks to Kyle Barron from [Development Seed](https://developmentseed.org/) and Brandon Liu from [Protomaps](https://protomaps.com/) for collaborating with Overture\'s Developer Advocacy team on this project. \\n\\n[Explore is open source](https://github.com/OvertureMaps/io-site), under an MIT license, and we welcome contributions from the Overture community. Our goal is to give you the basic building blocks for creating your own tools around Overture data. Let us know what you make and we\u2019ll happily share it on our [community projects page](https://docs.overturemaps.org/community/)."},{"id":"/2024/05/16/land-cover","metadata":{"permalink":"/blog/2024/05/16/land-cover","source":"@site/blog/2024-05-16-land-cover.mdx","title":"Land cover is live","description":"land cover gif","date":"2024-05-16T00:00:00.000Z","tags":[],"readingTime":2.325,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Land cover is live"},"unlisted":false,"prevItem":{"title":"Exploring Overture data, no SQL required","permalink":"/blog/2024/07/24/explore-site"},"nextItem":{"title":"Exploring our beta release","permalink":"/blog/2024/04/22/beta-release"}},"content":"![land cover gif](/img/blog/lc.gif)\\n\\n## Mapmakers rejoice! \\n\\nThe [May release](https://docs.overturemaps.org/release/latest) of Overture Maps includes new high-resolution land cover data *and* new cartographic schema properties.\\n\\nOur `land_cover` layer is vectorized data derived from the [European Space Agency\u2019s 2020 WorldCover (10m) rasters](https://esa-worldcover.org/en). It\'s similar to the land cover layer in the [Daylight](https://daylightmap.org/2023/10/11/landcover.html) map distribution, but Overture Maps added higher-resolution data (zoom level 15) with more detail and land cover classes. You\'ll find 10 subtypes in the new data: snow, forest, urban, grass, crop, barren, wetland, moss, mangrove, and shrub. \\n\\nOur May release also includes [schema properties](https://docs.overturemaps.org/schema/reference/base/land_cover/) that offer cartographic \\"hints\\" for optimal use of Overture Maps data in mapmaking. We added `min_zoom` and `max_zoom` to define the recommended zooms for each resolution of land cover, using the common \u201cslippy maps\u201d zoom level specification. This is a first step toward improving the user experience for mapmakers. We plan to expand these properties in future releases of Overture Maps data.\\n\\n## Exploring land cover\\n\\nIn the notebook example below, we\'ll show you how to extract, process, and visualize land cover data for an area of interest using [lonboard](https://developmentseed.org/lonboard/latest/) and the [Overture Maps Python command-line tool](https://github.com/OvertureMaps/overturemaps-py). We recommend that you consult [this example](https://developmentseed.org/lonboard/latest/examples/overture-maps/ ) in the lonboard docs to better understand the methods used here. You can view and download the complete notebook on [Notebook Sharing Space](https://notebooksharing.space/view/b63f6b3dda1da99c45caf53284fbc508aaae0a43480b43bb0316db636c5e6677).\\n\\n\\n![land cover](/img/blog/notebook-overture-lc.png)\\n\\n To follow along, you\'ll need to have [JupyterLab or Jupyter Notebook](https://jupyter.org/) running and the following dependencies installed:\\n - [lonboard](https://developmentseed.org/lonboard/latest/#install)\\n - [overturemaps-py](https://github.com/OvertureMaps/overturemaps-py)\\n - [pandas](https://pandas.pydata.org/)\\n - [GeoPandas](https://geopandas.org/en/stable/index.html)\\n - [Shapely](https://shapely.readthedocs.io/en/stable/index.html) \\n\\n\\n``` python\\nimport pandas as pd\\nimport geopandas as gpd\\nimport overturemaps \\nfrom shapely import wkb\\nfrom lonboard import Map, PolygonLayer\\nfrom lonboard.colormap import apply_categorical_cmap\\n```\\n\\n``` python\\n# specify bounding box\\nbbox =  -78.6429, 39.463, -73.7806, 41.6242\\n```\\n\\n``` python\\n# read in Overture Maps land_cover data type\\ntable = overturemaps.record_batch_reader(\\"land_cover\\", bbox).read_all()\\ntable = table.combine_chunks()\\n```\\n\\n``` python\\n# convert to dataframe\\ndf = table.to_pandas()\\n```\\n\\n``` python\\n# filter for higher resolution land_cover features\\ndf_h = df[df.cartography.apply(lambda x: x[\'min_zoom\'] == 8)]\\n```\\n\\n``` python\\n# create color map for land_cover subtypes, loosely based on natural-color palette: https://www.shadedrelief.com/shelton/c.html\\ncolor_map = {\\n    \\"urban\\": [167, 162, 186],\\n    \\"forest\\": [134, 178, 137],\\n    \\"barren\\": [245, 237, 213],\\n    \\"shrub\\": [239, 218, 182],\\n    \\"grass\\": [254, 239, 173],\\n    \\"crop\\": [222, 223, 154],\\n    \\"wetland\\": [158, 207, 195], \\n    \\"mangrove\\": [83, 171, 128],\\n    \\"moss\\": [250, 230, 160],\\n    \\"snow\\": [255, 255, 255],  \\n}\\n```\\n\\n``` python\\n# apply color map to land_cover subtypes\\ncolors = apply_categorical_cmap(df_h.subtype, color_map)\\n```\\n\\n``` python\\n# dataframe to geodataframe, set crs\\ngdf = gpd.GeoDataFrame(\\n    df_h, \\n    geometry=df_h[\'geometry\'].apply(wkb.loads), \\n    crs=\\"EPSG:4326\\"\\n)\\n```\\n\\n``` python\\n# create map layer \\nlayer = PolygonLayer.from_geopandas(\\n    gdf= gdf[[\'id\',\'subtype\', \'cartography\', \'geometry\']].reset_index(drop=True),\\n    get_fill_color=colors,\\n    get_line_color=colors,\\n)\\n```\\n\\n``` python\\n#render map\\nview_state = {\\n    \\"longitude\\": -76.2,\\n    \\"latitude\\": 39.6,\\n    \\"zoom\\": 8,\\n    \\"pitch\\": 65,\\n    \\"bearing\\": 5,\\n}\\nm = Map(layer, view_state=view_state)\\nm\\n```"},{"id":"/2024/04/22/beta-release","metadata":{"permalink":"/blog/2024/04/22/beta-release","source":"@site/blog/2024-04-22-beta-release.mdx","title":"Exploring our beta release","description":"Highlights from Overture Maps beta release","date":"2024-04-22T00:00:00.000Z","tags":[],"readingTime":2.965,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Exploring our beta release","description":"Highlights from Overture Maps beta release"},"unlisted":false,"prevItem":{"title":"Land cover is live","permalink":"/blog/2024/05/16/land-cover"},"nextItem":{"title":"Welcome!","permalink":"/blog/2024/04/21/welcome"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\nLast week Overture Maps [announced the beta release](https://overturemaps.org/overture-maps-foundation-releases-beta-of-its-first-open-map-dataset/) of our schema and data. After months of hard work and steady improvements, we are nearing production-level stability. In a series of posts over the next few weeks -- starting with this one -- we\u2019ll unpack the highlights and improvements you\'ll see in this release and beyond. \\n\\n## Making geospatial fast\\nThe first thing you\'ll notice is how much faster you can [pull Overture Maps data out of the cloud](https://docs.overturemaps.org/getting-data/locally/). We made this possible by working closely with open-source collaborators on the repartitioning and [spatial optimization](https://cloudnativegeo.org/blog/2024/03/coming-soon-geoparquet-1.1/) of our GeoParquet files. Meanwhile, our friends at DuckDB, one of our favorite SQL tools, [added a feature](https://github.com/duckdb/duckdb/pull/10314) that improves the performance of queries with bounding boxes.\\n\\n<details>\\n\\n<summary>Query speeds have improved significantly from our February release to the April beta release. This example compares DuckDB queries for buildings in Philadelphia. [See here for more information about our performance testing](https://github.com/opengeospatial/geoparquet/discussions/188#discussioncomment-8909348).</summary>\\n\\n    <Tabs>\\n        <TabItem value=\\"february\\" label=\\"2024-02-15-alpha.0 release\\" default>\\n            ```\\n            SELECT \\n            *\\n            FROM \\n                read_parquet(\'s3://overturemaps-us-west-2/release/2024-02-15-alpha.0/theme=buildings/type=building/*\', filename=true, hive_partitioning=1)\\n            WHERE \\n                bbox.minx > -75.60154\\n                AND bbox.maxx < -74.955763\\n                AND bbox.miny > 39.867004\\n                AND bbox.maxy < 40.137992;\\n            ```\\n            820,915 buildings   \\n            ~120s\\n        </TabItem>\\n\\n    \\n        <TabItem value=\\"april\\" label=\\"2024-04-16-beta.0 release\\" default>\\n            ```\\n            SELECT \\n            *\\n            FROM   \\n                read_parquet(\'s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=buildings/type=building/*\', filename=true, hive_partitioning=1)\\n            WHERE \\n                bbox.xmin > -75.60154\\n                AND bbox.xmax < -74.955763\\n                AND bbox.ymin > 39.867004\\n                AND bbox.ymax < 40.137992\\n            ```\\n            852,487 buildings    \\n            ~25s\\n        </TabItem>\\n    </Tabs>\\n</details>\\n\\nWe\'re continuing to make things faster and easier for users. Along with the folks at Development Seed, an [Overture Maps Foundation member](https://overturemaps.org/about/members/), we\'re [building special tools for Overture Maps data on top of lonboard](https://developmentseed.org/lonboard/latest/examples/overture-maps/), their Python library for visualizing large geospatial datasets in Jupyter. And recently our friends at Wherobots [took a comprehensive look](https://wherobots.com/overture-maps-data-cloud-native-geoparquet-apache-sedona/) at how our use of GeoParquet makes querying and analyzing our data with Apache Sedona very efficient. \\n\\nAs you can see, we\'re moving forward with the community to iterate on data, software, and specifications with the shared goal of making geospatial **_fast_**.\\n\\n## Easier-to-use schema\\nAnother highlight of the beta release is the transition to an easier-to-use schema for our administrative boundary data. We first [explored this idea](https://github.com/OvertureMaps/schema/discussions/117) with the Overture Maps community in February, and after two short months of work, the [new divisions schema and data](https://docs.overturemaps.org/guides/divisions/) are ready to go. Here\'s a query to `divisions` that grabs geometries for all the countries in the world:\\n\\n```\\nSELECT *\\n   FROM read_parquet(\'s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=divisions/type=division_area/*\', filename=true, hive_partitioning=1)\\nWHERE subtype = \'country\';\\n```\\n \\n You can see that the `divisions` query above is much simpler than a comparable query to `admins`:\\n\\n\\n```\\nWITH admins AS (\\n    SELECT *\\n    FROM read_parquet(\'s3://overturemaps-us-west-2/release/2024-04-16-beta.0/theme=admins/type=*/*\', filename=true, hive_partitioning=1)\\n  )\\n\\n  SELECT *\\n    FROM admins country_locality\\n    JOIN admins country_area\\n      ON country_area.locality_id = country_locality.id\\n   WHERE country_locality.locality_type = \'country\';\\n\\n```    \\n\\nWe plan to [deprecate admins](https://docs.overturemaps.org/release-notes/) by the July release. In the meantime, both `admins` and `divisions` will be available to users. \\n\\n## Bridges, islands, waterfalls, and more!\\nWe added more rich detail to our `base` layer in this release, including an `infrastructure` type with familiar features from [Facebook\u2019s Daylight map distribution](https://daylightmap.org/). We also added new subtypes and classes for the `land`, `land_use`, and `water` feature types. You\'ll find a comprehensive listing of the subtypes and classes for each feature type in our [schema reference docs](https://docs.overturemaps.org/schema/reference/base/infrastructure). Ready to make your own map? We have a [tutorial to help you get started](https://docs.overturemaps.org/examples/build-a-map/#13/47.6/-122.33/0/45).\\n  \\n## Stay tuned for more highlights\\nWe\'ll be back soon with more posts that explore our path from the beta release to production. In the meantime, we invite you to [get started with our data](https://docs.overturemaps.org/getting-data/) and share with us your [comments and feedback](https://github.com/OvertureMaps/data/discussions)."},{"id":"/2024/04/21/welcome","metadata":{"permalink":"/blog/2024/04/21/welcome","source":"@site/blog/2024-04-21-welcome.mdx","title":"Welcome!","description":"Welcome to the Overture Maps engineering blog! We\'re excited to tell the technical stories behind this big, exciting, ambitious, intensely collaborative project we\u2019ve been working on for more than a year. The engineers building Overture Maps are eager to connect with our developer community. In the posts we publish in the coming months, you\u2019ll hear from team members who work at Amazon, Meta, Microsoft, TomTom, Esri, Development Seed, Precisely, and more. And we\u2019d like to hear from you: feedback and contributions from folks working with our data and schema are crucial to our success. Thanks for joining us on this journey. We\u2019re glad you\u2019re here.","date":"2024-04-21T00:00:00.000Z","tags":[],"readingTime":0.525,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Welcome!"},"unlisted":false,"prevItem":{"title":"Exploring our beta release","permalink":"/blog/2024/04/22/beta-release"}},"content":"Welcome to the Overture Maps engineering blog! We\'re excited to tell the technical stories behind this big, exciting, ambitious, intensely collaborative project we\u2019ve been [working on for more than a year](https://overturemaps.org/looking-forward-to-2024/). The engineers building Overture Maps are eager to connect with our developer community. In the posts we publish in the coming months, you\u2019ll hear from team members who work at Amazon, Meta, Microsoft, TomTom, Esri, Development Seed, Precisely, and more. And we\u2019d like to hear from you: [feedback and contributions](https://github.com/OvertureMaps/data/discussions) from folks working with our data and schema are crucial to our success. Thanks for joining us on this journey. We\u2019re glad you\u2019re here."}]}}')}}]);