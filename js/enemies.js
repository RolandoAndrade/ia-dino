class Cactus
{
    constructor()
    {
        this.x=WIDTH;
        this.y=PLAYERY-10;
        this.w=CACTUS_WIDTH;
        this.h=CACTUS_HEIGHT;
        this.image=BCAC1;
    }

    draw()
    {
        ImageLoader.drawImage(this.image,this.x,this.y,this.w,this.h);
    }

    move(delta)
    {
        this.x-=delta;
        return this.x<-this.w;
    }

    collision(player)
    {
        let error=5;
        if(this.x-error<=player.x+player.w&&player.x<=this.x+this.w+error&&
            player.y+player.h>=this.y+error)
        {
            player.kill(player.y);
        }
        return !player.isAlive;
    }
}


class FabricOfCactus
{
    createRandom()
    {
        let a = Math.floor(Math.random()*6);
        let cactus = new Cactus();
        switch (a)
        {
            case 0:
                cactus.image = BCAC2;
                break;
            case 1:
                cactus.image = BCAC3;
                break;
            case 2:
                cactus.image = BCAC3;
                break;
            case 3:
                cactus.image = BCAC4;
                break;
            case 4:
                cactus.image = BCAC5;
                break;
        }
        return cactus;
    }
}


class Bird
{
    constructor()
    {

    }
}