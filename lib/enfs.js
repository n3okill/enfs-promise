/**
 * @project enfs-promise
 * @filename enfs.js
 * @description shortcut provider for enfs modules
 * @author Joao Parreira <joaofrparreira@gmail.com>
 * @copyright Copyright(c) 2016 Joao Parreira <joaofrparreira@gmail.com>
 * @licence Creative Commons Attribution 4.0 International License
 * @createdAt Created at 18-02-2016.
 * @version 0.0.2
 */

"use strict";

const nodePath = require("path");
const enfs = require("enfspatch-promise");
const mkdirp = require("enfsmkdirp-promise");
const ensure = require("enfsensure-promise");
const copy = require("enfscopy-promise");
const move = require("enfsmove-promise");
const find = require("enfsfind-promise");
const list = require("enfslist-promise");
const compare = require("enfscompare-promise");
const rimraf = require("rimraf");


const objs = [mkdirp, ensure, copy, move, find, list, compare];

objs.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
        enfs[key] = obj[key];
    });
});

//Remove
enfs.remove = rimraf;
enfs.removeSync = rimraf.sync;
enfs.removeP = function (p, opt) {
    return new Promise((resolve, reject) => rimraf(p, opt ||  {}, (err, result) => err ? reject(err) : resolve(result)));
};


//Empty
enfs.emptyDir = function (path, callback) {
    enfs.exists(path, (err, exist) => {
        if (exist) {
            rimraf(nodePath.resolve(path) + nodePath.sep + "*", (errClear) => {
                callback(errClear || null);
            });
        } else {
            enfs.mkdirp(path, callback);
        }
    });
};

enfs.emptyDirP = function (path) {
    return new Promise((resolve, reject) => enfs.emptyDir(path, (err, result) => err ? reject(err) : resolve(result)));
};

enfs.emptyDirSync = function (path) {
    if (enfs.existsSync(path)) {
        return rimraf.sync(nodePath.resolve(path) + nodePath.sep + "*");
    } else {
        return enfs.mkdirpSync(path);
    }
};


module.exports = enfs;
