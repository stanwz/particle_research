let fs = require('fs');

let str = '';

let i = 0;

readFile(i);

function readFile(i) {
    fs.readFile('./'+ i +'.js', function(err, data){
        if (err) {
            throw err;
        }
        str += data;
        if (i < 62) {
            str += ',\n';
            readFile(i+1);
        } else {
            writeBundle();
        }
    });
}

function writeBundle() {
    let contents = 'var modules = [\n'+ str + '];\n\n';

    contents += `
!function (modules ) {
    /**
     * @param {number} moduleId
     * @return {?}
     */
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = true, module.exports;
    }

    var installedModules = {};
    /** @type {!Array} */
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    /**
     * @param {!Object} type
     * @param {string} name
     * @param {!Function} arg
     * @return {undefined}
     */
    __webpack_require__.d = function (type, name, arg) {
        if (!__webpack_require__.o(type, name)) {
            Object.defineProperty(type, name, {
                configurable: false,
                enumerable: true,
                get: arg
            });
        }
    };
    /**
     * @param {!Object} x
     * @return {?}
     */
    __webpack_require__.n = function (x) {
        /** @type {function(): ?} */
        var n = x && x.__esModule ? function () {
            return x.default;
        } : function () {
            return x;
        };
        return __webpack_require__.d(n, "a", n), n;
    };
    /**
     * @param {(Object|string)} e
     * @param {!Object} input
     * @return {?}
     */
    __webpack_require__.o = function (e, input) {
        return Object.prototype.hasOwnProperty.call(e, input);
    };
    /** @type {string} */
    __webpack_require__.p = "/dist";
    __webpack_require__(__webpack_require__.s = 10);
}
(modules);
    `;

    fs.writeFile('..\\dist\\bundle.js', contents, function (err) {
        if (err) return console.log(err);
    });
}