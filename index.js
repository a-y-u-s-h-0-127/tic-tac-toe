let click = new Audio('click.mp3');
let gameovermusic = new Audio('game over.mp3');
let turn = "x";
let gameover = false;

const changeTurn = () => {
    return turn === "x" ? "o" : "x";
}

const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 2, 6.5, 0],
        [3, 4, 5, 2, 15, 0],
        [6, 7, 8, 2, 25.8, 0],
        [0, 3, 6, -8, 15, 90],
        [1, 4, 7, 2.8, 15, 90],
        [2, 5, 8, 12.8, 15, 90],
        [0, 4, 8, 1.2, 15, 45],
        [2, 4, 6, 1.2, 15, 315]
    ]

    wins.forEach((e) => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won";
            gameover = true;
            gameovermusic.play();
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "28vw";
        }
    });
}

let boxes = document.querySelectorAll('.box');
Array.from(boxes).forEach((e) => {
    let boxtext = e.querySelector('.boxtext');
    e.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            boxtext.classList.add(turn);
            turn = changeTurn();
            click.play();
            checkwin();
            if (!gameover) {
                document.querySelector('.info').innerText = 'Turn for ' + turn.toUpperCase();
            }
        }
    });
});

resettext.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(e => {
        e.innerText = "";
    });
    turn = "x";
    gameover = false;
    document.querySelector('.info').innerText = 'Turn for ' + turn.toUpperCase();
    document.querySelector(".line").style.width = "0";

});