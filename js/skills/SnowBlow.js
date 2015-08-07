/**
 * Created by junsik on 7/16/15.
 */
function SnowBlow(owner) {
	Skill.call(this, "SnowBlow", owner);

	this.duration = 1.7;
	this.speed = 0;
}

SnowBlow.prototype = Object.create(Skill.prototype);

SnowBlow.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);

	for (var i = 0; i < Context.totalPlayers; i++) {
		var p = Context.players[i];
		p.effectSkill(this);
	}
};

SnowBlow.prototype.doEffect = function(character) {
	if (character === this.owner)
		character.speed = character.baseSpeed;
	else
		character.speed = this.speed;
};
