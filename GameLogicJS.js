var canvas;
var scene;
var backgroundContainer;
var picture;
var bounds;
var mapPosition;
var skyContainer;
var ss;

var bmpAnimation;
var leftAnimation;
var rightAnimation;
var upAnimation;
var downAnimation;
var spriteSheetUp;
var left = true;
var hold=false;
var gameStart=false;
var untilGame = 2;
var pressed = true;
var apressed=true;
var ssm;

var animationCreated = false;
var sound1;
var sound2;
var sound3;
var lastSquare;

var cwg = false;
var conversing = false;
var gateClosed = true;
var gate2Closed = true;
var keyUsed = false;
var codeArray = [];
var papers = 0;
var pCollected=false;
var firstColl=false;
var bookColl=false;
var bookComplete=false;
var subsequent = false;
var subsequent2 = false;
var subsequent3 = false;
var missionComplete = false;
var ticCount = 0;
var openPortal=false;
var pc1 = false;
var pc2 = false;
var pc3 = false;
var revealpaper = false;
var dummy = true;
/////


var npc;
var npc2;
var npc3;
var npc4;
var level;
var coins;
var coinsCount=3;
var coinsAnimation=new Array(coinsCount);
var advisor;
var Pickingfinished=false;
var preNameOnFile = "Art Assets/Characters";


var ll=false;
var sound;


//*************************************************KEYBOARD**********************************************************
//We create a "keyboard" object that is composed of 4 attributes : "right", "left", "up" and "down"
var keyboard={left:0, right:0, up:0, down:0, a:0, enter:0};
//keydown => keyPress
window.onkeydown=keyPress;
//keyup => keyRelease
window.onkeyup=keyRelease;
function changeToleft(x,y)
{
     characterContainer.removeChild(bmpAnimation);
	     var spriteSheet = new createjs.SpriteSheet({
         images: [leftAnimation],
         frames: { width: 90, height: 90, regX: 25, regY: 11 }, 
         animations: {
          Left: [0, 4, "Left", 0.4]
            }});
	     bmpAnimation= new createjs.Sprite(spriteSheet);
	     bmpAnimation.x=x;
	     bmpAnimation.y=y;
	     bmpAnimation.width=40;
	     bmpAnimation.height=64;
	     characterContainer.addChild(bmpAnimation);
	     bmpAnimation.gotoAndPlay("Left");
	    
}
function changeToright(x,y)
{
     characterContainer.removeChild(bmpAnimation);
	     var spriteSheet = new createjs.SpriteSheet({
         images: [rightAnimation],
         frames: { width: 90, height: 90, regX: 25, regY: 11 }, 
         animations: {
          Right: [0, 4, "Right", 0.4]
            }});
	     bmpAnimation= new createjs.Sprite(spriteSheet);
	     bmpAnimation.x=x;
	     bmpAnimation.y=y;
	     bmpAnimation.width=40;
	     bmpAnimation.height=64;
	     characterContainer.addChild(bmpAnimation);
	     bmpAnimation.gotoAndPlay("Right");
}
function changeToup(x,y)
{
     characterContainer.removeChild(bmpAnimation);
	     var spriteSheetUp = new createjs.SpriteSheet({
         images: [upAnimation],
         frames: { width: 90, height: 90, regX: 25, regY: 11 }, 
         animations: {
          Up: [0, 4, "Up", 0.4]
            }});
	     bmpAnimation= new createjs.Sprite(spriteSheetUp);
	     bmpAnimation.x=x;
	     bmpAnimation.y=y;
	     bmpAnimation.width=40;
	     bmpAnimation.height=64;
	     characterContainer.addChild(bmpAnimation);
	     bmpAnimation.gotoAndPlay("Up");
}
function changeTodown(x,y)
{
     characterContainer.removeChild(bmpAnimation);
	     var spriteSheetDown = new createjs.SpriteSheet({
         images: [downAnimation],
         frames: { width: 90, height: 90, regX: 25, regY: 11}, 
         animations: {
          Down: [0, 4, "Down", 0.4]
            }});
	     bmpAnimation= new createjs.Sprite(spriteSheetDown);
	     bmpAnimation.x=x;
	     bmpAnimation.y=y;
	     bmpAnimation.width=40;
	     bmpAnimation.height=64;
	     characterContainer.addChild(bmpAnimation);
	     bmpAnimation.gotoAndPlay("Down");
}
function keyPress(e){
	//e.keyCode = 37 (left arrow)
	if(gameStart)
	{
	var x=bmpAnimation.x;
	var y=bmpAnimation.y;
	if(e.keyCode == 13){
		pauseContainer.visible = !pauseContainer.isVisible();
	}
	if(!pauseContainer.isVisible())
	{
	if (e.keyCode == 37){
	if(keyboard.left!=1)
	{
	    changeToleft(x,y);
	    
	}
	
	//when the user presses the left arrow key, "left" attribute => 1
	keyboard.left = 1;
	}
	//e.keyCode = 39 (right arrow)
	if (e.keyCode == 39){
	if(keyboard.right!=1)
	{
         changeToright(x,y);
	     
	}
	//when the user presses the right arrow key, "right" attribute => 1
	keyboard.right = 1;
	}
	//e.keyCode = 38 (up arrow)
	if (e.keyCode == 38){
	if(keyboard.up!=1)
	{
	     
	   changeToup(x,y);
	}
	//when the user presses the up arrow key, "up" attribute => 1
	keyboard.up = 1;
	}
	//e.keyCode = 40 (down arrow)
	if (e.keyCode == 40){
	if(keyboard.down!=1)
	{
	    changeTodown(x,y);
	}
	//when the user presses the down arrow key, "down" attribute => 1
	keyboard.down = 1;
	}
	if(e.keyCode==65)
	{
		
		if(!hold)
		{
		keyboard.a=1;
		hold=true;
		}
		
	}
	}
	}
	else
	{
		if(e.keyCode == 13){
		keyboard.enter = 1;
	}
	}
}

function keyRelease(e){
	if (e.keyCode == 37){
	//when the user releases the left arrow key, "left" attribute => 0
	keyboard.left = 0;
         if(keyboard.right)
        changeToright(bmpAnimation.x,bmpAnimation.y);
    if(keyboard.up)
        changeToup(bmpAnimation.x,bmpAnimation.y);
    if(keyboard.down)
        changeTodown(bmpAnimation.x,bmpAnimation.y);
      
	}
	if (e.keyCode == 39){
	//when the user releases the right arrow key, "right" attribute => 0
	
        keyboard.right = 0;
         if(keyboard.left)
        changeToleft(bmpAnimation.x,bmpAnimation.y);
    if(keyboard.up)
        changeToup(bmpAnimation.x,bmpAnimation.y);
    if(keyboard.down)
        changeTodown(bmpAnimation.x,bmpAnimation.y);
     
	}
	if (e.keyCode == 38){
	//when the user releases the up arrow key, "up" attribute => 0
	
        keyboard.up = 0;
         if(keyboard.left)
        changeToleft(bmpAnimation.x,bmpAnimation.y);
    if(keyboard.right)
        changeToright(bmpAnimation.x,bmpAnimation.y);
    if(keyboard.down)
        changeTodown(bmpAnimation.x,bmpAnimation.y);
	}
	if (e.keyCode == 40){
	//when the user releases the down arrow key, "down" attribute => 0
	
     
        keyboard.down = 0;
         if(keyboard.left)
        changeToleft(bmpAnimation.x,bmpAnimation.y);
    if(keyboard.up)
        changeToup(bmpAnimation.x,bmpAnimation.y);
    if(keyboard.right)
        changeToright(bmpAnimation.x,bmpAnimation.y);
	}
	if(e.keyCode == 65){
	hold=false;
	keyboard.a =0;	
	}
	if(e.keyCode==13)
	{
	keyboard.enter=0;
	pressed = true;
	}
}

//*********************************************KEYBOARD: END**************************************************

function init(){
	canvas = document.getElementById("myCanvas");
	scene=new createjs.Stage(canvas);
	
	ss = new createjs.Container();
	scene.addChild(ss);
	var p=new Image();
	p.src="title3.png";
	var b=new createjs.Bitmap(p);
	ss.addChild(b);
	var p2=new Image();
	p2.src="title2.png";
	var b2=new createjs.Bitmap(p2);
	ss.addChild(b2);
	var p3=new Image();
	p3.src="title1.png";
	var b3=new createjs.Bitmap(p3);
	ss.addChild(b3);
	scene.update();
	loadContainer = new createjs.Container();
	var shape = new createjs.Shape();
	shape.graphics.beginFill("#000000").drawRect(0, 0, 650, 500);
	loadContainer.addChild(shape);
	var text = new createjs.Text("Loading", "40px Arial", "#FFFFFF");
	text.x=250;
	text.y= 200;
	text.name = "load";
	loadContainer.addChild(text);
	scene.addChild(loadContainer);
	scene.update();
	preload();
    
   // var prog = Math.round(preload.progress*100);
   // loadContainer.getChildAt(1).text = "Loading: "+prog;
   // scene.update();
    
    //scene.removeChild(scene.getChildAt(1));
    //scene.update();
    //startScreen();
    
    
}
//everything past this should be in a seperate method called once preload is finished
function init2(){	
	ssm.stop();
	backgroundContainer = new createjs.Container();
	scene.addChild(backgroundContainer);
	levelContainer = new createjs.Container();
	scene.addChild(levelContainer);
	characterContainer = new createjs.Container();
	scene.addChild(characterContainer);
         skyContainer=new createjs.Container();
        scene.addChild(skyContainer);
	pauseContainer = new createjs.Container();
	layoutContainer = new createjs.Container();
	dialogueContainer = new createjs.Container();
	scene.addChild(dialogueContainer);
	dialogueContainer.visible = false;
	inventoryContainer = new createjs.Container();
	usedInventory = new createjs.Container();
	pauseContainer.addChild(layoutContainer);
	pauseContainer.addChild(inventoryContainer);
	scene.addChild(pauseContainer);
	pauseContainer.visible = false;
	
	
	mapPosition=23;
	loadlevel(23);
	
	

	//picture=new Image();
	//picture.src="Left.png";
	//picture.onload=createBitmap;
	

	upAnimation = new Image();
	upAnimation.src="Up.png";
	//upAnimation.onload=createUp;
	
     downAnimation = new Image();
	downAnimation.src="Down.png";
	
	leftAnimation = new Image();
	leftAnimation.src="Left.png";
	//upAnimation.onload=createUp;
	
    rightAnimation = new Image();
	rightAnimation.src="Right.png";
	
	//downAnimation.onload=createDown;
	
	
    layoutSetup();
    //createAnimation();
    
    simpleCharacter();
	createjs.Ticker.useRAF=true;
	createjs.Ticker.setFPS(40);
	createjs.Ticker.addEventListener("tick",tick);
	
}
function simpleCharacter(){
    /*var frameSheet = new Image();
    frameSheet.src=fileName;
    
    var spriteSheet = new createjs.SpriteSheet({
                                               images: [frameSheet],
                                               frames: { width: pixelWidth, height: pixelHeight, regX: offSetX, regY: offSetY },
                                               animations: {
                                               frameSheet: [0, endFrame, "frameSheet", 4]
                                               }});
    var NPC= new createjs.BitmapAnimation(spriteSheet);
    */
    
    var spriteSheet = new createjs.SpriteSheet({
                                               // image to use
                                               images: [leftAnimation],
                                               // width, height & registration point of each sprite
                                               frames: {width: 90, height: 90, regX: 25, regY: 11},
                                               animations: {
                                               frameSheet: [0, 4, "frameSheet",1]
                                               }
                                               });
    //createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, false, false);
    // create a BitmapAnimation instance to display and play back the sprite sheet:
    bmpAnimation = new createjs.Sprite(spriteSheet);
    
    bmpAnimation.regX = bmpAnimation.spriteSheet.frameWidth/2|0;
    bmpAnimation.regY = bmpAnimation.spriteSheet.frameHeight / 2 | 0;
    
    // of animated rats if you disabled the shadow.
   
    
    bmpAnimation.name = "pc";
    bmpAnimation.direction = 90;
    bmpAnimation.vX =4;
    bmpAnimation.x = 200;
    bmpAnimation.y = 200;
    bmpAnimation.z=10;
    bmpAnimation.width=40;
    bmpAnimation.height=64;
    
    // have each monster start at a specific frame
    bmpAnimation.currentFrame = 0;
     bmpAnimation.gotoAndPlay("frameSheet");
    characterContainer.addChild(bmpAnimation);
    
}

