<template>
    <view>
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
                    <navigator class="public-top-nav-search" url="/pages/register/index">
                        <view class="search">
                            <image src="/static/icons/search.png" style="width:18px;height:18px;margin-right:5px;" mode="widthFix"></image>搜索
                        </view>
                    </navigator>
                    <view  class="public-scroll-navbar">
                        <scroll-view scroll-x="true" scroll-left="0" class="public-scroll-navbar-con">
                            <navigator class="public-top-nav-list" :class="{'active':info=='home'}" url="/pages/home/index">
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
                            </navigator>
                        </scroll-view>
                    </view>
                </view>
            </view>
        </view>
        <view class="fixed-box"></view>
    </view>
</template>

<script>
export default {
    props:["info"],
    components: {
        
    },
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            
        }
    },
	methods: {
        
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .fixed-box{
        width: 100%;
        height: 125px;
    }
    .public-top{
        width: 100%;
        height: 125px;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        background: url("~@/static/images/bg.png") no-repeat;
    }
    .public-top-con{
        width: 100%;
        height: 100%;
        padding: 15px 12px 0;
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
        margin-top: 20px;
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
</style>
