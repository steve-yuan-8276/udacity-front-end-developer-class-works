# Sample Code of Jasmine

### 基本思路：
1. Write your tests
2. Watch them fail
3. Make them pass
4. Refactor
5. Repeat

### 基本语法：

```
describe('JavaScript addition operator', function () {
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });
});
```

### convert 测试

```
describe( "volume converter", function () {
    it("converts litres to gallons", function () {
        expect(Convert(3, "litres").to("gallons")).toEqual(0.79);
    });

    it("converts gallons to cups", function () {
        expect(Convert(2, "gallons").to("cups")).toEqual(32);
    });
});
```

### Match测试
#### toBeDefined / toBeUndefined

```
it("is defined", function () {
    var name = "Andrew";
    expect(name).toBeDefined();
})

it("is not defined", function () {
    var name;
    expect(name).toBeUndefined();
});

```

#### toBeTruthy / toBeFalsy

```
it("is true", function () {
    expect(Lib.isAWeekDay()).toBe(true);
});
it("is false", function () {
    expect(Lib.finishedQuiz).toBe(false);
});

```
#### toBeLessThan / toBeGreaterThan

```
it("is less than 10", function () {
    expect(5).toBeLessThan(10);
});
it("is greater than 10", function () {
    expect(20).toBeGreaterThan(10);
});
```
#### toMatch

```
it("outputs the right text", function () {
    expect(cart.total()).toMatch(/\$\d*.\d\d/);
});
```

#### toContain

```
it("should contain oranges", function () {
    expect(["apples", "oranges", "pears"]).toContain("oranges");
});
```

### Covering Before and After

```
describe("MyObject", function () {
    var obj = new MyObject();

    beforeEach(function () {
        obj.setState("clean");
    });

    it("changes state", function () {
        obj.setState("dirty");
        expect(obj.getState()).toEqual("dirty");
    })
    it("adds states", function () {
        obj.addState("packaged");
        expect(obj.getState()).toEqual(["clean", "packaged"]);
    })
});
```

### 异步代码测试

#### 模拟Timeout

Jasmine Clock 可以用来测试setTimeout 和setInterval 的回调操作。它使回调函数同步执行，当Clock的时间超过timer的时间，回调函数会被触发一次。这使依赖于时间的代码更加易于测试。

Jasmine Clock使用jasmine.clock().install 在需要调用timer函数的spec和suite中初始化。在执行完测试的时候，一定要卸载Clock来还原timer函数。使用jasmine.clock().tick 设置时间以使注册的回调触发。

```
describe("Jasmine Clock 测试", function() {
    var timerCallback;
 
    beforeEach(function() {
        timerCallback = jasmine.createSpy("timerCallback");
        jasmine.clock().install();
    });
 
    afterEach(function() {
        jasmine.clock().uninstall();
    });
 
    it("同步触发setTimeout", function() {
        setTimeout(function() {
            timerCallback();
        }, 100);
 
        expect(timerCallback).not.toHaveBeenCalled();
 
        jasmine.clock().tick(101);
 
        expect(timerCallback).toHaveBeenCalled();
    });
 
    it("同步触发setInterval", function() {
        setInterval(function() {
            timerCallback();
        }, 100);
 
        expect(timerCallback).not.toHaveBeenCalled();
 
        jasmine.clock().tick(101);
        expect(timerCallback.calls.count()).toEqual(1);
 
        jasmine.clock().tick(50);
        expect(timerCallback.calls.count()).toEqual(1);
 
        jasmine.clock().tick(50);
        expect(timerCallback.calls.count()).toEqual(2);
    });
});

```

#### 异步支持

Jasmine支持测试需要执行异步操作的specs，调用beforeEach , it , 和afterEach 的时候，可以带一个可选的参数done ，当spec执行完成之后需要调用done 来告诉Jasmine异步操作已经完成。默认Jasmine的超时时间是5s，可以通过全局的jasmine.DEFAULT_TIMEOUT_INTERVAL 设置。

```
describe("Jasmine 异步测试演示", function() {
    var value;
 
    beforeEach(function(done) {
        setTimeout(function() {
            value = 0;
            done();
        }, 1);
    });
 
    it("should support async execution of test preparation and expectations", function(done) {
        value++;
        expect(value).toBeGreaterThan(0);
        done();
    });
 
    describe("5秒钟", function() {
        var originalTimeout;
        beforeEach(function() {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;
        });
 
        it("takes a long time", function(done) {
            setTimeout(function() {
                done();
            }, 5000);
        });
 
        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    });
});

```







