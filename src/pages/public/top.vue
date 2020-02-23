<template>
    <view>
        <view class="public-top">
            <view class="public-top-con">
                <top-public></top-public>
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
    </view>
</template>

<script>
import topPublic from './top-public.vue'
export default {
    props:["info"],
    components: {
        topPublic
    },
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            topPay:true
        }
    },
	methods: {
        topay:function(){
            this.topPay=!this.topPay;            
        }
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    
</style>
