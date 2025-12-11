(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var 
        _ = window._,
        draw = window.opspark.draw;
    
    window.opspark.makeGround = function(app) {
        var ground;
        
        ground = new createjs.Container();
        ground.resize = resize;
        render();
        
        app.addResizeable(ground);
        ground.y = (canvas.height - ground.getBounds().height) / 2;
        app.view.addChild(ground);
        
        function render() {
            ground.removeAllChildren();
            ground.x = 0; //sets the X position of the ground
            ground.y = 0; //sets the Y position of the ground
            ground.scaleX = 9; //sets the X scale of the ground
            ground.scaleY = 2.25; //sets the Y scale of the ground
            ground.addChild(draw.bitmap("img/forestGround.png")); //creates a bitmap using the forestGround image and adds it to the ground object

        }
        
        function resize(argument) {
            render();
        }

        app.ground = ground;
        
        return ground;
    };
}(window));