$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 625, 200, 25, "#964B00");
    createPlatform(500, 525, 400, 25, "#964B00");
    createPlatform(200, 400, 400, 25, "#964B00");
    createPlatform(600, 260, 400, 25, "#964B00");
    createPlatform(100, 175, 300, 25, "#964B00");
    createPlatform(1100, 120, 300, 25, "#964B00");
    createPlatform(1100, 325, 200, 25, "#964B00");



    // TODO 3 - Create Collectables
    createCollectable("apple", 375, 550, .1, .5);
    createCollectable("apple", 225, 125, .1, .5);
    createCollectable("apple", 1175, 275, .1, .5);
    createCollectable("apple", 775, 220, .1, .5);
    createCollectable("apple", 1225, 50, .1, .5);


    
    // TODO 4 - Create Cannons
    createCannon("left", 400, 5000);
    createCannon("left", 100,1000);
    createCannon("right", 750, 5000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
