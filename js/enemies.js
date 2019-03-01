class Cactus
{
    constructor()
    {
        this.x=WIDTH-100;
        this.y=PLAYERY-10;
        this.w=CACTUS_WIDTH;
        this.h=CACTUS_HEIGHT;
        this.image=BCAC2;
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

class Bird
{
    constructor()
    {

    }
}