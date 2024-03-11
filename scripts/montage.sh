#!/usr/bin/env sh
montage \
	-font "/usr/share/fonts/truetype/ubuntu/UbuntuMono-R.ttf" \
	-pointsize 10 
	# -label '%t' 
	-resize 100x150 *.jpg 
	-geometry +3+3 
	-tile 4x4 
	-shadow collage.jpg
