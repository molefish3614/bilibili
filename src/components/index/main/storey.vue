<template>
<div>
    <div class="proxy-box">
        <div id="live">
            <router-link :to="{path: '/'}" class="banner-card wrap"><img :src="liveData.bannerCard"></router-link>
            <div class="space-between">
                <div class="live-list">
                    <div class="storey-title">
                        <div class="l-con">
                            <i class="svg-icon" :class="liveData.iconClass" :style="{color: liveData.iconColor}"></i>
                            <a target="_blank" class="name no-link">{{liveData.title}}</a>
                            <div class="text-info"><span>{{liveData.info}}</span></div>
                        </div>
                        <div class="exchange-btn">
                            <div class="btn btn-change">
                                <i class="bilifont bili-icon_caozuo_huanyihuan"></i>换一换
                            </div>
                            <router-link :to="{path: '/'}" class="btn more">更多<i class="bilifont bili-icon_caozuo_qianwang"></i></router-link>
                        </div>
                    </div>
                    <div class="zone-list-box">
                        <div class="live-card" :key="i" v-for="(item,i) in liveData.data">
                            <router-link :to="{path: item.path}">
                                <div class="pic">
                                    <img :src="item.img" alt="">
                                    <p class="count"><i class="bilifont bili-icon_xinxi_renqi"></i>{{item.playCount}}</p>
                                </div>
                                <div class="up">
                                    <div class="up-cover">
                                        <img :src="item.upAvatar" alt="" class="face">
                                        <i v-if="item.authCate" :style="{backgroundImage:item.auth}" class="svg-icon vip-icon" :class="item.authCate"></i>
                                    </div>
                                    <div class="txt">
                                        <p class="name hover-blue">{{item.upName}}</p>
                                        <p title="KPL官方赛事直播间" class="desc">{{item.liveRoom}}</p>
                                        <p class="tag">{{item.liveCate}}</p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class=" live-tabs">
                    <div class="tab-switch">
                        <div class="tab-switch-item" :class=" currentActiveTab === 0 ? 'on' : ''" @click="tabSwitch(0)">直播排行</div>
                        <div class="tab-switch-item" :class=" currentActiveTab === 1 ? 'on' : ''" @click="tabSwitch(1)">关注的主播</div>
                        <div class="tab-switch-item" :class=" currentActiveTab === 2 ? 'on' : ''" @click="tabSwitch(2)">为你推荐</div>
                    </div>
                    <div class="live-rank" :style="{display:tabsDisplay[0]}">
                        <router-link :to="{path: item.roomLink}" class="live-rank-item" :key="i" v-for="(item, i) in liveRankData">
                            <div class="rank-face">
                                <span v-if="item.rank" class="number" :class="item.rank <= 3 ? 'on' : ''">{{item.rank}}</span>
                                <img :src="item.avatar" alt="">
                                <div class="txt">
                                    <p>{{item.upName}}</p>
                                    <p class="p2">{{item.liveRoom}}</p>
                                </div>
                            </div>
                            <div class="count">
                                <i class="bilifont bili-icon_xinxi_renqi"></i>{{item.playCount}}
                            </div>
                        </router-link>
                    </div>
                    <div class="live-rank" :style="{display:tabsDisplay[1]}">
                        <router-link :to="{path: item.roomLink}" class="live-rank-item" :key="i" v-for="(item, i) in liveWatchingData">
                            <div class="rank-face">
                                <span v-if="item.rank" class="number" :class="item.rank <= 3 ? 'on' : ''">{{item.rank}}</span>
                                <img :src="item.avatar" alt="">
                                <div class="txt">
                                    <p>{{item.upName}}</p>
                                    <p class="p2">{{item.liveRoom}}</p>
                                </div>
                            </div>
                            <div class="count">
                                <i class="bilifont bili-icon_xinxi_renqi"></i>{{item.playCount}}
                            </div>
                        </router-link>
                    </div>
                    <div class="recommend-activity home-slide" :style="{display:tabsDisplay[2]}">
                        <div class="carousel">
                            <van-swipe ref="swipe" class="van-slide" :autoplay="6000" style="width: 320px; height: 330px;" :indicator-color="'#ffffff'" @click.native="swipeClickHandle">
                                <van-swipe-item class="item" v-for="(item, index) in swipeData" :key="index">
                                    <router-link :to="{path: item.link}"><img v-lazy="item.path" :alt="item.title" />
                                        <p class="title">{{item.title}}</p>
                                    </router-link>
                                </van-swipe-item>
                            </van-swipe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            liveData: {
                bannerCard: require('@/assets/images/storey/banner-card.jpg'),
                iconClass: 'bilifont bili-live',
                iconColor: '#48CFE5',
                title: '正在直播',
                info: '当前共有 17389 个在线直播',
                data: [{
                        img: require('@/assets/images/storey/live/1.webp'),
                        path: '/',
                        playCount: '216.1万',
                        upAvatar: require('@/assets/images/storey/live/1-avatar.webp'),
                        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
                        authCate: 'blue-auth',
                        upName: '哔哩哔哩王者荣耀赛事',
                        liveRoom: 'KPL官方赛事直播间',
                        liveCate: '王者荣耀'
                    },
                    {
                        img: require('@/assets/images/storey/live/2.webp'),
                        path: '/',
                        playCount: '4.8万',
                        upAvatar: require('@/assets/images/storey/live/2-avatar.webp'),
                        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
                        authCate: 'yellow-auth',
                        upName: '慕橙mmm',
                        liveRoom: '【点唱】实力唱见，魅力开唱！',
                        liveCate: '唱见电台'
                    },
                    {
                        img: require('@/assets/images/storey/live/3.webp'),
                        path: '/',
                        playCount: '6.1万',
                        upAvatar: require('@/assets/images/storey/live/3-avatar.webp'),
                        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
                        authCate: '',
                        upName: '百星野王初夏',
                        liveRoom: '八块腹肌前职业四国服带粉收徒送金牌',
                        liveCate: '王者荣耀'
                    },
                    {
                        img: require('@/assets/images/storey/live/4.webp'),
                        path: '/',
                        playCount: '14.1万',
                        upAvatar: require('@/assets/images/storey/live/4-avatar.webp'),
                        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
                        authCate: 'yellow-auth',
                        upName: '热血少年阿某',
                        liveRoom: '我要把43999玩个遍！',
                        liveCate: '其他单机'
                    },
                    {
                        img: require('@/assets/images/storey/live/5.webp'),
                        path: '/',
                        playCount: '5047',
                        upAvatar: require('@/assets/images/storey/live/5-avatar.webp'),
                        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
                        authCate: 'blue-auth',
                        upName: '智源研究院',
                        liveRoom: 'CCL 2020第十九届中国计算语言大会',
                        liveCate: '陪伴学习'
                    },
                    {
                        img: require('@/assets/images/storey/live/6.webp'),
                        path: '/',
                        playCount: '6775',
                        upAvatar: require('@/assets/images/storey/live/6-avatar.webp'),
                        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
                        authCate: 'yellow-auth',
                        upName: '特莉丝忒',
                        liveRoom: '梦游了',
                        liveCate: '虚拟主播'
                    },
                    {
                        img: require('@/assets/images/storey/live/7.webp'),
                        path: '/',
                        playCount: '6.1万',
                        upAvatar: require('@/assets/images/storey/live/7-avatar.webp'),
                        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
                        authCate: 'yellow-auth',
                        upName: '亚洲图片',
                        liveRoom: '嘟嘟可在哪里',
                        liveCate: '原神'
                    },
                    {
                        img: require('@/assets/images/storey/live/8.webp'),
                        path: '/',
                        playCount: '44.9万',
                        upAvatar: require('@/assets/images/storey/live/8-avatar.webp'),
                        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
                        authCate: 'yellow-auth',
                        upName: '陈哥1',
                        liveRoom: '先皇冠后苦痛之环',
                        liveCate: '其他单机'
                    },
                    {
                        img: require('@/assets/images/storey/live/9.webp'),
                        path: '/',
                        playCount: '5.1万',
                        upAvatar: require('@/assets/images/storey/live/9-avatar.webp'),
                        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
                        authCate: 'yellow-auth',
                        upName: '花里胡哨草履虫',
                        liveRoom: '偷偷玩~',
                        liveCate: '其他单机'
                    }, {
                        img: require('@/assets/images/storey/live/10.webp'),
                        path: '/',
                        playCount: '8.3万',
                        upAvatar: require('@/assets/images/storey/live/10-avatar.webp'),
                        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
                        authCate: 'yellow-auth',
                        upName: '雀魂麻将majsoul',
                        liveRoom: '雀魂四象战DAY3 8强战',
                        liveCate: '综合棋牌'
                    }, {
                        img: require('@/assets/images/storey/live/11.webp'),
                        path: '/',
                        playCount: '6218',
                        upAvatar: require('@/assets/images/storey/live/11-avatar.webp'),
                        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
                        authCate: '',
                        upName: '西娅Official',
                        liveRoom: '西娅打鲨鱼！Raft！！',
                        liveCate: '虚拟主播'
                    }, {
                        img: require('@/assets/images/storey/live/12.webp'),
                        path: '/',
                        playCount: '65.5万',
                        upAvatar: require('@/assets/images/storey/live/12-avatar.webp'),
                        auth: 'url(' + require('@/assets/images/user-auth.png') + ')',
                        authCate: 'yellow-auth',
                        upName: '某幻君',
                        liveRoom: '哈',
                        liveCate: '其他单机'
                    }
                ]
            },
            liveRankData: [{
                    rank: 1,
                    avatar: require('@/assets/images/storey/live/rank/1.webp'),
                    upName: '绯赤艾莉欧Official',
                    liveRoom: '【B限定】雑多配信！Halloween！',
                    playCount: '1071.1万',
                    roomLink: '/'
                },
                {
                    rank: 2,
                    avatar: require('@/assets/images/storey/live/rank/2.webp'),
                    upName: '哔哩哔哩王者荣耀赛事',
                    liveRoom: 'KPL官方赛事直播间',
                    playCount: '216.1万',
                    roomLink: '/'
                }, {
                    rank: 3,
                    avatar: require('@/assets/images/storey/live/rank/3.webp'),
                    upName: '哔哩哔哩英雄联盟赛事',
                    liveRoom: '【直播】英雄联盟电竞嘉年华',
                    playCount: '180.9万',
                    roomLink: '/'
                }, {
                    rank: 4,
                    avatar: require('@/assets/images/storey/live/rank/4.webp'),
                    upName: '花少北丶',
                    liveRoom: '请不要把作业都留在最后写',
                    playCount: '150.0万',
                    roomLink: '/'
                }, {
                    rank: 5,
                    avatar: require('@/assets/images/storey/live/rank/5.webp'),
                    upName: '老骚豆腐',
                    liveRoom: '【豆腐】45级刷圣遗物！',
                    playCount: '104.9万',
                    roomLink: '/'
                }, {
                    rank: 6,
                    avatar: require('@/assets/images/storey/live/rank/6.webp'),
                    upName: 'C酱です',
                    liveRoom: '轩辕剑柒 困难',
                    playCount: '74.2万',
                    roomLink: '/'
                },
            ],
            liveWatchingData: [{
                avatar: require('@/assets/images/storey/live/watching/1.webp'),
                upName: '不明',
                liveRoom: '不会吧不会吧',
                playCount: '4',
                roomLink: '/'
            }, {
                avatar: require('@/assets/images/storey/live/watching/2.webp'),
                upName: '笔记本维修厮',
                liveRoom: '一起来嘎聊吧',
                playCount: '5.4万',
                roomLink: '/'
            }, {
                avatar: require('@/assets/images/storey/live/watching/3.webp'),
                upName: '北极熊剩饭',
                liveRoom: '【剩饭】我叉宝呢',
                playCount: '11.7万',
                roomLink: '/'
            }, {
                avatar: require('@/assets/images/storey/live/watching/4.webp'),
                upName: '还有一天就放假了',
                liveRoom: '今天妈妈不在家',
                playCount: '7376万',
                roomLink: '/'
            }, {
                avatar: require('@/assets/images/storey/live/watching/5.webp'),
                upName: '资深小狐狸',
                liveRoom: '苏军游击队',
                playCount: '6.2万',
                roomLink: '/'
            }, {
                avatar: require('@/assets/images/storey/live/watching/6.webp'),
                upName: '西鸡弗斯',
                liveRoom: '孤独万圣夜黑楼',
                playCount: '3036',
                roomLink: '/'
            }, ],
            swipeData: [{
                title: '轩辕出鞘 传说再起！《轩辕剑柒》主播招募',
                path: require('@/assets/images/storey/live/sw1.webp'),
                link: '/'
            }, {
                title: '2020 CFM 传奇杯',
                path: require('@/assets/images/storey/live/sw2.webp'),
                link: '/'
            }],
            // 注：由于vant轮播图插件如果一开始就将其设为display：block,再将其显示会报获取不到宽度
            // 所有这里一开始先显示，然后再mount的nextTrick中将其display设为：none就不会报错了
            tabsDisplay: ['block', 'none', 'block'],
            currentActiveTab: 0,
        }
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                let indicators = document.querySelector('.home-slide .van-slide .van-swipe__indicators').children;
                let i = 0;
                for (let item of indicators) {
                    item.setAttribute('data-index', i);
                    i++;
                }
                this.tabsDisplay = ['block', 'none', 'none'];
            })
        })
    },
    methods: {
        swipeClickHandle(e) {
            if (e.target.nodeName !== 'I') return;
            const index = e.target.getAttribute('data-index');
            this.$refs.swipe.swipeTo(index);
        },
        tabSwitch(num) {
            this.currentActiveTab = num;
            if (num === 0) this.tabsDisplay = ['block', 'none','none' ]
            else if (num === 1) this.tabsDisplay = ['none', 'block','none']
            else this.tabsDisplay = ['none', 'none', 'block']
        }
    }
}
</script>

