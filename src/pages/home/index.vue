<template>
    <view>
        <view class="page-section-spacing">
            <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
                <swiper-item>
                    <image src="/static/images/banner.png" style="width:100%;height:300px;" mode="widthFix"></image>
                </swiper-item>
                <swiper-item>
                    <image src="/static/images/banner.png" style="width:100%;height:300px;" mode="widthFix"></image>
                </swiper-item>
                <swiper-item>
                    <image src="/static/images/banner.png" style="width:100%;height:300px;" mode="widthFix"></image>
                </swiper-item>
            </swiper>
        </view>
        <view class="destination">
            <view class="index-title">热门目的地
                <text class="ml15">More<image src="/static/icons/right.png" style="width:7px;height:15px;margin-left:3px;" mode="widthFix"></image></text>
            </view>
            <view class="destination-con">
                <navigator class="nav-list" url="/pages/typeProduct/index">北疆</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">喀纳斯</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">南疆</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">伊犁</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">天池</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">禾木</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">北疆</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">喀纳斯</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">南疆</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">伊犁</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">天池</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">禾木</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">北疆</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">喀纳斯</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">南疆</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">伊犁</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">天池</navigator>
                <navigator class="nav-list" url="/pages/typeProduct/index">禾木</navigator>
            </view>
        </view>
        <view>
            <view class="index-title">AR产品 4S体验</view>
            <view class="index-ars">
                <view class="index-arscon">
                    <image src="/static/images/pimg.png" style="width:100%;height:100%;" mode="widthFix"></image>
                    <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                    <view class="nowprice">
                        <view>￥<text class="number">152.00</text></view>
                    </view>
                    <view class="info flex">
                        <view class="oldprice">182.99</view>
                        <view>累计售出<text>24</text>件</view>
                    </view>
                    <view class="btn">
                        立即购买
                    </view>
                </view>
                <view class="index-arscon">
                    <image src="/static/images/pimg.png" style="width:100%;height:100%;" mode="widthFix"></image>
                    <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                    <view class="nowprice">
                        <view>￥<text class="number">152.00</text></view>
                    </view>
                    <view class="info flex">
                        <view class="oldprice">182.99</view>
                        <view>累计售出<text>24</text>件</view>
                    </view>
                    <view class="btn">
                        立即购买
                    </view>
                </view>
                <view class="index-arscon">
                    <image src="/static/images/pimg.png" style="width:100%;height:100%;" mode="widthFix"></image>
                    <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                    <view class="nowprice">
                        <view>￥<text class="number">152.00</text></view>
                    </view>
                    <view class="info flex">
                        <view class="oldprice">182.99</view>
                        <view>累计售出<text>24</text>件</view>
                    </view>
                    <view class="btn">
                        立即购买
                    </view>
                </view>
                <view class="index-arscon">
                    <image src="/static/images/pimg.png" style="width:100%;height:100%;" mode="widthFix"></image>
                    <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                    <view class="nowprice">
                        <view>￥<text class="number">152.00</text></view>
                    </view>
                    <view class="info flex">
                        <view class="oldprice">182.99</view>
                        <view>累计售出<text>24</text>件</view>
                    </view>
                    <view class="btn">
                        立即购买
                    </view>
                </view>
            </view>
        </view>
        <view>
            <view class="rank flex">
                <text>排行榜</text>
                <view class="rank-title">
                    <view v-for="(tab,index) in tabBars" :key="'tab'+index" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
                    :id="'tab'+index" :data-current="index" @tap="tapTab">
                    {{tab.name}}
                    </view>
                </view>
            </view>
            <swiper :current="tabIndex" style="height:160px;" :duration="300" @change="changeTab">
                <swiper-item class="rank-con">
                    <view class="rank-con-box">
                        <view class="rank-img">
                            <image src="/static/icons/rank-one.png" class="rank-icon" mode="widthFix"></image>
                            <image src="/static/images/pimg.png" class="index-con-img" mode="scaleToFill"></image>
                        </view>
                        <view class="info">
                            <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                            <view class="number"><text>24</text>人付款</view>
                        </view>
                    </view>
                    <view class="rank-con-box">
                        <view class="rank-img">
                            <image src="/static/icons/rank-two.png" class="rank-icon" mode="widthFix"></image>
                            <image src="/static/images/pimg.png" class="index-con-img" mode="scaleToFill"></image>
                        </view>
                        <view class="info">
                            <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                            <view class="number"><text>24</text>人付款</view>
                        </view>
                    </view>
                    <view class="rank-con-box">
                        <view class="rank-img">
                            <image src="/static/icons/rank-three.png" class="rank-icon" mode="widthFix"></image>
                            <image src="/static/images/pimg.png" class="index-con-img" mode="scaleToFill"></image>
                        </view>
                        <view class="info">
                            <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                            <view class="number"><text>24</text>人付款</view>
                        </view>
                    </view>
                </swiper-item>
                <swiper-item class="rank-con">
                    <view class="rank-con-box">
                        <view class="rank-img">
                            <image src="/static/icons/rank-one.png" class="rank-icon" mode="widthFix"></image>
                            <image src="/static/images/banner.png" class="index-con-img" mode="scaleToFill"></image>
                        </view>
                        <view class="info">
                            <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                            <view class="number"><text>24</text>人付款</view>
                        </view>
                    </view>
                    <view class="rank-con-box">
                        <view class="rank-img">
                            <image src="/static/icons/rank-two.png" class="rank-icon" mode="widthFix"></image>
                            <image src="/static/images/banner.png" class="index-con-img" mode="scaleToFill"></image>
                        </view>
                        <view class="info">
                            <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                            <view class="number"><text>24</text>人付款</view>
                        </view>
                    </view>
                    <view class="rank-con-box">
                        <view class="rank-img">
                            <image src="/static/icons/rank-three.png" class="rank-icon" mode="widthFix"></image>
                            <image src="/static/images/banner.png" class="index-con-img" mode="scaleToFill"></image>
                        </view>
                        <view class="info">
                            <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                            <view class="number"><text>24</text>人付款</view>
                        </view>
                    </view>
                </swiper-item>
            </swiper>
        </view>
        <view>
            <view class="index-title index-title1">猜您喜欢</view>
            <view class="index-heart">
                <view class="index-arscon">
                    <image src="/static/images/pimg.png" class="index-con-img" mode="widthFix"></image>
                    <view class="heart-con">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="nowprice">
                            <view>￥<text class="number">152.00</text></view>
                        </view>
                        <view class="info flex">
                            <view class="oldprice">182.99</view>
                            <view>累计售出<text>24</text>件</view>
                        </view>
                    </view>
                </view>
                <view class="index-arscon">
                    <image src="/static/images/pimg.png" class="index-con-img" mode="widthFix"></image>
                    <view class="heart-con">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="nowprice">
                            <view>￥<text class="number">152.00</text></view>
                        </view>
                        <view class="info flex">
                            <view class="oldprice">182.99</view>
                            <view>累计售出<text>24</text>件</view>
                        </view>
                    </view>
                </view>
                <view class="index-arscon">
                    <image src="/static/images/pimg.png" class="index-con-img" mode="widthFix"></image>
                    <view class="heart-con">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="nowprice">
                            <view>￥<text class="number">152.00</text></view>
                        </view>
                        <view class="info flex">
                            <view class="oldprice">182.99</view>
                            <view>累计售出<text>24</text>件</view>
                        </view>
                    </view>
                </view>
                <view class="index-arscon">
                    <image src="/static/images/pimg.png" class="index-con-img" mode="widthFix"></image>
                    <view class="heart-con">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="nowprice">
                            <view>￥<text class="number">152.00</text></view>
                        </view>
                        <view class="info flex">
                            <view class="oldprice">182.99</view>
                            <view>累计售出<text>24</text>件</view>
                        </view>
                    </view>
                </view>
            </view>
            <navigator class="toallProduct" url="/pages/allProduct/index" open-type="switchTab">
                查看全部宝贝
            </navigator>
        </view>
        <view>
            <view class="index-title index-title1">逛逛更多宝贝</view>
            <view class="index-heart">
                <view class="index-arscon">
                    <image src="/static/images/pimg.png" class="index-con-img" mode="widthFix"></image>
                    <view class="heart-con">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="nowprice">
                            <view>￥<text class="number">152.00</text></view>
                        </view>
                        <view class="info flex">
                            <view class="oldprice">182.99</view>
                            <view>累计售出<text>24</text>件</view>
                        </view>
                    </view>
                </view>
                <view class="index-arscon">
                    <image src="/static/images/pimg.png" class="index-con-img" mode="widthFix"></image>
                    <view class="heart-con">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="nowprice">
                            <view>￥<text class="number">152.00</text></view>
                        </view>
                        <view class="info flex">
                            <view class="oldprice">182.99</view>
                            <view>累计售出<text>24</text>件</view>
                        </view>
                    </view>
                </view>
                <view class="index-arscon">
                    <image src="/static/images/pimg.png" class="index-con-img" mode="widthFix"></image>
                    <view class="heart-con">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="nowprice">
                            <view>￥<text class="number">152.00</text></view>
                        </view>
                        <view class="info flex">
                            <view class="oldprice">182.99</view>
                            <view>累计售出<text>24</text>件</view>
                        </view>
                    </view>
                </view>
                <view class="index-arscon">
                    <image src="/static/images/pimg.png" class="index-con-img" mode="widthFix"></image>
                    <view class="heart-con">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="nowprice">
                            <view>￥<text class="number">152.00</text></view>
                        </view>
                        <view class="info flex">
                            <view class="oldprice">182.99</view>
                            <view>累计售出<text>24</text>件</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import top from '@/pages/public/top.vue'
