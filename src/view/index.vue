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

<style src="../assets/css/index.css" scpoed>

</style>
