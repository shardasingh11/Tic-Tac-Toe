let btn = document.querySelectorAll("button");
console.log(btn);
let value ="X";
let emptyarr = [];
let a=0;
let result;
for(let i=0; i<btn.length; i++){ 
    
    btn[i].addEventListener("click",(e)=>{
        // console.log(e.target);
        let index = Array.from(btn).indexOf(e.target);
        e.target.innerText = value;
       
        if(value === "X"){  
            value="O";
        }else{
            value = "X";
        }
        emptyarr[index]=e.target.innerText;
        a+=1;

        result =  checkWinnwer();
        if(a>=3 && result){
            console.log(result, "wins!");
            btn.forEach(button.removeEventListener()) 
    

            
        }  
    })
       
    if(result){
        break;
    }

}
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


