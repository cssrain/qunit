test("测试一个函数", function() {
    var values = {
        name: "World"
    };
    equal( format("Hello, {name}", values), "Hello, World", "单个匹配" );
    equal( format("Hello, {name}, how is {name} today?", values), "Hello, World, how is World today?", "多个匹配" );
});