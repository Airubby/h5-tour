<template>
	<view class="bottom-copyright" :style="{position:type?'normal':'fixed'}">
		小驴科技 人人享融
	</view>
</template>
<style lang="less" scoped>
	.bottom-copyright{
		width: 100%;
		height: 45px;
		line-height: 45px;
		background: #fff;
		bottom: 0;
		z-index: 9;
		color: #999;
		text-align: center;
	}
</style>

<script>
	export default {
		components:{},
		props:['type'],
		onLoad() {
			
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

