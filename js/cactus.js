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
}