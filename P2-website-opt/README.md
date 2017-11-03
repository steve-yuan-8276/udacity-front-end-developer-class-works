## 网站性能优化项目

你要做的是尽可能优化这个在线项目的速度。注意，请应用你之前在[网站性能优化课程](https://cn.udacity.com/course/website-performance-optimization--ud884/)中学习的技术来优化关键渲染路径并使这个页面尽可能快的渲染。

开始前，请导出这个代码库并检查代码。

### Part 1: 优化 index.html 的 PageSpeed Insights 得分

#### 项目准备

##### 创建Repository

##### 配置ngrok
1.运行一个本地服务器
```bash
  $> cd /你的工程目录
  $> python -m SimpleHTTPServer 8080
```
2.安装ngrok
- Start by downloading ngrok.
- Install your authtoken
- Create your first secure tunnel
```
./ngrok http 8080
```
**复制URL到浏览器，检查是否能打开**
3.访问PageSpeed Insights，获取改进意见，修改完善index.html

##### 安装webq工具
01. 安装
02. 安装Xcode，App Store直接下载安装
03. 安装macport
[下载地址：](https://distfiles.macports.org/MacPorts/)
**WARNING:)**
- 注意选择支持本机的安装包，因为我的系统是machighSierra，所以选择MacPorts-2.4.2-10.13-HighSierra.pkg

- 打开终端，输入 port，正确显示版本号说明安装成功。

- Update MacPorts： 用以下命令行sudo port selfupdate

1. Install libwebp:
```
 sudo port install webp
```

2. 使用
- Images to the WebP Format
```
cwebp -q 80 image.png -o image.webp
```

More  instruction, check [ducumentation](https://developers.google.com/speed/webp/docs/cwebp)

- WebP Format to Images
```
dwebp image.webp -o image.png
```
More  instruction, check [ducumentation](https://developers.google.com/speed/webp/docs/dwebp)

##### 安装node.js 和 gulp
 
[gulp使用教程](https://github.com/PARADISELIN/learn-gulp)

#### 优化措施
- Inline CSS
- css使用media query
- 所有JS文件异步 async
- 图片本地化
- 配图转为成webq格式
- 移动main.js到body的末端


#### Part 2: 优化 pizza.html 的 FPS（每秒帧数）

你需要编辑 views/js/main.js 来优化 views/pizza.html，直到这个网页的 FPS 达到或超过 60fps。你会在 main.js 中找到一些对此有帮助的注释。

你可以在 Chrome 开发者工具帮助中找到关于 FPS 计数器和 HUD 显示的有用信息。[Chrome 开发者工具帮助](https://developer.chrome.com/devtools/docs/tips-and-tricks).

##### 优化措施
1. 用getElementById()替换querySelector()；getElementsByClassName()替代querySelectorAll()
2. 优化function changePizzaSizes(size)：把newWidths单独提出来，优化函数内的for循环，避免因为循环导致layout重新布局。
3. 优化function updatePositions()：
- 把scrollTop作为变量单提出来，这样可以避免由于for循环导致的layout重复布局。
- 把phasep变量单提出来，这样可以避免由于for循环导致的layout重复布局。
- 设置一个变量newX，加入限定条件，只计算window之内的，降低layout压力
- 使用transform: translate3d()替代left。
- 调整pizza.png为100px * 77px
- 定义elem.basicWidth初始值
- elem.style.left定义初始值

### 一些关于优化的提示与诀窍
* [web 性能优化](https://developers.google.com/web/fundamentals/performance/ "web 性能")
* [分析关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "分析关键渲染路径")
* [优化关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "优化关键渲染路径！")
* [避免 CSS 渲染阻塞](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "css渲染阻塞")
* [优化 JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [通过 Navigation Timing 进行检测](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api")。在前两个课程中我们没有学习 Navigation Timing API，但它对于自动分析页面性能是一个非常有用的工具。我强烈推荐你阅读它。
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">下载量越少，性能越好</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">减少文本的大小</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">优化图片</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP缓存</a>

### 使用 Bootstrap 并定制样式
这个项目基于 Twitter 旗下的 <a href="http://getbootstrap.com/">Bootstrap框架</a> 制作。所有的定制样式都在项目代码库的 `dist/css/portfolio.css` 中。

* <a href="http://getbootstrap.com/css/">Bootstrap CSS</a>
* <a href="http://getbootstrap.com/components/">Bootstrap组件</a>


