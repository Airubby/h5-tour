<template>
    <view class="content">
        <view class="status_bar"><!-- 这里是状态栏 --></view>
        <view class="public-top">
            <view class="public-top-con">
                <top-public></top-public>
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
                            <!-- <navigator url="/pages/mycenter/index" class="public-top-nav-list">
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
import topPublic from '@/pages/public/top-public.vue'
export default {
    components: {home,videoc,share,faqs,mycenter,topPublic},
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
    .status_bar{
        background: rgba(52, 51, 51, 0.86);
    }
</style>
