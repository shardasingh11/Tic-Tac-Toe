let btn = document.querySelectorAll("button");
console.log(btn);
let value = "X";
let emptyarr = [];
let a = 0;
let result;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
        let index = Array.from(btn).indexOf(e.target);
        e.target.innerText = value;

        if (value === "X") {
            value = "O";
        } else {
            value = "X";
        }
        emptyarr[index] = e.target.innerText;
        a += 1;

        result = checkWinnwer();
        if (a >= 3 && result) {
            console.log("Winner: ", result);
        }
    });
}

function checkWinnwer() {
    let winner = false;

    if (
        (emptyarr[0] == emptyarr[1] && emptyarr[1] == emptyarr[2]) ||
        (emptyarr[0] == emptyarr[3] && emptyarr[3] == emptyarr[6]) 
         )
     {
        winner = emptyarr[0];
    } 

    return winner;
}
