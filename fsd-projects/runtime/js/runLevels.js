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

    function createEnemy(x, y){
      var enemy = game.createGameItem("enemy", 25); //creates an enemy game item with the enemy type and 25 health and stores in the enemy variable
      var enemyImage = draw.rect(50, 50, "red"); //creates the image of the enemy using a bitmap and stores it to the enemyImage variable
      enemyImage.x = -25; //x value horizontal offset for the enemy set left 25
      enemyImage.y = -25; //y value vertical offset for the enemy set up 25
      enemy.addChild(enemyImage); //adds the enemyImage variable as a child to the enemy object
      enemy.x = x; //set the x position of the enemy object
      enemy.y = y; //sets the y position of the enemy object
      game.addGameItem(enemy); //adds the enemy to the game

      enemy.velocityX -= 3; //sets the velocity of the x value to -3
      
      //handles when Halle collides with enemy
      enemy.onPlayerCollision = function(){
        game.changeIntegrity(-10); //reduces player health by 10
      };

      //handles when Halle shoots the enemy
      enemy.onProjectileCollision = function(){
        game.increaseScore(100); //increases player score by 100 when Halle shoots the enemy
        enemy.fadeOut(); //On projectile collision, fades out to enemy image
      };
    }

    createEnemy(400, groundY - 50);
    createEnemy(600, groundY - 50);

    function createReward(x, y){
      var reward = game.createGameItem("reward", 25); //creates an reward game item with the reward type and 25 health and stores in the reward variable
      var rewardImage = draw.rect(50, 50, "blue"); //creates the image of the reward using a bitmap and stores it to the rewardImage variable
      rewardImage.x = -25; //x value horizontal offset for the reward set left 25
      rewardImage.y = -25; //y value vertical offset for the reward set up 25
      reward.addChild(rewardImage); //adds the rewardImage variable as a child to the reward object
      reward.x = x; //set the x position of the reward object
      reward.y = y; //sets the y position of the reward object
      game.addGameItem(reward); //adds the reward to the game

      reward.velocityX -= 3; //sets the velocity of the x value to -3
      
      //handles when Halle collides with reward
      reward.onPlayerCollision = function(){
        game.changeIntegrity(10); //increases player health by 10
        reward.fadeOut(); //On projectile collision, fades out to reward image
      };
    }
  
    createReward(700, groundY - 75);

    function createLevelMarker(x, y){
      var levelMarker = game.createGameItem("levelMarker", 25); //creates an levelMarker game item with the levelMarker type and 25 health and stores in the level variable
      var levelImage = draw.rect(50, 50, "yellow"); //creates the image of the level using a bitmap and stores it to the levelImage variable
      levelImage.x = -25; //x value horizontal offset for the levelImage set left 25
      levelImage.y = -25; //y value vertical offset for the levelImage set up 25
      levelMarker.addChild(levelImage); //adds the levelImage variable as a child to the levelMarker object
      levelMarker.x = x; //set the x position of the levelMarker object
      levelMarker.y = y; //sets the y position of the levelMarker object
      game.addGameItem(levelMarker); //adds the levelMarker to the game

      levelMarker.velocityX -= 3; //sets the velocity of the x value to -3
      
      //handles when Halle collides with level
      levelMarker.onPlayerCollision = function(){
        startLevel();
        levelMarker.fadeOut(); //On projectile collision, fades out to level image
      };
    }

    createLevelMarker(1000, groundY - 75);

    function startLevel() {
      // TODO 13 goes below here

      var level = levelData[currentLevel]; //fetches the current level from the level data array and stores it in the level variable
      var levelObjects = level.gameItems; //fetches the gameItems array which is in the level variable and stores it in the levelObjects variable

      //runs through the levelObjects array
      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i]; //fetches the values in the array and sets it to the element variable

        //checks if the element type is equal to obstacle
        if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.damage);
        }
        if(element.type === "enemy"){
          createObstacle(element.x, element.y, element.damage);
        }
      }

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
