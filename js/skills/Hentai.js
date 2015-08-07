/**
 * Created by junsik on 7/16/15.
 */
function Hentai(owner) {
	Skill.call(this, "Hentai", owner);

	this.duration = 1.5;
	this.speed = 0;
}

Hentai.prototype = Object.create(Skill.prototype);

Hentai.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);

	for (var i = 0; i < Context.totalPlayers; i++) {
		var p = Context.players[i];

		if (p.getX() > this.owner.getX())
			p.effectSkill(this);
	}
};

Hentai.prototype.doEffect = function(character) {
	if (character === this.owner)
		character.speed = character.baseSpeed;
	else
		character.speed = this.speed;
};
