<template>
<div class="s-body">
    <nav-box></nav-box>
    <header-box></header-box>
    <div class="s-space">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import navBox from "../components/common/nav.vue";
import headerBox from "../components/space/header.vue";
export default {
    data() {
        return {};
    },
    created() {
        let name = "";
        if (this.$route.params.id == 114514) name = "陈睿";
        document.title = name + " (<ゝω·)~☆kira的个人空间";
    },
    mounted() {},
    methods: {},
    components: {
        navBox,
        headerBox,
    },
};
</script>

<style src="../assets/css/space.css" scoped>

</style>
