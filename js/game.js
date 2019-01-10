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
let player = {
    x:2,
    y:3
}

function start(){
    displayGame();
    buildPlayground();
    assignControlsToKeys();   
}
function displayStartPage() {
    const startPage = document.getElementById('start-page');
    startPage.style.display = 'block';
    const titleGame = document.createElement('h1');
    titleGame.innerHTML = "Delibery on Time";
    const divTitleGame = document.createElement('div');
    divTitleGame.setAttribute("class", "class-title-start-page");
    divTitleGame.appendChild(titleGame);
    startPage.appendChild(divTitleGame);
    const divImgesBoxes = document.createElement('div');
    divImgesBoxes.setAttribute("class", "class-img-start-page");
    const images = document.createElement('img'); 
    divImgesBoxes.appendChild(images);
    divImgesBoxes.appendChild(images);
    divImgesBoxes.appendChild(images);
    startPage.appendChild(divImgesBoxes);
    const divButtonStart = document.createElement('div');
    divButtonStart.setAttribute("class", "class-button-start");
    const button = document.createElement('button');
    button.setAttribute("id", "button-start");
    button.innerHTML = "START";
    divButtonStart.appendChild(button);
    startPage.appendChild(divButtonStart);
}
function displayGame() {
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
            boxHtml.setAttribute("id",`${i}${j}`);           
            switch(playground[i][j]){

//0 es el terreno; 1 es una barrera; 2 es la caja; 3 el jugador

                case 0:
                    boxHtml.setAttribute("class", "box-playground");
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

function assignControlsToKeys (){
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 38: //arrow up
          goUp();
          break;
        case 40: //arror down
          goDown();
          break;
        case 37: //arror left
          goLeft();
          break;
        case 39: //arrow right
          goRight();
          break; 
      }
    };
  }
function goUp(){
    var playerBox = document.getElementsByClassName('box-player')[0];
    if(playground[player.x - 1][player.y] === 0 ){
        playerBox.className = "box-playground";
        document.getElementById(`${player.x - 1}${player.y}`).className = "box-player";       
        playground[player.x][player.y] = 0;
        playground[player.x - 1][player.y] = 3;
        player.x = player.x - 1;
    }else if(playground[player.x - 1][player.y] === 2 && playground[player.x - 2][player.y] === 0){
        playerBox.className = "box-playground";
        document.getElementById(`${player.x - 1}${player.y}`).className = "box-player";
        document.getElementById(`${player.x - 2}${player.y}`).className = "box-deliver";       
        playground[player.x][player.y] = 0;
        playground[player.x - 1][player.y] = 3;
        playground[player.x - 2][player.y] = 2;
        player.x = player.x - 1;
        
    }
}
function movePlayer(positionPlayerX,positionPlayerY){
    var playerBox = document.getElementsByClassName('box-player')[0];
    playerBox.className = "box-playground";
    document.getElementById(`${positionPlayerX}${positionPlayerY}`).className = "box-player";       
    playground[positionPlayerX][positionPlayerY] = 0;
    playground[positionPlayerX][positionPlayerY] = 3;
    player.x = positionPlayerX;
}
function goRight(){
    var playerBox = document.getElementsByClassName('box-player')[0];
    if(playground[player.x][player.y + 1] === 0 ){
        playerBox.className = "box-playground";
        document.getElementById(`${player.x}${player.y + 1}`).className = "box-player"; 
        playground[player.x][player.y] = 0;
        playground[player.x][player.y + 1] = 3;
        player.y = player.y + 1;
    }else if(playground[player.x][player.y + 1] === 2 && playground[player.x][player.y + 2] === 0){
        playerBox.className = "box-playground";
        document.getElementById(`${player.x}${player.y + 1}`).className = "box-player";
        document.getElementById(`${player.x}${player.y + 2}`).className = "box-deliver";
        playground[player.x][player.y] = 0;
        playground[player.x][player.y + 1] = 3;
        playground[player.x][player.y + 2] = 2;
        player.y = player.y + 1;
        
    }
}

function goDown(){
    var playerBox = document.getElementsByClassName('box-player')[0];
    if(playground[player.x + 1][player.y] === 0 ){
        playerBox.className = "box-playground";
        document.getElementById(`${player.x + 1}${player.y}`).className = "box-player"; 
        playground[player.x][player.y] = 0;
        playground[player.x + 1][player.y] = 3;
        player.x = player.x + 1;
    }else if(playground[player.x + 1][player.y] === 2 && playground[player.x + 2][player.y] === 0){
        playerBox.className = "box-playground";
        document.getElementById(`${player.x + 1}${player.y}`).className = "box-player";
        document.getElementById(`${player.x + 2}${player.y}`).className = "box-deliver"; 
        playground[player.x][player.y] = 0;
        playground[player.x + 1][player.y] = 3;
        playground[player.x + 2][player.y] = 2;
        player.x = player.x + 1;

        
    }
}

function goLeft(){
    var playerBox = document.getElementsByClassName('box-player')[0];
    if(playground[player.x][player.y - 1] === 0 ){
        playerBox.className = "box-playground";
        document.getElementById(`${player.x}${player.y - 1}`).className = "box-player"; 
        playground[player.x][player.y] = 0;
        playground[player.x][player.y - 1] = 3;
        player.y = player.y - 1;
    }else if(playground[player.x][player.y - 1] === 2 && playground[player.x][player.y - 2] === 0){
        playerBox.className = "box-playground";
        document.getElementById(`${player.x}${player.y - 1}`).className = "box-player";
        document.getElementById(`${player.x}${player.y - 2}`).className = "box-deliver"; 
        playground[player.x][player.y] = 0;
        playground[player.x][player.y - 1] = 3;
        playground[player.x][player.y - 2] = 2;
        player.y = player.y - 1;
        
    }
}




document.onload = function (){
    displayStartPage();
    start();
}();
