<template>
<div class="mini-header">
    <div class="mini-header-content">
        <div class="nav-link">
            <ul class="nav-link-ul">
                <li class="nav-link-item" :key="i" v-for="(item, i) in navItem">
                    <router-link :to="{ path: item.url }" class="black-a link" target="_blank"><i v-if="item.hasIconfont" :class="item.iconfontName"></i><i v-if="i === 0" class="bilifont bili-Navbar_logo"></i><span>{{ item.name }}</span><i v-if="i === 0" class="bilifont bili-general_pullup_s"></i></router-link>
                </li>
            </ul>
        </div>
        <div class="nav-search-box">
            <div class="nav-search">
                <form id="nav_searchform">
                    <input v-model="navSearchForm.text" class="nav-search-keyword" maxlength="500px" :placeholder="navSearchPlaceholder" />
                    <div class="nav-search-btn">
                        <button type="info" class="bilifont bili-icon_dingdao_sousuo nav-search-submit"></button>
                    </div>
                </form>
            </div>
        </div>
        <div class="nav-user-center">
            <div class="user-con search-icon">
                <router-link :to="{path:'/'}" target="_blank"><i class="bilifont bili-icon_dingdao_sousuo"></i></router-link>
            </div>
            <ul class="user-con">
                <li class="user-con-item mini-avatar">
                    <router-link :to="{ name:userCon.userSpace, params: { id: userCon.id }}" target="_blank"> <img :src="userCon.avatar" /></router-link>
                </li>
                <li :key="index" v-for="(item, index) in userCon.data" class="user-con-item">
                    <router-link :to="{ path: item.url }" target="_blank" class="link">{{ item.name }}
                        <div v-if="item.name === '消息' || item.name === '动态'" class="num">{{item.num}}</div>
                    </router-link>
                </li>
            </ul>
            <el-button type="danger" class="upload">投稿</el-button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            navSearchForm: {
                text: "",
            },
            userCon: {
                id: 114514,
                avatar: require('@/assets/images/avatar.png'),
                userSpace: 'space',
                data: [{
                    name: '大会员',
                    url: '/big'
                }, {
                    name: '消息',
                    url: '/message',
                    num: '99+'
                }, {
                    name: '动态',
                    url: '/trend',
                    num: '22'
                }, {
                    name: '收藏',
                    url: '/favlist'
                }, {
                    name: '历史',
                    url: '/history'
                }, {
                    name: '创作中心',
                    url: '/member'
                }]
            },
            navItem: [{
                    name: '主站',
                    hasIconfont: false,
                    url: '/',
                },
                {
                    name: '番剧',
                    hasIconfont: false,
                    url: 'anime',
                    iconfontName: '',
                },
                {
                    name: '游戏中心',
                    hasIconfont: false,
                    url: '/gamecenter',
                    iconfontName: '',
                },
                {
                    name: '直播',
                    hasIconfont: false,
                    url: '/live',
                    iconfontName: '',
                },
                {
                    name: '会员购',
                    hasIconfont: false,
                    url: '/shop',
                    iconfontName: '',
                },
                {
                    name: '漫画',
                    hasIconfont: false,
                    url: '/manga',
                    iconfontName: '',
                },
                {
                    name: '赛事',
                    hasIconfont: false,
                    url: '/match',
                    iconfontName: '',
                },
                {
                    name: '下载APP',
                    hasIconfont: true,
                    url: '/app',
                    iconfontName: 'bilifont bili-icon_dingdao_xiazaiapp',
                },
            ],
            navSearchPlaceholder: '都是写死的假数据而已',
        }
    }
}
</script>

