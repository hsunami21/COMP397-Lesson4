var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BUTTON CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Button = (function (_super) {
        __extends(Button, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Button(pathString, x, y) {
            _super.call(this, "../../Assets/images/" + pathString + ".png");
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
        Button.prototype.overButton = function (event) {
            event.currentTarget.alpha = 0.7;
        };
        Button.prototype.outButton = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map