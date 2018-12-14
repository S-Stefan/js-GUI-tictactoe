$(function() {

  // ###Global variables###.
  // true represents X, false represents O.
  var currentPlayer = true;
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

  // Get td elements Array.
  var $gridSquares = $("td");
  // Add click events listener for each square in the grid.
  for (var i = 0; i < $gridSquares.length; i++) {
    $gridSquares.eq(i).on("click", squareClicked);
  }

  // When a cell in the grid is clicked call this function.
  function squareClicked() {
    // Create variable to store JQuery this object.
    var clicked = $(this);

    // If the current player is X call placeX function and pass it the this JQuery object,
    if (currentPlayer) {
      placeX(clicked);
    } else {
      placeO(clicked);
    }
  }

  // This function handles placing an X.
  function placeX(clicked) {
    checkWins();
    if (clicked.attr("class") != null) {
      console.log("This square is full!");
      return;
    } else {
      clicked.addClass("X");
      clicked.html("X");
      console.log(clicked.attr("class"));
      currentPlayer = false;

      // console.log($gridSquares.eq(winConditions[0][0]).html());
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
    }
  }

  // console.log(winConditions[1][1]);
  function checkWins() {
    // for each win condition, go through the grid and check if it matches.
    // i is the current win condition we are checking.
    // j is the number
    for (var i = 0; i < winConditions.length; i++) {
      for (var j = 0; j < 3; j++) {
        if ($gridSquares.eq(winConditions[i][j]).html() == "X") {
          console.log("X has won!");
        } else if ($gridSquares.eq(winConditions[i][j]).html() == "O") {
          console.log("O has won!");
        } else {
          console.log("Keep going");
        }
      }
    }
  }

});
