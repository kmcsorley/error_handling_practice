
QUnit.test("getAreaCode test for valid number.", function(assert){
    var num = "(916) 412-1158";
    var result = getAreaCode(num);
    assert.deepEqual("916", result, "Valid area code - passed test.");
});


QUnit.test("getAreaCode error test - missing (", function(assert){
    assert.throws(function(){
        getAreaCode("916) 412-1158");
    }, "An error was thrown: Missing (.");
});

QUnit.test("getAreaCode error test - missing )", function(assert){
    assert.throws(function(){
        getAreaCode("(916 412-1158");
    }, "An error was thrown: Missing ).");
});

QUnit.test("getAreaCode error test - Not a Number", function(assert){
    assert.throws(function(){
        getAreaCode("(abc) 412-1158");
    }, "An error was thrown: NaN");
});
