<template>
<div>
    <div class="h">
        <div class="wrapper">
            <div class="h-inner" :style="{backgroundImage: 'url(' + userInfo.bannerImg + ')'}">
                <div class="h-gradient"></div>
                <div class="h-user">
                    <div class="h-info clearfix">
                        <div class="h-avatar">
                            <img :src="userInfo.avatar" alt="" id="h-avatar">
                            <span v-if="userInfo.auth" :title="userInfo.auth.category" class="user-auth clearfix" :class="userInfo.auth.cate === 'personal' ? 'personal-auth' : ''"></span>
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
            <div class="n-inner clearfix">
                <div class="n-tab-links">
                    <!-- 建议name调用路由，这样路由地址只由配置文件管理，name调用提供params绑定路由配置文件中的动态参数预留位就能简单实现动态路由 -->
                    <router-link :key="i" v-for="(item,i) in tabLinks" :to="{name:item.component, params:{id: userInfo.id}}" class="n-btn" :class="item.id === n_activeId ? 'active' : ''" :id="item.id" @mouseenter.native="cursorMove(i)" @click.native="n_activeId = item.id ; n_activeStat = ''">
                        <span class="icon" :class="item.iconClass"></span>
                        <span class="n-text">{{item.name}}</span>
                        <span v-if="item.num" class="n-num">{{item.num}}</span>
                    </router-link>
                </div>
                <div class="clearfix g-search search-container">
                    <input type="text" placeholder="搜索视频" class="space_input">
                    <span class="icon search-btn"></span>
                </div>
                <div class="n-statistics">
                    <router-link :to="{name: 'spaceFollow',params: {id:userInfo.id}}" class="n-data n-gz" :class="n_activeStat === 'follows'? 'active' : ''" :title="userInfo.follows" @click.native="n_activeStat = 'follows'">
                        <p class="n-data-k">关注数</p>
                        <p id="n-gz" class="n-data-v space-attention">{{userInfo.follows}}</p>
                    </router-link>
                    <router-link :to="{name: 'spaceFans',params: {id:userInfo.id}}" class="n-data n-fs" :class="n_activeStat === 'fans' ? 'active' : ''" :title="userInfo.fans" @click.native="n_activeStat = 'fans'">
                        <p class="n-data-k">粉丝数</p>
                        <p id="n-fs" class="n-data-v space-attention">{{userInfo.fans}}</p>
                    </router-link>
                    <div :title="'视频、动态、专栏累计获赞'+userInfo.agrees" class="n-data n-bf">
                        <p class="n-data-k">获赞数</p>
                        <p id="n-bf" class="n-data-v">{{userInfo.agrees}}</p>
                    </div>
                    <div :title="'截止昨天，播放数总计为'+userInfo.playCount" class="n-data n-bf">
                        <p class="n-data-k">播放数</p>
                        <p id="n-bf" class="n-data-v">{{userInfo.playCount}}</p>
                    </div>
                    <div :title="'截止昨天，阅读数总计为'+userInfo.readCount" class="n-data n-bf">
                        <p class="n-data-k">阅读数</p>
                        <p id="n-bf" class="n-data-v">{{userInfo.readCount}}</p>
                    </div>
                </div>
                <div class="n-cursor" style="width: 50px; left: 20px;"></div>
            </div>
        </div>
    </div>
    <div id="navigator" class="n n-fix" :class="showFixedNav ? 'fixed' : ''">
        <div class="wrapper">
            <div class="n-inner clearfix">
                <div class="n-tab-links">
                    <router-link :key="i" v-for="(item,i) in tabLinks" :to="{name:item.component, params:{id: userInfo.id}}" class="n-btn" :class="item.id === n_activeId ? 'active' : ''" :id="item.id" @mouseenter.native="cursorMove(i)" @click.native="n_activeId = item.id;n_activeStat = ''">
                        <span v-if="i === 0" class="n-avatar"><img :src="userInfo.avatar" :alt="userInfo.name"></span>
                        <span v-if="i !== 0" class="icon" :class="item.iconClass"></span>
                        <span v-if="i ===0" class="n-text">{{userInfo.name}}</span>
                        <span v-if="i !==0" class="n-text">{{item.name}}</span>
                        <span v-if="item.num" class="n-num">{{item.num}}</span>
                    </router-link>
                </div>
                <div class="clearfix g-search search-container">
                    <input type="text" placeholder="搜索视频" class="space_input">
                    <span class="icon search-btn"></span>
                </div>
                <div class="n-statistics">
                    <router-link :to="{name: 'spaceFollow',params: {id:userInfo.id}}" class="n-data n-gz" :class="n_activeStat === 'follows'? 'active' : ''" :title="userInfo.follows" @click.native="n_activeStat = 'follows'">
                        <p class="n-data-k">关注数</p>
                        <p id="n-gz" class="n-data-v space-attention">{{userInfo.follows}}</p>
                    </router-link>
                    <router-link :to="{name: 'spaceFans',params: {id:userInfo.id}}" class="n-data n-fs" :class="n_activeStat === 'fans' ? 'active' : ''" :title="userInfo.fans" @click.native="n_activeStat = 'fans'">
                        <p class="n-data-k">粉丝数</p>
                        <p id="n-fs" class="n-data-v space-attention">{{userInfo.fans}}</p>
                    </router-link>
                    <div :title="'视频、动态、专栏累计获赞'+userInfo.agrees" class="n-data n-bf">
                        <p class="n-data-k">获赞数</p>
                        <p id="n-bf" class="n-data-v">{{userInfo.agrees}}</p>
                    </div>
                    <div :title="'截止昨天，播放数总计为'+userInfo.playCount" class="n-data n-bf">
                        <p class="n-data-k">播放数</p>
                        <p id="n-bf" class="n-data-v">{{userInfo.playCount}}</p>
                    </div>
                    <div :title="'截止昨天，阅读数总计为'+userInfo.readCount" class="n-data n-bf">
                        <p class="n-data-k">阅读数</p>
                        <p id="n-bf" class="n-data-v">{{userInfo.readCount}}</p>
                    </div>
                </div>
                <div class="n-cursor" style="width: 50px; left: 20px;"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    debounce,
    throttle
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
            n_activeId: 'n-index',
            n_activeStat: '',
            tabLinks: [{
                    name: '主页',
                    component: 'spaceIndex',
                    id: 'n-index',
                    iconClass: 'icon-ic_home'
                },
                {
                    name: '动态',
                    component: 'spaceDynamic',
                    id: 'n-dynamic',
                    iconClass: 'icon-ic_following'
                },
                {
                    name: '投稿',
                    num: '87',
                    component: 'spaceVideo',
                    id: 'n-video',
                    iconClass: 'icon-ic_video'
                },
                {
                    name: '频道',
                    num: '0',
                    component: 'spaceChannel',
                    id: 'n-channel',
                    iconClass: 'icon-ic_channel'
                },
                {
                    name: '订阅',
                    component: 'spaceBangumi',
                    id: 'n-bangumi',
                    iconClass: 'icon-ic_sub'
                }
            ],
            tabsOffset: [],
            userInfo: {
                name: '陈睿',
                avatar: require('@/assets/images/avatar.png'),
                gender: 'male',
                level: '6',
                vipType: '百年带会员',
                sign: '喜欢的话就坚持吧',
                id: 114514,
                follows: '395',
                fans: '195.8万',
                agrees: '362万',
                playCount: '794.2万',
                readCount: '618.9万',
                bannerImg: require('@/assets/images/space/banner.webp'),
                avatar: require('@/assets/images/avatar.png'),
                auth: {
                    category: '个人认证',
                    cate: 'personal',
                },
                fansIcon: {
                    haveFansIcon: true,
                    detail: '/fansicon/help'
                }
            },
            showFixedNav: false,
        }
    },
    created() {
        this.inputSign = this.userInfo.sign;
    },
    mounted() {
        let that = this;
        this.tabLinks.forEach((item, i, arr) => {
            let dom = document.querySelector('#' + item.id);
            this.tabsOffset.push({
                left: dom.offsetLeft,
                width: dom.offsetWidth
            });
        });
        window.addEventListener('scroll', throttle(function () {
            if (document.documentElement.scrollTop < 324 && that.showFixedNav === false) return;
            if (document.documentElement.scrollTop >= 324 && that.showFixedNav === true) return;
            if (document.documentElement.scrollTop < 324 && that.showFixedNav === true) that.showFixedNav = false;
            if (document.documentElement.scrollTop >= 324 && that.showFixedNav === false) that.showFixedNav = true;
        }, 100));
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
        cursorMove(index) {
            const cursors = document.querySelectorAll('.n-cursor');
            cursors[0].style.left = this.tabsOffset[index].left + 'px';
            cursors[0].style.width = this.tabsOffset[index].width + 'px';
            cursors[1].style.left = this.tabsOffset[index].left + 'px';
            cursors[1].style.width = this.tabsOffset[index].width + 'px';
        },
    }
}
</script>

<style src="../../assets/css/space.css" scoped>

</style>
