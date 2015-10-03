﻿module states {
    // MENU CLASS
    export class Menu extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _helloLabel: objects.Label;
        _startButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            // hello label
            this._helloLabel = new objects.Label("Game Start", "60px Consolas", "#000000", 320, 240);
            this.addChild(this._helloLabel); // add label to the stage

            // start button
            this._startButton = new objects.Button("StartButton", 320, 340);
            this._startButton.on("click", this._clickStartButton, this); // click, mouseover, mouseout = already created enumerations
            this.addChild(this._startButton);

            stage.addChild(this);
        }

        public update(): void {

        }

        // PRIVATE METHODS
        // EVENT HANDLERS
        private _clickStartButton(event: createjs.MouseEvent): void {
            changeState(config.PLAY_STATE);
        }
    }

}