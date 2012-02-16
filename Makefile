# See the README for installation instructions.

NODE_PATH = ./node_modules
JS_COMPILER = $(NODE_PATH)/uglify-js/bin/uglifyjs
JS_TESTER = $(NODE_PATH)/vows/bin/vows

JS_FILES = \
	d3.tsv.js

WIDGET_NAME = vis.wdgt

all: clean
	cp -r ./ ../$(WIDGET_NAME)
	mv ../$(WIDGET_NAME) ./$(WIDGET_NAME)

clean:
	rm -r ./$(WIDGET_NAME)
