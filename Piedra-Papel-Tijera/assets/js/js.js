let stampTimeClick=[];
class Game{
    constructor(nameP,startStamp){
        this._nameP=nameP;
        this._startStampP=startStamp;
    }
    infoGame(){
        /*
        console.log("inforEx de game class");
        console.log(this._nameP);
        console.log(this._startStampP);
        */
    }
}
const playRandom=(pPlayer)=>{
    //console.log(pPlayer);
    let rd=Math.random();
    let rdPlayer=rd<1/3?1:rd<2*1/3?2:3;
    let rdPDOM=rdPlayer==1?'rockRandom':rdPlayer==2?'paperRandom':'scissorsRandom';
    renderPlayOption(rdPDOM,buttons);
    //console.log(rd);
    //console.log(rdPlayer);
    calculate(pPlayer,rdPlayer);
}
const calculate=(a,b)=> {
    let resultPlay=a==b?0:a-b==-2||a-b==1?1:a-b==2||a-b==-1?2:console.log("ERROR");
    //imprime resultado
    //Modal
    //costruir objeto jigada 
    return resultPlay;
}
console.log(calculate);
let play=[];
var buttons=document.getElementsByClassName("inputPlayerButton");
const playerOption=(pointEObj)=>{ /*console.log(window); console.log(pointEObj); console.log(pointEObj.timeStamp); console.log(pointEObj.path[0].id);*/
    //guarda la jugada actual en el registro
    let playPlayer;
    switch (pointEObj.path[0].id) {
        case 'rock': playPlayer=1; break;
        case 'paper': playPlayer=2; break;
        case 'scissors': playPlayer=3; break;
        default: break;
    }
    let p={play:`${playPlayer}`,whenPlay:`${pointEObj.timeStamp}`};
    play.unshift(p);
    console.log(play);
    renderPlayOption(pointEObj.path[0].id,buttons);
    //Dispara calcular la jugada random
    playRandom(play[0].play);
}

Array.from(buttons).forEach(element => {
    let idI=element.id;
    element.onclick=function(idI){playerOption(idI)};
});
const renderPlayOption=(id, buttons)=>{
    let divPlay=document.getElementById(id);
    //duplicar elemeto
    let divPlayC=divPlay.cloneNode(true);
    //cambiar clases de activas desactivadas //añimar trasicioes e css
    console.log(buttons);
    Array.from(buttons).forEach(element=>{
        let a=element.id==id?element.classList.add("disable-select"):element.classList.add("disable");
    });
    //aidar jugadas
    document.getElementById("p2").appendChild(divPlayC);

}
const render=()=>{
    
}