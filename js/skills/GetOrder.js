/**
 * Created by junsik on 7/16/15.
 */
function GetOrder(owner) {
	Skill.call(this, "GetOrder", owner);

	this.duration = 1;
	this.speed = 2.5;
}

GetOrder.prototype = Object.create(Skill.prototype);

GetOrder.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);
	this.owner.effectSkill(this);
};

GetOrder.prototype.doEffect = function(character) {
	character.speed = this.speed;
};
