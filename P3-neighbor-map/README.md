# Neighborhood Map- Udacity Front-end Developer Project 4

## 项目概述
你将开发一个具有你所在区域或想访问的区域的地图的单页应用程序。你将为此地图添加其他功能，包括突出显示的地点、有关这些地点的第三方数据以及浏览内容的不同方式。

## 安装使用

请将本项目的文件夹git clone到本地后，双击 index.html

## API
1. [Google Maps API](https://developers.google.com/maps/)

2. [Foursquare place API](https://developer.foursquare.com/)

## 前端框架

1.  [Bootstrap](https://getbootstrap.com/)

2. [knockout](http://knockoutjs.com/)

3. [Jquery](https://jquery.com/)

## Code文档
### HTML
-  index.html：主文件

###  JavaScript
- app.js：  主文件
- styles.js：  自定义Google Maps look
- markers.js： 定义位置信息

### CSS
- mapStyles.css： 自定义样式

## Bugs fix
[json解析](https://www.json.cn/)

### 第一步：请求代码

```
curl -X GET -G \
  'https://api.foursquare.com/v2/venues/explore' \
    -d client_id="CLIENT_ID" \
    -d client_secret="CLIENT_SECRET" \
    -d v="20170801" \
    -d ll="40.7243,-74.0018" \
    -d query="coffee" \
    -d limit=1
```    
###     第二步：
将response记过放到https://www.json.cn/ 进行解析

## 相关资源

1. [Bootstrap中文教程](http://www.bootcss.com/)

2. [Jquery教程文档](http://www.w3school.com.cn/jquery/)

3. [knockout教程文档](https://www.cnblogs.com/TomXu/archive/2011/11/21/2257154.html)

4.  [knockout官方文档-English](http://knockoutjs.com/documentation/introduction.html)

5.  [Foursquare官网文档](https://developer.foursquare.com/docs/api/getting-started)

6. [如何启用github.io](https://pages.github.com/)






