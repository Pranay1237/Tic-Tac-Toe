let player = "X";

const b = document.querySelectorAll('#a')
const win = document.querySelector(".winner");
const again = document.querySelector('.again');

let board = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];

again.addEventListener('click', () => {
    reset();
    enable();
});

b.forEach(function(a, index) {
    a.addEventListener('click', () => {
        if(a.innerHTML == "-")
        {
            board[parseInt(index/3)][index%3] = player;
            a.innerHTML = player;
            player == "X" ? player = "O" : player = "X";
            let c = check();
            if(c === ".") {
                win.style.display = "block";
                win.textContent = `the game is draw`;
                again.style.display = "block";
                disable();
            }
            else if(c !== "-") {
                win.style.display = "block";
                win.textContent = `winner is player-${c}`;
                again.style.display = "block";
                disable();
            }
        }
    });
});

function check() {
    if(board[0][0] == board[0][1] && board[0][1] == board[0][2]) return board[0][0];
    if(board[1][0] == board[1][1] && board[1][1] == board[1][2]) return board[1][0];
    if(board[2][0] == board[2][1] && board[2][1] == board[2][2]) return board[2][0];
    if(board[0][0] == board[1][0] && board[1][0] == board[2][0]) return board[0][0];
    if(board[0][1] == board[1][1] && board[1][1] == board[2][1]) return board[0][1];
    if(board[0][2] == board[1][2] && board[1][2] == board[2][2]) return board[0][2];
    if(board[0][0] == board[1][1] && board[1][1] == board[2][2]) return board[0][0];
    if(board[0][2] == board[1][1] && board[1][1] == board[2][0]) return board[0][2];
    if(full()) return "."
    return "-";
}

function reset() {
    b.forEach((a) => {
        a.innerHTML = "-";
    });
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            board[i][j] = "-";
        }
    }
    player = "X";
    win.style.display = "none";
    again.style.display = "none";
}

function full() {
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            if(board[i][j] == "-") return false;
        }
    }
    return true;
}

function disable() {
    b.forEach((a) => {
        a.disabled = true;
    });
}

function enable() {
    b.forEach((a) => {
        a.disabled = false;
    });
}