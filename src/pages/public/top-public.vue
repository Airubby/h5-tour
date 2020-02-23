<template>
    <view>
        <view class="public-top-info">
            <view class="pbulic-logo-info">新疆国旅专营店<image src="/static/icons/public-top-right.png" style="width:14px;height:14px;margin-left:5px;" mode="widthFix"></image></view>
            <view class="public-top-attention" @tap="topay">
                <view v-if="topPay">
                <image src="/static/icons/public-top-xin.png" style="width:18px;height:1px;margin-right:5px;" mode="widthFix"></image>关注
                </view>
                <view v-else>已关注</view>
            </view>
        </view>
        <view class="font-size12">
            <image src="/static/icons/logo.png" style="width:16px;height:16px;margin-right:5px;" mode="widthFix"></image>粉丝数<text>234325</text>
        </view>
    </view>
</template>

<script>
export default {
    props:[],
    components: {
        
    },
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            topPay:true
        }
    },
	methods: {
        topay:function(){
            this.topPay=!this.topPay;            
        }
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    
</style>
