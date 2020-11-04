<template>
<div>
    <nav-box></nav-box>
    <header-box></header-box>
</div>
</template>

<script>
import navBox from '../components/common/nav.vue'
import headerBox from '../components/space/header.vue'
export default {
    data() {
        return {

        }
    },
    created() {
        let name = '';
        if (this.$route.params.id == 114514) name = '陈睿';
        document.title = name + ' (<ゝω·)~☆kira的个人空间';
    },
    mounted() {

    },
    methods: {

    },
    components: {
        navBox,
        headerBox,
    }
}
</script>

<style>
@media (min-width: 1420px) {

    .wrapper {
        width: 1280px !important;
    }
}
</style>