<style lang="less" scoped>
.mini-header {
    position: relative;
    z-index: 2020;
    width: 100%;
    height: 56px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);

    .mini-header-content {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin: 0 auto;
        padding: 10px 24px;
        line-height: 30px;

        .nav-link {

            .nav-link-ul {
                display: flex;
                align-items: center;
                height: 36px;

                .nav-link-item {
                    margin-right: 12px;

                    i,
                    span {
                        vertical-align: middle;
                        font-size: 14px;
                    }

                    i {
                        line-height: 30px;
                    }

                }
            }
        }

        .nav-search-box {
            margin: 0 10px;
            width: 500px;
            transition: width 0.3s;
            transition-property: width;
            transition-duration: 0.3s;
            transition-timing-function: ease;
            transition-delay: 0s;

            .nav-search {
                position: relative;

                #nav_searchform {
                    display: block;
                    padding: 0 38px 0 16px;
                    border-radius: 2px;
                    background: #F4F4F4;
                    border: 1px solid #E7E7E7;

                    .nav-search-keyword {
                        overflow: hidden;
                        width: 100%;
                        height: 34px;
                        border: none;
                        background-color: transparent;
                        box-shadow: none;
                        color: #999;
                        font-size: 14px;
                        line-height: 34px;
                        transition: all 0.2s;
                        outline: none;
                    }

                    .nav-search-btn {
                        position: absolute;
                        top: 0;
                        right: 0;
                        margin: 0;
                        padding: 0;
                        width: 48px;
                        height: 36px;
                        border: none;
                        border-radius: 2px;
                        background: #e7e7e7;
                        line-height: 26px;
                        cursor: pointer;

                        .nav-search-submit {
                            position: absolute;
                            top: 8px;
                            right: 16px;
                            margin: 0;
                            padding: 0;
                            border: none;
                            background: none;
                            color: #505050;
                            font-size: 16px;
                            line-height: 20px;
                            cursor: pointer;
                            transition: all 0.2s;
                            outline: none
                        }
                    }

                    .nav-search-btn:hover {
                        .nav-search-submit {
                            color: #1890ff;
                        }
                    }
                }
            }
        }

        .nav-user-center {
            display: flex;
            flex-shrink: 0;

            .user-con-item {
                position: relative;
                display: flex;
                margin-left: 12px;
                cursor: pointer;

                a {
                    white-space: nowrap;
                    font-size: 14px;
                }
            }

            .mini-avatar {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                position: relative;
                margin-right: 10px;

                img {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    transition: 0.2s;
                }
            }
        }

        .upload {
            position: relative;
            color: #fff;
            font-size: 14px;
            display: block;
            width: 100px;
            height: 36px;
            line-height: 10px;
            text-align: center;
            background: #fb7299;
            border-radius: 2px;
            margin-left: 14px;
            cursor: pointer;
        }
    }
}

.none {
    margin: 0 24px 0 0;
}

.name {
    font-size: 14px;
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.con {
    display: flex;
    text-align: center;

    a:hover {
        .black-a {
            color: #1890ff;
        }
    }

    i {
        font-size: 28px;
    }
}

.round {
    position: relative;
    width: 36px;
    height: 36px;
    background: #ff5c7c;
    border-radius: 36px;
    line-height: 36px;
    text-align: center;
    margin: 0 auto 4px;
}

.nav-link .nav-link-ul .nav-link-item .link {
    color: #212121 !important;
    transition: color .3s;
}

.user-con {
    display: flex;
    align-items: center;
}

.nav-user-center .user-con.search-icon {
    display: none;
}

.nav-user-center .user-con.search-icon .bilifont {
    font-size: 20px;
}

.nav-user-center .bilifont {
    color: #999;
    vertical-align: middle;
    font-size: 28px;
    cursor: pointer;
}

.nav-link .nav-link-ul .nav-link-item .link {
    font-size: 14px;
    color: #fff;
    text-shadow:none;
    white-space: nowrap;
    display: flex;
}

.nav-link .nav-link-ul .nav-link-item .link .bili-Navbar_logo {
    font-size: 32px !important;
    color: #00a1d6;
    vertical-align: middle !important;
    margin-right: 16px;
}

.nav-link .nav-link-ul .nav-link-item .link .bili-general_pullup_s {
    vertical-align: middle;
    font-size: 16px !important;
    color: #999;
    display: inline-block;
    transform: rotate(180deg);
    transition: transform 0.3s;
}

.nav-link .link .bili-icon_dingdao_xiazaiapp {
    color: #00a1d6;
}
</style>
