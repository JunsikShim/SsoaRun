/**
 * Created by junsik on 7/6/15.
 */

function Happy(game, lane) {
	Character.call(this, game, "Happy", lane);

	this.baseSpeed = 1.3;
	this.speed = this.baseSpeed;
	this.skill = new Equality(this);
	this.skillRatio = 0.2;

	var sprite = this.sprite;

	sprite.animations.add("ready", ["happy_f01.png"], 1, true);
	sprite.animations.add("run", [
		"happy_f01.png",
		"happy_f02.png",
		"happy_f03.png",
		"happy_f04.png",
		"happy_f05.png",
		"happy_f06.png",
		"happy_f07.png"
	], 16, true);

	sprite.animations.play("ready");
}

Happy.prototype = Object.create(Character.prototype);
