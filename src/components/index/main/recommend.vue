<template>
<div class="space-between report-wrap-module report-scroll-module" scrollshow="true">
    <div class="focus-carousel home-slide">
        <van-swipe ref="swipe" class="ggc" :autoplay="6000" style="width: 550px; height: 242px;" :indicator-color="'#ffffff'" @click.native="swipeClickHandle">
            <van-swipe-item class="item" v-for="(item, index) in imagesData" :key="index">
                <router-link :to="{path: '/'}"><img v-lazy="item.path" :alt="item.title" />
                    <p class="title">{{item.title}}</p>
                </router-link>
            </van-swipe-item>
        </van-swipe>
        <router-link :to="{path: '/'}" class="more">更多<i class="bilifont bili-icon_caozuo_qianwang"></i></router-link>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            imagesData: [{
                    path: require('@/assets/images/carousel/1.jpg'),
                    title: '兄坑第二季今日开播'
                },
                {
                    path: require('@/assets/images/carousel/2.jpg'),
                    title: '今日C位出道，你就是主角 '
                },
                {
                    path: require('@/assets/images/carousel/3.jpg'),
                    title: '庄园小二静候各位侦探的到来~'
                },
                {
                    path: require('@/assets/images/carousel/4.jpg'),
                    title: 'K/DA女团，闪耀回归！'
                },
                {
                    path: require('@/assets/images/carousel/5.png'),
                    title: 'A妹回归！天王刘德华再发新专'
                },
            ],
        }
    },
    created() {},
    mounted() {
        // 注意，vant插件轮播图没有提供点击indicators换页的API
        // 而且indicators是插件通过v-for循环生成的DOM，需要用this.$nextTick+异步操作获取到所有indicators的DOM集合
        // 通过for...of...遍历DOM集合给indicator添加index自定义属性以便点击indicator时获取到index
        this.$nextTick(() => {
            setTimeout(() => {
                let indicators = document.querySelector('.van-swipe__indicators').children;
                let i = 0;
                for (let item of indicators) {
                    item.setAttribute('data-index', i);
                    i++;
                }
            })
        })

    },
    methods: {
        swipeClickHandle(e) {
            if (e.target.nodeName !== 'I') return;
            const index = e.target.getAttribute('data-index');
            this.$refs.swipe.swipeTo(index);
        }
    }
}
</script>

<style lang="less" scoped>
.space-between {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    .focus-carousel {
        position: relative;
        width: 550px;
        height: 242px;
        overflow: hidden;
        border-radius: 2px;

        .ggc {
            width: 100% !important;
            height: 100% !important;
            z-index: 1;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
}

.ggc>div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    z-index: 0;
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

.focus-carousel .more {
    position: absolute;
    z-index: 11;
    opacity: 0;
    transition: opacity .3s;
    bottom: 44px;
    right: 12px;
    font-size: 12px;
    padding: 4px 8px;
    background: rgba(0, 0, 0, .65);
    color: #fff;
    border-radius: 2px;
}

.focus-carousel:hover .more {
    opacity: 1;
}

.focus-carousel .more i {
    vertical-align: middle;
}
</style>
