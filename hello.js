#!/usr/bin/env node

var fs = require('fs');

var outfile = "hello.txt";

var out = "First node program.\n";

fs.writeFileSync(outfile, out);

console.log("Script:" + __filename + "\nwrote:" + out + "to: " + outfile);


