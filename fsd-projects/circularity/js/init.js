var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; // variable to hold a single circle when creating circles / iterating
        var circles = []; // variable to store all circles in an array


        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
        // Code to draw a circle
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); // uses an existing draw function to draw a circle of random size, color, and location within the canvas. It stores the output of that function.
            physikz.addRandomVelocity(circle, canvas, 5, 5); // uses the physikz library to add a random velocity and direction to the circle.
            view.addChild(circle); // adds the circle as a child of view so that the circle appears on screen.
            circles.push(circle); // saves the circle to an array of circles by pushing it to the end of the array.
        }


        // TODO 3 : Call the drawCircle() function
        //drawCircle(); // adds one circle to the canvas
        //drawCircle(); // adds one circle to the canvas
        //drawCircle(); // adds one circle to the canvas
        //drawCircle(); // adds one circle to the canvas
        //drawCircle(); // adds one circle to the canvas

        // TODO 7 : Use a loop to create multiple circles
        // creates a loop that starts at the first index in the circles array an calls the drawCircles(); function, and stops at array 100, and goes up by one each time.
        for (var i = 0; i < 100; i++) {
            drawCircle();
        }



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
            //physikz.updatePosition(circles[0]); // moves the circles across the screen
            //physikz.updatePosition(circles[1]); // moves the circles across the screen
            //physikz.updatePosition(circles[2]); // moves the circles across the screen
            //physikz.updatePosition(circles[3]); // moves the circles across the screen
            //physikz.updatePosition(circles[4]); // moves the circles across the screen
            
            // TODO 5 : Call game.checkCirclePosition() on your circles
            //game.checkCirclePosition(circles[0]); // make any circles that move off the screen reappear on the other side.
            //game.checkCirclePosition(circles[1]); // make any circles that move off the screen reappear on the other side.
            //game.checkCirclePosition(circles[2]); // make any circles that move off the screen reappear on the other side.
            //game.checkCirclePosition(circles[3]); // make any circles that move off the screen reappear on the other side.
            //game.checkCirclePosition(circles[4]); // make any circles that move off the screen reappear on the other side.

            // TODO 8 / TODO 9 : Iterate over the array
            // creates a loop that starts at the first index in the circles array and calls the physikz.updatePosition(); function, which passes circles array as an argument and has i as the index and moves the circles across the screen, and calls the game.checkCirclePosition(); function, which passes circles array as an argument and has i as the index make any circles that move off the screen reappear on the other side, and stops at the last index of the circles array, and goes up by one each time.
            for(var i = 0; i < circles.length; i++){
                physikz.updatePosition(circles[i]);
                game.checkCirclePosition(circles[i]);
            }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            // if the circle has gone past the left side of the screen then place it on the right. If the x of the circle is less than a value of 0, then the x of the circle will be replaced with the x of the canvas, moving it to the other side.
            if ( circle.x < 0) {
                circle.x = canvas.width;
            }
            // if the cirlce has gone past the top of the screen then place it on the bottom. If the y of the circle is greater than than the value of the y of of the canvas, then the y of the circle will be replaced with a value of 0, moving it to the bottom.
            if ( circle.y > canvas.height ) {
                circle.y = 0;
            }
            // if the circle has gone past the bottom of the screen then place it on the top. If the y of the circle is less than a value of 0, then the y of the circle will be replaced with the y of the canvas, moving it to the top.
            if ( circle.y < 0) {
                circle.y = canvas.height;
            }
            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