function preload()
{
	var preload = new createjs.LoadQueue(true);
	var manifest = [{src:"start.wav"},{src:"title1.png"},{src:"Down.png"},{src:"Left.png"},{src:"Right.png"},{src:"Up.png"},{src:"animal1.png"},{src:"animal10.png"},{src:"animal11.png"},{src:"animal12.png"},{src:"animal13.png"},{src:"animal2.png"},{src:"animal3.png"},{src:"animal4.png"},{src:"animal5.png"},
                    
                    {src:"animal6.png"},{src:"animal7.png"},{src:"animal8.png"},{src:"animal9.png"},{src:"birdLeft.png"},{src:"blank.png"},{src:"book.png"},{src:"bridge.png"},{src:"butterfly.png"},{src:"carriage.png"},{src:"cat.wav"},{src:"cat1.png"},{src:"cat2.png"},{src:"chipmunk.wav"},{src:"cow.wav"},{src:"crocell.png"},{src:"cupid.png"},{src:"dog.wav"},{src:"dog1.png"},{src:"dog2.png"},{src:"eggHome.png"},{src:"eggHome2.png"},{src:"eggHome3.png"},{src:"exctasy.wav"},{src:"farmer.png"},{src:"field1.png"},{src:"field2.png"},{src:"field3.png"},{src:"fisherman.png"},{src:"flower1.png"},{src:"flower2.png"},
                    
                    
                    
                    {src:"flower3.png"},{src:"foin.png"},{src:"foin2.png"},{src:"fountain.png"},{src:"gate.png"},{src:"grass1.png"},{src:"grass2.png"},{src:"grass3.png"},{src:"hTree1.png"},{src:"hTree10.png"},{src:"hTree11.png"},{src:"hTree12.png"},{src:"hTree3.png"},{src:"hTree4.png"},{src:"hTree5.png"},{src:"hTree6.png"},{src:"hTree7.png"},{src:"hTree8.png"},{src:"hTree9.png"},{src:"heart.png"},{src:"heartHome.png"},{src:"heartkey.png"},{src:"homeMushroom.png"},{src:"homeTree.png"},{src:"horse.wav"},{src:"house1.png"},{src:"house2.png"},{src:"htree2.png"},{src:"lakebottom.png"},{src:"laketop.png"},{src:"lamb.wav"},{src:"loveShack.png"},{src:"luigi.png"},{src:"mario.png"},{src:"harp.wav"},{src:"object.wav"},{src:"paper.png"},{src:"peach.png"},{src:"peach2.png"},{src:"pinkCottage.png"},{src:"pinkGazebo.png"},{src:"pinkTool.png"},{src:"ribbonGazebo.png"},{src:"ring.png"},{src:"river.png"},{src:"river.wav"},{src:"river2.png"},{src:"rock.png"},{src:"rock1.png"},{src:"romanticGazebo.png"},{src:"romanticGazebo2.png"},{src:"rose.png"},{src:"sable.png"},{src:"sand.png"},{src:"sand2.png"},{src:"sheep.wav"},{src:"signpost.png"},{src:"spiralz.png"},{src:"stone.png"},{src:"stone2.png"},{src:"treeHouse.png"},{src:"treeLove.png"},{src:"villager1.png"},{src:"villager2.png"},{src:"villager3.png"},{src:"villager4.png"},{src:"villager5.png"},{src:"waluigi.png"},{src:"wario.png"},{src:"wario2.png"},{src:"water1.png"},{src:"water2.png"},{src:"waterBox.png"}
    
    
                    
                    
                    ];
	preload.installPlugin(createjs.Sound);
	preload.loadManifest(manifest);
	preload.addEventListener("progress",handleProgress);
    preload.addEventListener("complete",handleComplete);


function handleProgress(event)
{
    var prog = Math.round(preload.progress*100);
    loadContainer.getChildAt(1).text = "Loading: "+prog;
    scene.update();
}

function handleComplete(event)
{
    scene.removeChild(scene.getChildAt(1));
    scene.update();
    startScreen();
    
}
}

function startScreen()
{
	ssm = createjs.Sound.createInstance("start.wav");
	ssm.play(createjs.Sound.INTERRUPT_NONE,0,4000,-1,1,0)
	createjs.Ticker.addEventListener("tick", enter);
	function enter()
	{
		if(keyboard.enter==1&&pressed==true)
		{
			if(untilGame>0)
			{
				ss.removeChild(ss.getChildAt(untilGame));
				untilGame--;
				scene.update();
				pressed=false;
			}
			else if(untilGame==0)
			{
				ss.removeChild(ss.getChildAt(0));
				untilGame--;
				pressed=false;
				scene.update();
				createjs.Ticker.removeEventListener("tick");
				gameStart=true;
				init2();
                //createAnimation();
                //animationCreated = true;
			}
		}
	}
}

function setBG(event){
	var bgrnd = new createjs.Bitmap(bg);
	scene.addChild(bgrnd);
	scene.update();
}

function createAnimation()
{
    var spriteSheet = new createjs.SpriteSheet({
	    // image to use
	    images: [leftAnimation],
	    // width, height & registration point of each sprite
	    frames: {width: 90, height: 90, regX: 25, regY: 11}, 
	    animations: {	
		    walk: [0, 4, "walk",4]
	    }
    });
    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, false, false);
        // create a BitmapAnimation instance to display and play back the sprite sheet:
	bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
	
	bmpAnimation.regX = bmpAnimation.spriteSheet.frameWidth/2|0;
	bmpAnimation.regY = bmpAnimation.spriteSheet.frameHeight / 2 | 0;

    // of animated rats if you disabled the shadow.
    bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);

    bmpAnimation.name = "pc";
    bmpAnimation.direction = 90;
    bmpAnimation.vX =4;
    bmpAnimation.x = 200;
    bmpAnimation.y = 200;
    bmpAnimation.z=10;
    bmpAnimation.width=40;
    bmpAnimation.height=64;
		
    // have each monster start at a specific frame
    bmpAnimation.currentFrame = 0;
    characterContainer.addChild(bmpAnimation);
    
    
    
}

function createBitmap(){

	//createAnimation();
	//layoutSetup();
}

function layoutSetup(){
	var shape = new createjs.Shape();
	var mText = new createjs.Text("Map", "40px Arial", "#FFFFFF");
	mText.x=130;
	mText.y= 25;
	var iText = new createjs.Text("Inventory", "40px Arial", "#FFFFFF");
	iText.x=400;
	iText.y= 25;
	shape.graphics.beginFill("#000000").drawRect(0, 0, 650, 500);
	shape.graphics.beginFill("#FF0000").drawRect(5, 75, 325, 350);
	shape.graphics.beginStroke("#000000").drawRect(5, 75, 325, 350);
	shape.graphics.beginFill("#FFFFFF").drawRect(10, 80, 315, 315);
	shape.graphics.beginStroke("#000000").drawRect(10, 80, 315, 315);
	shape.graphics.beginFill("#000000").drawRect(73, 80, 1, 315);
	shape.graphics.beginFill("#000000").drawRect(136, 80, 1, 315);
	shape.graphics.beginFill("#000000").drawRect(199, 80, 1, 315);
	shape.graphics.beginFill("#000000").drawRect(262, 80, 1, 315);
	shape.graphics.beginFill("#000000").drawRect(10, 143, 315, 1);
	shape.graphics.beginFill("#000000").drawRect(10, 206, 315, 1);
	shape.graphics.beginFill("#000000").drawRect(10, 269, 315, 1);
	shape.graphics.beginFill("#000000").drawRect(10, 332, 315, 1);
	shape.graphics.beginStroke("#FFFFFF").drawRect(340, 75, 300, 350);
	shape.name = "layout";
	layoutContainer.addChild(shape);
	layoutContainer.addChild(mText);
	layoutContainer.addChild(iText);
	var wai = new createjs.Shape();
	wai.name = "wai";
	wai.graphics.beginFill("#FF0000").drawCircle(167.5, 235.5+63+63, 10);
	layoutContainer.addChild(wai);
	
	//dialogue box
	var dbox = new createjs.Shape();
	dbox.alpha = 0.5;
	dbox.graphics.beginStroke("#FFFFFFF").drawRoundRect(45, 270, 560, 210, 5);
	dbox.graphics.beginFill("#000000").drawRoundRect(50, 275, 550, 200, 5);
	dbox.graphics.beginStroke("#FFFFFFF").drawRoundRect(505, 435, 80, 30, 5);
	dialogueContainer.addChild(dbox);
}

//"displacement" function => smiley displacement
function displacement(){
	if (keyboard.left==1){
	//if keyboard.left=1 => decrease smiley x position
		if(checkLeft())
		{
		if (bmpAnimation.x>=-10){
			if(ocCheckLeft())
			{
			bmpAnimation.x=bmpAnimation.x-4;	
			}
			
		}
		else
		{
			if(checkLeft())
			{
				bmpAnimation.x=bmpAnimation.x+650;
				mapPosition=mapPosition-1;
				loadlevel(mapPosition);
				$("#num").html(mapPosition);
				layoutContainer.getChildByName("wai").x = layoutContainer.getChildByName("wai").x-63; 
			}
			
		}
		}
		else
		{
			if (bmpAnimation.x>=0){
			if(ocCheckLeft())
			{
			bmpAnimation.x=bmpAnimation.x-4;	
			}
			}
		}
	}
	if (keyboard.right==1){
	//if keyboard.right=1 => increase smiley x position
		if(checkRight())
		{
		if (bmpAnimation.x<=640){
			
			if(ocCheckRight())
			{
			bmpAnimation.x=bmpAnimation.x+4;
			}
		}
		else
		{
			if(checkRight())
			{
				bmpAnimation.x=bmpAnimation.x-650;
				mapPosition=mapPosition+1;
				loadlevel(mapPosition);
				$("#num").html(mapPosition);
				layoutContainer.getChildByName("wai").x = layoutContainer.getChildByName("wai").x+63; 
			}
		}
		}
		else
		{
			if (bmpAnimation.x<=610){	
			if(ocCheckRight())
			{
			bmpAnimation.x=bmpAnimation.x+4;
			}
		}
		}
	}
	if (keyboard.up==1){
	////if keyboard.up=1 => decrease smiley y position
		if(checkUp())
		{
		if (bmpAnimation.y>=-30){
			if(ocCheckUp())
			{
				bmpAnimation.y=bmpAnimation.y-4;
			}
		}
		else
		{
			if(checkUp())
			{
				bmpAnimation.y=bmpAnimation.y+500;
				mapPosition=mapPosition-5;
				loadlevel(mapPosition);
				$("#num").html(mapPosition);
				layoutContainer.getChildByName("wai").y = layoutContainer.getChildByName("wai").y-63; 
			}
		}
		}
		else
		{
			if (bmpAnimation.y>=0){
			if(ocCheckUp())
			{
				bmpAnimation.y=bmpAnimation.y-4;
			}
		}
		}
	}
	if (keyboard.down==1){
	//if keyboard.down=1 => increase smiley y position
		if(checkDown())
		{
		
		if (bmpAnimation.y<=470){
			if(ocCheckDown())
			{
			bmpAnimation.y=bmpAnimation.y+4;	
			}
			
		}
		else
		{
			if(checkDown())
			{
				bmpAnimation.y=bmpAnimation.y-500;
				mapPosition=mapPosition+5;
				loadlevel(mapPosition);
				$("#num").html(mapPosition);
				layoutContainer.getChildByName("wai").y = layoutContainer.getChildByName("wai").y+63; 
			}
		}
		}
		else{
			if (bmpAnimation.y<=434){
			if(ocCheckDown())
			{
			bmpAnimation.y=bmpAnimation.y+4;	
			}
		}
		}
	}
}

