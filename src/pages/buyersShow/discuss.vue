<template>
    <view class="content bgfff">
        <view class="discuss">
            <view class="discuss-title">
                <view class="discuss-title-con"><image src="/static/icons/discuss-blue.png" class="img" mode="widthFix"></image>全部评论</view>
                <view class="back" @tap="backTo()">
                    返回
                </view>
            </view>
            <view class="discuss-content">
                <view class="discuss-con-box">
                    <view class="discuss-con-top">
                        <view class="discuss-con-top-info">
                            <view>
                                <image src="/static/images/show.png" class="img" mode="aspectFill"></image>
                            </view>
                            <view>
                                <view class="name">稻草</view>
                                <view class="time">
                                    <text>2小时前</text><text class="ml10">1楼</text>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="discuss-con-info">
                        <view class="discuss-con-info-morebox">
                            <text class="bcolor">airubby</text>回复<text class="bcolor">稻草：</text>司导一路上特别照顾我们母女，介绍桂林风土人情，妈妈说以后还要带着她的闺蜜
                        </view>
                        <view class="disucss-con-info-btn">
                            <view class="discuss-con-info-btnbox">
                                <image src="/static/icons/zan.png" class="img" mode="widthFix"></image><text>2252</text>
                            </view>
                            <navigator class="discuss-con-info-btnbox" :url="'/pages/buyersShow/writeDiscuss?id='+ encodeURIComponent(JSON.stringify('cc'))">
                                <image src="/static/icons/discuss-black.png" class="img" mode="widthFix"></image><text>评论</text>
                            </navigator>
                        </view>
                    </view>
                </view>
                <view class="discuss-con-box">
                    <view class="discuss-con-top">
                        <view class="discuss-con-top-info">
                            <view>
                                <image src="/static/images/show.png" class="img" mode="aspectFill"></image>
                            </view>
                            <view>
                                <view class="name">稻草</view>
                                <view class="time">
                                    <text>2小时前</text><text class="ml10">1楼</text>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="discuss-con-info">
                        <view class="disucss-con-info-main">
                            还能看到东西巷全景～特别棒棒 司导一路上特别照顾我们母女，介绍桂林风土人情，妈妈说以后还要带着她的闺蜜团来报这家哈哈！！
                        </view>
                        <view class="disucss-con-info-btn">
                            <view class="discuss-con-info-btnbox">
                                <image src="/static/icons/zan.png" class="img" mode="widthFix"></image><text>点赞</text>
                            </view>
                            <navigator class="discuss-con-info-btnbox" :url="'/pages/buyersShow/writeDiscuss?id='+ encodeURIComponent(JSON.stringify('cc'))">
                                <image src="/static/icons/discuss-black.png" class="img" mode="widthFix"></image><text>评论</text>
                            </navigator>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="bottom-nav-fixed"></view>
        <view class="bottom-nav">
            <navigator class="bottom-nav-img-box" :url="'/pages/buyersShow/writeDiscuss?id='+ encodeURIComponent(JSON.stringify('cc'))">
                <image src="/static/icons/bi-orange.png" style="width:24px;height:24px;margin-right:10px;" mode="widthFix"></image>我来评论
            </navigator>
        </view>
    </view>
</template>

<script>
export default {
    components: {},
    computed:{
        
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
        backTo:function(){
            uni.navigateBack();
        },
	},
    watch: {
        
    },
}
</script>
<style lang="less" scoped>
   .discuss-con-box{
       border-bottom: 1px solid #e7e7e7;
       margin-bottom: 25px;
       padding-bottom: 25px;
   }
   .disucss-con-info-btn{
       display: flex;
       flex-direction:row-reverse;
       margin-top: 20px;
       .discuss-con-info-btnbox{
           display: flex;
           border: 1px solid #cecece;
           justify-content: center;
           align-items: center;
            border-radius: 20px;
            font-size: 12px;
            height: 20px;
            padding: 0 8px;
            color: #999;
            margin-left: 15px;
           .img{
               width: 12px;
               height: 12px;
               margin-right: 5px;
           }
       }
   }
   .bottom-nav-img-box{
       width: 100%;
       color: #FF5000;
       font-size: 16px;
       display: flex;
        justify-content: center;
        align-items: center;
   }
</style>
