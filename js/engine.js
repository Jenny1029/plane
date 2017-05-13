var Engine={
	gameStatus:false,
	isStart:false,
	enemy:{},
	bullet:{},
	score:0,
	enemyTimer:null,
	moveTimer:null,
	bg:document.querySelector(".game"),
	scorebox:document.querySelector(".score"),
	init:function(){
		this.gameStart();
		this.bgMove();
	},
	gameStart:function(){
		var _this=this;
		this.bg.onclick=function(){
			if(!_this.isStart){
				_this.isStart=true;
				_this.createPlane();
				_this.handleMove();
			}
		}
	},
	bgMove:function(){
		var t=0;
		var _this=this;
		var timer=setInterval(function(){
			t+=2;
			 _this.bg.style["background-position-y"]=t+"px";
		},100)
	},
	createPlane:function(){
		Hero.init();
		this.enemyTimer=setInterval(function(){
			var num=parseInt(Math.random()*15)+1;
			switch(num){
				case 1:
				case 3:
				case 5:
				case 7:
				case 9:
					new SmallEnemy().init();
					break;
				case 4:
				case 8:
				case 12:
					new MiddleEnemy().init();
					break;
				case 14:
					new LargeEnemy().init();
					break;
			}
		},350);
	},
	handleMove:function(){
		var _this = this;
		this.moveTimer = setInterval(function(){
			for(var i in _this.bullet){
				_this.bullet[i].move();
			}
			for(var i in _this.enemy){
				_this.enemy[i].move();
			}
		},30);
	},
	isCompact: function(obj1,obj2){
		var l1 = obj1.offsetLeft > obj2.offsetLeft + obj2.offsetWidth;
		var l2 = obj2.offsetLeft > obj1.offsetLeft + obj1.offsetWidth;
		var t1 = obj1.offsetTop > obj2.offsetTop + obj2.offsetHeight;
		var t2 = obj2.offsetTop > obj1.offsetTop + obj1.offsetHeight;

		if(l1 || l2 || t1 || t2){
			return false;
		}
		return true;
	},
	updateScore: function(score){
		this.score += score;
		this.scoreBox.innerHTML = '分数：'+this.score;
	},
	gameOver: function(){
		this.isOver = true;
		clearInterval(this.enemyTimer);
		document.querySelector('.over').style.display = 'block';
	}
};
Engine.init();
