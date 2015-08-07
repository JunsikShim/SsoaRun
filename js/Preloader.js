/**
 * Created by junsik on 7/6/15.
 */
Context.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;


};

Context.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		//this.background = this.add.sprite(0, 0, 'preloaderBackground');
		//this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		//this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, the lines below won't work as the files themselves will 404, they are just an example of use.
		//this.load.image('titlepage', 'images/title.jpg');
		//this.load.atlas('playButton', 'images/play_button.png', 'images/play_button.json');
		//this.load.audio('titleMusic', ['audio/main_menu.mp3']);
		//this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');
		//	+ lots of other required assets here

		this.load.image("btn-start", "img/btn_start.png");
		this.load.image("btn-plus", "img/btn_plus.png");
		this.load.image("btn-minus", "img/btn_minus.png");
		this.load.image("btn-restart", "img/btn_restart.png");

		this.load.image("track", "img/track.png");
		this.load.image("skill-bg", "img/skill_bg.png");
		this.load.image("effect-bg", "img/balloon.png");

		//this.load.spritesheet("Sonic", "img/sonic.png", 102, 110);
		//this.load.spritesheet("Monster", "img/monster.png", 100, 100);

		this.load.atlasJSONHash("Mach", "img/mach.png", "img/mach.json");
		this.load.atlasJSONHash("CoffeeBoy", "img/coffeeboy.png", "img/coffeeboy.json");
		this.load.atlasJSONHash("Macaron", "img/macaron.png", "img/macaron.json");
		this.load.atlasJSONHash("Space", "img/space.png", "img/space.json");
		this.load.atlasJSONHash("Happy", "img/happy.png", "img/happy.json");
		this.load.atlasJSONHash("Master", "img/master.png", "img/master.json");
		this.load.atlasJSONHash("Vika", "img/vika.png", "img/vika.json");
		this.load.atlasJSONHash("Mika", "img/mika.png", "img/mika.json");
		this.load.atlasJSONHash("Heyboo", "img/heyboo.png", "img/heyboo.json");
		this.load.atlasJSONHash("Shorty", "img/shorty.png", "img/shorty.json");
		this.load.atlasJSONHash("Lupa", "img/lupa.png", "img/lupa.json");
		this.load.atlasJSONHash("Sera", "img/sera.png", "img/sera.json");
		this.load.atlasJSONHash("Taku", "img/taku.png", "img/taku.json");
	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		//this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.

		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.

		//if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		//{
		//	this.ready = true;
		//	this.state.start('MainMenu');
		//}

		this.state.start("Game");
	}

};