<style lang="less" scoped>
.storey-box .proxy-box {
    min-height: 1000px;
}

.banner-card {
    position: relative;
    display: block;
    max-height: 134px;
    margin-bottom: 46px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 2px;
    }
}

.storey-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    height: 36px;

    .l-con {
        display: inline-flex;

        .svg-icon {
            margin-right: 6px;
        }
    }
}

.svg-icon {
    overflow: hidden;
    width: 36px;
    height: 36px;
    vertical-align: middle;
    fill: currentColor;
    font-size: 36px;
}

.exchange-btn,
.exchange-btn .btn {
    display: flex;
}

.exchange-btn .btn-change {
    padding: 0 0 0 6px;
    width: 72px;
}

.exchange-btn .btn {
    align-items: center;
    cursor: pointer;
    height: 22px;
    text-align: center;
    border: 1px solid silver;
    border-radius: 2px;
    font-size: 12px;
    color: #505050;
    transition: all .2s;
    line-height: 16px;
}

.exchange-btn .btn:hover {
    background-color: #f4f4f4;
}

.exchange-btn .btn-change .bilifont {
    margin-right: 4px;
    transition: all .5s;
}

.exchange-btn .btn .bilifont {
    vertical-align: middle;
}

.exchange-btn .btn:hover i.bili-icon_caozuo_huanyihuan {
    transform: rotate(-360deg);
    transition: transform .4s;
}

