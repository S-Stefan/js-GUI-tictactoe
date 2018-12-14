$(function() {

  // ###Global variables###.
  // true represents X, false represents O.
  var currentPlayer = true;
  // If game has a winner set this to true.
  var winner = false;
  // Game win conditions.
  var winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Get player turn heading element.
  var $turnText = $(".playerTurn");
  // Get td elements Array.
  var $gridSquares = $("td");
  // Add click events listener for each square in the grid.
  for (var i = 0; i < $gridSquares.length; i++) {
    $gridSquares.eq(i).on("click", squareClicked);
  }
  // Get reset button element, and add click event listener.
  $("#reset").on("click", resetButtonClicked);

  // When a cell in the grid is clicked call this function.
  function squareClicked() {
    // Create variable to store JQuery this object.
    var clicked = $(this);
    // Update turn text.
    changeTurnText();
    // If the current player is X call placeX function and pass it the this JQuery object,
    if (currentPlayer) {
      placeX(clicked);
    } else {
      placeO(clicked);
    }
  }

  // This function handles placing an X.
  function placeX(clicked) {
    if (clicked.attr("class") != null) {
      console.log("This square is full!");
      return;
    } else {
      clicked.addClass("X");
      clicked.html("X");
      console.log(clicked.attr("class"));
      currentPlayer = false;
      checkWins();
    }
  }

  // This function handles placing an O.
  function placeO(clicked) {
    if (clicked.attr("class") != null) {
      console.log("This square is full!");
      return;
    } else {
      clicked.addClass("O");
      clicked.html("O");
      console.log(clicked.attr("class"));
      currentPlayer = true;
      checkWins();
    }
  }

  // console.log(winConditions[1][1]);
  function checkWins() {
    // for each win condition, go through the grid and check if it matches.
    // i is the current win condition we are checking.
    for (var i = 0; i < winConditions.length; i++) {
      if ($gridSquares.eq(winConditions[i][0]).html() == "X" && $gridSquares.eq(winConditions[i][1]).html() == "X" && $gridSquares.eq(winConditions[i][2]).html() == "X") {
        alert("X has won!");
      } else if ($gridSquares.eq(winConditions[i][0]).html() == "O" && $gridSquares.eq(winConditions[i][1]).html() == "O" && $gridSquares.eq(winConditions[i][2]).html() == "O") {
        alert("O has won!");
      }
    }
  }

  function changeTurnText() {
    if (!currentPlayer) {
      $turnText.html("it is X's turn");
    } else {
      $turnText.html("it is O's turn");
    }
  }

  function resetButtonClicked() {
    window.location.reload();
  }

});
