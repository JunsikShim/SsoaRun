/**
 * Created by junsik on 7/6/15.
 */

function Heyboo(game, lane) {
	Character.call(this, game, "Heyboo", lane);

	this.baseSpeed = 1.5;
	this.speed = this.baseSpeed;
	this.skill = new Change(this);
	this.skillRatio = 0.2;

	var sprite = this.sprite;

	sprite.animations.add("ready", ["heyboo_f01.png"], 1, true);
	sprite.animations.add("run", [
		"heyboo_f01.png",
		"heyboo_f02.png",
		"heyboo_f03.png",
		"heyboo_f04.png",
		"heyboo_f05.png",
		"heyboo_f06.png",
		"heyboo_f07.png",
		"heyboo_f08.png",
		"heyboo_f09.png",
		"heyboo_f10.png"
	], 16, true);

	sprite.animations.play("ready");
}

Heyboo.prototype = Object.create(Character.prototype);
