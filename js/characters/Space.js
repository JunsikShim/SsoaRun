/**
 * Created by junsik on 7/6/15.
 */

function Space(game, lane) {
	Character.call(this, game, "Space", lane);

	this.baseSpeed = 1.3;
	this.speed = this.baseSpeed;
	this.skill = new SpaceGun(this);
	this.skillRatio = 0.15;

	var sprite = this.sprite;

	sprite.animations.add("ready", ["space_f01.png"], 1, true);
	sprite.animations.add("run", [
		"space_f01.png",
		"space_f02.png",
		"space_f03.png",
		"space_f04.png",
		"space_f05.png",
		"space_f06.png",
		"space_f07.png",
		"space_f08.png",
		"space_f09.png",
		"space_f10.png",
		"space_f11.png",
		"space_f12.png"
	], 16, true);

	sprite.animations.play("ready");
}

Space.prototype = Object.create(Character.prototype);
