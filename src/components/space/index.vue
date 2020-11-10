<template>
<div id="page-index" class="wrapper clearfix">
    <div class="col-1">
        <div class="section video full-rows">
            <h3 class="section-title">
                <router-link :to="{ name: 'spaceVideo', params: { id: userInfo.id } }" class="t hover-blue">TA的视频</router-link>
                <span class="count">{{ userInfo.videoCount }}</span>
                <router-link :to="{ name: 'spaceVideo', params: { id: userInfo.id } }" class="more">更多</router-link>
                <div class="be-tab">
                    <ul class="be-tab-inner clearfix">
                        <li :key="i" v-for="(item, i) in videoTabTitle" class="be-tab-item" :class="item.isActive ? 'is-active' : ''" @click="changeBeTab(i)">
                            <span>{{ item.name }}</span>
                        </li>
                    </ul>
                    <div class="be-tab-cursor" style="transform: translateX(0px); width: 48px"></div>
                </div>
            </h3>
            <div class="content clearfix">
                <div class="small-item" :key="i" v-for="(item, i) in videoData.data" :class="videoData.watched[i] ? 'watched' : ''" @click="activeLink(i)">
                    <router-link :to="item.path" class="cover" target="_blank">
                        <img :src="item.img" :alt="item.title" />
                        <span class="length">{{ item.length }}</span>
                        <span class="i-watchlater" :class="watchlaterSel[i] ? 'has-select' : ''" @click.stop="setWatchlater(i)"></span>
                        <div class="be-tags-container">
                            <div class="tag coop-tag" v-if="item.coop">合作</div>
                        </div>
                    </router-link>
                    <router-link :to="item.path" target="_blank" class="title" :title="item.title">{{ item.title }}</router-link>
                    <div class="meta">
                        <span class="play"><i class="icon"></i>{{ item.playCount }}</span>
                        <span class="time"><i class="icon"></i>{{ item.updateTime }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="section article">
            <h3 class="section-title">
                <router-link :to="{ name: 'spaceArticle', params: { id: userInfo.id } }" class="t hover-blue">TA的专栏</router-link>
                <span class="count">{{ userInfo.articleCount }}</span>
                <router-link :to="{ name: 'spaceArticle', params: { id: userInfo.id } }" class="more">更多</router-link>
            </h3>
            <div class="content clearfix">
                <div class="article-wrap">
                    <div class="article-item" :key="i" v-for="(item, i) in articleData">
                        <div class="clearfix">
                            <div class="article-content">
                                <h2 class="article-title hover-blue">
                                    <router-link :to="item.url" target="_blank" :title="item.title">{{ item.title }}</router-link>
                                </h2>
                                <p class="article-con hover-blue">
                                    <router-link :to="item.url" target="_blank" :title="item.content">{{ item.content }}</router-link>
                                </p>
                                <div class="meta-col">
                                    <span>{{ item.cate }}</span>
                                    <span title="访问量" class="view"><i class="icon"></i>{{ item.view }}</span>
                                    <span title="喜欢数" class="like"><i class="icon"></i>{{ item.like }}</span>
                                    <span title="评论" class="comment"><i class="icon"></i>{{ item.comment }}</span>
                                    <span title="创建时间" class="time"><i class="icon"></i>{{ item.time }}</span>
                                </div>
                            </div>
                            <h2 class="article-img">
                                <router-link :to="item.url" class="article-bgimg">
                                    <div class="article-cover" :title="item.title" :style="{ backgroundImage: 'url(' + item.cover + ')' }"></div>
                                </router-link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section fav loading">
            <h3 class="section-title">
                <router-link :to="{ name: 'spaceFavorites', params: { id: userInfo.id } }" class="t hover-blue">TA的收藏夹</router-link>
                <span class="count">0</span>
            </h3>
            <div class="content clearfix"></div>
        </div>
        <div class="section bangumi">
            <h3 class="section-title">
                <router-link :to="{ name: 'spaceBangumi', params: { id: userInfo.id } }" class="t hover-blue">订阅番剧</router-link>
                <router-link :to="{ name: 'spaceBangumi', params: { id: userInfo.id } }" class="more">更多</router-link>
            </h3>
            <div class="content clearfix">
                <div class="large-item clearfix" :key="i" v-for="(item, i) in bangumiData">
                    <router-link :to="item.url" class="cover">
                        <img :src="item.cover" :alt="item.title" />
                    </router-link>
                    <div class="detail">
                        <router-link :to="item.url" class="title hover-blue"><span v-if="item.isEnd" class="icon end"></span>{{ item.title }}</router-link>
                        <p class="desc" :title="item.description">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section subs">
            <h3 class="section-title">
                <router-link :to="{ name: 'spaceSubs', params: { id: userInfo.id } }" class="t hover-blue">订阅标签</router-link>
                <span class="count">{{ userInfo.subsCount }}</span>
                <router-link :to="{ name: 'spaceSubs', params: { id: userInfo.id } }" class="more">更多</router-link>
            </h3>
            <div class="content clearfix">
                <div class="mini-item hover-blue" :key="i" v-for="(item, i) in subsData">
                    <router-link :to="item.url" target="_blank" :title="item.title" class="cover">
                        <img :src="item.img" :alt="item.title" />
                    </router-link>
                    <div :title="item.title" class="detail">
                        <router-link :to="item.url" target="_blank" :title="item.title">{{
                item.title
              }}</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="section coin">
            <h3 title="30天内投过硬币的视频" class="section-title">
                最近投币的视频
                <span class="count">{{ userInfo.coin }}</span>
            </h3>
            <div class="content clearfix">
                <div class="small-item" :key="i" v-for="(item, i) in coinVideoData">
                    <router-link :to="item.url" target="_blank" class="cover">
                        <img :src="item.cover" :alt="item.title" />
                        <span class="i-watchlater"></span>
                    </router-link>
                    <router-link to="item.url" target="_blank" class="title hover-blue" :title="item.title">{{ item.title }}</router-link>
                    <div class="meta">
                        <span class="play"><em class="icon"></em>526万</span>
                        <span class="comments"><em class="icon"></em>4.6万</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-2">
        <div class="section" v-if="userInfo.auth">
            <div class="row user-auth">
                <span :title="userInfo.auth.desc" class="auth-description">
                    <router-link to="/" :title="userInfo.auth.category" target="_blank" class="auth-icon" :class="userInfo.auth.cate === 'personal' ? 'personal-auth' : ''"></router-link>
                    bilibili{{ userInfo.auth.category }}：{{ userInfo.auth.desc }}
                </span>
            </div>
        </div>
        <div class="section i-m">
            <div class="i-m-r1">
                <router-link to="/" target="_blank" class="i-m-title">
                    <span class="icon-i-title"></span>
                    <span class="icon-m-ra"></span>
                </router-link>
            </div>
            <div class="i-m-r2 clearfix">
                <router-link to="/" target="_blank" class="i-m-btn i-m-upload hover-blue">
                    <span class="i-m-u-icon icon"></span>
                    <span class="i-m-text">视频投稿</span>
                </router-link>
                <router-link to="/" target="_blank" class="i-m-btn i-m-v hover-blue">
                    <span class="i-m-v-icon icon"></span>
                    <span class="i-m-text">内容管理</span>
                </router-link>
            </div>
        </div>
        <div class="section elec">
            <div class="elec-action">
                <div class="elec-trigger"><span class="elec-trigger-icon icon"></span>为TA充电</div>
                <div class="elec-map">
                    <div class="elec-status" @mouseenter="hoverElec(1)" @mouseleave="hoverElec(2)" :style="elecPrew">共
                        <span class="elec-count">{{userInfo.elec}}</span>人</div>
                    <div class="elec-status-bg"></div>
                    <div class="elec-status-bg-grey"></div>
                </div>
                <div id="elec-hover-bg-preloader"></div>
            </div>
        </div>
        <div class="section i-live">
            <h3 class="section-title">直播间</h3>
            <div class="content">
                <div class="i-live-fo clearfix">
                    <span class="i-live-unfo-btn">关注</span>
                    <span class="i-live-fo-count space-fans">{{userInfo.fans}}</span>
                </div>
                <div class="i-live-off i-live-off-guest">
                    <div class="i-live-unfod">
                        <p>主播不在，开播的时候会在动态通知你哦~</p>
                        <router-link to="/" target="_blank">前往TA的直播间
                            <span class="r-arrow icon i-live-arrow"></span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="section user">
            <div class="info">
                <div class="content">
                    <div class="meta">
                        <div class="row">
                            <div class="item uid">
                                <span class="icon"></span>
                                <span class="text">{{userInfo.id}}</span>
                            </div>
                            <div class="item birthday">
                                <span class="icon"></span>
                                <span class="text">{{userInfo.birthday}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section game">
            <h3 class="section-title">最近玩过的游戏</h3>
            <div class="content">
                <div class="mini-item" :key="i" v-for="(item,i) in recGameData">
                    <router-link :to="item.url" target="_blank" class="cover">
                        <img :src="item.img" alt="">
                    </router-link>
                    <div class="detail">
                         <router-link :to="item.url" target="_blank" class="hover-blue">{{item.name}}</router-link>
                    </div>
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
            userInfo: {
                name: "陈睿",
                avatar: require("@/assets/images/avatar.png"),
                gender: "male",
                birthday: '01-23',
                level: "6",
                vipType: "百年带会员",
                sign: "喜欢的话就坚持吧",
                id: 114514,
                follows: "395",
                fans: "195.8万",
                agrees: "362万",
                videoCount: 5,
                articleCount: 5,
                subsCount: 3,
                coin: 15,
                elec: 0,
                playCount: "794.2万",
                readCount: "618.9万",
                bannerImg: require("@/assets/images/space/banner.webp"),
                avatar: require("@/assets/images/avatar.png"),
                auth: {
                    category: "个人认证",
                    cate: "personal",
                    desc: "bilibili董事长兼CEO",
                },
                fansIcon: {
                    haveFansIcon: true,
                    detail: "/fansicon/help",
                },
            },
            videoTabTitle: [{
                    name: "最新发布",
                    isActive: true,
                },
                {
                    name: "最多播放",
                    isActive: false,
                },
                {
                    name: "最多收藏",
                    isActive: false,
                },
            ],
            beTabCursorOffsetX: [],
            videoData: {
                watched: [],
                data: [{
                        title: "BILIBILI 11周年演讲",
                        img: require("@/assets/images/space/index/v1.webp"),
                        path: "/",
                        coop: true,
                        length: "217:07",
                        playCount: "742.6万",
                        updateTime: "6-26",
                    },
                    {
                        title: "我们的五年——B站五年员工纪念视频 2020版",
                        img: require("@/assets/images/space/index/v2.webp"),
                        path: "/",
                        coop: false,
                        length: "04:51",
                        playCount: "130.2万",
                        updateTime: "6-24",
                    },
                    {
                        title: "【推荐一本喜欢的书】上帝掷骰子吗？",
                        img: require("@/assets/images/space/index/v3.webp"),
                        path: "/",
                        coop: false,
                        length: "04:46",
                        playCount: "245.7万",
                        updateTime: "4-23",
                    },
                    {
                        title: "bilibili上市宣传视频",
                        img: require("@/assets/images/space/index/v4.webp"),
                        path: "/",
                        coop: false,
                        length: "02:33",
                        playCount: "301.7万",
                        updateTime: "2018-3-28",
                    },
                    {
                        title: "说说你在B站的故事",
                        img: require("@/assets/images/space/index/v5.webp"),
                        path: "/",
                        coop: false,
                        length: "05:05",
                        playCount: "110.4万",
                        updateTime: "2017-9-22",
                    },
                ],
                array: [
                    [{
                            title: "BILIBILI 11周年演讲",
                            img: require("@/assets/images/space/index/v1.webp"),
                            path: "/",
                            coop: true,
                            length: "217:07",
                            playCount: "742.6万",
                            updateTime: "6-26",
                        },
                        {
                            title: "我们的五年——B站五年员工纪念视频 2020版",
                            img: require("@/assets/images/space/index/v2.webp"),
                            path: "/",
                            coop: false,
                            length: "04:51",
                            playCount: "130.2万",
                            updateTime: "6-24",
                        },
                        {
                            title: "【推荐一本喜欢的书】上帝掷骰子吗？",
                            img: require("@/assets/images/space/index/v3.webp"),
                            path: "/",
                            coop: false,
                            length: "04:46",
                            playCount: "245.7万",
                            updateTime: "4-23",
                        },
                        {
                            title: "bilibili上市宣传视频",
                            img: require("@/assets/images/space/index/v4.webp"),
                            path: "/",
                            coop: false,
                            length: "02:33",
                            playCount: "301.7万",
                            updateTime: "2018-3-28",
                        },
                        {
                            title: "说说你在B站的故事",
                            img: require("@/assets/images/space/index/v5.webp"),
                            path: "/",
                            coop: false,
                            length: "05:05",
                            playCount: "110.4万",
                            updateTime: "2017-9-22",
                        },
                    ],
                    [{
                            title: "BILIBILI 11周年演讲",
                            img: require("@/assets/images/space/index/v1.webp"),
                            path: "/",
                            coop: true,
                            length: "217:07",
                            playCount: "742.6万",
                            updateTime: "6-26",
                        },
                        {
                            title: "bilibili上市宣传视频",
                            img: require("@/assets/images/space/index/v4.webp"),
                            path: "/",
                            coop: false,
                            length: "02:33",
                            playCount: "301.7万",
                            updateTime: "2018-3-28",
                        },
                        {
                            title: "【推荐一本喜欢的书】上帝掷骰子吗？",
                            img: require("@/assets/images/space/index/v3.webp"),
                            path: "/",
                            coop: false,
                            length: "04:46",
                            playCount: "245.7万",
                            updateTime: "4-23",
                        },
                        {
                            title: "我们的五年——B站五年员工纪念视频 2020版",
                            img: require("@/assets/images/space/index/v2.webp"),
                            path: "/",
                            coop: false,
                            length: "04:51",
                            playCount: "130.2万",
                            updateTime: "6-24",
                        },
                        {
                            title: "说说你在B站的故事",
                            img: require("@/assets/images/space/index/v5.webp"),
                            path: "/",
                            coop: false,
                            length: "05:05",
                            playCount: "110.4万",
                            updateTime: "2017-9-22",
                        },
                    ],
                    [{
                            title: "BILIBILI 11周年演讲",
                            img: require("@/assets/images/space/index/v1.webp"),
                            path: "/",
                            coop: true,
                            length: "217:07",
                            playCount: "742.6万",
                            updateTime: "6-26",
                        },
                        {
                            title: "bilibili上市宣传视频",
                            img: require("@/assets/images/space/index/v4.webp"),
                            path: "/",
                            coop: false,
                            length: "02:33",
                            playCount: "301.7万",
                            updateTime: "2018-3-28",
                        },
                        {
                            title: "【推荐一本喜欢的书】上帝掷骰子吗？",
                            img: require("@/assets/images/space/index/v3.webp"),
                            path: "/",
                            coop: false,
                            length: "04:46",
                            playCount: "245.7万",
                            updateTime: "4-23",
                        },
                        {
                            title: "我们的五年——B站五年员工纪念视频 2020版",
                            img: require("@/assets/images/space/index/v2.webp"),
                            path: "/",
                            coop: false,
                            length: "04:51",
                            playCount: "130.2万",
                            updateTime: "6-24",
                        },
                        {
                            title: "说说你在B站的故事",
                            img: require("@/assets/images/space/index/v5.webp"),
                            path: "/",
                            coop: false,
                            length: "05:05",
                            playCount: "110.4万",
                            updateTime: "2017-9-22",
                        },
                    ],
                ],
            },
            watchlaterSel: [],
            articleData: [{
                    title: "读一本好书，终身受益",
                    url: "/",
                    content: "前言：今天凌晨看到新闻，通用电气公司前董事长和CEO杰克·韦尔奇先生去世了（老爷子一路走好），这让我回想起十几年前的一件事。",
                    cate: "日常",
                    view: "34.8万",
                    like: "3万",
                    comment: "1816",
                    time: "3-3",
                    cover: require("@/assets/images/space/index/a1.jpg"),
                },
                {
                    title: "大侠千古，再见青春",
                    url: "/",
                    content: "每一个生于七零后的男生，都有一段沉迷于武侠的岁月。在我的少年时代，没有网络，没有VCD，只有武侠和漫画能满足少年人天马行空的想象。    金庸的武侠最让我流连忘返。我记得第一次看“皓臂似玉梅花妆”时的喜悦，也记得看到“塞上牛羊空许约”时的悲伤。我少年时大量的闲暇时间都是在反复读金庸的小说。在我的心中，金庸是最好的作家，他为我们构建了一个属于英雄和侠义的世界，这个世界成为七零后八零后一代人的精神食粮。    《射雕英雄传》里，老顽童说过，这世上再厉害的武功，也敌不过时间。    再美好的时",
                    cate: "日常",
                    view: "17.3万",
                    like: "2.2万",
                    comment: "1250",
                    time: "2018-10-30",
                    cover: require("@/assets/images/space/index/a2.jpg"),
                },
                {
                    title: "《人生一串》完结手记",
                    url: "/",
                    content: "《人生一串》完结了。感谢导演，感谢主创团队，为B站创作出这么好的纪录片。短短六集，陪我们度过了半个夏天。2800多万播放量，超出了所有人的预期。有朋友劝过我，B站计算播放量的方式太实诚了，某些平台同样",
                    cate: "美食",
                    view: "37万",
                    like: "1.9万",
                    comment: "2241",
                    time: "2018-7-27",
                    cover: require("@/assets/images/space/index/a3.jpg"),
                },
                {
                    title: "bilibili是谁，bilibili为什么而奋斗",
                    url: "/",
                    content: "今天看了雷总的公开信《小米是谁，小米为什么而奋斗》，我看到的是一名创业者的理想，以及做一家“感动人心”的公司的坚持。    回想起2010年，当我第一次走进初创的小米公司的时候，雷总对我说：“",
                    cate: "人文历史",
                    view: "26.9万",
                    like: "1.7万",
                    comment: "3069",
                    time: "2018-5-4",
                    cover: require("@/assets/images/space/index/a4.jpg"),
                },
            ],
            bangumiData: [{
                    title: "鬼灭之刃（中配）",
                    url: "/",
                    description: "大正时期，日本。心地善良的卖炭少年·炭治郎，有一天他的家人被鬼杀死了。而唯一幸存下来的妹妹——祢豆子变成了鬼。被绝望的现实打垮的炭治郎，为了寻找让妹妹变回人类的方法，决心朝着“鬼杀队”的道路前进。人...",
                    cover: require("@/assets/images/space/index/b1.webp"),
                    isEnd: false,
                },
                {
                    title: "剑网3·侠肝义胆沈剑心之长漂",
                    url: "/",
                    description: "故事背景从宏大的江湖庙堂转移到热闹平凡的市井街坊中，沈剑心受掌门李忘生之邀，前往长安城筹建长安纯阳办事处，靠摆摊算卦营业维生。在这“长漂”的日子中，沈剑心不再是拥有主角光环名扬四海的江湖大侠，因为一些...",
                    cover: require("@/assets/images/space/index/b2.webp"),
                    isEnd: false,
                },
                {
                    title: "刀剑神域 爱丽丝篇 异界战争 -终章-",
                    url: "/",
                    description: "桐人、尤吉欧、爱丽丝。 距离两名修剑士和一名整合骑士打败了最高祭司阿多米尼斯多雷特已过去了半年。 结束了战斗，爱丽丝在故乡卢利特村生活。 在她的身旁，是失去了挚友，自己也失去了手臂和心的桐人。 献身般...",
                    cover: require("@/assets/images/space/index/b3.webp"),
                    isEnd: true,
                },
                {
                    title: "剑网3·侠肝义胆沈剑心 第三季",
                    url: "/",
                    description: "沈剑心为了解救清水岛村民，返回中原寻找解药。江湖外早已失去平静，偏安一隅的五圣教屡遭加害，破败的枫华谷村庄莫名异动，身处其中的沈剑心又会面临怎样的危机……...",
                    cover: require("@/assets/images/space/index/b4.webp"),
                    isEnd: false,
                },
            ],
            subsData: [{
                    title: "BML云live",
                    url: "/",
                    img: require("@/assets/images/space/index/transparent.gif"),
                },
                {
                    title: "守望先锋",
                    url: "/",
                    img: require("@/assets/images/space/index/t2.webp"),
                },
                {
                    title: "英雄联盟",
                    url: "/",
                    img: require("@/assets/images/space/index/t3.webp"),
                },
            ],
            coinVideoData: [{
                    title: "【何同学】80年代的电脑能做什么？苹果麦金塔深度体验",
                    url: "/",
                    cover: require("@/assets/images/space/index/c1.webp"),
                    playCount: "526万",
                    danmakuCount: "4.6万",
                },
                {
                    title: "郎 朗 上 头",
                    url: "/",
                    cover: require("@/assets/images/space/index/c2.webp"),
                    playCount: "1153.6万",
                    danmakuCount: "1.5万",
                },
                {
                    title: "影视科普：TVB腔为何听起来那么独特？原来它是这样形成的！",
                    url: "/",
                    cover: require("@/assets/images/space/index/c3.webp"),
                    playCount: "183.5万",
                    danmakuCount: "5562",
                },
                {
                    title: "超现实主义宣推片《来B站刷野吧》",
                    url: "/",
                    cover: require("@/assets/images/space/index/c4.webp"),
                    playCount: "526万",
                    danmakuCount: "4.6万",
                },
                {
                    title: "超现实主义宣推片《来B站刷野吧》",
                    url: "/",
                    cover: require("@/assets/images/space/index/c5.webp"),
                    playCount: "55.2万",
                    danmakuCount: "282",
                },
                {
                    title: "【影视飓风】打工三年，我们有了新工作室!",
                    url: "/",
                    cover: require("@/assets/images/space/index/c6.webp"),
                    playCount: "74.9万",
                    danmakuCount: "1.5万",
                },
                {
                    title: "【标清修复】罗翔老师早期接受央视连线珍贵影像（东方时空2008.2.25）",
                    url: "/",
                    cover: require("@/assets/images/space/index/c7.webp"),
                    playCount: "110.5万",
                    danmakuCount: "2251",
                },
                {
                    title: "多少都有点吧，那被歧视的根本原因是什么？【思维实验室】",
                    url: "/",
                    cover: require("@/assets/images/space/index/c8.webp"),
                    playCount: "235.9万",
                    danmakuCount: "3.6万",
                },
                {
                    title: "【艾叔】广州6500万半山豪宅，惊现20本房产证是怎样的心情",
                    url: "/",
                    cover: require("@/assets/images/space/index/c9.webp"),
                    playCount: "198.1万",
                    danmakuCount: "2.8万",
                },
                {
                    title: "【半佛】开民宿赚大钱是彻头彻尾的骗局。",
                    url: "/",
                    cover: require("@/assets/images/space/index/c10.webp"),
                    playCount: "153.6万",
                    danmakuCount: "5484",
                },
            ],
            elecPrew: {},
            recGameData: [{
                name: '命运-冠位指定（Fate/GO）',
                url: '/',
                img: require("@/assets/images/space/index/g1.webp")
            }, {
                name: '公主连结Re:Dive',
                url: '/',
                img: require("@/assets/images/space/index/g2.webp")
            }]
        };
    },
    created() {
        // 稍后再看、激活状态显示数组初始化
        for (let item of this.videoData.data) {
            this.watchlaterSel.push(false);
            this.videoData.watched.push(false);
        }
    },
    mounted() {
        // tab栏切换初始化
        let beTabs = document.querySelectorAll(".be-tab-item");
        for (let item of beTabs) {
            this.beTabCursorOffsetX.push(item.offsetLeft);
        }
    },
    methods: {
        changeBeTab(index) {
            this.videoTabTitle.forEach((item, i, arr) => {
                if (index === i) {
                    if (item.isActive) return; // 点击已经激活的不必操作
                    const beTab = document.querySelector(".be-tab-cursor");
                    arr[i].isActive = true; // 切换激活类
                    beTab.style.transform =
                        "translateX(" + this.beTabCursorOffsetX[index] + "px)"; // 变更Dom坐标
                    this.videoData.data = this.videoData.array[index]; // 切换显示内容
                } else arr[i].isActive = false;
            });
        },
        setWatchlater(index) {
            // 很奇怪 这里span冒泡到router-link一直无解，导致类切换出现问题
            this.watchlaterSel[index] = !this.watchlaterSel[index];
        },
        activeLink(index) {
            this.videoData.watched[index] = true;
            this.$forceUpdate();
        },
        hoverElec(num) {
            if (num === 1) {
                this.elecPrew = {
                    backgroundImage: 'url(' + require('@/assets/images/ele-prew.gif') + ')'
                }
            } else this.elecPrew = {}
        }
    },
};
</script>

<style src="../../assets/css/space/index.css" scoped>
</style>
