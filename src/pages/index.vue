<template>
    <view class="content">
        <view class="public-top">
            <view class="public-top-con">
                <view class="public-top-info">
                    <view class="pbulic-logo-info">新疆国旅专营店<image src="/static/icons/public-top-right.png" style="width:14px;height:14px;margin-left:5px;" mode="widthFix"></image></view>
                    <view class="public-top-attention">
                        <image src="/static/icons/public-top-xin.png" style="width:18px;height:1px;margin-right:5px;" mode="widthFix"></image>关注
                    </view>
                </view>
                <view class="font-size12">
                    <image src="/static/icons/logo.png" style="width:16px;height:16px;margin-right:5px;" mode="widthFix"></image>粉丝数<text>234325</text>
                </view>
                <view class="public-top-nav">
                    <navigator class="public-top-nav-search" url="/pages/search/index">
                        <view class="search">
                            <image src="/static/icons/search.png" style="width:18px;height:18px;margin-right:5px;" mode="widthFix"></image>搜索
                        </view>
                    </navigator>
                    <view  class="public-scroll-navbar">
                        <scroll-view scroll-x="true" :scroll-left="scrollLeft" class="public-scroll-navbar-con" @scroll="scroll" ref="scrollNar">
                             <view v-for="(tab,index) in navBars" :key="'tab'+index" :class="['public-top-nav-list',navIndex==index ? 'active' : '']"
                            :id="'tab'+index" :data-current="index" @tap="tapNav">
                            {{tab.name}}
                            </view>
                            <!-- <navigator class="public-top-nav-list" :class="{'active':info=='home'}" url="/pages/home/index">
                                首页
                            </navigator>
                            <navigator class="public-top-nav-list" :class="{'active':info=='video'}" url="/pages/video/index">
                                玩法视频
                            </navigator>
                            <navigator class="public-top-nav-list" :class="{'active':info=='share'}" url="/pages/share/index">
                                分享领钱
                            </navigator>
                            <navigator class="public-top-nav-list" :class="{'active':info=='faqs'}" url="/pages/faqs/index">
                                活动
                            </navigator>
                            <navigator class="public-top-nav-list" :class="{'active':info=='mycenter'}" url="/pages/mycenter/index">
                                个人中心
                            </navigator> -->
                        </scroll-view>
                    </view>
                </view>
            </view>
        </view>
        <view class="fixed-box"></view>
        <swiper :current="navIndex" class="swiper-box" :duration="300" @change="changeNav">
            <swiper-item class="swiper-item">
                <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull" @scroll="scrollNav">
                    <home v-if="navIndex===0"></home>
                </scroll-view>
            </swiper-item>
            <swiper-item class="swiper-item">
                <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull" @scroll="scrollNav">
                    <videoc v-if="navIndex===1"></videoc>
                </scroll-view>
            </swiper-item>
            <swiper-item class="swiper-item">
                <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull" @scroll="scrollNav">
                    <share v-if="navIndex===2"></share>
                </scroll-view>
            </swiper-item>
            <swiper-item class="swiper-item">
                <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull" @scroll="scrollNav">
                    <faqs v-if="navIndex===3"></faqs>
                </scroll-view>
            </swiper-item>
            <swiper-item class="swiper-item">
                <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull" @scroll="scrollNav">
                    <mycenter v-if="navIndex===4"></mycenter>
                </scroll-view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
import home from '@/pages/home/index.vue'
import videoc from '@/pages/video/index.vue'
import share from '@/pages/share/index.vue'
import faqs from '@/pages/faqs/index.vue'
import mycenter from '@/pages/mycenter/index.vue'
export default {
    components: {home,videoc,share,faqs,mycenter},
    created() {
        
    },
    onShow(){
        
    },
    onTabItemTap(){
        this.scrollLeft=0;
        this.scrollTop=0;
        this.navIndex=0;
    },
    mounted() {
    },
    data(){
        return{
            navIndex:0,
            scrollLeft:0,
            scrollTop:0,
            navBars: [{
                name: '首页',
            }, {
                name: '玩法视频'
            }, {
                name: '分享领钱'
            }, {
                name: '旅游问答'
            }, {
                name: '个人中心'
            }],
        }
    },
	methods: {
        scroll:function(e){
            this.scrollLeft = e.detail.scrollLeft
        },
        scrollNav:function(e){
            this.scrollTop = e.detail.scrollTop
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
	},
    watch: {
       
    },
    
}
</script>
<style lang="less" scoped>
    
</style>
