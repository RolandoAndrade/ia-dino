class ReLu
{
    F(x)
    {
        return Math.max(0, x);
    }

    dF(x)
    {
        return x > 0 ? 1 : 0;
    }
}

class Linear
{
    F(x)
    {
        return Math.min(Math.max(0, x),1);
    }

    dF(x)
    {
        return x > 0 ? 1 : 0;
    }
}

class Sigmoid
{
    F(x)
    {
        return 1 / (1 + Math.exp(-x));
    }

    dF(x)
    {
        return this.F(x)*(1-this.F(x));
    }
}

class TransferFunction
{
    F(x)
    {
        if(x<0.33) return -1;
        if(x<0.66) return 0;
        return 1;
    }
}

class Brain
{
    constructor()
    {
        this.weightX = Math.random() * 2 - 1;
        this.weightY = Math.random() * 2 - 1;
        this.bias = 1;
        this.activation = new Linear();
        this.transfer = new TransferFunction();
    }

    mutate()
    {
        this.weightX += Math.random() * 2 * STEP_SIZE - STEP_SIZE;
        this.weightY += Math.random() * 2 * STEP_SIZE - STEP_SIZE;
    }

    getOutput(player, enemy)
    {
        let deltaX = player.x - enemy.x;
        let deltaY = player.y - enemy.y;
        let out = this.activation.F(deltaX * this.weightX + deltaY * this.weightY + this.bias);
        return this.transfer.F(out);
    }
}