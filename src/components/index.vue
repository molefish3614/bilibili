<template>
<div>
    <el-container>
        <el-header height="100%" style="padding: 0">
            <div class="mini-header-banner" @mouseenter="bannerMouseEnter" @mousemove="bannerMouseMove" @mouseleave="bannerMouseLeave">
                <div class="mini-header">
                    <div class="mini-header-content white-a">
                        <div class="nav-link">
                            <ul class="nav-link-ul">
                                <li class="nav-link-item" :key="i" v-for="(item, i) in navItem">
                                    <router-link :to="{ path: '/' }"><i v-if="item.hasIconfont" :class="item.iconfontName"></i><span>{{ item.name }}</span></router-link>
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
                            <ul class="user-con">
                                <li class="user-con-item mini-avatar">
                                    <img src="../assets/images/avatar.png" />
                                </li>
                                <li :key="index" v-for="(item, index) in userCon" class="user-con-item">
                                    <router-link :to="{ path: '/' }">{{ item }}</router-link>
                                </li>
                            </ul>
                            <el-button type="danger" class="upload">投稿</el-button>
                        </div>
                    </div>
                </div>
                <div class="banner">
                    <div class="animated-banner">
                        <div class="layer">
                            <img :class="mouseLeaveBanner ? 'img-transition' : ''" src="../assets/images/banner1.png" data-height="250" data-width="3000" height="290" width="3483" :style="`filter: blur(${bannerAnmiateData.banner1.blur}px); transform: translate(0px, 0px) rotate(0deg);`" />
                        </div>
                        <div class="layer">
                            <img :src="bannerAnmiateData.banner2.src" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="275" data-width="3000" height="191" width="2090" :style="`transform: translate(${bannerAnmiateData.banner2.translateX}px, 0px) rotate(0deg); filter: blur(${bannerAnmiateData.banner2.blur}px);`" />
                        </div>
                        <div class="layer">
                            <img src="../assets/images/banner3.png" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="250" data-width="3000" height="290" width="3483" :style="`transform: translate(${bannerAnmiateData.banner3.translateX}px, 0px) rotate(0deg); filter: blur(${bannerAnmiateData.banner3.blur}px);`" />
                        </div>
                        <div class="layer">
                            <img src="../assets/images/banner4.png" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="250" data-width="3000" height="174" width="2090" :style="`transform: translate(${bannerAnmiateData.banner4.translateX}px, 4.2px) rotate(0deg); filter: blur(${bannerAnmiateData.banner4.blur}px);`" />
                        </div>
                        <div class="layer">
                            <img src="../assets/images/banner5.png" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="275" data-width="3000" height="191" width="2090" :style="`transform: translate(${bannerAnmiateData.banner5.translateX}px, -1.8px) rotate(0deg); filter: blur(${bannerAnmiateData.banner5.blur}px);`" />
                        </div>
                        <div class="layer">
                            <img src="../assets/images/banner6.png" :class="mouseLeaveBanner ? 'img-transition' : ''" data-height="275" data-width="3000" height="207" width="2264" :style="`transform: translate(${bannerAnmiateData.banner6.translateX}px, 0px) rotate(0deg); filter: blur(${bannerAnmiateData.banner6.blur}px);`" />
                        </div>
                    </div>
                    <div class="logo wrap">
                        <router-link to="/" class="head-logo"><img src="../assets/images/bilbili-autumn.png" style="width: 180px"></router-link>
                    </div>
                </div>
            </div>
            <div class="wrap">
                <div class="primary-menu">
                    <div class="page-tab white-a no-shadow">
                        <ul class="con">
                            <li :key="i" v-for="(item,i) in primaryPageTab">
                                <router-link to="/">
                                    <div class="round page-tab-round" :class="item.color !== '' ? item.color : ''"><i :class="item.fontName"></i></div><span class="black-a">{{ item.name}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <span class="tab-line"></span>
                    <div class="channel-menu">
                        <span :key="i" v-for="(item, i) in primaryChannelMenu">
                            <div class="channel-menu-item">
                                <router-link :to="{path: '/'}" class="name hover-blue"><span>{{item.name}}<em v-if="item.newCount !== ''">{{item.newCount}}</em></span>
                                </router-link>
                            </div>
                        </span>
                    </div>
                    <span class="tab-line none"></span>
                    <div class="friendship-link">
                        <span :key="i" v-for="(item,i) in friendshipLink">
                            <div class="item">
                                <router-link :to="{path:'/'}" class="name hover-blue">
                                    <div class="icon-con"><img :src="item.image" class="svg-icon"></div><span>{{ item.name }}</span>
                                </router-link>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer style="height: 100%">
            <div class="link-box footer-wrap">
                <div class="footer-left">
                    <div class="link-item link-a">
                        <span class="topic">bilibili</span>
                        <ul>
                            <router-link :to="{path:item.path}" class="link-text hover-blue" :key="i" v-for="(item, i) in footerLeftList" :class="i === 3 || i === 7 ? 'no-margin' : ''"><span>{{item.name}}</span></router-link>
                        </ul>
                    </div>
                    <div class="link-item link-b">
                        <span class="topic">传送门</span>
                        <ul>
                            <router-link :to="{path:item.path}" class="link-text hover-blue" :key="i" v-for="(item, i) in footerRightList" :class="i === 3 || i === 7 ? 'no-margin' : ''"><span>{{item.name}}</span></router-link>
                        </ul>
                    </div>
                </div>
                <div class="footer-right">
                    <div class="link-item link-c">
                        <div class="a-wraper">
                            <router-link :to="{path: '/'}" class="hover-blue-ite1"><i class="bili-footer-font bilifont bili-icon_download"></i>
                                <p>下载APP</p>
                            </router-link>
                        </div>
                        <div class="a-wraper">
                            <router-link :to="{path: '/'}" class="hover-blue"><i class="bili-footer-font bilifont bili-icon_weibo" style="color: #fe596c;"></i>
                                <p>新浪微博</p>
                            </router-link>
                        </div>
                        <div class="a-wraper">
                            <router-link :to="{path: '/'}" class="hover-blue"><i class="bili-footer-font bilifont bili-icon_wechat" style="color: #42c86b;"></i>
                                <p>官方微信</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="partner footer-wrap">
                <div class="pic-box">
                    <img :src="footer.partner" class="pic">
                    <img :src="footer.pic110" class="pic962110">
                    <img :src="footer.certify" class="certify">
                </div>
                <div class="text-con">
                    <p>
                        <span class="hover-blue">
                            <router-link :to="{path: '/'}">营业执照</router-link>
                        </span>
                        <span>信息网络传播视听节目许可证：0910417</span>
                        <span>网络文化经营许可证 沪网文【2019】3804-274号</span>
                        <span>广播电视节目制作经营许可证：（沪）字第01248号</span>
                        <span>增值电信业务经营许可证 沪B2-20100043</span>
                        <span>互联网ICP备案：<router-link :to="{path: '/'}" class="hover-blue">沪ICP备13002172号-3</router-link></span>
                        <span>出版物经营许可证 沪批字第U6699 号</span>
                        <span>互联网药品信息服务资格证 沪-非经营性-2016-0143</span>
                        <span>营业性演出许可证 沪市文演（经）00-2253</span>
                    </p>
                    <p>违法不良信息举报邮箱：help@bilibili.com |违法不良信息举报电话：4000233233转3</p>
                    <p><i class="sprite bg1" :style="{backgroundImage: 'url('+spriteUrl+')'}"></i><a href="javascript:;" class="hover-blue">上海互联网举报中心</a> | <a href="javascript:;" class="hover-blue">12318全国文化市场举报网站</a> | <i class="sprite bg2" :style="{backgroundImage: 'url('+spriteUrl+')'}"></i><a href="javascript:;" class="hover-blue">沪公网安备31011002002436号</a> | <a href="javascript:;" class="hover-blue">儿童色情信息举报专区</a> | <a href="javascript:;" class="hover-blue">扫黄打非举报</a></p>
                    <p>网上有害信息举报专区：<i class="sprite bg3" :style="{backgroundImage: 'url('+spriteUrl+')'}"></i><a href="javascript:;" class="hover-blue">中国互联网违法和不良信息举报中心</a></p>
                    <p>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</p>
                    <p>公司名称：上海宽娱数码科技有限公司|公司地址：上海市杨浦区政立路485号|电话：021-25099888</p>
                </div>
            </div>
        </el-footer>
    </el-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            navSearchForm: {
                text: "",
            },
            // banner动画数据存储
            bannerAnmiateData: {
                banner1: {
                    blur: 4,
                },
                banner2: {
                    blur: 0,
                    translateX: 0,
                    src: require('@/assets/images/banner2.png'), // 动态引入图片地址，@表示项目根目录
                },
                banner3: {
                    blur: 1,
                    translateX: -50,
                },
                banner4: {
                    blur: 4,
                    translateX: 0,
                },
                banner5: {
                    blur: 5,
                    translateX: 0,
                },
                banner6: {
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
            userCon: ["大会员", "消息", "动态", "收藏", "历史", "创作中心"],
            navItem: [{
                    name: "主站",
                    hasIconfont: true,
                    iconfontName: "bilifont bili-icon_dingdao_zhuzhan",
                },
                {
                    name: "番剧",
                    hasIconfont: false,
                    iconfontName: "",
                },
                {
                    name: "游戏中心",
                    hasIconfont: false,
                    iconfontName: "",
                },
                {
                    name: "直播",
                    hasIconfont: false,
                    iconfontName: "",
                },
                {
                    name: "会员购",
                    hasIconfont: false,
                    iconfontName: "",
                },
                {
                    name: "漫画",
                    hasIconfont: false,
                    iconfontName: "",
                },
                {
                    name: "赛事",
                    hasIconfont: false,
                    iconfontName: "",
                },
                {
                    name: "下载APP",
                    hasIconfont: true,
                    iconfontName: "bilifont bili-icon_dingdao_xiazaiapp",
                },
            ],
            navSearchPlaceholder: '这是假数据，理论上这里的文本应该是从后台请求来的',
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
                    newCount: '999+'
                },
                {
                    name: '音乐',
                    newCount: '999+'
                },
                {
                    name: '舞蹈',
                    newCount: '834'
                }, {
                    name: '知识',
                    newCount: '999+'
                },
                {
                    name: '生活',
                    newCount: '999+'
                },
                {
                    name: '时尚',
                    newCount: '999+'
                },
                {
                    name: '娱乐',
                    newCount: '999+'
                },
                {
                    name: '放映厅',
                    newCount: '77'
                }, {
                    name: '番剧',
                    newCount: '137'
                }, {
                    name: '国创',
                    newCount: '294'
                }, {
                    name: '游戏',
                    newCount: '999+'
                },
                {
                    name: '数码',
                    newCount: '999+'
                },
                {
                    name: '鬼畜',
                    newCount: '94'
                },
                {
                    name: '资讯',
                    newCount: '440'
                },
                {
                    name: '影视',
                    newCount: '999+'
                },
                {
                    name: '搞笑',
                    newCount: '999+'
                },
                {
                    name: '美食',
                    newCount: '999+'
                },
                {
                    name: 'VLOG',
                    newCount: ''
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
            footerLeftList: [{
                    name: '关于我们',
                    path: '/'
                }, {
                    name: '联系我们',
                    path: '/'
                },
                {
                    name: '用户协议',
                    path: '/'
                },
                {
                    name: '加入我们',
                    path: '/'
                },
                {
                    name: '友情链接',
                    path: '/'
                },
                {
                    name: '隐私政策',
                    path: '/'
                },
                {
                    name: 'bilibili认证',
                    path: '/'
                },
                {
                    name: 'Investor Relations',
                    path: '/'
                }
            ],
            footerRightList: [{
                    name: '帮助中心',
                    path: '/'
                }, {
                    name: '高级弹幕',
                    path: '/'
                },
                {
                    name: '活动专题页',
                    path: '/'
                },
                {
                    name: '侵权申诉',
                    path: '/'
                },
                {
                    name: '活动中心',
                    path: '/'
                },
                {
                    name: '用户反馈论坛',
                    path: '/'
                },
                {
                    name: '壁纸站',
                    path: '/'
                },
                {
                    name: '广告合作',
                    path: '/'
                },
                {
                    name: '名人堂',
                    path: '/'
                },
                {
                    name: 'MCN管理中心',
                    path: '/'
                }
            ],
            footer: {
                partner: require('@/assets/images/partner.png'),
                pic110: require('@/assets/images/pic962110.png'),
                certify: require('@/assets/images/certify.png'),
            },
            spriteUrl: require('@/assets/images/sprite.png'),
        };
    },
    created() {

    },
    mounted() {
        setInterval(() => {
            this.closeEye();
        }, 3000)
    },
    methods: {
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
            this.bannerAnmiateData = {
                banner1: {
                    blur: 4,
                },
                banner2: {
                    blur: 0,
                    translateX: 0,
                    src: require("@/assets/images/banner2.png")
                },
                banner3: {
                    blur: 1,
                    translateX: -50,
                },
                banner4: {
                    blur: 4,
                    translateX: 0,
                },
                banner5: {
                    blur: 5,
                    translateX: 0,
                },
                banner6: {
                    blur: 6,
                    translateX: 0,
                },
            };
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
    },
};
</script>

