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








