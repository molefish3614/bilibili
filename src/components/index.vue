<template>
<div>
    <el-container>
        <el-header height="263px" style="padding: 0">
            <div class="mini-header-banner" @mouseenter="bannerMouseEnter" @mousemove="bannerMouseMove" @mouseleave="bannerMouseLeave">
                <div class="mini-header">
                    <div class="mini-header-content">
                        <div class="nav-link">
                            <ul class="nav-link-ul">
                                <li class="nav-link-item" :key="i" v-for="(item, i) in navItem">
                                    <router-link :to="{ path: '/' }"><i v-if="item.hasIconfont" :class="item.iconfontName"></i>{{ item.name }}</router-link>
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
                    <div class="logo">
                        <router-link to="/" class="head-logo"><img src="../assets/images/bilbili-autumn.png" style="width: 180px"></router-link>
                    </div>
                </div>
            </div>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
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
                    name: "会员购",
                    hasIconfont: true,
                    iconfontName: "bilifont bili-icon_dingdao_xiazaiapp",
                },
            ],
            navSearchPlaceholder: '这是假数据，理论上这里的文本应该是从后台请求来的',
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
            console.log('进入');
            this.outerTransition = '';
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
                //一直增大到14
                blurChange4 = 4 + (Math.abs(e.pageX - this.inBannerMouseX) / htmlWidth) * 10;
            }
            let translateX4 = ((e.pageX - this.inBannerMouseX) / htmlWidth) * 36;
            this.bannerAnmiateData.banner4.blur = blurChange4;
            this.bannerAnmiateData.banner4.translateX = translateX4;
            // banner5
            let blurChange5 = 0;
            if (e.pageX - this.inBannerMouseX > 0) {
                //5先减小后增大10
                blurChange5 = 5 - ((e.pageX - this.inBannerMouseX) / htmlWidth) * 10;
                blurChange5 = blurChange5 < 0 ? -blurChange5 : blurChange5;
            } else {
                //一直增大到15
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
            console.log('离开');
        },
        async closeEye() {
            this.bannerAnmiateData.banner2.src = this.banner2SrcHalf;
            await this.common.sleep(50);
            this.bannerAnmiateData.banner2.src = this.banner2SrcClose;
            await this.common.sleep(50);
            this.bannerAnmiateData.banner2.src = this.banner2SrcHalf;
            await this.common.sleep(50);
            this.bannerAnmiateData.banner2.src = this.banner2SrcOrigin;
        }
    },
};
</script>

<style lang="less" scope>
.el-header {
    position: relative;

    .mini-header-banner {
        position: relative;
        .mini-header {
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 56px;

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
                        transition: transform .5s ease,filter .5s ease;
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
}

.banner-layer-1-enter-active {
    transition: all 0.5s;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
</style>
