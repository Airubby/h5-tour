<template>
    <view class="content">
        <view class="video-con">
            <video id="myVideo" src="http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4" 
            autoplay controls loop width="100%" height="300px"></video>
            <view class="publictop-btn flex">
                <view class="publictop-btncon" @tap="backTo()">
                    <image src="/static/icons/left.png" style="width:12px;height:20px;" mode="widthFix"></image>
                </view>
                <view class="publictop-btncon">
                    <image src="/static/icons/store.png" style="width:20px;height:20px;" mode="widthFix"></image>
                </view>
            </view>
        </view>
        <view class="info">
            横店影视城经典套餐--亲子游横店影视城经典套餐--亲子游横店影视城经典套餐--亲子游
        </view>
        <view class="video-title">视频相关宝贝(5)</view>
        <view class="search-content search-content-more">
            <template v-for="item in 5">
                <view class="search-content-box" :key="item">
                    <view class="search-content-img">
                        <image src="/static/images/pimg.png" class="img" mode="scaleToFill"></image>
                    </view>
                    <view class="search-content-info">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="flex">
                            <view class="price">￥<text class="number">152.00</text></view>
                            <view class="cart">
                                <image src="/static/icons/cart.png" style="width:24px;height:24px;" mode="widthFix"></image>
                            </view>
                        </view>
                    </view>
                </view>
            </template>
        </view>
    </view>
</template>

<script>
export default {
    components: {},
    onReady: function () {
        
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
        backTo:function(){
            uni.navigateBack();
        }
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .content{
        background: #000;
        color: #fff;
    }
    .video-con{
        width: 100%;
        height: 300px;
        position: relative;
    }
    .info{
        width: 100%;
        line-height: 20px;
        font-size: 16px;
        padding: 10px;
    }
    .video-title{
        width: 100%;
        color: #FF5000;
        padding: 10px;
        font-size: 16px;
    }
    .search-content-img{
        width: 100px;
        height: 100px;
    }
    .search-content-info{
        background: #000;
        width: calc(100% - 100px);
        .title{
            margin-bottom: 20px;
        }
    }
</style>
