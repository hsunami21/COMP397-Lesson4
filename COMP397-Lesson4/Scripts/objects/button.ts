﻿module objects {
    // BUTTON CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Button extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(pathString: string, x: number, y: number) {
            super(assets.getResult(pathString));
            this.x = x;
            this.y = y;

            this.width = 150;
            this.height = 50;
           
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
        }

        // PRIVATE METHODS
        // EVENT HANDLERS FOR MOUSEOVER AND MOUSEOUT
        overButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.7;
        }

        outButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        }
        
    }
}