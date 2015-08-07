/**
 * Created by junsik on 7/16/15.
 */
function GetHit(owner) {
	Skill.call(this, "GetHit", owner);

	this.duration = 1;
	this.speed = 0;
}

GetHit.prototype = Object.create(Skill.prototype);

GetHit.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);
	this.owner.effectSkill(this);
};

GetHit.prototype.doEffect = function(character) {
	character.speed = this.speed;
};
