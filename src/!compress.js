const fs = require("fs");
const minjs = require('uglify-js');

const uglifyOption = {
    "mangle": true,
    "compress": {
        "sequences": true,
        "properties": true,
        "dead_code": true,
        "drop_debugger": true,
        "unsafe": false,
        "unsafe_comps": false,
        "conditionals": true,
        "comparisons": true,
        "evaluate": true,
        "booleans": true,
        "loops": true,
        "unused": true,
        "hoist_funs": true,
        "keep_fargs": true,
        "keep_fnames": false,
        "hoist_vars": false,
        "if_return": true,
        "join_vars": true,
        "collapse_vars": false,
        "reduce_vars": false,
        "cascade": true,
        "side_effects": true,
        "pure_getters": false,
        "pure_funcs": null,
        "negate_iife": false,
        "drop_console": false,
        "passes": 1,
        "global_defs": {}
    },
    "output": {
        "ascii_only": false,
        "inline_script": false,
        "max_line_len": 32000,
        "bracketize": false,
        "semicolons": true,
        "comments": false,
        "shebang": true,
        "preamble": null,
        "quote_style": 0
    }
};

['ABPlayer', 'biliplus_shield', 'CommentCoreLibrary', 'google-style-loading'].forEach(function (name) {
    console.log(name);
    fs.writeFileSync(name + ".min.js", minjs.minify(
        fs.readFileSync(name + ".js", "utf8")
        , uglifyOption).code, "utf8");
});