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
            <view class="index-title">热门目的地hghh
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
            <view v-for="(tab,index) in tabBars" :key="'tab'+index" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
            :id="'tab'+index" :data-current="index" @tap="tapTab">
            {{tab.name}}
            </view>
            <swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
                <swiper-item class="swiper-item" v-for="(tab,index) in tabBars" :key="index">
                    啊啊啊
                </swiper-item>
            </swiper>
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
            }]
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
        margin: 15px 0 10px 0;
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
</style>
