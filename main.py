enemies: Sprite = None
player2 = sprites.create(sprites.food.small_pizza, SpriteKind.player)
controller.move_sprite(player2, 100, 100)
for index in range(5):
    enemies2 = [index] = sprites.create(sprites.castle.hero_walk_front1, SpriteKind.enemy)
    enemies3 = [index].x = randint(10, screen.width - 10)
    enemies4 = [index].y = randint(10, screen.height - 10)

def on_update_interval():
    if enemies.x != player2.x:
        enemies.vx = player2.x - enemies.x
    if enemies.y != player2.y:
        enemies.vy = player2.y - enemies.y
game.on_update_interval(200, on_update_interval)
