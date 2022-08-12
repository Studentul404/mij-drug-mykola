// Массив хранящий данные о положениии фигур в игре
var MathBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
// пременная отвечающая за html обьект на странице
var htmlBoard = document.querySelector("#game");
// событие по загрзке страници
document.body.addEventListener(onload, draw());


function gameClick(x, y) {
    // если клетка незанята
    if (MathBoard[x][y] == 0) {
        // ставим крестик
        MathBoard[x][y] = 1;
        draw();
        // Ход компьютера
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
    // Проверка победы по горизонтальным линиям

    // Список очков на линии
    var Chess = [0, 0, 0];
    for (let indexY = 0; indexY < 3; indexY++) {
        for (let indexX = 0; indexX < 3; indexX++) {
            // Если в клетке есть искомое занчение
            if (MathBoard[indexY][indexX] == elem) {
                // добавление в массив
                Chess[indexY]++;
            }
        }
    }
    // есть ли победа одной из линий?
    var win = Chess.indexOf(3, 0);
    return win;
}

function GetWinDiagonal2(elem) {
    // стартовые позициии отчета
    let indexX = 3;
    let indexY = -1;
    // количество клеток
    var Chess = 0;
    // Пока х не равно ноль
    while (indexX != 0) {
        // Сдвигаемя влево и вниз 
        indexX--;
        indexY++;
        // Проверка на искомый елемент
        if (MathBoard[indexX][indexY] == elem) {
            Chess++;
        }
    }
    // проверка 
    var win = Chess == 3 ? 1 : -1;
    return win;
}

function GetWinDiagonal1(elem) {
    // Позиция в массиве
    let indexX = -1;
    var Chess = 0;
    while (indexX != 2) {
        // Проходимя по массиву
        indexX++;
        if (MathBoard[indexX][indexX] == elem) {
            // если есть елеменет прибавляем к количеству клеток 1
            Chess++;
        }
    }
    // Проверка на победу
    // В сучае победы возвращаем 1, иначе -1
    var win = Chess == 3 ? 1 : -1
    return win;
}

function GetWinVertical(elem) {
    // Список фишек на столбцах
    var Chess = [0, 0, 0];
    // Проходимся по столбцам
    for (let indexY = 0; indexY < 3; indexY++) {
        for (let indexX = 0; indexX < 3; indexX++) {
            // Если есть елемент - увеличиваем 
            if (MathBoard[indexX][indexY] == elem) {
                Chess[indexY]++;
            }
        }
    }
    // Если есть победа возвращаем ряд где есть победа
    // иначе -1
    var win = Chess.indexOf(3, 0);
    return win;
}

function AImove() {
    // Получаем рандомную позицию
    idX = mathRandomInt(0, 2);
    idY = mathRandomInt(0, 2);
    // Получаем соотвествуйщюю клетку
    cell = MathBoard[idX][idY];
    // если клетка пустая
    if (cell == 0) {
        // ходим
        MathBoard[idX][idY] = 2;
        // рисуем
        draw();
    } else {
        // если занятая - повторяем
        AImove();
    }

}

function whoseCell(x, y) {
    // полчаем клетку по указанной в аргументах позици
    let cell = MathBoard[x][y];
    // проверка
    switch (cell) {
        case 1:
            // если клетку занял человек - ставми Х
            return "X";
            break;
        case 2:
            // если клетку занял компьютер - ставим О
            return "O";
            break;
            // если клетка не занята - оставляем пустой
        case 0:
            return ' ';
            break;
        default:
            return ' ';
    }
}

function draw() {
    // Обновление html в соотвествии с массивом MathBoard через 2 цикла
    htmlBoard.innerHTML = "";
    for (let indexX = 0; indexX < 3; indexX++) {
        for (let indexY = 0; indexY < 3; indexY++) {
            // добавляем кнопку
            htmlBoard.innerHTML += '<button class="gameButton" onclick="gameClick(' + indexX + ',' + indexY + ')">' + whoseCell(indexX, indexY) + '</button>';
        }
    }
    // Проверка победителя
    WhoIsWinner();
}

function WhoIsWinner() {
    // Две бул переменные отвечающие за побед пк и игрока соотвественноо
    var ComputerWon = (GetWinVertical(2) > -1 || GetWinHorizontal(2) > -1 || GetWinDiagonal1(2) > -1 || GetWinDiagonal2(2) > -1);
    var PlayerWon = (GetWinVertical(1) > -1 || GetWinHorizontal(1) > -1 || GetWinDiagonal1(1) > -1 || GetWinDiagonal2(1) > -1);
    // тут все очевидно
    if (ComputerWon) {
        alert("Микола - переможець!");
        location.reload();
    } else {
        if (PlayerWon) {
            alert("Ти - переможець!");
            location.reload();
        } else {
            // сначала пустых клеток 9
            var zeros = 9;
            // Идем по массиву
            for (let indexY = 0; indexY < 3; indexY++) {
                for (let indexX = 0; indexX < 3; indexX++) {
                    // если клетка занята отнимаем пустоту
                    if (MathBoard[indexY][indexX] != 0) {
                        zeros--;
                    }
                }
            }
            // Если есть есть пустота - возвращаем
            if (zeros > 0) {
                return;
            } else
            // если нет побед и пустот - возвращаем нечью
            {
                alert("Нічия!");
                location.reload();
            }
        }
    }
}