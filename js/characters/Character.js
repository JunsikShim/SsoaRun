/**
 * Created by junsik on 7/3/15.
 */

function Character(game, name, lane) {
	this.game = game;
	this.lane = lane;
	this.name = name;
	this.state = this.Ready;
	this.baseSpeed = 1;
	this.speed = this.baseSpeed;
	this.x = 30;
	this.skillInEffect = null;
	this.skillRatio = -1;
	this.skill = null;
	this.skillTimer = null;

	var sprite = this.sprite = game.add.sprite(this.x, 0, name, 0, lane);
	//sprite.position.y = 64 - sprite.height - 10;
	sprite.anchor.x = 0.5;
	//sprite.anchor.y = 1;

	var effectBG = this.effectBG = game.add.sprite(this.x - 60, 0, "effect-bg");
	effectBG.anchor.x = 1;
	effectBG.scale.setTo(0.08, 0.08);
	effectBG.visible = false;

	sprite.addChild(effectBG);
}

Character.prototype = {

	Ready: 1,
	Running: 3,
	Finished: 4,

	activateSkill: function() {},

	getX: function() {
		return this.sprite.x;
	},

	setX: function(x) {
		if (x > 1000)
			x = 1000;
		
		this.sprite.x = x;
	},

	getY: function() {
		return this.sprite.y;
	},

	setY: function(y) {
		this.sprite.y = y;
	},

	start: function() {
		if (this.state === this.Ready) {
			this.state = this.Running;
			this.playRunAnimation();
		}
	},

	stop: function() {
		this.state = this.Finished;
		this.sprite.animations.stop();
	},

	cancelSkillInEffect: function() {
		if (this.skillInEffect) {
			if (this.skillTimer)
				this.game.time.events.remove(this.skillTimer);

			this.skillInEffect = null;
			this.speed = this.baseSpeed;
		}

		this.effectBG.visible = false;

		if (this.effectOwner)
			this.effectOwner.destroy();
	},

	effectSkill: function(skill) {
		this.cancelSkillInEffect();

		if (!skill.isInstant) {
			this.skillInEffect = skill;
			this.skillTimer = this.game.time.events.add(skill.duration * 1000, this.cancelSkillInEffect, this);

		} else {
			this.skillInEffect = skill;
			this.skillTimer = this.game.time.events.add(800, this.cancelSkillInEffect, this);
		}

		skill.doEffect(this);

		this.effectBG.visible = true;
		this.effectOwner = this.game.add.sprite(this.x - 120, 0, skill.owner.name);
		this.effectOwner.scale.setTo(0.6, 0.6);
		this.sprite.addChild(this.effectOwner);
	},

	playRunAnimation: function() {
		this.sprite.animations.play("run");
	},

	update: function(count) {
		if (count % 60 === 0) {
			var r = this.game.rnd.frac();

			if (r < this.skillRatio && this.skill) {
				this.skill.activate();
			}
		}

		this.sprite.x += this.speed;
	},

	pause: function() {
		this.sprite.animations.paused = true;

		if (this.skillTimer)
			this.game.time.events.pause(this.skillTimer);
	},

	resume: function() {
		this.sprite.animations.paused = false;

		if (this.skillTimer)
			this.game.time.events.resume(this.skillTimer);
	}
};