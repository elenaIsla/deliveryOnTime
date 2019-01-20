function moveStartPageImages (){

    setInterval(function(){
    
    setTimeout(function(){
        const div1 = document.getElementById('one');
        const div2 = document.getElementById('two');
        div1.className = 'class-nothing';
        div2.className ='class-player';
        
    },250);
    setTimeout(function(){
        const div2 = document.getElementById('two');
        const div3 = document.getElementById('three');
        const div4 = document.getElementById('four');
        div2.className = 'class-nothing';
        div3.className ='class-player';
        div4.className = 'class-deliver';
        
    },500);
    setTimeout(function(){
        const div3 = document.getElementById('three');
        const div4 = document.getElementById('four');
        const div5 = document.getElementById('five');
        div3.className = 'class-nothing';
        div4.className ='class-player';
        div5.className = 'class-deliver-on-time';
        
    },750);
    document.getElementById('one').className = 'class-player';
    document.getElementById('two').className = 'class-nothing';
    document.getElementById('three').className = 'class-deliver';
    document.getElementById('four').className = 'class-nothing';
    document.getElementById('five').className = 'class-playground-solution';
    
 },1000);
}