<style lang="less">
.el-header {
    position: relative;

    .mini-header-banner {
        position: relative;

        .mini-header {
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 56px;
            text-shadow: 0 1px 1px rgba(0, 0, 0, .3) !important;

            .mini-header-content {
                position: relative;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                margin: 0 auto;
                padding: 10px 24px;
                line-height: 30px;

                .nav-link {
                    text-shadow: 0 1px 1px rgba(0, 0, 0, .3);

                    .nav-link-ul {
                        display: flex;
                        align-items: center;
                        height: 36px;

                        .nav-link-item {
                            margin-right: 12px;

                            i,
                            span {
                                vertical-align: middle;
                            }

                            i {
                                line-height: 1px;
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

                    .user-con {
                        display: flex;
                        align-items: center;

                        .user-con-item {
                            position: relative;
                            display: flex;
                            margin-left: 12px;
                            cursor: pointer;
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

    .wrap {
        position: relative;
        width: 1630px;
        margin: 0 auto;

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
                    }
                }
            }
        }
    }
}

.banner-layer-1-enter-active {
    transition: all 0.5s;
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

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

.el-footer {
    .link-box {
        font-size: 14px;
        height: 150px;
        display: flex;
        justify-content: space-between;

        .link-item {
            flex: 2;
            padding-right: 40px;
            margin-right: 40px;
            border-right: 1px solid #eee;

            ul {
                height: 110px;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;

                span {
                    font-size: 14px;
                }
            }

            .topic {
                font-size: 16px;
                color: #999;
                display: block;
                height: 20px;
                margin-bottom: 20px;
            }

            .link-text {
                display: inline-block;
                margin-bottom: 10px;
                width: 50%;
                height: 20px;
                cursor: pointer;
            }

            .no-margin {
                margin-bottom: 0;
            }
        }

        .link-b {
            a {
                width: 100/3% !important;
            }
        }
    }

    .footer-wrap {
        max-width: 1630px;
        min-width: 999px;
        margin: 0 auto;

        .footer-left {
            flex: 4;
            display: flex;
            justify-content: space-between;

            .link-b {
                flex: 3;
            }
        }

        .footer-right {
            flex: 1;
            display: flex;
            align-items: center;

            .link-c {
                padding-right: 0;
                border-right: none;
                margin-right: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .a-wraper {
                    flex: 1;
                    display: flex;
                    min-width: 70px;
                    justify-content: center;
                    align-items: center;

                    .bili-footer-font {
                        font-size: 50px;
                    }

                    p {
                        margin-top: 10px;
                        color: #212121;
                        height: 20px;
                        transition: color 0.2s;
                    }
                }
            }
        }
    }

    .partner {
        display: flex;
        padding-top: 30px;
        color: #999;

        .pic-box {
            width: 100px;
            margin-right: 20px;
        }

        .pic {
            width: 96px;
            height: 75px;
        }

        .pic962110 {
            margin: 5px 0;
            width: 100px;
            height: 40px;
        }

        p {
            line-height: 25px;
        }

        .text-con {

            span,
            p {
                margin-right: 15px;
                font-size: 12px;
                color: #999;
            }

            span {
                display: inline-block;
            }

            a {
                font-size: 12px;
                color: #999;
            }

            .sprite {
                display: inline-block;
                background-repeat: no-repeat;
                vertical-align: middle;
                margin-right: 3px;
            }

            .bg1 {
                width: 16px;
                height: 16px;
                background-position: 0 -2px;
            }

            .bg2 {
                width: 18px;
                height: 20px;
                background-position: -41px 0px;
            }

            .bg3 {
                width: 16px;
                height: 16px;
                background-position: -18px -3px;
            }
        }
    }
}

@media screen and (min-width: 0) and (max-width: 1438px) {

    .el-header .wrap,
    .el-footer .footer-wrap {
        width: 1110px !important;
    }
}

@media screen and (min-width: 1439px) and (max-width: 1654px) {

    .el-header .wrap,
    .el-footer .footer-wrap {
        width: 1198px !important;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {

    .el-header .wrap,
    .el-footer .footer-wrap {
        width: 1414px !important;
    }
}

@media screen and (min-width: 0) and (max-width: 1654px) {
    .el-header .wrap .friendship-link {
        width: 220px !important;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {
    .el-header .wrap .friendship-link {
        width: 242px !important;
    }
}

@media screen and (max-width: 1654px) {

    .wrap .page-tab .con li {
        width: 50px !important;
    }
    .wrap .page-tab .con li .round {
        margin: 0 6px 4px 6px;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {
    .wrap .page-tab .con li {
        width: 58px !important;
    }
    .wrap .page-tab .con li .round {
        margin: 0 10px 4px 10px;
    }
}
</style>
