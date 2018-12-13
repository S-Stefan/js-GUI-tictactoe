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
    if (clicked.attr("class") != null) {
      console.log("This square is full!");
      return;
    } else {
      clicked.addClass("X");
      clicked.html("X");
      console.log(clicked.attr("class"));
      currentPlayer = false;
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

  function checkWins() {
    for (var i = 0; i < winConditions.length; i++) {
      winConditions[i];
    }
  }

});
