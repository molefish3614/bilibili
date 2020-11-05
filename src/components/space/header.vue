<template>
<div>
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
                        <div class="h-btn-box">
                            <i class="h-f-icon"></i>已关注
                            <span class="icon icon-arrow"></span>
                        </div>
                        <transition name="zoom">
                            <ul v-show="showDropDownFollow" class="be-dropdown-menu" style="left: -10px; transform-origin: center top;">
                                <li class="be-dropdown-item">设置分组</li>
                                <li class="be-dropdown-item">取消关注</li>
                            </ul>
                        </transition>
                    </div>
                    <router-link to="/message" target="_blank" class="h-f-btn h-message">发消息</router-link>
                    <div class="be-dropdown h-add-to-black" @mouseenter="moreHandle(1)" @mouseleave="moreHandle(2)">
                        <div class="be-dropdown-trigger"><i title="更多操作" class="bilifont bili-icon_caozuo_xiangyou-copy"></i></div>
                        <transition name="zoom">
                            <ul v-show="showMore" class="be-dropdown-menu" style="left: -76px; transform-origin: center top;">
                                <li class="be-dropdown-item">加入黑名单</li>
                                <li class="be-dropdown-item">转为悄悄关注</li>
                                <li class="be-dropdown-item" @click="showModal = true">个人信息举报</li>
                            </ul>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
        <!-- 模态框 -->
        <div class="modal-container" v-show="showModal">
            <div class="modal-mask"></div>
            <div class="modal-wrapper">
                <div class="modal">
                    <div class="modal-header">
                        <i class="modal-header-close bilifont bili-icon_sousuo_yichu"></i>
                        <div class="modal-title">个人信息举报</div>
                    </div>
                    <div class="modal-body">
                        <div class="report-popup">
                            <p class="report-popup-tip">举报内容（可多选）</p>
                            <ul class="report-popup-list clearfix">
                                <li class="report-popup-item" :class="modalData.avatar ? 'checked' : ''" @click="modalData.avatar = !modalData.avatar">
                                    <em class="report-popup-item-checkbox"></em>
                                    <span class="report-popup-item-text">头像违规</span>
                                </li>
                                <li class="report-popup-item" :class="modalData.nickName ? 'checked' : ''" @click="modalData.nickName = !modalData.nickName">
                                    <em class="report-popup-item-checkbox"></em>
                                    <span class="report-popup-item-text">昵称违规</span>
                                </li>
                                <li class="report-popup-item" :class="modalData.sign ? 'checked' : ''" @click="modalData.sign = !modalData.sign">
                                    <em class="report-popup-item-checkbox"></em>
                                    <span class="report-popup-item-text">签名违规</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn primary" @click="showModal = false; modalData = {avatar: false,nickName: false,sign: false}"><span class="btn-content">确定</span></button>
                        <button class="btn default" @click="showModal = false; modalData = {avatar: false,nickName: false,sign: false}"><span class="btn-content">取消</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="navigator" class="n">
        <div class="wrapper">
            <div class="n-inner clearfix"></div>
        </div>
    </div>
</div>
</template>

<script>
import {
    debounce
} from '@/utils/index.js'
export default {
    data() {
        return {
            showSignEdit: true,
            showSign: false,
            inputSign: '',
            showDropDownFollow: false,
            showMore: false,
            showModal: false,
            modalData: {
                avatar: false,
                nickName: false,
                sign: false
            },
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
        // 下拉菜单展开使用防抖，以最新操作为准，避免菜单频繁闪烁
        followHandle: debounce(function (num) {
            this.showDropDownFollow = num === 1 ? true : false;
        }, 200),
        moreHandle: debounce(function (num) {
            this.showMore = num === 1 ? true : false;
        }, 200),
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

.h-btn-box {
    position: relative;
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
    position: absolute;
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

.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 20000;
}

.modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1010;
    background-color: rgba(0, 0, 0, .5);
}

.modal-wrapper {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    margin: 0 auto;
    word-break: break-all;
    line-height: 22px;
    z-index: 1011;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .16);
    border-radius: 4px;
    transition: box-shadow .2s linear;
}

.modal-wrapper .modal-header {
    position: relative;
    font: 12px/1.11 Microsoft Yahei, Tahoma, Arial, Helvetica, STHeiti;
}

.modal-wrapper .modal-header-close {
    position: absolute;
    text-decoration: none;
    top: 13px;
    right: 12px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
}

.modal-wrapper .modal-title {
    display: block;
    font-size: 16px;
    line-height: 48px;
    padding: 0 20px;
    border-bottom: 1px solid #ddd;
}

.modal-wrapper .modal-body {
    padding: 30px 60px;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    min-width: 9em;
}

.h .modal-wrapper .modal-body {
    padding: 30px 40px !important;
}

.h .report-popup-tip {
    line-height: 18px;
    font-size: 12px;
    color: #99a2aa;
    text-align: left;
}

.h .report-popup-list {
    margin-top: 18px;
    font-size: 0;
}

.h .report-popup-item {
    float: left;
    width: 90px;
    line-height: 20px;
    margin-bottom: 15px;
    cursor: pointer;
    text-align: left;
    white-space: nowrap;
}

.h .report-popup-item-checkbox {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    border: 1px solid #bec3cc;
    border-radius: 2px;
    font-size: 0;
}

.h .report-popup-item:nth-child(2n) {
    margin-left: 30px;
}

.h .report-popup-item-text {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #222;
    vertical-align: middle;
}

.modal-footer {
    padding: 0 0 30px;
    text-align: center;
    font-size: 0;
    white-space: nowrap;
}

.btn.primary {
    color: #fff;
    background-color: #00a1d6;
    border-color: #00a1d6;
}

.btn.default {
    margin-right: 0;
    color: #666;
    background-color: #fff;
    border-color: #d9d9d9;
}

.btn {
    display: inline-block;
    touch-action: manipulation;
    padding: 0 10px;
    margin-right: 20px;
    line-height: 30px;
    min-width: 70px;
    transition: all .2s ease;
    font-size: 0;
    color: #666;
    text-align: center;
    vertical-align: middle;
    outline: none;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
}

.btn-content {
    font-size: 12px;
    vertical-align: top;
}

.btn:focus,
.btn:hover {
    color: #00a1d6;
    background-color: #fff;
    border-color: #00a1d6;
}

.btn.primary:focus,
.btn.primary:hover {
    background-color: #00b5e5;
    color: #fff;
    border-color: #00b5e5;
}

.h .report-popup-item.checked .report-popup-item-checkbox {
    background: #00a1d6;
    border-color: #00a1d6;
}

.h .report-popup-item.checked .report-popup-item-checkbox:before {
    content: "";
    display: block;
    position: absolute;
    top: 6px;
    left: 3px;
    width: 0;
    height: 5px;
    border-left: 2px solid #fff;
    transform: rotate(-45deg);
}

.h .report-popup-item.checked .report-popup-item-checkbox:after {
    content: "";
    display: block;
    position: absolute;
    top: 2px;
    left: 9px;
    width: 0;
    height: 11px;
    border-left: 2px solid #fff;
    transform: rotate(45deg);
}

.n {
    margin-bottom: 10px;
}

.n .n-inner {
    height: 66px;
    background: #fff;
    box-shadow: 0 0 0 1px #eee;
    border-radius: 0 0 4px 4px;
    padding: 0 20px;
    font-size: 0;
}
</style>
