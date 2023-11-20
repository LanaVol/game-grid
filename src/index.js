import { Button } from "./shared/ui/button";

const container = document.querySelector(".container");

/**
 * Class representing a game board.
 */
class Board {
  /**
   * Create a game board.
   * @param {number} rows - The number of rows in the grid.
   * @param {number} cols - The number of columns in the grid.
   */
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = [];
    this.visitedCells = [];
    this.newGameBtn = new Button({
      text: "New game",
      onClick: this.startNewGame.bind(this),
    });
    this.initNewGameBtn();
    this.generateGrid();
  }

  /**
   * Initialize the new game button.
   */
  initNewGameBtn() {
    this.newGameBtn.render(document.querySelector(".button"));
  }

  /**
   * Start a new game by resetting the grid.
   */
  startNewGame() {
    container.innerHTML = "";
    this.grid = [];
    this.visitedCells = [];
    this.generateGrid();
  }

  /**
   * Generate the grid and add event listener for cell clicks.
   */
  generateGrid() {
    container.addEventListener("click", (e) => this.getValueClickedCell(e));

    const squares = [];
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    const symbols = ["♥", "✦", "♣", "♠"];

    const fragment = new DocumentFragment();

    for (let i = 0; i < this.cols * this.rows; i++) {
      const square = document.createElement("div");

      const randomSuit = suits[Math.floor(Math.random() * suits.length)];
      const randomSymbol = symbols[suits.indexOf(randomSuit)];

      square.textContent = randomSymbol;
      square.classList.add(randomSuit);
      square.setAttribute("id", i);
      squares.push(square);
      fragment.appendChild(square);
    }

    container.append(fragment);
    this.grid = squares;
  }

  /**
   * Handle the click event on a cell to initiate the removal of connected cells.
   * @param {Event} e - The click event object.
   */
  getValueClickedCell(e) {
    const currentPosition = e.target.getAttribute("id");
    this.removeConnectedCells(currentPosition, e.target.innerHTML);
  }

  /**
   * Remove connected cells with the same value recursively.
   * @param {number} position - The position of the clicked cell in the grid.
   * @param {string} targetV - The value of the clicked cell.
   */
  removeConnectedCells(position, targetV) {
    const isLeftEdge = position % this.rows === 0;
    const isRightEdge = position % this.rows === this.rows - 1;

    if (
      position < 0 ||
      position >= this.grid.length ||
      this.visitedCells.includes(position) ||
      this.grid[position].textContent !== targetV
    ) {
      return;
    }

    setTimeout(() => {
      this.grid[position].classList.add("lightGrey");
      this.grid[position].textContent = "•";
      this.visitedCells.push(position);
      if (!isLeftEdge) this.removeConnectedCells(Number(position) - 1, targetV);
      if (!isRightEdge)
        this.removeConnectedCells(Number(position) + 1, targetV);
      this.removeConnectedCells(Number(position) - this.rows, targetV);
      this.removeConnectedCells(Number(position) + this.rows, targetV);
    }, 100);
  }
}

// Create an instance of the Board class with 10 rows and 10 columns
const one = new Board(10, 10);
