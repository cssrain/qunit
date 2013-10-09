# JavaScript 单元测试工具 —— QUnit #
## QUnit简介 ##
- 出自jQuery团队.之前是专为jQuery.js做测试的，最初名字叫testrunner.后来改名为QUnit
- 它是个强大简单易用的JavaScript测试框架。jQuery, jQuery UI, jQuery Mobile都是使用它做单元测试的


## 为什么JavaScript需要单元测试 ##
由于存在浏览器解析环境、用户操作习惯等差异，前端程序的许多问题是无法捕捉或重现的，现在前端程序的测试多是黑盒测试，即靠点击点击点击来寻找程序bug。这种方式既费时费力，又无法保证测试的覆盖面。

同时，前端逻辑和交互越来越复杂，和其他编程语言一样，一个函数，一个模块，在修改bug或添加新功能的过程中，很容易就产生新的bug，或使老的bug复活。这种情况下，反复进行黑盒测试，其工作量和测试质量是可想而知的。

此外，浏览器兼容性测试是前端程序测试的重要一环，在多个浏览器之间测试前端程序，上面说的工作量就会成n倍的增加。

## 为什么我们的前端程序如此脆弱？##
就是因为没用单元测试。。

假如使用了单元测试，上边的问题就变得很容易了，当然前提是你要花时间去研究和编写测试用例。

根据函数或模块的源代码，编写出包含各种情况的测试用例，每次解决bug或添加新功能，都随时更新这个用例然后进行测试，很容易就找出新bug和“复活”的老bug。

测试兼容性，只需要在不同的浏览器中分别运行这个测试，问题就一目了然了。

也许白盒比黑盒要多费几倍的脑子，但想想我们那脆弱的程序，想想那些随时冒出来的烦人的老bug，费点脑子，值了！

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

## ok()和equal() ##
前面的测试案例中使用了他们。

状态判断：ok( state, [message] ) 是QUnit中最常用的一个判断函数，只能判断true和false。

相等判断：equal( actual, expected, [message] )
还有更多方法：http://api.qunitjs.com/category/assert/

## 异步测试
















