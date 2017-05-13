function SmallEnemy(){
	var s=parseInt(Math.random()*3+3);
	Enemy.call(this,s,1,["img/enemy1.png","img/enemy1-bang.gif"],10);
}
SmallEnemy.prototype.__proto__=Enemy.prototype;
function MiddleEnemy(){
	var s=parseInt(Math.random()*3+2);
	Enemy.call(this,s,4,["img/enemy2.png","img/enemy2-bang.gif"],50);
}
MiddleEnemy.prototype.__proto__=Enemy.prototype;
function LargeEnemy(){
	var s=parseInt(Math.random()*1+2);
	Enemy.call(this,s,10,["img/enemy1.png","img/enemy1-bang.gif"],100);
}
LargeEnemy.prototype.__proto__=Enemy.prototype;
