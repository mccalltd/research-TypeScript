/// <reference path="../../d.ts/DefinitelyTyped/node/node.d.ts" />
'use strict';

var pkg: any = require('../../package.json');

export function version() {
    console.log('wf v' + pkg.version);
}

export function help() {
    [
        'wf: ' + pkg.description + ' (v' + pkg.version + ')',
        '',
        'Usage: wf [option]',
        '       wf <command>',
        '',
        'Options:',
        '  -h, --help       print help',
        '  -v, --version    print wf version',
        '',
        'Commands:',
        '',
        'For more information: ' + pkg.homepage
    ].forEach(line => console.log(line));
}


