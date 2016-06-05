$(function () {
  var player = 'O';
  $('#start').click(Start);
  $('#reset').click(restart);
  var seconds = 3333;
  var timerID;
  var grid = [0, 0, 0,
              0, 0, 0,
              0, 0, 0];

  function isGameOver () {
    var whoWonTheGame = whoWon();
    if (whoWonTheGame === 'O') {
      $('#bigtit').text('X, A WINNER IS YOU');
      $('#timeDisplay').text(' ');
      $('#pad').effect('bounce', {times: 10}, 'slow');
    return 1;
    }
     else if ( whoWonTheGame === "X") {
        $('#bigtit').text("O, A WINNER IS YOU");
        $('#timeDisplay').text(' ');
        $( "#pad" ).effect( "bounce", { times: 10 }, "slow" );
        return 2;
     }
     else if ( whoWonTheGame === 3) {
        $('#bigtit').text("CAT'S GAME");
        return false;
     }
  }

  function whoWon () {
    if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0];
    if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3];
    if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6];
    if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0];
    if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1];
    if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2];
    if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0];
    if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2];
    if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] && grid[5] && grid[6] && grid[7] && grid[8]) return 3;
    return 0;
  }

  function playTurn(index) {
    if (grid[index] || isGameOver()) {
      return false;
      isGameOver();
     } else {
        grid[index] = player
        if (player === "O") player = "X"
        else player = "O"
        return true
     }
  }

  function UpdateText( ) {
     console.log("UpdateText is here")
      seconds--;
      $( "#timeDisplay" ).text("Time remaining: " + seconds);
      if (seconds === 0) {
        restart();
        alert("TIME OVER");
     }
  }

  function returnTitle() {
     $("#timeDisplay").text( "START THE TIMER" );
  }

  function changeTitle () {
     $('#bigtit').text('GO GO GO');å
  }

  function FLASHER () {
     $("#bigtit").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
     $("#timeDisplay").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
     $(".section").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
     $(".button").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  }

  function Start () {
     console.log('Start Clicked');
     FLASHER();
     timerID = setInterval(UpdateText, 0.01);
     changeTitle();
   }

  function restart () {
    grid = [0, 0, 0,
            0, 0, 0,
            0, 0, 0];
    player = 'O';
    $('.section').html(' ');
    seconds = 2223;
    clearInterval(timerID);
    UpdateText();
    $('#bigtit').text('TIC TAC TOE 2: THE TACKENING');
    $('#timeDisplay').text('START THE TIMER');
  }

  $('.section').click(function () {
      var id = parseInt(this.id);
      if(playTurn(id)) {
      $(this).text(player);
  }
      console.log(id);
      console.log(player);
  });

});
