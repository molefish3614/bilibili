<template>
<div>
    <div class="link-box footer-wrap">
        <div class="footer-left">
            <div class="link-item link-a">
                <span class="topic">bilibili</span>
                <ul>
                    <router-link :to="{path:item.path}" class="link-text hover-blue" :key="i" v-for="(item, i) in footerLeftList" :class="i === 3 || i === 7 ? 'no-margin' : ''"><span>{{item.name}}</span></router-link>
                </ul>
            </div>
            <div class="link-item link-b">
                <span class="topic">传送门</span>
                <ul>
                    <router-link :to="{path:item.path}" class="link-text hover-blue" :key="i" v-for="(item, i) in footerRightList" :class="i === 3 || i === 7 ? 'no-margin' : ''"><span>{{item.name}}</span></router-link>
                </ul>
            </div>
        </div>
        <div class="footer-right">
            <div class="link-item link-c">
                <div class="a-wraper">
                    <router-link :to="{path: '/'}" class="hover-blue-ite1"><i class="bili-footer-font bilifont bili-icon_download"></i>
                        <p>下载APP</p>
                    </router-link>
                </div>
                <div class="a-wraper">
                    <router-link :to="{path: '/'}" class="hover-blue"><i class="bili-footer-font bilifont bili-icon_weibo" style="color: #fe596c;"></i>
                        <p>新浪微博</p>
                    </router-link>
                </div>
                <div class="a-wraper">
                    <router-link :to="{path: '/'}" class="hover-blue"><i class="bili-footer-font bilifont bili-icon_wechat" style="color: #42c86b;"></i>
                        <p>官方微信</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="partner footer-wrap">
        <div class="pic-box">
            <img :src="footer.partner" class="pic">
            <img :src="footer.pic110" class="pic962110">
            <img :src="footer.certify" class="certify">
        </div>
        <div class="text-con">
            <p>
                <span class="hover-blue">
                    <router-link :to="{path: '/'}">营业执照</router-link>
                </span>
                <span>信息网络传播视听节目许可证：0910417</span>
                <span>网络文化经营许可证 沪网文【2019】3804-274号</span>
                <span>广播电视节目制作经营许可证：（沪）字第01248号</span>
                <span>增值电信业务经营许可证 沪B2-20100043</span>
                <span>互联网ICP备案：<router-link :to="{path: '/'}" class="hover-blue">沪ICP备13002172号-3</router-link></span>
                <span>出版物经营许可证 沪批字第U6699 号</span>
                <span>互联网药品信息服务资格证 沪-非经营性-2016-0143</span>
                <span>营业性演出许可证 沪市文演（经）00-2253</span>
            </p>
            <p>违法不良信息举报邮箱：help@bilibili.com |违法不良信息举报电话：4000233233转3</p>
            <p><i class="sprite bg1" :style="{backgroundImage: 'url('+spriteUrl+')'}"></i><a href="javascript:;" class="hover-blue">上海互联网举报中心</a> | <a href="javascript:;" class="hover-blue">12318全国文化市场举报网站</a> | <i class="sprite bg2" :style="{backgroundImage: 'url('+spriteUrl+')'}"></i><a href="javascript:;" class="hover-blue">沪公网安备31011002002436号</a> | <a href="javascript:;" class="hover-blue">儿童色情信息举报专区</a> | <a href="javascript:;" class="hover-blue">扫黄打非举报</a></p>
            <p>网上有害信息举报专区：<i class="sprite bg3" :style="{backgroundImage: 'url('+spriteUrl+')'}"></i><a href="javascript:;" class="hover-blue">中国互联网违法和不良信息举报中心</a></p>
            <p>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</p>
            <p>公司名称：上海宽娱数码科技有限公司|公司地址：上海市杨浦区政立路485号|电话：021-25099888</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            footerLeftList: [{
                    name: '关于我们',
                    path: '/'
                }, {
                    name: '联系我们',
                    path: '/'
                },
                {
                    name: '用户协议',
                    path: '/'
                },
                {
                    name: '加入我们',
                    path: '/'
                },
                {
                    name: '友情链接',
                    path: '/'
                },
                {
                    name: '隐私政策',
                    path: '/'
                },
                {
                    name: 'bilibili认证',
                    path: '/'
                },
                {
                    name: 'Investor Relations',
                    path: '/'
                }
            ],
            footerRightList: [{
                    name: '帮助中心',
                    path: '/'
                }, {
                    name: '高级弹幕',
                    path: '/'
                },
                {
                    name: '活动专题页',
                    path: '/'
                },
                {
                    name: '侵权申诉',
                    path: '/'
                },
                {
                    name: '活动中心',
                    path: '/'
                },
                {
                    name: '用户反馈论坛',
                    path: '/'
                },
                {
                    name: '壁纸站',
                    path: '/'
                },
                {
                    name: '广告合作',
                    path: '/'
                },
                {
                    name: '名人堂',
                    path: '/'
                },
                {
                    name: 'MCN管理中心',
                    path: '/'
                }
            ],
            footer: {
                partner: require('@/assets/images/partner.png'),
                pic110: require('@/assets/images/pic962110.png'),
                certify: require('@/assets/images/certify.png'),
            },
            spriteUrl: require('@/assets/images/sprite.png'),
        }
    },
    created() {

    },
    methods: {

    }
}
</script>

<style>

</style>
