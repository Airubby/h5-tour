<template>
    <div class="content">
        <view class="public-top">
            <view class="public-top-con">
                <view class="public-top-info">
                    <view class="pbulic-logo-info">新疆国旅专营店<image src="/static/icons/public-top-right.png" style="width:14px;height:14px;margin-left:5px;" mode="widthFix"></image></view>
                    <view class="public-top-attention">
                        <image src="/static/icons/public-top-xin.png" style="width:18px;height:1px;margin-right:5px;" mode="widthFix"></image>关注
                    </view>
                </view>
                <view class="font-size12">
                    <image src="/static/icons/logo.png" style="width:16px;height:16px;margin-right:5px;" mode="widthFix"></image>粉丝数<text>234325</text>
                </view>
                <view class="public-top-nav">
                    <navigator class="public-top-nav-search public-top-full-search" url="/pages/search/index">
                        <view class="search">
                            <image src="/static/icons/search.png" style="width:18px;height:18px;margin-right:5px;" mode="widthFix"></image>
                            搜索店铺内宝贝
                        </view>
                    </navigator>
                </view>
            </view>
        </view>
        <view class="fixed-box"></view>
        <view class="swiper-box">
            <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull">
                <searchSort @backInfo="backInfo"></searchSort>
                <view class="search-content" :class="{'search-content-more':searchType}">
                    <template v-for="item in 8">
                    <view class="search-content-box" :key="item">
                        <view class="search-content-img">
                            <image src="/static/images/pimg.png" class="img" :mode="imgmode"></image>
                        </view>
                        <view class="search-content-info">
                            <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                            <view class="type">
                                经典北疆环游线
                            </view>
                            <view class="label">
                            </view>
                            <view class="flex">
                                <view class="price">￥<text class="number">152.00</text></view>
                                <view class="info">月销<text>24</text>件</view>
                            </view>
                        </view>
                    </view>
                    </template>
                </view>
            </scroll-view>
        </view>
    </div>
</template>

<script>
import searchSort from '@/pages/public/mixins/searchSort'
export default {
    components: {},
    mixins:[searchSort],
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            imgmode:'widthFix',
        }
    },
	methods: {
        backInfo:function(){
            this.searchType=!this.searchType;
            if(this.searchType){
                this.imgmode='scaleToFill';
            }else{
                this.imgmode='widthFix';
            }
        }
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    
</style>
