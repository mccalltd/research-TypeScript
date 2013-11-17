/// <reference path="../d.ts/DefinitelyTyped/jasmine/jasmine.d.ts" />
define(["require", "exports", '../src/Point'], function(require, exports, __Point__) {
    var Point = __Point__;

    describe('Point', function () {
        it('should have origin at (0, 0)', function () {
            expect(Point.origin).toEqual({ x: 0, y: 0 });
        });

        it('should calculate the distance between x and y', function () {
            var x = 10;
            var y = 20;
            var point = new Point(x, y);

            expect(point.distance()).toBe(Math.sqrt(x * x + y * y));
        });
    });
});
