function Bullet(l,t,speed){
	this.l = l;
	this.t = t;
	this.self=null;
	this.left=0;
	this.top=0;
	this.speed=speed;
}
Bullet.prototype={
	constructor:Bullet,
	init:function(){
		var _this=this;
		var img=document.createElement("img");
		img.src="img/bullet1.png";
		Engine.bg.appendChild(img);
		this.self=img;
		img.onload=function(){
			var l=Hero.left+(Hero.self.offsetWidth-_this.self.offsetWidth)/2;
			var t=Hero.top-_this.self.offsetHeight;
			_this.self.style.left=l+"px";
			_this.self.style.top=t+"px";
			_this.left=l;
			_this.top=t;
		}
		
		this.id = Math.random();
		Engine.bullet[this.id] = this;
		
	},
	move:function(){
		var _this=this;
			_this.top-=5;
			_this.self.style.top=_this.top+"px";
		if(this.top <= -this.self.offsetHeight){
			this.destroy();
		}
		if(Engine.isOver) return;
		for(var i in Engine.enemy){
			if( Engine.isCompact( this.self,Engine.enemy[i].self) ){
				this.destroy();
				Engine.enemy[i].blood--;
				if(Engine.enemy[i].blood <= 0){
					Engine.updateScore(Engine.enemy[i].score);
					Engine.enemy[i].destroy();
				}
			}
		}
	},
	destroy: function(){
		this.self.remove();
		delete Engine.bullet[this.id];
	}
	
}
