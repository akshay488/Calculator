//accesing HTML elements
const buttons = document.querySelector('.btns');
const screen = document.querySelector('.screen');

//adding event listner
buttons.addEventListener("click", myFunction);

// variables for event listner
let result = 0, 
operator = '', 
operand = '', 
previousOprnd = 0,
currentOprnd = 0;

function myFunction(e){
const btnValue = e.target.innerHTML;
const attri = e.target.getAttribute('data-type');



    if (attri === 'number') {
    
        screen.innerHTML = operand += btnValue;
            
    }
    else if(attri === 'delete'){
             
            let b = screen.innerHTML.slice(0,screen.innerHTML.length-1)
            screen.innerHTML = b;
            operand = b;

    }
    else if(attri === 'reset'){
             screen.innerHTML = '';
             operand = ''; 
    }
   else if(attri=== 'operator'){
            let x = btnValue
            operator = x;
            currentOprnd = +operand;
            temp = compute(previousOprnd ,operator, currentOprnd)
            console.log(temp);
            previousOprnd = temp   
            screen.innerHTML = '';
            operand = ''; 
    }
    else {
        if(attri === 'equals'){
        console.log(previousOprnd,operator,currentOprnd);
        result = compute(temp,operator,currentOprnd)        
        screen.innerHTML = result;
        result = 0;
        previousOprnd = 0;
        currentOprnd = 0;
        temp= 0;
        operand ='';
        operator = '';
    } 
}

}

function compute(x,o,y){
    let temp =0
  if (o==='+') {
      temp= x+y;
  }
  else if(o==='-'){
      temp = x-y;
  }
  else if(o==='x'){
    temp = x*y;
}
else {
    temp = x/y;
}
 return temp
}