let chess=8;
let board="";
for(let x=0;x<=chess;x++){
    for(let y=0;y<=chess;y++){
        if((x+y) % 2 ===0){
           board +=" "
        }else {
            board +="#"
        }
    }
    board +="\n"
}
console.log(board)