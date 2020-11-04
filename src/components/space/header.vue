<template>
<div class="h">
    <div class="wrapper">
        <div class="h-inner" :style="{backgroundImage: 'url(' + userInfo.bannerImg + ')'}">
            <div class="h-gradient" :style="{backgroundImage: 'url(' + userInfo.gradientImg + ')'}"></div>
            <div class="h-user">
                <div class="h-info clearfix">
                    <div class="h-avatar">
                        <img :src="userInfo.avatar" alt="" id="h-avatar">
                        <span v-if="userInfo.auth" :title="userInfo.auth.category" class="user-auth clearfix" :class="userInfo.auth.cate === 'personal' ? 'personal-auth' : ''" :style="{backgroundImage: 'url('+userInfo.auth.icon+')'}"></span>
                    </div>
                    <div class="h-basic">
                        <div>
                            <span id="h-name">{{userInfo.name}}</span>
                            <span id="h-gender" class="icon gender" :class="userInfo.gender ==='male' ? 'male' : 'female'"></span>
                            <router-link :to="{path:'/level'}" target="_blank" :lvl="userInfo.level" class="m-level"></router-link>
                            <router-link v-if="userInfo.vipType" :to="{path:'/accoutbig'}" target="_blank" class="h-vipType">{{userInfo.vipType}}</router-link>
                            <router-link v-if="userInfo.fansIcon.haveFansIcon" :to="{path:userInfo.fansIcon.detail}" target="_blank" class="h-fans-icon">
                                <span class="h-fans-text">粉</span>
                                <div class="fans-hover-tip"><span class="tip-inner">已开通专属粉丝勋章</span></div>
                            </router-link>
                        </div>
                        <div class="h-basic-spacing">
                            <h4 :title="userInfo.sign" class="h-sign" v-if="showSign">
                                {{userInfo.sign}}
                            </h4>
                            <input v-if="showSignEdit" v-model="inputSign" id="h-sign" type="text" placeholder="编辑个性签名" maxlength="60" class="space_input" @keyup.enter="changeSign" @blur="changeSign">
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-action">
                <div class="be-dropdown h-f-btn h-unfollow" @mouseenter="followHandle(1)" @mouseleave="followHandle(2)">
                    <div>
                        <i class="h-f-icon"></i>已关注
                        <span class="icon icon-arrow"></span>
                    </div>
                    <transition name="zoom">
                        <ul v-if="showDropDownFollow" class="be-dropdown-menu menu-align-" style="left: 1349.5px; top: 249px; transform-origin: center top;">
                            <li class="be-dropdown-item">设置分组</li>
                            <li class="be-dropdown-item">取消关注</li>
                        </ul>
                    </transition>
                </div>
                <router-link to="/message" target="_blank" class="h-f-btn h-message">发消息</router-link>
                <div class="be-dropdown h-add-to-black" @mouseenter="moreHandle(1)" @mouseleave="moreHandle(2)">
                    <div class="be-dropdown-trigger"><i title="更多操作" class="bilifont bili-icon_caozuo_xiangyou-copy"></i></div>
                    <transition name="zoom">
                        <ul class="be-dropdown-menu menu-align-" style="left: 1467.5px; top: 249px; transform-origin: center top;" v-if="showMore">
                            <li class="be-dropdown-item">加入黑名单</li>
                            <li class="be-dropdown-item">转为悄悄关注</li>
                            <li class="be-dropdown-item">个人信息举报</li>
                        </ul>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            showSignEdit: true,
            showSign: false,
            inputSign: '',
            showDropDownFollow: false,
            followTimer: null,
            showMore: false,
            moreTimer: null,
            userInfo: {
                name: '陈睿',
                gender: 'male',
                level: '6',
                vipType: '百年带会员',
                sign: '喜欢的话就坚持吧',
                bannerImg: require('@/assets/images/space/banner.webp'),
                gradientImg: require('@/assets/images/space/gradient.png'),
                avatar: require('@/assets/images/avatar.png'),
                auth: {
                    category: '个人认证',
                    cate: 'personal',
                    icon: require('@/assets/images/user-auth.png'),
                },
                fansIcon: {
                    haveFansIcon: true,
                    detail: '/fansicon/help'
                }
            }
        }
    },
    created() {
        this.inputSign = this.userInfo.sign;
    },
    methods: {
        changeSign() {
            this.userInfo.sign = this.inputSign;
        },
        followHandle(num) {
            if (num === 1) {
                clearTimeout(this.followTimer);
                this.showDropDownFollow = true;
            } else {
                this.followTimer = setTimeout(() => {
                    this.showDropDownFollow = false;
                }, 300)
            }
        },
        moreHandle(num) {
            if (num === 1) {
                clearTimeout(this.moreTimer);
                this.showMore = true;
            } else {
                this.moreTimer = setTimeout(() => {
                    this.showMore = false;
                }, 300)
            }
        }
    }
}
</script>

<style lang="less" scoped>
.clearfix {
    display: block;
}

.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.h {
    position: relative;
    z-index: 10;
}

.wrapper {
    width: 1100px;
    margin: 0 auto;
    position: relative;
}

.h .h-inner {
    background-position: 50%;
    background-size: cover;
    transition: background-image .2s ease, background-size 1s ease;
    padding-top: 116px;
    position: relative;
}

.h .h-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 84px;
    background-repeat: repeat-x;
}

.h .h-user {
    position: relative;
    z-index: 1;
}

.h .h-info {
    margin-left: 20px;
    padding-bottom: 16px;
}

.h .h-avatar {
    position: relative;
    float: left;
    width: 64px;
    height: 64px;
    border: 2px solid hsla(0, 0%, 100%, .4);
    border-radius: 52px;
}

