// accessing html elements
const prevOPrnd = document.querySelector('[data-previousoprnd]');
const curntOprnd = document.querySelector('[data-currentoprnd]');
const number =  document.querySelectorAll('[data-number]');
const operator = document.querySelectorAll('[data-operator]');
const del = document.querySelector('[data-delete]');
const clear = document.querySelector('[data-reset]');


//calculator class

class Calculator{
    constructor(previousOperand,currentOperend){
        this.previousOperand = previousOperand;
        this.currentOperend = currentOperend;
        this.reset();
    }
    appendNum(num){
        
        //concatinate numbers
        
        if(num === '.' && !this.currentOperend.includes('.')){
            
            return this.currentOperend = this.currentOperend.toString() +  num.toString()
            
        }
        if(num !== '.'){
            this.currentOperend = this.currentOperend.toString() +  num.toString()
        }
    }
    
    update_display(){
        //display numbers 
        this.current = curntOprnd;
        this.previous = prevOPrnd;
        
      
        this.previous.innerHTML = `${this.previousOperand} ${this.operation}`; 
        this.current.innerHTML =this.currentOperend;

        if(this.operation === '='){
        this.reset()
        }
         
    }

    delNum(screen){
        //delete number from right
        let b = screen.innerHTML.slice(0,screen.innerHTML.length-1);
        screen.innerHTML = b;
        this.currentOperend = b;
    }
    reset(){
        //reset everything
        this.previousOperand = '';
        this.currentOperend  = '';
        this.operation = '';
        // this.update_display()
        console.log('reset');
    }
    chooseOperation(operator){

        //choose operation
        
        
        if(this.previousOperand !== '' && this.operation !== ''){
            this.compute()
            
            console.log(this.previousOperand);
        }else  {
            this.previousOperand = this.currentOperend;
        }
        this.operation = operator
        this.currentOperend = '' 
        this.update_display()
       
        }

    compute(){
        //compute operation
        let result = 0
        
        switch (this.operation) {
            case '+': result = parseFloat(this.previousOperand) + parseFloat(this.currentOperend);
                
                break;
                
            case '-': result = parseFloat(this.previousOperand) - parseFloat(this.currentOperend);
                
                break;
                
            case 'x': result = parseFloat(this.previousOperand) * parseFloat(this.currentOperend);
                
                break;
                
            case '/': result = parseFloat(this.previousOperand) / parseFloat(this.currentOperend);
                
                break;
                
        
           
        }
        this.previousOperand = result
        this.update_display();
        
    }

  
}



//creat an object from class

let calculator  = new Calculator(prevOPrnd,curntOprnd)

//event listners
// concatination of numbers

number.forEach(button => button.addEventListener('click', ()=>{
     calculator.appendNum(button.innerHTML);
     calculator.update_display(curntOprnd);
}));

//delet a number

del.addEventListener('click', ()=>{calculator.delNum(curntOprnd)})

//selecting operation

operator.forEach(oper => oper.addEventListener('click',()=>{
    calculator.chooseOperation(oper.innerHTML);
}) )

// reset

clear.addEventListener('click', ()=>{calculator.reset()})

