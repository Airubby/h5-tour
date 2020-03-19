<template>
    <view class="content">
        <view class="search-content search-content-more">
            <template v-for="(item,index) in items">
                <view class="search-content-box" :key="index">
                    <view class="search-content-img">
                        <image src="/static/images/pimg.png" class="img" mode="scaleToFill"></image>
                    </view>
                    <view class="search-content-info">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="label">
                            123123人收藏
                        </view>
                        <view class="type"></view>
                        <view class="flex">
                            <view class="price">￥<text class="number">152.00</text></view>
                        </view>
                    </view>
                </view>
            </template>
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
            items: [{
                value: 'USA',
                id: '美国'
                },
                {
                    value: 'CHN',
                    id: '中国',
                },
                {
                    value: 'BRA',
                    id: '巴西'
                },
                {
                    value: 'JPN',
                    id: '日本'
                },
                {
                    value: 'ENG',
                    id: '英国'
                },
                {
                    value: 'FRA',
                    id: '法国'
                }
            ]
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
