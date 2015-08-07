/**
 * Created by junsik on 7/16/15.
 */
function SwordAttack(owner) {
	Skill.call(this, "SwordAttack", owner);

	this.duration = 1;
	this.speed = 0;
}

SwordAttack.prototype = Object.create(Skill.prototype);

SwordAttack.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);

	var closest = null;
	var closestX = 9999;

	for (var i = 0; i < Context.totalPlayers; i++) {
		var p = Context.players[i];

		if (p !== this.owner && p.state !== p.Finished && p.getX() >= this.owner.getX() && p.getX() < closestX) {
			closest = p;
			closestX = p.getX();
		}
	}

	if (closest)
		closest.effectSkill(this);
};

SwordAttack.prototype.doEffect = function(character) {
	character.speed = this.speed;
};
