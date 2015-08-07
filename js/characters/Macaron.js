/**
 * Created by junsik on 7/6/15.
 */

function Macaron(game, lane) {
	Character.call(this, game, "Macaron", lane);

	this.baseSpeed = 1.4;
	this.speed = this.baseSpeed;
	this.skill = new SugarAttack(this);
	this.skillRatio = 0.2;

	var sprite = this.sprite;

	sprite.animations.add("ready", ["macaron_f01_1.png"], 1, true);
	sprite.animations.add("run", [
		"macaron_f01_1.png",
		"macaron_f02_1.png",
		"macaron_f03_1.png",
		"macaron_f04_1.png",
		"macaron_f05_1.png",
		"macaron_f06_1.png",
		"macaron_f07_1.png",
		"macaron_f08_1.png"
	], 16, true);

	sprite.animations.play("ready");
}

Macaron.prototype = Object.create(Character.prototype);
