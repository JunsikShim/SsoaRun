/**
 * Created by junsik on 7/16/15.
 */
function Equality(owner) {
	Skill.call(this, "Equality", owner);

	this.duration = 2;
	this.leader = null;
	this.leaderSpeed = -0.2;
	this.last = null;
	this.lastSpeed = 1.7;
}

Equality.prototype = Object.create(Skill.prototype);

Equality.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);

	var i, p;
	var leader = null;
	var leaderX = -1;

	for (i = 0; i < Context.totalPlayers; i++) {
		p = Context.players[i];

		if (p.state !== p.Finished && p.getX() > leaderX) {
			leader = p;
			leaderX = p.getX();
		}
	}

	if (leader) {
		this.leader = leader;
		leader.effectSkill(this);
	}

	var last = null;
	var lastX = 999999;

	for (i = 0; i < Context.totalPlayers; i++) {
		p = Context.players[i];

		if (p.state !== p.Finished && p.getX() < lastX) {
			last = p;
			lastX = p.getX();
		}
	}

	if (last) {
		this.last = last;
		last.effectSkill(this);
	}
};

Equality.prototype.doEffect = function(character) {
	if (character === this.leader)
		character.speed = this.leaderSpeed;
	else if (character === this.last)
		character.speed = this.lastSpeed;
};
