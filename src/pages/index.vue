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
                            <navigator class="public-top-nav-list" :class="{'active':info=='event'}" url="/pages/event/index">
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
                    <event v-if="navIndex===3"></event>
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
import event from '@/pages/event/index.vue'
import mycenter from '@/pages/mycenter/index.vue'
export default {
    components: {home,videoc,share,event,mycenter},
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
                name: '活动'
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
            if (this.navIndex === e.target.dataset.current) {
                return false;
            } else {
                this.navIndex = e.target.dataset.current
            }
        },
	},
    watch: {
       
    },
    
}
</script>
<style lang="less" scoped>
    .fixed-box{
        width: 100%;
        height: 118px;
    }
    .public-top{
        width: 100%;
        height: 118px;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        background: url("~@/static/images/bg.png") no-repeat;
    }
    .public-top-con{
        width: 100%;
        height: 100%;
        padding: 12px 12px 0;
        background: rgba(52, 51, 51, 0.86);
        color: #fff;
    }
    .public-top-info{
        font-size: 18px;
        display: flex;
        justify-content: space-between;
    }
    .public-top-attention{
        font-size: 14px;
        border: 1px solid #818489;
        padding: 3px 6px;
        border-radius: 30px;
        background: #414449;
    }
    .public-top-nav{
        font-size: 16px;
        margin-top: 16px;
        display: flex;
    }
    .public-top-nav-search{
        display: inline-block;
        width: 85px;
    }
    .public-top-nav-search .search{
        display: inline-block;
        background: #939496;
        padding: 3px 6px;
        border-radius: 30px;
    }
    .public-scroll-navbar{
        width: calc(100% - 85px);
        height: 30px;
        line-height: 28px;
    }
    .public-scroll-navbar-con{
        width: 100%;
        height: 100%;
        white-space:nowrap;
    }
    .public-top-nav-list{
        display: inline-block;
        margin-right: 16px;
        &.active{
            border-bottom: 2px solid #fff;
        }
    }
    .swiper-box{
        width: 100%;
        height: calc(100% - 118px);
    }
    .heightFull{
        height: 100%;
    }
</style>