export default {
    components: {top},
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            tabIndex:0,
            tabBars: [{
                name: '销量排行',
            }, {
                name: '收藏排行'
            }],

        }
    },
	methods: {
        async changeTab(e) {
            let index = e.target.current;
            this.tabIndex = index; //一旦访问data就会出问题
        },
        async tapTab(e) { //点击tab-bar
            if (this.tabIndex === e.target.dataset.current) {
                return false;
            } else {
                this.tabIndex = e.target.dataset.current
            }
        },
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .page-section-spacing{
        width: 100%;
        height: auto;
        overflow: hidden;
    }
    .index-title{
        font-size: 16px;
        text-align: center;
        margin: 22px 0 10px 0;
        color: #333;
    }
    .index-title1{
        text-align: left;
        padding-left: 10px;
    }
    .destination-con{
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;
        background: #fff;
        .nav-list{
            margin: 5px 10px;
        }
    }
    .index-ars{
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        padding: 10px 4px 0;
        .index-arscon{
            width: calc(50% - 16px);
            margin: 0 8px 10px;
            .title{
                position: relative;
                flex-direction: column;
                align-content: flex-start;
                flex-shrink: 0;
                font-size: 14px;
                height:36px;
                line-height: 18px;
                overflow: hidden;
                color: rgb(0, 0, 0);
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                margin: 5px 0;
            }
            .nowprice{
                font-size: 12px;
                color: #FF5000;
                .number{
                    font-size: 16px;
                }
            }
            .info{
                font-size: 12px;
                .oldprice{
                    text-decoration: line-through;
                    color: #999; 
                }
            }
            .btn{
                width: 100%;
                height: 28px;
                line-height: 28px;
                text-align: center;
                color: #fff;
                background: #FF5000;
                font-size: 16px;
                margin: 10px 0;
            }
        }
    }
    .rank{
        font-size: 16px;
        padding: 0 10px;
        margin: 22px 0 10px 0;
        color: #333;
        .rank-title{
            display: flex;
            .swiper-tab-list{
                margin-left: 10px;
                padding-bottom: 5px;
                color: #999;
                &.active{
                    color: #333;
                    border-bottom: 2px solid #FF5000;
                }
            }
        }
    }
    .rank-con{
        display: flex;
        width: 100%;
        padding: 0 4px;
        .rank-img{
            width: 100%;
            height: 100px;
            position: relative;
            .rank-icon{
                position: absolute;
                left: 50%;
                margin-left: -11px;
                width: 22px;
                bottom: -6px;
                z-index: 999;
            }
        }
        .rank-con-box{
            width: 33.33%;
            padding: 0 4px;
            height: auto;
            .info{
                background: #fff;
                overflow: hidden;
                padding: 2px 2px 10px;
                border-radius: 0 0 5px 5px;
            }
            .title{
                height: 30px;
                line-height: 32px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .number{
                color: #999;
                font-size: 12px;
            }
        }
    }
    .index-con-img{
        width: 100%;
        height: 100px;
        border-radius: 5px 5px 0 0;
    }
    .index-heart{
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px 0;
        .heart-con{
            background: #fff;
            padding: 10px 5px;
            border-radius: 0 0 5px 5px;
        }
        .index-arscon{
            width: calc(50% - 16px);
            margin: 0 8px 10px;
            .title{
                position: relative;
                flex-direction: column;
                align-content: flex-start;
                flex-shrink: 0;
                font-size: 14px;
                height:36px;
                line-height: 18px;
                overflow: hidden;
                color: rgb(0, 0, 0);
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                margin-bottom: 5px;
            }
            .nowprice{
                font-size: 12px;
                color: #FF5000;
                .number{
                    font-size: 16px;
                }
            }
            .info{
                font-size: 12px;
                .oldprice{
                    text-decoration: line-through;
                    color: #999; 
                }
            }
        }
    }
    .toallProduct{
        background: #fff;
        color: #333;
        border-radius: 16px;
        width: calc(100% - 20px);
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        text-align: center;
        font-size: 16px;
    }
</style>
