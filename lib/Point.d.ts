declare class Point {
    public x: number;
    public y: number;
    constructor(x: number, y: number);
    public distance(): number;
    static origin: Point;
}
export = Point;
