ImageLoader.load();
let l=new Land(0);
let ll=new Land(1);
l.draw();
let player=new Player();

ctx.fillStyle="#fff";
function loop()
{
    ctx.fillRect(0,0,600,300);
    l.move(5);
    ll.move(5);
    l.draw();
    ll.draw();
    player.move();
    l.collision(player);
    ll.collision(player);
    player.draw();
}
window.setInterval(loop,24);