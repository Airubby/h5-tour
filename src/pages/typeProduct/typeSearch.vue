<template>
    <view class="content">
        <view class="search">
            <view class="search-btn">{{initParams.name}}</view>
            <view @tap="back" class="search-btn">返回</view>
        </view>
        <view class="fixed-box"></view>
        <scroll-view scroll-y="true" :style="{ 'height':scrollHeight }">
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
        <view v-if="hasInfo&&list.length==0" class="searchInfo">
            搜索无结果
        </view>
    </view>
</template>

<script>
import searchSort from '@/pages/public/mixins/searchSort'
export default {
    components: {},
    mixins:[searchSort],
    onLoad(option){
        /* 设置当前滚动容器的高，若非窗口的高度，请自行修改 */
        uni.getSystemInfo({
            success:(res)=>{
                this.scrollHeight=`${res.windowHeight-50}px`;
            }
        });
        if(JSON.parse(decodeURIComponent(option.name))){
			this.initParams.name=JSON.parse(decodeURIComponent(option.name));
		}
    },
    mounted() {
    },
    data(){
        return{
            scrollHeight:'500px',
            hasInfo:false,
            initParams:{
                name:null,
            },
            list:[],
            
        }
    },
	methods: {
        back:function(){
            uni.navigateBack();
        },
        searchSubmit:function(){
            this.list=[234]
        },
        
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .searchInfo{
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 16px;
    }
    .fixed-box{
        width: 100%;
        height: 50px;
    }
    .search{
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 5px 10px;
        font-size: 16px;
        display: flex;
        position: fixed;
        justify-content: space-between;
        z-index: 9999;
        top: 0;
        left: 0;
        background: rgba(52, 51, 51, 0.86);
        .search-box{
            width: calc(100% - 100px);
            display: inline-block;
        }
        .search-btn{
            display: inline-block;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #d7d7d7;
        }
    }
</style>
