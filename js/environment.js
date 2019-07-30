class Land
{
    constructor(i)
    {
        this.x=i*1400;
        this.y=3*HEIGHT/4;
        this.w=1400;
        this.h=25;
        this.deepnest=25;
    }

    draw()
    {
        ImageLoader.drawImage(FLOOR,this.x,this.y,this.w,this.h);
    }

    move(delta)
    {
        this.x-=delta;
        if(this.x<-this.w)
            this.x+=2*this.w;
    }

    collision(player)
    {
        if(player.y>=PLAYERY)
        {
            player.ground();
        }
    }
}


class LargeLand
{
    constructor()
    {
        this.l0 = new Land(0);
        this.l1 = new Land(1);
    }

    draw()
    {
        this.l0.draw();
        this.l1.draw();
    }

    move(delta)
    {
        this.l0.move(delta);
        this.l1.move(delta);
    }

    collision(player)
    {
        this.l0.collision(player);
        this.l1.collision(player);
    }
}