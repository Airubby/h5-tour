<template>
    <view class="content">
        <view class="search">
            <view @tap="back" class="search-btn">返回</view>
            <view class="search-box">
                <ai-input v-model="initParams.name" placeholder="搜索店铺内的宝贝" placeholderStyle="color:#999;" class="search-input">
                    <image src="/static/icons/search-blank.png" class="search-icon" mode="widthFix"></image>
                </ai-input>
            </view>
            <view @tap="searchSubmit" class="search-btn">确定</view>
        </view>
        <view class="fixed-box"></view>
        <scroll-view scroll-y="true" :style="{ 'height':scrollHeight }" v-if="list.length>0">
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
    onLoad(){
        /* 设置当前滚动容器的高，若非窗口的高度，请自行修改 */
        uni.getSystemInfo({
            success:(res)=>{
                this.scrollHeight=`${res.windowHeight-50}px`;
            }
        });
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
        background: #FFC900;
        padding: 5px;
        font-size: 16px;
        display: flex;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        .search-box{
            width: calc(100% - 100px);
            display: inline-block;
        }
        .search-input{
            border: none;
            background: #fff;
            border-radius: 20px 0 20px 20px;
            margin: 0px;
            position: relative;
            padding-left: 38px;
            .search-icon{
                width:18px;
                height:18px;
                margin-right:5px;
                position: absolute;
                left: 12px;
                top: 10px;
            }
        }
        .search-btn{
            display: inline-block;
            width: 50px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #333;
        }
    }
</style>
