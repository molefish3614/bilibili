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

.watchlater {
    position: absolute;
    z-index: 20;
    width: 22px;
    height: 22px;
    right: 8px;
    bottom: 8px;
    cursor: pointer;
    background-size: contain;
}

.watchlater-move-enter-active {
    animation: bounce-in .26s
}

@keyframes bounce-in {
    0% {
        transform: scale(0)
    }

    50% {
        transform: scale(1.1)
    }

    to {
        transform: scale(1)
    }
}

.video-card-common .card-pic .watch-later-video {
    transition: opacity .3s;
    opacity: 0;
}

.video-card-common .card-pic:hover .watch-later-video {
    transition-delay: .2s;
    opacity: 1;
}

.watchlater .wl-tips {
    position: absolute;
    font-size: 12px;
    color: #fff;
    border-radius: 4px;
    line-height: 18px;
    padding: 4px 8px;
    background-color: #000;
    background: rgba(0, 0, 0, .8);
    white-space: nowrap;
    top: -30px;
}

.video-card-common .title {
    display: block;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0 8px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    padding-right: 12px;
}

.video-card-common .up {
    display: flex;
    font-size: 12px;
    color: #999;
    line-height: 16px;
}

.video-card-common .bilifont {
    margin-right: 4px;
    vertical-align: middle;
}

.video-card-common {
    width: 206px;
    cursor: pointer;
}

.video-card-common .card-pic {
    position: relative;
    width: 100%;
    height: 116px;
}

.video-card-common .card-pic a {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
}

.video-card-common .card-pic a img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
}

.video-card-common .card-pic a .count {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 6px 8px;
    justify-content: space-between;
    color: #fff;
    line-height: 16px;
}

.video-card-common .card-pic a .count,
.video-card-common .card-pic a .count .left,
.video-card-common .card-pic a .count .left span {
    display: flex;
    align-items: center;
}


.video-card-common .card-pic a .count .left span {
    vertical-align: middle;
}

.video-card-common .card-pic a .count .left span:first-child {
    margin-right: 10px;
}
</style>
