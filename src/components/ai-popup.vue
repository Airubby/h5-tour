<template>
	<uni-popup :type="'bottom'" :mask-click="true" @change="change" ref="popup" class="uni-popup">
		<view class="uni-tip-title">{{title}}</view>
		<view class="uni-tip-content">
			<slot></slot>
		</view>
		<view class="uni-tip-group-button">
			<view class="uni-tip-button" @click="close()">确定</view>
		</view>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
        props: {
            title: {
				type: String,
				default: "提示"
            },
            visible:{
                type: Boolean,
                default: false,
            }
        },
		data() {
			return {
				
			}
		},
		methods: {
			change:function(e){
                console.log(e)
            },
			sure:function(){
				this.$refs['popup'].close();
                this.$emit("sure");
			},
			open:function(){
				this.$refs['popup'].open();
			},
			close:function(){
				this.$refs['popup'].close();
			}
		},
	}
</script>

<style>
	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #333;
		height: 45px;
		line-height: 45px;
		background: #FFD400;
		border-radius: 10px 10px 0 0;
	}

	.uni-tip-content {
		max-height: 80%;
		padding: 0px 10px 10px;
		font-size: 14px;
		color: #666;
		text-align: left;
	}

	.uni-tip-group-button {
		padding: 10px;
		height: 60px;
		display: flex;
	}

	.uni-tip-button {
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 20px;
		font-size: 15px;
		color: #3b4144;
		background: #FFD400;
		letter-spacing: 5px;
	}
</style>
