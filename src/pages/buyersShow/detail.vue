<template>
    <div class="content bgfff">
        <view class="show-top flex">
            <view>
                <image src="/static/images/pimg.png" style="width:33px;height:33px;border-radius:50%;margin-right:3px;" mode="aspectFill"></image>素云墨彩素云墨彩
            </view>
            <view class="back" @tap="backTo()">
                返回
            </view>
        </view>
        <view class="info">
            创建于2019-10-10
            <image src="/static/icons/yan.png" style="width:13.5px;height:10px;margin-left:15px;margin-right:3px" mode="widthFix"></image>
            <text>234</text>
        </view>
        <view class="show-content">
            这次旅游体验真心棒棒~一直向往着如画的山水桂林，这次和小姐妹终于get了桂林美景打卡新成就 客服姐姐很可爱，不厌其烦的回答了我好多稀奇古怪的问题 来桂林还特意见了她一面哈哈哈 还带我们参观了公司 很正规很专业的团队！ 果然是13年的纯玩品牌啦，无论从住宿的安排还是从景点、司机都是杠杠的服务~炒鸡棒 总而言之，很值得这个价！
        </view>
        <template v-for="item in 4">
            <view class="show-img" :key="item">
                <image src="/static/images/show.png" style="width:100%;" mode="widthFix"></image>
            </view>
        </template>
        <view class="bg10"></view>
        <view class="discuss">
            <view class="discuss-title">
                <view class="discuss-title-con">
                    <image src="/static/icons/discuss-blue.png" class="img" mode="widthFix"></image>全部评论
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
                                    <text>2小时前</text><text class="bcolor ml10">删除</text>
                                </view>
                            </view>
                        </view>
                        <view class="discuss-con-top-zan">
                            <image :src="'/static/icons/zan-'+getTheZan(false)+'.png'" class="img" mode="widthFix"></image>
                            <text>赞</text>
                        </view>
                    </view>
                    <view class="discuss-con-info">
                        <view class="disucss-con-info-main">
                            还能看到东西巷全景～特别棒棒 司导一路上特别照顾我们母女，介绍桂林风土人情，妈妈说以后还要带着她的闺蜜团来报这家哈哈！！
                        </view>
                        <view class="disucss-con-info-more">
                            <view class="discuss-con-info-morebox">
                                <text class="bcolor">airubby</text>回复<text class="bcolor">稻草：</text>司导一路上特别照顾我们母女，介绍桂林风土人情，妈妈说以后还要带着她的闺蜜
                            </view>
                            <view class="discuss-con-info-morebox">
                                <text class="bcolor">airubby</text>回复<text class="bcolor">稻草：</text>司导一路上特别照顾我们母女，介绍桂林风土人情，妈妈说以后还要带着她的闺蜜
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="bg10" style="height:15px;"></view>
        <view class="bottom-nav-fixed"></view>
        <view class="bottom-nav">
            <navigator class="bottom-nav-input" :url="'/pages/buyersShow/discuss?id='+ encodeURIComponent(JSON.stringify('aa'))">
                <image src="/static/icons/bi.png" style="width:16px;height:16px;margin:0 10px;" mode="widthFix"></image>来说点什么
            </navigator>
            <navigator class="bottom-nav-img-box" :url="'/pages/buyersShow/discuss?id='+ encodeURIComponent(JSON.stringify('aa'))">
                <view>
                    <image src="/static/icons/discuss-orange.png" style="width:24px;height:24px" mode="widthFix"></image>
                </view>
                <view class="ocolor">{{bottomNav.pinlun}}</view>
            </navigator>
            <view class="bottom-nav-img-box">
                <view>
                    <image :src="'/static/icons/store-'+getScStyle+'.png'" style="width:24px;height:24px" mode="widthFix"></image>
                </view>
                <view :class="{'ocolor':bottomNav.scflag}">{{bottomNav.shoucang}}</view>
            </view>
            <view class="bottom-nav-img-box">
                <view>
                    <image :src="'/static/icons/zan-'+getZanStyle+'.png'" style="width:24px;height:24px" mode="widthFix"></image>
                </view>
                <view :class="{'ocolor':bottomNav.zanflag}">{{bottomNav.zan}}</view>
            </view>
        </view>
        <view class="line-box">
            <navigator class="line-box-info" :class="{'line-box-noinfo':!showLine}" :url="'/pages/content/index?id='+ encodeURIComponent(JSON.stringify('item.id'))">
                <view class="line-box-info-img">
                    <image src="/static/images/pimg.png" style="width:50px;height:50px" mode="aspectFill"></image>
                </view>
                <view class="line-box-infobox">
                    <view class="line-box-info-title">国庆亲子游一家一团桂林包车四日纯玩广西旅游龙脊漓江阳朔4天3晚</view>
                    <view class="ocolor">￥24443.00</view>
                </view>
            </navigator>
            <view class="line-box-img" @tap="showLineFn">
                <image src="/static/icons/cart-orange.png" style="width:50px;height:50px" mode="widthFix"></image>
            </view>
        </view>
    </div>
