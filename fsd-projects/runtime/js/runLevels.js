var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacle(x, y, damage){
      var hitZoneSize = 25; //sets the size of the object's collision area
      var damageFromObstacle = damage; //sets the amount of damage taken after collision
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the hit zone, attaches the hit zone size, sets the damage and stores it in the variable obstacleHitZone
      obstacleHitZone.x = x; //sets the obstacle's x position
      obstacleHitZone.y = y; //sets the obstacle's y position
      game.addGameItem(obstacleHitZone); //adds the obstacle to the game
      var obstacleImage = draw.bitmap("img/sawblade.png"); //draws the obstacle image as a bitmap and stores it as an obstacle image
      obstacleHitZone.addChild(obstacleImage); //takes the obstacle image and adds it as a child to the hitzone
      obstacleImage.x = -25; //offsets the obstacle image's sprite horizontally relative to the hitzone
      obstacleImage.y = -25; //offsets the obstacle image's sprite vertically relative to the hitzone
   
      obstacleHitZone.rotationalVelocity = 10;
    }

    createObstacle(400, groundY - 110, 10);
    createObstacle(600, groundY - 110, 50);
    createObstacle(800, groundY - 25, 50);

    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 400;
    enemy.y = groundY - 50;
    game.addGameItem(enemy);

    enemy.velocityX -= 3;
    
    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-10);
    }

    enemy.onProjectileCollision = function(){
      game.increaseScore(100);
      enemy.fadeOut();
    }

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