function jump(toWhere)
{
	mapPosition=parseInt(toWhere.val.value);
	loadlevel(parseInt(toWhere.val.value));
}

function tick(){
	//we call the "displacement" function for each image
	if(!conversing)
	{
	   displacement();
	}
	
    //if(animationCreated = false){
    //    createAnimation();
    //    animationCreated = true;
    //}
	
	if(keyboard.left==0&&keyboard.right==0&&keyboard.up==0&&keyboard.down==0)
	{
		bmpAnimation.gotoAndStop(1);
	}
	scene.update();
}
window.onload=init;
/***********************************************************/
var loadlevel = function(whichSquare)
{
    levelContainer.removeAllChildren();
    siContainer = new createjs.Container();
    levelContainer.addChild(siContainer);
    backgroundContainer.removeAllChildren();
    skyContainer.removeAllChildren();
    p=new Image();
    p.src="grass1.png";
    b=new createjs.Bitmap(p);
    backgroundContainer.addChild(b);
    switch (whichSquare)
    {
        case 1:
            lastSquare = whichSquare;
            AddButterFlies(3,2);
            for(var x=1;x<12;x++)
            {
                addToLevel(50*x,0,50,50,"htree12.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(0,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(600,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            addToBackground(150,190,"sable.png");
            //border
            //animal
            addToLevel(450,200,50,50,"animal2.png","animal",false,true,["Baaaah... Baaaah","The last item is the youngest of all!","Baaaah... Baaaah","","","","sheep.wav"]);
            addToLevel(50,350,75,75,"animal1.png","animal",false,true,["Baaaah... Baaaah","Baaaah... Baaaah","","","","","sheep.wav"]);
            addToLevel(250,75,50,50,"animal12.png","animal",false,true,["Baaaah... Baaaah","Baaaah... Baaaah","","","","","sheep.wav"]);
            //water
            addToLevel(200,250,128,128,"water1.png","water",false,false,"");
            //tree
            addToLevel(50,50,50,50,"htree10.png","tree",false,false,"");
            addToLevel(150,75,50,50,"htree4.png","tree",false,false,"");
            addToLevel(100,100,50,50,"htree8.png","tree",false,false,"");
            //flower
            for(var i=0; i<25; i++)
            {
                var x1 = 50+Math.random()*525;
                var x2 = 50+Math.random()*520;
                var x3 = 50+Math.random()*520;
                var y1 = 50+Math.random()*425;
                var y2 = 50+Math.random()*420;
                var y3 = 50+Math.random()*420;
                addToBackground(x1,y1,"flower1.png");
                addToBackground(x2,y2,"flower2.png");
                addToBackground(x3,y3,"flower3.png");
            }
            break;
        case 2:
            lastSquare = whichSquare;
            AddButterFlies(5,2);
            ///
            if(pc3)
                addToLevel(300,300,50,93,"luigi.png","paperChase4",false,true,["Jeremy:","Oh you must see this poem that dearest Alistair just gave","to me. Its beauty is intoxicating. Whoever it's for is truly a ","lucky lady.","","","harp.wav"]);
            else
                addToLevel(300,300,50,93,"luigi.png","paperChase4",false,true,["Jeremy:","Why do I usually fear ghosts so much?","My inhibitions just seem so silly.","","I think I'm going to finally ask Daisy on a date!","I'm so happy I could explode!","harp.wav"]);
            ///
            for(var x=1;x<12;x++)
            {
                addToLevel(50*x,0,50,50,"htree1.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(0,50*y,50,50,"htree1.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(600,50*y,50,50,"htree1.png","tree",false,false,"");
            }
            //flower
            for(var i=0; i<50; i++)
            {
                var x1 = 50+Math.random()*525;
                var x2 = 50+Math.random()*520;
                var x3 = 50+Math.random()*520;
                var y1 = 50+Math.random()*425;
                var y2 = 50+Math.random()*420;
                var y3 = 50+Math.random()*420;
                addToBackground(x1,y1,"flower1.png");
                addToBackground(x2,y2,"flower2.png");
                addToBackground(x3,y3,"flower3.png");
            }
            if(subsequent3)
            {
                addToLevel(250,300,50,50,"paper.png","paper1",true,false,"");
            }
            break;
        case 3:
            //if(lastSquare==21){
                createjs.Sound.stop();
            //}
            sound3 = createjs.Sound.play("exctasy.wav","none", 0, 2000, -1, 0.2, 0);
            lastSquare = whichSquare;
            AddButterFlies(5,2);
            addToLevel(150,50,50,50,"htree1.png","tree",false,false,"");
            addToLevel(150,100,50,50,"htree1.png","tree",false,false,"");
            for(var x=1;x<12;x++)
            {
                addToLevel(50*x,0,50,50,"htree1.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(0,50*y,50,50,"htree1.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(600,50*y,50,50,"htree1.png","tree",false,false,"");
            }
            for(var x=1;x<12;x++)
            {
                if(x!=6)
                {
                    addToLevel(50*x,450,50,50,"htree1.png","tree",false,false,"");
                }
            }
            addToLevel(275,225,50,93,"peach.png","lovely-lady",false,true,["Princess Amelia:","Oh Simon! That poem was wonderful! My brothers and","sisters will continue to fight over the throne, but I don't care ","about being queen anymore now that I have you. And you,"," stranger, thank you for helping him. Please help my","","harp.wav"]);
            
            addToLevel(325,235,50,78,"mario.png","mario",false,true,["Simon:","Thank you for bringing me to the princess!","When I read her my poem she was so overjoyed that she ", "agreed to marry me! We are going to be so happy together!","","","harp.wav"]);
            if(subsequent2)
            {
                addToLevel(50,50,100,50,"spiralz.png","portal",false,false,"");
            }
            //path
            for(var i=100; i<600; i=i+100)
            {
                addToBackground(275,i,"heartPath.png");
            }
            for(var i=0; i<400; i=i+100)
            {
                addToBackground(325,i+50,"heartPath.png");
            }
            //flower
            for(var i=0; i<30; i++)
            {
                var x11 = 50+Math.random()*200;
                var x21 = 50+Math.random()*195;
                var x31 = 50+Math.random()*195;
                var y1 = 50+Math.random()*375;
                var y2 = 50+Math.random()*370;
                var y3 = 50+Math.random()*370;
                var x12 = 375+Math.random()*200;
                var x22 = 375+Math.random()*195;
                var x32 = 375+Math.random()*195;
                addToBackground(x11,y1,"flower1.png");
                addToBackground(x21,y2,"flower2.png");
                addToBackground(x31,y3,"flower3.png");
                addToBackground(x12,y1,"flower1.png");
                addToBackground(x22,y2,"flower2.png");
                addToBackground(x32,y3,"flower3.png");
            }
            break;
        case 4:
            lastSquare = whichSquare;
            AddButterFlies(5,2);
            if(subsequent&&!(pc2||pc3||subsequent3))
                addToLevel(300,200,50,87,"waluigi.png","paperChase1",false,true,["Wajeremy:","Paper? I found one with a lovely poem written on it today.","I usually don't even like that mushy stuff, but since I got","here I've felt so nice. I gave the paper to a gentle", "bald fellow in town. I hope he's doing well.","","harp.wav"]);
            else
                addToLevel(300,200,50,87,"waluigi.png","paperChase1",false,true,["Wajeremy:","Beautiful day isn't it? The kind that makes you excited ","to be alive!","I think I'm out of the evil game for good. This place has","shown me true happiness.","","harp.wav"]);
            for(var x=1;x<12;x++)
            {
                addToLevel(50*x,0,50,50,"htree1.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(0,50*y,50,50,"htree1.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(600,50*y,50,50,"htree1.png","tree",false,false,"");
            }
            //flower
            for(var i=0; i<50; i++)
            {
                var x1 = 50+Math.random()*525;
                var x2 = 50+Math.random()*520;
                var x3 = 50+Math.random()*520;
                var y1 = 50+Math.random()*425;
                var y2 = 50+Math.random()*420;
                var y3 = 50+Math.random()*420;
                addToBackground(x1,y1,"flower1.png");
                addToBackground(x2,y2,"flower2.png");
                addToBackground(x3,y3,"flower3.png");
            }
            break;
        case 5:
            lastSquare = whichSquare;
            AddButterFlies(3,2);
            ///
            if(pc2)
                addToLevel(300,300,80,72,"wario.png","paperChase3",false,true,["Alistair:","*Yawn* The elegance of that poem relaxed me so.", "Everything was so perfect, so I gave it to my favorite", "cousin Jeremy when I saw him just now. I think", "he said he was travelling west of here.","","harp.wav"]);
            else
                addToLevel(300,300,80,72,"wario.png","paperChase3",false,true,["Alistair:","","Who needs money when you can just be happy?","","","","harp.wav"]);
            ///
            for(var x=1;x<12;x++)
            {
                addToLevel(50*x,0,50,50,"htree12.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(0,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(600,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            //flower
            for(var i=0; i<25; i++)
            {
                var x1 = 50+Math.random()*525;
                var x2 = 50+Math.random()*520;
                var x3 = 50+Math.random()*520;
                var y1 = 50+Math.random()*425;
                var y2 = 50+Math.random()*420;
                var y3 = 50+Math.random()*420;
                addToBackground(x1,y1,"flower1.png");
                addToBackground(x2,y2,"flower2.png");
                addToBackground(x3,y3,"flower3.png");
            }
            break;
        case 6:
            lastSquare = whichSquare;
            AddButterFlies(3,2);
            if(subsequent)
                addToLevel(500,250,42,75,"farmer.png","farmer",false,true,["Trevor:","I saw a man running through an open field not too far from","here. He dropped a piece of papers in his travels, but was","moving too quickly for me to have let him know. I left it ","there, and hope he gets reunited with it!","","harp.wav"]);
            else
                addToLevel(500,250,42,75,"farmer.png","farmer",false,true,["Trevor:","I love this place!","The cows, the horses, the birds...","Everything is just so colorful!","Have you met the princess?","","harp.wav"]);
            
            //path
            for(var i=0; i<600; i=i+100)
            {
                addToBackground(250,i-35,"sand.png");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(0,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(600,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            //animal
            addToLevel(75,75,75,75,"animal4.png","animal",false,true,["Moooo... Moooo","Moooo... Moooo","","","","","cow.wav"]);
            addToLevel(130,150,55,55,"animal3.png","animal",false,true,["Moooo... Moooo","The first item smells fantastic!","Moooo... Moooo","","","","cow.wav"]);
            addToLevel(85,300,75,75,"animal13.png","animal",false,true,["Moooo... Moooo","Moooo... Moooo","","","","","cow.wav"]);
            //food
            addToLevel(60,375,50,50,"foin.png","food",false,false,"");
            //field
            addToLevel(420,375,70,36,"field1.png","field",false,false,"");
            addToLevel(420,411,70,48,"field2.png","field",false,false,"");
            addToLevel(495,365,70,48,"field3.png","field",false,false,"");
            addToLevel(495,425,70,48,"field1.png","field",false,false,"");
            //waterbox
            addToLevel(130,360,75,75,"waterBox.png","water",false,false,"");
            //tree
            addToLevel(420,40,175,175,"treeHouse.png","tree",false,false,"");
            //flower
            for(var i=0; i<13; i++)
            {
                var x11 = 50+Math.random()*195;
                var x21 = 50+Math.random()*190;
                var x31 = 50+Math.random()*190;
                var x12 = 380+Math.random()*195;
                var x22 = 380+Math.random()*190;
                var x32 = 380+Math.random()*190;
                var y1 = Math.random()*475;
                var y2 = Math.random()*470;
                var y3 = Math.random()*470;
                addToBackground(x11,y1,"flower1.png");
                addToBackground(x21,y2,"flower2.png");
                addToBackground(x31,y3,"flower3.png");
                addToBackground(x12,y1,"flower1.png");
                addToBackground(x22,y2,"flower2.png");
                addToBackground(x32,y3,"flower3.png");
            }
            break;
        case 7:
            lastSquare = whichSquare;
            AddButterFlies(5,2);
            addToLevel(600,0,50,50,"htree1.png","tree",false,false,"");
            for(var y=0;y<10;y++)
            {
                addToLevel(0,50*y,50,50,"htree1.png","tree",false,false,"");
            }
            for(var x=1;x<13;x++)
            {
                addToLevel(50*x,450,50,50,"htree1.png","tree",false,false,"");
            }
            //flower
            for(var i=0; i<50; i++)
            {
                var x1 = 50+Math.random()*575;
                var x2 = 50+Math.random()*570;
                var x3 = 50+Math.random()*570;
                var y1 = Math.random()*425;
                var y2 = Math.random()*420;
                var y3 = Math.random()*420;
                addToBackground(x1,y1,"flower1.png");
                addToBackground(x2,y2,"flower2.png");
                addToBackground(x3,y3,"flower3.png");
            }
            break;
        case 8:
           // if(lastSquare==13){
                createjs.Sound.stop();
            //}
            sound3 = createjs.Sound.play("exctasy.wav","none", 0, 2000, -1, 0.2, 0);
            lastSquare = whichSquare;
            AddButterFlies(5,2);
            //path
            for(var i=100; i<600; i=i+100)
            {
                addToBackground(275,i,"heartPath.png");
            }
            for(var i=0; i<400; i=i+100)
            {
                addToBackground(325,i+50,"heartPath.png");
            }
            //flower
            for(var i=0; i<30; i++)
            {
                var x11 = Math.random()*250;
                var x21 = Math.random()*245;
                var x31 = Math.random()*245;
                var y1 = 50+Math.random()*375;
                var y2 = 50+Math.random()*370;
                var y3 = 50+Math.random()*370;
                var x12 = 375+Math.random()*250;
                var x22 = 375+Math.random()*245;
                var x32 = 375+Math.random()*245;
                addToBackground(x11,y1,"flower1.png");
                addToBackground(x21,y2,"flower2.png");
                addToBackground(x31,y3,"flower3.png");
                addToBackground(x12,y1,"flower1.png");
                addToBackground(x22,y2,"flower2.png");
                addToBackground(x32,y3,"flower3.png");
            }
            //tree
            for(var x=0;x<6;x++)
            {
                addToLevel(50*x,0,50,50,"htree1.png","tree",false,false,"");
            }
            for(var x=7;x<13;x++)
            {
                addToLevel(50*x,0,50,50,"htree1.png","tree",false,false,"");
            }
            for(var x=0;x<13;x++)
            {
                if(x!=6)
                {
                    addToLevel(50*x,450,50,50,"htree1.png","tree",false,false,"");
                }
            }
            
            if(!missionComplete)
            {
                addToLevel(300,0,50,78,"mario.png","npc",false,true,["Simon:","How'd I get here so quickly? A friendly stranger showed ", "me a shortcut. I must have lost some of my papers in my","travels, though. I know I can count on you to find them", "for me. They contain a poem I've written for the princess!", "","harp.wav"]);
            }
            
            if(subsequent &&!bookComplete)
            {
                addToLevel(300,78,50,48,"book.png","book",false,false,"");
            }
            break;
        case 9:
            lastSquare = whichSquare;
            AddButterFlies(5,2);
            for(var x=0;x<13;x++)
            {
                
                addToLevel(50*x,450,50,50,"htree1.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(600,50*y,50,50,"htree1.png","tree",false,false,"");
            }
            addToLevel(0,0,50,50,"htree1.png","tree",false,false,"");
            //flower
            for(var i=0; i<50; i++)
            {
                var x1 = Math.random()*575;
                var x2 = Math.random()*570;
                var x3 = Math.random()*570;
                var y1 = Math.random()*425;
                var y2 = Math.random()*420;
                var y3 = Math.random()*420;
                addToBackground(x1,y1,"flower1.png");
                addToBackground(x2,y2,"flower2.png");
                addToBackground(x3,y3,"flower3.png");
            }
            break;
        case 10:
            lastSquare = whichSquare;
            AddButterFlies(3,2);
            for(var y=0;y<10;y++)
            {
                addToLevel(0,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(600,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            //flower
            for(var i=0; i<25; i++)
            {
                var x1 = 50+Math.random()*525;
                var x2 = 50+Math.random()*520;
                var x3 = 50+Math.random()*520;
                var y1 = Math.random()*475;
                var y2 = Math.random()*470;
                var y3 = Math.random()*470;
                addToBackground(x1,y1,"flower1.png");
                addToBackground(x2,y2,"flower2.png");
                addToBackground(x3,y3,"flower3.png");
            }
            break;
        case 11:
            lastSquare = whichSquare;
            AddButterFlies(3,2);
            addToLevel(600,0,50,50,"htree12.png","tree",false,false,"");
            //path
            for(var i=0; i<400; i=i+100)
            {
                addToBackground(250,i-35,"sand.png");
            }
            for(var i=370; i<650; i=i+100)
            {
                addToBackground(i+35,192,"sand2.png");
            }
            //tree
            for(var x=0;x<13;x++)
            {
                addToLevel(50*x,450,50,50,"htree12.png","tree",false,false,"");
            }
            for(var y=0;y<9;y++)
            {
                addToLevel(0,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            addToLevel(100,255,75,75,"animal6.png","animal",false,true,["Neigh... Neigh","The second item is all one color.","Neigh... Neigh","","","","horse.wav"]);
            addToLevel(75,300,55,55,"animal5.png","animal",false,true,["Neigh... Neigh","Neigh... Neigh","","","","","horse.wav"]);
            //flower
            for(var i=0; i<13; i++)
            {
                var x11 = 50+Math.random()*195;
                var x21 = 50+Math.random()*190;
                var x31 = 50+Math.random()*190;
                var x12 = 50+Math.random()*575;
                var x22 = 50+Math.random()*570;
                var x32 = 50+Math.random()*570;
                var x13 = 380+Math.random()*245;
                var x23 = 380+Math.random()*240;
                var x33 = 380+Math.random()*240;
                var y1 = Math.random()*425;
                var y2 = Math.random()*420;
                var y3 = Math.random()*420;
                if(y1<300)	addToBackground(x11,y1,"flower1.png");
                if(y2<300)	addToBackground(x21,y2,"flower2.png");
                if(y3<300)	addToBackground(x31,y3,"flower3.png");
                if(y1>300)	addToBackground(x12,y1,"flower1.png");
                if(y2>300)	addToBackground(x22,y2,"flower2.png");
                if(y3>300)	addToBackground(x32,y3,"flower3.png");
                if(y1<180)	addToBackground(x13,y1,"flower1.png");
                if(y2<180)	addToBackground(x23,y2,"flower2.png");
                if(y3<180)	addToBackground(x33,y3,"flower3.png");
            }
            break;
        case 12:
            lastSquare = whichSquare;
            AddButterFlies(3,2);
            //path
            for(var i=0; i<700; i=i+100)
            {
                addToBackground(i-35,192,"sand2.png");
            }
            //tree
            for(var x=0;x<13;x++)
            {
                addToLevel(50*x,0,50,50,"htree12.png","tree",false,false,"");
            }
            addToLevel(0,450,50,50,"htree12.png","tree",false,false,"");
            //animal
            addToLevel(300,400,60,60,"animal11.png","animal",false,true,["Baaaah... Baaaah","The first item has no heart.","Baaaah... Baaaah","","","","lamb.wav"]);
            //flower
            for(var i=0; i<25; i++)
            {
                var x11 = Math.random()*625;
                var x21 = Math.random()*620;
                var x31 = Math.random()*620;
                var y1 = 50+Math.random()*425;
                var y2 = 50+Math.random()*420;
                var y3 = 50+Math.random()*420;
                if(y1<180)	addToBackground(x11,y1,"flower1.png");
                if(y2<180)	addToBackground(x21,y2,"flower2.png");
                if(y3<180)	addToBackground(x31,y3,"flower3.png");
                if(y1>300)	addToBackground(x11,y1,"flower1.png");
                if(y2>300)	addToBackground(x21,y2,"flower2.png");
                if(y3>300)	addToBackground(x31,y3,"flower3.png");
            }
            break;
        case 13:
            //if(lastSquare==8){
                createjs.Sound.stop();
            //}
            sound2 = createjs.Sound.play("joy.wav","none", 0, 0, -1, 0.2, 0);
            lastSquare = whichSquare;
            AddButterFlies(3,2);
            //path
            for(var i=0; i<300; i=i+100)
            {
                addToBackground(250,i-10,"sand.png");
            }
            for(var i=300; i<600; i=i+100)
            {
                addToBackground(250,i-35,"sand.png");
            }
            for(var i=0; i<300; i=i+100)
            {
                addToBackground(i-35,192,"sand2.png");
            }
            for(var i=370; i<650; i=i+100)
            {
                addToBackground(i+35,192,"sand2.png");
            }
            //tree
            for(var x=0;x<6;x++)
            {
                addToLevel(50*x,0,50,50,"htree12.png","tree",false,false,"");
            }
            for(var x=7;x<13;x++)
            {
                addToLevel(50*x,0,50,50,"htree12.png","tree",false,false,"");
            }
            if(gate2Closed)
            {
                addToLevel(300,0,50,50,"gate.png","gate2",false,false,"");
                addToLevel(50,50,50,50,"cupid.png","cupid",true,false,"");
                addToLevel(200,50,50,50,"rose.png","rose",true,false,"");
                addToLevel(400,50,50,50,"ring.png","ring",true,false,"");
                addToLevel(550,50,50,50,"heart.png","heart",true,false,"");
            }
            
            addToLevel(400,350,100,74,"signpost.png","sign1",false,true,["He who shows the critters love,","will be given the code to the the gate above.","The one who collects the items wrong,","will be doomed to be here for very long.",""]);
            //flower
            for(var i=0; i<13; i++)
            {
                var x11 = Math.random()*245;
                var x21 = Math.random()*240;
                var x31 = Math.random()*240;
                var x12 = 380+Math.random()*245;
                var x22 = 380+Math.random()*240;
                var x32 = 380+Math.random()*240;
                var y1 = 50+Math.random()*425;
                var y2 = 50+Math.random()*420;
                var y3 = 50+Math.random()*420;
                if(y1<180 || y1>300){
                    addToBackground(x11,y1,"flower1.png");
                    addToBackground(x12,y1,"flower1.png");
                }
                if(y2<180 || y2>300){
                    addToBackground(x21,y2,"flower2.png");
                    addToBackground(x22,y2,"flower2.png");
                }
                if(y3<180 || y3>300){
                    addToBackground(x31,y3,"flower3.png");
                    addToBackground(x32,y3,"flower3.png");
                }
            }
            break;
        case 14:
            lastSquare = whichSquare;
            AddButterFlies(3,2);
            createMuru(100,300,300);
            //flower
            for(var i=0; i<25; i++)
            {
                var x11 = Math.random()*625;
                var x21 = Math.random()*620;
                var x31 = Math.random()*620;
                var y1 = 50+Math.random()*425;
                var y2 = 50+Math.random()*420;
                var y3 = 50+Math.random()*420;
                addToBackground(x11,y1,"flower1.png");
                addToBackground(x21,y2,"flower2.png");
                addToBackground(x31,y3,"flower3.png");
            }
            addToBackground(0,100,"laketop.png");
            addToLevel(47,284,405,218,"blank.png","lake1",false,false,"");
            addToLevel(434,284,175,108,"blank.png","lake2",false,false,"");
            addToLevel(493,162,153,120,"blank.png","lake3",false,false,"");
            for(var x=0;x<13;x++)
            {
                addToLevel(50*x,0,50,50,"htree12.png","tree",false,false,"");
            }
            for(var y=5;y<10;y++)
            {
                addToLevel(600,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            addToLevel(100,200,50,50,"htree12.png","tree",false,false,"");
            addToLevel(294,140,50,50,"htree12.png","tree",false,false,"");
            addToLevel(170,79,50,50,"htree12.png","tree",false,false,"");
            
            addToLevel(400,220,55,55,"animal7.png","animal",false,true,["Neigh... Neigh","Neigh... Neigh","","","","","horse.wav"]);
            addToLevel(500,350,75,75,"animal9.png","animal",false,true,["Neigh... Neigh","The third item comes full circle.","Neigh... Neigh","","","","horse.wav"]);
            break;
        case 15:
            lastSquare = whichSquare;
            AddButterFlies(2,1);
            createMuru(0,500,200);
            //flower
            for(var i=0; i<13; i++)
            {
                var x1 = Math.random()*575;
                var x2 = Math.random()*570;
                var x3 = Math.random()*570;
                var y1 =  Math.random()*130;
                var y2 = Math.random()*130;
                var y3 = Math.random()*130;
                addToBackground(x1,y1,"flower1.png");
                addToBackground(x2,y2,"flower2.png");
                addToBackground(x3,y3,"flower3.png");
            }
            addToBackground(50,350,"flower1.png");
            addToBackground(250,450,"flower2.png");
            addToBackground(500,400,"flower3.png");
            //npc
            addToLevel(500,80,80,80,"fisherman.png","fisherman",false,true,["Peter:","I get fish here every time! I love this village!","Everyone here is really nice.","There's a guy who's been in love with the princess.","He was here somewhere...","","harp.wav"]);
            addToBackground(0,100,"river2.png");
            addToLevel(0,162,650,100,"blank.png","river",false,false,"");
            addToLevel(0,0,50,50,"htree12.png","tree",false,false,"");
            for(var y=0;y<10;y++)
            {
                for(var x=0;x<13;x++)
                {
                    if(y==9)
                    {
                        if(x==0||x==2||x==3||x==6)
                        {
                            addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                        }
                    }
                    if(y==8)
                    {
                        if(x==0||(x>1&&x<7))
                        {
                            addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                        }
                    }
                    if(y==7||y==6)
                    {
                        if(x==0)
                        {
                            addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                        }
                    }
                    if(y==5)
                    {
                        addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                    }
                }
            }
            for(var y=0; y<3; y++)
            {
                addToLevel(600,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            for(var y=6; y<10; y++)
            {
                addToLevel(600,50*y,50,50,"htree2.png","tree",false,false,"");
            }
            if(subsequent)
            {
                addToLevel(500,400,50,50,"paper.png","paper2",true,false,"");
            }
            break;
        case 16:
            lastSquare = whichSquare;
            AddButterFlies(2,1);
            //path
            for(var i=200; i<600; i=i+100)
            {
                addToBackground(250,i-35,"sand.png");
            }
            addToBackground(175,165,"sand.png");
            addToBackground(175,265,"sand.png");
            addToBackground(325,165,"sand.png");
            addToBackground(325,265,"sand.png");
            addToBackground(170,180,"sand2.png");
            addToBackground(400,180,"sand2.png");
            addToBackground(250,180,"sand2.png");
            addToBackground(325,180,"sand2.png");
            for(var i=200; i<600; i=i+100)
            {
                addToBackground(275,i,"stone.png");
            }
            addToBackground(200,200,"stone.png");
            addToBackground(350,200,"stone.png");
            //tree
            for(var x=0;x<13;x++)
            {
                addToLevel(50*x,0,50,50,"htree2.png","tree",false,false,"");
            }
            for(var y=1;y<10;y++)
            {
                addToLevel(600,50*y,50,50,"htree2.png","tree",false,false,"");
            }
            for(var y=1;y<10;y++)
            {
                addToLevel(0,50*y,50,50,"htree2.png","tree",false,false,"");
            }
            addToLevel(262,50,125,125,"pinkGazebo.png","home",false,false,"");
            if(gateClosed)
            {
                addToLevel(300,160,50,78,"mario.png","mario",false,true,["Simon:","The happiness stirring inside me is overwhelming.","I must travel North and tell the princess how I feel!", "You'll help me open the gate to get there, won't you?", "I think I saw the key to the gate East of here in the labyrinth.","","harp.wav"]);
            }
            addToLevel(175,75,100,100,"treeLove.png","tree",false,false,"");
            addToLevel(375,75,100,100,"treeLove.png","tree",false,false,"");
            addToLevel(75,200,100,100,"treeLove.png","tree",false,false,"");
            addToLevel(475,200,100,100,"treeLove.png","tree",false,false,"");
            addToLevel(400,400,100,100,"treeLove.png","tree",false,false,"");
            addToLevel(150,400,100,100,"treeLove.png","tree",false,false,"");
            //flower
            addToBackground(425,325,"flower1.png");
            addToBackground(125,150,"flower2.png");
            addToBackground(200,375,"flower3.png");
            //animal
            addToLevel(200,300,50,50,"dog1.png","animal",false,true,["Woof... Woof","Woof... Woof","","","","","dog.wav"]);
            break;
        case 17:
            lastSquare = whichSquare;
            AddButterFlies(3,2);
            for(var x=0;x<13;x++)
            {
                addToLevel(50*x,450,50,50,"htree12.png","tree",false,false,"");
            }
            for(var y=0;y<10;y++)
            {
                addToLevel(0,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            //flower
            for(var i=0; i<25; i++)
            {
                var x1 = 50+Math.random()*575;
                var x2 = 50+Math.random()*570;
                var x3 = 50+Math.random()*570;
                var y1 = Math.random()*425;
                var y2 = Math.random()*420;
                var y3 = Math.random()*420;
                addToBackground(x1,y1,"flower1.png");
                addToBackground(x2,y2,"flower2.png");
                addToBackground(x3,y3,"flower3.png");
            }
            if(subsequent)
            {
                addToLevel(300,200,50,50,"paper.png","paper3",true,false,"");
            }
            break;
        case 18:
            //if(lastSquare==23){
                createjs.Sound.stop();
            //}
            sound2 = createjs.Sound.play("joy.wav","none", 0, 0, -1, 0.2, 0);
            lastSquare = whichSquare;
            AddButterFlies(3,2);
            //path
            for(var i=0; i<600; i=i+100)
            {
                addToBackground(250,i-35,"sand.png");
            }
            //tree
            for(var x=0;x<6;x++)
            {
                addToLevel(50*x,450,50,50,"htree12.png","tree",false,false,"");
            }
            for(var x=7;x<13;x++)
            {
                addToLevel(50*x,450,50,50,"htree12.png","tree",false,false,"");
            }
            //flower
            for(var i=0; i<13; i++)
            {
                var x11 = Math.random()*245;
                var x21 = Math.random()*240;
                var x31 = Math.random()*240;
                var x12 = 380+Math.random()*245
                var x22 = 380+Math.random()*240;
                var x32 = 380+Math.random()*240;
                var y1 = Math.random()*425;
                var y2 = Math.random()*420;
                var y3 = Math.random()*420;
                addToBackground(x11,y1,"flower1.png");
                addToBackground(x21,y2,"flower2.png");
                addToBackground(x31,y3,"flower3.png");
                addToBackground(x12,y1,"flower1.png");
                addToBackground(x22,y2,"flower2.png");
                addToBackground(x32,y3,"flower3.png");
            }
            break;
        case 19:
            lastSquare = whichSquare;
            AddButterFlies(3,2);
            for(var y=0;y<10;y++)
            {
                addToLevel(600,50*y,50,50,"htree12.png","tree",false,false,"");
            }
            for(var x=0;x<12;x++)
            {
                addToLevel(50*x,450,50,50,"htree12.png","tree",false,false,"");
            }
            //flower
            for(var i=0; i<25; i++)
            {
                var x1 = Math.random()*575;
                var x2 = Math.random()*570;
                var x3 = Math.random()*570;
                var y1 = Math.random()*425;
                var y2 = Math.random()*420;
                var y3 = Math.random()*420;
                addToBackground(x1,y1,"flower1.png");
                addToBackground(x2,y2,"flower2.png");
                addToBackground(x3,y3,"flower3.png");
            }
            addToBackground(0,-15,"lakebottom.png");
            addToLevel(47,0,405,180,"blank.png","lakebottom",false,false,"");
            break;
        case 20:
            lastSquare = whichSquare;
            AddButterFlies(2,1);
            for(var y=0;y<10;y++)
            {
                for(var x=0;x<13;x++)
                {
                    if(y==0||y==1||y==2)
                    {
                        if(x==0||x==2||x==3||x==6)
                        {
                            addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                        }
                    }
                    if(y==3)
                    {
                        if(x==0||(x>4&&x<10))
                        {
                            addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                        }
                    }
                    if(y==4)
                    {
                        if(x==0||x==5||x>8)
                        {
                            addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                        }
                    }
                    if(y==5)
                    {
                        if(x<2||x>3&&x<6||x==9||x==10)
                        {
                            addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                        }
                    }
                    if(y==6)
                    {
                        if(x<2||x==7)
                        {
                            addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                        }
                    }
                    if(y==7)
                    {
                        if(x<2||x==7)
                        {
                            addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                        }
                    }
                    if(y==8)
                    {
                        if(x<11)
                        {
                            addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                        }
                    }
                    if(y==9)
                    {
                        if(x==0)
                        {
                            addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                        }
                    }
                    if(x==12)
                    {
                        addToLevel(50*x,50*y,50,50,"htree2.png","tree",false,false,"");
                    }
                }
            }
            //flower
            addToBackground(225,150,"flower1.png");
            addToBackground(425,115,"flower2.png");
            addToBackground(200,350,"flower3.png");
            addToLevel(500,50,50,50,"heartKey.png","hkey",true,false,"");
            
            break;
        case 21:
            //if(lastSquare==3){
                createjs.Sound.stop();
            //}
            sound1 = createjs.Sound.play("serenity.wav","none", 0, 0, -1, 0.2, 0);
            lastSquare = whichSquare;
            AddButterFlies(2,1);
            //path
            for(var i=0; i<400; i=i+100)
            {
                addToBackground(250,i-35,"sand.png");
            }
            for(var i=300; i<600; i=i+100)
            {
                addToBackground(i+25,192,"sand2.png");
            }
            for(var i=0; i<300; i=i+100)
            {
                addToBackground(275,i,"stone.png");;
            }
            for(var i=300; i<600; i=i+100)
            {
                addToBackground(i+65,212,"stone2.png");;
            }
            //house
            addToLevel(75,90,150,150,"house1.png","house",false,false,"");
            addToLevel(390,5,175,175,"eggHome.png","house",false,false,"");
            addToLevel(500,325,100,100,"pinkTool.png","house",false,false,"");
            //tree
            addToLevel(600,0,50,50,"htree2.png","tree",false,false,"");
            addToLevel(150,400,50,50,"htree2.png","tree",false,false,"");
            addToLevel(150,350,50,50,"htree2.png","tree",false,false,"");
            //rock
            addToLevel(290,390,75,43,"rock1.png","rock",false,false,"");
            //flower
            addToBackground(75,190,"flower1.png");
            addToBackground(550,150,"flower2.png");
            addToBackground(470,415,"flower3.png");
            for(var y=0;y<9;y++)
            {
                addToLevel(0,50*y,50,50,"htree2.png","tree",false,false,"");
            }
            for(var x=0;x<13;x++)
            {
                addToLevel(50*x,450,50,50,"htree2.png","tree",false,false,"");
            }
            if(subsequent2)
            {
                addToLevel(50,350,50,50,"spiralz.png","portal",false,false,"");
            }
            addToLevel(310,350,37,65,"villager1.png","villager1",false,true,["Arabella:","There's a guy who's been writing poems for the princess.","I read one of them.","It was lovely!","So romantic...","","harp.wav"]);
            break;
        case 22:
            lastSquare = whichSquare;
            AddButterFlies(2,1);
            ////
            if(pc1)
                addToLevel(300,350,47,72,"villager2.png","paperChase2",false,true,["Nicholas:","*Sob* It was so beautiful *Sob*","The poem that man gave to me earlier was absolutely ","inspiring. I went up North-East to show it to a friend, and","he too was delighted by it. I made sure to pass it along.","","harp.wav"]);
            else
                addToLevel(300,350,47,72,"villager2.png","paperChase2",false,true,["Nicholas:","Us villagers love it here. We all really care about one","another. The compassion is tangible!","It's much better than the rest of the kingdom.","I hope you enjoy your time here as much as I do every day!","","harp.wav"]);
            ////
            //path
            for(var i=0; i<700; i=i+100)
            {
                addToBackground(i-35,192,"sand2.png");
            }
            for(var i=0; i<700; i=i+100)
            {
                addToBackground(i,212,"stone2.png");;
            }
            //house
            addToLevel(25,325,200,163,"house2.png","home",false,false,"");
            addToLevel(450,315,175,175,"homeMushroom.png","home",false,false,"");
            //tree
            for(var x=0;x<13;x++)
            {
                addToLevel(50*x,0,50,50,"htree2.png","tree",false,false,"");
            }
            for(var x=0;x<13;x++)
            {
                addToLevel(50*x,450,50,50,"htree2.png","tree",false,false,"");
            }
            //house
            addToLevel(250,5,175,175,"eggHome3.png","home",false,false,"");
            //field
            addToLevel(85,85,70,48,"field2.png","home",false,false,"");
            //flower
            addToBackground(225,310,"flower1.png");
            addToBackground(450,400,"flower2.png");
            addToBackground(200,150,"flower3.png");
            //animal
            addToLevel(550,75,40,40,"cat2.png","animal",false,true,["Meow... Meow","Meow... Meow","","","","","cat.wav"]);
            break;
        case 23:
            //if(lastSquare==18){
                createjs.Sound.stop();
            //}
            sound1 = createjs.Sound.play("serenity.wav","none", 0, 0, -1, 0.2, 0);
            lastSquare = whichSquare;
            AddButterFlies(2,1);
            addToLevel(380,130,39,65,"villager4.png","villager4",false,true,["Rosie:","Oh, I don't believe I've seen you before.","Welcome to our wonderful village!","You'll love it here!","Everything is just perfect!","","harp.wav"]);
            //path
            for(var i=0; i<300; i=i+100)
            {
                addToBackground(250,i-10,"sand.png");
            }
            for(var i=0; i<700; i=i+100)
            {
                addToBackground(i-35,192,"sand2.png");
            }
            for(var i=25; i<200; i=i+100)
            {
                addToBackground(275,i,"stone.png");;
            }
            for(var i=0; i<700; i=i+100)
            {
                addToBackground(i,212,"stone2.png");;
            }
            //house
            addToLevel(250,323,185,152,"pinkCottage.png","home",false,false,"");
            //tree
            for(var x=0;x<6;x++)
            {
                addToLevel(50*x,0,50,50,"htree2.png","tree",false,false,"");
            }
            for(var x=7;x<13;x++)
            {
                addToLevel(50*x,0,50,50,"htree2.png","tree",false,false,"");
            }
            for(var x=0;x<13;x++)
            {
                addToLevel(50*x,450,50,50,"htree2.png","tree",false,false,"");
            }
            addToLevel(525,325,100,100,"treeLove.png","tree",false,false,"");
            //gate
            if(gateClosed)
            {
                addToLevel(300,0,50,50,"gate.png","gate",false,false,"");
            }
            //house
            addToLevel(25,25,196,155,"heartHome.png","home",false,false,"");
            addToLevel(450,0,158,187,"homeTree.png","home",false,false,"");
            //flower
            addToBackground(225,150,"flower1.png");
            addToBackground(425,115,"flower2.png");
            addToBackground(200,375,"flower3.png");
            //animal
            addToLevel(50,323,45,45,"cat1.png","animal",false,true,["Meow... Meow","Meow... Meow","","","","","cat.wav"]);
            break;
        case 24:
            lastSquare = whichSquare;
            AddButterFlies(2,1);
            //path
            for(var i=0; i<700; i=i+100)
            {
                addToBackground(i-35,192,"sand2.png");
            }
            for(var i=0; i<700; i=i+100)
            {
                addToBackground(i,212,"stone2.png");
            }
            //house
            addToLevel(25,325,150,150,"romanticGazebo.png","home",false,false,"");
            addToLevel(475,315,175,175,"eggHome2.png","home",false,false,"");
            //tree
            for(var x=0;x<13;x++)
            {
                addToLevel(50*x,0,50,50,"htree2.png","tree",false,false,"");
            }
            for(var x=0;x<13;x++)
            {
                addToLevel(50*x,450,50,50,"htree2.png","tree",false,false,"");
            }
            //house
            addToLevel(250,5,175,175,"treeHouse.png","home",false,false,"");
            //field
            addToLevel(500,85,70,48,"field3.png","home",false,false,"");
            //flower
            addToBackground(550,180,"flower1.png");
            addToBackground(165,400,"flower2.png");
            addToBackground(250,150,"flower3.png");
            addToLevel(225,325,100,100,"treeLove.png","tree",false,false,"");
            addToLevel(85,70,50,63,"villager3.png","villager3",false,true,["Mark:","Have you met Flora? She's my girlfriend.","I'll propose to her tonight!","Do you think she'll say yes?","I'm so nervous!","","harp.wav"]);
            break;
        case 25:
            lastSquare = whichSquare;
            AddButterFlies(2,1);
            //path
            for(var i=0; i<400; i=i+100)
            {
                addToBackground(250,i-35,"sand.png");
            }
            for(var i=0; i<300; i=i+100)
            {
                addToBackground(i+50,192,"sand2.png");
            }
            for(var i=0; i<300; i=i+100)
            {
                addToBackground(275,i,"stone.png");;
            }
            for(var i=0; i<300; i=i+100)
            {
                addToBackground(i-12,212,"stone2.png");;
            }
            addToLevel(0,0,50,50,"htree2.png","tlCorner",false,false,"");
            for(var x=0;x<13;x++)
            {
                addToLevel(50*x,450,50,50,"htree2.png","tree",false,false,"");
            }
            for(var y=0;y<9;y++)
            {
                addToLevel(600,50*y,50,50,"htree2.png","tree",false,false,"");
            }
            //house
            addToLevel(50,60,200,124,"house5.png","house",false,false,"");
            addToLevel(415,75,175,175,"house3.png","house",false,false,"");
            addToLevel(450,275,150,150,"house4.png","house",false,false,"");
            //rock
            addToLevel(375,300,75,43,"rock1.png","rock",false,false,"");
            //flower
            addToBackground(50,150,"flower1.png");
            addToBackground(570,150,"flower2.png");
            addToBackground(470,415,"flower3.png");
            //dog
            addToLevel(50,350,60,60,"dog2.png","animal",false,true,["Woof... Woof","Woof... Woof","","","","","dog.wav"]);
            addToLevel(310,350,50,63,"villager5.png","villager5",false,true,["Flora:","I love him so much!","Not you!","I was talking about Mark.","If only he'd propose!","","harp.wav"]);
            break;
    }
    
}

var addToLevel = function(x,y,width,height,src,name,isItem,isNPC,dialogue)
{
    
    if(inventoryContainer.getChildByName(name)==null&&usedInventory.getChildByName(name)==null)
    {
        picture=new Image();
        picture.src=src;
        bm=new createjs.Bitmap(picture);
        bm.x=x;
        bm.y=y;
        bm.width=width;
        bm.height=height;
        bm.name=name;
        bm.isItem=isItem;
        bm.isNPC=isNPC;
        bm.dialogue=dialogue;
        siContainer.addChild(bm);
    }
    
    
}

var addToBackground = function(x,y,src)
{
    picture=new Image();
    picture.src=src;
    bm=new createjs.Bitmap(picture);
    bm.x=x;
    bm.y=y;
    backgroundContainer.addChild(bm);
}
/************Inventary*******/
var addToInventory = function(item)
{
    createjs.Sound.play("object.wav");
    placeItem(item);
}
var placeItem = function(item)
{
    inventoryContainer.addChild(item);
    var hmi = inventoryContainer.getNumChildren();
    siContainer.removeChild(item);
    
    item.y = (Math.floor((hmi/5)-.01))*50+(Math.floor((hmi/5)-.01)+1)*(100/6)+75;
    item.x = ((hmi-(Math.floor((hmi/5)-.01))*5)-1)*50+340+((hmi-(Math.floor((hmi/5)-.01))*5))*(50/6);
    
    
}

var refreshInventory = function()
{
    tempContainer = new createjs.Container();
    
    var numChildren = inventoryContainer.getNumChildren();
    
    for(var x = 0;x<numChildren;x++)
    {
        
        var ch = inventoryContainer.getChildAt(x).clone();
        tempContainer.addChild(ch);
        
    }
    
    inventoryContainer.removeAllChildren();
    
    for(var x = 0;x<numChildren;x++)
    {
        var ch = tempContainer.getChildAt(x).clone();
        addToInventory(ch);
    }
    
}
/*****Elest*/
 var hk = function()
 {
 if(backgroundContainer != null)
 {
 if(inventoryContainer.getChildByName("hkey")!=null||keyUsed)
 {
 if(cwg)
 {
 siContainer.removeChild(siContainer.getChildByName("gate"));
 gateClosed = false;
 usedInventory.addChild(inventoryContainer.getChildByName("hkey"));
 inventoryContainer.removeChild(siContainer.getChildByName("hkey"));
 keyUsed=true;
 refreshInventory();
 }
 
 }
 
 if(inventoryContainer.getChildByName("hkey")!=null&&siContainer.getChildByName("NPC")!=null)
 {
 siContainer.getChildByName("NPC").dialogue=("NEW DIALOGUE!");
 }
 
 if(codeArray.length==4)
 {
 
 if(codeArray[0]=="rose"&&codeArray[1]=="heart"&&codeArray[2]=="ring"&&codeArray[3]=="cupid")
 {
 codeArray=[];
 siContainer.removeChild(siContainer.getChildByName("gate2"));
 gate2Closed = false;
 usedInventory.addChild(inventoryContainer.getChildByName("rose"));
 usedInventory.addChild(inventoryContainer.getChildByName("heart"));
 usedInventory.addChild(inventoryContainer.getChildByName("ring"));
 usedInventory.addChild(inventoryContainer.getChildByName("cupid"));
 inventoryContainer.removeChild(inventoryContainer.getChildByName("rose"));
 inventoryContainer.removeChild(inventoryContainer.getChildByName("heart"));
 inventoryContainer.removeChild(inventoryContainer.getChildByName("ring"));
 inventoryContainer.removeChild(inventoryContainer.getChildByName("cupid"));
 refreshInventory();
 }
 else
 {
 codeArray=[];
 inventoryContainer.removeChild(inventoryContainer.getChildByName("rose"));
 inventoryContainer.removeChild(inventoryContainer.getChildByName("heart"));
 inventoryContainer.removeChild(inventoryContainer.getChildByName("ring"));
 inventoryContainer.removeChild(inventoryContainer.getChildByName("cupid"));
 refreshInventory();
 var pc=characterContainer.getChildAt(0);
 pc.y=pc.y+60;
 addToLevel(50,50,50,50,"cupid.png","cupid",true,false,"");
 addToLevel(200,50,50,50,"rose.png","rose",true,false,"");
 addToLevel(400,50,50,50,"ring.png","ring",true,false,"");
 addToLevel(550,50,50,50,"heart.png","heart",true,false,"");
 }
 
 }
 
 if(papers==2)
 {
 addToLevel(-100,-100,0,0,"heart.png","voice",false,true,["You collected all 3 missing pieces of paper","Return them to the book immediately!","","","","",""]);
 runDialogue(siContainer.getChildByName("voice"));
 pCollected=true;
 papers=0;
 }
 if(pCollected&&bookColl&&siContainer.getChildByName("npc")!=null)
 {
 subsequent=false;
 var npc = siContainer.getChildByName("npc");
 if(ticCount==0)
 {
 usedInventory.addChild(inventoryContainer.getChildByName("paper1"));
 usedInventory.addChild(inventoryContainer.getChildByName("paper2"));
 usedInventory.addChild(inventoryContainer.getChildByName("paper3"));
 inventoryContainer.removeChild(inventoryContainer.getChildByName("paper1"));
 inventoryContainer.removeChild(inventoryContainer.getChildByName("paper2"));
 inventoryContainer.removeChild(inventoryContainer.getChildByName("paper3"));
 refreshInventory();
 npc.dialogue = ["Thanks!","","I'm off to confess my love to the princess!","","Wish me luck!","",""];
 runDialogue(npc);
 missionComplete=true;
 ticCount++;
 }
 if(ticCount<50)
 {
 bookComplete=true;
 siContainer.removeChild(siContainer.getChildByName("book"));
 if(!conversing)
 {
 for(var x = 0; x<10; x++)
 {
 npc.y=npc.y-.5;
 }
 ticCount++;
 }
 }
 
 
 }
 else
 bookColl=false;
 if(revealpaper)
 {
 addToLevel(250,300,50,50,"paper.png","paper1",true,false,"");
 revealpaper = false;
 subsequent3 = true;
 }
 if(firstColl&&dummy)
 {
 addToLevel(300,78,50,48,"book.png","book",false,false,"");
 subsequent=true;
 firstColl=false;
 dummy = false;
 var pc=characterContainer.getChildAt(0);
 pc.y=pc.y+60;
 }
 if(openPortal)
 {
 
 if(!conversing)
 {
 addToLevel(50,50,100,50,"spiralz.png","portal",false,false,"");
 subsequent2=true;
 openPortal=false;
 }
 }
 
 }
 
 }
 
 var teleport = function(mp)
 {
 if(mp==3)
 {
 mapPosition = 21;
 loadlevel(21);
 pc = characterContainer.getChildAt(0);
 pc.x = 100;
 pc.y = 356;
 }
 else
 {
 mapPosition= 3;
 loadlevel(3);
 pc = characterContainer.getChildAt(0);
 pc.x = 100;
 pc.y = 56;
 }
 }
 
 createjs.Ticker.addEventListener("tick", hk);


////*///

var checkLeft = function()
{
    if(mapPosition%5==1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

var checkRight = function()
{
    if(mapPosition%5==0)
    {
        return false;
    }
    else
    {
        return true;
    }
}

var checkUp = function()
{
    if(mapPosition<6)
    {
        return false;
    }
    else
    {
        return true;
    }
}

var checkDown = function()
{
    if(mapPosition>20)
    {
        return false;
    }
    else
    {
        return true;
    }
}

//collision with static objects (non-items)

var ocCheckLeft = function()
{
    cwg=false;
    for(var x=0;x<siContainer.getNumChildren();x++)
    {
        var si = siContainer.getChildAt(x);
        
        if(bmpAnimation.x<=(si.x+si.width)&&bmpAnimation.y>(si.y-bmpAnimation.height+4)&&bmpAnimation.y<(si.y+si.height-4)&&!(bmpAnimation.x<=si.x))
        {
            cWW(si);
            if(si.isNPC)
            {
                runDialogue(si);
            }
            if(!si.isItem)
            {
                return false;
            }
            else
            {
                addToInventory(si);
            }
            
        }
    }
    return true;
}
var ocCheckRight = function()
{
    cwg=false;
    for(var x=0;x<siContainer.getNumChildren();x++)
    {
        var si = siContainer.getChildAt(x);
        if(bmpAnimation.x+bmpAnimation.width>=(si.x)&&bmpAnimation.y>(si.y-bmpAnimation.height+4)&&bmpAnimation.y<(si.y+si.height-4)&&(bmpAnimation.x<=si.x))
        {
            cWW(si);
            if(si.isNPC)
            {
                runDialogue(si);
            }
            if(!si.isItem)
            {
                return false;
            }
            else
            {
                addToInventory(si);
            }
        }
    }
    return true;
}

var ocCheckUp = function()
{
    cwg=false;
    for(var x=0;x<siContainer.getNumChildren();x++)
    {
        var si = siContainer.getChildAt(x);
        if(bmpAnimation.y<=(si.y+si.height)&&bmpAnimation.x+bmpAnimation.width>(si.x+4)&&bmpAnimation.x<(si.x+si.width-4)&&!(bmpAnimation.y<=si.y))
        {
            cWW(si);
            if(si.isNPC)
            {
                runDialogue(si);
            }
            if(!si.isItem)
            {
                return false;
            }
            else
            {
                addToInventory(si);
            }
        }
    }
    return true;
}

var ocCheckDown = function()
{
    cwg=false;
    for(var x=0;x<siContainer.getNumChildren();x++)
    {
        var si = siContainer.getChildAt(x);
        if(bmpAnimation.y+bmpAnimation.height>=(si.y)&&bmpAnimation.x+bmpAnimation.width>(si.x+4)&&bmpAnimation.x<(si.x+si.width-4)&&(bmpAnimation.y<=si.y))
        {
            cWW(si);
            if(si.isNPC)
            {
                runDialogue(si);
            }
            if(!si.isItem)
            {
                return false;
            }
            else
            {
                addToInventory(si);
            }
        }
    }
    return true;
}

var cWW = function(w)
{
    if(w.name=="gate")
    {
        cwg = true;
    }
    
    if(w.name=="rose"||w.name=="ring"||w.name=="cupid"||w.name=="heart")
    {
        codeArray[codeArray.length]=w.name;
        console.log(codeArray);
    }
    if(w.name=="paper1"||w.name=="paper2"||w.name=="paper3")
    {
        papers++;
    }
    if(w.name=="npc")
    {
        firstColl = true;
    }
    if(w.name=="book")
    {
        bookColl = true;
    }
    if(w.name=="lovely-lady")
    {
        openPortal=true;
        console.log(openPortal);
    }
    if(w.name=="portal")
    {
        teleport(mapPosition);
    }
    if(w.name=="paperChase1")
    {
        pc1=true;
    }
    if(w.name=="paperChase2"&&pc1)
    {
        
        pc2=true;
    }
    if(w.name=="paperChase3"&&pc2)
    {
        pc1=false;
        pc3=true;
    }
    if(w.name=="paperChase4"&&pc3)
    {
        pc2=false;
        pc3=false; 
        revealpaper=true;
    }
    
}
///////////*********/////NPC///////

function AddCoins()
{
    var i,j;
    for(i=0;i<9;i++)
    {
        var preNameOnFile = "Art Assets/Characters";
        coinsAnimation[i]= createNPC(preNameOnFile + "/Mushroom/Right.png", 62, 77, 0,0, 1, i*70+30, -3, 1, 1, "3r", ["I'm a drogon"]);
        coinsAnimation[i].isNPC=false;
        
    }
    
}
function Advisor()
{
    advisor= createNPC(preNameOnFile + "/Cat Sage/Stand_left.png", 70, 77, 22,22, 1, 200, 200, 50, 50, "3r", ["I have something interesting to tell you","you should pick up the dragons and I will tell you"]);
}
function CountNum()
{
    var Count=0;
    for(index in coinsAnimation)
    {
        if(coinsAnimation[index]!="null")
        {
            Count++;
        }
    }
}
function PickUpCoins()
{
    for(index in coinsAnimation)
    {
        if(typeof coinsAnimation[index]!="undefined")
        {
            if(IsCollide(coinsAnimation[index]))
            {
                siContainer.removeChild(coinsAnimation[index]);
                characterContainer.removeChild(coinsAnimation[index]);
                delete(coinsAnimation[index]);
                coinsCount--;
                
            }
        }
    }
    if(coinsCount<1)
    {
        
        if(Pickingfinished==false)
        {
            siContainer.removeChild(advisor);
            characterContainer.removeChild(advisor);
            advisor= createNPC(preNameOnFile + "/Cat Sage/Stand_left.png", 70, 77, 22,22, 1, 200, 200, 50, 50, "3r", ["Go west and there is something"]);
            Pickingfinished=true;
            
        }
    }
}
function createNPC(fileName,pixelWidth,pixelHeight,offSetX,offSetY,endFrame,x,y,w,h,name,dialogue)
{
    var frameSheet = new Image();
    frameSheet.src=fileName;
    
    var spriteSheet = new createjs.SpriteSheet({
                                               images: [frameSheet],
                                               frames: { width: pixelWidth, height: pixelHeight, regX: offSetX, regY: offSetY },
                                               animations: {
                                               frameSheet: [0, endFrame, "frameSheet", 0.5]
                                               }});
    var NPC= new createjs.Sprite(spriteSheet);
    NPC.x=x;
    NPC.y=y;
    NPC.width=w;
    NPC.height=h;
    
    //characterContainer.addChild(NPC);
    NPC.gotoAndPlay("frameSheet");
    
    
    
    NPC.isItem=false;
    NPC.isNPC=true;
    NPC.dialogue=dialogue;
    if(name=="sky")
        skyContainer.addChild(NPC);
    else
        siContainer.addChild(NPC);
    
    return NPC;
    
}
function movingNPC(NPC,x,y)
{
    NPC.x=NPC.x+x;
    NPC.y=NPC.y+y;
}
function GoBack(NPC,returnX,returnY, xLeftBound,yLeftBound,xRightBound,yRightBound)
{
    if(NPC.x<xLeftBound||NPC.x>xRightBound||NPC.y<yLeftBound||NPC.y>yRightBound)
    {
        NPC.x=returnX;
        NPC.y=returnY;
    }
}
function LoadNPCs()
{
    var preNameOnFile = "Art Assets/Characters";
    npc=createNPC(preNameOnFile + "/Slime/Stand_right.png", 70, 50, 0, 0, 1, 49, 48, 30, 30, "3r", ["I'm a drogon"]);
    npc.isNPC=false;
    npc2=createNPC(preNameOnFile + "/Slime/Stand_right.png", 70, 50, 0, 25, 1, 49, 48, 30, 30, "3r", ["I'm a drogon"]);
    npc2.isNPC=false;
    npc3=createNPC(preNameOnFile + "/Slime/Stand_right.png", 70, 50, 0, 25, 1, 49, 48, 30, 30, "3r", ["I'm a drogon"]);
    npc3.isNPC=false;
    npc4=createNPC(preNameOnFile + "/Slime/Stand_right.png", 70, 50, 0, 25, 1, 49, 48, 30, 30, "3r", ["I'm a drogon"]);
    npc4.isNPC=false;
    //   if(bmpAnimation)
    //  bmpAnimation.x=0;
    //  if(bmpAnimation)
    //  bmpAnimation.y=400;
    
}
function IsCollide(NPC)
{
    
    
    if(!NPC)
    {
        return false;
    }
    if(abs(bmpAnimation.x,NPC.x)<(bmpAnimation.width/2+NPC.width/2)&&
       abs(bmpAnimation.y,NPC.y)<(bmpAnimation.height/2+NPC.height/2))
    {
        return true;
    }
    else
    {
        return false;
    }
    
}
function abs(v1,v2)
{
    if(v1>v2)
    {
        return v1-v2;
    }
    else
    {
        return v2-v1;
    }
}
var muru;
var moveRight=true;
var prevRight=true;
var leftMuru;
var rightMuru;
var leftBound;
var rightBound;
var yAxis;
function createMuru(l,r,y)
{
    leftBound=l;
    rightBound=r;
    yAxis=y;
    muru= createNPC("muruRight.png",43,40,0,0,4,(leftBound+rightBound)/2,yAxis,51,50,"sky","DSDSDF");;
    moveRight=true;
    createjs.Ticker.addEventListener("tick", moveMuru);
}

function moveMuru()
{
    
    if(lastSquare==14||lastSquare==15)
    {
        if(muru.x>rightBound)
        {
            if(moveRight==true)
            {
                skyContainer.removeChild(muru);
                muru= createNPC("muruLeft.png",43,40,0,0,4,rightBound-1,yAxis,51,50,"sky","DSDSDF");
            }
            
            moveRight=false;
        }
        
        
        if(muru.x<leftBound)
        {
            if(moveRight==false)
            {
                skyContainer.removeChild(muru);
                muru= createNPC("muruRight.png",43,40,0,0,4,leftBound+1,yAxis,51,50,"sky","DSDSDF");
            }
            
            moveRight=true;
        }
        
        
        if(moveRight==true)
            muru.x+=1;
        
        
        
        if(moveRight==false)
            muru.x-=1;
    }
}
var butterFliesvar=new Array(100);
var birds=new Array(100);
function AddButterFlies(butterflyNum,birdNum)
{
    
    
    var i=0;
    for(i;i<butterflyNum;i++)
    {
        butterFliesvar[i]=createNPC("butterfly.png", 48, 45, 0, 0, 1+Math.random()*3, 300+i*200, 400*i*20, 50, 50, "sky", ["I'm a drogon"]);
        butterFliesvar[i].isNPC=false;
        butterFliesvar[i].addEventListener("click",function(){alert("Game Created by Enting Wu");});
        
        
    }
    var k=0;
    for(k=0;k<birdNum;k++)
    {
        birds[k]=createNPC("birdLeft.png",37.5,30,0,0,3,200+k*100*Math.random(),k*100*Math.random(),30,30,"sky","DSDSDF");
        birds[k].isNPC=false;
        
    }
    
    createjs.Ticker.addEventListener("tick", movingButterFlies);
    
}
function AddMuru()
{
    createNPC("birdLeft.png", 51, 51, 0, 0, 4, 123, 123, 50, 50, "123", ["I'm a drogon"]);
    
}
function moveRightLeft()
{
    
}
function movingButterFlies()
{
    
    for(sss in butterFliesvar)
    {
        movingNPC(butterFliesvar[sss],-Math.random()*3*Math.random(),Math.random()*2);
        GoBack(butterFliesvar[sss],1200*Math.random(),0,0,0,1200,800);
    }
    var i=0;
    for(yyy in birds)
    {
        movingNPC(birds[yyy],-3,0);
        GoBack(birds[yyy],600+i*3,600*Math.random(),0,0,800,800);
        i++;
    }
}

function movingStaff()
{
    if(level==17)
    {
        movingNPC(npc,1,1);
        movingNPC(npc2,2.2,4);
        movingNPC(npc3,3,4.2);
        movingNPC(npc4,1.5,1.5);
        GoBack(npc,2,2,2,2,400,400);
        GoBack(npc2,2,2,2,2,400,400);
        GoBack(npc3,2,2,2,2,400,400);
        GoBack(npc4,2,2,2,2,400,400);
        
        
        
        if(IsCollide(npc)||IsCollide(npc2)||IsCollide(npc3)||IsCollide(npc4))
        {
            if(level==17)
            {
                bmpAnimation.x=200;
                bmpAnimation.y=200;
            }
        }
    }
    if(level==18)
    {
        PickUpCoins();
    }
    if(level!=18)
    {
        coinsCount=9;
    }
    if(level!=18)
    {
        // stopSound();
    }
}
//////////Dielogue

var runDialogue = function(si)
{
    if(si.name=="lovely-lady")
        ll=true;
    conversing = true;
    var jlg=false;
    dialogueContainer.visible = true;
    createjs.Ticker.addEventListener("tick", progress);
    
    var line1 = new createjs.Text(si.dialogue[0], "20px Arial", "#FFFFFF");
    line1.x=70;
    line1.y=300;
    line1.shadow = new createjs.Shadow("#000000", 3, 3, 5);
    line1.name="line1";
    var line2 = new createjs.Text(si.dialogue[1], "20px Arial", "#FFFFFF");
    line2.x=70;
    line2.y=325;
    line2.name="line2";
    line2.shadow = new createjs.Shadow("#000000", 3, 3, 5);
    var line3 = new createjs.Text(si.dialogue[2], "20px Arial", "#FFFFFF");
    line3.x=70;
    line3.y=350;
    line3.name="line3";
    line3.shadow = new createjs.Shadow("#000000", 3, 3, 5);
    var line4 = new createjs.Text(si.dialogue[3], "20px Arial", "#FFFFFF");
    line4.x=70;
    line4.y=375;
    line4.name="line4";
    line4.shadow = new createjs.Shadow("#000000", 3, 3, 5);
    var line5 = new createjs.Text(si.dialogue[4], "20px Arial", "#FFFFFF");
    line5.x=70;
    line5.y=400;
    line5.name="line5";
    line5.shadow = new createjs.Shadow("#000000", 3, 3, 5);
    var line6 = new createjs.Text("Press A", "20px Arial", "#FFFFFF");
    line6.x=510;
    line6.y=440;
    dialogueContainer.addChild(line1);
    dialogueContainer.addChild(line2);
    dialogueContainer.addChild(line3);
    dialogueContainer.addChild(line4);
    dialogueContainer.addChild(line5);
    dialogueContainer.addChild(line6);
    if(si.dialogue[6]!="")
    {
        if(si.dialogue[6]=="harp.wav")
        {
            sound = createjs.Sound.createInstance("harp.wav");
            sound.play(createjs.Sound.INTERRUPT_NONE,0,0,0,.5,0);
        }
        else if(si.dialogue[6]=="horse.wav")
        {
            sound = createjs.Sound.createInstance("horse.wav");
            sound.play(createjs.Sound.INTERRUPT_NONE,0,0,0,.2,0);
        }
        else
            sound = createjs.Sound.play(si.dialogue[6]);
    }
}

var progress = function(event)
{
    if(keyboard.a==0)
    {
        jlg = true;
    }
    if(keyboard.a==1&&jlg)
    {
        if(ll)
        {
            dialogueContainer.removeChild(dialogueContainer.getChildByName("line1"));
            dialogueContainer.removeChild(dialogueContainer.getChildByName("line2"));
            dialogueContainer.removeChild(dialogueContainer.getChildByName("line3"));
            dialogueContainer.removeChild(dialogueContainer.getChildByName("line4"));
            dialogueContainer.removeChild(dialogueContainer.getChildByName("line5"));
            var line1 = new createjs.Text("siblings realize what they've done to the kingdom. If this ", "20px Arial", "#FFFFFF");
            line1.x=70;
            line1.y=300;
            line1.shadow = new createjs.Shadow("#000000", 3, 3, 5);
            line1.name="line1";
            var line2 = new createjs.Text("continues, we won't have a kingdom to protect. I'll open the ", "20px Arial", "#FFFFFF");
            line2.x=70;
            line2.y=325;
            line2.name="line2";
            line2.shadow = new createjs.Shadow("#000000", 3, 3, 5);
            var line3 = new createjs.Text("warp to the village for you. Thank you!", "20px Arial", "#FFFFFF");
            line3.x=70;
            line3.y=350;
            line3.name="line3";
            line3.shadow = new createjs.Shadow("#000000", 3, 3, 5);
            var line4 = new createjs.Text("", "20px Arial", "#FFFFFF");
            line4.x=70;
            line4.y=375;
            line4.name="line4";
            line4.shadow = new createjs.Shadow("#000000", 3, 3, 5);
            var line5 = new createjs.Text("", "20px Arial", "#FFFFFF");
            line5.x=70;
            line5.y=400;
            line5.name="line5";
            line5.shadow = new createjs.Shadow("#000000", 3, 3, 5);
            var line6 = new createjs.Text("Press A", "20px Arial", "#FFFFFF");
            line6.x=510;
            line6.y=440;
            dialogueContainer.addChild(line1);
            dialogueContainer.addChild(line2);
            dialogueContainer.addChild(line3);
            dialogueContainer.addChild(line4);
            dialogueContainer.addChild(line5);
            dialogueContainer.addChild(line6);
            ll=false;
            jlg=false;
        }
        else{
            dialogueContainer.visible = false;
            jlg = false;
            conversing = false;
            dialogueContainer.removeChild(dialogueContainer.getChildByName("line1"));
            dialogueContainer.removeChild(dialogueContainer.getChildByName("line2"));
            dialogueContainer.removeChild(dialogueContainer.getChildByName("line3"));
            dialogueContainer.removeChild(dialogueContainer.getChildByName("line4"));
            dialogueContainer.removeChild(dialogueContainer.getChildByName("line5"));
            if(sound!=null)
            {
                sound.stop();
            }
        }
    }
}
