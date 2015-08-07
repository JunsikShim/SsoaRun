/**
 * Created by junsik on 7/6/15.
 */

function Sera(game, lane) {
	Character.call(this, game, "Sera", lane);

	this.baseSpeed = 2;
	this.speed = this.baseSpeed;
	this.skill = new Transform(this);
	this.skillRatio = 0.2;

	var sprite = this.sprite;

	this.readyAnim = sprite.animations.add("ready", ["Sera_f01.png"], 1, true);

	this.runAnim = sprite.animations.add("run", [
		"sera_f01.png",
		"sera_f02.png",
		"sera_f03.png",
		"sera_f04.png",
		"sera_f05.png",
		"sera_f06.png",
		"sera_f07.png",
		"sera_f08.png"
	], 16, true);

	sprite.animations.play("ready");
}

Sera.prototype = Object.create(Character.prototype);
