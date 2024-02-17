let btn = document.querySelectorAll(".box");
let Reset = document.querySelector(".reset");
let innerContainer = document.querySelector(".container");
let declarewin = document.createElement("h2");
console.log(Reset);




console.log(btn);
let value ="X";
let emptyarr = [];
let result=null;
let temp=0;

starterCode();

function clickHandler(e){
    let index = Array.from(btn).indexOf(e.target);
        e.target.innerText = value;
       
        if(value === "X"){  
            value="O";
        }else{
            value = "X";
        }
        emptyarr[index]=e.target.innerText;
        temp++;

        result =  checkWinnwer();
        if(result){
           
            declarewin.innerText = `${result } is Winner!`;
            document.querySelector(".row1").before(declarewin);

            console.log(result, "is Winner!!");
            btn.forEach(button => button.removeEventListener('click', clickHandler));
        
        }
        else if(temp==9 && (result==null || result == false)){
            // console.log("No one is winner!!");
            declarewin.innerText = `No one is Winner!`;
            document.querySelector(".row1").before(declarewin);
        }
       
          
}


//  Execution start from here
// for(let i=0; i<btn.length; i++){ 
        
//     btn[i].addEventListener("click",clickHandler);
// }
function starterCode(){
    for(let i=0; i<btn.length; i++){ 
        
        btn[i].addEventListener("click",clickHandler);
        // console.log(i);
    }
}

//    check winner

function checkWinnwer(){
    let winner = false;
    if((emptyarr[0]==emptyarr[1]) && (emptyarr[1]==emptyarr[2]) ||
       (emptyarr[0]==emptyarr[3]) && (emptyarr[3]==emptyarr[6]) ||
       (emptyarr[0]==emptyarr[4]) && (emptyarr[4]==emptyarr[8])
    ){
       
        winner=emptyarr[0];
    } 
    else if((emptyarr[1]==emptyarr[4]) && (emptyarr[4]==emptyarr[7])){
        winner=emptyarr[1];
    }
    else if((emptyarr[2]==emptyarr[5]) && (emptyarr[5]==emptyarr[8]) ||
            (emptyarr[2]==emptyarr[4]) && (emptyarr[4]==emptyarr[6])
    ){
        winner=emptyarr[2];
    }
    else if((emptyarr[3]==emptyarr[4]) && (emptyarr[4]==emptyarr[5])){
        winner=emptyarr[3];
    }
    else if((emptyarr[6]==emptyarr[7]) && (emptyarr[7]==emptyarr[8])){
        winner=emptyarr[6];
    }
    return winner;
}
// for(let i=0; i<emptyarr.length; i++){
//     console.log(emptyarr[i]);
// }


    //   Reset the tic tac toe
    Reset.addEventListener("click",()=>{
        innerContainer.removeChild(declarewin);
        console.log(emptyarr);
        for(let buttons of btn){
            // console.log(btn);
            buttons.innerText='';
            // console.log(emp);
            emptyarr = [];
        }
        console.log(emptyarr);
        
        // Reset.innerText="Reset";
         value ="X";
        //  let emptyarr = [];
         result=null;
         temp=0;
        starterCode();
    }); 


 