var Hero={
	self:null,
	left:0,
	top:0,
	life:3,
	shootTimer:null,
	allHeart: document.querySelectorAll('.life img'),
	imgs: ['img/hero.gif','img/hero-bang.gif'],
	init:function(){
		var _this=this;
		var img=document.createElement("img");
		img.src=this.imgs[0];
		Engine.bg.appendChild(img);
		this.self=img;
		img.onload=function(){
			//console.log(el,et);
			_this.width=img.offsetWidth;
			_this.height=img.offsetHeight;
			var l=(Engine.bg.offsetWidth-_this.width)/2;
			var t=(Engine.bg.offsetHeight-_this.height);
			console.log(l,t);
			img.style.left=l+"px";
			img.style.top=t+"px";
			_this.left=l;
			_this.top=t;
			_this.move();
			_this.shoot();
		}
	},
	move:function(){
		var _this=this;
		Engine.bg.onmousemove=function(e){
			var l=e.offsetX-_this.width;
			var t=e.offsetY-_this.height;
			l=l<0?0:(l>Engine.bg.offsetWidth-_this.width?Engine.bg.offsetWidth-_this.width:l);
			t=t<0?0:(t>Engine.bg.offsetHeight-_this.height?Engine.bg.offsetHeight-_this.height:t);
			_this.self.style.left=l+"px";
			_this.self.style.top=t+"px";
			_this.left=l;
			_this.top=t;
		}
	},
	shoot:function(){
		var _this = this;
		this.shootTimer = setInterval(function(){
			var l = _this.left + _this.self.offsetWidth/2;
			new Bullet(l,_this.top).init();
		},350);
	},
	bang: function(){
		var img  = document.createElement('img');
		img.src = this.imgs[1];
		img.style.left = this.left + 'px';
		img.style.top = this.top  + 'px';
		Engine.game.appendChild(img);
		setTimeout(function(){
			img.remove();
		},500);
	},
	die: function(){
		this.life--;
		this.allHeart[0].remove();
		this.allHeart = document.querySelectorAll('.life img');
		if(this.life <= 0){
			this.destroy();
		}
	},
	destroy: function(){
		this.self.remove();
		this.bang();
		clearInterval(this.shootTimer);
		Engine.gameOver();
	}
}