.exchange-btn .more {
    padding: 0 0 0 12px;
    width: 58px;
    margin-left: 12px;
}

.zone-list-box {
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1286px;
    height: 404px;
}

.live-card {
    width: 206px;
}

.live-card .pic {
    position: relative;
    display: block;
    cursor: pointer;
    margin-bottom: 10px;
    width: 100%;
    height: 116px;
}

.live-card .pic img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
}

.live-card .pic .count {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    font-size: 12px;
    padding: 6px 8px;
    height: 28px;
    display: flex;
    align-items: center;
    line-height: 16px;
}

.live-card .pic .count .bilifont {
    margin-right: 4px;
}

.live-card .up {
    display: block;
    display: flex;
    justify-content: space-between;
    line-height: 16px;
}

.live-card .up .up-cover {
    position: relative;
}

.live-card .up .up-cover .face {
    width: 36px;
    height: 36px;
    display: inline-block;
    border-radius: 50%;
    background: #f7f7f7;
}

.live-card .up .up-cover .vip-icon {
    position: absolute;
    right: -4px;
    top: 23px;
    width: 15px;
    height: 15px;
}

.live-card .up .up-cover .blue-auth {
    background-repeat: no-repeat;
    background-position: -3px -42px;
    background-size: 80px 80px;
}

