/**
 * Created by junsik on 7/6/15.
 */

function Master(game, lane) {
	Character.call(this, game, "Master", lane);

	this.baseSpeed = 1.4;
	this.speed = this.baseSpeed;
	this.skill = new Hentai(this);
	this.skillRatio = 0.2;

	var sprite = this.sprite;

	sprite.animations.add("ready", ["master_f01.png"], 1, true);
	sprite.animations.add("run", [
		"master_f01.png",
		"master_f02.png",
		"master_f03.png",
		"master_f04.png",
		"master_f05.png",
		"master_f06.png",
		"master_f07.png",
		"master_f08.png",
		"master_f09.png",
		"master_f10.png"
	], 16, true);

	sprite.animations.play("ready");
}

Master.prototype = Object.create(Character.prototype);
