<template>
    <view class="content">
        <view class="pd12">
            <navigator class="order-box" :url="'/pages/mycenter/order/detail?id='+ encodeURIComponent(JSON.stringify(1))">
                <view class="flex">
                    <view class="order-img">
                        <image src="/static/images/banner.png" class="index-con-img" mode="scaleToFill"></image>
                    </view>
                    <view class="order-text">
                        日本关西旅游6天5晚私家小团高端游 大阪京都虹夕诺雅温泉酒店
                    </view>
                    <view class="order-price">
                        <view class="price">￥<text class="font-size16">15000</text></view>
                        <view class="font-size12 color999 mb5">x<text>2</text></view>
                        <view class="font-size12 ocolor">买家已付款</view>
                    </view>
                </view>
                <view class="font-size12 text-right mt20">
                    共<text>2</text>条线路 合计<text class="price">:￥<text class="font-size16">30000</text></text>    
                </view>
            </navigator>
        </view>
    </view>
</template>

<script>
export default {
    components: {},
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