.h #h-avatar {
    width: 64px;
    height: 64px;
    background: #fff;
    border-radius: 48px;
}

.user-auth.personal-auth {
    background-position: -38px -53px;
}

.user-auth {
    position: absolute;
    z-index: 9;
    background-repeat: no-repeat;
    right: 0;
    top: 44px;
    width: 20px;
    height: 20px;
}

.h .h-basic {
    float: left;
    color: #fff;
    font-size: 0;
    margin: 10px 0 0 20px;
}

.h #h-name {
    display: inline-block;
    margin-right: 5px;
    font-weight: 700;
    line-height: 18px;
    font-size: 18px;
    vertical-align: middle;
}

.h .gender.male {
    display: inline-block;
    background-position: -212px -472px;
}

.h .gender {
    display: none;
    width: 21px;
    height: 18px;
    margin-right: 5px;
    vertical-align: middle;
    background-position: -212px -922px;
}

.icon {
    vertical-align: middle;
    background-repeat: no-repeat;
}

.h .m-level[lvl="6"] {
    background-position: -21px -226px;
}

.h .m-level {
    display: inline-block;
    width: 28px;
    height: 16px;
    margin-right: 5px;
    vertical-align: middle;
}

.h .h-vipType {
    display: inline-block;
    height: 16px;
    line-height: 16px;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    padding: 0 5px;
    background-color: #f45a8d;
    vertical-align: middle;
    margin-right: 5px;
}

.h .h-fans-icon {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
}

.h .h-fans-icon .h-fans-text {
    display: block;
    width: 20px;
    height: 16px;
    line-height: 14px;
    font-size: 12px;
    color: #ff85ad;
    background: #fff;
    border: 1px solid #ff85ad;
    border-radius: 4px;
    box-sizing: border-box;
}

.h .h-fans-icon .fans-hover-tip {
    position: absolute;
    display: none;
    top: -29px;
    left: 5px;
    width: 138px;
    padding: 0 12px;
    font-size: 12px;
    color: #ff85ad;
    background: #fff;
    border: 1px solid #ff85ad;
    border-radius: 4px;
    box-sizing: border-box;
}

.h .h-fans-icon .fans-hover-tip .tip-inner {
    font-size: 12px;
    color: #505050;
    line-height: 20px;
}

.h .h-fans-icon:hover .fans-hover-tip {
    display: block;
}

.h .h-fans-icon .fans-hover-tip:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 5px;
    width: 7px;
    height: 7px;
    border: 1px solid #ff85ad;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
    background-color: #fff;
}

.h .h-basic .h-basic-spacing {
    margin-top: 8px;
}

.h .h-sign {
    background: transparent;
    border-radius: 4px;
    border: none;
    box-shadow: none;
    color: #d6dee4;
    font-size: 12px;
    font-family: Microsoft Yahei;
    line-height: 26px;
    height: 26px;
    margin-left: -5px;
    padding: 0 5px;
    position: relative;
    top: -1px;
    width: 730px;
    font-weight: 400;
}

.h #h-sign:hover {
    background: hsla(0, 0%, 100%, .2);
    box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .5);
}

.h #h-sign {
    background: transparent;
    border-radius: 4px;
    border: none;
    box-shadow: none;
    color: #d6dee4;
    font-size: 12px;
    font-family: Microsoft Yahei;
    line-height: 26px;
    height: 26px;
    margin-left: -5px;
    padding: 0 5px;
    position: relative;
    top: -1px;
    width: 730px;
}

.space_input {
    line-height: 28px;
    height: 28px;
    padding: 0 10px;
    transition: all .3s ease;
    vertical-align: top;
    border: 1px solid #ccd0d7;
    border-radius: 0;
}

.h .h-action {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.h .h-f-btn {
    background: rgba(0, 0, 0, .45);
    box-shadow: 0 0 0 2px hsla(0, 0%, 100%, .3);
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    float: left;
    text-align: center;
    margin: 0 20px 17px 0;
    width: 76px;
    line-height: 30px;
}

.h .h-f-btn:hover {
    background: rgba(0, 0, 0, .5);
}

.h .h-f-btn .icon-arrow {
    margin-left: 4px;
    background-position: -1369px -214px;
}

.icon-arrow {
    width: 16px;
    height: 20px;
    background-position: -1305px -215px;
}

.be-dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.be-dropdown-menu {
    position: fixed;
    top: 40px;
    z-index: 10;
    padding: 6px 0;
    background-color: #fff;
    border: 1px solid #e5e9ef;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .14);
}

.be-dropdown-item {
    height: 40px;
    padding: 0 20px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #222;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: background-color .2s ease;
    cursor: pointer;
}

.be-dropdown-item:hover {
    color: #00a1d6;
    background-color: #e5e9ef;
}

.zoom-enter,
.zoom-leave-to {
    transform: scaleY(0);
    opacity: 0;
}

.zoom-enter-active,
.zoom-leave-active {
    transition: transform .3s, opacity .3s;
}

.h .h-add-to-black {
    float: left;
    margin-right: 18px;
    height: 30px;
}

.be-dropdown-trigger {
    width: 24px;
    height: 24px;
    margin: auto;
    text-align: center;
}

.h .h-add-to-black .be-dropdown-trigger {
    width: 30px;
    height: 30px;
}

.be-dropdown-trigger .bili-icon_caozuo_xiangyou-copy {
    display: block;
    line-height: 24px;
    color: #222;
    font-size: 24px;
    color: #999;
}

.h .h-add-to-black .bili-icon_caozuo_xiangyou-copy {
    color: #fff;
    font-size: 30px;
    line-height: 30px;
}
</style>
