/**
 * Created by junsik on 7/16/15.
 */
function Transform(owner) {
	Skill.call(this, "Transform", owner);

	this.duration = 0;
	this.speed = 0;
	this.isInstant = true;
}

Transform.prototype = Object.create(Skill.prototype);

Transform.prototype.activate = function() {
	Skill.prototype.activate.call(this);
	console.log(this.name + " activated - owner: " + this.owner.name);

	var list = Context.players.slice();
	var index = list.indexOf(this.owner);
	list.splice(index, 1);

	var p = list[parseInt(Math.random() * list.length)];
	var x = this.owner.getX();
	this.owner.setX(p.getX());
	p.setX(x);

	this.owner.effectSkill(this);
	p.effectSkill(this);
};

Transform.prototype.doEffect = function(character) {
	character.speed = character.baseSpeed;
};
