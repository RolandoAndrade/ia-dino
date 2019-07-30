ImageLoader.load();

let game = new Game();

ctx.fillStyle="#fff";
function loop()
{
    game.loop();
}
let myloop = window.setInterval(loop,8);