class Player
{
    constructor()
    {

        this.reset();
        this.walkSprites=[DINO1,DINO3,DINO4];


        this.brain = new Brain();


        let a=this;

        /*document.onkeydown=function (e)
        {
            if(e.keyCode===38)
                a.up();
            else if(e.keyCode===40)
            {
                a.down();
            }

        };
        document.onkeyup=function (e)
        {
            if(e.keyCode===40)
            {
                a.unDuck();
            }

        }*/
    }

    reset()
    {
        this.x=PLAYERX;
        this.y=PLAYERY;
        this.w=50;
        this.h=50;
        this.vy=0;
        this.isGrounded=true;
        this.isDucked=false;
        this.isAlive=true;
        this.meters = 0;
        this.spriteIndex=0;
        this.duckSpriteIndex=0;
    }

    draw()
    {
        if(this.isAlive)
        {
            if(this.isDucked&&this.isGrounded)
            {
                this.w=65;
                ImageLoader.drawImage((this.duckSpriteIndex)%2===0?DINO_DUCK1:DINO_DUCK2,this.x,this.y,this.w,this.h);
                this.duckSpriteIndex=(this.duckSpriteIndex+0.5)%2;
            }
            else
            {
                ImageLoader.drawImage(this.walkSprites[Math.trunc(this.spriteIndex)],this.x,this.y,this.w,this.h);
                this.spriteIndex=(this.spriteIndex+0.5)%3;
            }
        }
        else
        {
            ImageLoader.drawImage(DINO_DEATH,this.x,this.y,this.w,this.h);
        }
    }

    think(enemy)
    {
        this.meters++;
        let o = this.brain.getOutput(this, enemy);
        switch (o)
        {
            case -1:
                this.down();
                break;
            case 0:
                this.unDuck();
                break;
            case 1:
                this.up();
                break;
        }

    }

    move(delta)
    {
        if(!this.isGrounded&&this.isAlive)
        {
            this.y+=this.vy;
            this.vy+=GRAVITY;
        }
        else if(!this.isAlive)
        {
            this.x-=delta;
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
        if(!this.isGrounded)
        {
            this.vy+=2*GRAVITY;
        }
        this.isDucked=true;
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

    kill(y)
    {
        this.isAlive=false;
        this.y=y;
    }
}