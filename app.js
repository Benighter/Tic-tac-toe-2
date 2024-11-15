let cell = document.querySelectorAll(".cell");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let winningCombo = [
  //horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonals
  [0, 4, 8],
  [2, 4, 6],
];

cell.forEach((cell) => {
    cell.addEventListener("click", function () {
      let index = cell.getAttribute("data-index");
      if (gameBoard[index] === "" && gameActive) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
        
        setTimeout(() => {
          if (checkWins()) {
            gameActive = false;
            alert(`Player ${currentPlayer} wins!!!`);
            return;
          }
  
          if (!gameBoard.includes("")) {
            gameActive = false;
            alert("It's a draw!!!");
            return;
          }
  
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }, 10);
      }
    });
  });

  function checkWins() {
    for (const combo of winningCombo) {
      const [a, b, c] = combo;
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return true;
      }
    }
    return false;
  }
  
  function restart() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    cell.forEach((cell) => {
      cell.textContent = "";
      cell.className = "cell"; 
    });
  }
