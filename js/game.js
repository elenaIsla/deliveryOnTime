let level = 1;
let game = new Playground (level); 
let counterMovimentsPlayer = 0;
let counterPushesBox = 0;

function start(){     
    displayGame();
    reStart();
    game.asignPlayground();
    game.buildPlayground(); 
    assignControlsToKeys();    
}

function reTry (){
    const buttonTryAgain = document.getElementById('button-try-again');
    buttonTryAgain.onclick = function (){
        resetCounter();
        deleteBackground();
        game.asignPlayground();
        game.buildPlayground();
        deleteWinPage();
    }
}

function reStart (){
    const buttonReStart = document.getElementById('button-reset');
    buttonReStart.onclick = function (){
        resetCounter();
        deleteBackground();
        game.asignPlayground();
        game.buildPlayground();
        deleteWinPage();
        console.log("si");
    }
}

function passNextLevel (){
    const buttonNextLevel = document.getElementById('button-next-level');
    buttonNextLevel.onclick = function (){
        level = level + 1;
        resetCounter();
        deleteBackground();
        game = new Playground (level)
        game.asignPlayground();
        game.buildPlayground();
        showLevel();
        deleteWinPage();    
    }
}

function displayGame() {
    const buttonStart = document.getElementById('button-start');
    buttonStart.onclick = function(){
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
function checkWinOrNot (){
    
    let boxDelivery = 0;
    game.playground.forEach(function(row, i){
        row.forEach(function(colum, j){
            if(colum == 2 && game.playgroundSolution[i][j] == 10){
                boxDelivery = boxDelivery + 1;
                console.log(boxDelivery)
                if(boxDelivery == game.numberBoxWin){
                    displayWinPage();
                    console.log("win");
                }
            }
        })
    })
}

function displayWinPage (){

    // //----borramos el reset para ponerel "try again"-----
    // let divResetButton = document.getElementById('div-button-reset');
    // divResetButton.removeChild(document.getElementById('button-reset'));
    // let resetButton = document.createElement ('button');
    // resetButton.setAttribute('id','button-try-again');
    // resetButton.innerHTML = "Try again";
    // divButtons.appendChild(resetButton);

    let divGame = document.getElementById('game-page');
    let divWin = document.createElement('div');
    divWin.setAttribute('class','class-win-page');
    divWin.innerHTML = "Well done!!!    ";
    let divButtons = document.createElement('div');
    let newLevelButton = document.createElement ('button');
    newLevelButton.innerHTML = "NEXT LEVEL";
    newLevelButton.setAttribute('id','button-next-level');
    newLevelButton.setAttribute('class','class-button');
    divButtons.appendChild(newLevelButton);
    divWin.appendChild(divButtons);
    divGame.appendChild(divWin); 
    passNextLevel(); 
}

function deleteWinPage (){
    let divGamePage = document.getElementById('game-page');
    divGamePage.removeChild(document.getElementsByClassName('class-win-page')[0]);
    // divGamePage.removeChild(document.getElementsByClassName('class-win-page-buttons')[0]);
}

function deleteBackground (){
    const divPlayground = document.getElementById('div-playground');
    divPlayground.removeChild(document.getElementById('playground'));
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
    game.playground[PlayerPositionX][PlayerPositionY] = 0;
    if(game.checkIfisBoxSolution(PlayerPositionX, PlayerPositionY)){
        document.getElementsByClassName('box-player')[0].className = "box-playground-solution"; 
    }else{
        document.getElementsByClassName('box-player')[0].className = "box-playground";
    } 
    switch (direction){
        case "up":
            document.getElementById(`${PlayerPositionX - 1}${PlayerPositionY}`).className = "box-player";       
            game.playground[PlayerPositionX - 1][PlayerPositionY] = 3;
            game.player.x = PlayerPositionX - 1;
            counterMoviments();
            break;
        case "down":
            document.getElementById(`${PlayerPositionX + 1}${PlayerPositionY}`).className = "box-player";                   
            game.playground[PlayerPositionX + 1][PlayerPositionY] = 3;
            game.player.x = PlayerPositionX + 1;
            counterMoviments();
            break;
        case "left":
            document.getElementById(`${PlayerPositionX}${PlayerPositionY - 1}`).className = "box-player";                  
            game.playground[PlayerPositionX][PlayerPositionY - 1] = 3;
            game.player.y = PlayerPositionY - 1;
            counterMoviments();
            break;
        case "right":
            document.getElementById(`${PlayerPositionX}${PlayerPositionY + 1}`).className = "box-player";                  
            game.playground[PlayerPositionX][PlayerPositionY + 1] = 3;
            game.player.y = PlayerPositionY + 1;
            counterMoviments();
            break;
    }
}

function moveBox(BoxPositionX,BoxPositionY,direction){
    switch(direction){
        case "up":
            if(game.checkIfBoxisRightPosition(BoxPositionX - 2,BoxPositionY)){
                document.getElementById(`${BoxPositionX - 2}${BoxPositionY}`).className = "box-deliver-on-time";
            }else{
                document.getElementById(`${BoxPositionX - 2}${BoxPositionY}`).className = "box-deliver";
            }
            game.playground[BoxPositionX - 1][BoxPositionY] = 0;
            game.playground[BoxPositionX - 2][BoxPositionY] = 2;
            counterPushes();
            checkWinOrNot();
            break;
        case "down":
            if(game.checkIfBoxisRightPosition(BoxPositionX + 2,BoxPositionY)){
                document.getElementById(`${BoxPositionX + 2}${BoxPositionY}`).className = "box-deliver-on-time";
            }else{
                document.getElementById(`${BoxPositionX + 2}${BoxPositionY}`).className = "box-deliver";
            }
            game.playground[BoxPositionX + 1][BoxPositionY] = 0;
            game.playground[BoxPositionX + 2][BoxPositionY] = 2;
            counterPushes();
            checkWinOrNot();
            break;
        case "left":
            if(game.checkIfBoxisRightPosition(BoxPositionX,BoxPositionY - 2)){
                document.getElementById(`${BoxPositionX}${BoxPositionY - 2}`).className = "box-deliver-on-time";
            }else{
                document.getElementById(`${BoxPositionX}${BoxPositionY - 2}`).className = "box-deliver";
            }
            game.playground[BoxPositionX][BoxPositionY - 1] = 0;
            game.playground[BoxPositionX][BoxPositionY - 2] = 2;
            counterPushes();
            checkWinOrNot();
            break;
        case "right":
            if(game.checkIfBoxisRightPosition(BoxPositionX,BoxPositionY + 2)){
                document.getElementById(`${BoxPositionX}${BoxPositionY + 2}`).className = "box-deliver-on-time";
            }else{
                document.getElementById(`${BoxPositionX}${BoxPositionY + 2}`).className = "box-deliver";
            }
            game.playground[BoxPositionX][BoxPositionY + 1] = 0;
            game.playground[BoxPositionX][BoxPositionY + 2] = 2;
            counterPushes();
            checkWinOrNot();
            break;
    }
}

function goUp(){
    if(game.playground[game.player.x - 1][game.player.y] === 0 ){
        movePlayer(game.player.x, game.player.y, "up");
    }else if(game.playground[game.player.x - 1][game.player.y] === 2 && game.playground[game.player.x - 2][game.player.y] === 0){ 
        moveBox(game.player.x, game.player.y, "up");
        movePlayer(game.player.x, game.player.y, "up");
    }
}

function goRight(){
    if(game.playground[game.player.x][game.player.y + 1] === 0 ){
        movePlayer(game.player.x,game.player.y, "right");
    }else if(game.playground[game.player.x][game.player.y + 1] === 2 && game.playground[game.player.x][game.player.y + 2] === 0){
        moveBox(game.player.x, game.player.y, "right");
        movePlayer(game.player.x, game.player.y, "right");       
    }
}

function goDown(){
    if(game.playground[game.player.x + 1][game.player.y] === 0 ){
        movePlayer(game.player.x, game.player.y, "down");
    }else if(game.playground[game.player.x + 1][game.player.y] === 2 && game.playground[game.player.x + 2][game.player.y] === 0){
        moveBox(game.player.x, game.player.y, "down");
        movePlayer(game.player.x, game.player.y, "down");        
    }
}

function goLeft(){
    if(game.playground[game.player.x][game.player.y - 1] === 0 ){
        movePlayer(game.player.x, game.player.y, "left");
    }else if(game.playground[game.player.x][game.player.y - 1] === 2 && game.playground[game.player.x][game.player.y - 2] === 0){
        moveBox(game.player.x, game.player.y, "left");
        movePlayer(game.player.x, game.player.y, "left");        
    }
}

//------contadores de movimientos jugador y cajas -------

function counterMoviments (){  
    counterMovimentsPlayer = counterMovimentsPlayer + 1;
    document.getElementById('num-moves').innerHTML = counterMovimentsPlayer;
}

function counterPushes (){  
    counterPushesBox = counterPushesBox + 1;
    document.getElementById('num-push').innerHTML = counterPushesBox;
}

//------reset para los contadores -----------

function resetCounter (){
    document.getElementById('num-moves').innerHTML = 0;
    document.getElementById('num-push').innerHTML = 0;
    counterMovimentsPlayer = 0;
    counterPushesBox = 0;

}

//------nivel de la partida --------

function showLevel (){
    document.getElementById('num-level').innerHTML = level;
}

document.onload = function (){
    // displayStartPage();
    moveStartPageImages();
    start();
}();
