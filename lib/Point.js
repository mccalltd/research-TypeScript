var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.distance = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    Point.origin = new Point(0, 0);
    return Point;
})();


module.exports = Point;

//# sourceMappingURL=file:////Users/timmccall/dev/scratch/spike-TypeScript/lib/Point.js.map
