<template>
	<ai-popup :title="dialogInfo.title" ref="popup">
		<view class="title">服务说明</view>
        <view class="con-box mb20">
            <view class="con-box-title">
                <image src="/static/icons/gou.png" class="img" mode="widthFix"></image>材料清晰
            </view>
            <view class="con-box-detail">
                办理所需材料清单及填写说明一目了然。
            </view>
        </view>
        <view class="con-box mb20">
            <view class="con-box-title">
                <image src="/static/icons/gou.png" class="img" mode="widthFix"></image>取消则赔付
            </view>
            <view class="con-box-detail">
                订单生效后，因商家原因取消订单的，商家应按商品详情页面“退改规则”/“取消政策”模块的规定向买家支付违约金。
            </view>
        </view>
        <view class="con-box">
            <view class="con-box-title">
                <image src="/static/icons/gou.png" class="img" mode="widthFix"></image>更改则赔付
            </view>
            <view class="con-box-detail">
                订单生效后，商家原因更改订单，商家需向买家支付违约金。
            </view>
        </view>
	</ai-popup>
</template>

<script>
	import aiPopup from '@/components/ai-popup.vue'
	export default {
		components: {
			aiPopup
		},
        props: ["dialogInfo"],
		data() {
			return {
				
			}
		},
		methods: {
			open:function(){
				this.$refs['popup'].open();
			}
		},
		
	}
</script>
<style lang="less" scoped>
    .title{
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        margin-bottom: 15px;
    }
    .con-box-title{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .img{
            width: 14px;
            height: 14px;
            margin-right: 11px;
        }
    }
    .con-box-detail{
        padding-left: 25px;
    }
</style>
