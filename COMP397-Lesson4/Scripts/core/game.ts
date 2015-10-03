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
/// <reference path="../objects/scene.ts" />
/// <reference path="../states/over.ts" />
/// <reference path="../states/game.ts" />
/// <reference path="../states/menu.ts" />


// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var currentState: objects.Scene; // alias for current state
var assets: createjs.LoadQueue;

// GAME OBJECTS
var menu: states.Menu;
var game: states.Game;
var over: states.Over;

// MANIFEST OF ALL ASSETS
var manifest = [
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "NextButton", src: "../../Assets/images/NextButton.png" }, 
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "Yay", src: "../../Assets/audio/yay.ogg" }
];

function preload(): void {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
}

function init(): void {
    console.log("Game Started...");
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counter

    state = config.MENU_STATE; // set initial state

    changeState(state); // call main game function
}

// MAIN GAME LOOP
function gameLoop(event: createjs.Event): void {
    stats.begin(); // start counting

    currentState.update(); // calling State's update method
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

// STATE MACHINE
function changeState(state): void {
    // launch various scenes

    switch (state) {
        case config.MENU_STATE: 
            // show menu scene
            stage.removeAllChildren();
            menu = new states.Menu();
            currentState = menu;
            break;

        case config.PLAY_STATE:
            // show play scene
            stage.removeAllChildren();
            game = new states.Game();
            currentState = game;
            break;

        case config.OVER_STATE:
            // show game over scene
            stage.removeAllChildren();
            over = new states.Over();
            currentState = over;
            break;
    }

    currentState.start();
    console.log(currentState.numChildren);
}