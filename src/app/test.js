var Point = /** @class */ (function () {
    function Point() {
        this.draw = function () {
            console.log('draw function');
        };
        this.getDistance = function () {
            console.log('get distance');
        };
        console.log('its point constructer');
    }
    return Point;
}());
var point1 = new Point();
var point2 = new Point();
point1.x = 1;
//point1.getDistance();
console.log(point1);
console.log(point2);
