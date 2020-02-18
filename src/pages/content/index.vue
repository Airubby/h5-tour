<template>
    <view class="content bgfff">
        <view class="page-section-spacing">
            <view class="publictop-btn flex">
                <view class="publictop-btncon" @tap="backTo()">
                    <image src="/static/icons/left.png" style="width:12px;height:20px;" mode="widthFix"></image>
                </view>
                <view class="publictop-btncon">
                    <image src="/static/icons/cart.png" style="width:18px;height:18px;" mode="widthFix"></image>
                </view>
            </view>
            <swiper class="swiper" @change="changeSwiper" :current="slidecurrent"
            :autoplay="true" :circular="true" :interval="5000" :duration="500" :style="getHeight">
                <swiper-item>
                    <view class="swiper-video">
                        <video id="myVideo" src="http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4" 
                            autoplay controls loop width="100%" height="100%"></video>
                    </view>
                </swiper-item>
                <template v-for="item in 3">
                    <swiper-item :key="item">
                        <image src="/static/images/contentbg.jpg" class="index-banner" style="width:100%;height:100%;" mode="widthFix"></image>
                    </swiper-item>
                </template>
                <swiper-item>
                    <view class="swiper-route">
                        <view class="swiper-bg" :style="'background:url(/static/images/contentbg.jpg)'"></view>
                        <view class="swiper-route-con">
                            <view class="route-top">
                                <view class="mb10"><image src="/static/images/contentbg.jpg" class="img" mode="scaleToFill"></image></view>
                                <view class="font-size16 mb5">乌鲁木齐-吐鲁番等  跟团游</view>
                                <view class="font-size12">目的地参团|私家团</view>
                            </view>
                            <view class="route-list">
                                <view class="route-list-left">
                                    <image src="/static/icons/start-addr.png" class="img" mode="widthFix"></image><text>出发地：</text>
                                </view>
                                <view class="route-list-right">乌鲁木齐</view>
                            </view>
                            <view class="route-list">
                                <view class="route-list-left">
                                    <image src="/static/icons/end-addr.png" class="img" mode="widthFix"></image><text>目的地：</text>
                                </view>
                                <view class="route-list-right">克拉玛依区、克拉玛依、吐鲁番、乌尔禾区、乌鲁木齐、博乐市、天山区、昌吉、伊宁市、伊犁、布尔津县、奎屯市</view>
                            </view>
                            <view class="route-list">
                                <view class="route-list-left">
                                    <image src="/static/icons/strip.png" class="img" mode="widthFix"></image><text>交通方式：</text>
                                </view>
                                <view class="route-list-right">去程汽车 返程汽车</view>
                            </view>
                            <view class="route-list">
                                <view class="route-list-left">
                                    <image src="/static/icons/play.png" class="img" mode="widthFix"></image><text>线路玩法：</text>
                                </view>
                                <view class="route-list-right">北疆环线</view>
                            </view>
                            <view class="route-list">
                                <view class="route-list-left">
                                    <image src="/static/icons/price.png" class="img" mode="widthFix"></image><text>是否含购物：</text>
                                </view>
                                <view class="route-list-right">纯玩无购物 一价全包</view>
                            </view>
                        </view>
                    </view>
                </swiper-item>
            </swiper>
            <view class="slide-btn">
                <view class="slidepage slideA">跟团游</view>
                <view class="flex slide-more-btn">
                    <view class="slidepage" @tap="btnSwiper(0)" :class="{'active':slidecurrent===0}">视频</view>
                    <view class="slidepage" @tap="btnSwiper(1)" style="margin:0 10px;" :class="{'active':slidecurrent!==0&&slidecurrent!==4}">图片</view>
                    <view class="slidepage" @tap="btnSwiper(4)" :class="{'active':slidecurrent===4}">行程</view>
                </view>
                <view class="slidepage slideB" v-if="slideList.length>0&&slidecurrent!==0&&slidecurrent!==4">{{slidecurrent}}/{{3}}</view>
            </view>
        </view>
        <view class="pd12">
            <view class="price">￥310</view>
            <view class="old-price">价格<text class="num">￥387.5</text></view>
            <view class="title mt10">[昆明送签]马来西亚签证沙巴自由行拒签退款全国办理</view>
            <view class="top-info mt10 flex">
                <view>5分 超出预期</view>
                <view>评论89条</view>
                <view>月销<text style="margin:0 3px;">0</text>笔</view>
            </view>
            <view class="top-data font-size12 flex" @tap="dataFn">
                <view class="top-data-left">
                    <view class="logo">新疆国旅</view>
                    <view class="ml10">
                        <image src="/static/icons/gou.png" style="width:12px;height:12px;" mode="widthFix"></image>
                        材料清晰
                    </view>
                    <view class="ml10">
                        <image src="/static/icons/gou.png" style="width:12px;height:12px;" mode="widthFix"></image>
                        取消则赔付
                    </view>
                    <view class="ml10">
                        <image src="/static/icons/gou.png" style="width:12px;height:12px;" mode="widthFix"></image>
                        更改则赔付
                    </view>
                </view>
                <view class="top-data-right">
                    <image src="/static/icons/right.png" style="width:6px;height:11px;" mode="widthFix"></image>
                </view>
            </view>
        </view>
        <view class="bg10"></view>
        <view class="pd12">
            <view class="top-data flex" @tap="dataFn1">
                <view class="top-data-left">
                    <view class="data-title">促销</view>
                    <view>
                        购买此产品送精美礼品一个
                    </view>
                </view>
                <view class="top-data-right">
                    <image src="/static/icons/right.png" style="width:6px;height:11px;" mode="widthFix"></image>
                </view>
            </view>
        </view>
        <view class="bg10"></view>
        <view class="pd12">
            <view class="top-data flex">
                <view class="data-title">服务</view>
                <view>
                    该商品在支付成功后需等待卖家确认，平均确认时长1分钟，通过率100%
                </view>
            </view>
        </view>
        <view class="bg10"></view>
        <view class="pd12">
            <view class="public-title">
                <view class="show-title">
                    <view class="addr"><image src="/static/icons/addr.png" class="img" mode="widthFix"></image>多地出发</view>
                    <view class="addr-info">
                        <view class="addr-info-con">已选择奢华三飞6日成人套餐已选择奢华三飞6日成人套餐</view>
                    </view>
                </view>
                <navigator url="/pages/content/combo" class="show-all">查看团期<image src="/static/icons/faqs-right.png" class="img" mode="widthFix"></image></navigator>
            </view>
            <navigator url="/pages/content/combo" class="addr-list">
                <view class="addr-list-box"><view>02/21</view><view class="ocolor">￥1525</view></view>
                <view class="addr-list-box"><view>02/22</view><view class="ocolor">￥1625</view></view>
                <view class="addr-list-box"><view>02/23</view><view class="ocolor">￥1225</view></view>
                <view class="addr-list-box"><view>02/24</view><view class="ocolor">￥1725</view></view>
                <view class="addr-list-box"><view>02/25</view><view class="ocolor">￥3725</view></view>
            </navigator>
        </view>
        <view class="bg10"></view>
        <view class="pd12">
            <view class="public-title">
                <view class="show-title">宝贝评价(89)</view>
                <navigator url="/pages/content/discuss" class="show-all">查看全部<image src="/static/icons/faqs-right.png" class="img" mode="widthFix"></image></navigator>
            </view>
            <view class="discuss">
                <view class="discuss-type">
                    <view class="discuss-type-box">风格不错(46)</view>
                    <view class="discuss-type-box">导游很热抢(36)</view>
                    <view class="discuss-type-box">服务很棒(6)</view>
                    <view class="discuss-type-box">住宿环境很好(34)</view>
                    <view class="discuss-type-box">行程安排靠谱(52)</view>
                </view>
                <view class="discuss-user">
                    <image src="/static/images/getAvatar.jpg" class="img" mode="scaleToFill"></image><text>xiao_dai</text>
                </view>
                <view class="mb10">
                    非常满意的一次旅行体验，让我们又一次感受到彩云之南的魅力。希望下次还来云朵游玩，我会回来的。。。
                </view>
                <view class="color999">2019-12-12 12:12:12</view>
            </view>
            <view class="public-title">
                <view class="show-title">问大家(3)</view>
                <view class="show-all">查看全部<image src="/static/icons/faqs-right.png" class="img" mode="widthFix"></image></view>
            </view>
            <view class="faqs flex mb5">
                <view class="faqs-con">
                    <image src="/static/icons/wen.png" class="img" mode="widthFix"></image>
                    <text>大家办的是马来西亚多次往返签吗?</text>
                </view>
                <view class="color999">99个回答</view>
            </view>
            <view class="faqs flex mb5">
                <view class="faqs-con">
                    <image src="/static/icons/wen.png" class="img" mode="widthFix"></image>
                    <text>大家办的是马来西亚多次往返签吗?大家办的是马来西亚多次往返签吗?大家办的是马来西亚多次往返签吗?</text>
                </view>
                <view class="color999">35个回答</view>
            </view>
        </view>
        <view class="bg10"></view>
        <view class="pd12">
            <view class="company flex">
                <view class="company-info">
                    <image src="/static/icons/logo.png" style="width:46px;height:46px;margin-right:5px;" mode="widthFix"></image>
                    新疆国旅专营店
                </view>
                <view class="flex font-size12">
                    <view class="color999 mr5">
                        <view class="mb5">描述相符<text class="more-info">4.9</text><text class="more-info">高</text></view>
                        <view>服务态度<text class="more-info">4.9</text><text class="more-info">高</text></view>
                    </view>
                    <view class="img-info"><image src="/static/icons/right.png" style="width:6px;height:11px;" mode="widthFix"></image></view>
                </view>
            </view>
        </view>
        <view class="bg10"></view>
        <view class="pd12">
            <view class="public-title">
                <view class="show-title">店铺推荐</view>
                <navigator class="show-all" url="/pages/allProduct/index" open-type="switchTab">
                    查看全部<image src="/static/icons/faqs-right.png" class="img" mode="widthFix"></image>
                </navigator>
            </view>
        </view>
        <view class="search-content">
            <template v-for="item in 4">
            <view class="search-content-box" :key="'a'+item">
                <view class="search-content-img">
                    <image src="/static/images/pimg.png" class="img" mode="widthFix"></image>
                </view>
                <view class="search-content-info">
                    <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                    <view class="type">
                        经典北疆环游线
                    </view>
                    <view class="label">
                    </view>
                    <view class="flex">
                        <view class="price">￥<text class="number">152.00</text></view>
                        <view class="info">月销<text>24</text>件</view>
                    </view>
                </view>
            </view>
            </template>
        </view>
        <view class="bg10"></view>
        <ai-scroll-navfixed :tabList="tabList" ref="barTabNav">
			<view id="item1">
				<view class="bg10"></view>
                <view class="pd12">
                    <view class="public-title">
                        <view class="show-title">商家说亮点</view>
                    </view>
                    <view class="lightspot">
                        <view><image src="/static/icons/xing.png" class="img" mode="widthFix"></image></view>
                        <view>
                            13人小团：13人封顶，6人可独立成团！全程专车接送，纯玩不进购物店
                        </view>
                    </view>
                    <view class="lightspot">
                        <view><image src="/static/icons/xing.png" class="img" mode="widthFix"></image></view>
                        <view>
                            体验之旅：吉普车旅拍+鲜花饼DIY制作+纳西篝火晚会+竹筏摆渡古道骑行
                        </view>
                    </view>
                    <view class="lightspot">
                        <view><image src="/static/icons/xing.png" class="img" mode="widthFix"></image></view>
                        <view>
                            味蕾之享：丽江纳西土鸡火锅+丽江红酒晚宴+大理特色美味鲜花宴...
                        </view>
                    </view>
                    <view class="lightspot">
                        <view><image src="/static/icons/xing.png" class="img" mode="widthFix"></image></view>
                        <view>
                            视觉盛宴：昆明西山海埂大坝+大理双廊魅力名镇+玉龙雪山冰川公园大索道
                        </view>
                    </view>
                </view>
                <view class="bg10"></view>
                <view class="pd12">
                    <view class="public-title">
                        <view class="show-title">产品说明</view>
                    </view>
                    <view class="explain">
                        <view class="explain-title">目的地</view>
                        <view class="explain-con">
                            昆明、丽江、大理昆明、丽江、大理昆明、丽江、大理昆明、丽江、大理昆明、丽江、大理
                        </view>
                    </view>
                    <view class="explain">
                        <view class="explain-title">交通方式</view>
                        <view class="explain-con">
                            去程飞机，返程飞机
                        </view>
                    </view>
                    <view class="explain">
                        <view class="explain-title">线路玩法</view>
                        <view class="explain-con">
                            昆明+大理+丽江
                        </view>
                    </view>
                    <view class="explain">
                        <view class="explain-title">是否含购物</view>
                        <view class="explain-con">
                            纯玩无购物
                        </view>
                    </view>
                </view>
                <view class="bg10"></view>
                <view class="pd12">
                    <view class="public-title">
                        <view class="show-title">图文介绍</view>
                    </view>
                    <image src="/static/images/content0.png" style="width:100%;height:100%;" mode="widthFix"></image>
                    <image src="/static/images/content1.png" style="width:100%;height:100%;" mode="widthFix"></image>
                    <image src="/static/images/content2.png" style="width:100%;height:100%;" mode="widthFix"></image>
                    <image src="/static/images/content0.png" style="width:100%;height:100%;" mode="widthFix"></image>
                </view>
			</view>
			<view id="item2">
				<view class="bg10"></view>
                <view class="pd12">
                    <view class="public-title">
                        <view class="show-title">线路详情</view>
                    </view>
                    <scroll-view scroll-x="true" :scroll-left="0" class="public-scroll-navbar-con" ref="scrollNar">
                            <view v-for="(tab,index) in navBars" :key="'tab'+index" :class="['public-top-nav-list',navIndex==index ? 'active' : '']"
                        :id="'tab'+index" :data-current="index" @tap="tapNav">
                        {{tab.name}}
                        </view>
                    </scroll-view>
                    <view class="show-title">
                        行程信息(6天5晚)
                    </view>
                </view>
                <view class="day-box pd12">
                    <view class="day-public show-title">
                        第一天：昆明市
                    </view>
                    <view class="day-public">
                        <view class="day-title">景点：南糯山</view>
                        <view class="day-con">
                            睡到自然醒，用好早餐后，09：00左右乘车前往【南糯山】，南糯山世世代代居住着哈尼族支系的爱伲人，茶叶是他们的主要生活收入来源，在南糯山村委会半坡老寨山菁中生长着一株树龄超过800年的栽培型茶树王，因此，南糯山也被世人传颂为“古茶第一村”。品尝地道普洱茶，
                            中餐特意为您安排哈呢风味餐。
                            后乘车前往野象谷风景区，游览亚洲象在中国唯一的栖息地--【野象谷】西双版纳野象谷地处西双版纳国家级自然保护区勐养子保护区、“联合国教科文组织人与生物圈保护区”之内，距景洪市22公里，是中国首家以动物保护和环境保护为主题的国家公园。赏雨林风光，寻野象踪迹，同时与憨实大象亲密互动，看其实力表演。
                            晚餐品尝特色餐—野象谷象餐
                        </view>
                        <view @click="goImgList" class="day-img mt10">
                            <image :src="picList[0].picPath" class="img" mode="widthFix"></image>
                            <view class="img-info">{{ picList.length }}张图片</view>
                        </view>
                    </view>
                    <view class="day-public">
                        <view class="day-title">景点：南糯山</view>
                        <view class="day-con">
                            睡到自然醒，用好早餐后，09：00左右乘车前往【南糯山】，南糯山世世代代居住着哈尼族支系的爱伲人，茶叶是他们的主要生活收入来源，在南糯山村委会半坡老寨山菁中生长着一株树龄超过800年的栽培型茶树王，因此，南糯山也被世人传颂为“古茶第一村”。品尝地道普洱茶，
                            中餐特意为您安排哈呢风味餐。
                            后乘车前往野象谷风景区，游览亚洲象在中国唯一的栖息地--【野象谷】西双版纳野象谷地处西双版纳国家级自然保护区勐养子保护区、“联合国教科文组织人与生物圈保护区”之内，距景洪市22公里，是中国首家以动物保护和环境保护为主题的国家公园。赏雨林风光，寻野象踪迹，同时与憨实大象亲密互动，看其实力表演。
                            晚餐品尝特色餐—野象谷象餐
                        </view>
                    </view>
                    <view class="day-public">
                        <view class="day-title">餐饮：早餐含 午餐含 晚餐含</view>
                        <view class="day-con">早餐：酒店自助	中餐：孔雀迎宾宴  	晚餐：莲花晚宴</view>
                    </view>
                    <view class="day-public">
                        <view class="day-title">住宿：西双版纳勐海勐景来香莲主屋 豪华</view>
                        <view @click="goImgList" class="day-img">
                            <image :src="picList[0].picPath" class="img" mode="widthFix"></image>
                            <view class="img-info">{{ picList.length }}张图片</view>
                        </view>
                    </view>
                </view>
                <view class="day-box pd12">
                    <view class="day-public show-title">
                        第二天：天津市
                    </view>
                    <view class="day-public">
                        <view class="day-title">景点：南糯山</view>
                        <view class="day-con">
                            睡到自然醒，用好早餐后，09：00左右乘车前往【南糯山】，南糯山世世代代居住着哈尼族支系的爱伲人，茶叶是他们的主要生活收入来源，在南糯山村委会半坡老寨山菁中生长着一株树龄超过800年的栽培型茶树王，因此，南糯山也被世人传颂为“古茶第一村”。品尝地道普洱茶，
                            中餐特意为您安排哈呢风味餐。
                            后乘车前往野象谷风景区，游览亚洲象在中国唯一的栖息地--【野象谷】西双版纳野象谷地处西双版纳国家级自然保护区勐养子保护区、“联合国教科文组织人与生物圈保护区”之内，距景洪市22公里，是中国首家以动物保护和环境保护为主题的国家公园。赏雨林风光，寻野象踪迹，同时与憨实大象亲密互动，看其实力表演。
                            晚餐品尝特色餐—野象谷象餐
                        </view>
                        <view @click="goImgList" class="day-img mt10">
                            <image :src="picList[0].picPath" class="img" mode="widthFix"></image>
                            <view class="img-info">{{ picList.length }}张图片</view>
                        </view>
                    </view>
                    <view class="day-public">
                        <view class="day-title">景点：南糯山</view>
                        <view class="day-con">
                            睡到自然醒，用好早餐后，09：00左右乘车前往【南糯山】，南糯山世世代代居住着哈尼族支系的爱伲人，茶叶是他们的主要生活收入来源，在南糯山村委会半坡老寨山菁中生长着一株树龄超过800年的栽培型茶树王，因此，南糯山也被世人传颂为“古茶第一村”。品尝地道普洱茶，
                            中餐特意为您安排哈呢风味餐。
                            后乘车前往野象谷风景区，游览亚洲象在中国唯一的栖息地--【野象谷】西双版纳野象谷地处西双版纳国家级自然保护区勐养子保护区、“联合国教科文组织人与生物圈保护区”之内，距景洪市22公里，是中国首家以动物保护和环境保护为主题的国家公园。赏雨林风光，寻野象踪迹，同时与憨实大象亲密互动，看其实力表演。
                            晚餐品尝特色餐—野象谷象餐
                        </view>
                    </view>
                    <view class="day-public">
                        <view class="day-title">餐饮：早餐含 午餐含 晚餐含</view>
                        <view class="day-con">早餐：酒店自助	中餐：孔雀迎宾宴  	晚餐：莲花晚宴</view>
                    </view>
                    <view class="day-public">
                        <view class="day-title">住宿：西双版纳勐海勐景来香莲主屋 豪华</view>
                        <view @click="goImgList" class="day-img">
                            <image :src="picList[0].picPath" class="img" mode="widthFix"></image>
                            <view class="img-info">{{ picList.length }}张图片</view>
                        </view>
                    </view>
                </view>
			</view>
			<view id="item3">
				<view class="bg10"></view>
                <view class="pd12">
                    <view class="public-title">
                        <view class="show-title">推荐线路</view>
                    </view>
                </view>
                <view class="search-content">
                    <template v-for="item in 8">
                    <view class="search-content-box" :key="'b'+item">
                        <view class="search-content-img">
                            <image src="/static/images/pimg.png" class="img" mode="widthFix"></image>
                        </view>
                        <view class="search-content-info">
                            <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                            <view class="type">
                                经典北疆环游线
                            </view>
                            <view class="label">
                            </view>
                            <view class="flex">
                                <view class="price">￥<text class="number">152.00</text></view>
                                <view class="info">月销<text>24</text>件</view>
                            </view>
                        </view>
                    </view>
                    </template>
                </view>
			</view>
		</ai-scroll-navfixed>
        <view class="bottom-nav-fixed"></view>
        <view class="bottom-nav">
            <view class="bottom-nav-img-box">
                <view>
                    <image src="/static/icons/notesContact-orange.png" style="width:24px;height:24px" mode="widthFix"></image>
                </view>
                <view>客服</view>
            </view>
            <navigator url="/pages/index" class="bottom-nav-img-box">
                <view>
                    <image src="/static/icons/shop.png" style="width:24px;height:24px" mode="widthFix"></image>
                </view>
                <view>店铺</view>
            </navigator>
            <view class="bottom-nav-img-box">
                <view>
                    <image :src="'/static/icons/store-'+getScStyle+'.png'" style="width:24px;height:24px" mode="widthFix"></image>
                </view>
                <view :class="{'ocolor':bottomInfo.scflag}">收藏</view>
            </view>
            <view class="bottom-nav-auto">
                <navigator url="/pages/content/combo" class="bottom-nav-btn">加入购物车</navigator>
                <navigator url="/pages/content/combo" class="bottom-nav-btn">立即购买</navigator>
            </view>
        </view>
        <ai-img-preview :picList="picList" ref="imgPreview"></ai-img-preview>
        <data-popup :dialogInfo="{title:'新疆国旅'}" ref="dataRef"></data-popup>
        <cx-popup :dialogInfo="{title:'促销'}" ref="dataRef1"></cx-popup>
    </view>
