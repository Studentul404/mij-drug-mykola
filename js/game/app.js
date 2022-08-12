var MathBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
var htmlBoard = document.querySelector("#game");

document.body.addEventListener(onload, draw());


function gameClick(x, y) {
    console.log(x, y)
    // if you click button set click in array, or allert error
    if (MathBoard[x][y] == 0) {
        MathBoard[x][y] = 1;
        draw();
        setTimeout(AImove, 500);
    } else {
        alert("Ви не можете ходити на вже зайняту клiтинку!");
    }

}



function mathRandomInt(a, b) {
    if (a > b) {
        // Swap a and b to ensure a is smaller.
        var c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

function GetWinHorizontal(elem) {
    var Chess = [0, 0, 0];
    for (let indexY = 0; indexY < 3; indexY++) {
        for (let indexX = 0; indexX < 3; indexX++) {
            if (MathBoard[indexY][indexX] == elem) {
                Chess[indexY]++;
            }
        }
    }
    var win = Chess.indexOf(3,0);
    return win;
}

function GetWinDiagonal2(elem) {
    let indexX = 3;
    let indexY = -1;
    var Chess = [0, 0, 0];
    while (indexX != 0) {
        indexX--;
        indexY++;
        if (MathBoard[indexX][indexY] == elem) {
            Chess[indexY]++;
        } 
        console.log(indexX,indexY,"position");
    }
    console.log(Chess);
    sum = Chess[0] + Chess[1] + Chess[2];
    var win = sum == 3 ? 1 : -1 ;
    return win;
}

function GetWinDiagonal1(elem) {
    let indexX = -1;
    var Chess = [0, 0, 0];
    while (indexX != 2) {
        indexX++;
        if (MathBoard[indexX][indexX] == elem) {
            Chess[indexX]++;
        } 
    }
    sum = Chess[0] + Chess[1] + Chess[2];
    var win = sum == 3 ? 1 : -1 
    return win;
}

function GetWinVertical(elem) {
    var Chess = [0, 0, 0];
    for (let indexY = 0; indexY < 3; indexY++) {
        for (let indexX = 0; indexX < 3; indexX++) {
            if (MathBoard[indexX][indexY] == elem) {
                Chess[indexY]++;
            }
        }
    }
    var win = Chess.indexOf(3,0);
    return win;
}

function AImove() {
    idX = mathRandomInt(0,2);
    idY = mathRandomInt(0,2);
    console.log(idX,idY);
    cell = MathBoard[idX][idY];
    if(cell == 0){
        MathBoard[idX][idY] = 2;
        draw();
    } else{
        AImove();
    }
    
}

function whoseCell(x, y) {
    let cell = MathBoard[x][y];
    switch (cell) {
        case 1:
            return "X";
            break;
        case 2:
            return "O";
            break;
        case 0:
            return ' ';
            break;
        default:
            return ' ';
    }
}

function draw() {
    //Html of button = <button class="gameButton" onclick="click(x,y)"></button>
    htmlBoard.innerHTML = "";
    for (let indexX = 0; indexX < 3; indexX++) {
        for (let indexY = 0; indexY < 3; indexY++) {
            htmlBoard.innerHTML += '<button class="gameButton" onclick="gameClick(' + indexX + ',' + indexY + ')">' + whoseCell(indexX, indexY) + '</button>';
        }
    }
    WhoIsWinner();
}

function WhoIsWinner() {
    var ComputerWon = (GetWinVertical(2)  > -1 || GetWinHorizontal(2)  > -1 || GetWinDiagonal1(2) > -1 || GetWinDiagonal2(2) > -1);
    var PlayerWon = (GetWinVertical(1)  > -1 || GetWinHorizontal(1)  > -1 || GetWinDiagonal1(1) > -1 || GetWinDiagonal2(1) > -1);
    if (ComputerWon) {
        alert("Микола - переможець!");
        location.reload();
    } else {
        if (PlayerWon) {
            alert("Ти - переможець!");
            location.reload();
        } else {
            var zeros = 9;
            for (let indexY = 0; indexY < 3; indexY++) {
                for (let indexX = 0; indexX < 3; indexX++) {
                    if (MathBoard[indexY][indexX] != 0) {
                        zeros--;
                    }
                }
            }
            if (zeros > 0) {
                console.log(zeros);
                return;
            } else {
                alert("Нічия!");
                location.reload();
            }

        }
    }

}