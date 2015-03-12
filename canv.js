(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 45,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/ccc.png", id:"ccc"},
		{src:"images/oo.png", id:"oo"},
		{src:"images/p0_1.png", id:"p0_1"},
		{src:"images/p0_2.png", id:"p0_2"},
		{src:"images/p0_3.png", id:"p0_3"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,166);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,46);


(lib.ccc = function() {
	this.initialize(img.ccc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,629,610);


(lib.oo = function() {
	this.initialize(img.oo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,246);


(lib.p0_1 = function() {
	this.initialize(img.p0_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,115);


(lib.p0_2 = function() {
	this.initialize(img.p0_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,128);


(lib.p0_3 = function() {
	this.initialize(img.p0_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,128);


(lib.oo_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.oo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,246,246);


(lib.ccc_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.ccc();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,629,610);


(lib.c1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(2,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,0,104,166);


(lib.bt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(47,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF1746").s().p("Au7ISQh6AAhVhXQhXhVAAh6IAAnXQAAh6BXhVQBVhXB6AAId3AAQB6AABVBXQBXBVAAB6IAAHXQAAB6hXBVQhVBXh6AAg");
	this.shape.setTransform(125,53);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0099").s().p("Au7ISQh6AAhVhXQhXhVAAh6IAAnXQAAh6BXhVQBVhXB6AAId3AAQB6AABVBXQBXBVAAB6IAAHXQAAB6hXBVQhVBXh6AAg");
	this.shape_1.setTransform(125,53);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Au7ISQh6AAhVhXQhXhVAAh6IAAnXQAAh6BXhVQBVhXB6AAId3AAQB6AABVBXQBXBVAAB6IAAHXQAAB6hXBVQhVBXh6AAg");
	this.shape_2.setTransform(125,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,106);


(lib.a3 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.p0_3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,654,128);


(lib.a2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.p0_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,654,128);


(lib.a1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.p0_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,654,115);


// stage content:
(lib.canv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1245 = function() {
		this.stop();
		window.open("logo.png","_top");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1245).call(this.frame_1245).wait(1));

	// c
	this.instance = new lib.c1();
	this.instance.setTransform(339.4,471.9,1.206,1.206,0,0,0,52,82.8);
	this.instance.alpha = 0.512;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:332.1,y:473,alpha:1},2).wait(1).to({scaleX:0.85,scaleY:0.85,x:330.3,y:470.7},0).wait(1).to({scaleX:1,scaleY:1,x:332.1,y:473},0).wait(12).to({alpha:0.121},5).to({_off:true},1).wait(1198));

	// oo
	this.instance_1 = new lib.oo_1();
	this.instance_1.setTransform(320.1,957,0.1,0.1,0,0,0,123,123);
	this.instance_1.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:457,alpha:1},14,cjs.Ease.get(1)).wait(3).to({scaleX:0.2,scaleY:0.2},0).wait(3).to({scaleX:0.1,scaleY:0.1},0).to({scaleX:1.1,scaleY:1.1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},2).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:1,scaleY:1},0).wait(18).to({scaleX:1.1,scaleY:1.1},3).wait(2).to({scaleX:1,scaleY:1},0).to({scaleX:0.1,scaleY:0.1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},7).to({x:294.1},6).to({x:507},9,cjs.Ease.get(1)).to({x:518},9).to({x:517},2).to({x:18.9,alpha:0},8).to({_off:true},1).wait(1145));

	// a1
	this.instance_2 = new lib.a1();
	this.instance_2.setTransform(461,447.5,1,1,0,0,0,327,57.5);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96).to({_off:false},0).to({x:310,alpha:1},9,cjs.Ease.get(1)).to({x:321},3,cjs.Ease.get(-1)).wait(100).to({y:467.5},8,cjs.Ease.get(1)).wait(5).to({y:460.9},0).wait(1).to({y:447.5},0).to({y:107.5},55,cjs.Ease.get(1)).wait(44).to({y:67.5},10,cjs.Ease.get(1)).to({regY:57.4,scaleX:0.14,scaleY:0.14,x:318.8,y:400.2,alpha:0.238},10,cjs.Ease.get(-1)).to({_off:true},1).wait(904));

	// a2
	this.instance_3 = new lib.a2();
	this.instance_3.setTransform(328,592,1,1,0,0,0,327,64);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(142).to({_off:false},0).to({y:562,alpha:1},48,cjs.Ease.get(1)).wait(18).to({y:582},8,cjs.Ease.get(1)).wait(5).to({y:575.4},0).wait(1).to({y:562},0).to({y:222},55,cjs.Ease.get(1)).wait(44).to({y:182},10,cjs.Ease.get(1)).to({regY:64.3,scaleX:0.14,scaleY:0.14,x:319.8,y:416.6,alpha:0.238},10,cjs.Ease.get(-1)).to({_off:true},1).wait(904));

	// a3
	this.instance_4 = new lib.a3();
	this.instance_4.setTransform(319,894,1,1,0,0,0,327,64);
	this.instance_4.alpha = 0.25;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(222).to({_off:false},0).to({y:335,alpha:1},55,cjs.Ease.get(1)).wait(44).to({y:295},10,cjs.Ease.get(1)).to({regY:63.6,scaleX:0.14,scaleY:0.14,x:318.5,y:432.7,alpha:0.238},10,cjs.Ease.get(-1)).to({_off:true},1).wait(904));

	// 图层 10
	this.instance_5 = new lib.oo_1();
	this.instance_5.setTransform(329,487,0.317,0.317,0,0,0,123,123);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(474).to({_off:false},0).to({scaleX:1.47,scaleY:1.47,x:433,y:555,alpha:0},51,cjs.Ease.get(1)).to({_off:true},1).wait(720));

	// 图层 9
	this.instance_6 = new lib.oo_1();
	this.instance_6.setTransform(329,487,0.317,0.317,0,0,0,123,123);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(474).to({_off:false},0).to({scaleX:1.52,scaleY:1.52,x:320,y:351,alpha:0},51,cjs.Ease.get(1)).to({_off:true},1).wait(720));

	// oo2
	this.instance_7 = new lib.oo_1();
	this.instance_7.setTransform(332,396,1,1,0,0,0,123,123);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(336).to({_off:false},0).to({scaleX:0.32,scaleY:0.32,x:329,y:487,alpha:1},30,cjs.Ease.get(1)).wait(42).to({scaleX:0.11,scaleY:0.11},58).to({scaleX:0.32,scaleY:0.32},8).to({regX:122.9,regY:122.9,scaleX:1.51,scaleY:1.51,x:205.9,y:547.9,alpha:0},51,cjs.Ease.get(1)).to({_off:true},1).wait(720));

	// bt
	this.instance_8 = new lib.bt();
	this.instance_8.setTransform(325,847,1,1,0,0,0,125,53);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.bt(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(839).to({_off:false},0).to({alpha:1},10).wait(376).to({alpha:0},20).wait(1));

	// ccccc
	this.instance_9 = new lib.ccc_1();
	this.instance_9.setTransform(318,451,0.889,0.889,0,0,0,314.5,305);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(515).to({_off:false},0).to({scaleX:1,scaleY:1,x:320,alpha:1},13).wait(697).to({alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(627.8,1424.7,24.6,24.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;