/**
 * Created by junsik on 7/16/15.
 */
function SpaceGun(owner) {
	Skill.call(this, "SpaceGun", owner);

	this.duration = 1;
	this.speed = -0.5;
}

SpaceGun.prototype = Object.create(Skill.prototype);

SpaceGun.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);

	for (var i = 0; i < Context.totalPlayers; i++) {
		var p = Context.players[i];
		p.effectSkill(this);
	}
};

SpaceGun.prototype.doEffect = function(character) {
	if (character !== this.owner)
		character.speed = this.speed;
	else
		character.speed = this.owner.baseSpeed;
};
