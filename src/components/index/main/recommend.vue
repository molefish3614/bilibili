<template>
<div>
    <div class="space-between">
        <div class="focus-carousel home-slide">
            <van-swipe ref="swipe" class="ggc" :autoplay="6000" style="width: 550px; height: 242px;" :indicator-color="'#ffffff'" @click.native="swipeClickHandle">
                <van-swipe-item class="item" v-for="(item, index) in imagesData" :key="index">
                    <router-link :to="{path: '/'}" target="_blank"><img v-lazy="item.path" :alt="item.title" />
                        <p class="title">{{item.title}}</p>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
            <router-link :to="{path: '/'}" class="more" target="_blank">更多<i class="bilifont bili-icon_caozuo_qianwang"></i></router-link>
        </div>
        <div class="recommend-box">
            <div class="video-card-reco" :key="i" v-for="(item, i) in recommendBoxData">
                <div class="info-box">
                    <router-link :to="{path: item.link}" target="_blank"><img :src="item.img" alt="item.title">
                        <div class="info">
                            <p title="item.title" class="title">{{item.title}}</p>
                            <p class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>{{item.upName}}</p>
                            <p class="play">{{item.playCount}}</p>
                        </div>
                    </router-link>
                </div>
                <div class="watch-later-video watchlater black" @mouseenter="watchLaterHandle" @mouseleave="watchLaterHandle">
                    <transition name="watchlater-move">
                        <span v-show="showWatchLater" class="wl-tips" style="left: -21px">稍后再看</span>
                    </transition>
                </div>
            </div>
            <div class="btn prev" @click="prevHandle"><i class="bilifont bili-icon_caozuo_xiangzuo"></i></div>
            <div class="btn next" @click="nextHandle"><i class="bilifont bili-icon_caozuo_xiangyou"></i></div>
        </div>
    </div>
    <div class="space-between">
        <div class="extension">
            <div class="storey-title">
                <div class="l-con">
                    <i class="svg-icon bilifont bili-tuiguang" :style="{color: extendsData.iconColor}"></i>
                    <a target="_blank" class="name no-link">{{extendsData.title}}</a>
                    <div class="text-info">
                        <router-link :to="{path:'/'}" class="text-info-link hover-blue" target="_blank"><i class="bilifont bili-icon_xinxi_huo"></i>
                            {{extendsData.notice}}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="ext-box">
                <div class="video-card-common" :key="i" v-for="(item,i) in extendsData.data">
                    <div class="card-pic">
                        <router-link :to="{path: item.link}" target="_blank">
                            <img :src="item.img" width="206" height="116">
                            <div class="count">
                                <div class="left"></div>
                                <div class="right">
                                    <span>{{item.time}}</span>
                                </div>
                            </div>
                            <p class="ex-title hover-blue" :title="item.title">{{item.title}}</p>
                        </router-link>
                        <div class="watch-later-video watchlater black" @mouseenter="watchLaterHandle" @mouseleave="watchLaterHandle">
                            <transition name="watchlater-move">
                                <span v-show="showWatchLater" class="wl-tips" style="left: -21px">稍后再看</span>
                            </transition>
                        </div>
                    </div>
                    <router-link :to="{path:item.uplink}" class="ex-up hover-blue" target="_blank"><i class="bilifont bili-icon_xinxi_UPzhu"></i>{{item.upName}}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="bypb-window">
            <div class="online"><a href="javascript:;" target="_blank">在线列表</a></div>
            <router-link :to="{path: operateData.url}" target="_blank" class="operate-card" alt="这次会有什么惊喜？">
                <img :src="operateData.img" :alt="operateData.notice">
            </router-link>
        </div>
    </div>
    <div class="space-between">
        <div class="extension">
            <div class="storey-title">
                <div class="l-con">
                    <img :src="lolLiveData.icon" class="sprite">
                    <a target="_blank" class="name no-link">{{lolLiveData.title}}</a>
                </div>
            </div>
            <div class="ext-box">
                <div class="video-card-common" :key="i" v-for="(item,i) in lolLiveData.data">
                    <div class="card-pic">
                        <router-link :to="{path: item.url}" target="_blank">
                            <img :src="item.img" width="206" height="116">
                            <div class="count">
                                <div class="left">
                                    <span><i class="bilifont bili-icon_shipin_bofangshu"></i>{{item.playCount}}</span><span><i class="bilifont bili-icon_shipin_dianzanshu"></i>{{item.goods}}</span>
                                </div>
                                <div class="right">
                                    <span>{{item.time}}</span>
                                </div>
                            </div>
                            <p class="ex-title hover-blue" :title="item.title">{{item.title}}</p>
                        </router-link>
                        <div class="watch-later-video watchlater black" @mouseenter="watchLaterHandle" @mouseleave="watchLaterHandle">
                            <transition name="watchlater-move">
                                <span v-show="showWatchLater" class="wl-tips" style="left: -21px">稍后再看</span>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bypb-window ggpos">
            <router-link :to="{path: operateData.url}" target="_blank" class="operate-card" alt="这次会有什么惊喜？">
                <img :src="lolLiveData.activeImgUrl" :alt="lolLiveData.activeNotices">
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            showWatchLater: false,
            imagesData: [{
                    path: require('@/assets/images/carousel/1.jpg'),
                    title: '兄坑第二季今日开播'
                },
                {
                    path: require('@/assets/images/carousel/2.jpg'),
                    title: '今日C位出道，你就是主角 '
                },
                {
                    path: require('@/assets/images/carousel/3.jpg'),
                    title: '庄园小二静候各位侦探的到来~'
                },
                {
                    path: require('@/assets/images/carousel/4.jpg'),
                    title: 'K/DA女团，闪耀回归！'
                },
                {
                    path: require('@/assets/images/carousel/5.png'),
                    title: 'A妹回归！天王刘德华再发新专'
                },
            ],
            recPage: 1,
            recoData1: [{
                    title: '手把手教你做跨国大企业【沙雕观察3.23】',
                    img: require('@/assets/images/recommends/1.webp'),
                    playCount: '45.6万播放',
                    upName: 'hololive_Official',
                    link: '/',
                },
                {
                    title: '[30covers] LOL官方翻牌！KDA / MORE / 最强最快男声翻唱！英雄联盟女团回归！K/DA就是坠屌的！',
                    img: require('@/assets/images/recommends/2.webp'),
                    playCount: '9.9万播放',
                    upName: '野生三十',
                    link: '/',
                },
                {
                    title: '《 沙 雕 女 孩 的 探 戈 》',
                    img: require('@/assets/images/recommends/3.webp'),
                    playCount: '8.2万播放',
                    upName: '尤超白',
                    link: '/',
                },
                {
                    title: '【湊-阿库娅】Take Over - 所向无前',
                    img: require('@/assets/images/recommends/5.webp'),
                    playCount: '406.3万播放',
                    upName: '湊-阿库娅Official',
                    link: '/',
                },
                {
                    title: '新 概 念 宠 粉',
                    img: require('@/assets/images/recommends/6.webp'),
                    playCount: '21.2万播放',
                    upName: 'LexBurner',
                    link: '/',
                },
                {
                    title: 'iPhone 12 和 12 Pro 真的值得买吗？【值不值得买第456期】',
                    img: require('@/assets/images/recommends/7.webp'),
                    playCount: '14.5万播放',
                    upName: '钟文泽',
                    link: '/',
                },
                {
                    title: '职业教练带你复盘半决赛TES究竟输在哪里',
                    img: require('@/assets/images/recommends/4.webp'),
                    playCount: '16.1万播放',
                    upName: 'GFlamingo',
                    link: '/',
                },
                {
                    title: '【手书】名为绯赤艾莉欧的奇迹',
                    img: require('@/assets/images/recommends/8.webp'),
                    playCount: '4.6万播放',
                    upName: '手残又想秀',
                    link: '/',
                },
                {
                    title: '挑战全b站画质上限，无人能撑过一分钟！',
                    img: require('@/assets/images/recommends/9.webp'),
                    playCount: '87.3万播放',
                    upName: '血小板゚゚゚゚゚゚',
                    link: '/',
                },
                {
                    title: '住在树桩里，奇怪的灵感增加了！',
                    img: require('@/assets/images/recommends/10.webp'),
                    playCount: '43.1万播放',
                    upName: '蓝冰Gro',
                    link: '/',
                }
            ],
            recoData2: [{
                    title: '新 概 念 宠 粉',
                    img: require('@/assets/images/recommends/6.webp'),
                    playCount: '21.2万播放',
                    upName: 'LexBurner',
                    link: '/',
                },
                {
                    title: '手把手教你做跨国大企业【沙雕观察3.23】',
                    img: require('@/assets/images/recommends/1.webp'),
                    playCount: '45.6万播放',
                    upName: 'hololive_Official',
                    link: '/',
                },
                {
                    title: 'iPhone 12 和 12 Pro 真的值得买吗？【值不值得买第456期】',
                    img: require('@/assets/images/recommends/7.webp'),
                    playCount: '14.5万播放',
                    upName: '钟文泽',
                    link: '/',
                },
                {
                    title: '挑战全b站画质上限，无人能撑过一分钟！',
                    img: require('@/assets/images/recommends/9.webp'),
                    playCount: '87.3万播放',
                    upName: '血小板゚゚゚゚゚゚',
                    link: '/',
                },
                {
                    title: '职业教练带你复盘半决赛TES究竟输在哪里',
                    img: require('@/assets/images/recommends/4.webp'),
                    playCount: '16.1万播放',
                    upName: 'GFlamingo',
                    link: '/',
                },
                {
                    title: '【手书】名为绯赤艾莉欧的奇迹',
                    img: require('@/assets/images/recommends/8.webp'),
                    playCount: '4.6万播放',
                    upName: '手残又想秀',
                    link: '/',
                },
                {
                    title: '《 沙 雕 女 孩 的 探 戈 》',
                    img: require('@/assets/images/recommends/3.webp'),
                    playCount: '8.2万播放',
                    upName: '尤超白',
                    link: '/',
                },
                {
                    title: '[30covers] LOL官方翻牌！KDA / MORE / 最强最快男声翻唱！英雄联盟女团回归！K/DA就是坠屌的！',
                    img: require('@/assets/images/recommends/2.webp'),
                    playCount: '9.9万播放',
                    upName: '野生三十',
                    link: '/',
                },
                {
                    title: '住在树桩里，奇怪的灵感增加了！',
                    img: require('@/assets/images/recommends/10.webp'),
                    playCount: '43.1万播放',
                    upName: '蓝冰Gro',
                    link: '/',
                }, {
                    title: '【湊-阿库娅】Take Over - 所向无前',
                    img: require('@/assets/images/recommends/5.webp'),
                    playCount: '406.3万播放',
                    upName: '湊-阿库娅Official',
                    link: '/',
                }
            ],
            recoData3: [{
                    title: '【手书】名为绯赤艾莉欧的奇迹',
                    img: require('@/assets/images/recommends/8.webp'),
                    playCount: '4.6万播放',
                    upName: '手残又想秀',
                    link: '/',
                },
                {
                    title: '[30covers] LOL官方翻牌！KDA / MORE / 最强最快男声翻唱！英雄联盟女团回归！K/DA就是坠屌的！',
                    img: require('@/assets/images/recommends/2.webp'),
                    playCount: '9.9万播放',
                    upName: '野生三十',
                    link: '/',
                },
                {
                    title: 'iPhone 12 和 12 Pro 真的值得买吗？【值不值得买第456期】',
                    img: require('@/assets/images/recommends/7.webp'),
                    playCount: '14.5万播放',
                    upName: '钟文泽',
                    link: '/',
                },
                {
                    title: '住在树桩里，奇怪的灵感增加了！',
                    img: require('@/assets/images/recommends/10.webp'),
                    playCount: '43.1万播放',
                    upName: '蓝冰Gro',
                    link: '/',
                },
                {
                    title: '手把手教你做跨国大企业【沙雕观察3.23】',
                    img: require('@/assets/images/recommends/1.webp'),
                    playCount: '45.6万播放',
                    upName: 'hololive_Official',
                    link: '/',
                },
                {
                    title: '【湊-阿库娅】Take Over - 所向无前',
                    img: require('@/assets/images/recommends/5.webp'),
                    playCount: '406.3万播放',
                    upName: '湊-阿库娅Official',
                    link: '/',
                },
                {
                    title: '《 沙 雕 女 孩 的 探 戈 》',
                    img: require('@/assets/images/recommends/3.webp'),
                    playCount: '8.2万播放',
                    upName: '尤超白',
                    link: '/',
                },
                {
                    title: '新 概 念 宠 粉',
                    img: require('@/assets/images/recommends/6.webp'),
                    playCount: '21.2万播放',
                    upName: 'LexBurner',
                    link: '/',
                },
                {
                    title: '挑战全b站画质上限，无人能撑过一分钟！',
                    img: require('@/assets/images/recommends/9.webp'),
                    playCount: '87.3万播放',
                    upName: '血小板゚゚゚゚゚゚',
                    link: '/',
                },
                {
                    title: '职业教练带你复盘半决赛TES究竟输在哪里',
                    img: require('@/assets/images/recommends/4.webp'),
                    playCount: '16.1万播放',
                    upName: 'GFlamingo',
                    link: '/',
                }
            ],
            recommendBoxData: [{
                    title: '手把手教你做跨国大企业【沙雕观察3.23】',
                    img: require('@/assets/images/recommends/1.webp'),
                    playCount: '45.6万播放',
                    upName: 'hololive_Official',
                    link: '/',
                },
                {
                    title: '[30covers] LOL官方翻牌！KDA / MORE / 最强最快男声翻唱！英雄联盟女团回归！K/DA就是坠屌的！',
                    img: require('@/assets/images/recommends/2.webp'),
                    playCount: '9.9万播放',
                    upName: '野生三十',
                    link: '/',
                },
                {
                    title: '《 沙 雕 女 孩 的 探 戈 》',
                    img: require('@/assets/images/recommends/3.webp'),
                    playCount: '8.2万播放',
                    upName: '尤超白',
                    link: '/',
                },
                {
                    title: '【湊-阿库娅】Take Over - 所向无前',
                    img: require('@/assets/images/recommends/5.webp'),
                    playCount: '406.3万播放',
                    upName: '湊-阿库娅Official',
                    link: '/',
                },
                {
                    title: '新 概 念 宠 粉',
                    img: require('@/assets/images/recommends/6.webp'),
                    playCount: '21.2万播放',
                    upName: 'LexBurner',
                    link: '/',
                },
                {
                    title: 'iPhone 12 和 12 Pro 真的值得买吗？【值不值得买第456期】',
                    img: require('@/assets/images/recommends/7.webp'),
                    playCount: '14.5万播放',
                    upName: '钟文泽',
                    link: '/',
                },
                {
                    title: '职业教练带你复盘半决赛TES究竟输在哪里',
                    img: require('@/assets/images/recommends/4.webp'),
                    playCount: '16.1万播放',
                    upName: 'GFlamingo',
                    link: '/',
                },
                {
                    title: '【手书】名为绯赤艾莉欧的奇迹',
                    img: require('@/assets/images/recommends/8.webp'),
                    playCount: '4.6万播放',
                    upName: '手残又想秀',
                    link: '/',
                },
                {
                    title: '挑战全b站画质上限，无人能撑过一分钟！',
                    img: require('@/assets/images/recommends/9.webp'),
                    playCount: '87.3万播放',
                    upName: '血小板゚゚゚゚゚゚',
                    link: '/',
                },
                {
                    title: '住在树桩里，奇怪的灵感增加了！',
                    img: require('@/assets/images/recommends/10.webp'),
                    playCount: '43.1万播放',
                    upName: '蓝冰Gro',
                    link: '/',
                }
            ],
            extendsData: {
                title: '推广',
                notice: '双十一百万现金等你来',
                iconColor: '#FFD778',
                data: [{
                        title: '超人气up主竟组团打call，神秘应援一探究竟！',
                        img: require('@/assets/images/extends/1.jpg'),
                        time: '07:19',
                        upName: '梦想养成计划',
                        link: '/',
                        uplink: '/',
                    },
                    {
                        title: '“风犬少年”周游：刘闻钦的结局把我手机搞炸了',
                        img: require('@/assets/images/extends/2.png'),
                        time: '13:47',
                        upName: '哔斯卡金像奖',
                        link: '/',
                        uplink: '/'
                    },
                    {
                        title: '【琴】 大 姐 姐 ，琴 【原神】',
                        img: require('@/assets/images/extends/3.webp'),
                        time: '01:08',
                        upName: '瑟瑟发抖小韭菜',
                        link: '/',
                        uplink: '/',

                    },
                    {
                        title: '全网最高级出行方式，郑爽和李现祝您旅途愉快~',
                        img: require('@/assets/images/extends/4.jpg'),
                        time: '01:00',
                        upName: '地摊小表妹',
                        link: '/',
                        uplink: '/',

                    },
                    {
                        title: '耗时上百~你也想起舞嘛？燃爆踩点盛宴-Edge of My Life',
                        img: require('@/assets/images/extends/5.webp'),
                        time: '02:17',
                        upName: '苦瓜是甜的雪乃',
                        link: '/',
                        uplink: '/',

                    },
                    {
                        title: '自制小电视手办，四万三千两百种表情自动秒换，每一秒都不重样',
                        img: require('@/assets/images/extends/6.jpg'),
                        time: '07:33',
                        upName: '司马好奇',
                        link: '/',
                        uplink: '/',

                    },
                ]
            },
            operateData: {
                notice: '这次会有什么惊喜？',
                img: require('@/assets/images/extends/operate.png'),
                url: '/'
            },
            lolLiveData: {
                title: '2020英雄联盟全球总决赛',
                icon: require('@/assets/images/extends/S10.png'),
                activeImgUrl: require('@/assets/images/extends/active.png'),
                activeNotices: '投稿最高可参与瓜分56W现金！',
                data: [{
                        title: '[2020全球总决赛]10月25日半决赛 TES vs SN',
                        playCount: '449.3万',
                        goods: '3.9万',
                        time: '4:34:29',
                        url: '/',
                        img: require('@/assets/images/extends/11.jpg'),

                    },
                    {
                        title: '[2020全球总决赛]10月24日半决赛 G2 vs DWG',
                        playCount: '193.5万',
                        goods: '1.8万',
                        time: '4:06:23',
                        url: '/',
                        img: require('@/assets/images/extends/12.jpg'),

                    },
                    {
                        title: '[2020全球总决赛]10月18日八强赛 GEN vs G2',
                        playCount: '331.7万',
                        goods: '3.0万',
                        time: '3:09:25',
                        url: '/',
                        img: require('@/assets/images/extends/13.jpg'),

                    },
                    {
                        title: '[2020全球总决赛]10月17日八强赛 TES vs FNC',
                        playCount: '588.0万',
                        goods: '8.2万',
                        time: '4:49:26',
                        url: '/',
                        img: require('@/assets/images/extends/14.jpg'),

                    },
                    {
                        title: '【才浅手工】亚索的哥哥我来当！爆肝30天打造永恩亚扎卡纳之剑，还原度99%',
                        playCount: '177.8万',
                        goods: '30.8万',
                        time: '06:01',
                        url: '/',
                        img: require('@/assets/images/extends/15.jpg'),

                    },
                    {
                        title: '【猛男舞团】为LPL应援！K/DA《THE BADDEST》翻跳',
                        playCount: '140.3万',
                        goods: '11.4万',
                        time: '02:43',
                        url: '/',
                        img: require('@/assets/images/extends/16.jpg'),

                    },
                ]
            }
        }
    },
    created() {},
    mounted() {
        // 注意，vant插件轮播图没有提供点击indicators换页的API
        // 而且indicators是插件通过v-for循环生成的DOM，需要用this.$nextTick+异步操作获取到所有indicators的DOM集合
        // 通过for...of...遍历DOM集合给indicator添加index自定义属性以便点击indicator时获取到index
        this.$nextTick(() => {
            setTimeout(() => {
                let indicators = document.querySelector('.focus-carousel .ggc .van-swipe__indicators').children;
                let i = 0;
                for (let item of indicators) {
                    item.setAttribute('data-index', i);
                    i++;
                }
            })
        })

    },
    methods: {
        watchLaterHandle() {
            this.showWatchLater = !this.showWatchLater;
        },
        swipeClickHandle(e) {
            if (e.target.nodeName !== 'I') return;
            const index = e.target.getAttribute('data-index');
            this.$refs.swipe.swipeTo(index);
        },
        prevHandle() {
            if (this.recPage === 1) {
                this.recommendBoxData = this.recoData3;
                this.recPage = 3;
            } else if (this.recPage === 2) {
                this.recommendBoxData = this.recoData1;
                this.recPage = 1;
            } else {
                this.recommendBoxData = this.recoData2;
                this.recPage = 2;
            }
        },
        nextHandle() {
            if (this.recPage === 1) {
                this.recommendBoxData = this.recoData2;
                this.recPage = 2;
            } else if (this.page === 2) {
                this.recommendBoxData = this.recoData3;
                this.recPage = 3;
            } else {
                this.recommendBoxData = this.recoData1;
                this.recPage = 1;
            }
        },
    }
}
</script>

<style>

</style>
