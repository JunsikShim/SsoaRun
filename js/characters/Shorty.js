/**
 * Created by junsik on 7/6/15.
 */

function Shorty(game, lane) {
	Character.call(this, game, "Shorty", lane);

	this.baseSpeed = 1.3;
	this.speed = this.baseSpeed;
	this.skill = new SuperJump(this);
	this.skillRatio = 0.25;

	var sprite = this.sprite;

	this.readyAnim = sprite.animations.add("ready", ["shorty_f01.png"], 1, true);
	
	this.runAnim = sprite.animations.add("run", [
		"shorty_f01.png",
		"shorty_f02.png",
		"shorty_f03.png",
		"shorty_f04.png",
		"shorty_f05.png",
		"shorty_f06.png",
		"shorty_f07.png",
		"shorty_f08.png"
	], 16, true);

	sprite.animations.play("ready");
}

Shorty.prototype = Object.create(Character.prototype);
