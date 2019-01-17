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
                        [1,0,2,2,0,1],
                        [1,0,0,2,0,1],
                        [1,0,0,0,0,1],
                        [1,1,1,1,1,1]];

let playgroundSolution = [["","","","","",""],
                        ["","","","","",""],
                        ["","","","","",""],
                        ["","","",10,"",""],
                        ["","",10,10,"",""],
                        ["","","","","",""],
                        ["","","","","",""]];                       
let player = {
    x:2,
    y:3
}
let numberBoxWin = 3;
let counterMovimentsPlayer = 0;
let counterPushesBox = 0;

function start(){
    
    displayGame();
    reStart();
    buildPlayground();
    assignControlsToKeys();
    
     
}

function reStart (){
    const buttonReStart = document.getElementById('button-reset');
    buttonReStart.onclick = function (){
        playground = [[1,1,1,1,1,1],
                        [1,0,0,0,0,1],
                        [1,0,1,3,0,1],
                        [1,0,2,2,0,1],
                        [1,0,0,2,0,1],
                        [1,0,0,0,0,1],
                        [1,1,1,1,1,1]];
        player.x = 2;
        player.y = 3;
        counterMovimentsPlayer = 0;
        resetCounter();
        deleteBackground();
        buildPlayground();
        deleteWinPage();
        console.log("si");
    }
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

function checkIfBoxisRightPosition(BoxPositionX,BoxPositionY){
    if(playgroundSolution[BoxPositionX][BoxPositionY] === 10){
        console.log("hola");
        return true;        
    }
}

function checkIfisBoxSolution(BoxPositionX,BoxPositionY){
    if(playgroundSolution[BoxPositionX][BoxPositionY] === 10 && playground[BoxPositionX][BoxPositionY] === 0){
        return true;
    }
}

function checkWinOrNot (){
    
    let boxDelivery = 0;
    playground.forEach(function(row, i){
        row.forEach(function(colum, j){
            if(colum == 2 && playgroundSolution[i][j] == 10){
                boxDelivery = boxDelivery + 1;
                console.log(boxDelivery)
                if(boxDelivery == numberBoxWin){
                    displayWinPage();
                    console.log("win");
                }
            }
        })
    })
}

function displayWinPage (){
    let divGame = document.getElementById('game-page');
    let divWin = document.createElement('div');
    divWin.setAttribute('class','class-win-page');
    divWin.innerHTML = "YOU WIN!!!";
    divGame.appendChild(divWin);
}

function deleteWinPage (){
    let divGamePage = document.getElementById('game-page');
    divGamePage.removeChild(document.getElementsByClassName('class-win-page')[0]);
}

function deleteBackground (){
    const divPlayground = document.getElementById('div-playground');
    divPlayground.removeChild(document.getElementById('playground'));
}

function buildPlayground (){   
    
    let divPlayground = document.getElementById('div-playground');
    let playgroundHtml = document.createElement('div');
    playgroundHtml.setAttribute("id","playground");
    playgroundHtml.setAttribute("class","class-playground");
    divPlayground.appendChild(playgroundHtml);
    // let playgroundHtml = document.getElementById('playground');

    for(let i = 0; i < playground.length; i++){
        for(let j = 0; j < playground[i].length; j++){
            let boxHtml = document.createElement('div');
            boxHtml.setAttribute("id",`${i}${j}`);           
            switch(playground[i][j]){

//0 es el terreno; 1 es una barrera; 2 es la caja; 3 el jugador

                case 0:
                    if(checkIfisBoxSolution(i,j)){
                        boxHtml.setAttribute("class", "box-playground-solution");
                    }else{
                        boxHtml.setAttribute("class", "box-playground");
                    }
                    playgroundHtml.appendChild(boxHtml);
                    break;                       
                case 1:
                    boxHtml.setAttribute("class", "box-wall");
                    playgroundHtml.appendChild(boxHtml);                   
                    break;
                case 2:
                    if(checkIfBoxisRightPosition(i,j)){
                        boxHtml.setAttribute("class","box-deliver-on-time");                                       
                        playgroundHtml.appendChild(boxHtml);
                    }else{
                        boxHtml.setAttribute("class","box-deliver");                                       
                        playgroundHtml.appendChild(boxHtml); 
                    }                  
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
  
function movePlayer(PlayerPositionX,PlayerPositionY,direction){
    playground[PlayerPositionX][PlayerPositionY] = 0;
    if(checkIfisBoxSolution(PlayerPositionX, PlayerPositionY)){
        document.getElementsByClassName('box-player')[0].className = "box-playground-solution"; 
    }else{
        document.getElementsByClassName('box-player')[0].className = "box-playground";
    } 
    switch (direction){
        case "up":
            document.getElementById(`${PlayerPositionX - 1}${PlayerPositionY}`).className = "box-player";       
            playground[PlayerPositionX - 1][PlayerPositionY] = 3;
            player.x = PlayerPositionX - 1;
            counterMoviments();
            break;
        case "down":
            document.getElementById(`${PlayerPositionX + 1}${PlayerPositionY}`).className = "box-player";                   
            playground[PlayerPositionX + 1][PlayerPositionY] = 3;
            player.x = PlayerPositionX + 1;
            counterMoviments();
            break;
        case "left":
            document.getElementById(`${PlayerPositionX}${PlayerPositionY - 1}`).className = "box-player";                  
            playground[PlayerPositionX][PlayerPositionY - 1] = 3;
            player.y = PlayerPositionY - 1;
            counterMoviments();
            break;
        case "right":
            document.getElementById(`${PlayerPositionX}${PlayerPositionY + 1}`).className = "box-player";                  
            playground[PlayerPositionX][PlayerPositionY + 1] = 3;
            player.y = PlayerPositionY + 1;
            counterMoviments();
            break;
    }
}

function moveBox(BoxPositionX,BoxPositionY,direction){
    switch(direction){
        case "up":
            if(checkIfBoxisRightPosition(BoxPositionX - 2,BoxPositionY)){
                document.getElementById(`${BoxPositionX - 2}${BoxPositionY}`).className = "box-deliver-on-time";
            }else{
                document.getElementById(`${BoxPositionX - 2}${BoxPositionY}`).className = "box-deliver";
            }
            playground[BoxPositionX - 1][BoxPositionY] = 0;
            playground[BoxPositionX - 2][BoxPositionY] = 2;
            counterPushes();
            checkWinOrNot();
            break;
        case "down":
            if(checkIfBoxisRightPosition(BoxPositionX + 2,BoxPositionY)){
                document.getElementById(`${BoxPositionX + 2}${BoxPositionY}`).className = "box-deliver-on-time";
            }else{
                document.getElementById(`${BoxPositionX + 2}${BoxPositionY}`).className = "box-deliver";
            }
            playground[BoxPositionX + 1][BoxPositionY] = 0;
            playground[BoxPositionX + 2][BoxPositionY] = 2;
            counterPushes();
            checkWinOrNot();
            break;
        case "left":
            if(checkIfBoxisRightPosition(BoxPositionX,BoxPositionY - 2)){
                document.getElementById(`${BoxPositionX}${BoxPositionY - 2}`).className = "box-deliver-on-time";
            }else{
                document.getElementById(`${BoxPositionX}${BoxPositionY - 2}`).className = "box-deliver";
            }
            playground[BoxPositionX][BoxPositionY - 1] = 0;
            playground[BoxPositionX][BoxPositionY - 2] = 2;
            counterPushes();
            checkWinOrNot();
            break;
        case "right":
            if(checkIfBoxisRightPosition(BoxPositionX,BoxPositionY + 2)){
                document.getElementById(`${BoxPositionX}${BoxPositionY + 2}`).className = "box-deliver-on-time";
            }else{
                document.getElementById(`${BoxPositionX}${BoxPositionY + 2}`).className = "box-deliver";
            }
            playground[BoxPositionX][BoxPositionY + 1] = 0;
            playground[BoxPositionX][BoxPositionY + 2] = 2;
            counterPushes();
            checkWinOrNot();
            break;
    }
}

function goUp(){
    if(playground[player.x - 1][player.y] === 0 ){
        movePlayer(player.x, player.y, "up");
    }else if(playground[player.x - 1][player.y] === 2 && playground[player.x - 2][player.y] === 0){ 
        moveBox(player.x, player.y, "up");
        movePlayer(player.x, player.y, "up");
    }
}

function goRight(){
    if(playground[player.x][player.y + 1] === 0 ){
        movePlayer(player.x, player.y, "right");
    }else if(playground[player.x][player.y + 1] === 2 && playground[player.x][player.y + 2] === 0){
        moveBox(player.x, player.y, "right");
        movePlayer(player.x, player.y, "right");       
    }
}

function goDown(){
    if(playground[player.x + 1][player.y] === 0 ){
        movePlayer(player.x, player.y, "down");
    }else if(playground[player.x + 1][player.y] === 2 && playground[player.x + 2][player.y] === 0){
        moveBox(player.x, player.y, "down");
        movePlayer(player.x, player.y, "down");        
    }
}

function goLeft(){
    if(playground[player.x][player.y - 1] === 0 ){
        movePlayer(player.x, player.y, "left");
    }else if(playground[player.x][player.y - 1] === 2 && playground[player.x][player.y - 2] === 0){
        moveBox(player.x, player.y, "left");
        movePlayer(player.x, player.y, "left");        
    }
}

function counterMoviments (){  
    counterMovimentsPlayer = counterMovimentsPlayer + 1;
    document.getElementById('num-moves').innerHTML = counterMovimentsPlayer;
}

function resetCounter (){
    document.getElementById('num-moves').innerHTML = 0;

}

function counterPushes (){  
    counterPushesBox = counterPushesBox + 1;
    document.getElementById('num-push').innerHTML = counterPushesBox;
}

function resetCounter (){
    document.getElementById('num-push').innerHTML = 0;

}



document.onload = function (){
    displayStartPage();
    start();
    
}();