</template>

<script>
export default {
    components: {},
    onShow() {
        this.showLine=true;
    },
    onPageScroll(obj){
        if(this.showLine){
            this.showLine=false; //滚动隐藏线路
        }
    },
    computed:{
        getZanStyle:function(){
            return this.bottomNav.zanflag?'orange':'black';
        },
        getScStyle:function(){
            return this.bottomNav.scflag?'orange':'black';
        }
    },
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            showLine:true,
            bottomNav:{
                pinlun:"3", //评论
                shoucang:"收藏",
                zan:"2",  //点赞
                scflag:false,
                zanflag:true,
            }
        }
    },
	methods: {
        backTo:function(){
            uni.navigateBack();
        },
        showLineFn:function(){
            this.showLine=!this.showLine;
        },
        getTheZan: function (value) {
            return value?'orange':'gray'
        }
	},
    watch: {
        
    },
}
</script>
<style lang="less" scoped>
    .content{
        color: #333;
    }
    .show-top{
        text-decoration: none;
        padding: 8px 10px;
        line-height: 34px;
        border-bottom: 1px solid #eee;
    }
    .info{
        color: #999;
        font-size: 12px;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
    }
    .show-content{
        font-size: 16px;
        line-height: 28px;
        padding: 10px;
        margin-bottom: 10px;
    }
    .show-img{
        margin-bottom: 16px;
    }
    .bottom-nav-input{
        background: #F4F4F4;
        border-radius: 3px;
        flex: 1 1 0%;
        display: flex;
        margin-left: 12px;
        height: 32px;
        color: #999;
        align-items: center;
    }
    .line-box{
        width: 50px;
        height: 50px;
        position: fixed;
        z-index: 9999;
        bottom: 90px;
        right: 10px;
        .line-box-info{
            width: 190px;
            height: 77px;
            background: url("~@/static/icons/cart-product-bg.png") no-repeat;
            background-size: contain;
            position: absolute;
            bottom: 50px;
            right: -5px;
            display: flex;
            padding: 10px 0 0 10px;
            font-size: 12px;
            opacity: 1;
            transform: scale(1);
            transform-origin: 84% bottom;
            transition: All 0.4s ease-in-out;
            .line-box-info-img{
                width: 50px;
                height: 50px;
                margin-right: 5px;
                opacity: 1;
            }
            .line-box-infobox{
                width: calc(100% - 65px);
                height: 50px;
                .line-box-info-title{
                    flex-direction: column;
                    align-content: flex-start;
                    flex-shrink: 0;
                    font-size: 12px;
                    height: 28px;
                    line-height: 14px;
                    overflow: hidden;
                    color: #333;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    margin: 2px 0 5px 0;
                }
            }
        }
        .line-box-img{
            opacity: 1;
        }
        .line-box-noinfo{
            opacity: 0;
            transform: scale(0);
        }
        .line-box-noinfo+.line-box-img{
            opacity: 0.8;
        }
    }
    

</style>
