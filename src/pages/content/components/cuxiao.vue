<template>
	<ai-popup :title="dialogInfo.title" ref="popup">
        <view class="title">促销说明</view>
        <view class="con-box mb20">
            <view class="con-box-title">
                <image src="/static/icons/gou.png" class="img" mode="widthFix"></image>礼品促销
            </view>
            <view class="con-box-detail">
                购买此产品送精美礼品一个
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
