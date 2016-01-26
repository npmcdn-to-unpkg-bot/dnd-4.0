var game = {

  dm: "DM",
  player: "Player",

  init: function() {
    $(document).ready(function() {

      game.displayMessage(game.dm, "Welcome!  Enter a command")

      //clicking submit to send command
      $("#enterButton").on("click", function(event) {
        game.sendCommand();
        $("#inputBox").val("");
      });

      //pressing enter to send command
      $('#inputForm').keypress(function (event) {
        if (event.which == 13) {
          game.sendCommand();
          $("#inputBox").val("");
          return false;
        }
      });
    });
  },

  sendCommand: function() {
    var msg = $("#inputBox").val();
    game.displayMessage(game.player, msg);
    game.processCommand(msg);
  },

  displayMessage: function(character, message) {
    var $newMsg = $("<div class=\"playerCommand\"><p><span class=\"username\">"
                  +character+": </span>"+message+"</p></div>");
    $("#gameArea").prepend($newMsg);
  },

  processCommand: function(msg) {
    if(msg.substring(0,6)==="rename") {
      game.displayMessage(game.dm, "Okay, " + msg.substring(7));
      game.player = msg.substring(7);
      return;
    }
    msg=msg.toLowerCase();
    if(msg==="hello"||msg==="hey"||msg==="hi") {
      game.displayMessage(game.dm, "Greetings "+game.player+"!")
      return;
    }
    else {
      game.displayMessage(game.dm, "Not a valid command.")
      return;
    }
  }
};

game.init();