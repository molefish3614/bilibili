<template>
<div>
    <div class="proxy-box">
        <div id="live">
            <router-link :to="{path: liveData.partUrl}" class="banner-card wrap" target="_blank"><img :src="liveData.bannerCard"></router-link>
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
                            <router-link :to="{path: '/'}" class="btn more" target="_blank">更多<i class="bilifont bili-icon_caozuo_qianwang"></i></router-link>
                        </div>
                    </div>
                    <div class="zone-list-box">
                        <div class="live-card" :key="i" v-for="(item,i) in liveData.data">
                            <router-link :to="{path: item.path}" target="_blank">
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
                                        <p :title="item.liveRoom" class="desc">{{item.liveRoom}}</p>
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
                        <router-link :to="{path: item.roomLink}" class="live-rank-item" :key="i" v-for="(item, i) in liveData.liveRankData" target="_blank">
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
                        <router-link :to="{path: item.roomLink}" class="live-rank-item" :key="i" v-for="(item, i) in liveData.liveWatchingData" target="_blank">
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
                                <van-swipe-item class="item" v-for="(item, index) in liveData.swipeData" :key="index">
                                    <router-link :to="{path: item.link}" target="_blank"><img v-lazy="item.path" :alt="item.title" />
                                        <p class="title">{{item.title}}</p>
                                    </router-link>
                                </van-swipe-item>
                            </van-swipe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="douga">
            <div class="space-between">
                <div class="card-list">
                    <div class="storey-title">
                        <div class="l-con">
                            <i class="svg-icon"></i>
                            <router-link :to="dougaData.partUrl" target="_blank" class="name hover-blue">{{dougaData.title}}</router-link>
                        </div>
                        <div class="exchange-btn">
                            <div class="btn btn-change">
                                <i class="bilifont bili-icon_caozuo_huanyihuan"></i>换一换
                            </div>
                            <router-link :to="{path: '/'}" class="btn more" target="_blank">更多<i class="bilifont bili-icon_caozuo_qianwang"></i></router-link>
                        </div>
                    </div>
                    <div class="zone-list-box">
                        <div class="video-card-common" :key="i" v-for="(item,i) in dougaData.data">
                            <div class="card-pic">
                                <router-link :to="{path: item.path}" target="_blank">
                                    <img :src="item.img" alt="">
                                    <div class="count">
                                        <div class="left">
                                            <span><i class="bilifont bili-icon_shipin_bofangshu"></i>{{item.playCount}}</span>
                                            <span><i class="bilifont bili-icon_shipin_dianzanshu"></i>{{item.goods}}</span>
                                        </div>
                                        <div class="right"><span>{{item.time}}</span></div>
                                    </div>
                                    <i v-if="item.rank" class="crown" :class="item.rank"></i>
                                </router-link>
                                <div class="watch-later-video watchlater black" @mouseenter="watchLaterHandle" @mouseleave="watchLaterHandle">
                                    <transition name="watchlater-move">
                                        <span v-show="showWatchLater" class="wl-tips" style="left: -21px">稍后再看</span>
                                    </transition>
                                </div>
                            </div>
                            <router-link :to="{path:item.path}" class="title hover-blue" :title="item.title" target="_blank">{{item.title}}</router-link>
                            <router-link :to="{path:item.upHome}" class="up hover-blue" target="_blank"><i class="bilifont bili-icon_xinxi_UPzhu"></i>{{item.upName}}</router-link>
                        </div>
                    </div>
                </div>
                <div class="rank-list">
                    <div class="rank-header">
                        <span class="name">排行榜</span>
                        <router-link :to="{path: '/'}" class="more" target="_blank">更多<i class="bilifont bili-icon_caozuo_qianwang"></i></router-link>
                    </div>
                    <div class="rank-wrap" :key="index" v-for="(item, index) in dougaData.rankData" @mouseenter="item.pvcShow = true" @mouseleave="item.pvcShow = false">
                        <span class="number" :class="item.number <= 3 ? 'on' : ''">{{item.number}}</span>
                        <div class="preview">
                            <div class="pic" v-if="item.number === 1">
                                <router-link :to="{path: item.url}" class="link">
                                    <img :src="item.img" alt="">
                                </router-link>
                                <div class="watch-later-video watchlater black" @mouseenter="watchLaterHandle" @mouseleave="watchLaterHandle">
                                    <transition name="watchlater-move">
                                        <span v-show="showWatchLater" class="wl-tips" style="left: -21px">稍后再看</span>
                                    </transition>
                                </div>
                            </div>
                            <div :class="item.number === 1 ? 'txt' : ''">
                                <router-link :to="{path: item.url}" target="_blank" class="link">
                                    <p :title="item.title" class="hover-blue" :class="item.number > 1 ? 'title' : ''">{{item.title}}</p>
                                </router-link><span v-if="item.grade">综合得分：{{item.grade}}</span>
                            </div>
                        </div>
                        <transition name="pvc-fade">
                            <div class="popover-video-card pvc" v-show="item.pvcShow">
                                <div class="content"><img :src="item.img" alt="">
                                    <div class="info">
                                        <p class="f-title">{{item.title}}</p>
                                        <p class="subtitle"><span class="name">{{item.upName}}</span><span class="point">·</span><span class="time">{{item.createTime}}</span></p>
                                    </div>
                                </div>
                                <div class="count">
                                    <ul>
                                        <li><i class="bilifont bili-icon_shipin_bofangshu"></i><span>{{item.playCount}}</span></li>
                                        <li><i class="bilifont bili-icon_shipin_danmushu"></i><span>{{item.danmakuCount}}</span></li>
                                        <li><i class="bilifont bili-icon_shipin_shoucangshu"></i><span>{{item.collects}}</span></li>
                                        <li><i class="bilifont bili-icon_shipin_yingbishu"></i><span>{{item.coins}}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
        <div id="kichiku">
            <div class="space-between">
                <div class="card-list">
                    <div class="storey-title">
                        <div class="l-con">
                            <i class="svg-icon"></i>
                            <router-link :to="kichikuData.partUrl" target="_blank" class="name hover-blue">{{kichikuData.title}}</router-link>
                        </div>
                        <div class="exchange-btn">
                            <div class="btn btn-change">
                                <i class="bilifont bili-icon_caozuo_huanyihuan"></i>换一换
                            </div>
                            <router-link :to="{path: '/'}" class="btn more" target="_blank">更多<i class="bilifont bili-icon_caozuo_qianwang"></i></router-link>
                        </div>
                    </div>
                    <div class="zone-list-box">
                        <div class="video-card-common" :key="i" v-for="(item,i) in kichikuData.data">
                            <div class="card-pic">
                                <router-link :to="{path: item.path}" target="_blank">
                                    <img :src="item.img" alt="">
                                    <div class="count">
                                        <div class="left">
                                            <span><i class="bilifont bili-icon_shipin_bofangshu"></i>{{item.playCount}}</span>
                                            <span><i class="bilifont bili-icon_shipin_dianzanshu"></i>{{item.goods}}</span>
                                        </div>
                                        <div class="right"><span>{{item.time}}</span></div>
                                    </div>
                                    <i v-if="item.rank" class="crown" :class="item.rank"></i>
                                </router-link>
                                <div class="watch-later-video watchlater black" @mouseenter="watchLaterHandle" @mouseleave="watchLaterHandle">
                                    <transition name="watchlater-move">
                                        <span v-show="showWatchLater" class="wl-tips" style="left: -21px">稍后再看</span>
                                    </transition>
                                </div>
                            </div>
                            <router-link :to="{path:item.path}" class="title hover-blue" :title="item.title" target="_blank">{{item.title}}</router-link>
                            <router-link :to="{path:item.upHome}" class="up hover-blue" target="_blank"><i class="bilifont bili-icon_xinxi_UPzhu"></i>{{item.upName}}</router-link>
                        </div>
                    </div>
                </div>
                <div class="rank-list">
                    <div class="rank-header">
                        <span class="name">排行榜</span>
                        <router-link :to="{path: '/'}" class="more" target="_blank">更多<i class="bilifont bili-icon_caozuo_qianwang"></i></router-link>
                    </div>
                    <div class="rank-wrap" :key="index" v-for="(item, index) in kichikuData.rankData" @mouseenter="item.pvcShow = true" @mouseleave="item.pvcShow = false">
                        <span class="number" :class="item.number <= 3 ? 'on' : ''">{{item.number}}</span>
                        <div class="preview">
                            <div class="pic" v-if="item.number === 1">
                                <router-link :to="{path: item.url}" class="link" target="_blank">
                                    <img :src="item.img" alt="">
                                </router-link>
                                <div class="watch-later-video watchlater black" @mouseenter="watchLaterHandle" @mouseleave="watchLaterHandle">
                                    <transition name="watchlater-move">
                                        <span v-show="showWatchLater" class="wl-tips" style="left: -21px">稍后再看</span>
                                    </transition>
                                </div>
                            </div>
                            <div :class="item.number === 1 ? 'txt' : ''">
                                <router-link :to="{path: item.url}" target="_blank" class="link">
                                    <p :title="item.title" class="hover-blue" :class="item.number > 1 ? 'title' : ''">{{item.title}}</p>
                                </router-link><span v-if="item.grade">综合得分：{{item.grade}}</span>
                            </div>
                        </div>
                        <transition name="pvc-fade">
                            <div class="popover-video-card pvc" v-show="item.pvcShow">
                                <div class="content"><img :src="item.img" alt="">
                                    <div class="info">
                                        <p class="f-title">{{item.title}}</p>
                                        <p class="subtitle"><span class="name">{{item.upName}}</span><span class="point">·</span><span class="time">{{item.createTime}}</span></p>
                                    </div>
                                </div>
                                <div class="count">
                                    <ul>
                                        <li><i class="bilifont bili-icon_shipin_bofangshu"></i><span>{{item.playCount}}</span></li>
                                        <li><i class="bilifont bili-icon_shipin_danmushu"></i><span>{{item.danmakuCount}}</span></li>
                                        <li><i class="bilifont bili-icon_shipin_shoucangshu"></i><span>{{item.collects}}</span></li>
                                        <li><i class="bilifont bili-icon_shipin_yingbishu"></i><span>{{item.coins}}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="spec-rec space-between wrap">
        <div class="card-list">
            <div class="storey-title">
                <div class="l-con">
                    <i class="svg-icon"></i>
                    <router-link :to="specRecData.partUrl" target="_blank" class="name hover-blue">{{specRecData.title}}</router-link>
                </div>
            </div>
            <div class="zone-list-box">
                <div class="video-card-common" :key="i" v-for="(item,i) in specRecData.data">
                    <div class="card-pic">
                        <router-link :to="{path: item.path}" target="_blank">
                            <img :src="item.img" alt="">
                            <div class="count">
                                <div class="left">
                                    <span><i class="bilifont bili-icon_shipin_bofangshu"></i>{{item.playCount}}</span>
                                    <span><i class="bilifont bili-icon_shipin_dianzanshu"></i>{{item.goods}}</span>
                                </div>
                                <div class="right"><span>{{item.time}}</span></div>
                            </div>
                            <i v-if="item.rank" class="crown" :class="item.rank"></i>
                        </router-link>
                        <div class="watch-later-video watchlater black" @mouseenter="watchLaterHandle" @mouseleave="watchLaterHandle">
                            <transition name="watchlater-move">
                                <span v-show="showWatchLater" class="wl-tips" style="left: -21px">稍后再看</span>
                            </transition>
                        </div>
                    </div>
                    <router-link :to="{path:item.path}" class="title hover-blue" :title="item.title" target="_blank">{{item.title}}</router-link>
                    <router-link :to="{path:item.upHome}" class="up hover-blue"><i class="bilifont bili-icon_xinxi_UPzhu" target="_blank"></i>{{item.upName}}</router-link>
                </div>
            </div>
        </div>
        <router-link :to="specRecData.adUrl" target="_blank" class="operate-card gg">
            <img :src="specRecData.adImg" alt="">
        </router-link>
    </div>
    <router-link to="/" class="contact-help" target="_blank">联系客服</router-link>
    <div id="elevator" class="elevator" style="top:288px">
        <i class="head bilifont bili-icon_youdaohang_xiaodianshitianxian"></i>
        <div class="list-box">
            <div>
                <div class="item" :data-index="item.index" :key="item.index" v-for="(item) in elevatorData" :class="item.scrollCurrent ? 'on' : ''" @click="toFloor(item)">{{item.name}}</div>
            </div>
            <div class="item sort"><i class="bilifont bili-icon_youdaohang_paixu"></i></div>
            <div class="item back-top" @click="backTop"><i class="bilifont bili-general_pullup_s"></i></div>
        </div>
        <div class="bg23"></div>
    </div>
