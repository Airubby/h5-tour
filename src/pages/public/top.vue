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
                    <navigator class="public-top-nav-search public-top-full-search" url="/pages/search/index">
                        <view class="search">
                            <image src="/static/icons/search.png" style="width:18px;height:18px;margin-right:5px;" mode="widthFix"></image>
                            搜索店铺内宝贝
                        </view>
                    </navigator>
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
    
</style>
