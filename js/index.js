ImageLoader.load();

let game = new Game();

ctx.fillStyle="#fff";
function loop()
{
    game.loop();
}
window.setInterval(loop,24);