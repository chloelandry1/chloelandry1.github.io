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
    function createObstacle(x, y, damage, hitZone, image, offsetX, offsetY, rotation, scaleX, scaleY){
      var hitZoneSize = hitZone; //sets the size of the object's collision area
      var damageFromObstacle = damage; //sets the amount of damage taken after collision
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the hit zone, attaches the hit zone size, sets the damage and stores it in the variable obstacleHitZone
      obstacleHitZone.x = x; //sets the obstacle's x position
      obstacleHitZone.y = y; //sets the obstacle's y position
      game.addGameItem(obstacleHitZone); //adds the obstacle to the game
      var obstacleImage = draw.bitmap(image); //draws the obstacle image as a bitmap and stores it as an obstacle image
      obstacleHitZone.addChild(obstacleImage); //takes the obstacle image and adds it as a child to the hitzone
      obstacleImage.x = offsetX; //offsets the obstacle image's sprite horizontally relative to the hitzone
      obstacleImage.y = offsetY; //offsets the obstacle image's sprite vertically relative to the hitzone
      obstacleImage.scaleX = scaleX; //sets the horizontal scale of the obstacle
      obstacleImage.scaleY = scaleY; //sets the verticle scale of the obstacle

      obstacleHitZone.rotationalVelocity = rotation; //sets the rotational velocity of the obstacle
    }

    function createEnemy(x, y, hitZone, damage, points, offsetX, offsetY, image, scaleX, scaleY){
      var enemy = game.createGameItem("enemy", hitZone); //creates an enemy game item with the enemy type and 25 health and stores in the enemy variable
      var enemyImage = draw.bitmap(image); //draws the enemy image as a bitmap and stores it as an enemy image
      enemyImage.x = offsetX; //x value horizontal offset for the enemy set left 25
      enemyImage.y = offsetY; //y value vertical offset for the enemy set up 25
      game.addGameItem(enemy); //adds the enemy to the game
      enemy.x = x; //set the x position of the enemy object
      enemy.y = y; //sets the y position of the enemy object
      enemy.addChild(enemyImage); //adds the enemyImage variable as a child to the enemy object
      enemyImage.scaleX = scaleX; //sets the horizontal scale of the enemy
      enemyImage.scaleY = scaleY; //sets the horizontal scale of the enemy

      enemy.velocityX -= 3; //sets the velocity of the x value to -3
      
      //handles when Halle collides with enemy
      enemy.onPlayerCollision = function(){
        game.changeIntegrity(damage); //reduces player health by 10
      };

      //handles when Halle shoots the enemy
      enemy.onProjectileCollision = function(){
        game.increaseScore(points); //increases player score by 100 when Halle shoots the enemy
        enemy.fadeOut(); //On projectile collision, fades out to enemy image
      };
    }

    function createReward(x, y, image, offsetX, offsetY, health, scaleX, scaleY, hitZone, velocity){
      var reward = game.createGameItem("reward", hitZone); //creates an reward game item with the reward type and 25 health and stores in the reward variable
      var rewardImage = draw.bitmap(image); //draws the reward image as a bitmap and stores it as an reward image
      rewardImage.x = offsetX; //x value horizontal offset for the reward set left 25
      rewardImage.y = offsetY; //y value vertical offset for the reward set up 25
      game.addGameItem(reward); //adds the reward to the game
      reward.x = x; //set the x position of the reward object
      reward.y = y; //sets the y position of the reward object
      reward.addChild(rewardImage); //adds the rewardImage variable as a child to the reward object
      rewardImage.scaleX = scaleX; //sets the horizontal scale of the reward
      rewardImage.scaleY = scaleY; //sets the horizontal scale of the reward

      reward.velocityX -= velocity; //sets the velocity of the x value to -3
      
      //handles when Halle collides with reward
      reward.onPlayerCollision = function(){
        game.changeIntegrity(health); //increases player health by 10
        reward.fadeOut(); //On projectile collision, fades out to reward image
      };
    }

    function createLevelMarker(x, y, hitZone, image, offsetX, offsetY, scaleX, scaleY, velocity){
      var levelMarker = game.createGameItem("levelMarker", hitZone); //creates an levelMarker game item with the levelMarker type and 25 health and stores in the level variable
      var levelImage = draw.bitmap(image); //draws the level marker image as a bitmap and stores it as an level marker image
      levelImage.x = offsetX; //x value horizontal offset for the levelImage set left 25
      levelImage.y = offsetY; //y value vertical offset for the levelImage set up 25
      game.addGameItem(levelMarker); //adds the levelMarker to the game
      levelMarker.x = x; //set the x position of the levelMarker object
      levelMarker.y = y; //sets the y position of the levelMarker object
      levelMarker.addChild(levelImage); //adds the levelImage variable as a child to the levelMarker object
      levelImage.scaleX = scaleX; //sets the horizontal scale of the reward
      levelImage.scaleY = scaleY; //sets the horizontal scale of the reward

      levelMarker.velocityX -= velocity; //sets the velocity of the x value to -3
      
      //handles when Halle collides with level
      levelMarker.onPlayerCollision = function(){
        startLevel();
        levelMarker.fadeOut(); //On projectile collision, fades out to level image
      };
    }

    function startLevel() {
      // TODO 13 goes below here

      var level = levelData[currentLevel]; //fetches the current level from the level data array and stores it in the level variable
      var levelObjects = level.gameItems; //fetches the gameItems array which is in the level variable and stores it in the levelObjects variable

      //runs through the levelObjects array
      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i]; //fetches the values in the array and sets it to the element variable

        //checks if the element type is equal to obstacle
        if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.damage, element.hitZone, element.image, element.offsetX, element.offsetY, element.rotation, element.scaleX, element.scaleY);
        }
        if(element.type === "enemy"){
          createEnemy(element.x, element.y, element.hitZone, element.damage, element.points, element.offsetX, element.offsetY, element.image, element.scaleX, element.scaleY);
        }
        if(element.type === "reward"){
          createReward(element.x, element.y, element.image, element.offsetX, element.offsetY, element.health, element.scaleX, element.scaleY, element.hitZone, element.velocity);
        }
        if(element.type === "levelMarker"){
          createLevelMarker(element.x, element.y, element.hitZone, element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY, element.velocity);
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
