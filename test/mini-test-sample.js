//-----------------------------------------------------------------------------
// The MIT License
// 
// Copyright (c) 2010 Patrick Mueller
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//-----------------------------------------------------------------------------

var platform = require("./platform")

//-----------------------------------------------------------------------------
// test suite name
//-----------------------------------------------------------------------------
exports.name = "test-all"

//-----------------------------------------------------------------------------
// test suite set up
//-----------------------------------------------------------------------------
exports.suiteSetUp = function() {
    platform.log("in " + exports.name + ":suiteSetUp()")
}

//-----------------------------------------------------------------------------
// test suite tear down
//-----------------------------------------------------------------------------
exports.suiteTearDown = function() {
    platform.log("in " + exports.name + ":suiteTearDown()")
}

//-----------------------------------------------------------------------------
// test set up
//-----------------------------------------------------------------------------
exports.setUp = function() {
    platform.log("in " + exports.name + ":setUp()")
}

//-----------------------------------------------------------------------------
// test tear down
//-----------------------------------------------------------------------------
exports.tearDown = function() {
    platform.log("in " + exports.name + ":tearDown()")
}

//-----------------------------------------------------------------------------
// a test 
//-----------------------------------------------------------------------------
exports.testSomething = function() {
    platform.log("in " + exports.name + ":testSomething()")
//    assert.fail("something failed")    
//    throw new Error("something errored")
}

//-----------------------------------------------------------------------------
// a sub-suite
//-----------------------------------------------------------------------------
exports.testSuiteAnother = {
    name: "testSuiteAnother",
    testAnother: function() {}
}

//-----------------------------------------------------------------------------
// main entry point
//-----------------------------------------------------------------------------
tester = require("./mini-test")
assert = tester.assert

var results = tester.run(exports, console)

platform.log("")
platform.log("test results")

platform.log("")
platform.log("passed:")
results.passed.forEach(function(result) {
    platform.log("   " + result.suiteName + ":" + result.funcName)
})

platform.log("")
platform.log("failed:")
results.failed.forEach(function(result) {
    platform.log("   " + result.suiteName + ":" + result.funcName + ": " + result.message)
})

platform.log("")
platform.log("errored:")
results.errored.forEach(function(result) {
    platform.log("   " + result.suiteName + ":" + result.funcName + ": " + result.error + ": " + result.message)
})
