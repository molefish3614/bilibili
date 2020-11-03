<template>
<div>
    <header height="100%" style="padding: 0">
        <header-content></header-content>
    </header>
    <main>
        <main-content>
        </main-content>
    </main>
    <footer style="height: 100%">
        <footer-content></footer-content>
    </footer>
</div>
</template>

<script>
import headerContent from '../components/index/header.vue'
import mainContent from '../components/index/main.vue'
import footerContent from '../components/index/footer.vue'
export default {
    data() {
        return {};
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    components: {
        headerContent,
        mainContent,
        footerContent
    }
};
</script>

<style lang="less">
header {
    position: relative;
}

main {
    margin-bottom: 40px
}

footer {
    width: 100%;
    font: 12px 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei', 'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif;
    position: relative;
    margin: 0;
    padding: 0;
    background-color: #f6f9fa;
    padding: 30px !important;
}

.space-between {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}

// 宽度自适应
.wrap {
    position: relative;
    width: 1630px;
    margin: 0 auto;
}

.footer-wrap {
    max-width: 1630px;
    min-width: 999px;
    margin: 0 auto;
}

// index媒体查询集合
// wrap结构宽度自适应
@media screen and (min-width: 0) and (max-width: 1438px) {

    .wrap,
    .footer-wrap {
        width: 999px !important;
    }
}

@media screen and (min-width: 1439px) and (max-width: 1654px) {

    .wrap,
    .footer-wrap {
        width: 1198px !important;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {

    .wrap,
    .footer-wrap {
        width: 1414px !important;
    }
}

// wrap结构宽度自适应

// header媒体查询开始
// header的搜索框自适应消失显示
@media screen and (max-width: 1190px) {

    .mini-header .nav-user-center .user-con.search-icon {
        display: flex !important;
        align-items: center;
    }
}

@media screen and (max-width: 1190px) {

    .mini-header .nav-search-box {
        display: none;
    }
}

// 头部导航右侧的友情链接部分宽度自适应
@media screen and (min-width: 0) and (max-width: 1654px) {
    .wrap .friendship-link {
        width: 220px !important;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {
    .wrap .friendship-link {
        width: 242px !important;
    }
}

// 头部中间的导航列表区数量适应宽度
@media screen and (max-width: 1438px) {

    .wrap .primary-menu .channel-menu span:nth-child(n+17) {
        display: none;
    }
}

// 头部导航左侧的圆形按钮宽度自适应
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

// header媒体查询结束

// recommend媒体查询开始
// 推荐1屏轮播图宽高自适应
@media screen and (max-width: 1438px) {

    .footer-wrap .focus-carousel,
    .wrap .focus-carousel {
        width: 459px !important;
        height: 202px !important;
    }
}

// 推荐1屏视频图片父盒子宽高自适应
@media screen and (max-width: 1438px) {

    .footer-wrap .recommend-box,
    .wrap .recommend-box {
        width: 530px;
        height: 202px;
    }
}

@media screen and (min-width: 1439px) and (max-width: 1654px) {

    .footer-wrap .recommend-box,
    .wrap .recommend-box {
        width: 638px;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {

    .footer-wrap .recommend-box,
    .wrap .recommend-box {
        width: 854px;
        height: 242px;
    }
}

// 推荐1屏视频图片宽高自适应
@media screen and (max-width: 1438px) {

    .footer-wrap .recommend-box .video-card-reco,
    .wrap .recommend-box .video-card-reco {
        width: 170px;
        height: 96px;
    }
}

// 推荐1屏视频图片数量自适应
@media screen and (max-width: 1654px) {

    .footer-wrap .recommend-box .video-card-reco:nth-child(n+7),
    .wrap .recommend-box .video-card-reco:nth-child(n+7) {
        display: none;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {

    .footer-wrap .recommend-box .video-card-reco:nth-child(n+9),
    .wrap .recommend-box .video-card-reco:nth-child(n+9) {
        display: none;
    }
}

@media screen and (max-width: 1438px) {

    .footer-wrap .recommend-box .video-card-reco .info-box .info,
    .wrap .recommend-box .video-card-reco .info-box .info {
        padding: 8px 10px 10px;
    }
}

// 推荐屏视频宽度自适应
@media screen and (max-width: 1438px) {

    .footer-wrap .extension,
    .wrap .extension {
        width: 710px;
    }
}

@media screen and (min-width: 1439px) and (max-width: 1654px) {

    .footer-wrap .extension,
    .wrap .extension {
        width: 854px;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {

    .footer-wrap .extension,
    .wrap .extension {
        width: 1070px;
    }
}

// 推荐屏图片宽高自适应宽度
@media screen and (max-width: 1438px) {

    .footer-wrap .video-card-common,
    .wrap .video-card-common {
        width: 170px;
    }
}

@media screen and (max-width: 1438px) {

    .footer-wrap .video-card-common .card-pic,
    .footer-wrap .video-card-common .match-card-pic,
    .wrap .video-card-common .card-pic,
    .wrap .video-card-common .match-card-pic {
        width: 100%;
        height: 96px;
    }
}

// 推荐屏右侧图片
@media screen and (max-width: 1438px) {

    .footer-wrap .bypb-window,
    .wrap .bypb-window {
        width: 265px;
    }
}

// 推荐屏视频内时间显示位置适应宽度
@media screen and (max-width: 1438px) {

    .footer-wrap .video-card-common .card-pic .right,
    .footer-wrap .video-card-common .match-card-pic .right,
    .wrap .video-card-common .card-pic .right,
    .wrap .video-card-common .match-card-pic .right {
        display: none;
    }
}

// 推荐屏单个视频图宽高、数量自适应宽度
@media screen and (max-width: 1438px) {

    .footer-wrap .video-card-common,
    .wrap .video-card-common {
        width: 170px;
    }
}

@media screen and (max-width: 1654px) {

    .footer-wrap .extension .video-card-common:nth-child(n+5),
    .wrap .extension .video-card-common:nth-child(n+5) {
        display: none;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {

    .footer-wrap .extension .video-card-common:nth-child(n+6),
    .wrap .extension .video-card-common:nth-child(n+6) {
        display: none;
    }
}

// recommend媒体查询结束

// storey 媒体查询开始

// 直播视频父盒子宽度自适应
@media screen and (max-width: 1438px) {

    .footer-wrap .zone-list-box,
    .wrap .zone-list-box {
        width: 710px !important;
        height: 360px;
    }
}

@media screen and (min-width: 1439px) and (max-width: 1654px) {

    .footer-wrap .zone-list-box,
    .wrap .zone-list-box {
        width: 854px !important;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {

    .footer-wrap .space-between .zone-list-box,
    .wrap .space-between .zone-list-box {
        width: 1070px;
    }
}

// 单个live card宽度自适应
@media screen and (max-width: 1438px) {

    .footer-wrap .zone-list-box .live-card,
    .wrap .zone-list-box .live-card {
        width: 170px;
    }
}

// livecard 下图片宽度自适应
@media screen and (max-width: 1438px) {

    .footer-wrap .zone-list-box .live-card .pic,
    .wrap .zone-list-box .live-card .pic {
        width: 100%;
        height: 96px;
    }
}

// livecard下 说明文本宽度自适应
@media screen and (max-width: 1438px) {

    .footer-wrap .live-card .up .txt,
    .wrap .live-card .up .txt {
        width: 128px;
    }
}

// -2个直播视频数自适应n+11代表不需要宽度1870以下  11 12两个子元素
@media screen and (min-width: 1655px) and (max-width: 1870px) {

    .footer-wrap .space-between .zone-list-box .live-card:nth-child(n+11),
    .footer-wrap .space-between .zone-list-box .video-card-common:nth-child(n+11),
    .wrap .space-between .zone-list-box .live-card:nth-child(n+11),
    .wrap .space-between .zone-list-box .video-card-common:nth-child(n+11) {
        display: none;
    }
}

// -4个直播视频数自适应n+9代表宽度1654以下不需要 9 10 11 12四个子元素
@media screen and (max-width: 1654px) {

    .footer-wrap .zone-list-box .live-card:nth-child(n+9),
    .footer-wrap .zone-list-box .video-card-common:nth-child(n+9),
    .wrap .zone-list-box .live-card:nth-child(n+9),
    .wrap .zone-list-box .video-card-common:nth-child(n+9) {
        display: none;
    }
}

// 直播右侧tab区宽度自适应
@media screen and (max-width: 1438px) {

    .footer-wrap .live-tabs,
    .wrap .live-tabs {
        width: 265px;
    }
}

// 直播排行当个rank尺寸自适应
@media screen and (max-width: 1438px) {

    .footer-wrap .live-tabs .live-rank .live-rank-item,
    .wrap .live-tabs .live-rank .live-rank-item {
        margin-bottom: 16px;
    }
}

// 为你推荐宽度自适应
@media screen and (max-width: 1438px) {

    .footer-wrap .recommend-activity,
    .wrap .recommend-activity {
        width: 265px !important;
        height: 286px !important;
    }
}

// 右侧排行榜整体宽度自适应
@media screen and (max-width: 1438px) {
    .rank-list {
        width: 265px !important;
    }
}

// 排行榜每条宽度自适应
@media screen and (max-width: 1438px) {

    .rank-list .rank-wrap .preview,
    .rank-list .rank-wrap .title {
        width: 235px;
    }
}

// 排行榜数量自适应宽度（11、12窄屏不需要）
@media screen and (max-width: 1438px) {
    .rank-list .rank-wrap:nth-child(n+10) {
        display: none;
    }
}

//右侧电梯导航位置随宽度自适应
@media screen and (max-width: 1122px) {
    .wrap .elevator {
        margin-left: 500px;
    }
}

@media screen and (min-width: 1123px) and (max-width: 1200px) {
    .wrap .elevator {
        margin-left: 510px;
    }
}

@media screen and (min-width: 1201px) and (max-width: 1438px) {

    .footer-wrap .elevator,
    .wrap .elevator {
        margin-left: 515px;
    }
}

@media screen and (min-width: 1439px) and (max-width: 1654px) {

    .footer-wrap .elevator,
    .wrap .elevator {
        margin-left: 615px;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {

    .footer-wrap .elevator,
    .wrap .elevator {
        margin-left: 716px;
    }
}
</style>
