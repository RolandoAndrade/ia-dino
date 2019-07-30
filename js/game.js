class Game
{
    constructor()
    {
        this.gameOver = true;
        this.init();
    }

    init()
    {
        this.gameOver = false;
        this.player = new Player();
        this.fabric = new FabricOfCactus();
        this.cactus = new Cactus();
        this.land = new LargeLand();
        this.loop();
    }

    loop()
    {
        ctx.fillRect(0,0,600,300);
        this.land.move(SCROLL);
        this.land.draw();
        if(this.cactus.move(SCROLL)) this.cactus = this.fabric.createRandom();


        this.player.move(SCROLL);

        this.land.collision(this.player);
        this.cactus.collision(this.player);

        this.cactus.draw();
        this.player.draw();

    }
}