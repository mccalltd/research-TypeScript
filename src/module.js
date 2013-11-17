define(["require", "exports"], function(require, exports) {
    var foo = 'foo';
    var bar = 'bar';

    function subtract(a, b) {
        return a - b;
    }

    function add(a, b) {
        return a + b;
    }

    var pub = {
        foo: foo,
        add: add
    };

    
    return pub;
});
//# sourceMappingURL=module.js.map
