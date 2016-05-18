// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.16-7-c-ii-18
description: >
    Array.prototype.every - 'this' of 'callbackfn' is an String object
    when T is not an object (T is a string primitive)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return 'hello' === this.valueOf();
        }

        var obj = { 0: 11, length: 2 };

        return Array.prototype.every.call(obj, callbackfn, "hello") && accessed;
    }
runTestCase(testcase);
