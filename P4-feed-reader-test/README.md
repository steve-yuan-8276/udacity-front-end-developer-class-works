# 项目预览

在这个项目中，你会得到一个基于 web 的用来读取 rss 源的应用。最开始的这个项目的开发者意识到了测试的价值，他们也已经把 [Jasmine](http://jasmine.github.io) 包含在了项目之中，而且甚至已经开始写他们第一个测试用例。但是不幸的是，他们决定去创建一个他们自己的公司，所以我们现在拿到的是一个缺乏完整测试用例的应用，这样是你会参与到这个项目的原因。

测试文件的地址：[feedreader.js](https://github.com/steve-yuan-8276/udacity-front-end-developer-class-works/blob/master/P4-feed-reader-test/jasmine/spec/feedreader.js) 

查看[index.html](https://github.com/steve-yuan-8276/udacity-front-end-developer-class-works/blob/master/P4-feed-reader-test/index.html)，可以看到测试结果

## 如何完成这个项目
完成本项目主要用到的是jquery和jasmine，另外还涉及了一些JS、CSS基本知识、正则表达式等。具体如下：

### RSS Feeds
使用for循环把allFeeds里面的元素选出来，再对每个元素进行校验
#### 涉及知识点：
* 正则表达式
* for循环

### The menu
通过阅读index.html和style.css，在body上有一个样式“.menu-hidden”,采用transform3d的方法进行样式变换，这里默认x轴左移12em以实现隐藏效果。

#### 涉及知识点：
* [translate3d](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/translate3d)
* [em to px转化](https://www.w3schools.com/tags/ref_pxtoemconversion.asp)

### Initial Entries
写一个测试保证 loadFeed 函数被调用而且工作正常，即在 .feed 容器元素里面至少有一个 .entry 的元素toBeGreaterThan(0)。
      
#### 涉及知识点：
* beforeEach

### New Feed Selection
当用 loadFeed 函数加载一个新源的时候内容会真的改变。

#### 涉及知识点：
* beforeEach 异步处理

## 相关资源

1. [Jasmine简明教程](http://www.jianshu.com/p/a8ee7fb47512)

2. [Jasmine入门教程—web前端开发七武器](http://itindex.net/detail/18758-jasmine-web-%E5%89%8D%E7%AB%AF)

3. [Testing Your JavaScript With Jasmine](https://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229)

3.  [正则表达式在线生成工具](http://tools.jb51.net/regex/create_reg)








