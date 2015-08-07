/**
 * Created by junsik on 7/6/15.
 */

function Lupa(game, lane) {
	Character.call(this, game, "Lupa", lane);

	this.baseSpeed = 1.0;
	this.speed = this.baseSpeed;
	this.skill = new BurningSpear(this);
	this.skillRatio = 0;

	var sprite = this.sprite;

	sprite.animations.add("ready", ["lupa_f01.png"], 1, true);
	sprite.animations.add("run", [
		"lupa_f01.png",
		"lupa_f02.png",
		"lupa_f03.png",
		"lupa_f04.png",
		"lupa_f05.png",
		"lupa_f06.png"
	], 16, true);

	sprite.animations.add("angry", [
		"lupa_anger_f01.png",
		"lupa_anger_f02.png",
		"lupa_anger_f03.png",
		"lupa_anger_f04.png",
		"lupa_anger_f05.png",
		"lupa_anger_f06.png"
	], 16, true);

	sprite.animations.play("ready");
}

Lupa.prototype = Object.create(Character.prototype);

Lupa.prototype.cancelSkillInEffect = function() {
	Character.prototype.cancelSkillInEffect.call(this);

	this.sprite.animations.play("run");
};

Lupa.prototype.effectSkill = function(skill) {
	this.cancelSkillInEffect();

	if (skill !== this.skill) {
		skill = this.skill;

		skill.doEffect(this);

		this.skillInEffect = skill;
		this.skillTimer = this.game.time.events.add(skill.duration * 1000, this.cancelSkillInEffect, this);

		this.effectBG.visible = true;
		this.effectOwner = this.game.add.sprite(this.x - 120, 0, skill.owner.name);
		this.effectOwner.scale.setTo(0.6, 0.6);
		this.sprite.addChild(this.effectOwner);
	}
};

Lupa.prototype.playAngryAnimation = function() {
	this.sprite.animations.play("angry");
};