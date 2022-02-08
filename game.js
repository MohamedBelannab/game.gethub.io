let turn = 'X'
let title = document.querySelector('.title')
let sqa = []
function final(num1,num2,num3){
    title.innerHTML = `${sqa[num1]} Winner`
    document.getElementById( 'item'+num1).style.background ='#1e272e'
    document.getElementById( 'item'+num2).style.background ='#1e272e'
    document.getElementById( 'item'+num3).style.background ='#1e272e'
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);
}
function winner(){
    for( let i =1 ; i<10 ; i++){
        sqa[i] = document.getElementById('item'+i).innerHTML;
    }
    

    if (sqa[1] == sqa[2] && sqa[2]== sqa[3] && sqa[1]!= ''){
        final(1,2,3)
        
    }
    else if (sqa[4] == sqa[5] && sqa[5]== sqa[6] && sqa[5]!= ''){
        final(4,5,6)
        
    }
    else if (sqa[7] == sqa[8] && sqa[8]== sqa[9] && sqa[7]!= ''){
        final(7,8,9)
        
    }
    else if (sqa[1] == sqa[4] && sqa[4]== sqa[7] && sqa[7]!= ''){
        final(1,4,7)
        
    }
    else if (sqa[2] == sqa[5] && sqa[5]== sqa[8] && sqa[8]!= ''){
        final(2,5,8)
        
    }
    else if (sqa[3] == sqa[6] && sqa[6]== sqa[9] && sqa[9]!= ''){
        final(3,6,9)
        
    }
    else if (sqa[1] == sqa[5] && sqa[5]== sqa[9] && sqa[1]!= ''){
        final(1,5,9)
        
    }
    else if (sqa[3] == sqa[5] && sqa[5]== sqa[7] && sqa[7]!= ''){
        final(3,5,7)
        
    }

}
function game(id){
    let element = document.getElementById(id)
    if( turn === 'X' && element.innerHTML === ''){
        element.innerHTML = 'X'
        turn='O'
        title.innerHTML = 'O'

    }else if(turn === 'O' && element.innerHTML === ''){
        element.innerHTML = 'O'
        turn ='X'
        title.innerHTML = 'X'

    }
    winner();
}