sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.vx = sprite.x - otherSprite.x
    sprite.vy = sprite.y - otherSprite.y
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(4)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
})
let magV = 0
let magVsq = 0
let speed = 20
let player2 = sprites.create(sprites.food.smallPizza, SpriteKind.Player)
// let enemy = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Enemy)
controller.moveSprite(player2, 100, 100)
let enemies = sprites.allOfKind(SpriteKind.Enemy)
let numEnemies = 4
// let mysprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Enemy)
for (let index = 0; index <= numEnemies - 1; index++) {
    // initialize
    // initialize
    // initialize
    // initialize
    // initialize
    // initialize
    // initialize
    // initialize
    enemies[index] = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Enemy)
    enemies[index].x = randint(10, screen.width - 10)
    enemies[index].y = randint(10, screen.height - 10)
}
class Orc // the spicy one
{
    name: string
    spice: number
    orken: Sprite
    constructor(nameOrc:string, spiceOrc:number) 
    {
        this.name = nameOrc;
        this.spice = spiceOrc;
        this.orken = sprites.create(sprites.castle.shrub, SpriteKind.Food)
        this.orken.setPosition(randint(10, screen.width - 10),randint(10, screen.height - 10))
        this.orken.setFlag(SpriteFlag.StayInScreen, true)
    }
}
let bob = new Orc("Bob",4)
let scrMidX = scene.screenWidth() / 2
let scrMidY = scene.screenHeight() / 2
// more = more ADHD
let spiceFactor = 1000000
// more = more focus
let velFactor = 0.5
game.onUpdate(function () {
    if (info.score() > 1024) {
        game.over(true, effects.smiles)
    }
})
// more = more focus
game.onUpdateInterval(100, function () {
    bob.spice += 1
bob.orken.say("" + bob.name + " " + Math.trunc(bob.spice))
    bob.orken.ax = ( randint(0,bob.spice) - randint(0,bob.spice) ) * spiceFactor
bob.orken.ay = ( randint(0,bob.spice) - randint(0,bob.spice) ) * spiceFactor
if (bob.orken.x != player2.x) {
        bob.orken.vx = ( player2.x - bob.orken.x ) * velFactor
    }
    if (bob.orken.y != player2.y) {
        bob.orken.vy = ( player2.y - bob.orken.y ) * velFactor
    }
})
game.onUpdateInterval(200, function () {
    for (let m = 0; m <= enemies.length - 1; m++) {
        if (enemies[m].x != player2.x) {
            enemies[m].vx = player2.x - enemies[m].x
        }
        if (enemies[m].y != player2.y) {
            enemies[m].vy = player2.y - enemies[m].y
        }
        // this c**2 = a**2 + b**2
        magVsq = enemies[m].vx * enemies[m].vx + enemies[m].vy * enemies[m].vy
        // this is the speed
        magV = Math.sqrt(magVsq)
        enemies[m].vx = speed * enemies[m].vx / magV
        enemies[m].vy = speed * enemies[m].vy / magV
    }
})
