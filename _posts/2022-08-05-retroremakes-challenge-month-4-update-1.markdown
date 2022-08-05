---
layout: post
title: "RetroRemakes Challenge : Month 4 Update 1"
date: 2022-08-05T18:02:23.513Z
image: /images/blog/map.png
excerpt: Challenge kick off and getting the map data into Godot.
tags:
  - RetroRemakes
  - Games
---
Going back to 2D for the next challenge, [Splat!](https://spectrumcomputing.co.uk/entry/4767/ZX-Spectrum/Splat) 
by Incentive Software, circa 1983 (seems a lot happened in 1983 on the Spectrum!).

This is a favourite of mine, for many reasons, including the fact that it too was a product of Incentive Software, my first employer. I clearly remember scanning the job postings on the wall of the job center in Basingstoke, during my lunch break from college, and seeing the one for general assistant at Incentive Software in Tadley. The first thing that came to mind was Splat!, as I'd played it on my Spectrum loads of times and really enjoyed it, so to see a job posting for Incentive was really exciting. Having secured the interview over the phone, landline of course, no mobiles, I rode the next day out to Tadley on my Suzuki GS125S to greet Ian Andrew and crew, where he showed me their exciting new project (more on that in a later month), and returned home to wait for the call, which, to my surprise and glee, was positive, and so the cogs of my career were set in motion.

The first steps, are to get the map into Godot. I have tinkered with a remake of Splat! once before, a few years ago, and not in Godot, so recalled the painful and time consuming effort to manually transcribe the map data into a tileset editor piece by piece from the map image, and decided I didn't want to do that again. So this time, I took the easier route. I downloaded the map from the same site as all the other game maps I've been using, [here](https://maps.speccy.cz/map.php?id=Splat), cleaned up the credit on the bottom row, and set about creating a Python script to extract the relevant data from the map. The map itself is a palleted PNG, so each pixel is represented by a single byte, which makes it really easy to work with. To identify repeated tiles, I chose a method of keying each tile by the combined value of it's pixel palette indices. Each tile is 8x8 pixels, so, scanning the pixel data in cells of 8x8, I create a string, with the ASCII value of each pixel color in sequence. For example, the simple tile shown below, blown up for clarity...

![Simple Tile](/images/blog/big_tile_0.png "Simple Tile")

... will encode to the string "`000000000000000000000000000000000000000000000000000000000000000000000007`", all black pixels except the last which is white. This is then used as a key in a dictionary, if the key doesn't yet exist in the dictionary, a copy of that tile is created by cropping it out of the original image, and the dictionary is updated with the entry and an index, which is then incremented ready for the next new tile. If the dictionary already contains the key, the tile index is just read from the dictionary. The tile index is then entered into a 2 dimensional array of integers representing the map cells, with the value being the tile index. This 2 dimensional array is then exported as JSON.

```python
from PIL import Image
import json

image = Image.open('Map.png')
size = image.size
data = list(image.getdata())
rowlen = size[0]
cells_per_row = rowlen // 8
cells_per_column = size[1] // 8

tile_index = 0
tiles = {}
map_data = []

for row in range(cells_per_column):
    map_row = []
    map_data.append(map_row)
    for col in range(cells_per_row):
        cell_id = "" 
        for y in range(8):
            for x in range(8):
                cell_id += str(data[(row * 8 + y) * rowlen + col * 8 + x])
        if tiles.get(cell_id) == None:
            (left, upper, right, lower) = (col * 8, row * 8, (col + 1) * 8, (row + 1) *8)
            tile = image.crop((left, upper, right, lower))
            tile.save("tile-%04d.png" % tile_index)
            tiles[cell_id] = tile_index
            map_row.append(tile_index)
            tile_index += 1
        else:
            map_row.append(tiles[cell_id])

with open('map.json', 'w', encoding='utf-8') as f:
    json.dump({'cells': map_data}, f, ensure_ascii=False, indent=4)

```

Once this is done, a simple ImageMagick invocation combines all the 8x8 tile images into a single tileset image, scaling them up by 400%, as the tile size in Godot will be 32x32, and this is then loaded into Godot as a tileset. Finally, I create a simple GDScript script for the TileMap, as a "tool" so it can be executed in the editor, to load the JSON map, and assign the relevant tile indices to the Godot TileMap to match the original, and voila, the exact Splat! map is loaded as a TileMap in Godot, along with an initial set of tiles that exactly match the originals.

![Godot with map](/images/blog/map_loaded.png "The Splat! map loaded into Godot as a TileMap")