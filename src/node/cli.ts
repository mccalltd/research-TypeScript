/// <reference path="../../d.ts/DefinitelyTyped/node/node.d.ts" />
'use strict';

declare module 'nopt' {
    export interface nopt {
        ()
    }
}

import nopt = require('nopt');
import info = require('./info');

export function run(argv: string[]) {
    // Setup nopt parsing.
    var types = { help: Boolean, version: Boolean };
    var shorthands = { 'h': ['--help'], 'v': ['--version'] };
    var args = argv || process.argv;
    // Parse options and command.
    var options: any = nopt(types, shorthands, args);
    var command = options.argv.remain[0];

    switch (command) {

        case undefined:
            // Check opts for version or help.
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