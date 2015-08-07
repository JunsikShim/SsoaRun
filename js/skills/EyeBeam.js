/**
 * Created by junsik on 7/16/15.
 */
function EyeBeam(owner) {
	Skill.call(this, "EyeBeam", owner);

	this.duration = 1;
	this.speed = -0.5;
}

EyeBeam.prototype = Object.create(Skill.prototype);

EyeBeam.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);

	var leader = null;
	var leaderX = -1;

	for (var i = 0; i < Context.totalPlayers; i++) {
		var p = Context.players[i];

		if (p !== this.owner && p.state !== p.Finished && p.getX() > leaderX) {
			leader = p;
			leaderX = p.getX();
		}
	}

	if (leader)
		leader.effectSkill(this);
};

EyeBeam.prototype.doEffect = function(character) {
	character.speed = this.speed;
};