.live-card .up .up-cover .yellow-auth {
    background-repeat: no-repeat;
    background-position: -31px -42px;
    background-size: 80px 80px;
}

.live-card .up .txt {
    width: 158px;
}

.live-card .up .txt p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 20px;
}

.live-card .up .txt .name {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
}

.live-card .up .txt .desc {
    font-size: 12px;
    color: #505050;
    line-height: 18px;
    margin-top: 2px;
}

.live-card .up .txt .tag {
    font-size: 12px;
    line-height: 16px;
    color: #999;
    margin-top: 8px;
}

.live-tabs {
    width: 320px;
}

.live-tabs .tab-switch {
    display: flex;
    height: 36px;
    margin-right: 16px;
    margin-bottom: 16px;
    align-items: center;
}

.live-tabs .tab-switch .tab-switch-item {
    font-size: 12px;
    line-height: 18px;
    height: 22px;
    margin-right: 12px;
    cursor: pointer;
}

.live-tabs .tab-switch .tab-switch-item.on {
    border-bottom: 1px solid #00a1d6;
    color: #00a1d6;
}

.live-rank .live-rank-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
}

.live-rank .live-rank-item:hover .txt p:first-child {
    color: #00a1d6 !important;
    transition: color .3s !important;
}

.live-rank .live-rank-item .rank-face {
    display: flex;
    align-items: center;
}

