var game = new Phaser.Game(800, 600, Phaser.WEBGL, 'phaser-example', { preload: preload, create: create, update: update, render: render });

var ufo;
var leftBtn;
var rightBtn;
var speed = 4;

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

    // Check key states every frame.
    // Move ONLY one of the left and right key is hold.

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        ufo.x -= speed;
        ufo.angle = -15;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        ufo.x += speed;
        ufo.angle = 15;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        ufo.y -= speed;
        ufo.angle = -15;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        ufo.y += speed;
        ufo.angle = 15;
    }
    else
    {
        ufo.rotation = 0;
    }

}

function render() {

    game.debug.text('Hold left/right to move the ufo.');

}

