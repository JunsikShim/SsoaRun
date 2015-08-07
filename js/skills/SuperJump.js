/**
 * Created by junsik on 7/16/15.
 */
function SuperJump(owner) {
	Skill.call(this, "SuperJump", owner);

	this.duration = 0;
	this.speed = 0;
}

SuperJump.prototype = Object.create(Skill.prototype);

SuperJump.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);

	var owner = this.owner;

	owner.setX(owner.getX() + 80);
	owner.effectSkill(this);
};

SuperJump.prototype.doEffect = function(character) {
	character.speed = this.speed;
};
