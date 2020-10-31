<template>
<div>
    <recommend class="first-screen wrap"></recommend>
    <storey class="storey-box wrap"></storey>
</div>
</template>

<script>
import recommend from './main/recommend.vue'
import storey from './main/storey.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        recommend,
        storey
    }
}
</script>

<style lang="less">
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

.storey-title .name {
    margin: 0 20px 0 0;
    vertical-align: bottom;
    font-size: 20px;
    line-height: 36px;
}

.storey-title .no-link {
    color: #212121;
    cursor: default;
}

.storey-title .text-info {
    color: #505050;
    line-height: 36px;

    span,
    a {
        font-size: 12px;
        color: #505050;
    }
}

.storey-title .text-info a .bilifont {
    margin-right: 3px;
    color: #f0361b;
}
</style>
