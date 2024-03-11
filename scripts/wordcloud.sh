#!/usr/bin/env sh
wordcloud_cli --background white \
	--fontfile "/usr/share/fonts/truetype/ubuntu/UbuntuMono-R.ttf" \
	--text topics.txt \
	--imagefile output`ls output*.png|wc -l `.png \
	--colormask template5.png\
	--min_font_size 10


