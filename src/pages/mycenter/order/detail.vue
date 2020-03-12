<template>
    <view class="content">
        <nav-bar title="订单详情" bgColor="#f5f5f5"></nav-bar>
        <view class="pd12">
            <view class="order-box">
                <view class="flex ocolor font-size16 mb15">卖家已付款</view>
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
                        <view class="font-size12 ocolor">交易成功</view>
                    </view>
                </view>
                <view class="text-right mt20">
                    <view class="btn">退款</view>
                </view>
                <view class="flex mt15">
                    <view>实付款</view> 
                    <view class="ocolor"><text class="font-size12">￥</text><text>25255</text></view>
                </view>
            </view>
            <view class="order-box">
                <view class="flex font-size16 mb15">订单信息</view>
                <view class="color999 order-detail">
                    <view class="flex mt10">
                        <view class="title">订单编号</view> 
                        <view>3593u593453545545</view>
                    </view>
                    <view class="flex mt10">
                        <view class="title">创建时间</view> 
                        <view>2020-2-3 21:12:12</view>
                    </view>
                    <view class="flex mt10">
                        <view class="title">付款时间</view> 
                        <view>2020-2-3 21:14:12</view>
                    </view>
                </view>
            </view>
            <view class="order-box">
                <view class="contact">
                    <view><image src="/static/icons/notesContact-orange.png" class="img" mode="widthFix"></image>联系卖家</view>
                    <view @click="callPhone(15228282828)"><image src="/static/icons/telephone.png" style="width:24px;height:24px;" class="img" mode="widthFix"></image>拨打电话</view>
                </view>
            </view>
        </view>
        <view class="bottom-nav-fixed"></view>
        <view class="bottom-nav">
            <view class="order-box bottom-order-box">
                <view class="btn active">确认收货</view>
            </view>
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
        callPhone:function(item){
			uni.makePhoneCall({
				phoneNumber: item //仅为示例
			});
		},
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .bottom-order-box{
        width: 100%;
        padding: 0 15px;
        margin: 0;
        text-align: right;
    }
    .order-detail{
        .flex{
            justify-content: flex-start;
        }
    }
    .title{
        width: 85px;
    }
    .contact{
        display: flex;
        justify-content: space-around;
        .img{
            width: 22px;
            height: 22px;
            margin-right: 3px;
        }
    }
</style>
