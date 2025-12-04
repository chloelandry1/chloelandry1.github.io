var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY -110, damage: 10, hitZoneSize: 25, image: "img/spike.png", offsetX: -25, offsetY: -25, rotation: 0, scaleX: .05, scaleY: .05},
          { type: "obstacle", x: 600, y: groundY -10, damage: 20, hitZoneSize: 25, image: "img/smallRock.png", offsetX: -60, offsetY: -30, rotation: 0, scaleX: .5, scaleY: .5},
          { type: "obstacle", x: 800, y: groundY -110, damage: 30, hitZoneSize: 25, image: "img/sawblade.png", offsetX: -25, offsetY: -25, rotation: -10, scaleX: 1, scaleY: 1},
          { type: "enemy", x: 400, y: groundY -50, health: 25, damage: -10, imageX: -25, imageY: -25},
          { type: "enemy", x: 600, y: groundY -50},
          { type: "reward", x: 700, y: groundY -75},
          { type: "levelMarker", x: 1000, y: groundY -75},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 600, y: groundY -10, damage: 10, hitZoneSize: 25, image: "img/sawblade.png", offsetX: -25, offsetY: -25, rotation: -10, scaleX: 1, scaleY: 1},
          { type: "obstacle", x: 800, y: groundY -110, damage: 20, hitZoneSize: 25, image: "img/sawblade.png", offsetX: -25, offsetY: -25, rotation: -10, scaleX: 1, scaleY: 1},
          { type: "obstacle", x: 1000, y: groundY -110, damage: 30, hitZoneSize: 25, image: "img/sawblade.png", offsetX: -25, offsetY: -25, rotation: -10, scaleX: 1, scaleY: 1},
          { type: "enemy", x: 400, y: groundY -50},
          { type: "enemy", x: 600, y: groundY -50},
          { type: "reward", x: 700, y: groundY -75},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
