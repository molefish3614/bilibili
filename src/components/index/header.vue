<template>
<div>
    <div class="mini-header-banner" @mouseenter="bannerMouseEnter" @mousemove="bannerMouseMove" @mouseleave="bannerMouseLeave">
        <div class="mini-header">
            <div class="mini-header-content white-a">
                <div class="nav-link">
                    <ul class="nav-link-ul">
                        <li class="nav-link-item" :key="i" v-for="(item, i) in navItem">
                            <router-link :to="{ path: item.url }" class="link"><i v-if="item.hasIconfont" :class="item.iconfontName"></i><span>{{ item.name }}</span></router-link>
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
                        <router-link :to="{path:'/'}"><i class="bilifont bili-icon_dingdao_sousuo"></i></router-link>
                    </div>
                    <ul class="user-con">
                        <li class="user-con-item mini-avatar">
                            <img :src="avatar" />
                        </li>
                        <li :key="index" v-for="(item, index) in userCon" class="user-con-item">
                            <router-link :to="{ path: item.url }">{{ item.name }}</router-link>
                        </li>
                    </ul>
                    <el-button type="danger" class="upload">投稿</el-button>
                </div>
            </div>
        </div>
        <div class="banner">
            <div class="animated-banner">
                <div class="layer">
                    <img :class="mouseLeaveBanner ? 'img-transition' : ''" src="@/assets/images/banner1.png" data-height="250" data-width="3000" :height="bannerAnmiateData.banner1.height + 'px'" :width="bannerAnmiateData.banner1.width + 'px'" :style="`filter: blur(${bannerAnmiateData.banner1.blur}px); transform: translate(0px, 0px) rotate(0deg);`" />
                </div>
                <div class="layer">
                    <img :src="bannerAnmiateData.banner2.src" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="275" data-width="3000" :height="bannerAnmiateData.banner2.height + 'px'" :width="bannerAnmiateData.banner2.width + 'px'" :style="`transform: translate(${bannerAnmiateData.banner2.translateX}px, 0px) rotate(0deg); filter: blur(${bannerAnmiateData.banner2.blur}px);`" />
                </div>
                <div class="layer">
                    <img src="@/assets/images/banner3.png" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="250" data-width="3000" :height="bannerAnmiateData.banner3.height + 'px'" :width="bannerAnmiateData.banner3.width + 'px'" :style="`transform: translate(${bannerAnmiateData.banner3.translateX}px, 0px) rotate(0deg); filter: blur(${bannerAnmiateData.banner3.blur}px);`" />
                </div>
                <div class="layer">
                    <img src="@/assets/images/banner4.png" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="250" data-width="3000" :height="bannerAnmiateData.banner4.height + 'px'" :width="bannerAnmiateData.banner4.width + 'px'" :style="`transform: translate(${bannerAnmiateData.banner4.translateX}px, 4.2px) rotate(0deg); filter: blur(${bannerAnmiateData.banner4.blur}px);`" />
                </div>
                <div class="layer">
                    <img src="@/assets/images/banner5.png" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="275" data-width="3000" :height="bannerAnmiateData.banner5.height + 'px'" :width="bannerAnmiateData.banner5.width + 'px'" :style="`transform: translate(${bannerAnmiateData.banner5.translateX}px, -1.8px) rotate(0deg); filter: blur(${bannerAnmiateData.banner5.blur}px);`" />
                </div>
                <div class="layer">
                    <img src="@/assets/images/banner6.png" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="275" data-width="3000" :height="bannerAnmiateData.banner6.height + 'px'" :width="bannerAnmiateData.banner6.width + 'px'" :style="`transform: translate(${bannerAnmiateData.banner6.translateX}px, 0px) rotate(0deg); filter: blur(${bannerAnmiateData.banner6.blur}px);`" />
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
            <div class="page-tab white-a no-shadow">
                <ul class="con">
                    <li :key="i" v-for="(item,i) in primaryPageTab">
                        <router-link to="/" target="_blank">
                            <div class="round page-tab-round" :class="item.color ? item.color : ''"><i :class="item.fontName"></i></div><span class="black-a">{{ item.name}}</span>
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
export default {
    data() {
        return {
            navSearchForm: {
                text: "",
            },
            screenWidth: 1366,
            lock: 1,
            // banner动画数据存储
            bannerAnmiateData: {
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
            avatar: require('@/assets/images/avatar.png'),
            // 假数据
            userCon: [{
                name: '大会员',
                url: '/big'
            }, {
                name:'消息',
                url: '/message'
            }, {
                name:'动态',
                url: '/trend'
            }, {
                name:'收藏',
                url: '/favlist'
            }, {
                name:'历史',
                url: '/history'
            }, {
                name:'创作中心',
                url: '/member'
            }],
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
        setInterval(() => {
            if (this.lock > 0) this.lock--;
        }, 10);
        const that = this; // 备份this指向至that
        window.addEventListener('resize', function () {
            that.screenWidth = document.documentElement.clientWidth; // 触发立即更新尺寸数据
            if (that.lock === 0) {
                that.bannerSelfAd();
                that.lock = 1
            }
        });
        setInterval(() => {
            this.closeEye();
        }, 3000)
    },
    methods: {
        bannerSelfAd() {
            if (this.screenWidth < 1366) return;
            if (this.screenWidth <= 1920) {
                this.bannerAnmiateData.banner1.width = 3000 + (3483 - 3000) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner1.height = 250 + (290 - 250) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner2.width = 1800 + (2090 - 1800) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner2.height = 165 + (191 - 165) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner3.width = 3000 + (3483 - 3000) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner3.height = 250 + (290 - 250) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner4.width = 1800 + (2090 - 1800) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner4.height = 150 + (174 - 150) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner5.width = 1800 + (2090 - 1800) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner5.height = 165 + (191 - 165) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner6.width = 1950 + (2264 - 1950) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner6.height = 178 + (207 - 178) / (1920 - 1366) * (this.screenWidth - 1366);
            } else {
                this.bannerAnmiateData.banner1.width = 3000 + (3483 - 3000) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner1.height = 250 + (290 - 250) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner2.width = 1800 + (2090 - 1800) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner2.height = 165 + (210 - 165) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner3.width = 3000 + (3483 - 3000) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner3.height = 250 + (290 - 250) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner4.width = 1800 + (2190 - 1800) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner4.height = 150 + (194 - 150) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner5.width = 1800 + (2190 - 1800) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner5.height = 165 + (206 - 165) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner6.width = 1950 + (2300 - 1950) / (1920 - 1366) * (this.screenWidth - 1366);
                this.bannerAnmiateData.banner6.height = 178 + (217 - 178) / (1920 - 1366) * (this.screenWidth - 1366);
            }
        },
        bannerMouseEnter(e) {
            this.inBannerMouseX = e.pageX;
            this.mouseLeaveBanner = false;
        },
        bannerMouseMove(e) {
            this.mouseLeaveBanner = false;
            let htmlWidth = document.documentElement.clientWidth;
            // banner1
            let blurChange1 = ((e.pageX - this.inBannerMouseX) / htmlWidth) * 4;
            this.bannerAnmiateData.banner1.blur = 4 + blurChange1;
            // banner2
            let blurChange2 = (Math.abs(e.pageX - this.inBannerMouseX) / htmlWidth) * 10;
            let translateX2 = ((e.pageX - this.inBannerMouseX) / htmlWidth) * 9;
            this.bannerAnmiateData.banner2.blur = blurChange2;
            this.bannerAnmiateData.banner2.translateX = translateX2;
            // banner3
            let blurChange3 =
                1 + (Math.abs(e.pageX - this.inBannerMouseX) / htmlWidth) * 3;
            let translateX3 = ((e.pageX - this.inBannerMouseX) / htmlWidth) * 25;
            this.bannerAnmiateData.banner3.blur = blurChange3;
            this.bannerAnmiateData.banner3.translateX = -50 + translateX3;
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
            this.bannerAnmiateData.banner4.blur = blurChange4;
            this.bannerAnmiateData.banner4.translateX = translateX4;
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
            this.bannerAnmiateData.banner5.blur = blurChange5;
            this.bannerAnmiateData.banner5.translateX = translateX5;
            // banner6
            let blurChange6 = 0;
            if (e.pageX - this.inBannerMouseX > 0) {
                blurChange6 = 6 - (Math.abs(e.pageX - this.inBannerMouseX) / htmlWidth) * 6;
            } else {
                blurChange6 = 6 + (Math.abs(e.pageX - this.inBannerMouseX) / htmlWidth) * 6;
            }
            let translateX6 = ((e.pageX - this.inBannerMouseX) / htmlWidth) * 98;
            this.bannerAnmiateData.banner6.blur = blurChange6;
            this.bannerAnmiateData.banner6.translateX = translateX6;
        },
        async bannerMouseLeave() {
            this.mouseLeaveBanner = true;
            this.bannerAnmiateData.banner1.blur = 4;
            this.bannerAnmiateData.banner2.blur = 0;
            this.bannerAnmiateData.banner2.translateX = 0;
            this.bannerAnmiateData.banner3.blur = 1;
            this.bannerAnmiateData.banner3.translateX = -50;
            this.bannerAnmiateData.banner4.blur = 4;
            this.bannerAnmiateData.banner4.translateX = 0;
            this.bannerAnmiateData.banner5.blur = 5;
            this.bannerAnmiateData.banner5.translateX = 0;
            this.bannerAnmiateData.banner6.blur = 6;
            this.bannerAnmiateData.banner6.translateX = 0;
            this.inBannerMouseX = 0;
        },
        closeEye() {
            this.bannerAnmiateData.banner2.src = this.banner2SrcHalf;
            this.common.sleep(50).then(() => {
                this.bannerAnmiateData.banner2.src = this.banner2SrcClose;
                return this.common.sleep(100)
            }).then(() => {
                this.bannerAnmiateData.banner2.src = this.banner2SrcHalf;
                return this.common.sleep(50)
            }).then(() => {
                this.bannerAnmiateData.banner2.src = this.banner2SrcOrigin;
            });
        }
    }
}
</script>

<style lang="less" scoped>
.mini-header-banner {
    position: relative;

    .mini-header {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 56px;
        text-shadow: 0 1px 1px rgba(0, 0, 0, .3) !important;

        a {
            text-shadow: 0 1px 1px rgba(0, 0, 0, .3) !important;
        }

        .mini-header-content {
            position: relative;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin: 0 auto;
            padding: 10px 24px;
            line-height: 30px;

            .nav-link {

                .nav-link-ul {
                    display: flex;
                    align-items: center;
                    height: 36px;

                    .nav-link-item {
                        margin-right: 12px;

                        i,
                        span {
                            vertical-align: middle;
                            font-size: 14px;
                        }

                        i {
                            line-height: 30px;
                        }

                    }
                }
            }

            .nav-search-box {
                margin: 0 10px;
                width: 500px;
                transition: width 0.3s;
                transition-property: width;
                transition-duration: 0.3s;
                transition-timing-function: ease;
                transition-delay: 0s;

                .nav-search {
                    position: relative;

                    #nav_searchform {
                        display: block;
                        padding: 0 38px 0 16px;
                        border: 1px solid hsla(0, 0%, 100%, 0);
                        border-radius: 2px;
                        background-color: #fff;

                        .nav-search-keyword {
                            overflow: hidden;
                            width: 100%;
                            height: 34px;
                            border: none;
                            background-color: transparent;
                            box-shadow: none;
                            color: #999;
                            font-size: 14px;
                            line-height: 34px;
                            transition: all 0.2s;
                            outline: none;
                        }

                        .nav-search-btn {
                            position: absolute;
                            top: 0;
                            right: 0;
                            margin: 0;
                            padding: 0;
                            width: 48px;
                            height: 36px;
                            border: none;
                            border-radius: 2px;
                            background: #e7e7e7;
                            line-height: 26px;
                            cursor: pointer;

                            .nav-search-submit {
                                position: absolute;
                                top: 8px;
                                right: 16px;
                                margin: 0;
                                padding: 0;
                                border: none;
                                background: none;
                                color: #505050;
                                font-size: 16px;
                                line-height: 20px;
                                cursor: pointer;
                                transition: all 0.2s;
                                outline: none
                            }
                        }

                        .nav-search-btn:hover {
                            .nav-search-submit {
                                color: #1890ff;
                            }
                        }
                    }
                }
            }

            .nav-user-center {
                display: flex;
                flex-shrink: 0;

                .user-con-item {
                    position: relative;
                    display: flex;
                    margin-left: 12px;
                    cursor: pointer;

                    a {
                        font-size: 14px;
                    }
                }

                .mini-avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    position: relative;
                    margin-right: 10px;

                    img {
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        transition: 0.2s;
                    }
                }
            }

            .upload {
                position: relative;
                color: #fff;
                font-size: 14px;
                display: block;
                width: 100px;
                height: 36px;
                line-height: 10px;
                text-align: center;
                background: #fb7299;
                border-radius: 2px;
                margin-left: 14px;
                cursor: pointer;
            }
        }
    }

    .banner {
        margin: 0 auto;
        position: relative;
        z-index: 0;
        min-height: 155px;
        height: 9.375vw;
        min-width: 999px;
        background-color: #f9f9f9;
        display: flex;
        justify-content: center;
        background-repeat: no-repeat;
        background-position: center 0;
        background-size: cover;

        .animated-banner {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: hidden;

            .layer {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                .img-transition {
                    transition: transform .5s ease, filter .5s ease;
                }
            }
        }

        .logo {
            position: relative;
            width: 1630px;

            .head-logo {
                position: absolute;
                width: 220px;
                height: 50%;
                min-height: 60px;
                bottom: 10px;
                z-index: 1;
            }
        }
    }
}

