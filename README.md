# JavaScript 单元测试工具 —— QUnit #
## QUnit简介 ##
- 出自jQuery团队.之前是专为jQuery.js做测试的，最初名字叫testrunner.后来改名为QUnit
- 它是个强大简单易用的JavaScript测试框架。jQuery, jQuery UI, jQuery Mobile都是使用它做单元测试的

## Hello world ##
需要的资源：

- qunit.css
- qunit.js

第一个单元测试案例：
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>QUnit Example</title>
  <link rel="stylesheet" href="/resources/qunit.css">
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  <script src="/resources/qunit.js"></script>
  <script src="/resources/tests.js"></script>
</body>
</html>
```

tests.js：
```javascript
test("第一个JavaScript单元测试", function() {
    ok( 1 == "1", "Passed!" );
});
```

结果会显示：passed.

## 测试一个函数
现有一业务功能，要把字符串替换。那么我们必须写一个函数。
```javascript
function format(string, values) {
    for (var key in values) {
        string = string.replace(new RegExp("\{" + key + "}"), values[key]);
    }
    return string;
}
```
然后我们为这个函数写测试代码：
```javascript
test("测试一个函数", function() {
    var values = {
        name: "World"
    };
    equal( format("Hello, {name}", values), "Hello, World", "单个匹配" );
    equal( format("Hello, {name}, how is {name} today?", values), "Hello, World, how is World today?", "多个匹配" );
});
```
代码中会有函数运行的结果和我想要得到的结果，qunit会把最终结果显示。

运行测试代码后，显示为红色，说明没有测试通过，并结果显示为：
```html
Result:     
"Hello, World, how is {name} today?"
Diff: 	
 "Hello,  World,  how  is World {name}  today?" 
```
我们发现代码的第2个“world”没有被替换，于是我们修改format函数：
```javascript
function format(string, values) {
    for (var key in values) {
        string = string.replace(new RegExp("\{" + key + "}" , "g"), values[key]);
    }
    return string;
}
```

再次运行测试案例，则显示通过。













