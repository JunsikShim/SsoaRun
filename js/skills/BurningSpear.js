/**
 * Created by junsik on 7/16/15.
 */
function BurningSpear(owner) {
	Skill.call(this, "BurningSpear", owner);

	this.duration = 1;
	this.speed = 2.3;
}

BurningSpear.prototype = Object.create(Skill.prototype);

BurningSpear.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);
	this.owner.effectSkill(this);
};

BurningSpear.prototype.doEffect = function(character) {
	character.speed = this.speed;
	character.playAngryAnimation();
};
