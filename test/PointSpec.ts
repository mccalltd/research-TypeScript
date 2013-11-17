/// <reference path="../d.ts/DefinitelyTyped/jasmine/jasmine.d.ts" />

import Point = require('../src/Point');

describe('Point', () => {

    it('should have origin at (0, 0)', () => {
        expect(Point.origin).toEqual({ x: 0, y: 0 });
    });

    it('should calculate the distance between x and y', () => {
        var x = 10;
        var y = 20;
        var point = new Point(x, y);

        expect(point.distance()).toBe(Math.sqrt(x * x + y * y));
    });
});