<template>
    <view class="content bgfff">
        <nav-bar title="我的评价"></nav-bar>
        <view class="bg10"></view>
        <view class="pd12 flex">
            <view class="publicimg">
                <image src="/static/images/pimg.png" class="img" mode="scaleToFill"></image>
                稻草    
            </view>
            <view class="btn">写评价</view>
        </view>
        <view class="bg10"></view>
        <view class="evaluate-more">
            <view class="evaluate-box">
                <view class="publicimg mb10">
                    <image src="/static/images/pimg.png" class="img" mode="scaleToFill"></image>
                    稻草  
                </view>
                <view class="color999 font-size12">2019-10-11</view>
                <view class="show-con">使挺好的常方便，使用非熟练度附近熟练度附近，了地方了常方便，使用非常方便使用非常方便，使用非常方便。</view>
                <view @click="goImgList" class="show-img">
                    <view v-for="(item,index) in picList" :key="index" class="img-box">
                        <image :src="item.picPath" class="img" mode="scaleToFill"></image>
                    </view>
                </view>
                <view class="show-more-con">
                    <view class="ocolor">用户追评</view>
                    <view class="show-con">使挺好的常方便，使用非熟练度附近熟练度附近，了地方了常方便，使用非常方便使用非常方便，使用非常方便。</view>
                    <view @click="goImgList" class="show-img">
                        <view v-for="(item,index) in picList" :key="index" class="img-box">
                            <image :src="item.picPath" class="img" mode="scaleToFill"></image>
                        </view>
                    </view>
                </view>
                <view class="show-product flex">
                    <image src="/static/images/pimg.png" class="img" mode="scaleToFill"></image>
                    <view class="txt">
                        <view class="txt-con">水力发电了射流风机的塞伦盖蒂胜利股份建国饭店</view>
                        <view>￥1313</view>
                    </view>
                </view>
                <view class="show-bottom flex font-size12 mt10">
                    <view class="flex color999">
                        <!-- <view>浏览4次</view><view class="ml10">评价2次</view> -->
                    </view>
                </view>
            </view>
            <view class="evaluate-box">
                <view class="publicimg mb10">
                    <image src="/static/images/pimg.png" class="img" mode="scaleToFill"></image>
                    稻草  
                </view>
                <view class="color999 font-size12">2019-10-11</view>
                <view class="show-con">使挺好的常方便，使用非熟练度附近熟练度附近，了地方了常方便，使用非常方便使用非常方便，使用非常方便。</view>
                <view @click="goImgList" class="show-img">
                    <view v-for="(item,index) in picList" :key="index" class="img-box">
                        <image :src="item.picPath" class="img" mode="scaleToFill"></image>
                    </view>
                </view>
                <view class="show-product flex">
                    <image src="/static/images/pimg.png" class="img" mode="scaleToFill"></image>
                    <view class="txt">
                        <view class="txt-con">水力发电了射流风机的塞伦盖蒂胜利股份建国饭店</view>
                        <view>￥1313</view>
                    </view>
                </view>
                <view class="show-bottom flex font-size12 mt10">
                    <view class="flex color999">
                        <!-- <view>浏览4次</view><view class="ml10">评价2次</view> -->
                    </view>
                    <navigator class="btn show-btn" :url="'/pages/mycenter/evaluateMore?id='+ encodeURIComponent(JSON.stringify(1))">写追评</navigator>
                </view>
            </view>
        </view>
        <ai-img-preview :picList="picList" ref="imgPreview"></ai-img-preview>
    </view>
</template>

<script>
import aiImgPreview from "@/components/ai-ui/ai-img-preview/index.vue";
export default {
    components: {aiImgPreview},
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            picList:[{
					picPath: '/static/images/hotel1.png'
				},
				{
					picPath: '/static/images/hotel2.png'
                },
                {
					picPath: '/static/images/hotel3.png'
				}]
        }
    },
	methods: {
        goImgList() {
            this.$refs['imgPreview'].open();
		}
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .publicimg{
        .img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
    .btn{
        color: #FF5F22;
        border: 1px solid #FF5F22;
        padding: 0 12px;
        font-size: 12px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        height: 24px;
        cursor: pointer;
    }
    .show-btn{
        height: 20px;
        padding: 0 10px;
    }
    .evaluate-more{
        .show-img{
            display: flex;
            .img-box{
                width: 33.33%;
                height: 100px;
                margin: 0 2px;
                .img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .show-con{
            color: #333;
            margin: 10px 0;
            line-height: 24px;
        }
        .show-product{
            margin-top: 10px;
            .img{
                width: 60px;
                height: 60px;
            }
            .txt{
                width: calc(100% - 65px);
                background: #f7f7f7;
                margin-left: 5px;
                padding: 5px 10px;
                .txt-con{
                    height: 26px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    margin-bottom: 5px;
                }
            }
        }
        .show-more-con{
            border-top: 1px solid #e5e5e5;
            margin-top: 15px;
            padding-top: 10px;
        }
    }
    .evaluate-box{
        padding:12px;
        border-bottom: 10px solid #f5f5f5;
    }
</style>
