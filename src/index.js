define(["require", "exports", './Point'], function(require, exports, __Point__) {
    var Point = __Point__;

    var p = new Point(10, 20);

    function x() {
        var dist = 10;
    }

    console.log(Point.origin);
    console.log(p.distance());
});
