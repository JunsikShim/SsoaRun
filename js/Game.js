Context.Game = function (game) {
	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

	this.game = game;		//	a reference to the currently running game
	this.add;		//	used to add sprites, text, groups, etc
	this.camera;	//	a reference to the game camera
	this.cache;		//	the game cache
	this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
	this.load;		//	for preloading assets
	this.math;		//	lots of useful common math operations
	this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
	this.stage;		//	the game stage
	this.time;		//	the clock
	this.tweens;	//	the tween manager
	this.world;		//	the game world
	this.particles;	//	the particle manager
	this.physics;	//	the physics manager
	this.rnd;		//	the repeatable random number generator

	//	You can use any of these from any function within this State.
	//	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

	this.eventObj = $("<div>");

	this.isPaused = false;
};

Context.Game.prototype = {

	create: function () {
		var game = this.game;

		Context.game = game;
		Context.players.length = 0;

		game.stage.backgroundColor = "#fff";

		var bmd = game.add.bitmapData(1024, 160);
		bmd.addToWorld();

		bmd.rect(0, 0, 1024, 160, "lightblue");

		var btnMinus = game.add.sprite(400, 10, "btn-minus");
		btnMinus.inputEnabled = true;

		btnMinus.events.onInputDown.add(function() {
			if (this.isStarted)
				return;

			if (Context.totalPlayers <= 1)
				return;

			var p = Context.players.pop();
			p.lane.destroy();

			Context.totalPlayers = Context.players.length;
			this.textTotal.setText(Context.totalPlayers);

		}, this);

		this.textTotal = game.add.text(480, 10, Context.totalPlayers, {
			font: "40px Arial",
			fill: "#fff"
		});

		var btnPlus = game.add.sprite(540, 10, "btn-plus");
		btnPlus.inputEnabled = true;

		btnPlus.events.onInputDown.add(function() {
			if (this.isStarted)
				return;

			if (Context.totalPlayers >= Context.playerClasses.length || Context.totalPlayers >= 8)
				return;

			this._addRandomPlayer();

			Context.totalPlayers = Context.players.length;
			this.textTotal.setText(Context.totalPlayers);

		}, this);

		var btnStart = game.add.sprite(750, 10, "btn-start");
		btnStart.inputEnabled = true;

		var btnRestart = game.add.sprite(930, 10, "btn-restart");
		btnRestart.inputEnabled = true;

		btnRestart.events.onInputDown.add(function() {
			this.state.restart("Game", false);
		}, this);

		this._init();

		btnStart.events.onInputDown.add(function() {
			this._startRace();
		}, this);

		this._createSkillEffect();

		this.pause();
		this.resume();
	},

	_init: function() {
		this.isStarted = false;
		this.totalFinished = 0;

		var game = this.game;

		for (var i = 0; i < Context.totalPlayers; i++) {
			this._addRandomPlayer();
		}
	},

	_addRandomPlayer: function() {
		var game = this.game;
		var classes = Context.playerClasses.slice();
		var players = Context.players;

		for (var i = 0; i < players.length; i++) {
			var p = players[i];

			for (var j = 0; j < classes.length; j++) {
				if (p instanceof classes[j]) {
					classes.splice(j, 1);
					break;
				}
			}
		}

		if (classes.length === 0) {
			this._updateTotalPlayers(players.length);
			return;
		}

		var lane = game.add.group();
		lane.x = 0;
		lane.y = 160 + Context.players.length * 64;

		var track = game.add.sprite(0, 0, "track", 0, lane);
		track.width = 1024;
		track.height = 64;

		var pClass = game.rnd.pick(classes);
		var player = new pClass(game, lane);

		Context.players.push(player);
	},

	_updateTotalPlayers: function(total) {
		Context.totalPlayers = total;
		this.textTotal.setText(total);
	},

	_startRace: function() {
		if (!this.isStarted) {
			this.isStarted = true;

			for (var i = 0; i < Context.totalPlayers; i++) {
				var p = Context.players[i];
				p.start();
			}
		}
	},

	_createSkillEffect: function() {
		var self = this;
		var game = this.game;
		//var group = null;
		var bg = null;

		$.gevent.subscribe(self.eventObj, "skill.activated", function(e, skill) {
			$.gevent.publish("skill.deactivated");

			bg = game.add.sprite(0, 180, "skill-bg");
			bg.alpha = 0.7;

			var text = game.add.text(100, 60, skill.owner.name + " - " + skill.name, {
				font: "50px Arial",
				fill: "#fff",
				align: "left"
			});

			bg.addChild(text);

			bg.visible = true;

			self.pause();

			self.pauseTimer = setTimeout(function() {
				$.gevent.publish("skill.deactivated");
			}, 800);
		});

		$.gevent.subscribe(self.eventObj, "skill.deactivated", function(e) {
			if (self.pauseTimer) {
				clearTimeout(self.pauseTimer);

				self.resume();

				if (bg) {
					bg.visible = false;
					bg.destroy();
				}
			}
		});
	},

	update: function() {
		if (this.isPaused)
			return;

		if (this.isStarted) {
			Context.updateCount++;

			for (var i = 0; i < Context.totalPlayers; i++) {
				var p = Context.players[i];

				if (p.state === p.Running) {
					if (p.getX() > Context.worldWidth - 40) {
						p.stop();

						var text = this.game.add.text(p.getX() - 20, p.getY(), ++this.totalFinished, "", p.lane);
						text.anchor.x = 1;
						text.anchor.y = 0;
						text.fontSize = 40;
						text.fill = "#fff";

					} else {
						p.update(Context.updateCount);
					}
				}
			}
		}
	},

	pause: function() {
		this.isPaused = true;

		for (var i = 0; i < Context.totalPlayers; i++) {
			var p = Context.players[i];
			p.pause();
		}
	},

	resume: function() {
		for (var i = 0; i < Context.totalPlayers; i++) {
			var p = Context.players[i];
			p.resume();
		}

		this.isPaused = false;
	},

	quitGame: function(pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		//this.state.start('MainMenu');

	}

};