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
          { type: "obstacle", x: 500, y: groundY -10, damage: 5, hitZone: 25, image: "img/treeBranch.png", offsetX: -55, offsetY: -25, rotation: 0, scaleX: .25, scaleY: .25},
          { type: "obstacle", x: 1100, y: groundY -10, damage: 10, hitZone: 25, image: "img/smallRock.png", offsetX: -60, offsetY: -30, rotation: 0, scaleX: .5, scaleY: .5},
          { type: "obstacle", x: 1500, y: groundY, damage: 5, hitZone: 25, image: "img/treeBranch.png", offsetX: -55, offsetY: -25, rotation: 0, scaleX: .25, scaleY: .25},
          { type: "obstacle", x: 2000, y: groundY -10, damage: 10, hitZone: 25, image: "img/smallRock.png", offsetX: -60, offsetY: -30, rotation: 0, scaleX: .5, scaleY: .5},
          { type: "enemy", x: 900, y: groundY -50, hitZone: 25, damage: -10, points: 50, offsetX: -25, offsetY: -25, image: "img/frog.png", scaleX: .25, scaleY: .25, velocity: 3},
          { type: "enemy", x: 1300, y: groundY -50, hitZone: 25, damage: -10, points: 50, offsetX: -25, offsetY: -25, image: "img/frog.png", scaleX: .25, scaleY: .25, velocity: 3},
          { type: "enemy", x: 1700, y: groundY -120, hitZone: 25, damage: -15, points: 100, offsetX: -35, offsetY: -25, image: "img/bat.png", scaleX: .25, scaleY: .25, velocity: 6},
          { type: "enemy", x: 2100, y: groundY -50, hitZone: 25, damage: -10, points: 50, offsetX: -25, offsetY: -25, image: "img/frog.png", scaleX: .25, scaleY: .25, velocity: 3},
          { type: "enemy", x: 2500, y: groundY -120, hitZone: 25, damage: -15, points: 100, offsetX: -35, offsetY: -25, image: "img/bat.png", scaleX: .25, scaleY: .25, velocity: 6},
          { type: "reward", x: 1100, y: groundY -75, image: "img/mushroom.png", offsetX: -25, offsetY: -25, health: 10, scaleX: .25, scaleY: .25, hitZone: 25, velocity: 3},
          { type: "reward", x: 2200, y: groundY -75, image: "img/berries.png", offsetX: -25, offsetY: -25, health: 5, scaleX: .25, scaleY: .25, hitZone: 25, velocity: 3},
          { type: "reward", x: 3300, y: groundY -75, image: "img/mushroom.png", offsetX: -25, offsetY: -25, health: 10, scaleX: .25, scaleY: .25, hitZone: 25, velocity: 3},
          { type: "levelMarker", x: 3600, y: groundY -75, hitZone: 25, image: "img/flashlight.png", offsetX: -35, offsetY: -45, scaleX: .35, scaleY: .35, velocity: 3},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 600, y: groundY -10, damage: 10, hitZone: 25, image: "img/treeLog.png", offsetX: -55, offsetY: -55, rotation: 0, scaleX: .5, scaleY: .5},
          { type: "obstacle", x: 1100, y: groundY -40, damage: 20, hitZone: 25, image: "img/largeRock.png", offsetX: -60, offsetY: -30, rotation: 0, scaleX: .45, scaleY: .45},
          { type: "obstacle", x: 1800, y: groundY -40, damage: 20, hitZone: 25, image: "img/largeRock.png", offsetX: -60, offsetY: -30, rotation: 0, scaleX: .45, scaleY: .45},
          { type: "enemy", x: 900, y: groundY -60, hitZone: 25, damage: -20, points: 100, offsetX: -25, offsetY: -25, image: "img/wolf.png", scaleX: .5, scaleY: .5, velocity: 4},
          { type: "enemy", x: 1300, y: groundY -50, hitZone: 25, damage: -10, points: 50, offsetX: -25, offsetY: -25, image: "img/frog.png", scaleX: .25, scaleY: .25, velocity: 3},
          { type: "enemy", x: 2000, y: groundY -120, hitZone: 25, damage: -15, points: 100, offsetX: -35, offsetY: -25, image: "img/bat.png", scaleX: .25, scaleY: .25, velocity: 6},
          { type: "enemy", x: 2100, y: groundY -60, hitZone: 25, damage: -40, points: 200, offsetX: -25, offsetY: -25, image: "img/bear.png", scaleX: .5, scaleY: .5, velocity: 2.5},
          { type: "enemy", x: 2500, y: groundY -60, hitZone: 25, damage: -20, points: 100, offsetX: -25, offsetY: -25, image: "img/wolf.png", scaleX: .5, scaleY: .5, velocity: 4},
          { type: "reward", x: 1200, y: groundY -75, image: "img/battery.png", offsetX: -25, offsetY: -25, health: 20, scaleX: .25, scaleY: .25, hitZone: 25, velocity: 3},
          { type: "reward", x: 2800, y: groundY -75, image: "img/battery.png", offsetX: -25, offsetY: -25, health: 20, scaleX: .25, scaleY: .25, hitZone: 25, velocity: 3},
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
