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

require.dir = "../"

var tester = require("test/test-all")

var results = tester.results

var html = ""

html += printResults(results.errored, "#F00", "with errors",
    function(result) { return ": " + result.error + ": " + result.message }
)

html += printResults(results.failed, "#CC0", "with failures",
    function(result) { return ": " + result.message }
)

html += printResults(results.passed, "#0A0", "that passed",
    function(result) { return ""}
)

document.getElementById("results").innerHTML = html

//-----------------------------------------------------------------------------
function printResults(resultList, color, label, resultLabeller) {
    if (!resultList.length) return ""
    
    var html = "<div style='color:" + color + "'><h2>tests " + label + "</h2>\n<ul>\n"
    
    resultList.forEach(function(result) {
        var message = result.suiteName + ":" + result.funcName
        message += resultLabeller(result)
        
        html += "<li>" + escapeHTML(message) + "\n"
    })
    
    if (!resultList.length) {
        html += "<li>none\n"
    }
    
    return html + "</ul>\n</div>\n"
}

//-----------------------------------------------------------------------------
function escapeHTML(string) {
    return string.
        replace("&", "&amp;").
        replace("<", "&lt;").
        replace(">", "&gt;")
}