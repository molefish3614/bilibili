<template>
<div>
    <header height="100%" style="padding: 0">
        <header-content></header-content>
    </header>
    <main class="first-screen wrap">
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

footer {
    width: 100%;
    font: 12px 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei', 'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif;
    position: relative;
    margin: 0;
    padding: 0;
    background-color: #f6f9fa;
    padding: 30px !important;
}

// 宽度自适应与媒体查询

@media screen and (min-width: 0) and (max-width: 1438px) {

    header .wrap,
    footer .footer-wrap {
        width: 1110px !important;
    }
}

@media screen and (min-width: 1439px) and (max-width: 1654px) {

    header .wrap,
    footer .footer-wrap {
        width: 1198px !important;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {

    .header .wrap,
    footer .footer-wrap {
        width: 1414px !important;
    }
}

@media screen and (min-width: 0) and (max-width: 1654px) {
    header .wrap .friendship-link {
        width: 220px !important;
    }
}

@media screen and (min-width: 1655px) and (max-width: 1870px) {
    header .wrap .friendship-link {
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
</style>
