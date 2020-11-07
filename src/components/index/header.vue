<template>
<div>
    <div class="mini-header-banner" @mouseenter="bannerMouseEnter" @mousemove="bannerMouseMove" @mouseleave="bannerMouseLeave">
        <div class="mini-header">
            <div class="mini-header-content">
                <div class="nav-link">
                    <ul class="nav-link-ul">
                        <li class="nav-link-item" :key="i" v-for="(item, i) in navItem">
                            <router-link :to="{ path: item.url }" class="link" target="_blank"><i v-if="item.hasIconfont" :class="item.iconfontName"></i>{{ item.name }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="nav-search-box">
                    <div class="nav-search">
                        <form id="nav_searchform">
                            <input v-model="navSearchForm.text" class="nav-search-keyword" maxlength="500px" :placeholder="navSearchPlaceholder" />
                            <div class="nav-search-btn">
                                <button type="info" class="bilifont bili-icon_dingdao_sousuo nav-search-submit"></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="nav-user-center">
                    <div class="user-con search-icon">
                        <router-link :to="{path:'/'}" target="_blank"><i class="bilifont bili-icon_dingdao_sousuo"></i></router-link>
                    </div>
                    <ul class="user-con">
                        <li class="user-con-item mini-avatar">
                            <router-link :to="{ name:userCon.userSpace, params: { id: userCon.id }}" target="_blank"> <img :src="userCon.avatar" /></router-link>
                        </li>
                        <li :key="index" v-for="(item, index) in userCon.data" class="user-con-item">
                            <router-link :to="{ path: item.url }" target="_blank" class="name">{{ item.name }}
                                <div v-if="item.name === '消息' || item.name === '动态'" class="num">{{item.num}}</div>
                            </router-link>
                        </li>
                    </ul>
                    <el-button type="danger" class="upload">投稿</el-button>
                </div>
            </div>
        </div>
        <div class="banner">
            <div class="animated-banner">
                <div class="layer">
                    <img :class="mouseLeaveBanner ? 'img-transition' : ''" src="@/assets/images/banner1.png" data-height="250" data-width="3000" :height="bannerAnimateData.banner1.height + 'px'" :width="bannerAnimateData.banner1.width + 'px'" :style="`filter: blur(${bannerAnimateData.banner1.blur}px); transform: translate(0px, 0px) rotate(0deg);`" />
                </div>
                <div class="layer">
                    <img :src="bannerAnimateData.banner2.src" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="275" data-width="3000" :height="bannerAnimateData.banner2.height + 'px'" :width="bannerAnimateData.banner2.width + 'px'" :style="`transform: translate(${bannerAnimateData.banner2.translateX}px, 0px) rotate(0deg); filter: blur(${bannerAnimateData.banner2.blur}px);`" />
                </div>
                <div class="layer">
                    <img src="@/assets/images/banner3.png" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="250" data-width="3000" :height="bannerAnimateData.banner3.height + 'px'" :width="bannerAnimateData.banner3.width + 'px'" :style="`transform: translate(${bannerAnimateData.banner3.translateX}px, 0px) rotate(0deg); filter: blur(${bannerAnimateData.banner3.blur}px);`" />
                </div>
                <div class="layer">
                    <img src="@/assets/images/banner4.png" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="250" data-width="3000" :height="bannerAnimateData.banner4.height + 'px'" :width="bannerAnimateData.banner4.width + 'px'" :style="`transform: translate(${bannerAnimateData.banner4.translateX}px, 4.2px) rotate(0deg); filter: blur(${bannerAnimateData.banner4.blur}px);`" />
                </div>
                <div class="layer">
                    <img src="@/assets/images/banner5.png" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="275" data-width="3000" :height="bannerAnimateData.banner5.height + 'px'" :width="bannerAnimateData.banner5.width + 'px'" :style="`transform: translate(${bannerAnimateData.banner5.translateX}px, -1.8px) rotate(0deg); filter: blur(${bannerAnimateData.banner5.blur}px);`" />
                </div>
                <div class="layer">
                    <img src="@/assets/images/banner6.png" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="275" data-width="3000" :height="bannerAnimateData.banner6.height + 'px'" :width="bannerAnimateData.banner6.width + 'px'" :style="`transform: translate(${bannerAnimateData.banner6.translateX}px, 0px) rotate(0deg); filter: blur(${bannerAnimateData.banner6.blur}px);`" />
                </div>
            </div>
            <div class="taper-line"></div>
            <div class="logo wrap">
                <router-link to="/" class="head-logo"><img src="@/assets/images/bilbili-autumn.png" style="width: 180px"></router-link>
            </div>
        </div>
    </div>
    <div class="wrap">
        <div class="primary-menu">
            <div class="page-tab">
                <ul class="con">
                    <li :key="i" v-for="(item,i) in primaryPageTab">
                        <router-link to="/" target="_blank">
                            <div class="round page-tab-round" :class="item.color ? item.color : ''"><i :class="item.fontName"></i></div><span>{{ item.name}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <span class="tab-line"></span>
            <div class="channel-menu">
                <span :key="i" v-for="(item, i) in primaryChannelMenu">
                    <div class="channel-menu-item">
                        <router-link :to="{path: '/'}" class="name hover-blue" target="_blank"><span>{{item.name}}<em v-if="item.newCount !== ''">{{item.newCount}}</em></span>
                        </router-link>
                    </div>
                </span>
            </div>
            <span class="tab-line none"></span>
            <div class="friendship-link">
                <span :key="i" v-for="(item,i) in friendshipLink">
                    <div class="item">
                        <router-link :to="{path:'/'}" class="name hover-blue" target="_blank">
                            <div class="icon-con"><img :src="item.image" class="svg-icon"></div><span>{{ item.name }}</span>
                        </router-link>
                    </div>
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    sleep,
    throttle
} from '@/utils/index.js' // 引入睡眠和节流函数
export default {
    data() {
        return {
            navSearchForm: {
                text: "",
            },
            screenWidth: 1366,
            // banner动画数据存储
            bannerAnimateData: {
                banner1: {
                    width: 3000,
                    height: 250,
                    blur: 4,
                },
                banner2: {
                    width: 1800,
                    height: 165,
                    blur: 0,
                    translateX: 0,
                    src: require('@/assets/images/banner2.png'), // 动态引入图片地址，@表示项目根目录
                },
                banner3: {
                    width: 3000,
                    height: 250,
                    blur: 1,
                    translateX: -50,
                },
                banner4: {
                    width: 1800,
                    height: 150,
                    blur: 4,
                    translateX: 0,
                },
                banner5: {
                    width: 1800,
                    height: 165,
                    blur: 5,
                    translateX: 0,
                },
                banner6: {
                    width: 1950,
                    height: 178,
                    blur: 6,
                    translateX: 0,
                },
            },
            inBannerMouseX: 0,
            mouseLeaveBanner: true,
            banner2SrcOrigin: require('@/assets/images/banner2.png'),
            banner2SrcHalf: require('@/assets/images/banner2-half.png'),
            banner2SrcClose: require('@/assets/images/banner2-close.png'),
            // 假数据
            userCon: {
                id: 114514,
                avatar: require('@/assets/images/avatar.png'),
                userSpace: 'space',
                data: [{
                    name: '大会员',
                    url: '/big'
                }, {
                    name: '消息',
                    url: '/message',
                    num: '99+'
                }, {
                    name: '动态',
                    url: '/trend',
                    num: '22'
                }, {
                    name: '收藏',
                    url: '/favlist'
                }, {
                    name: '历史',
                    url: '/history'
                }, {
                    name: '创作中心',
                    url: '/member'
                }]
            },
            navItem: [{
                    name: '主站',
                    hasIconfont: true,
                    url: '/',
                    iconfontName: 'bilifont bili-icon_dingdao_zhuzhan',
                },
                {
                    name: '番剧',
                    hasIconfont: false,
                    url: 'anime',
                    iconfontName: '',
                },
                {
                    name: '游戏中心',
                    hasIconfont: false,
                    url: '/gamecenter',
                    iconfontName: '',
                },
                {
                    name: '直播',
                    hasIconfont: false,
                    url: '/live',
                    iconfontName: '',
                },
                {
                    name: '会员购',
                    hasIconfont: false,
                    url: '/shop',
                    iconfontName: '',
                },
                {
                    name: '漫画',
                    hasIconfont: false,
                    url: '/manga',
                    iconfontName: '',
                },
                {
                    name: '赛事',
                    hasIconfont: false,
                    url: '/match',
                    iconfontName: '',
                },
                {
                    name: '下载APP',
                    hasIconfont: true,
                    url: '/app',
                    iconfontName: 'bilifont bili-icon_dingdao_xiazaiapp',
                },
            ],
            navSearchPlaceholder: '都是写死的假数据而已',
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
            primaryChannelMenu: [{
                    name: '动画',
                    newCount: '999+',
                    path: '/'
                },
                {
                    name: '番剧',
                    newCount: '137',
                    path: '/'
                },
                {
                    name: '音乐',
                    newCount: '999+',
                    path: '/'
                },
                {
                    name: '国创',
                    newCount: '294',
                    path: '/'
                },
                {
                    name: '舞蹈',
                    newCount: '834',
                    path: '/'
                },
                {
                    name: '游戏',
                    newCount: '999+',
                    path: '/'
                }, {
                    name: '知识',
                    newCount: '999+',
                    path: '/'
                },
                {
                    name: '数码',
                    newCount: '999+',
                    path: '/'
                },
                {
                    name: '生活',
                    newCount: '999+',
                    path: '/'
                },
                {
                    name: '鬼畜',
                    newCount: '94',
                    path: '/'
                },
                {
                    name: '时尚',
                    newCount: '999+',
                    path: '/'
                },
                {
                    name: '资讯',
                    newCount: '440',
                    path: '/'
                },
                {
                    name: '娱乐',
                    newCount: '999+',
                    path: '/'
                },
                {
                    name: '影视',
                    newCount: '999+',
                    path: '/'
                },
                {
                    name: '放映厅',
                    newCount: '77',
                    path: '/'
                },
                {
                    name: '搞笑',
                    newCount: '999+',
                    path: '/'
                },
                {
                    name: '动物圈',
                    newCount: '999+',
                    path: '/'
                },
                {
                    name: '美食',
                    newCount: '999+',
                    path: '/'
                },
                {
                    name: '单机游戏',
                    newCount: '999+',
                    path: '/'
                },
                {
                    name: 'VLOG',
                    newCount: '',
                    path: '/'
                },
            ],
            friendshipLink: [{
                    name: '专栏',
                    image: require('@/assets/images/article.png')
                },
                {
                    name: '直播',
                    image: require('@/assets/images/live.png')
                },
                {
                    name: '活动',
                    image: require('@/assets/images/activity.png')
                },
                {
                    name: '课堂',
                    image: require('@/assets/images/class.png')
                },
                {
                    name: '小黑屋',
                    image: require('@/assets/images/blackroom.png')
                },
                {
                    name: '音乐PLUS',
                    image: require('@/assets/images/musicplus.png')
                }
            ],
        }
    },
    mounted() {
        this.screenWidth = document.documentElement.clientWidth;
        this.bannerSelfAd();
        const that = this; // 备份this指向至that
        // 节流控制banner图片宽高自适应浏览器宽度
        window.addEventListener('resize', throttle(function () {
            that.screenWidth = document.documentElement.clientWidth; // 触发立即更新尺寸数据
            that.bannerSelfAd();
        }, 200));
        setInterval(() => {
            this.closeEye();
        }, 3000)
    },
    methods: {
        bannerSelfAd() {
            if (this.screenWidth < 1366) return;
            if (this.screenWidth <= 1920) {
                this.bannerAnimateData.banner1.width = 3000 + (3483 - 3000) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner1.height = 250 + (290 - 250) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner2.width = 1800 + (2090 - 1800) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner2.height = 165 + (191 - 165) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner3.width = 3000 + (3483 - 3000) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner3.height = 250 + (290 - 250) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner4.width = 1800 + (2090 - 1800) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner4.height = 150 + (174 - 150) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner5.width = 1800 + (2090 - 1800) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner5.height = 165 + (191 - 165) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner6.width = 1950 + (2264 - 1950) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner6.height = 178 + (207 - 178) / (1920 - 1366) * (this.screenWidth - 1366);
            } else {
                this.bannerAnimateData.banner1.width = 3000 + (3483 - 3000) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner1.height = 250 + (290 - 250) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner2.width = 1800 + (2090 - 1800) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner2.height = 165 + (210 - 165) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner3.width = 3000 + (3483 - 3000) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner3.height = 250 + (290 - 250) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner4.width = 1800 + (2190 - 1800) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner4.height = 150 + (194 - 150) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner5.width = 1800 + (2190 - 1800) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner5.height = 165 + (206 - 165) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner6.width = 1950 + (2300 - 1950) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnimateData.banner6.height = 178 + (217 - 178) / (1920 - 1366) * (this.screenWidth - 1366);
            }
        },
        bannerMouseEnter(e) {
            this.inBannerMouseX = e.pageX;
            this.mouseLeaveBanner = false;
        },
        // 节流函数在methods中的使用方法 处理名:节流函数名(fn,delay),内部this依旧指向Vue实例
        bannerMouseMove: throttle(function (e) {
            this.mouseLeaveBanner = false;
            let htmlWidth = document.documentElement.clientWidth;
            // banner1
            let blurChange1 = ((e.pageX - this.inBannerMouseX) / htmlWidth) * 4;
            this.bannerAnimateData.banner1.blur = 4 + blurChange1;
            // banner2
            let blurChange2 = (Math.abs(e.pageX - this.inBannerMouseX) / htmlWidth) * 10;
            let translateX2 = ((e.pageX - this.inBannerMouseX) / htmlWidth) * 9;
            this.bannerAnimateData.banner2.blur = blurChange2;
            this.bannerAnimateData.banner2.translateX = translateX2;
            // banner3
            let blurChange3 =
                1 + (Math.abs(e.pageX - this.inBannerMouseX) / htmlWidth) * 3;
            let translateX3 = ((e.pageX - this.inBannerMouseX) / htmlWidth) * 25;
            this.bannerAnimateData.banner3.blur = blurChange3;
            this.bannerAnimateData.banner3.translateX = -50 + translateX3;
            // banner4
            let blurChange4 = 0;
            if (e.pageX - this.inBannerMouseX > 0) {
                //4先减小后增大6
                blurChange4 = 4 - ((e.pageX - this.inBannerMouseX) / htmlWidth) * 10;
                blurChange4 = blurChange4 < 0 ? -blurChange4 : blurChange4;
            } else {
                //4一直增大到14
                blurChange4 = 4 + (Math.abs(e.pageX - this.inBannerMouseX) / htmlWidth) * 10;
            }
            let translateX4 = ((e.pageX - this.inBannerMouseX) / htmlWidth) * 36;
            this.bannerAnimateData.banner4.blur = blurChange4;
            this.bannerAnimateData.banner4.translateX = translateX4;
            // banner5
            let blurChange5 = 0;
            if (e.pageX - this.inBannerMouseX > 0) {
                //5先减小后增大5
                blurChange5 = 5 - ((e.pageX - this.inBannerMouseX) / htmlWidth) * 10;
                blurChange5 = blurChange5 < 0 ? -blurChange5 : blurChange5;
            } else {
                //5一直增大到15
                blurChange5 = 5 + (Math.abs(e.pageX - this.inBannerMouseX) / htmlWidth) * 10;
            }
            let translateX5 = ((e.pageX - this.inBannerMouseX) / htmlWidth) * 78;
            this.bannerAnimateData.banner5.blur = blurChange5;
            this.bannerAnimateData.banner5.translateX = translateX5;
            // banner6
            let blurChange6 = 0;
            if (e.pageX - this.inBannerMouseX > 0) {
                blurChange6 = 6 - (Math.abs(e.pageX - this.inBannerMouseX) / htmlWidth) * 6;
            } else {
                blurChange6 = 6 + (Math.abs(e.pageX - this.inBannerMouseX) / htmlWidth) * 6;
            }
            let translateX6 = ((e.pageX - this.inBannerMouseX) / htmlWidth) * 98;
            this.bannerAnimateData.banner6.blur = blurChange6;
            this.bannerAnimateData.banner6.translateX = translateX6;
        }, 20),
        bannerMouseLeave() {
            this.mouseLeaveBanner = true;
            this.bannerAnimateData.banner1.blur = 4;
            this.bannerAnimateData.banner2.blur = 0;
            this.bannerAnimateData.banner2.translateX = 0;
            this.bannerAnimateData.banner3.blur = 1;
            this.bannerAnimateData.banner3.translateX = -50;
            this.bannerAnimateData.banner4.blur = 4;
            this.bannerAnimateData.banner4.translateX = 0;
            this.bannerAnimateData.banner5.blur = 5;
            this.bannerAnimateData.banner5.translateX = 0;
            this.bannerAnimateData.banner6.blur = 6;
            this.bannerAnimateData.banner6.translateX = 0;
            this.inBannerMouseX = 0;
        },
        closeEye() {
            this.bannerAnimateData.banner2.src = this.banner2SrcHalf;
            sleep(50).then(() => {
                this.bannerAnimateData.banner2.src = this.banner2SrcClose;
                return sleep(100)
            }).then(() => {
                this.bannerAnimateData.banner2.src = this.banner2SrcHalf;
                return sleep(50)
            }).then(() => {
                this.bannerAnimateData.banner2.src = this.banner2SrcOrigin;
            });
        }
    }
}
</script>

<style>

</style>
