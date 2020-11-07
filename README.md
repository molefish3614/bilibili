Bilibili-FE 哔哩哔哩

​		这是基于Vue2.6.13的前端项目，以实现网页交互、展示效果为主。

## 特性

​		1、非全栈项目未搭建后台，理应请求后端获取的数据已经写死成假数据存于Vue组件中，如下为假数据结构示例：

```javascript
    {
        img: require('@/assets/images/storey/live/1.webp'),
        path: '/',
        playCount: '216.1万',
        upAvatar: require('@/assets/images/storey/live/1-avatar.webp'),
        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
        authCate: 'blue-auth',
        upName: '哔哩哔哩王者荣耀赛事',
        liveRoom: 'KPL官方赛事直播间',
        liveCate: '王者荣耀'
    }
```

​		2、img图片大多采用require()获取动态地址，避免编译、打包后图片地址错误

​		3、利用媒体查询实现了宽度自适应

​       4、Vue组件中CSS样式剥离至src/css目录中，view与css文件对应，CSS背景图片用相对地址获取

​		5、个人主页运用动态路由

## 效果展示

​		暂无

## 项目部署到本地

```json
git clone (仓库地址)
npm install  // 项目安装
npm run serve  // vue-cli编译
npm run build  // 打包项目
```

## 项目计划
1、主页展示（done）

2、个人空间（ing...）

3、动态（plan）

4、消息（ing...）

5、个人中心（plan）

6、创作中心（plan）

7、视频播放页面（plan）
