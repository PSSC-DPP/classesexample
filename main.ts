let magV = 0
let magVsq = 0
let speed = 20
let player2 = sprites.create(sprites.food.smallPizza, SpriteKind.Player)
// let enemy = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Enemy)
controller.moveSprite(player2, 100, 100)
let enemies = sprites.allOfKind(SpriteKind.Enemy)
let numEnemies = 7
// let mysprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Enemy)
for (let index = 0; index <= numEnemies - 1; index++) {
    // initialize
    // initialize
    enemies[index] = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Enemy)
    enemies[index].x = randint(10, screen.width - 10)
    enemies[index].y = randint(10, screen.height - 10)
}
class Orc 
{
    name: string
    age: number
    orken: Sprite
    constructor(nameOrc:string, ageOrc:number) 
    {
        this.name = nameOrc;
        this.age = ageOrc;
        this.orken = sprites.create(sprites.castle.shrub, SpriteKind.Food)
        this.orken.setPosition(scrMidX,scrMidY)
        this.orken.setFlag(SpriteFlag.StayInScreen, true)
    }
}
let bob = new Orc("Bob",4)
let scrMidX = scene.screenWidth()/2
let scrMidY = scene.screenHeight()/2

game.onUpdateInterval(500, function () {
	bob.age += 1
    bob.orken.say("" + bob.name + " " + Math.trunc(bob.age))
    bob.orken.ax = ( randint(0,bob.age) - randint(0,bob.age) )
    bob.orken.ay = ( randint(0,bob.age) - randint(0,bob.age) )
    if (bob.orken.x != player2.x) {
        bob.orken.vx = player2.x - bob.orken.x
    }
    if (bob.orken.y != player2.y) {
        bob.orken.vy = player2.y - bob.orken.y
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
