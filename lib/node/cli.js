'use strict';

var nopt = require('nopt');
var info = require('./info');

function run(argv) {
    var types = { help: Boolean, version: Boolean };
    var shorthands = { 'h': ['--help'], 'v': ['--version'] };
    var args = argv || process.argv;

    var options = nopt(types, shorthands, args);
    var command = options.argv.remain[0];

    switch (command) {
        case undefined:
            if (options.version) {
                info.version();
            } else {
                info.help();
            }
            break;

        default:
            console.error('Unknown command: %s', command);
    }
}
exports.run = run;

//# sourceMappingURL=file:////Users/timmccall/dev/scratch/spike-TypeScript/lib/node/cli.js.map
