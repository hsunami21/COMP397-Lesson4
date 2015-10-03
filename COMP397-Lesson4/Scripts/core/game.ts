/// <reference path="../config/config.ts" />

/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../states/menu.ts" />


// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var scene: createjs.Container;
var stateFunction: any; // alias for current state

// GAME VARIABLES
var helloLabel: objects.Label;
var startButton: objects.Button;

function init(): void {
    console.log("Game Started...");
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counter

    state = config.MENU_STATE; // set initial state

    changeState(); // call main game function
}

// MAIN GAME LOOP
function gameLoop(event: createjs.Event): void {
    stats.begin(); // start counting

    stage.update(); // redraw/refresh stage every frame

    stats.end(); // stop counting
}

// SETUP GAME STATS
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// EVENT HANDLERS
function clickStartButton(event: createjs.MouseEvent): void {
    helloLabel.text = "Clicked";
}


// STATE MACHINE
function changeState(): void {
    // launch various scenes

    switch (state) {
        case config.MENU_STATE: 
            // show menu scene
            stateFunction = states.menu;
            break;

        case config.PLAY_STATE:
            // show play scene
            break;

        case config.OVER_STATE:
            // show game over scene
            break;
    }

    stateFunction();
}