<template>
    <view class="content bgfff">
        <ai-textarea style="border:none;" class="mb5" v-model="initParams.content" 
        placeholder="写下你的回答～真实有用的回答更能帮助到提问者，审核通过后将展示给其他小伙伴哦～" 
        placeholderStyle="color:#999;font-size:12px;height:35px;"></ai-textarea>
        <view class="img-box">
            <ai-upload-image :src="imgUrl" :header="header" :action="$ajaxUrl+'/upload?type=manager'" @success="idsuccess" @fail="fail"></ai-upload-image>
        </view>
        <view class="bottom-nav-fixed"></view>
        <view class="btn">
            <view class="btn-con" @tap="selectCity">+添加相关地点</view>
        </view>
        <view class="info">真实详细的回答，可以帮助到更多人哦~</view>
        <view class="bottom-nav">
            <view class="bottom-nav-img-box">
            <navigator class="bottom-nav-img-boxcon" :url="'/pages/faqs/detail?id='+ encodeURIComponent(JSON.stringify('id'))">
                发布
            </navigator>
            </view>
        </view>
        <ai-picker mode="region" :hideArea="true" @confirm="confirm" ref="aiPicker"></ai-picker>
    </view>
</template>

<script>
import aiPicker from '@/components/ai-ui/ai-picker/index.vue'
import aiUploadImage from '@/components/ai-ui/ai-upload-moreimage/index.vue'
export default {
    components: {aiPicker,aiUploadImage},
    onReady: function () {
        
    },
    onLoad() {
		let _this=this;
		uni.getStorage({
			key: 'token',
			success: function (res) {
				console.log(res)
				_this.header['Authorization']='Bearer '+res.data;
			}
		});
	},
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            header:{
				'Authorization':''
            },
            imgUrl:[],
            initParams:{
                content:"",
                city:"",
            }
        }
    },
	methods: {
        selectCity:function(){
			this.$refs["aiPicker"].show();
        },
        confirm:function(info){
			this.initParams.city=info.checkArr[1];
        },
        success:function(uploadFileRes){
			this.loadImg=false;
			let res=JSON.parse(uploadFileRes);
			this.initParams.workFile=res.path;
		},
		fail:function(uploadFileRes){
			uni.showToast({
				icon: 'none',
				title: uploadFileRes.data
			});
		},
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .bottom-nav-fixed{
        width: 100%;
        height: 118px;
    }
    .img-box{
        width: 100%;
        padding: 12px;
    }
    .btn{
        width: 100%;
        height: 30px;
        position: fixed;
        bottom: 88px;
        left: 0;
        border-bottom: 1px solid #eceded;
        padding: 0 10px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        background: #fff;
        .btn-con{
            height: 24px;
            line-height: 24px;
            color: #00a2ff;
            background: #f7f8fa;
            border-radius: 20px;
            padding: 0 8px;
        }
    }
    .info{
        width: 100%;
        font-size: 12px;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        position: fixed;
        bottom: 48px;
        left: 0;
        background: #fff;
    }
    .bottom-nav-img-box{
       width: 100%;
       font-size: 16px;
        height: 34px;
        font-weight: bold;
        .bottom-nav-img-boxcon{
            width: 100%;
            background: #FFDD00;
            color: #000;
            height: 100%;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            border-radius: 20px;
        }
    }
</style>
