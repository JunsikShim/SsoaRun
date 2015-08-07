/**
 * Created by junsik on 7/16/15.
 */
function Skill(name, owner) {
	this.name = name;
	this.owner = owner;
	this.isInstant = false;
}

Skill.prototype = {
	activate: function() {
		$.gevent.publish("skill.activated", [this]);
	},

	deactivate: function() {
		$.gevent.publish("skill.deactivated", [this]);
	}
};