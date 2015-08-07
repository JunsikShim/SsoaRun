/**
 * Created by junsik on 7/6/15.
 */

function CoffeeBoy(game, lane) {
	Character.call(this, game, "CoffeeBoy", lane);

	this.baseSpeed = 1.2;
	this.speed = this.baseSpeed;
	this.skill = new GetOrder(this);
	this.skillRatio = 0.25;

	var sprite = this.sprite;

	sprite.animations.add("ready", ["coffeeboy_f01.png"], 1, true);
	sprite.animations.add("run", [
		"coffeeboy_f01.png",
		"coffeeboy_f02.png",
		"coffeeboy_f03.png",
		"coffeeboy_f04.png",
		"coffeeboy_f05.png",
		"coffeeboy_f06.png",
		"coffeeboy_f07.png",
		"coffeeboy_f08.png"
	], 16, true);

	sprite.animations.play("ready");
}

CoffeeBoy.prototype = Object.create(Character.prototype);

