ImageLoader.load();
let l=new Land(0);
let ll=new Land(1);
l.draw();
let player=new Player();

let cactus=new Cactus();

ctx.fillStyle="#fff";
function loop()
{
    ctx.fillRect(0,0,600,300);
    l.move(SCROLL);
    ll.move(SCROLL);
    l.draw();
    ll.draw();
    if(cactus.move(SCROLL)) cactus.x=WIDTH;
    player.move(SCROLL);

    l.collision(player);
    ll.collision(player);


    cactus.collision(player);
    cactus.draw();
    player.draw();
}
window.setInterval(loop,24);