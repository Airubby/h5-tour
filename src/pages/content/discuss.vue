<template>
    <view class="content bgfff">
        <view class="discuss-top">
            <view class="num">
                <view class="numinfo">5</view>
                <view>超出预期</view>
            </view>
            <view class="info">
                <view class="info-box">
                    <view class="flex">
                        <view>导游服务</view><view class="ocolor">——</view><view class="color999">5</view>
                    </view>
                    <view class="flex">
                        <view>行程安排</view><view class="ocolor">——</view><view class="color999">5</view>
                    </view>
                </view>
                <view class="info-box">
                    <view class="flex">
                        <view>餐饮住宿</view><view class="ocolor">——</view><view class="color999">5</view>
                    </view>
                    <view class="flex">
                        <view>旅游交通</view><view class="ocolor">——</view><view class="color999">5</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="pd12">
            <view class="discuss-sort" :class="{'discuss-sort-active':discussInfo!=='展开'}">
                <view class="discuss-type">
                    <view class="discuss-type-box discuss-main">全部</view>
                    <view class="discuss-type-box discuss-main">最新(46)</view>
                    <view class="discuss-type-box discuss-main">追评(46)</view>
                    <view class="discuss-type-box discuss-main">有图(46)</view>
                    <view class="discuss-type-box">风格不错(46)</view>
                    <view class="discuss-type-box">导游很热抢(36)</view>
                    <view class="discuss-type-box">服务很棒(6)</view>
                    <view class="discuss-type-box">住宿环境很好(34)</view>
                    <view class="discuss-type-box">行程安排靠谱(52)</view>
                </view>
                <view class="discuss-btn" @tap="changeDiscuss">
                    <text>{{discussInfo}}</text>
                    <image src="/static/icons/down.png" class="img" mode="widthFix" v-if="discussInfo=='展开'"></image>
                    <image src="/static/icons/up.png" class="img" mode="widthFix" v-else></image>
                </view>
            </view>
        </view>
        <view class="pd12">
            <view class="discuss-user">
                <image src="/static/images/getAvatar.jpg" class="img" mode="scaleToFill"></image><text>xiao_dai</text>
            </view>
            <view class="color999 font-size12 mb10">
                2020-01-24 08:02:39 套餐类型:A冰雪奇缘4人 |单人价;出游人群:成人
            </view>
            <view class="mb10">
                非常满意的一次旅行体验，让我们又一次感受到彩云之南的魅力。希望下次还来云朵游玩，我会回来的。。。
            </view>
            <view class="discuss-img">
                <view class="three-img" @tap="goImgList(0)">
                    <image src="/static/images/show.png" class="img" mode="scaleToFill"></image>
                </view>
                <view class="three-img" @tap="goImgList(1)">
                    <image src="/static/images/pimg.png" class="img" mode="scaleToFill"></image>
                </view>
                <view class="three-img" @tap="goImgList(2)">
                    <image src="/static/images/index-banner.png" class="img" mode="scaleToFill"></image>
                </view>
            </view>
        </view>
        <view class="bg10"></view>
        <view class="pd12">
            <view class="discuss-user">
                <image src="/static/images/getAvatar.jpg" class="img" mode="scaleToFill"></image><text>xiao_dai</text>
            </view>
            <view class="color999 font-size12 mb10">
                2020-01-24 08:02:39 套餐类型:A冰雪奇缘4人 |单人价;出游人群:成人
            </view>
            <view class="mb10">
                非常满意的一次旅行体验，让我们又一次感受到彩云之南的魅力。希望下次还来云朵游玩，我会回来的。。。
            </view>
            <view class="discuss-img">
                <view class="three-img" @tap="goImgList(0)">
                    <image src="/static/images/show.png" class="img" mode="scaleToFill"></image>
                </view>
                <view class="three-img" @tap="goImgList(1)">
                    <image src="/static/images/pimg.png" class="img" mode="scaleToFill"></image>
                </view>
                <view class="three-img" @tap="goImgList(2)">
                    <image src="/static/images/index-banner.png" class="img" mode="scaleToFill"></image>
                </view>
            </view>
            <view class="more-discuss">用户39天后追评</view>
            <view class="mb10">
                非常满意的一次旅行体验，让我们又一次感受到彩云之南的魅力。希望下次还来云朵游玩，我会回来的。。。
            </view>
        </view>
        <view class="bg10"></view>
        <view class="pd12">
            <view class="discuss-user">
                <image src="/static/images/getAvatar.jpg" class="img" mode="scaleToFill"></image><text>xiao_dai</text>
            </view>
            <view class="color999 font-size12 mb10">
                2020-01-24 08:02:39 套餐类型:A冰雪奇缘4人 |单人价;出游人群:成人
            </view>
            <view class="mb10">
                非常满意的一次旅行体验，让我们又一次感受到彩云之南的魅力。希望下次还来云朵游玩，我会回来的。。。
            </view>
            <view class="discuss-img">
                <view class="three-img" @tap="goImgList(0)">
                    <image src="/static/images/show.png" class="img" mode="scaleToFill"></image>
                </view>
                <view class="three-img" @tap="goImgList(1)">
                    <image src="/static/images/pimg.png" class="img" mode="scaleToFill"></image>
                </view>
                <view class="three-img" @tap="goImgList(2)">
                    <image src="/static/images/index-banner.png" class="img" mode="scaleToFill"></image>
                </view>
            </view>
        </view>
        <view class="bottom-nav-fixed"></view>
        <view class="bottom-nav">
            <view class="bottom-nav-img-box">
                <view>
                    <image src="/static/icons/notesContact-orange.png" style="width:24px;height:24px" mode="widthFix"></image>
                </view>
                <view>客服</view>
            </view>
            <navigator url="/pages/index" class="bottom-nav-img-box">
                <view>
                    <image src="/static/icons/shop.png" style="width:24px;height:24px" mode="widthFix"></image>
                </view>
                <view>店铺</view>
            </navigator>
            <view class="bottom-nav-img-box">
                <view>
                    <image :src="'/static/icons/store-'+getScStyle+'.png'" style="width:24px;height:24px" mode="widthFix"></image>
                </view>
                <view :class="{'ocolor':bottomInfo.scflag}">收藏</view>
            </view>
            <view class="bottom-nav-auto">
                <navigator url="/pages/content/combo" class="bottom-nav-btn">加入购物车</navigator>
                <navigator url="/pages/content/combo" class="bottom-nav-btn">立即购买</navigator>
            </view>
        </view>
        <ai-img-preview :picList="picList" :current="current" ref="imgPreview"></ai-img-preview>
    </view>
