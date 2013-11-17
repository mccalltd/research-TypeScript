class Point {
    constructor(public x: number, public y: number) {}

    distance() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    static origin = new Point(0, 0);
}

export = Point;