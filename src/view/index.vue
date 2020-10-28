<template>
<div>
    <el-container>
        <el-header height="100%" style="padding: 0">
            <header-content></header-content>
        </el-header>
        <el-main>
            <main-content>
            </main-content>
        </el-main>
        <el-footer style="height: 100%">
            <footer-content></footer-content>
        </el-footer>
    </el-container>
</div>
</template>

<script>
import headerContent from '../components/index/header.vue'
import mainContent from '../components/index/main.vue' // 引入主页内容部分组件
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
.el-header {
    position: relative;

    /* 通用yel类 */
    .yel {
        background: #fcba2a;
    }

    /* 通用blue */
    .blue {
        background: #00a1d6;
    }

    .channel {
        background: #6dc781;
    }

    .tab-line {
        display: inline-block;
        height: 46px;
        border-left: 1px solid #e7e7e7;
        margin: 0 20px
    }
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

.el-footer {
    width: 100%;
    font: 12px 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei', 'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif;
    position: relative;
    margin: 0;
    padding: 0;
    background-color: #f6f9fa;
    padding: 30px;
}

// 宽度自适应与媒体查询

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
