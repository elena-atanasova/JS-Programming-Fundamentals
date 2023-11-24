function printChessboard(n) {
    console.log('<div class="chessboard">');
    
    for (let i = 0; i < n; i++) {
        console.log("<div>");

        for (let j = 0; j < n; j++) {
            // check if row is even number, then all the even squares are black and odd - white
            // if row is odd number, all the even squares are white and the odd ones - black
            if(i % 2 == 0) {
                let colour = j % 2 == 0 ? "black" : "white";
                console.log(`<span class="${colour}"></span>`);
            } else {
                let colour = j % 2 == 0 ? "white" : "black";
                console.log(`<span class="${colour}"></span>`);
            }
        }
        console.log("</div>");
    }
    console.log("</div>");
}

printChessboard(3);