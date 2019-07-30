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
        this.players = [];
        for(let i = 0; i < POPULATION; i++)
        {
            this.players.push(new Player());
        }
        this.family = new Generation(this.players);
        this.fabric = new FabricOfCactus();
        this.cactus = new Cactus();
        this.land = new LargeLand();
        this.loop();
        let a = this;
        document.addEventListener("keydown", function (e)
        {
            a.reset(true);
        })
    }

    reset(a = true)
    {
        this.gameOver = true;

        this.players = this.family.nextGeneration(this.players, a);

        this.cactus = new Cactus();
        this.land = new LargeLand();
    }

    loop()
    {
        if(!this.gameOver)
        {
            ctx.fillRect(0,0,600,300);
            this.land.move(SCROLL);
            this.land.draw();
            if(this.cactus.move(SCROLL)) this.cactus = this.fabric.createRandom();
            this.cactus.draw();
            let q = 0;
            this.players.forEach((e)=>{
                if(e.isAlive)
                {
                    e.think(this.cactus);
                    e.move(SCROLL);
                    this.land.collision(e);
                    this.cactus.collision(e);

                }
                else
                {
                    e.move(SCROLL);
                    q++;
                }
                e.draw();
            });

            if(q===POPULATION)
            {
                console.log(this.players);
                this.reset();

            }
        }
    }
}