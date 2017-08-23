var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.WEBGL, 'phaser-example', { preload: preload, create: create, update: update, render: render });

var ufo;
var leftBtn;
var rightBtn;

function preload() {
  game.load.spritesheet('mensch', 'assets/graphics/_mensch_handgun.png', 64, 64, 4)

  game.load.tilemap('map', 'assets/maps/station1.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('tiles', 'assets/graphics/_tileset.png');

}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)

  var map = game.add.tilemap('map', 32, 32);
  map.addTilesetImage('tiles');
  layer = map.createLayer(0);
  layer = map.createLayer(1);
  layer.resizeWorld();

  ufo = game.add.sprite(320, 240, 'mensch');
  ufo.anchor.setTo(0.5, 0.5);
  game.physics.enable(ufo, Phaser.Physics.ARCADE)

  game.camera.follow(ufo);
}

function update() {
  var speed = 8

  if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
    ufo.body.velocity.x -= speed
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
    ufo.body.velocity.x += speed
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
    ufo.body.velocity.y -= speed
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
    ufo.body.velocity.y += speed
  }

  ufo.body.velocity.x *= 0.94
  ufo.body.velocity.y *= 0.94

  var mx = game.input.mousePointer.x - game.camera.x
  var my = game.input.mousePointer.y - game.camera.y
  var rot = Math.atan2(my - ufo.y, mx - ufo.x)
  ufo.rotation = rot
}

function render() {

    game.debug.text('Hold left/right to move the ufo.');

}

