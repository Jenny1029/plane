function Enemy(speed, blood, imgs, score) {
	this.self = null;
	this.left = 0;
	this.top = 0;
	this.speed = speed;
	this.blood = blood;
	this.imgs = imgs;
	this.score = score;
	this.id = 0;
}
Enemy.prototype = {
	constructor: Enemy,
	init: function() {
		var _this = this;
		var img = document.createElement("img");
		img.src = this.imgs[0];
		Engine.bg.appendChild(img);
		this.self = img;
		console.log(this.self);
		img.onload = function() {
			var l = Math.random() * (Engine.bg.offsetWidth - _this.self.offsetWidth);
			var t = -_this.self.offsetHeight;
			_this.self.style.left = l + "px";
			_this.self.style.top = t + "px";
			_this.left = l;
			_this.top = t;
		}

		this.id = Math.random();
		Engine.enemy[this.id] = this;
	},
	move: function() {
		var _this = this;
		_this.top += _this.speed;
		_this.self.style.top = _this.top + "px";
		console.log(_this.self);
		if(_this.top > Engine.bg.offsetHeight + _this.self.offsetWidth);
		_this.destory();
		if(Engine.isCompact(this.self, Hero.self)) {
			_this.destroy();
			Hero.die();
		}
	},
	destory: function() {
		this.self.remove();
		delete Engine.enemy[this.id];
	},
	bang: function() {
		var img = document.createElement('img');
		img.src = this.imgs[1];
		img.style.left = this.left + 'px';
		img.style.top = this.top + 'px';
		Engine.game.appendChild(img);
		setTimeout(function() {
			img.remove();
		}, 500);
	}
}