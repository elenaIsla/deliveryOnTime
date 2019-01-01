//de la página inicial al inicio del juego
// class Game{
//     constructor(){
//     this.playground = [[0,0,0,0,],
//                         [0,1,p,0],
//                         [0,b,b,0],
//                         [0,0,0,0],
//                         [0,0,0,0]];
//     }
// }
let playground = [[1,1,1,1,1,1],
                        [1,0,0,0,0,1],
                        [1,0,1,3,0,1],
                        [1,0,0,2,0,1],
                        [1,0,2,2,0,1],
                        [1,0,0,0,0,1],
                        [1,1,1,1,1,1]];

function start(){
    displayGame();
    buildPlayground();
}

function displayGame(){
    const buttonStart = document.getElementById('button-start');
    buttonStart.onclick = function(){
        // const nonplayStart = document.getElementById('start-page').style.display = 'none';
        // const displayGame = document.getElementById('game-page').style.display = 'inline';
        const gamePage = document.getElementById('game-page');
        const startPage = document.getElementById('start-page');
        if(gamePage.style.display === 'none'){
            gamePage.style.display = 'block';
            startPage.style.display = 'none';
        }else{
            gamePage.style.display = 'none';
        }
    }
}

function buildPlayground (){
    
    let playgroundHtml = document.getElementById('playground');
    for(let i = 0; i < playground.length; i++){
        for(let j = 0; j < playground[i].length; j++){
            let boxHtml = document.createElement('div');
            boxHtml.setAttribute("class", "box-playground");
            switch(playground[i][j]){
//0 es el terreno; 1 es una barrera; 2 es la caja; 3 el jugador
                case 0:
                    playgroundHtml.appendChild(boxHtml);
                    break;                       
                case 1:
                    boxHtml.style.backgroundColor = 'grey';
                    playgroundHtml.appendChild(boxHtml);                   
                    break;
                case 2:
                    boxHtml.setAttribute("class","box-deliver");                                       
                    playgroundHtml.appendChild(boxHtml);                    
                    break; 
                case 3:
                    boxHtml.setAttribute("class","box-player");                  
                    playgroundHtml.appendChild(boxHtml);                    
                    break;                      
            }
        }     
    }
}





document.onload = function (){
    start();
}();
