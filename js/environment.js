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
        if(player.y+PLAYER_COLLIDER>=this.y+this.deepnest)
        {
            player.ground();
        }
    }
}