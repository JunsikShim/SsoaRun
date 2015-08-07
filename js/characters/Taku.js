/**
 * Created by junsik on 7/6/15.
 */

function Taku(game, lane) {
	Character.call(this, game, "Taku", lane);

	this.baseSpeed = 1.4;
	this.speed = this.baseSpeed;
	this.skill = new LoveBeam(this);
	this.skillRatio = 0.15;

	var sprite = this.sprite;

	sprite.animations.add("ready", ["taku_f01.png"], 1, true);
	sprite.animations.add("run", [
		"taku_f01.png",
		"taku_f02.png",
		"taku_f03.png",
		"taku_f04.png",
		"taku_f05.png",
		"taku_f06.png",
		"taku_f07.png",
		"taku_f08.png"
	], 16, true);

	sprite.animations.play("ready");
}

Taku.prototype = Object.create(Character.prototype);
