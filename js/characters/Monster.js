/**
 * Created by junsik on 7/6/15.
 */

function Monster(game, lane) {
	Character.call(this, game, "Monster", lane);

	this.baseSpeed = 1.5;
	this.speed = this.baseSpeed;
	this.skill = new EyeBeam(this);
	this.skillRatio = 0.2;

	var sprite = this.sprite;
	sprite.scale.setTo(0.5, 0.5);

	sprite.animations.add("ready", [0], 1, true);
	sprite.animations.add("run", [0, 1, 2, 3, 4, 5, 6], 8, true);

	sprite.animations.play("ready");
}

Monster.prototype = Object.create(Character.prototype);
