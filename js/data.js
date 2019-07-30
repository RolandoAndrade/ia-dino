let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

const WIDTH=600;
const HEIGHT=300;

const PLAYERX=100;
const PLAYERY=195;
const GRAVITY=2;
const PLAYER_JUMP=-21;
const PLAYER_COLLIDER=50;

const DINO={x: 74, y:0, w:90, h:95};


const DINO1={x: 1678, y:0, w:88, h:95};
const DINO2={x: 1766, y:0, w:88, h:95};
const DINO3={x: 1854, y:0, w:88, h:95};
const DINO4={x: 1942, y:0, w:88, h:95};
const DINO5={x: 2030, y:0, w:88, h:95};

const DINO_DEATH={x: 2118, y:0, w:85, h:95};

const DINO_DUCK1={x: 2203, y:0, w:118, h:95};
const DINO_DUCK2={x: 2321, y:0, w:118, h:95};

const CLOUD={x: 165, y:0, w:95, h:30};
const BIRD1={x: 258, y:0, w:93, h:93};
const BIRD2={x: 352, y:0, w:93, h:93};
const CAC1={x: 480, y:0, w:34, h:77};
const CAC2={x: 514, y:0, w:34, h:77};
const CAC3={x: 548, y:0, w:34, h:77};
const CAC4={x: 582, y:0, w:34, h:77};
const CAC5={x: 616, y:0, w:34, h:77};
const BCAC1={x: 650, y:0, w:52, h:100};
const BCAC2={x: 702, y:0, w:50, h:100};
const BCAC3={x: 752, y:0, w:50, h:100};
const BCAC4={x: 802, y:0, w:48, h:100};
const BCAC5={x: 850, y:0, w:105, h:100};



const SCROLL=7;
const FLOOR={x: 1, y:105, w:2400, h:25};
const CACTUS_HEIGHT=60;
const CACTUS_WIDTH=40;

const SURVIVOR_RATE = 0.1;
const POPULATION = 300;
const MUTATION_RATE = 0.5;
const STEP_SIZE = 0.01;