</div>
</template>

<script>
import {
    throttle
} from "@/utils/index.js" // 引入节流函数
export default {
    data() {
        return {
            showWatchLater: false,
            liveData: {
                bannerCard: require('@/assets/images/storey/banner-card.jpg'),
                iconClass: 'bilifont bili-live',
                iconColor: '#48CFE5',
                title: '正在直播',
                info: '当前共有 17389 个在线直播',
                partUrl: '/',
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
                ],
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
            },
            // 注：由于vant轮播图插件如果一开始就将其设为display：none,再将其显示会报获取不到宽度
            // 所有这里一开始先显示，然后再mount的nextTrick中将其display设为：none就不会报错了
            tabsDisplay: ['block', 'none', 'block'],
            currentActiveTab: 0,
            dougaData: {
                title: '动画',
                partUrl: '/',
                data: [{
                    img: require('@/assets/images/storey/douga/1.webp'),
                    path: '/',
                    playCount: '123.3万',
                    goods: '13.9万',
                    time: '05:29',
                    upName: '哈米伦的弄笛者',
                    title: '【原神小剧场】可莉的痛',
                    rank: 'gold',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/douga/2.webp'),
                    path: '/',
                    playCount: '372.1万',
                    goods: '35.6万',
                    time: '03:34',
                    upName: '动漫唯美风',
                    title: '用六十部动漫台词唱出一首《稻香》',
                    rank: 'gold',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/douga/3.webp'),
                    path: '/',
                    playCount: '614.4万',
                    goods: '47.8万',
                    time: '02:33',
                    upName: 'A咪小白兔',
                    title: '性感与可爱在沙雕面前不堪一击!!',
                    rank: 'gold',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/douga/4.webp'),
                    path: '/',
                    playCount: '2.7万',
                    goods: '2795',
                    time: '07:56',
                    upName: '四川中路的maple',
                    title: '【上琴/AMV】剪完把自己看哭了',
                    rank: '',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/douga/5.webp'),
                    path: '/',
                    playCount: '24.4万',
                    goods: '7672',
                    time: '10:09',
                    upName: '苏维埃冰棺中的伊利亚',
                    title: '【Undertale漫配/中文字幕】加起来三岁不能再多了',
                    rank: '',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/douga/6.webp'),
                    path: '/',
                    playCount: '55.9万',
                    goods: '3.7万',
                    time: '04:08',
                    upName: '未来的小新',
                    title: '动漫盘点：摸一下妹子的尾巴会怎样？',
                    rank: 'silver',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/douga/7.webp'),
                    path: '/',
                    playCount: '34.8万',
                    goods: '1.7万',
                    time: '09:19',
                    upName: '蓝格雷',
                    title: '这部动画堪称2017头号神作，却因为种种原因不够火爆！',
                    rank: 'gold',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/douga/8.webp'),
                    path: '/',
                    playCount: '1.4万',
                    goods: '249',
                    time: '04:24',
                    upName: '黑暗碎夢',
                    title: 'Undertale 反應全然5階',
                    rank: '',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/douga/9.webp'),
                    path: '/',
                    playCount: '5339',
                    goods: '375',
                    time: '00:14',
                    upName: 'おやつ',
                    title: '【东方MMD】阴间吉他手',
                    rank: '',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/douga/10.webp'),
                    path: '/',
                    playCount: '136.9万',
                    goods: '3237',
                    time: '1:59:43',
                    upName: '灬基拉桑灬',
                    title: '【数码宝贝 全图鉴】绝赞！15周年纪念礼物！',
                    rank: 'gold',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/douga/11.webp'),
                    path: '/',
                    playCount: '8.5万',
                    goods: '7554',
                    time: '03:49',
                    upName: '帝幻99',
                    title: '【第五人格手书/杰佣】恋爱裁判',
                    rank: 'silver',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/douga/12.webp'),
                    path: '/',
                    playCount: '182.8万',
                    goods: '21.0万',
                    time: '15:34',
                    upName: 'ZALSTGAMING',
                    title: '《耗时半年!3000张板绘完成[石之海]三重特效动画》',
                    rank: 'gold',
                    upHome: '/',
                }],
                rankData: [{
                    number: 1,
                    title: '前方惊艳无限！十年后的你还会记得这些动漫吗？',
                    upName: '柑橘味の小百合',
                    grade: '305.5万',
                    img: require('@/assets/images/storey/douga/rank/1.webp'),
                    createTime: '2020-10-29',
                    playCount: '231.0万',
                    danmakuCount: '7801',
                    collects: '14.4万',
                    coins: '18.1万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 2,
                    title: "Trick or Treat ฅ'ω'ฅ",
                    upName: 'yoyo鹿鸣_Lumi',
                    grade: '',
                    img: require('@/assets/images/storey/douga/rank/2.webp'),
                    createTime: '2020-10-30',
                    playCount: '231.0万',
                    danmakuCount: '7801',
                    collects: '14.4万',
                    coins: '18.1万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 3,
                    title: "笑到猪叫！动漫高手最终决战！你画这个我可就不困了？！（第二期）",
                    upName: '泛式',
                    grade: '',
                    img: require('@/assets/images/storey/douga/rank/3.webp'),
                    createTime: '2020-10-30',
                    playCount: '122.1万',
                    danmakuCount: '1.8万',
                    collects: '4.6万',
                    coins: '10.6万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 4,
                    title: "《 爷 爷 拯 救 计 划 》",
                    upName: '远古黑金',
                    grade: '',
                    img: require('@/assets/images/storey/douga/rank/4.webp'),
                    createTime: '2020-10-27',
                    playCount: '273.1万',
                    danmakuCount: '8507',
                    collects: '11.8万',
                    coins: '29.1万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 5,
                    title: "【原神小剧场】可莉的痛",
                    upName: '哈米伦的弄笛者',
                    grade: '',
                    img: require('@/assets/images/storey/douga/rank/5.webp'),
                    createTime: '2020-10-29',
                    playCount: '123.3万',
                    danmakuCount: '4888',
                    collects: '5.2万',
                    coins: '8.8万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 6,
                    title: "你家猫长这样？【阅片无数动漫篇15】",
                    upName: '凉风Kaze',
                    grade: '',
                    img: require('@/assets/images/storey/douga/rank/6.webp'),
                    createTime: '2020-10-31',
                    playCount: '152.9万',
                    danmakuCount: '1.8万',
                    collects: '1.4万',
                    coins: '3.4万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 7,
                    title: "挑战全b站画质上限，无人能撑过一分钟！",
                    upName: '血小板゚゚゚゚゚゚',
                    grade: '',
                    img: require('@/assets/images/storey/douga/rank/7.webp'),
                    createTime: '2020-10-27',
                    playCount: '143.3万',
                    danmakuCount: '6951',
                    collects: '8.1万',
                    coins: '6.3万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 8,
                    title: "其实，朋友间也是有阶级差异的",
                    upName: '谭盐',
                    grade: '',
                    img: require('@/assets/images/storey/douga/rank/8.webp'),
                    createTime: '2020-10-29',
                    playCount: '118.9万',
                    danmakuCount: '2255',
                    collects: '3.5万',
                    coins: '2.8万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 9,
                    title: "反杀土味情话3.0",
                    upName: '盖世猪猪丶',
                    grade: '',
                    img: require('@/assets/images/storey/douga/rank/9.webp'),
                    createTime: '2020-10-29',
                    playCount: '127.9万',
                    danmakuCount: '1360',
                    collects: '2.0万',
                    coins: '4.1万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 10,
                    title: "“妈，我女朋友大我30岁”",
                    upName: '矢之威丶',
                    grade: '',
                    img: require('@/assets/images/storey/douga/rank/10.webp'),
                    createTime: '2020-10-30',
                    playCount: '101.5万',
                    danmakuCount: '9102',
                    collects: '1.5万',
                    coins: '3.3万',
                    url: '/',
                    pvcShow: false,
                }, ]
            },
            kichikuData: {
                title: '鬼畜',
                partUrl: '/',
                data: [{
                    img: require('@/assets/images/storey/kichiku/1.webp'),
                    path: '/',
                    playCount: '11.7万',
                    goods: '6349',
                    time: '00:34',
                    upName: '我想吃盖饭',
                    title: 'O⚡保⚡国⚡奶',
                    rank: 'silver',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/kichiku/2.webp'),
                    path: '/',
                    playCount: '9.7万',
                    goods: '6892',
                    time: '02:45',
                    upName: '迷死特儿he',
                    title: '【布施明】假 面 骑 士 空 我',
                    rank: 'silver',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/kichiku/3.webp'),
                    path: '/',
                    playCount: '41.1万',
                    goods: '1.7万',
                    time: '46:35',
                    upName: '绯色夜下w',
                    title: '【素材】MLG绿幕素材合集（部分）MEME',
                    rank: 'silver',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/kichiku/4.webp'),
                    path: '/',
                    playCount: '30.0万',
                    goods: '1.9万',
                    time: '22:26',
                    upName: '面瘫の佛',
                    title: '【颠覆B站传统观影体验的视频】逆转裁判阿杰 第一话（测试版）',
                    rank: 'gold',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/kichiku/5.webp'),
                    path: '/',
                    playCount: '11.8万',
                    goods: '1.3万',
                    time: '05:32',
                    upName: '方块shaniver',
                    title: '【东京大明白】以散之名',
                    rank: 'silver',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/kichiku/6.webp'),
                    path: '/',
                    playCount: '999.4万',
                    goods: '27.4万',
                    time: '02:50',
                    upName: '女孩为何穿短裙',
                    title: '【全明星】刘为何开枪打死曹',
                    rank: 'gold',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/kichiku/7.webp'),
                    path: '/',
                    playCount: '399.2万',
                    goods: '27.4万',
                    time: '03:04',
                    upName: '乔战狂',
                    title: '【建议改成】使 命 召 唤 1 6',
                    rank: 'gold',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/kichiku/8.webp'),
                    path: '/',
                    playCount: '13.3万',
                    goods: '8102',
                    time: '01:18',
                    upName: '皮蛋气球',
                    title: '垫⚡饥⚡小⚡子',
                    rank: 'silver',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/kichiku/9.webp'),
                    path: '/',
                    playCount: '23.2万',
                    goods: '1.3万',
                    time: '02:42',
                    upName: '氧先森',
                    title: '【红楼梦】谁还不是个bad guy啊？',
                    rank: 'silver',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/kichiku/10.webp'),
                    path: '/',
                    playCount: '6981.6万',
                    goods: '294.0万',
                    time: '02:32',
                    upName: 'UP-Sings',
                    title: '【春晚鬼畜】赵本山：我就是念诗之王！【改革春风吹满地】',
                    rank: 'gold',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/kichiku/11.webp'),
                    path: '/',
                    playCount: '23.6万',
                    goods: '2.0万',
                    time: '02:57',
                    upName: '茶几君梦二',
                    title: '煮酒论公主连结',
                    rank: 'gold',
                    upHome: '/',
                }, {
                    img: require('@/assets/images/storey/kichiku/12.webp'),
                    path: '/',
                    playCount: '13.5万',
                    goods: '2529',
                    time: '00:37',
                    upName: '靓仔叁零肆',
                    title: '移除holo，彩虹强大！',
                    rank: '',
                    upHome: '/',
                }],
                rankData: [{
                    number: 1,
                    title: '阳光♂彩虹♂小白马',
                    upName: '泽野螳螂',
                    grade: '209.0万',
                    img: require('@/assets/images/storey/kichiku/rank/1.webp'),
                    createTime: '2020-10-30',
                    playCount: '129.9万',
                    danmakuCount: '4732',
                    collects: '3.7万',
                    coins: '7.4万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 2,
                    title: "69岁，是名侦探",
                    upName: '楚糖菌',
                    grade: '',
                    img: require('@/assets/images/storey/kichiku/rank/2.webp'),
                    createTime: '2020-10-30',
                    playCount: '99.9万',
                    danmakuCount: '1000',
                    collects: '2.0万',
                    coins: '1.9万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 3,
                    title: "郎 朗 上 头",
                    upName: 'OELoop',
                    grade: '',
                    img: require('@/assets/images/storey/kichiku/rank/3.webp'),
                    createTime: '2020-10-18',
                    playCount: '910.9万',
                    danmakuCount: '1.2万',
                    collects: '23.6万',
                    coins: '29.4万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 4,
                    title: "马保国大战容嬷嬷",
                    upName: '枪弹轨迹',
                    grade: '',
                    img: require('@/assets/images/storey/kichiku/rank/4.webp'),
                    createTime: '2020-10-29',
                    playCount: '114.4万',
                    danmakuCount: '2608',
                    collects: '2.5万',
                    coins: '3.1万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 5,
                    title: "爷青回！这些经典鬼畜我倒背如流！就是手速不够快！【鬼畜高手03】",
                    upName: '吃素的狮子',
                    grade: '',
                    img: require('@/assets/images/storey/kichiku/rank/5.webp'),
                    createTime: '2020-10-31',
                    playCount: '123.3万',
                    danmakuCount: '4888',
                    collects: '5.2万',
                    coins: '8.8万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 6,
                    title: "你家猫长这样？【阅片无数动漫篇15】",
                    upName: '凉风Kaze',
                    grade: '',
                    img: require('@/assets/images/storey/kichiku/rank/6.webp'),
                    createTime: '2020-10-31',
                    playCount: '62.0万',
                    danmakuCount: '2742',
                    collects: '5753',
                    coins: '1.1万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 7,
                    title: "马保国偷袭钢铁侠",
                    upName: '白洛尺',
                    grade: '',
                    img: require('@/assets/images/storey/kichiku/rank/7.webp'),
                    createTime: '2020-10-24',
                    playCount: '427.7万',
                    danmakuCount: '2878',
                    collects: '6.2万',
                    coins: '5.9万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 8,
                    title: "快⚡️使⚡️用⚡️闪⚡电⚡鞭",
                    upName: '咔咔卡卡的',
                    grade: '',
                    img: require('@/assets/images/storey/kichiku/rank/8.webp'),
                    createTime: '2020-10-27',
                    playCount: '160.1万',
                    danmakuCount: '2175',
                    collects: '2.5万',
                    coins: '3.5万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 9,
                    title: "你甚至不愿喊我一声掌门人",
                    upName: 'Dark-Van奇',
                    grade: '',
                    img: require('@/assets/images/storey/kichiku/rank/9.webp'),
                    createTime: '2020-10-23',
                    playCount: '233.2万',
                    danmakuCount: '1824',
                    collects: '3.6万',
                    coins: '3.6万',
                    url: '/',
                    pvcShow: false,
                }, {
                    number: 10,
                    title: "武 林 高 手",
                    upName: '伊丽莎白鼠',
                    grade: '',
                    img: require('@/assets/images/storey/kichiku/rank/10.webp'),
                    createTime: '2020-07-31',
                    playCount: '881.2万',
                    danmakuCount: '1.6万',
                    collects: '17.6万',
                    coins: '29.8万',
                    url: '/',
                    pvcShow: false,
                }, ]
            },
            specRecData: {
                title: '特别推荐',
                partUrl: '/',
                adImg: require('@/assets/images/storey/spec-rec/ad.png'),
                adUrl: '/',
                data: [{
                        title: '日本高中生模特的秋冬向日葵妆容',
                        path: '/',
                        upName: '太阳奈中野',
                        upHome: '/',
                        playCount: '586',
                        goods: '20',
                        time: '7:12',
                        img: require('@/assets/images/storey/spec-rec/1.webp'),
                    }, {
                        title: '万圣节搞怪，用"鸡爪"cos一个禅境花园',
                        path: '/',
                        upName: '蓬蓬的Mini世界',
                        upHome: '/',
                        playCount: '231',
                        goods: '29',
                        time: '6:30',
                        url: '/',
                        img: require('@/assets/images/storey/spec-rec/2.webp'),
                    }, {
                        title: '怎么会有这么怂的生物【浣熊】',
                        path: '/',
                        upName: '浣熊旋风',
                        upHome: '/',
                        playCount: '1.5万',
                        goods: '1181',
                        time: '0:42',
                        url: '/',
                        img: require('@/assets/images/storey/spec-rec/3.webp'),
                    }, {
                        title: '像不像逃课被班主任抓到的你...【第一视角】',
                        path: '/',
                        upName: '跑酷小子-阿泰姆',
                        upHome: '/',
                        playCount: '8930',
                        goods: '632',
                        time: '2:20',
                        url: '/',
                        img: require('@/assets/images/storey/spec-rec/4.webp'),
                    }, {
                        title: '中亚酱香饼为什么特别好吃？秘制的酱料才是关键',
                        path: '/',
                        upName: '罗夫的中亚美食',
                        upHome: '/',
                        playCount: '3420',
                        goods: '308',
                        time: '4:46',
                        url: '/',
                        img: require('@/assets/images/storey/spec-rec/5.webp'),
                    }, {
                        title: '中亚大叔炖“宝藏鹌鹑”！这肚子里全是羊肉',
                        path: '/',
                        upName: '哈萨克美食大叔',
                        upHome: '/',
                        playCount: '4926',
                        goods: '386',
                        time: '3:18',
                        url: '/',
                        img: require('@/assets/images/storey/spec-rec/6.webp'),
                    },

                ]
            },
            elevatorData: [{
                index: 0,
                name: '直播',
                scrollCurrent: false,
            }, {
                index: 1,
                name: '动画',
                scrollCurrent: false,
            }, {
                index: 2,
                name: '鬼畜',
                scrollCurrent: false,
            }],
            elevatorDom: null,
            elevatorFloorOffset: [], // 存储所有需要导航楼层到顶部距离
            elevatorHeight: 0,
        }
    },
    mounted() {
        let that = this;
        this.elevatorDom = document.querySelector('#elevator');
        this.$nextTick(() => {
            setTimeout(() => {
                let indicators = document.querySelector('.home-slide .van-slide .van-swipe__indicators').children;
                let i = 0;
                for (let item of indicators) {
                    item.setAttribute('data-index', i);
                    i++;
                }
                this.tabsDisplay = ['block', 'none', 'none'];
                this.elevatorHeight = document.querySelector('#elevator').offsetHeight;
            })
        });
        // 由于右侧电梯需要和滚屏配合，在mount函数中给window注册滚动事件来控制电梯滑动,同时需要节流控制触发频率
        window.addEventListener('scroll', throttle(function () {
            if (window.pageYOffset < 296) { // top值变小
                that.elevatorDom.style.top = 288 - window.pageYOffset + 'px';
            } else { // top值固定28.5
                let viewPortHeight = window.innerHeight; // 获得视口高度
                that.elevatorDom.style.top = (viewPortHeight - that.elevatorHeight) / 2 + 'px';
                // 遍历数组获得卷去高度所能达到的最低处的DOM index,
                let index = -1;
                that.elevatorFloorOffset.forEach((item, i) => {
                    if (document.documentElement.scrollTop + (viewPortHeight / 2) > item) {
                        index = i;
                    }
                });
                //同样用排他思想重置on类即可
                that.elevatorData.forEach((item, index, arr) => {
                    arr[index].scrollCurrent = false;
                });
                if (index != -1) { // 如果index还是初始值-1，就表示页面滚动还没有到楼层区,不需要改变
                    that.elevatorData[index].scrollCurrent = true
                }
            }
        }, 20));

        // DOM出来之后计算所有楼层到页面顶部距离
        this.getFloorOffsetTop();
        // 电梯导航的依赖高度在浏览器窗口尺寸变化后需要更新数据和电梯位置，同时也需要节流控制频率(最好用时间戳节流，保证最后一次操作可以执行)
        window.addEventListener('resize', throttle(function () {
            let viewPortHeight = window.innerHeight; // 获得视口高度
            that.elevatorDom.style.top = (viewPortHeight - that.elevatorHeight) / 2 + 'px';
            that.elevatorFloorOffset = [];
            for (let i = 0; i < that.elevatorData.length; i++) {
                const proxyBox = document.querySelector('.proxy-box');
                const boxOffsetTop = proxyBox.children[i].getBoundingClientRect().top + document.documentElement.scrollTop;
                that.elevatorFloorOffset.push(boxOffsetTop);
            }
        }, 1000));
    },
    methods: {
        swipeClickHandle(e) {
            if (e.target.nodeName !== 'I') return;
            const index = e.target.getAttribute('data-index');
            this.$refs.swipe.swipeTo(index);
        },
        tabSwitch(num) {
            this.currentActiveTab = num;
            if (num === 0) this.tabsDisplay = ['block', 'none', 'none']
            else if (num === 1) this.tabsDisplay = ['none', 'block', 'none']
            else this.tabsDisplay = ['none', 'none', 'block']
        },
        watchLaterHandle() {
            this.showWatchLater = !this.showWatchLater;
        },
        // 回到顶部
        backTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            this.elevatorData.forEach((item, i, arr) => {
                arr[i].scrollCurrent = false;
            })
        },
        // 电梯楼层跳跃
        toFloor(element) {
            // 排他思想 清除所有，再单独指定on类
            this.elevatorData.forEach((item, index, arr) => {
                arr[index].scrollCurrent = false;
            });
            this.elevatorData[element.index].scrollCurrent = true
            const proxyBox = document.querySelector('.proxy-box');
            const boxOffsetTop = proxyBox.children[element.index].getBoundingClientRect().top + document.documentElement.scrollTop;
            // 跳跃距离需要再偏上些保证内容靠中间点
            document.body.scrollTop = boxOffsetTop - 150;
            document.documentElement.scrollTop = boxOffsetTop - 150;
        },
        getFloorOffsetTop() {
            this.elevatorFloorOffset = [];
            for (let i = 0; i < this.elevatorData.length; i++) {
                const proxyBox = document.querySelector('.proxy-box');
                const boxOffsetTop = proxyBox.children[i].getBoundingClientRect().top + document.documentElement.scrollTop;
                this.elevatorFloorOffset.push(boxOffsetTop);
            }
        }
    }
}
</script>

<style>

</style>