.live-rank .live-rank-item .number {
    font-size: 14px;
    color: #999;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    margin-right: 12px;
}

.live-rank .live-rank-item .number.on {
    color: #fff;
    background: #00a1d6;
}

.live-rank .live-rank-item img {
    width: 44px;
    height: 44px;
    border-radius: 44px;
    margin-right: 12px;
}

.live-rank .live-rank-item .txt {
    display: inline-block;
    margin-right: 10px;
    width: 158px;
    vertical-align: middle;
}

.live-rank .live-rank-item .txt p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.live-rank .live-rank-item .txt p:first-child {
    font-size: 14px;
    font-weight: 500;
}

.live-rank .live-rank-item .txt p.p2 {
    color: #505050;
    line-height: 18px;
    margin-top: 2px;
}

.live-rank .live-rank-item .count {
    color: #999;
    font-size: 12px;
    display: flex;
    white-space: nowrap;
    padding-top: 4px;
}

.live-rank .live-rank-item .count .bilifont {
    margin-right: 4px;
}

.recommend-activity {
    position: relative;
    height: 330px;
}

.recommend-activity .carousel,
.recommend-activity .van-slide {
    position: relative;
    width: 100% !important;
    height: 100% !important;
}

.home-slide .van-slide {
    z-index: 0;
}

.home-slide .trigger {
    position: absolute;
    right: 12px;
    bottom: 12px;
    z-index: 10;
}

.recommend-activity .carousel img,
.recommend-activity .van-slide img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
}

.home-slide .item .title {
    position: absolute;
    bottom: 10px;
    left: 12px;
    display: flex;
    overflow: hidden;
    align-items: center;
    width: 70%;
    color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
}
</style>
