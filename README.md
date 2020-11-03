Bilibili-FE 哔哩哔哩

​		这是基于Vue2.6.13的项目，以实现网页交互、展示效果为主。

## 特性

​		1、纯前端项目没有搭建相应后台，不存在前后端交互

​		2、理应请求后端获取的数据已经写死成假数据存于Vue组件中，如下为假数据示例：

```javascript
primaryPageTab: [{
                name: '首页',
                fontName: 'bilifont bili-icon_fenqudaohang_shouye',
                color: ''
            }, {
                name: '动态',
                fontName: 'bilifont bili-icon_dingdao_dongtai',
                color: 'yel'
            }, {
                name: '排行榜',
                fontName: 'bilifont bili-icon_fenqudaohang_paihangbang',
                color: 'blue'
            }, {
                name: '频道',
                fontName: 'bilifont bili-pindao',
                color: 'channel'
            }],
```

​		3、图片大多采用require()获取地址，避免编译、打包后图片地址错误

​		4、利用媒体查询实现宽度自适应

​		5、理论上可以改造后搭配其他后台使用

## 效果展示

​		1、宽屏状态（完整显示）<img src="https://github.com/chinchan-mole/bilibili/blob/master/showImages/1.png" style="zoom:50%;" />

​		2、屏幕缩小（顶部搜索栏变化、展示数量/尺寸改变）

<img src="https://github.com/chinchan-mole/bilibili/blob/master/showImages/2.png" style="zoom: 67%;" />

## 项目部署到本地

```json
git clone (仓库地址)
npm install  // 项目安装
npm run serve  // vue-cli编译
npm run build  // 打包项目
```

## 项目计划
1、主页展示（basic done）

2、个人空间（plan）

3、动态（plan）

4、消息（ing...）

5、个人中心（plan）

6、创作中心（plan）

7、视频播放页面（plan）
