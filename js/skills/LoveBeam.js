/**
 * Created by junsik on 7/16/15.
 */
function LoveBeam(owner) {
	Skill.call(this, "LoveBeam", owner);

	this.duration = 2;
	this.speed = 0;
}

LoveBeam.prototype = Object.create(Skill.prototype);

LoveBeam.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);

	for (var i = 0; i < Context.totalPlayers; i++) {
		var p = Context.players[i];
		p.effectSkill(this);
	}
};

LoveBeam.prototype.doEffect = function(character) {
	if (character === this.owner)
		character.speed = character.baseSpeed;
	else
		character.speed = this.speed;
};
