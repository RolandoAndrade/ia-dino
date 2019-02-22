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
            if(e.keyCode===38)
                a.up();
            else if(e.keyCode===40)
                a.down();
        }
        document.onkeyup=function (e)
        {
            if(e.keyCode===40)
            {
                a.unDuck();
            }

        }
    }

    draw()
    {
        if(this.isDucked)
        {
            ImageLoader.drawImage((this.duckSpriteIndex)%2===0?DINO_DUCK1:DINO_DUCK2,this.x,this.y,this.w,this.h);
            this.duckSpriteIndex=(this.duckSpriteIndex+0.5)%2;
        }
        else
        {
            ImageLoader.drawImage(this.walkSprites[Math.trunc(this.spriteIndex)],this.x,this.y,this.w,this.h);
            this.spriteIndex=(this.spriteIndex+0.5)%3;
        }


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
        if(this.isGrounded)
        {
            this.vy=PLAYER_JUMP;
            this.isGrounded=false;
        }
    }

    down()
    {
        if(this.isGrounded)
        {
            this.isDucked=true;
            this.w=65;
        }
        else
        {
            this.vy+=GRAVITY;
        }
    }

    ground()
    {
        this.isGrounded=true;
        this.y=PLAYERY;
    }

    unDuck()
    {
        this.isDucked=false;
        this.w=50;
    }
}