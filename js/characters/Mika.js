/**
 * Created by junsik on 7/6/15.
 */

function Mika(game, lane) {
	Character.call(this, game, "Mika", lane);

	this.baseSpeed = 1.3;
	this.speed = this.baseSpeed;
	this.skill = new SnowBlow(this);
	this.skillRatio = 0.2;

	var sprite = this.sprite;

	sprite.animations.add("ready", ["mika_f01.png"], 1, true);
	sprite.animations.add("run", [
		"mika_f01.png",
		"mika_f02.png",
		"mika_f03.png",
		"mika_f04.png",
		"mika_f05.png",
		"mika_f06.png",
		"mika_f07.png",
		"mika_f08.png",
		"mika_f09.png",
		"mika_f10.png"
	], 16, true);

	sprite.animations.play("ready");
}

Mika.prototype = Object.create(Character.prototype);
