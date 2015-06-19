//Parse.initialize
Parse.initialize("MmQaGDgMBxXakwnSDBKPUWl82KARQyLnipTrcbDd", "zjAjR8OO3xSIkyV1UZkRYgqCxCFqowVQlYsdrsVX");
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  //alert("yay! it worked");
});