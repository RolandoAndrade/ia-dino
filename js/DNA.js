class Generation
{
    constructor(players)
    {
        this.players = players;
        this.generation = 1;
        this.SURVIVORS = SURVIVOR_RATE*POPULATION;
    }

    kill()
    {
        this.players.sort(function(a, b) {return b.meters - a.meters});
        for(let i = 0; i < POPULATION-this.SURVIVORS; i++)
        {
            this.players.pop();
        }
    }


    procreate()
    {
        let baby = new Player();
        let brain = new Brain();
        let father = this.players[Math.floor(Math.random() * this.SURVIVORS)];
        let mother = this.players[Math.floor(Math.random() * this.SURVIVORS)];
        brain.weightX = Math.random() > 0.5 ? father.brain.weightX : mother.brain.weightX;
        brain.weightY = Math.random() > 0.5 ? father.brain.weightY : mother.brain.weightY;
        baby.brain = this.mutate(brain);
        this.players.push(baby);
    }

    mutate(brain)
    {
        if(Math.random() < MUTATION_RATE)
        {
            brain.mutate();
        }
        return brain;
    }


    nextGeneration()
    {
        this.kill();
        for(let i = this.SURVIVORS; i < POPULATION; i++)
        {
            this.procreate();
        }
        this.players.forEach((e)=>e.reset());
        this.generation++;
    }
}