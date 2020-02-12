<template>
	<view>
		<view class="ai-upload-preview" v-for="(item,index) in imgUrl" :key="index">
			<image :src="item" style="width:100%;height:100%;" mode="widthFix"></image>
			<view class="ai-upload-mask">
				<view class="ai-upload-mask-con">
					<view  class="ai-upload-mask-icon">
						<ai-icons :color="iconColor" type="remove" :size="iconSize" @tap="remove(index)"></ai-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="ai-upload-img">
			<view class="ai-upload-con">
				<view class="ai-upload-btn" @tap="selectImg">
					<ai-icons :color="iconColor" type="camera" :size="iconSize"></ai-icons>
					<view class="text">拍摄或选择照片</view>
				</view>
			</view>
			<uni-load-more :status="status" :content-text="contentText" color="#FFDD00" v-show="showLoading" class="ai-upload-loading" />
		</view>
	</view>
</template>
<style lang="less" scoped>
	.ai-upload-img{
		width: 100%;
		height: 100%;
		text-align: center;
		border: 1px solid #eceded;
		border-radius: 5px;
		display: table;
		position: relative;
		padding: 30px;
		.ai-upload-con{
			display: table-cell;
			vertical-align: middle;
			width: 100%;
			height: 100%;
		}
		.ai-upload-loading{
			position: absolute;
			position: absolute;
			left: 50%;
			margin-left: -58px;
			top: 50%;
			margin-top: -15px;
		}
	}
	.ai-upload-preview{
		width: 100%;
		height: 100%;
		position: relative;
		.ai-upload-mask{
			display: none;
			width: 100%;
			height: 100%;
			position: absolute;
			top:0;
			left: 0;
			background: rgba(0, 0, 0, 0.21);
			.ai-upload-mask-con{
				display: table;
				width: 100%;
				height: 100%;
				.ai-upload-mask-icon{
					display: table-cell;
					vertical-align: middle;
					text-align: center;
				}
			}
		}
		&:hover{
			.ai-upload-mask{
				display: block;
			}
		}
		&.disabled:hover{
			.ai-upload-mask{
				display: none;
			}
		}
	}
</style>
<script>
import aiIcons from '../ai-icons/index.vue'
import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue'
	export default {
        components:{ aiIcons,uniLoadMore},
        props: {
			// 图片地址
			src:{
				type:String,
				default:''
			},
			//是否禁用
			disabled:{
				type:Boolean,
				default:false
			},
			//头信息
			header:{
				type:Object,
				default:()=>{},
			},
			//图标的颜色
			iconColor:{
				type:String,
				default:"#FFDD00"
			},
			//图标大小
			iconSize:{
				type:[Number, String],
				default:36
			},
			//自动上传
			autoUpload:{
				type:Boolean,
				default:true,
			},
			//上传地址
			action:{
				type:String,
				default:'',
			},
			//上传的附加参数
			data:{
				type:Object,
				default:()=>{},
			},
			//上传文件字段名
			name:{
				type:String,
				default:'file'
			}
		},
		created(){
			
		},
		mounted(){
			
		},
		data() {
            return {
				imgUrl:[],
				showLoading:false,
				status: 'loading',
				contentText: {
					contentrefresh: '图片上传中...',
				}
            }
        },
		methods:{
			remove:function(index){
				this.imgUrl.splice(index,1);
			},
			selectImg : function() {
				if(!this.disabled){
					let _this=this;
					uni.chooseImage({
						count:1,
						success:function(res){
							console.log(res)
							_this.imgUrl.push(res.tempFilePaths[0]);
							if(_this.autoUpload){
								_this.submit(res.tempFilePaths[0]);
							}
						},
					})
				}
			},
			submit:function(imgUrl){
				let _this=this;
				this.showLoading=true;
				uni.uploadFile({
					url: _this.action, 
					filePath: imgUrl,
					header:_this.header,
					name: _this.name,
					formData: _this.data,
					success: (uploadFileRes) => {
						this.showLoading=false;
						this.$emit('success', uploadFileRes.data);
					},
					fail:(uploadFileRes)=>{
						this.imgUrl="";
						this.showLoading=false;
						this.$emit('fail', uploadFileRes.data);
					}
				});
			},
		},
		watch:{
			src:function(){
				this.imgUrl=this.src;
			}
		}
	}
</script>

