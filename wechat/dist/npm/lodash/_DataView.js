var getNative = require('./_getNative.js'),
    root = require('./_root.js');

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;
