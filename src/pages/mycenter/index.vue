<template>
    <view class="content">
        <!-- <view class="top">
            <view class="flex">
                <view>
                    <image src="/static/images/show.png" style="width:50px;height:50px;border-radius:50%;" mode="scaleToFill"></image>
                    <text class="font-size16">1522898989</text>
                </view>
                <view>
                    <image src="/static/icons/set.png" style="width:20px;height:20px;" mode="widthFix"></image>
                </view>
            </view>
        </view> -->
        <view class="pd12">
            <view class="box">
                <view class="public-title">
                    <view class="show-title">我的订单</view>
                    <navigator :url="'/pages/mycenter/order?id='+ encodeURIComponent(JSON.stringify(0))" class="show-all">查看全部订单<image src="/static/icons/right.png" class="img" mode="widthFix"></image></navigator>
                </view>
                <view class="box-flex">
                    <navigator class="box-con" :url="'/pages/mycenter/order?id='+ encodeURIComponent(JSON.stringify(1))">
                        <view><image src="/static/icons/center-dfk.png" class="img" mode="widthFix"></image></view>
                        <view>待付款</view>
                    </navigator>
                    <navigator class="box-con" :url="'/pages/mycenter/order?id='+ encodeURIComponent(JSON.stringify(2))">
                        <view><image src="/static/icons/center-dfh.png" class="img" mode="widthFix"></image></view>
                        <view>待发货</view>
                    </navigator>
                    <navigator class="box-con" :url="'/pages/mycenter/order?id='+ encodeURIComponent(JSON.stringify(3))">
                        <view><image src="/static/icons/center-dsh.png" class="img" mode="widthFix"></image></view>
                        <view>待收货</view>
                    </navigator>
                    <navigator class="box-con" :url="'/pages/mycenter/order?id='+ encodeURIComponent(JSON.stringify(4))">
                        <view class="box-relative">
                            <image src="/static/icons/center-pj.png" class="img" mode="widthFix"></image>
                            <view class="number">12</view>
                        </view>
                        <view>评价</view>
                    </navigator>
                    <navigator class="box-con">
                        <view><image src="/static/icons/center-sh.png" class="img" mode="widthFix"></image></view>
                        <view>退款/售后</view>
                    </navigator>
                </view>
            </view>
        </view>
        <view class="pd12">
            <view class="box">
                <view class="public-title">
                    <view class="show-title">我的工具</view>
                </view>
                <view class="box-flex">
                    <navigator url="/pages/mycenter/favorite" class="box-con">
                        <view><image src="/static/icons/center-scj.png" class="img" mode="widthFix"></image></view>
                        <view>收藏夹</view>
                    </navigator>
                    <navigator url="/pages/mycenter/cart" class="box-con">
                        <view><image src="/static/icons/center-gwc.png" class="img" mode="widthFix"></image></view>
                        <view>购物车</view>
                    </navigator>
                    <navigator url="/pages/mycenter/evaluate" class="box-con">
                        <view><image src="/static/icons/center-pl.png" class="img" mode="widthFix"></image></view>
                        <view>我的评价</view>
                    </navigator>
                    <navigator url="/pages/login/index" class="box-con">
                        <view><image src="/static/icons/center-kfxm.png" class="img" mode="widthFix"></image></view>
                        <view>客服小蜜</view>
                    </navigator>
                    <navigator url="/pages/mycenter/account" class="box-con">
                        <view><image src="/static/icons/center-set.png" class="img" mode="widthFix"></image></view>
                        <view>账号设置</view>
                    </navigator>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    components: {},
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            
        }
    },
	methods: {
        
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .top{
        background: #FE6C10;
        padding: 30px 15px;
        color: #fff;
    }
    .top-bottom{
        display: flex;
        margin-top: 10px;
        .top-bottom-con{
            text-align: center;
            margin-right: 15px; 
            margin-right: 30px;
            .txt{
                font-size: 14px;
                margin-top: 5px;
            }
        }
    }
    .box{
        background: #fff;
        border-radius: 10px;
    }
    .public-title{
        display: flex;
        color: #333;
        justify-content: space-between;
        border-bottom: 1px solid #F1F1EB;
        padding-bottom: 15px;
        height: 42px;
        line-height: 42px;
        padding: 0 10px;
        .show-all{
            font-size: 12px;
            display: flex;
            align-items: center;
            .img{
                width:6px;
                height:11px;
                margin-left: 5px;
            }
        }
    }
    .show-title{
        font-weight: bold;
        display: flex;
        flex: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .box-flex{
        display: flex;
        padding: 15px 0 0;
        flex-wrap: wrap;
        .box-con{
            font-size: 12px;
            text-align: center;
            width: 20%;
            margin-bottom: 15px;
            .img{
                width: 30px;
                height: 30px;
                margin-bottom: 5px;
            }
            .box-relative{
                position: relative;
                width: 30px;
                margin: 0 auto;
                .number{
                    position: absolute;
                    top: -5px;
                    right: -8px;
                    border: 1px solid #ff5500;
                    color: #ff5500;
                    border-radius: 50%;
                    background: #fff;
                    padding: 1px 2px;
                    min-width: 18px;
                }
            }
        }
    }
</style>