</template>

<script>
import dataPopup from './components/data.vue'
import cxPopup from './components/cuxiao.vue'
import aiScrollNavfixed from "@/components/ai-ui/ai-scroll-navfixed/index.vue";
import aiImgPreview from "@/components/ai-ui/ai-img-preview/index.vue";
export default {
    components: {dataPopup,cxPopup,aiScrollNavfixed,aiImgPreview},
    created() {
        
    },
    onPageScroll: function(e) {
        this.$refs.barTabNav.selectedTab(e.scrollTop);
    },
    computed:{
        getHeight(){
            const { windowWidth, windowHeight } = uni.getSystemInfoSync();
            let height=this.bannerHeight*windowWidth/this.bannerWidth;
            return {'height':height+'px'}
        },
        getScStyle:function(){
            return this.bottomInfo.scflag?'orange':'black';
        }
    },
    mounted() {
        this.$nextTick (function () {
            let list=this.$el.querySelector(".index-banner");
            if(list){
                this.bannerHeight=list.getElementsByTagName("img")[0].naturalHeight;
                this.bannerWidth=list.getElementsByTagName("img")[0].naturalWidth;
            }
        });
    },
    data(){
        return{
            slidecurrent:0,
            slideList:[3],
            bannerWidth:375,
            bannerHeight:400,
            tabList: [{
                text: "图文介绍",
                navTarget: "#item1",
            }, {
                text: "线路详情",
                navTarget: "#item2",
            }, {
                text: "线路推荐",
                navTarget: "#item3",
            }],
            navIndex:0,
            navBars: [{
                name: '3人成团套餐',
            },{
                name: '8人成团套餐',
            },{
                name: '13人成团套餐',
            }, {
                name: '18人成团套餐'
            }, {
                name: '独自成团套餐'
            }],
            picList : [
				{
					picPath: '/static/images/hotel1.png'
				},
				{
					picPath: '/static/images/hotel2.png'
                },
                {
					picPath: '/static/images/hotel3.png'
				},
            ],
            bottomInfo:{
                scflag:false,
            }
        }
    },
	methods: {
        changeSwiper:function(e){
            this.slidecurrent = e.target.current;
        },
        btnSwiper:function(i){
            this.slidecurrent=i;
        },
        backTo:function(){
            uni.navigateBack();
        },
        dataFn:function(){
			this.$refs['dataRef'].open();
        },
        dataFn1:function(){
			this.$refs['dataRef1'].open();
        },
        async changeNav(e) {
            let index = e.target.current;
            this.navIndex = index; //一旦访问data就会出问题
        },
        async tapNav(e) { //点击tab-bar
            let index=parseInt(e.target.dataset.current);
            if (this.navIndex === index) {
                return false;
            } else {
                this.navIndex = index
            }
        },
        goImgList() {
            this.$refs['imgPreview'].open();
		}
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .swiper-video{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        background: #000;
    }
    .swiper-route{
        width: 100%;
        height: 100%;
        padding: 12px;
        background-color: rgba(0,0,0,.3);
        color: #fff;
        .swiper-bg{
            width: 100%;
            height: 100%;
            background-size: 100%;
            filter: blur(25px);
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
        }
        .route-top{
            text-align: center;
            padding: 40px 0 10px 0;
            margin-bottom: 20px;
            border-bottom: 1px solid #848484;
            .img{
                width:80px;
                height:80px;
                border-radius: 4px;
            }
        }
        .route-list{
            display: flex;
            font-size: 12px;
            height: 26px;
            line-height: 26px;
            .route-list-left{
                width: 100px;
                display: flex;
                align-items: center;
                .img{
                    width: 12px;
                    height: 12px;
                    margin-right: 4px;
                }
            }
            .route-list-right{
                width: calc(100% - 100px);
                overflow: hidden;
                height: 26px;
                line-height: 26px;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    .price{
        color: #ff5000;
        font-size: 18px;
    }
    .old-price{
        font-size: 12px;
        color: #999;
        margin-top: 5px;
        .num{
            margin-left: 5px;
            text-decoration: line-through;
        }
    }
    .title{
        color: #333;
        font-size: 16px;
        font-weight: bold;
    }
    .top-info{
        color: #999;
        font-size: 12px;
    }
    .slide-btn{
        width: 100%;
        position: absolute;
        bottom: 15px;
        left: 0;
        padding: 0 12px;
        display: flex;
        justify-content: center;
        .slidepage{
            border-radius: 12px;
            background-color: rgba(0,0,0,.6);
            font-size: 12px;
            padding: 5px 10px;
            color: #fff;
        }
        .slideA{
            position: absolute;
            left: 12px;
            bottom: 0;
        }
        .slideB{
            position: absolute;
            right: 12px;
            bottom: 0;
        }
        .slide-more-btn{
            .slidepage{
                background: #fff;
                color: #333;
            }
            .slidepage.active{
                background: #ffdc00;
            }
        }
    }
    .top-data{
        color: #666;
        margin: 15px 0 10px 0;
        .top-data-left{
            display: flex;
            width: calc(100% - 20px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .logo{
                background: #FFCC03;
                font-weight: bold;
                color: #333;
                border-radius: 3px;
                padding: 1px 3px;
            }
        }
        .data-title{
            color: #999;
            margin-right: 10px;
            min-width: 28px;
        }
    }
    .public-title{
        display: flex;
        color: #333;
        justify-content: space-between;
        padding-bottom: 15px;
        .show-all{
            color: #ff5000;
            font-size: 12px;
            display: flex;
            align-items: center;
            .img{
                width:6px;
                height:11px;
                margin-left: 5px;
            }
        }
    }
    .show-title{
        font-weight: bold;
        display: flex;
        flex: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .discuss{
        border-bottom: 1px solid #f6f6f6;
        padding-bottom: 15px;
        margin-bottom: 15px;
        .discuss-type{
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 5px;
            .discuss-type-box{
                padding: 5px 10px;
                margin: 0 5px 10px 5px;
                border-radius: 20px;
                background: #FFF9DE;
            }
        }
        .discuss-user{
            display: flex;
            align-items: center;
            color: #999;
            margin-bottom: 10px;
            .img{
                width: 24px;
                height: 24px;
                margin-right: 5px;
                border-radius: 50%;
            }
        }
    }
    .faqs-con{
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        .img{
            width: 14px;
            height: 14px;
            margin-right: 5px;
        }
    }
    .company{
        align-items: center;
        .more-info{
            color: #ff5000;
            margin: 0 4px;
        }
        .img-info{
            display: flex;
            align-items: center;
        }
        .company-info{
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
    }
    .lightspot{
        display: flex;
        margin-bottom: 12px;
        .img{
            width: 13px;
            height: 12px;
            margin: 3px 5px 0 0;
            display: flex;
        }
    }
    .explain{
        display: flex;
        border-top: 1px solid #f6f6f6;
        padding: 15px 0;
        .explain-title{
            width: 88px;
            color: #999;
        }
        .explain-con{
            width: calc(100% - 88px);
        }
    }
    .public-scroll-navbar-con{
        border-bottom: 1px solid #f6f6f6;
        margin-bottom: 15px;
        .public-top-nav-list.active{
            border-bottom: 2px solid #FFC900;
            padding-bottom: 5px;
        }
    }
    .day-box{
        border-bottom: 10px solid #F2F3F4;
    }
    .day-public{
        position: relative;
        padding-left: 18px;
        padding-bottom: 20px;
        .day-title{
            margin-bottom: 12px;
        }
        &:before{
            content: "";
            position: absolute;
            left: 0;
            top: .48rem;
            width: 7px;
            height: 7px;
            background: #ffc900;
            border-radius: 50%;
            box-shadow: 0 0 1px #fff;
        }
        &:after{
            content: "";
            position: absolute;
            top: .69333rem;
            left: 3px;
            height: 100%;
            border-left: 1px dashed #ccc;
        }
        .day-con{
            background: #FFFEF7;
            font-size: 12px;
        }
        .day-img{
            position: relative;
            .img{
                width: 100%;
                height: 100%;
            }
            .img-info{
                position: absolute;
                right: 0;
                top: 0;
                background: rgba(0,0,0,.7);
                color: #fff;
                font-size: 12px;
                padding: 1px 3px;
            }
        }
    }
    .addr{
        display: flex;
        align-items: center;
        .img{
            width:10px;
            height:14px;
            margin-right: 5px;
        }
    }
    .addr-info{
        display: flex;
        color: #999;
        font-size: 12px;
        overflow: hidden;
        padding: 3px 5px 0 5px;
        .addr-info-con{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .addr-list{
        display: flex;
        justify-content: space-around;
        .addr-list-box{
            border: 1px solid #f1f1f1;
            color: #333;
            text-align: center;
            font-size: 12px;
            padding: 5px 8px;
            border-radius: 3px;
        }
    }
</style>
