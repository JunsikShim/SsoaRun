/**
 * Created by junsik on 7/16/15.
 */
function SugarAttack(owner) {
	Skill.call(this, "SugarAttack", owner);

	this.duration = 1.5;
	this.speed = 0.5;
}

SugarAttack.prototype = Object.create(Skill.prototype);

SugarAttack.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);

	for (var i = 0; i < Context.totalPlayers; i++) {
		var p = Context.players[i];
		p.effectSkill(this);
	}
};

SugarAttack.prototype.doEffect = function(character) {
	if (character === this.owner)
		character.speed = character.baseSpeed;
	else
		character.speed = this.speed;
};