</template>

<script>
import aiImgPreview from "@/components/ai-ui/ai-img-preview/index.vue";
export default {
    components: {aiImgPreview},
    created() {
        
    },
    onPageScroll: function(e) {
        
    },
    computed:{
        getScStyle:function(){
            return this.bottomInfo.scflag?'orange':'black';
        }
    },
    mounted() {
        
    },
    data(){
        return{
            discussInfo:"展开",
            picList : [
				{
					picPath: '/static/images/show.png'
				},
				{
					picPath: '/static/images/pimg.png'
                },
                {
					picPath: '/static/images/index-banner.png'
				},
            ],
            current:0,
            bottomInfo:{
                scflag:false,
            }
        }
    },
	methods: {
        changeDiscuss:function(){
            if(this.discussInfo==="展开"){
                this.discussInfo="收起";
            }else{
                this.discussInfo="展开";
            }
        },
        goImgList(i) {
            this.current=i;
            this.$refs['imgPreview'].open();
		}
        
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .discuss-top{
        display: flex;
        height: 60px;
        font-size: 12px;
        border-bottom: 1px solid #F2F3F4;
        .num{
            width: 100px;
            height: 100%;
            text-align: center;
            color: #e90;
            border-right: 1px solid #F2F3F4;
            .numinfo{
                margin: 10px 0 2px 0;
                font-weight: bold;
                font-size: 16px;
            }
        }
        .info{
            display: flex;
            justify-content: space-around;
            width: calc(100% - 100px);
            padding: 0 10px;
            .info-box{
                width:50%;
                padding: 0 10px;
                .flex{
                    padding-top: 8px;
                }
            }
            .ocolor{
                color: #e90;
                font-weight: bold;
            }
        }
    }
    .discuss-sort{
        border-bottom:1px solid #F2F3F4;
        padding-bottom: 10px;
        .discuss-type{
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 5px;
            max-height: 32px;
            overflow: hidden;
            .discuss-type-box{
                padding: 3px 10px;
                margin: 0 5px 10px 5px;
                border-radius: 20px;
                background: #FFEFB5;
            }
            .discuss-main{
                background: #FFC900;
            }
        }
        .discuss-btn{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999;
            .img{
                width: 10px;
                height: 6px;
                margin-left: 3px; 
            }
        }
        &.discuss-sort-active{
            .discuss-type{
                max-height:initial;
            }
        }
    }
    .discuss-user{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .img{
            width: 32px;
            height: 32px;
            margin-right: 5px;
            border-radius: 50%;
        }
    }
    .discuss-img{
        display: flex;
        .three-img{
            width: 33.33%;
            height: 87px;
            padding: 0 3px;
            border-radius: 3px;
        }
    }
    .more-discuss{
        margin: 15px 0 10px 0;
        color: #e90;
        font-size:12px;
    }
    
</style>
