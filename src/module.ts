var foo = 'foo';
var bar = 'bar';

function subtract(a: number, b: number) {
    return a - b;
}

function add(a: number, b: number) {
    return a + b;
}

var pub = {
    foo: foo,
    add: add
};

export = pub;