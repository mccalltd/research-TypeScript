'use strict';

var pkg = require('../../package.json');

function version() {
    console.log('wf v' + pkg.version);
}
exports.version = version;

function help() {
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
    ].forEach(function (line) {
        return console.log(line);
    });
}
exports.help = help;

//# sourceMappingURL=file:////Users/timmccall/dev/scratch/spike-TypeScript/lib/node/info.js.map
