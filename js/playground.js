class Playground {
    constructor (level){
        this.level = level;
        this.playground = [];
        this.playgroundSolution = [];
        this.player = {x:0, y:0};
        this.numberBoxWin = 0;
    }

 asignPlayground (){
     if(this.level === 1){
        this.playground = [[1,1,1,1,1,1],
                            [1,0,0,0,0,1],
                            [1,0,1,3,0,1],
                            [1,0,2,2,0,1],
                            [1,0,0,2,0,1],
                            [1,0,0,0,0,1],
                            [1,1,1,1,1,1]];
        this.playgroundSolution = [["","","","","",""],
                                    ["","","","","",""],
                                    ["","","","","",""],
                                    ["","","",10,"",""],
                                    ["","",10,10,"",""],
                                    ["","","","","",""],
                                    ["","","","","",""]];
        this.player.x = 2;
        this.player.y = 3;
        this.numberBoxWin = 3;

     }else if (this.level === 2){
        this.playground = [[1,1,1,1,"",""],
                            [1,0,0,1,"",""],
                            [1,0,0,1,1,1],
                            [1,2,3,0,0,1],
                            [1,0,0,2,0,1],
                            [1,0,0,1,1,1],
                            [1,1,1,1,"",""]];
        this.playgroundSolution = [["","","","","",""],
                                    ["","",10,"","",""],
                                    ["","","","","",""],
                                    ["",10,"","","",""],
                                    ["","","","","",""],
                                    ["","","","","",""],
                                    ["","","","","",""]];
        this.player.x = 3;
        this.player.y = 2;
        this.numberBoxWin = 2;
     }else if (this.level === 3){
        this.playground = [[1,1,1,1,1,1],
                            [1,0,0,0,1,1],
                            [1,3,2,2,0,1],
                            [1,1,0,0,0,1],
                            ["",1,1,0,0,1],
                            ["","",1,1,0,1],
                            ["","","",1,1,1]];
        this.playgroundSolution = [["","","","","",""],
                                    ["",10,"","","",""],
                                    ["","","","","",""],
                                    ["","","","","",""],
                                    ["","","","","",""],
                                    ["","","","",10,""],
                                    ["","","","","",""]];
        this.player.x = 2;
        this.player.y = 1;
        this.numberBoxWin = 2;
    }else if (this.level === 4){
        this.playground = [[1,1,1,1,1,1,1],
                            [1,0,0,0,0,0,1],
                            [1,0,1,0,1,0,1],
                            [1,0,0,2,2,3,1],
                            [1,0,0,0,1,1,1],
                            [1,1,1,1,1,"",""]];
                            
        this.playgroundSolution = [["","","","","","",""],
                                    ["","","","","","",""],
                                    ["","","","","","",""],
                                    ["","","","",10,"",""],
                                    ["",10,"","","","",""],
                                    ["","","","","","",""]];
        this.player.x = 3;
        this.player.y = 5;
        this.numberBoxWin = 2;
    }
}

 buildPlayground (){ 
        // this.asignPlayground ();  
// -------seleccionamos el div / creamos div dentro / le asignamos una id y class / lo juntamos al div padre
        let divPlayground = document.getElementById('div-playground');
        let playgroundHtml = document.createElement('div');
        playgroundHtml.setAttribute("id","playground");
        if(this.level === 1 |  this.level === 2 | this.level === 3){
            playgroundHtml.setAttribute("class",'class-playground');
            divPlayground.appendChild(playgroundHtml);
        }else if(this.level === 4){
            playgroundHtml.setAttribute("class",`class-playground${this.level}`);
            divPlayground.appendChild(playgroundHtml);
        }
// ------según el playground construimos un tablero diferente------
    
        for(let i = 0; i < this.playground.length; i++){
            for(let j = 0; j < this.playground[i].length; j++){
                let boxHtml = document.createElement('div');
                boxHtml.setAttribute("id",`${i}${j}`);           
                switch(this.playground[i][j]){
    
//--------0 es el terreno; 1 es una barrera; 2 es la caja; 3 el jugador
    
                    case 0:
                        if(this.checkIfisBoxSolution(i,j)){
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
                        if(this.checkIfBoxisRightPosition(i,j)){
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
                    case "":
                        boxHtml.style.backgroundColor = "black";                  
                        playgroundHtml.appendChild(boxHtml);                    
                        break;                  
                }
            }     
        }
    }

    checkIfisBoxSolution(i,j){
        if(this.playgroundSolution[i][j] === 10 && this.playground[i][j] === 0){
            return true;
        }
    }

    checkIfBoxisRightPosition(i,j){
        if(this.playgroundSolution[i][j] === 10){
            console.log("hola");
            return true;        
        }
    }

}