.primary-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    width: 100%;

    .page-tab-round {
        margin: 0 14px 4px 14px;
    }

    .channel-menu {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 5rem;
        height: 68px;
        flex: 1;

        .channel-menu-item {
            cursor: pointer;
            display: flex;
            height: 34px;

            span {
                font-size: 14px;

                em {
                    font-style: normal;
                    font-size: 12px;
                    display: inline-block;
                    background: #73c9e5;
                    border-radius: 2px;
                    color: #fff;
                    margin-left: 1px;
                    transform: scale(.85);
                    width: 32px;
                    height: 14px;
                    line-height: 14px;
                    text-align: center;
                }
            }
        }
    }

    .friendship-link {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 68px;
        width: 289px;

        .item {
            height: 34px;
            display: flex;

            .icon-con {
                width: 25px;
            }

            .svg-icon {
                vertical-align: middle;
                overflow: hidden;
            }

            span {
                margin-left: 4px;
                vertical-align: middle;
                font-size: 14px;
            }
        }
    }
}

.none {
    margin: 0 24px 0 0;
}

.white-a a {
    color: #fff;
}

.name {
    font-size: 14px;
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.con {
    display: flex;
    text-align: center;

    a:hover {
        .black-a {
            color: #1890ff;
        }
    }

    i {
        font-size: 28px;
    }
}

.round {
    position: relative;
    width: 36px;
    height: 36px;
    background: #ff5c7c;
    border-radius: 36px;
    line-height: 36px;
    text-align: center;
    margin: 0 auto 4px;
}

.black-a {
    color: #212121;
    transition: color .3s;
}

.user-con {
    display: flex;
    align-items: center;
}

.mini-header-content .nav-user-center .user-con.search-icon {
    display: none;
}

.nav-user-center .user-con.search-icon .bilifont {
    font-size: 20px;
}

.nav-user-center .bilifont {
    color: #fff;
    vertical-align: middle;
    font-size: 28px;
    cursor: pointer;
}

.nav-link .nav-link-ul .nav-link-item .link {
    font-size: 14px;
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .3);
    white-space: nowrap;
    display: flex;
}

.banner .taper-line {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(rgba(0, 0, 0, .4), transparent);
}
</style>
