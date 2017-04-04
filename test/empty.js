/* global afterEach, beforeEach, describe, it, before, after */
/**
 * Created by JParreir on 26-12-2015.
 */

"use strict";

const nodePath = require("path");
const nodeOs = require("os");
const enFs = require("../");
let cwd;

describe("enfs", function () {
    describe("> emptyDir", function () {
        const tmpPath = nodePath.join(nodeOs.tmpdir(), "enfs", "empty-dir");
        before(function (done) {
            cwd = process.cwd();
            enFs.mkdirp(tmpPath, function (err) {
                (err === null).should.be.equal(true);
                process.chdir(tmpPath);
                done();
            });
        });
        afterEach(function (done) {
            enFs.remove(tmpPath + nodePath.sep + "*", done);
        });
        after(function (done) {
            process.chdir(cwd);
            enFs.remove(nodePath.dirname(tmpPath), done);
        });
        describe("> async", function () {
            describe("> when directory exists and contains items", function () {
                it("should delete all items", function () {
                    return enFs.readdirP(tmpPath).then(function (files) {
                        files.length.should.be.equal(0);
                        return enFs.ensureFileP(nodePath.join(tmpPath, "file1"));
                    }).then(function () {
                        return enFs.ensureFileP(nodePath.join(tmpPath, "file2"));
                    }).then(function () {
                        return enFs.ensureDirP(nodePath.join(tmpPath, "dir1"));
                    }).then(function () {
                        return enFs.readdirP(tmpPath);
                    }).then(function (files2) {
                        files2.length.should.be.equal(3);
                        return enFs.emptyDirP(tmpPath);
                    }).then(function () {
                        return enFs.readdirP(tmpPath);
                    }).then(function (files3) {
                        files3.length.should.be.equal(0);
                    });
                });
            });
            describe("> when directory exists and contains no items", function () {
                it("should do nothing", function () {
                    return enFs.readdirP(tmpPath).then(function (files) {
                        files.length.should.be.equal(0);
                        return enFs.emptyDirP(tmpPath);
                    }).then(function () {
                        return enFs.readdirP(tmpPath);
                    }).then(function (files) {
                        files.length.should.be.equal(0);
                    });
                });
            });
            describe("> when directory does not exist", function () {
                it("should create it", function () {
                    const testDir = nodePath.join(tmpPath, "test");
                    return enFs.existStatP(testDir).then(function (exist) {
                        exist.should.be.equal(false);
                        return enFs.emptyDirP(testDir);
                    }).then(function () {
                        return enFs.existStatP(testDir);
                    }).then(function (exist2) {
                        exist2.should.be.equal(true);
                        return enFs.readdirP(testDir);
                    }).then(function (files) {
                        files.length.should.be.equal(0);
                    });
                });
            });
        });
    });
});
