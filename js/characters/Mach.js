/**
 * Created by junsik on 7/6/15.
 */

function Mach(game, lane) {
	Character.call(this, game, "Mach", lane);

	this.baseSpeed = 2;
	this.speed = this.baseSpeed;
	this.skill = new GetHit(this);
	this.skillRatio = 0.2;

	var sprite = this.sprite;

	this.readyAnim = sprite.animations.add("ready", ["mach_f01.png"], 1, true);

	this.accelAnim = sprite.animations.add("accel", [
		"mach_f01.png",
		"mach_f02.png",
		"mach_f03.png",
		"mach_f04.png",
		"mach_f05.png",
		"mach_f06.png"
	], 16, false);

	this.runAnim = sprite.animations.add("run", [
		"mach_missile_f01.png",
		"mach_missile_f02.png",
		"mach_missile_f03.png",
		"mach_missile_f04.png",
		"mach_missile_f05.png",
		"mach_missile_f06.png",
		"mach_missile_f07.png",
		"mach_missile_f08.png",
		"mach_missile_f09.png",
		"mach_missile_f10.png",
		"mach_missile_f11.png",
		"mach_missile_f12.png"
	], 16, true);

	sprite.animations.play("ready");
}

Mach.prototype = Object.create(Character.prototype);

Mach.prototype.playRunAnimation = function() {
	var sprite = this.sprite;

	var accelAnim = sprite.animations.play("accel");
	accelAnim.enableUpdate = true;

	accelAnim.onUpdate.add(function() {
		if (!this.skillInEffect)
			this.baseSpeed = accelAnim.frame / accelAnim.frameTotal * 2;
	}, this);

	accelAnim.onComplete.add(function() {
		this.baseSpeed = 2;
	}, this);
};

Mach.prototype.cancelSkillInEffect = function() {
	Character.prototype.cancelSkillInEffect.call(this);
	this.playRunAnimation();
};

Mach.prototype.update = function(count) {
	Character.prototype.update.call(this, count);

	if (this.speed < 2 && !this.accelAnim.isPlaying)
		this.playRunAnimation();
	else if (this.speed >= 2 && !this.runAnim.isPlaying)
		this.runAnim.play();
};
