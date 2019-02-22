class Player
{
    constructor()
    {
        this.x=PLAYERX;
        this.y=PLAYERY;
        this.w=50;
        this.h=50;

        this.vy=0;
        this.isGrounded=true;
        this.isDucked=false;

        this.walkSprites=[DINO1,DINO3,DINO4];
        this.blink=0;
        this.spriteIndex=0;
        this.duckSpriteIndex=0;
        let a=this;
        document.onkeydown=function (e)
        {

            a.up();
        }
    }

    draw()
    {
        ImageLoader.drawImage(this.walkSprites[Math.trunc(this.spriteIndex)],this.x,this.y,this.w,this.h);
        this.spriteIndex=(this.spriteIndex+0.5)%3;
    }

    move()
    {
        if(!this.isGrounded)
        {
            this.y+=this.vy;
            this.vy+=GRAVITY;
        }
    }

    up()
    {
        this.vy=PLAYER_JUMP;
        this.isGrounded=false;
    }

    ground()
    {
        this.isGrounded=true;
        this.y=PLAYERY;
    }
}