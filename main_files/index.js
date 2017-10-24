(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[402,1176,279,298],[402,795,400,379],[0,1297,144,144],[146,1371,136,66],[146,1297,191,72],[0,795,400,400],[0,1197,362,98],[804,795,357,399],[0,0,1230,793]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap131111111 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15copy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap151 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16copy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17copy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap201111 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ov = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap201111();
	this.instance.parent = this;
	this.instance.setTransform(-110.9,-86.6,0.63,0.63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.9,-86.6,224.9,251.4);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBIIASgpIgqhmIAfAAIAYBGIABAAIAZhGIAeAAIg4CPg");
	this.shape.setTransform(-41.3,77.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVA2IAAg6IgBgLQgBgGgCgDQgCgEgEgCQgDgBgHAAIgHABQgDACgDADQgEAEgCAFQgCAGAAAIIAAA4IgcAAIAAhoIAcAAIAAANQADgHAJgEQAIgFAKAAQAKAAAHADQAHACAFAGQAFAEADAIQADAHAAAJIAABEg");
	this.shape_1.setTransform(-53,75.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAzQgJgDgHgIQgHgHgEgKQgDgHgBgQQAAgMAEgKQAEgLAHgHQAHgHAJgDQAIgDAOgBQAJAAANAEQAKADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgOgBgIgDgAgSgYQgHAJABAPQAAAIABAGQACAGADAFQADAEAFACQAFADAFAAQAGAAAFgDQAFgCADgEQAHgJgBgQQAAgHgBgGQgCgGgDgFQgDgEgFgCQgFgDgGAAQgMAAgGAJg");
	this.shape_2.setTransform(-65.7,75.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBIQgMgCgLgEIAFgXQAKAEAKABQAKACAHAAQAMAAAFgEQAEgCACgDQABgDAAgEQAAgEgBgDQgCgEgEgCIgJgGIgLgFIgQgHQgGgDgGgFQgFgGgDgGQgDgGAAgJQAAgLAFgHQAEgIAHgFQAIgFAIgDQAJgCAIAAIAUABIASAEIgFAYQgIgDgHgBIgQgCIgHABQgEABgEACQgDABgBADQgCADAAAFQAAADABADIAFAGIAIAFIAMAFIAPAIQAIAEAFAEQAGAFADAHQACAGAAAKQAAAKgEAIQgFAIgHAFQgHAGgKACQgJADgKAAQgKAAgKgCg");
	this.shape_3.setTransform(-77.6,73.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNA1IAAhTIggAAIAAgWIBcAAIAAAWIghAAIAABTg");
	this.shape_4.setTransform(-93.4,75.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAzQgJgDgHgIQgHgHgEgKQgDgHgBgQQAAgMAEgKQAEgLAHgHQAHgHAJgDQAIgDAOgBQAIAAAOAEQAKADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgOgBgIgDgAgSgYQgGAJgBAPQABAIABAGQACAGADAFQADAEAFACQAEADAGAAQAGAAAFgDQAFgCADgEQAHgJAAgQQAAgHgCgGQgCgGgDgFQgDgEgFgCQgFgDgGAAQgLAAgHAJg");
	this.shape_5.setTransform(-104.5,75.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvA1IAAhpIA6AAQAHAAAGACQAHABAEADQAEAEADAFQACAFAAAHQABAKgFAFQgEAGgIACIAAABIAHACIAGAFQADADACAEQACAFAAAFQgBAGgCAGQgCAFgEAEQgFAEgGACQgHADgJAAgAgTAiIAVAAQAIAAAEgDQAFgCAAgIQAAgHgFgDQgFgDgJAAIgTAAgAgTgKIAUAAQAIAAAEgCQADgDAAgHQAAgGgDgDQgEgCgHAAIgVAAg");
	this.shape_6.setTransform(8.6,50.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAzQgKgDgHgIQgHgHgEgKQgCgHgCgQQAAgMAEgKQAEgLAHgHQAHgHAKgDQAHgDAOgBQAIAAAPAEQAJADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgOgBgHgDgAgSgYQgHAJAAAPQAAAIACAGQACAGADAFQADAEAFACQAFADAFAAQAHAAAEgDQAFgCADgEQAGgJAAgQQAAgHgBgGQgCgGgDgFQgDgEgFgCQgEgDgHAAQgMAAgGAJg");
	this.shape_7.setTransform(-3.9,50.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVA1IAAgsIgpAAIAAAsIgcAAIAAhpIAcAAIAAAoIApAAIAAgoIAcAAIAABpg");
	this.shape_8.setTransform(-16.5,50.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAzQgJgDgHgIQgHgHgEgKQgDgHgBgQQAAgMAEgKQAEgLAHgHQAHgHAJgDQAIgDAOgBQAJAAANAEQAKADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgOgBgIgDgAgSgYQgGAJAAAPQgBAIACAGQACAGADAFQADAEAFACQAFADAFAAQAHAAAEgDQAFgCADgEQAHgJgBgQQAAgHgBgGQgCgGgDgFQgDgEgFgCQgEgDgHAAQgMAAgGAJg");
	this.shape_9.setTransform(-29.1,50.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNBdIAAgmQgMAAgLgDQgKgEgIgGIgGgIIgGgJQgEgKAAgOIABgLIADgLIAFgJIAHgHQAHgIALgDQAKgDANgBIAAgoIAbAAIAAAoQANABAKADQAKAEAIAHQAHAGAFAKIADALIABALIgBANIgEALIgFAJIgHAIQgHAGgLAEQgKADgMAAIAAAmgAAOAiQAOgBAHgIQAHgJAAgPQAAgNgHgJQgHgIgOgCgAgigVQgIAJAAANQAAAPAIAJQAHAIAOABIAAhBQgOACgHAIg");
	this.shape_10.setTransform(-43.4,50.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNA1IAAhTIggAAIAAgWIBbAAIAAAWIgfAAIAABTg");
	this.shape_11.setTransform(-56.2,50.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0BKIAAiQIAcAAIAAANQAHgHAJgEQAIgEAIgBQALAAAJAFQAHAEAGAHQAGAIADAKQADAKAAAMQAAALgEAJQgDALgFAHQgGAIgIADQgJAFgKAAQgJAAgHgDQgJgEgGgHIAAAAIAAAzgAgJgxQgGADgDAFQgDAEgCAGQgCAGAAAIQAAAHACAGQACAFADAFQADAEAGADQAEACAGAAQAFAAAFgCQAFgDADgEQADgFABgFQACgGAAgHQAAgHgCgHQgBgGgDgEQgDgFgFgDQgFgCgFAAQgGAAgEACg");
	this.shape_12.setTransform(-67.2,52.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXA1QgHgBgFgEQgGgEgDgGQgDgGAAgKQAAgFABgFQABgFADgDQAFgGAJgEQAKgEAMgBQALgCANAAIAAgCQAAgEgBgEIgEgFQgGgFgLAAIgNABIgOAEIgFgUQAGgDAKgBQAKgCAIAAQAZAAAMAKQAGAGADAHQADAIAAAJIAAArIAAAMIABAMIgZAAIgBgHIgBgGQgEAHgIAEQgIAEgKAAQgHAAgHgCgAABAFQgFAAgFACQgFACgDAEQgDADAAAFQAAAHAFAEQAEAEAHAAQAFAAAEgCQAFgCADgEQADgEABgEIABgJIAAgHIgDAAg");
	this.shape_13.setTransform(-79.9,50.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAnA1IAAhSIgZBSIgcAAIgZhSIAABSIgZAAIAAhpIApAAIAXBSIAYhSIApAAIAABpg");
	this.shape_14.setTransform(-93.4,50.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAzIgKgFIgIgHQgHgHgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAIgHAKgEQAKgEANAAQAKAAAOADIgFAVIgIgCIgJgBQgHAAgGADQgFADgDAEQgEAFgCAGQgCAGAAAGQAAAHACAGQACAGADAFQAEAFAFACQAGADAIAAIAJgBQAEAAAEgCIAFAVIgMACIgMABQgPAAgJgEg");
	this.shape_15.setTransform(-105.9,50.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWA1IgVglIgXAlIgfAAIAig2IgggzIAgAAIAUAiIAUgiIAfAAIggAzIAjA2g");
	this.shape_16.setTransform(17.7,25.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXA1IAAhGIgBAAIgoBGIgfAAIAAhpIAcAAIAABFIAnhFIAgAAIAABpg");
	this.shape_17.setTransform(5.7,25.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQA1Igkg1IgBAAIAAA1IgcAAIAAhpIAcAAIAAAxIABAAIAigxIAiAAIgoAyIAqA3g");
	this.shape_18.setTransform(-5.8,25.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAzIgKgFIgIgHQgHgHgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAIgHAKgEQAKgEANAAQAKAAAOADIgFAVIgIgCIgJgBQgHAAgGADQgFADgDAEQgEAFgCAGQgCAGAAAGQAAAHACAGQACAGADAFQAEAFAFACQAGADAIAAIAJgBQAEAAAEgCIAFAVIgMACIgMABQgPAAgJgEg");
	this.shape_19.setTransform(-16.8,25.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVA1IAAgsIgpAAIAAAsIgcAAIAAhpIAcAAIAAAoIApAAIAAgoIAcAAIAABpg");
	this.shape_20.setTransform(-28.1,25.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXA1QgHgBgFgEQgGgEgDgGQgDgGAAgKQAAgFABgFQABgFADgDQAFgGAJgEQAKgEAMgBQALgCANAAIAAgCQAAgEgBgEIgEgFQgGgFgLAAIgNABIgOAEIgFgUQAGgDAKgBQAKgCAIAAQAZAAAMAKQAGAGADAHQADAIAAAJIAAArIAAAMIABAMIgZAAIgBgHIgBgGQgEAHgIAEQgIAEgKAAQgHAAgHgCgAABAFQgFAAgFACQgFACgDAEQgDADAAAFQAAAHAFAEQAEAEAHAAQAFAAAEgCQAFgCADgEQADgEABgEIABgJIAAgHIgDAAg");
	this.shape_21.setTransform(-40.4,25.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAnA1IAAhSIgZBSIgcAAIgZhSIAABSIgZAAIAAhpIApAAIAXBSIAYhSIApAAIAABpg");
	this.shape_22.setTransform(-53.9,25.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBHAAIAAAWIgrAAIAABTg");
	this.shape_23.setTransform(-65.7,25.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXA1QgHgBgFgEQgGgEgDgGQgDgGAAgKQAAgFABgFQABgFADgDQAFgGAJgEQAKgEAMgBQALgCANAAIAAgCQAAgEgBgEIgEgFQgGgFgLAAIgNABIgOAEIgFgUQAGgDAKgBQAKgCAIAAQAZAAAMAKQAGAGADAHQADAIAAAJIAAArIAAAMIABAMIgZAAIgBgHIgBgGQgEAHgIAEQgIAEgKAAQgHAAgHgCgAABAFQgFAAgFACQgFACgDAEQgDADAAAFQAAAHAFAEQAEAEAHAAQAFAAAEgCQAFgCADgEQADgEABgEIABgJIAAgHIgDAAg");
	this.shape_24.setTransform(-76.7,25.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgxA1IgFgBIAAgVIACAAIADAAQAHAAADgEQAEgEACgJQACgJABgNIABgsIBUAAIAABoIgcAAIAAhTIgdAAQAAAegCAKQgCAQgEAKQgFAKgIAEQgHAEgMAAg");
	this.shape_25.setTransform(-89.2,25.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNBdIAAgmQgMAAgLgEQgKgDgIgHIgGgHIgGgJQgEgKAAgOIABgMIADgKIAFgJIAHgIQAHgGALgEQAKgDANgBIAAgoIAbAAIAAAoQANAAAKAEQAKAEAIAGQAHAHAFAKIADAKIABAMIgBANIgEALIgFAJIgHAHQgHAHgLADQgKAEgMAAIAAAmgAAOAiQAOgBAHgJQAHgIAAgPQAAgNgHgJQgHgJgOgBgAgigVQgIAJAAANQAAAPAIAIQAHAJAOABIAAhBQgOABgHAJg");
	this.shape_26.setTransform(-102.9,25.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUA1IAAgjIgQAAIgUAjIggAAIAZgnQgJgEgFgHIgFgIQgBgFAAgHQAAgJADgHQADgHAGgEQAGgEAHgCQAIgCAHAAIA0AAIAABpgAgKgcQgGADAAAJQABAEABADQACADACABIAGADIAGAAIASAAIAAgdIgRAAQgJAAgEADg");
	this.shape_27.setTransform(8.9,0.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAXA1IAAhGIgBAAIgoBGIgfAAIAAhpIAcAAIAABFIAnhFIAgAAIAABpg");
	this.shape_28.setTransform(-3,0.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag0BKIAAiQIAcAAIAAANQAHgHAIgFQAJgDAIAAQALgBAIAFQAIAEAHAHQAFAIADAKQACAKAAAMQAAALgCAJQgEALgFAHQgGAHgJAEQgIAFgLAAQgIAAgIgDQgIgEgFgHIgBAAIAAAzgAgKgxQgEADgEAEQgEAFgBAGQgCAGAAAIQAAAHACAGQABAGAEAEQAEAEAEADQAFACAFAAQAHAAAEgCQAEgDADgEQADgEACgGQABgGABgHQgBgHgBgHQgCgGgDgFQgDgEgEgDQgEgCgHAAQgFAAgFACg");
	this.shape_29.setTransform(-15.6,2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPAzQgLgEgIgHQgHgHgEgLQgDgGgBgQQAAgLADgKQAEgKAHgIQAHgHAKgEQAGgDAPgBQALAAAJADQAJAEAGAHQAGAHADAJQADAKAAAMIAAAKIhHAAQABAIADAEQADAFAEADQAFADAFABQAGACAHAAIAMgBIANgDIADAVIgPADIgRABQgRgBgHgDgAAYgKQAAgLgGgHQgDgEgEgBQgEgCgFAAQgEAAgEACQgEABgDAEQgHAHgBALIAtAAIAAAAg");
	this.shape_30.setTransform(-28.1,0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHAzIgKgFIgIgHQgHgHgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAIgHAKgEQAKgEANAAQAKAAAOADIgFAVIgIgCIgJgBQgHAAgGADQgFADgDAEQgEAFgCAGQgCAGAAAGQAAAHACAGQACAGADAFQAEAFAFACQAGADAIAAIAJgBQAEAAAEgCIAFAVIgMACIgMABQgPAAgJgEg");
	this.shape_31.setTransform(-38.6,0.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAVA1IAAgjIgQAAIgUAjIghAAIAZgnQgJgEgGgHIgDgIQgCgFAAgHQAAgJADgHQAEgHAFgEQAGgEAHgCQAHgCAIAAIA0AAIAABpgAgLgcQgEADAAAJQAAAEABADQABADADABIAGADIAHAAIASAAIAAgdIgRAAQgKAAgFADg");
	this.shape_32.setTransform(-55,0.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXA1QgHgBgFgEQgGgEgDgGQgDgGAAgKQAAgFABgFQABgFADgDQAFgGAJgEQAKgEAMgBQALgCANAAIAAgCQAAgEgBgEIgEgFQgGgFgLAAIgNABIgOAEIgFgUQAGgDAKgBQAKgCAIAAQAZAAAMAKQAGAGADAHQADAIAAAJIAAArIAAAMIABAMIgZAAIgBgHIgBgGQgEAHgIAEQgIAEgKAAQgHAAgHgCgAABAFQgFAAgFACQgFACgDAEQgDADAAAFQAAAHAFAEQAEAEAHAAQAFAAAEgCQAFgCADgEQADgEABgEIABgJIAAgHIgDAAg");
	this.shape_33.setTransform(-66.5,0.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AguA1IAAhpIA4AAQAIAAAHACQAFABAFADQAEAEADAFQADAFgBAHQAAAKgEAFQgFAGgHACIAAABIAHACIAHAFQACADABAEQACAFAAAFQAAAGgCAGQgCAFgEAEQgEAEgIACQgGADgKAAgAgTAiIAVAAQAIAAAFgDQAEgCAAgIQAAgHgFgDQgFgDgJAAIgTAAgAgTgKIATAAQAIAAAFgCQADgDAAgHQAAgGgDgDQgFgCgHAAIgUAAg");
	this.shape_34.setTransform(-77.7,0.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWAzQgJgDgHgIQgHgHgEgKQgDgHgBgQQAAgMAEgKQAEgLAHgHQAHgHAJgDQAIgDAOgBQAIAAAOAEQAKADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgOgBgIgDgAgSgYQgGAJgBAPQABAIABAGQACAGADAFQADAEAFACQAEADAGAAQAGAAAFgDQAFgCADgEQAHgJAAgQQAAgHgCgGQgCgGgDgFQgDgEgFgCQgFgDgGAAQgLAAgHAJg");
	this.shape_35.setTransform(-90.1,0.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAbBIIAAg9Ig1AAIAAA9IgeAAIAAiOIAeAAIAAA6IA1AAIAAg6IAeAAIAACOg");
	this.shape_36.setTransform(-103.6,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.8,-18.1,225.7,105.6);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap16copy();
	this.instance.parent = this;
	this.instance.setTransform(-42.1,6.8,0.592,0.592);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-42.1,6.8,80.5,39.1), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap17copy();
	this.instance.parent = this;
	this.instance.setTransform(-86.3,-2,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-86.3,-2,104.6,39.4), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap151();
	this.instance.parent = this;
	this.instance.setTransform(132,-89.8,0.478,0.478);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(132,-89.8,68.8,68.8), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap131111111();
	this.instance.parent = this;
	this.instance.setTransform(-197.5,-59.9,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-197.5,-59.9,197.9,211.4), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap18();
	this.instance.parent = this;
	this.instance.setTransform(-219.1,-152.5,0.568,0.568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-219.1,-152.5,227.2,227.2), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVA1IAAgjIgQAAIgVAjIggAAIAZgnQgJgEgGgHIgDgIQgCgFAAgHQAAgJADgHQADgHAGgEQAGgEAHgCQAHgCAJAAIAzAAIAABpgAgLgcQgEADgBAJQAAAEACADQABADADABIAGADIAHAAIASAAIAAgdIgRAAQgKAAgFADg");
	this.shape.setTransform(-91.1,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXA1IAAhGIgBAAIgoBGIgfAAIAAhpIAcAAIAABFIAnhFIAgAAIAABpg");
	this.shape_1.setTransform(-103,44.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVA1IAAgsIgpAAIAAAsIgcAAIAAhpIAcAAIAAAoIApAAIAAgoIAcAAIAABpg");
	this.shape_2.setTransform(-115.7,44.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAzQgLgEgIgHQgHgHgEgLQgDgGgBgQQAAgLADgKQAEgKAHgIQAHgHAKgEQAGgDAPgBQALAAAJADQAJAEAGAHQAGAHADAJQADAKAAAMIAAAKIhHAAQABAIADAEQADAFAEADQAFADAFABQAGACAHAAIAMgBIANgDIADAVIgPADIgRABQgRgBgHgDgAAYgKQAAgLgGgHQgDgEgEgBQgEgCgFAAQgEAAgEACQgEABgDAEQgHAHgBALIAtAAIAAAAg");
	this.shape_3.setTransform(-127.9,44.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAyA1Igjg1IgBAAIAAA1IgcAAIAAg1IgiA1IghAAIAmg3IglgyIAiAAIAgAxIAAgxIAcAAIAAAxIABAAIAggxIAhAAIgkAyIAmA3g");
	this.shape_4.setTransform(-142.1,44.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXA1QgHgBgFgEQgGgEgDgGQgDgGAAgKQAAgFABgFQABgFADgDQAFgGAJgEQAKgEAMgBQALgCANAAIAAgCQAAgEgBgEIgEgFQgGgFgLAAIgNABIgOAEIgFgUQAGgDAKgBQAKgCAIAAQAZAAAMAKQAGAGADAHQADAIAAAJIAAArIAAAMIABAMIgZAAIgBgHIgBgGQgEAHgIAEQgIAEgKAAQgHAAgHgCgAABAFQgFAAgFACQgFACgDAEQgDADAAAFQAAAHAFAEQAEAEAHAAQAFAAAEgCQAFgCADgEQADgEABgEIABgJIAAgHIgDAAg");
	this.shape_5.setTransform(-156.5,44.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBKIAAiQIAcAAIAAANQAGgHAIgFQAJgDAIAAQALgBAJAFQAIAEAFAHQAGAIADAKQACAKAAAMQAAALgDAJQgCALgGAHQgGAHgJAEQgIAFgLAAQgHAAgJgDQgIgEgFgHIgBAAIAAAzgAgKgxQgFADgDAEQgEAFgBAGQgCAGAAAIQAAAHACAGQABAGAEAEQADAEAFADQAGACAFAAQAGAAAEgCQAFgDADgEQACgEACgGQACgGgBgHQABgHgCgHQgCgGgCgFQgDgEgFgDQgEgCgGAAQgFAAgGACg");
	this.shape_6.setTransform(-168.3,46.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBJQgIgCgGgEQgMgIgGgPQgDgIAAgIIgCgSIABgUIADgSQACgJADgHQADgGAGgGQAIgGAKgDQALgEAMgBIALgBIAKgBIAKgBIAHgBIAEAWIgQADIgUACQgMABgGACQgJACgEADQgGAFgCAIQgCAHAAAGIAAAAQAGgIAJgFQAIgFALAAQALAAAIAEQAIAEAHAGQAFAHAEAKQADAJAAAMQgBAQgCAGQgEAKgHAHQgHAHgJAEQgKAEgMAAQgHAAgIgCgAgRgBQgDADgBAGQgCAGAAAHQAAAIACAGQABAGADAEQAHAIAKAAQAMAAAGgIQADgFACgGQABgFAAgIQAAgPgGgHQgDgEgFgCQgEgCgGAAQgLAAgGAIg");
	this.shape_7.setTransform(-181.1,42.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAzQgKgDgHgIQgHgHgEgKQgCgHgCgQQAAgMAEgKQAEgLAHgHQAHgHAKgDQAGgDAPgBQAIAAAPAEQAJADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgPgBgGgDgAgSgYQgHAJAAAPQAAAIACAGQACAGADAFQADAEAFACQAEADAGAAQAGAAAFgDQAFgCADgEQAGgJAAgQQABgHgCgGQgCgGgDgFQgDgEgFgCQgFgDgGAAQgMAAgGAJg");
	this.shape_8.setTransform(-193.7,44.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZA2IgRgFIAGgVQAFADAIABQAIACAIAAQALAAAFgDQAGgEAAgGQgBgIgFgCQgGgCgKAAIgNAAIAAgTIAMAAQAJAAAFgDQAGgDgBgHQAAgGgFgCQgGgDgHAAIgNACIgPADIgFgUIASgEQAKgBALAAQAHAAAJABQAHACAGADQAFADAEAGQADAFAAAHQAAAJgEAGQgFAHgKACIAAABQAGABADABQAFACACAEQADADACAEQABAEAAAFQAAAJgEAHQgEAGgHAEQgGAEgJABQgIACgJAAQgLAAgKgBg");
	this.shape_9.setTransform(-205.2,44.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXA1IAAhGIgBAAIgoBGIgfAAIAAhpIAcAAIAABFIAnhFIAgAAIAABpg");
	this.shape_10.setTransform(-216.6,44.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAzQgKgDgHgIQgHgHgEgKQgCgHgCgQQAAgMAEgKQAEgLAHgHQAHgHAKgDQAGgDAPgBQAIAAAPAEQAJADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgPgBgGgDgAgSgYQgHAJAAAPQAAAIACAGQACAGADAFQADAEAFACQAEADAGAAQAGAAAFgDQAFgCADgEQAGgJAAgQQABgHgCgGQgCgGgDgFQgDgEgFgCQgFgDgGAAQgMAAgGAJg");
	this.shape_11.setTransform(-139.2,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguA1IAAhpIA4AAQAIAAAHACQAFABAFADQAFAEACAFQACAFAAAHQAAAKgEAFQgFAGgHACIAAABIAHACIAHAFQACADABAEQACAFAAAFQAAAGgCAGQgCAFgEAEQgEAEgIACQgGADgKAAgAgSAiIAUAAQAIAAAFgDQAEgCAAgIQAAgHgFgDQgFgDgJAAIgSAAgAgSgKIASAAQAJAAADgCQAFgDAAgHQAAgGgFgDQgDgCgIAAIgTAAg");
	this.shape_12.setTransform(-151.1,22.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNA1IAAhTIggAAIAAgWIBbAAIAAAWIggAAIAABTg");
	this.shape_13.setTransform(-162.1,22.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAzIgKgFIgIgHQgHgHgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAIgHAKgEQAKgEANAAQAKAAAOADIgFAVIgIgCIgJgBQgHAAgGADQgFADgDAEQgEAFgCAGQgCAGAAAGQAAAHACAGQACAGADAFQAEAFAFACQAGADAIAAIAJgBQAEAAAEgCIAFAVIgMACIgMABQgPAAgJgEg");
	this.shape_14.setTransform(-171.6,22.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAzQgLgEgIgHQgHgHgEgLQgDgGgBgQQAAgLADgKQAEgKAHgIQAHgHAKgEQAGgDAPgBQALAAAJADQAJAEAGAHQAGAHADAJQADAKAAAMIAAAKIhHAAQABAIADAEQADAFAEADQAFADAFABQAGACAHAAIAMgBIANgDIADAVIgPADIgRABQgRgBgHgDgAAYgKQAAgLgGgHQgDgEgEgBQgEgCgFAAQgEAAgEACQgEABgDAEQgHAHgBALIAtAAIAAAAg");
	this.shape_15.setTransform(-182.4,22.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASA1IAAgnIgLACQgHABgIAAQgIAAgHgBQgGgCgFgEQgGgEgCgGQgDgHgBgLIAAgiIAdAAIAAAbIABAKQABAFACACQAEAFAKAAIAKgBIAHgCIAAguIAdAAIAABpg");
	this.shape_16.setTransform(-194.3,22.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXA1QgHgBgFgEQgGgEgDgGQgDgGAAgKQAAgFABgFQABgFADgDQAFgGAJgEQAKgEAMgBQALgCANAAIAAgCQAAgEgBgEIgEgFQgGgFgLAAIgNABIgOAEIgFgUQAGgDAKgBQAKgCAIAAQAZAAAMAKQAGAGADAHQADAIAAAJIAAArIAAAMIABAMIgZAAIgBgHIgBgGQgEAHgIAEQgIAEgKAAQgHAAgHgCgAABAFQgFAAgFACQgFACgDAEQgDADAAAFQAAAHAFAEQAEAEAHAAQAFAAAEgCQAFgCADgEQADgEABgEIABgJIAAgHIgDAAg");
	this.shape_17.setTransform(-206,22.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQA1Igkg1IgBAAIAAA1IgcAAIAAhpIAcAAIAAAxIABAAIAigxIAiAAIgoAyIAqA3g");
	this.shape_18.setTransform(-216.6,22.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAzQgLgEgIgHQgHgHgEgLQgDgGgBgQQAAgLADgKQAEgKAHgIQAHgHAKgEQAGgDAPgBQALAAAJADQAJAEAGAHQAGAHADAJQADAKAAAMIAAAKIhHAAQABAIADAEQADAFAEADQAFADAFABQAGACAHAAIAMgBIANgDIADAVIgPADIgRABQgRgBgHgDgAAYgKQAAgLgGgHQgDgEgEgBQgEgCgFAAQgEAAgEACQgEABgDAEQgHAHgBALIAtAAIAAAAg");
	this.shape_19.setTransform(-80.6,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVAzQgKgDgHgIQgHgHgEgKQgDgHgBgQQAAgMAEgKQAEgLAHgHQAHgHAKgDQAGgDAPgBQAJAAAOAEQAJADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgPgBgGgDgAgSgYQgHAJABAPQAAAIABAGQACAGADAFQADAEAFACQAEADAGAAQAGAAAFgDQAFgCADgEQAGgJAAgQQABgHgCgGQgCgGgDgFQgDgEgFgCQgFgDgGAAQgMAAgGAJg");
	this.shape_20.setTransform(-92.8,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVA1IAAgsIgpAAIAAAsIgcAAIAAhpIAcAAIAAAoIApAAIAAgoIAcAAIAABpg");
	this.shape_21.setTransform(-105.4,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUA1IAAhTIgnAAIAABTIgdAAIAAhpIBhAAIAABpg");
	this.shape_22.setTransform(-118,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAzQgLgEgIgHQgHgHgEgLQgDgGgBgQQAAgLADgKQAEgKAHgIQAHgHAKgEQAGgDAPgBQALAAAJADQAJAEAGAHQAGAHADAJQADAKAAAMIAAAKIhHAAQABAIADAEQADAFAEADQAFADAFABQAGACAHAAIAMgBIANgDIADAVIgPADIgRABQgRgBgHgDgAAYgKQAAgLgGgHQgDgEgEgBQgEgCgFAAQgEAAgEACQgEABgDAEQgHAHgBALIAtAAIAAAAg");
	this.shape_23.setTransform(-130.1,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgwA1IgHgBIAAgVIADAAIADAAQAHAAAEgEQADgEACgJQACgJABgNIABgsIBUAAIAABoIgcAAIAAhTIgdAAQgBAegBAKQgCAQgEAKQgFAKgHAEQgIAEgMAAg");
	this.shape_24.setTransform(-142.9,0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAzQgJgDgHgIQgHgHgEgKQgDgHgBgQQAAgMAEgKQAEgLAHgHQAHgHAJgDQAIgDAOgBQAIAAAOAEQAKADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgOgBgIgDgAgSgYQgGAJgBAPQABAIABAGQACAGADAFQADAEAFACQAEADAGAAQAGAAAFgDQAFgCADgEQAHgJAAgQQAAgHgCgGQgCgGgDgFQgDgEgFgCQgFgDgGAAQgLAAgHAJg");
	this.shape_25.setTransform(-154.9,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAQA1Igkg1IgBAAIAAA1IgcAAIAAhpIAcAAIAAAxIABAAIAigxIAiAAIgoAyIAqA3g");
	this.shape_26.setTransform(-166.3,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAXA1IAAhGIgBAAIgoBGIgfAAIAAhpIAcAAIAABFIAnhFIAgAAIAABpg");
	this.shape_27.setTransform(-179.1,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgwA1IgHgBIAAgVIADAAIADAAQAHAAAEgEQADgEACgJQACgJABgNIABgsIBUAAIAABoIgcAAIAAhTIgdAAQgBAegBAKQgCAQgEAKQgFAKgHAEQgIAEgMAAg");
	this.shape_28.setTransform(-192.4,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPAzQgLgEgIgHQgHgHgEgLQgDgGgBgQQAAgLADgKQAEgKAHgIQAHgHAKgEQAGgDAPgBQALAAAJADQAJAEAGAHQAGAHADAJQADAKAAAMIAAAKIhHAAQABAIADAEQADAFAEADQAFADAFABQAGACAHAAIAMgBIANgDIADAVIgPADIgRABQgRgBgHgDgAAYgKQAAgLgGgHQgDgEgEgBQgEgCgFAAQgEAAgEACQgEABgDAEQgHAHgBALIAtAAIAAAAg");
	this.shape_29.setTransform(-204,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIA6AAQAKABAHACQAJACAFAEQAGAEADAIQAEAGAAAJQAAAOgGAIQgHAHgKAEIAAAAIAKAEIAJAGQADAEADAGQACAGAAAIQgBAHgCAIQgDAHgFAFQgGAGgJAEQgIACgMAAgAgXAwIAXAAIAKAAIAIgEQADgCABgDQACgEABgFQAAgHgDgDQgCgDgDgDIgJgDIgLAAIgUAAgAgXgMIAUAAIAKgBQAEgBADgDQAHgEAAgJQAAgGgCgDQgCgDgDgCQgDgBgEgBIgIgBIgWAAg");
	this.shape_30.setTransform(-216.1,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-225,-17.8,225.7,74.5), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVA2IAAg6IgBgLQAAgGgCgDQgDgEgEgCQgEgCgFAAIgIACQgEACgDADQgDADgCAGQgCAGAAAIIAAA4IgdAAIAAhoIAcAAIAAANQAFgIAJgEQAHgEALAAQAJAAAHADQAHACAFAGQAFAFADAGQADAIgBAJIAABEg");
	this.shape.setTransform(-11,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAzQgKgDgHgIQgHgHgEgKQgCgHgCgQQAAgMAEgKQAEgLAHgHQAHgHAKgDQAHgDAOgBQAIAAAPAEQAJADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgOgBgHgDgAgSgYQgHAJAAAPQAAAIACAGQACAGADAFQADAEAFACQAFADAFAAQAHAAAEgDQAFgCADgEQAGgJAAgQQAAgHgBgGQgCgGgDgFQgDgEgFgCQgEgDgHAAQgMAAgGAJg");
	this.shape_1.setTransform(-23.7,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBJIAAhoIAbAAIAABogAgNgwIAAgYIAbAAIAAAYg");
	this.shape_2.setTransform(-32.8,21.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBBQgGgCgDgEQgEgDgBgGQgBgGAAgHIAAg2IgQAAIAAgVIAQAAIAAgcIAbAAIAAAcIAWAAIAAAVIgWAAIAAAuIABAJIACAFQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAGABIAFAAIAFgBIAAAVIgJABIgKAAQgKAAgFgCg");
	this.shape_3.setTransform(-39.4,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAzQgKgDgHgIQgHgHgEgKQgCgHgCgQQAAgMAEgKQAEgLAHgHQAHgHAKgDQAGgDAPgBQAIAAAPAEQAJADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgPgBgGgDgAgSgYQgGAJgBAPQABAIABAGQACAGADAFQADAEAFACQAFADAFAAQAGAAAFgDQAFgCADgEQAGgJABgQQgBgHgBgGQgCgGgDgFQgDgEgFgCQgFgDgGAAQgLAAgHAJg");
	this.shape_4.setTransform(-49,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA0A2IAAg6IAAgLQgBgFgCgEQgCgEgDgCQgEgCgFAAIgHABIgHAFQgDACgCAEQgCAFAAAGIAAA/IgbAAIAAg7IgBgLQAAgFgCgDQgCgEgEgCQgDgCgGAAQgEABgEABQgDACgEADIgEAJQgCAGABAHIAAA5IgdAAIAAhoIAcAAIAAAOQAEgIAIgFQAIgEAKAAIALABQAFABAEACQAHAEAEAJIAAAAQAGgJAIgEQAJgEAKAAQALAAAGADQAHADAGAFQAEAFACAGQADAIAAAJIAABEg");
	this.shape_5.setTransform(-64.7,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASA1IgShQIAAAAIgRBQIgkAAIgchpIAdAAIASBPIARhPIAjAAIASBPIABAAIAQhPIAdAAIgcBpg");
	this.shape_6.setTransform(-88,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAzQgJgDgHgIQgHgHgEgKQgDgHgBgQQAAgMAEgKQAEgLAHgHQAHgHAJgDQAIgDAOgBQAJAAANAEQAKADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgOgBgIgDgAgSgYQgGAJAAAPQgBAIACAGQACAGADAFQADAEAFACQAFADAFAAQAHAAAEgDQAFgCADgEQAHgJgBgQQAAgHgBgGQgCgGgDgFQgDgEgFgCQgEgDgHAAQgMAAgGAJg");
	this.shape_7.setTransform(-102.9,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNBJIAAiRIAbAAIAACRg");
	this.shape_8.setTransform(-112,21.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWA1QgKgCgJgDIAGgWIASAGQAJACAHAAQAHAAAEgCQAFgCAAgGQAAgEgFgDQgFgDgMgEQgRgGgHgGQgIgIAAgLQAAgJAEgGQADgGAGgEQAGgEAHgCQAIgCAGAAIASABQAJACAIADIgGAVIgQgFIgNgBQgFAAgEACQgEACAAAFQAAAEAEADQAEADAKAEIAPAFQAHADAEADQAFAFACAFQADAFAAAHQAAAJgEAGQgEAGgGAEQgHAEgIABQgHACgHAAQgKAAgLgCg");
	this.shape_9.setTransform(-119.7,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA2IAAhoIAcAAIAAANQAHgQAUAAIAEAAIAEABIgCAVIgEgBIgEAAIgKACQgEACgEAEQgDAFgBAGQgCAHAAAJIAAAzg");
	this.shape_10.setTransform(-133.2,23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAzQgLgEgIgHQgHgHgEgLQgDgGgBgQQAAgLADgKQAEgKAHgIQAHgHAKgEQAGgDAPgBQALAAAJADQAJAEAGAHQAGAHADAJQADAKAAAMIAAAKIhHAAQABAIADAEQADAFAEADQAFADAFABQAGACAHAAIAMgBIANgDIADAVIgPADIgRABQgRgBgHgDgAAYgKQAAgLgGgHQgDgEgEgBQgEgCgFAAQgEAAgEACQgEABgDAEQgHAHgBALIAtAAIAAAAg");
	this.shape_11.setTransform(-143.6,23.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0BJIAAiPIAcAAIAAAOQAHgJAIgDQAJgFAIAAQALABAIAEQAIAEAHAIQAFAHADAKQACAKABALQAAAMgDAKQgDAJgGAIQgGAIgJAEQgIAEgKAAQgIAAgJgDQgIgEgGgHIAAAAIAAAygAgJgwQgFACgEAFQgEAEgBAGQgCAHAAAGQAAAIACAHQABAEAEAFQAEAFAFACQAFACAEABQAGgBAFgCQAEgCADgFQADgEACgGQABgGABgIQgBgGgBgGQgCgHgDgEQgDgFgEgCQgFgDgGAAQgEAAgFADg");
	this.shape_12.setTransform(-155.6,25.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAzQgHgDgFgFQgFgFgDgGQgDgIAAgJIAAhEIAdAAIAAA6IABALIADAJQACAEAEACQAEABAGABIAHgCQAEgCADgDQADgDACgGQACgGAAgIIAAg4IAdAAIAABoIgcAAIAAgNIgBAAQgEAIgIAEQgJAEgJAAQgJAAgIgDg");
	this.shape_13.setTransform(-168.6,23.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYBIQgMgCgLgEIAFgXQAKAEAKABQAJACAJAAQAKAAAHgEQACgCACgDQACgDAAgEQAAgEgCgDQgBgEgDgCIgJgGIgMgFIgPgHQgIgDgFgFQgFgGgDgGQgCgGgBgJQABgLAEgHQAEgIAIgFQAHgFAJgDQAIgCAJAAIAUABIARAEIgFAYQgIgDgHgBIgPgCIgIABQgEABgEACQgCABgCADQgDADAAAFQAAADACADIAFAGIAIAFIALAFIAQAIQAIAEAFAEQAFAFADAHQADAGAAAKQAAAKgEAIQgFAIgHAFQgHAGgKACQgJADgJAAQgLAAgKgCg");
	this.shape_14.setTransform(-180.5,21.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguA1IAAhpIA4AAQAIAAAHACQAFABAFADQAFAEACAFQACAFAAAHQAAAKgEAFQgFAGgHACIAAABIAHACIAHAFQACADABAEQACAFAAAFQAAAGgCAGQgCAFgEAEQgEAEgIACQgGADgKAAgAgSAiIAUAAQAIAAAFgDQAEgCAAgIQAAgHgFgDQgFgDgJAAIgSAAgAgSgKIASAAQAJAAADgCQAFgDAAgHQAAgGgFgDQgDgCgIAAIgTAAg");
	this.shape_15.setTransform(-197,23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAzQgKgDgHgIQgHgHgEgKQgCgHgCgQQAAgMAEgKQAEgLAHgHQAHgHAKgDQAGgDAPgBQAIAAAPAEQAJADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgPgBgGgDgAgSgYQgHAJAAAPQAAAIACAGQACAGADAFQADAEAFACQAEADAGAAQAGAAAFgDQAFgCADgEQAGgJAAgQQABgHgCgGQgCgGgDgFQgDgEgFgCQgFgDgGAAQgMAAgGAJg");
	this.shape_16.setTransform(-66.8,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAzQgLgEgIgHQgHgHgEgLQgDgGgBgQQAAgLADgKQAEgKAHgIQAHgHAKgEQAGgDAPgBQALAAAJADQAJAEAGAHQAGAHADAJQADAKAAAMIAAAKIhHAAQABAIADAEQADAFAEADQAFADAFABQAGACAHAAIAMgBIANgDIADAVIgPADIgRABQgRgBgHgDgAAYgKQAAgLgGgHQgDgEgEgBQgEgCgFAAQgEAAgEACQgEABgDAEQgHAHgBALIAtAAIAAAAg");
	this.shape_17.setTransform(-78.9,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAnBCIgCgbIhJAAIgCAbIgXAAIAAgwIAKAAQAIgMADgQQACgLABgeIAAgOIBVAAIAABTIAOAAIAAAwgAgKgoQAAATgDAOQgCAOgGALIApAAIAAg+IgeAAg");
	this.shape_18.setTransform(-91.3,2.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAXA1IAAhGIgBAAIgoBGIgfAAIAAhpIAcAAIAABFIAnhFIAgAAIAABpg");
	this.shape_19.setTransform(-104.2,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvA1IAAhpIA6AAQAHAAAGACQAGABAFADQAEAEADAFQACAFAAAHQABAKgFAFQgEAGgIACIAAABIAHACIAGAFQADADABAEQADAFAAAFQAAAGgDAGQgCAFgEAEQgEAEgIACQgGADgJAAgAgTAiIAVAAQAIAAAEgDQAFgCAAgIQAAgHgFgDQgFgDgJAAIgTAAgAgTgKIATAAQAIAAAFgCQADgDAAgHQAAgGgDgDQgFgCgGAAIgVAAg");
	this.shape_20.setTransform(-116.2,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXA1QgHgBgFgEQgGgEgDgGQgDgGAAgKQAAgFABgFQABgFADgDQAFgGAJgEQAKgEAMgBQALgCANAAIAAgCQAAgEgBgEIgEgFQgGgFgLAAIgNABIgOAEIgFgUQAGgDAKgBQAKgCAIAAQAZAAAMAKQAGAGADAHQADAIAAAJIAAArIAAAMIABAMIgZAAIgBgHIgBgGQgEAHgIAEQgIAEgKAAQgHAAgHgCgAABAFQgFAAgFACQgFACgDAEQgDADAAAFQAAAHAFAEQAEAEAHAAQAFAAAEgCQAFgCADgEQADgEABgEIABgJIAAgHIgDAAg");
	this.shape_21.setTransform(-133.6,1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAQA1Igkg1IgBAAIAAA1IgcAAIAAhpIAcAAIAAAxIABAAIAigxIAiAAIgoAyIAqA3g");
	this.shape_22.setTransform(-144.2,1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAnA1IAAhSIgZBSIgcAAIgZhSIAABSIgZAAIAAhpIApAAIAXBSIAYhSIApAAIAABpg");
	this.shape_23.setTransform(-158.5,1.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgPAzQgLgEgIgHQgHgHgEgLQgDgGgBgQQAAgLADgKQAEgKAHgIQAHgHAKgEQAGgDAPgBQALAAAJADQAJAEAGAHQAGAHADAJQADAKAAAMIAAAKIhHAAQABAIADAEQADAFAEADQAFADAFABQAGACAHAAIAMgBIANgDIADAVIgPADIgRABQgRgBgHgDgAAYgKQAAgLgGgHQgDgEgEgBQgEgCgFAAQgEAAgEACQgEABgDAEQgHAHgBALIAtAAIAAAAg");
	this.shape_24.setTransform(-172.3,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AghA1IAAhTIgZAAIAAgWIA1AAIAAAjIAWAAQAKAAAHACQAIACAFAEQAFAEAEAGQADAGAAAKQAAAKgDAHQgEAHgFAEQgFAEgIACQgHACgKAAgAgFAgIARAAIAIAAIAGgDQADgBABgDIABgIQAAgHgFgEQgEgDgJAAIgSAAg");
	this.shape_25.setTransform(-184.7,1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKBEQgOgFgJgKQgJgKgFgNIgEgOIgBgQIABgOIAEgPQAEgNAKgKQAEgFAGgEQAGgEAHgCQAMgGARAAIASABQAJACAHADIgGAWIgMgDIgNgCQgMAAgIAFQgIAEgGAHQgFAGgDAKQgDAJAAAJQAAAKADAJQADAJAFAHQAGAHAIAEQAIAEALAAQAIAAAHgBIAMgEIAFAWQgHAEgJABQgJACgKAAQgQAAgMgGg");
	this.shape_26.setTransform(-196.8,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-205.2,-16.8,202.6,52.3), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAzQgJgDgHgIQgHgHgEgKQgCgHgCgQQAAgMAEgKQAEgLAHgHQAHgHAJgDQAIgDAOgBQAIAAAOAEQAKADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgOgBgIgDgAgSgYQgGAJgBAPQABAIABAGQACAGADAFQADAEAFACQAFADAFAAQAGAAAFgDQAFgCADgEQAGgJABgQQgBgHgBgGQgCgGgDgFQgDgEgFgCQgFgDgGAAQgLAAgHAJg");
	this.shape.setTransform(-31.5,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBJIAAhoIAbAAIAABogAgNgwIAAgYIAbAAIAAAYg");
	this.shape_1.setTransform(-40.6,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBGQgJgEgFgHQgGgIgDgKQgDgKAAgMQAAgLADgJQADgKAGgIQAGgHAIgEQAJgFALAAQAIAAAIAEQAIADAGAHIAAg1IAdAAIAACSIgcAAIAAgNIAAAAQgHAIgIAEQgJAEgIAAQgLAAgIgFgAgKgLQgFADgCAEQgDAEgCAGQgBAGAAAHQAAAIABAGQACAGADAFQADAEAEADQAFACAFAAQAGABAFgDQAFgDADgEQADgFACgGQACgGAAgIQAAgHgCgGQgCgGgDgEQgDgEgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_2.setTransform(-50.1,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAzQgHgDgFgFQgFgEgDgHQgDgIAAgJIAAhEIAdAAIAAA6IABALIADAJQACAEAEACQAEABAGAAIAHgBQAEgCADgDQADgEACgFQACgGAAgIIAAg4IAdAAIAABoIgcAAIAAgNIgBAAQgEAHgIAEQgJAFgJAAQgJAAgIgDg");
	this.shape_3.setTransform(-62.6,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBHIgNgjIg2AAIgMAjIgfAAIAziOIAnAAIAzCOgAAUANIgUg8IgUA8IAoAAg");
	this.shape_4.setTransform(-75.9,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWA1QgKgCgJgDIAGgWIASAGQAJACAHAAQAHAAAEgCQAFgCAAgGQAAgEgFgDQgFgDgMgEQgRgGgHgGQgIgIAAgLQAAgJAEgGQADgGAGgEQAGgEAHgCQAIgCAGAAIASABQAJACAIADIgGAVIgQgFIgNgBQgFAAgEACQgEACAAAFQAAAEAEADQAEADAKAEIAPAFQAHADAEADQAFAFACAFQADAFAAAHQAAAJgEAGQgEAGgGAEQgHAEgIABQgHACgHAAQgKAAgLgCg");
	this.shape_5.setTransform(-93.2,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAzQgLgEgIgHQgHgHgEgLQgDgGgBgQQAAgLADgKQAEgKAHgIQAHgHAKgEQAGgDAPgBQALAAAJADQAJAEAGAHQAGAHADAJQADAKAAAMIAAAKIhHAAQABAIADAEQADAFAEADQAFADAFABQAGACAHAAIAMgBIANgDIADAVIgPADIgRABQgRgBgHgDgAAYgKQAAgLgGgHQgDgEgEgBQgEgCgFAAQgEAAgEACQgEABgDAEQgHAHgBALIAtAAIAAAAg");
	this.shape_6.setTransform(-103.9,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBHIgBgJIgDgKIgDgKIgCgIIgDgKQgCgDgDgDIgHgDIgMgBIgOAAIAAA5IgdAAIAAiOIA3AAQAJAAAJADQAJABAHAFQAHAFAEAHQAEAIAAALQAAAGgBAFQgCAGgDADIgIAIIgKADIAAABIAGADIAEAFIAFAHIADALIAHAWIAGAWgAgagJIAUAAIAKgBIAIgCQAEgDACgEQACgDAAgGQAAgFgDgEQgCgEgDgCQgEgCgFgBIgIgBIgVAAg");
	this.shape_7.setTransform(-115.7,21);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZALIAAgVIAzAAIAAAVg");
	this.shape_8.setTransform(-126.8,22.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNBJIAAhoIAbAAIAABogAgNgwIAAgYIAbAAIAAAYg");
	this.shape_9.setTransform(-133.6,20.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAbBHIAAg9Ig1AAIAAA9IgeAAIAAiOIAeAAIAAA7IA1AAIAAg7IAeAAIAACOg");
	this.shape_10.setTransform(-143.6,21);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXA1QgHgBgFgEQgGgEgDgGQgDgGAAgKQAAgFABgFQABgFADgDQAFgGAJgEQAKgEAMgBQALgCANAAIAAgCQAAgEgBgEIgEgFQgGgFgLAAIgNABIgOAEIgFgUQAGgDAKgBQAKgCAIAAQAZAAAMAKQAGAGADAHQADAIAAAJIAAArIAAAMIABAMIgZAAIgBgHIgBgGQgEAHgIAEQgIAEgKAAQgHAAgHgCgAABAFQgFAAgFACQgFACgDAEQgDADAAAFQAAAHAFAEQAEAEAHAAQAFAAAEgCQAFgCADgEQADgEABgEIABgJIAAgHIgDAAg");
	this.shape_11.setTransform(-39.8,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQA1Igkg1IgBAAIAAA1IgcAAIAAhpIAcAAIAAAxIABAAIAigxIAiAAIgoAyIAqA3g");
	this.shape_12.setTransform(-50.4,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAyA1Igjg1IgBAAIAAA1IgcAAIAAg1IgiA1IghAAIAmg3IglgyIAiAAIAgAxIAAgxIAcAAIAAAxIABAAIAggxIAhAAIgkAyIAmA3g");
	this.shape_13.setTransform(-65.2,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BJIAAiPIAcAAIAAAOQAHgJAJgDQAIgFAIAAQALABAIAEQAJAEAGAIQAFAHADAKQACAKABALQAAAMgEAKQgDAJgFAIQgGAIgIAEQgJAEgKAAQgJAAgHgDQgJgEgGgHIAAAAIAAAygAgJgwQgFACgEAFQgDAEgCAGQgCAHAAAGQAAAIACAHQACAEADAFQAEAFAFACQAFACAEAAQAGAAAFgCQAFgCACgFQADgEACgGQACgGAAgIQAAgGgCgGQgCgHgDgEQgCgFgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_14.setTransform(-79.7,2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAzQgLgEgIgHQgHgHgEgLQgDgGgBgQQAAgLADgKQAEgKAHgIQAHgHAKgEQAGgDAPgBQALAAAJADQAJAEAGAHQAGAHADAJQADAKAAAMIAAAKIhHAAQABAIADAEQADAFAEADQAFADAFABQAGACAHAAIAMgBIANgDIADAVIgPADIgRABQgRgBgHgDgAAYgKQAAgLgGgHQgDgEgEgBQgEgCgFAAQgEAAgEACQgEABgDAEQgHAHgBALIAtAAIAAAAg");
	this.shape_15.setTransform(-92.2,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAnBCIgCgbIhJAAIgCAbIgXAAIAAgwIAKAAQAIgMADgQQACgLABgeIAAgOIBVAAIAABTIAOAAIAAAwgAgKgoQAAATgDAOQgCAOgGALIApAAIAAg+IgeAAg");
	this.shape_16.setTransform(-104.6,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAnBCIgCgbIhJAAIgCAbIgXAAIAAgwIAKAAQAIgMADgQQACgLABgeIAAgOIBVAAIAABTIAOAAIAAAwgAgKgoQAAATgDAOQgCAOgGALIApAAIAAg+IgeAAg");
	this.shape_17.setTransform(-117.5,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAzQgJgDgHgIQgHgHgEgKQgDgHgBgQQAAgMAEgKQAEgLAHgHQAHgHAJgDQAIgDAOgBQAIAAAOAEQAKADAHAHQAHAHAEALQAEAOAAAIQAAANgEAKQgEAKgHAHQgHAIgKADQgKAEgMAAQgOgBgIgDgAgSgYQgGAJgBAPQABAIABAGQACAGADAFQADAEAFACQAEADAGAAQAGAAAFgDQAFgCADgEQAHgJAAgQQAAgHgCgGQgCgGgDgFQgDgEgFgCQgFgDgGAAQgLAAgHAJg");
	this.shape_18.setTransform(-130.2,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAaBHIAAh2Ig0AAIAAB2IgdAAIAAiOIBvAAIAACOg");
	this.shape_19.setTransform(-143.6,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-152.8,-17.6,154.4,52.3), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15copy();
	this.instance.parent = this;
	this.instance.setTransform(-341.1,-218.5,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-341.1,-218.5,342.3,324.4), null);


(lib.i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBJIAAhoIAWAAIAABogAgLgzIAAgVIAXAAIAAAVg");
	this.shape.setTransform(0.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhAhyICBAAQAyAAAAAyIAACBQAAAygyAAIiBAAQgyAAAAgyIAAiBQAAgyAyAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AifDeQgyABAAgyIAAlYQAAgzAyAAIE/AAQAyAAAAAzIAAFYQAAAygygBg");
	this.shape_2.setTransform(0.5,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag7BzQgyAAAAg5IAAhzQAAg5AyAAIB3AAQAyAAAAA5IAABzQAAA5gyAAg");
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,25,25);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.ov();
	this.instance.parent = this;
	this.instance.setTransform(-580,-372);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-580,-372,1230,793), null);


(lib.credit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;
	this.instance.setTransform(-153,-57,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.credit, new cjs.Rectangle(-153,-57,304.1,82.4), null);


(lib.close_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AifDeQgyABAAgyIAAlYQAAgzAyAAIE/AAQAyAAAAAzIAAFYQAAAygygBg");
	this.shape.setTransform(-0.1,1.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,0,1).p("AA+A+Ih7h7");
	this.shape_1.setTransform(-0.4,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,0,1).p("AA+g9Ih7B7");
	this.shape_2.setTransform(-0.4,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,0,1).p("AAAAAIg9A+AA+A+Ig+g+Ig9g9AA+g9Ig+A9");
	this.shape_3.setTransform(-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3}]},1).wait(3));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AhAhyICBAAQAyAAAAAyIAACBQAAAygyAAIiBAAQgyAAAAgyIAAiBQAAgyAyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7BzQgyAAAAg5IAAhzQAAg5AyAAIB3AAQAyAAAAA5IAABzQAAA5gyAAg");
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,25,25);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Az0GRQg1AAAAg4IAAjfQAAg4A1AAMAnoAAAQA1AAAAA4IAADfQAAA4g1AAgAzzhBQg0AAgBg4IAAjfQABg4A0AAMAnoAAAQA1AAAAA4IAADfQAAA4g1AAg");
	mask.setTransform(-2.8,-77.8);

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,-0.2,32.7,0.3).s().p("AkSDwQg1gBABg0IACl5QAAg1A2AAIIiAEQA0ABgBA1IgCF4QgBA1g1AAg");
	this.shape.setTransform(-173.2,-101.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,-0.1,32.7,0.3).s().p("AkVDtQgygMAAg+QACizAFixQARgyBCAAQEDACEBAFQAxANAAA9QgBC0gFCwQgSAyhCAAQkCgCkBgFg");
	this.shape_1.setTransform(-151.5,-101.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,-0.1,32.7,0.2).s().p("AkYDqQgvgYAAhGQABirAIilQAjgvBQAAQD1ABDvAJQAvAYAABGQgBCrgIClQgjAuhQABQj1gBjvgJg");
	this.shape_2.setTransform(-129.7,-101.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0,32.7,0.1).s().p("AkbDnQgrgkgBhOQABiiALiaQAzgsBfAAQDnABDeAMQArAkABBOQgBCigLCaQg0ArheABQjmgBjfgMg");
	this.shape_3.setTransform(-108,-101.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.1,32.7,0.1).s().p("AkeDkQgpgvAAhXQAAiZAPiPQBEgoBsgBQDaABDNAOQApAwAABXQAACagPCNQhFAphsACQjZgCjNgPg");
	this.shape_4.setTransform(-86.2,-101.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0,32.7,0).s().p("AkhDiQgmg8AAhfQAAiRASiCQBWgmB5gCQDMABC8ATQAlA7ABBfQAACSgSCBQhWAmh5ACQjMgBi8gSg");
	this.shape_5.setTransform(-64.5,-102);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.1,32.7,0).s().p("AkkDfQgihHgChoQABiJAVh2QBngjCHgCQC+ABCrAVQAjBHAABoQAACJgVB2QhnAjiHACQi+gBirgVg");
	this.shape_6.setTransform(-42.8,-102.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.1,32.7,-0.1).s().p("AknDcQgfhTgChwQABiBAYhqQB3ggCWgCQCwABCaAYQAfBTABBxQAACAgYBqQh4AgiVACQiwgBiagYg");
	this.shape_7.setTransform(-21,-102.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.2,32.7,-0.1).s().p("AkqDZQgchegCh5QABh4AbhfQCJgdCjgCQCiAACJAcQAcBfACB5QgBB3gbBfQiJAdijACQiiAAiJgcg");
	this.shape_8.setTransform(0.7,-102.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.3,32.7,-0.1).s().p("AktDWQgZhqgCiAQABhxAehTQCagaCwgCQCVAAB4AfQAZBqACCAQAABxgfBTQiaAaivACQiWAAh4gfg");
	this.shape_9.setTransform(22.4,-102.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.3,32.7,-0.2).s().p("AkwDTQgWh2gCiJQAAhnAihIQCrgXC+gDQCHAABnAjQAWB2ACCIQAABogiBIQirAWi9AEQiIgBhngig");
	this.shape_10.setTransform(44.1,-102.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.4,32.7,-0.3).s().p("AkzDQQgSiBgDiRQAAhgAlg8QC8gUDLgDQB7AABVAlQATCDACCRQAABfgkA7Qi8AUjMAEQh6gBhWglg");
	this.shape_11.setTransform(65.9,-102.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.4,32.7,-0.3).s().p("Ak2DNQgPiNgDiZQAAhYAogvQDNgSDZgDQBsAABFApQAQCNACCaQAABXgoAvQjNARjYAEQhtAAhFgpg");
	this.shape_12.setTransform(87.6,-102.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.6,0.5,32.6,-0.4).s().p("Ak5DLQgNiZgCiiQgBhPAsgkQDegODngEQBegBA0AsQANCaACCiQABBOgsAkQjeAOjmAEQhfAAg0grg");
	this.shape_13.setTransform(109.3,-102.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.6,0.5,32.6,-0.4).s().p("Ak8DIQgJilgEirQAAhGAvgYQDvgLD1gEQBRgBAiAvQAKClACCrQABBGgvAYQjvALj0AEQhRAAgjgug");
	this.shape_14.setTransform(131.1,-102.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.6,0.6,32.6,-0.5).s().p("Ak/DFQgGiwgDizQgBg+AygNQEAgIEDgEQBCgBASAyQAHCxADCzQAAA9gyANQkAAIkCAFIgBAAQhDAAgRgyg");
	this.shape_15.setTransform(152.8,-102.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.6,0.6,32.6,-0.6).s().p("AlCDCIgHl4QgBg1A2gBIIhgKQA1gBABA2IAHF4QAAA1g1AAIohALIgBAAQg0AAgBg1g");
	this.shape_16.setTransform(174.5,-102.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,-0.2,32.7,0.2).s().p("AkVDtQgygMAAg9QACi0AFixQARgyBCAAQEDACEBAFQAxAMAAA+QgBCzgFCxQgSAyhCAAQkCgCkBgFg");
	this.shape_17.setTransform(-151.5,-55.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,-0.1,32.7,0.2).s().p("AkYDqQgvgYAAhGQABirAIilQAjgvBQAAQD1ABDvAJQAvAYAABGQgBCrgIClQgjAuhQABQj1gCjvgIg");
	this.shape_18.setTransform(-129.7,-55.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0,32.7,0.1).s().p("AkbDnQgrgkgBhOQABiiALiaQAzgsBfAAQDnABDeAMQArAjABBPQgBCigLCaQg0ArheABQjmgBjfgMg");
	this.shape_19.setTransform(-108,-55.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.1,32.7,0.1).s().p("AkeDlQgpgwAAhWQAAibAPiNQBEgpBsgCQDaACDNAPQApAvAABXQAACagPCOQhFAphsAAQjZgBjNgOg");
	this.shape_20.setTransform(-86.2,-55.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0,32.7,0).s().p("AkhDhQgmg7AAhfQAAiRASiDQBWglB5gCQDMACC8ARQAlA8ABBfQAACRgSCCQhWAmh5ABQjMAAi8gTg");
	this.shape_21.setTransform(-64.5,-55.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.1,32.7,0).s().p("AkkDeQgihGgChoQABiJAVh3QBngiCHgCQC+ABCrAVQAjBHAABoQAACJgVB2QhnAjiHACQi+gBirgWg");
	this.shape_22.setTransform(-42.8,-55.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.1,32.7,-0.1).s().p("AknDcQgfhTgChwQABiBAYhrQB3gfCWgCQCwABCaAYQAfBTABBwQAACBgYBqQh4AgiVACQiwgBiagYg");
	this.shape_23.setTransform(-21,-55.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.2,32.7,-0.2).s().p("AktDWQgZhqgCiAQABhxAehTQCagaCwgCQCVAAB4AfQAZBqACCBQAABwgfBTQiaAaivACQiWAAh4gfg");
	this.shape_24.setTransform(22.4,-55.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.3,32.7,-0.2).s().p("AkwDTQgWh2gCiIQAAhpAihHQCrgXC+gDQCHAABnAjQAWB2ACCJQAABngiBHQirAXi9AEQiIgBhngig");
	this.shape_25.setTransform(44.1,-55.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.4,32.7,-0.3).s().p("AkzDQQgSiBgDiRQAAhgAlg8QC8gUDLgDQB7AABVAlQATCCACCSQAABfgkA7Qi8AUjMAEQh6gBhWglg");
	this.shape_26.setTransform(65.9,-55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.5,0.4,32.7,-0.3).s().p("Ak2DNQgPiNgDiaQAAhWAogxQDNgRDZgDQBsAABFApQAQCOACCZQAABXgoAvQjNARjYAEQhtAAhFgpg");
	this.shape_27.setTransform(87.6,-54.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.6,0.5,32.6,-0.4).s().p("Ak5DLQgNiZgCiiQgBhPAsgkQDegODngEQBeAAA0ArQANCaACCiQABBOgsAkQjeAOjmAEQhfAAg0grg");
	this.shape_28.setTransform(109.3,-54.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.6,0.5,32.6,-0.4).s().p("Ak8DIQgJilgEiqQAAhHAvgYQDvgLD1gFQBRAAAiAvQAKCmACCqQABBGgvAXQjvAMj0AFQhRAAgjgvg");
	this.shape_29.setTransform(131.1,-54.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.58],-32.6,0.6,32.6,-0.5).s().p("Ak/DFQgGixgDizQgBg+AygMQEAgIEDgEQBCgBASAyQAHCxADCzQAAA9gyANQkAAIkCAFQhDAAgSgyg");
	this.shape_30.setTransform(152.8,-54.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{y:-101.7}}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8,p:{y:-102.2}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{y:-102.8}}]},1).to({state:[{t:this.shape,p:{y:-56}}]},5).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_8,p:{y:-55.3}}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_16,p:{y:-54.5}}]},1).wait(15));

	// FlashAICB
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzzimMAnnAAAQA7AAAAA6IAADYQAAA7g7AAMgnnAAAQg7AAAAg7IAAjYQAAg6A7AAg");
	this.shape_31.setTransform(-2.7,-54.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgpAyIAAhjIAWAAIAAAjIAXAAQAIAAAHACQAHACAFAEQAFADADAGQADAGAAAIQAAAKgDAGQgDAGgFAEQgFAEgHACQgHABgIAAgAgTAiIATAAIAIAAIAGgDQADgCACgDQABgDAAgFQAAgFgBgDQgCgDgDgCQgDgCgDgBIgIAAIgTAAg");
	this.shape_32.setTransform(23.7,-54.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgKAyIAAhTIggAAIAAgQIBVAAIAAAQIggAAIAABTg");
	this.shape_33.setTransform(13.6,-54.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAYAyIAAhKIgrBKIgZAAIAAhjIAVAAIAABJIAAAAIAqhJIAbAAIAABjg");
	this.shape_34.setTransform(3.3,-54.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAWAyIAAhTIgrAAIAABTIgWAAIAAhjIBXAAIAABjg");
	this.shape_35.setTransform(-8.5,-54.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgbBFIARgnIgnhiIAXAAIAaBJIAAAAIAbhJIAXAAIg1CJg");
	this.shape_36.setTransform(-19.4,-52.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAXBEIgyhEIgBAAIAABEIgWAAIAAiHIAWAAIAABAIABAAIAwhAIAbAAIg0BBIA3BGg");
	this.shape_37.setTransform(-29.7,-55.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzzimMAnnAAAQA7AAAAA6IAADYQAAA7g7AAMgnnAAAQg7AAAAg7IAAjYQAAg6A7AAg");
	this.shape_38.setTransform(-2.7,-101.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgDA0IgLgDIgKgFIgHgGQgHgHgEgKQgDgKAAgLQAAgKADgKQAEgKAGgHQAGgHAJgEQAGgDANgBQALAAAIAEQAIADAGAHQAGAGACAJQADAKAAALIAAAIIhGAAQABAPAKAHQAKAIANAAIANgBIAMgDIADAQQgNAFgRAAgAgQgdQgGAIgCAMIAyAAIAAAAQAAgMgHgIQgDgEgEgBQgEgCgGAAQgKAAgIAHg");
	this.shape_39.setTransform(43.7,-100.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgDA0IgLgDIgKgFIgHgGQgHgHgEgKQgDgKAAgLQAAgKADgKQAEgKAGgHQAGgHAJgEQAGgDANgBQALAAAIAEQAIADAGAHQAFAGADAJQADAKAAALIAAAIIhGAAQACAPAJAHQAKAIANAAIANgBIAMgDIADAQQgNAFgRAAgAgQgdQgGAIgCAMIAxAAIAAAAQABgMgHgIQgDgEgEgBQgFgCgFAAQgKAAgIAHg");
	this.shape_40.setTransform(32.6,-100.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAXAyIAAgrIgsAAIAAArIgWAAIAAhjIAWAAIAAAoIAsAAIAAgoIAVAAIAABjg");
	this.shape_41.setTransform(21.2,-100.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOBGQgGgCgGgEQgFgDgEgFQgEgFgCgGQgEgHgBgJQgBgHAAgLIAAgUQABgJACgJIAFgOQADgGAFgGQAGgEAJgEIASgDIAUgDIAUgEIACASIgPACIgSADIgQADQgIACgFAEQgDACgCADIgDAHIgCAIIgBAIIABAAQAFgJAIgFQAJgFALAAQAJAAAIAEQAIADAGAHQAFAGAEAKQADAIAAAMQAAAMgDAJQgEAJgGAIQgGAGgJAEQgJADgLAAQgHAAgHgBgAgKgLQgFACgDAFQgHAJAAAPQAAARAHAJQAHAIALAAQANABAHgKIAFgLQABgGAAgIQAAgQgGgIQgEgFgEgCQgFgCgGAAQgGAAgFACg");
	this.shape_42.setTransform(9.6,-102.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgHgHQgGgGgEgKQgDgKAAgMQAAgMADgJQAEgKAGgHQAHgHAJgDQAJgEAKAAQALAAAJAEQAJADAHAHQAGAHAEAKQADAJAAAMQAAAMgDAKQgEAKgGAGQgHAHgJAEQgJAEgLAAQgKAAgJgEgAgLghQgFADgEAFQgDAFgCAGQgBAHAAAHQAAAQAHAKQADAFAFACQAFADAGAAQAOAAAHgKQAGgKAAgQQAAgHgBgHQgCgGgDgFQgEgFgFgDQgFgCgHAAQgGAAgFACg");
	this.shape_43.setTransform(-2.2,-100.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgvBGIAAiIIAVAAIAAANIABAAIAGgHIAIgFQAIgEAIAAQAKAAAIAEQAIAEAGAHQAFAIADAJQADAJAAALQAAAMgDAJQgDAJgGAHQgFAHgIAFQgIADgKAAQgIAAgIgDQgIgDgGgJIAAAygAgKgxQgFACgEAFQgDAFgCAHQgCAGAAAHQAAAIACAHQACAGADAEQAEAFAFADQAFADAGgBQAGABAFgDQAFgDADgFQADgFACgFQABgHAAgIQAAgHgBgGQgCgIgDgEQgDgEgFgDQgFgEgGAAQgGAAgFAEg");
	this.shape_44.setTransform(-13.8,-98.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAoBAIgCgcIhMAAIgBAcIgRAAIAAgsIAKAAQAEgGACgHIAFgOIADgSIABgWIAAgQIBKAAIAABTIAOAAIAAAsgAgLgoQgBAYgCALQgBAGgCAGQgDAIgDAFIAsAAIAAhDIggAAg");
	this.shape_45.setTransform(-26.4,-99.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTAxQgJgEgHgHQgGgGgEgKQgDgKAAgMQAAgMADgJQAEgKAGgHQAHgHAJgDQAJgEAKAAQALAAAJAEQAJADAHAHQAGAHAEAKQADAJAAAMQAAAMgDAKQgEAKgGAGQgHAHgJAEQgJAEgLAAQgKAAgJgEgAgLghQgFADgEAFQgDAFgCAGQgBAHAAAHQAAAQAHAKQADAFAFACQAFADAGAAQAOAAAHgKQAGgKAAgQQAAgHgBgHQgCgGgDgFQgEgFgFgDQgFgCgHAAQgGAAgFACg");
	this.shape_46.setTransform(-38.2,-100.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAdBEIAAh1Ig5AAIAAB1IgWAAIAAiHIBlAAIAACHg");
	this.shape_47.setTransform(-50.7,-102.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.4,-119.3,267.5,82.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(-4,-142.5,0.173,0.173,-126.8,0,0,0.1,-0.2);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,scaleX:0.4,scaleY:0.4,rotation:-180.6,y:-142.6,alpha:1},19,cjs.Ease.get(-1)).to({regX:0.2,regY:0.1,scaleX:0.63,scaleY:0.63,rotation:-237.5,x:-3.9,alpha:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-276.3,237.5,252.8);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.close_x = new lib.close_x();
	this.close_x.parent = this;
	this.close_x.setTransform(-106.5,-75.6,0.806,0.806,0,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.close_x, 0, 1, 2, false, new lib.close_x(), 3);

	this.timeline.addTween(cjs.Tween.get(this.close_x).wait(1));

	// Layer 1
	this.text = new cjs.Text("Motion Eye – Моушн Ай, HDR – ЭйчДиАр (доступно только на Xperia XZ Premium (Иксперия Икс Зед Премиум) и Xperia XZ1 (Иксперия Икс Зед Один), Hi-Res Audio – Аудио высокого разрешения. Xperia XZ1 Compact – Иксперия Икс Зед Один Компакт. Все товарные знаки принадлежат их правообладателям.*Подтверждено сервисом SpecTRAX компании Strategy Analytics, действительно на 31 августа 2017 г. Результаты исследования компании Strategy Analytics указаны по адресу: https://www.sonymobile.com/ru/legal/\ntestresults/. ", "12px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 208;
	this.text.parent = this;
	this.text.setTransform(-210,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgU2AnPMAAAhOdMApsAAAMAAABOdg");
	this.shape.setTransform(-104.6,107.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(-238.1,-143.3,266.9,502.3), null);


// stage content:
(lib._240x400_canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		myLocalThis01 = this;
		self=this;
		
		this.legal_mc.alpha = 0;
		
		this.i_btn.addEventListener("mouseover", onMouseClick);
		function onMouseClick() { self.legal_mc.alpha = 1; }
		
		
		this.legal_mc.close_x.addEventListener("mouseover", onMouseClick2);
		function onMouseClick2() { self.legal_mc.alpha = 0;}
	}
	this.frame_450 = function() {
		showObject("b2");
	}
	this.frame_540 = function() {
		hideObject("b2");
	}
	this.frame_543 = function() {
		this.gotoAndPlay(2);
		//чтобы не закрывался открытй пользователем лигал
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(450).call(this.frame_450).wait(90).call(this.frame_540).wait(3).call(this.frame_543).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,0,0,3).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(544));

	// legal
	this.legal_mc = new lib.legal();
	this.legal_mc.parent = this;
	this.legal_mc.setTransform(123,92.9,1,1,0,0,0,-104,0.1);

	this.timeline.addTween(cjs.Tween.get(this.legal_mc).wait(544));

	// i
	this.i_btn = new lib.i();
	this.i_btn.parent = this;
	this.i_btn.setTransform(217.7,-60.7,0.8,0.8);
	new cjs.ButtonHelper(this.i_btn, 0, 1, 2, false, new lib.i(), 3);

	this.timeline.addTween(cjs.Tween.get(this.i_btn).wait(356).to({y:23.2,alpha:0},0).to({alpha:1},12).wait(164).to({alpha:0},11).wait(1));

	// logo_Sony
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjCAvQgUgTAAgcQAAgcAUgSQANgLAWgHQAUgHAVAAQAxAAAcAZQAUASAAAcQAAAcgUATQgcAZgxAAQguAAgegZgAieglQgPAPgBAWQABAXAPAPQAQAPAYAAQAZAAAQgPQAPgPAAgXQAAgWgPgPQgQgQgZAAQgXAAgRAQgAlhBDQgRgDgMgGQgFgCABAEIAAAHIgVAAIAAgzIASAAQAAAKAFAFQAIAKAOAFQATAHAVAAQATAAANgGQAMgEAAgKQAAgJgPgEIhQgLQgPgDgNgKQgKgJABgPQgBgWAagLQAWgKAbAAQAkAAAYANQAEACAAgEIAAgFIATAAIAAAsIgQAAQgDgKgIgHIgKgGQgSgIgYAAQgaAAgMAHQgGAFAAAGQgBAFAIAEIATADIAVACQAaADATAEIARAGQAGADAGAEQALANAAAOQAAARgNAJQgKAIgPAEQgTAGgVAAQgNAAgSgEgAEOBBIAAgRIAUAAQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgEIAAgZIgBgCIgwg2QgGgHgIAAIgQAAIAAgQIBZAAIAAAQIgLAAQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAABABQAAAAABABIAdAkIABAAIAfgkQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgLAAIAAgQIBJAAIAAAQIgQAAQgIAAgFAGIgwA3IgBACIAAAdQAAABABAAQAAABAAAAQABAAAAABQABAAABAAIAUAAIAAARgACVBBIhlhaIAAA/IABAIQABACAGAAIASAAIAAARIhKAAIAAgRIAQAAQAHAAgBgKIAAhLQAAgKgKAAIgNAAIAAgQIA+AAIBYBPIgBg1QABgGgCgCQgCgCgGAAIgQAAIAAgQIBMAAIAAAQIgQAAQgGAAgCACQgBACAAAGIABBmg");
	this.shape_1.setTransform(68.1,21.1,1.26,1.26);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(544));

	// FlashAICB
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAQBTIAAicIgiAXIgEgGIAmgaIAGAAIAAClg");
	this.shape_2.setTransform(161.8,374.3,0.943,0.943);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhGBSIAAgGICAiWIh3AAIAAgHICCAAIAAAGIiACWICCAAIAAAHg");
	this.shape_3.setTransform(149.1,374.3,0.943,0.943);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAAAEIhEBQIgFgFIBFhPIhDhPIAGgEIBBBNIBChNIAHAEIhEBPIBFBPIgFAFg");
	this.shape_4.setTransform(132.6,374.3,0.943,0.943);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgKBTIAAilIAVAAIAAClg");
	this.shape_5.setTransform(95.7,374.4,0.943,0.943);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgjggIAdAAIAqAxIgPAQg");
	this.shape_6.setTransform(19.9,369.7,0.943,0.943);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AA6BTIg5hDIg6BDIgcAAICNilIAdAAIhHBSIBIBTg");
	this.shape_7.setTransform(24.4,374.4,0.943,0.943);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AhEBTIAAilIBRAAQA2ABACAwQgCAug2ABIgpAAIAAgQIAnAAQAPAAALgIQAKgHAAgQQAAgRgKgHQgLgIgRAAIg3AAIAACUg");
	this.shape_8.setTransform(44.5,374.4,0.943,0.943);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AhABTIAAilICAAAIAAASIhrAAIAACCIBsAAIAAARg");
	this.shape_9.setTransform(62.2,374.4,0.943,0.943);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgmAIIAAgQIBNAAIAAAQg");
	this.shape_10.setTransform(63.5,374.1,0.943,0.943);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AAyBTIgmhFIgtAAIAAgQIAnAAQARAAAMgKQAHgIABgNQAAgSgOgIQgJgFgOAAIg5AAIAACTIgWAAIAAilIBUAAIAOACQAPADAKAJQAOANAAAWIAAACQAAAJgEAJQgHAPgRAHIgEABIAqBJg");
	this.shape_11.setTransform(81.6,374.4,0.943,0.943);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AA+BTIgWgzIg5AAIAHgQIAqAAIgfhLIg8COIgYAAIBLilIAUAAIBIClg");
	this.shape_12.setTransform(109.8,374.4,0.943,0.943);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A5nG8IAAt3MAzPAAAIAAN3g");
	this.shape_13.setTransform(120.8,399.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(544));

	// blick 5
	this.instance = new lib.Symbol12("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(24.6,88.1,0.642,0.642,0,0,0,0.7,-140.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(369).to({_off:false},0).wait(175));

	// blick_6
	this.instance_1 = new lib.Symbol12("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(118,328.6,1,1,0,0,0,-93,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(504));

	// blick_4
	this.instance_2 = new lib.Symbol12("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-44.9,319.5,1,1,0,0,0,-93,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(280).to({_off:false},0).wait(264));

	// blick_3
	this.instance_3 = new lib.Symbol12("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(91.1,425.5,1,1,0,0,0,-93,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(194).to({_off:false},0).wait(350));

	// blick_2
	this.instance_4 = new lib.Symbol12("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(8.9,364.9,1,1,0,0,0,-93,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(123).to({_off:false},0).wait(421));

	// blick_1
	this.instance_5 = new lib.Symbol12("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(57.2,205.6,0.72,0.72,0,0,0,-1.6,-145.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({_off:false},0).wait(480));

	// _logo_4К
	this.instance_6 = new lib.Symbol31();
	this.instance_6.parent = this;
	this.instance_6.setTransform(34.6,141.3,0.736,0.736,-43.9,0,0,-21.9,0.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(112).to({_off:false},0).to({regY:0.1,scaleX:1,scaleY:1,rotation:0,x:37,y:126,alpha:1},11).wait(55).to({scaleX:1.34,scaleY:1.34,rotation:26.4,x:36.1,y:110.8,alpha:0},11).to({_off:true},1).wait(354));

	// _logo_Eye
	this.instance_7 = new lib.Symbol30();
	this.instance_7.parent = this;
	this.instance_7.setTransform(28.3,123.5,0.675,0.675,-72.5,0,0,-44.9,1.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(190).to({_off:false},0).to({regY:0.9,scaleX:1.03,scaleY:1.03,rotation:0,x:59.5,y:121,alpha:1},13,cjs.Ease.get(1)).wait(50).to({regX:-44.8,regY:1,scaleX:1.24,scaleY:1.24,rotation:43.2,x:50.7,y:109.9,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(275));

	// _logo_HiRes
	this.instance_8 = new lib.Symbol29();
	this.instance_8.parent = this;
	this.instance_8.setTransform(193.2,52.1,0.568,0.568,-51.2,0,0,160,-90);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(269).to({_off:false},0).to({regY:-90.2,scaleX:0.84,scaleY:0.84,rotation:0,y:52,alpha:1},11).wait(62).to({scaleX:1.34,scaleY:1.34,rotation:29.7,x:193.3,alpha:0},13).to({_off:true},1).wait(188));

	// качество звука Hi-Res
	this.instance_9 = new lib.Symbol23();
	this.instance_9.parent = this;
	this.instance_9.setTransform(87.9,60.2,1,1,0,0,0,-77.9,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(269).to({_off:false},0).to({alpha:1},5).wait(76).to({alpha:0},5).to({_off:true},1).wait(188));

	// Layer 15
	this.instance_10 = new lib.Symbol27();
	this.instance_10.parent = this;
	this.instance_10.setTransform(113.7,277.4,0.93,0.93,0,0,0,-111.7,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(269).to({_off:false},0).to({scaleX:1,scaleY:1,x:113.8,alpha:1},14,cjs.Ease.get(1)).wait(59).to({alpha:0},13).to({_off:true},1).wait(188));

	// съемка видео в Super slow motion
	this.instance_11 = new lib.Symbol24();
	this.instance_11.parent = this;
	this.instance_11.setTransform(117.4,60.2,1,1,0,0,0,-101.4,0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(190).to({_off:false},0).to({alpha:1},7).wait(61).to({alpha:0},10).to({_off:true},1).wait(275));

	// Layer 16
	this.instance_12 = new lib.Symbol28();
	this.instance_12.parent = this;
	this.instance_12.setTransform(138.7,249.7,1,1,0,0,0,-111.5,0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(190).to({_off:false},0).to({x:128.7,y:239.7,alpha:1},12,cjs.Ease.get(1)).wait(52).to({alpha:0},14).to({_off:true},1).wait(275));

	// 4K HDR дисплей
	this.instance_13 = new lib.Symbol25();
	this.instance_13.parent = this;
	this.instance_13.setTransform(125.6,60.1,1,1,0,0,0,-112.8,0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(112).to({_off:false},0).to({alpha:1},12).wait(56).to({alpha:0},9).to({_off:true},1).wait(354));

	// Layer 19
	this.instance_14 = new lib.Tween6("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(193.1,271);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(112).to({_off:false},0).to({x:173.1,alpha:1},17,cjs.Ease.get(1)).wait(47).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(354));

	// btn
	this.instance_15 = new lib.btn();
	this.instance_15.parent = this;
	this.instance_15.setTransform(124.9,367.1,0.754,0.754,0,0,0,0.1,-5.7);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(449).to({_off:false},0).to({alpha:1},13).wait(69).to({alpha:0},12).wait(1));

	// Новый флагман  Xperia™ XZ Premium 
	this.instance_16 = new lib.Tween3("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(126,60.8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(40).to({_off:false},0).to({alpha:1},10).wait(52).to({startPosition:0},0).to({alpha:0},8).to({_off:true},1).wait(433));

	// Credit-0-24
	this.instance_17 = new lib.credit();
	this.instance_17.parent = this;
	this.instance_17.setTransform(120,312.4,0.8,0.8);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(356).to({_off:false},0).to({alpha:1},12).wait(67).to({alpha:0},13).to({_off:true},1).wait(95));

	// phone
	this.instance_18 = new lib.Symbol5();
	this.instance_18.parent = this;
	this.instance_18.setTransform(113.3,240.4,0.771,0.771,0,0,0,-176.9,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(40).to({regX:-176.7,regY:0.8,scaleX:0.61,scaleY:0.61,x:131.7,y:294.8},10).wait(52).to({alpha:0},8).to({_off:true},1).wait(245).to({_off:false,regX:-176.8,regY:0.6,scaleX:0.65,scaleY:0.65,x:112.6,y:177.8},0).to({scaleX:0.76,scaleY:0.76,x:115,y:197.9,alpha:1},12).wait(163).to({regX:-176.9,regY:0.7,scaleX:0.77,scaleY:0.77,x:113.3,y:240.4},12).wait(1));

	// fon
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("EgSvAlgMAAAhK/MAlfAAAMAAABK/g");
	this.shape_14.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(544));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76.9,129.1,328,522.6);
// library properties:
lib.properties = {
	id: '4A1FA5CF5901434A8BD3EE2B4ABBA9DF',
	width: 240,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"index_atlas_.jpg", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4A1FA5CF5901434A8BD3EE2B4ABBA9DF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;