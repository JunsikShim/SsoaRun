/**
 * Created by junsik on 7/6/15.
 */

function Vika(game, lane) {
	Character.call(this, game, "Vika", lane);

	this.baseSpeed = 1.5;
	this.speed = this.baseSpeed;
	this.skill = new SwordAttack(this);
	this.skillRatio = 0.2;

	var sprite = this.sprite;

	sprite.animations.add("ready", ["vika_f01.png"], 1, true);
	sprite.animations.add("run", [
		"vika_f01.png",
		"vika_f02.png",
		"vika_f03.png",
		"vika_f04.png",
		"vika_f05.png",
		"vika_f06.png",
		"vika_f07.png",
		"vika_f08.png",
		"vika_f09.png",
		"vika_f10.png"
	], 16, true);

	sprite.animations.play("ready");
}

Vika.prototype = Object.create(Character.prototype);
