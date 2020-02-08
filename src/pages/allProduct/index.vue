<template>
    <div class="content">
        <top></top>
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
import top from '@/pages/public/top.vue'
export default {
    components: {top},
    mixins:[searchSort],
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
    
</style>
