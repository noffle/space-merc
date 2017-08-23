var game = new Phaser.Game(800, 600, Phaser.WEBGL, 'phaser-example', { preload: preload, create: create, update: update, render: render });

var ufo;
var leftBtn;
var rightBtn;

function preload() {
  game.load.spritesheet('mensch', 'assets/graphics/_mensch_handgun.png', 64, 64, 4)
}

function create() {
    // Create a ufo sprite as player.
    ufo = game.add.sprite(320, 240, 'mensch');
    ufo.anchor.setTo(0.5, 0.5);

    // Make the default camera follow the ufo.
    game.camera.follow(ufo);
}

function update() {
  var speed = 4

  if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
    ufo.x -= speed
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
    ufo.x += speed
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
    ufo.y -= speed
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
    ufo.y += speed
  }

  var mx = game.input.mousePointer.x - game.camera.x
  var my = game.input.mousePointer.y - game.camera.y
  var rot = Math.atan2(my - ufo.y, mx - ufo.x)
  ufo.rotation = rot
}

function render() {

    game.debug.text('Hold left/right to move the ufo.');

}

