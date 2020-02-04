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
        <view>
            <searchSort @backInfo="backInfo"></searchSort>
            <view class="search-content" :class="{'search-content-more':searchType}">
                <view class="search-content-box">
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
                <view class="search-content-box">
                    <view class="search-content-img">
                        <image src="/static/images/pimg.png" class="img" :mode="imgmode"></image>
                    </view>
                    <view class="search-content-info">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="type">
                            经典北疆环游线
                        </view>
                        <view class="label">
                            <text class="txt">纯玩</text>
                            <text class="txt">一价全包</text>
                        </view>
                        <view class="flex">
                            <view class="price">￥<text class="number">152.00</text></view>
                            <view class="info">月销<text>24</text>件</view>
                        </view>
                    </view>
                </view>
                <view class="search-content-box">
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
                <view class="search-content-box">
                    <view class="search-content-img">
                        <image src="/static/images/pimg.png" class="img" :mode="imgmode"></image>
                    </view>
                    <view class="search-content-info">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="type">
                            经典北疆环游线
                        </view>
                        <view class="label">
                            <text class="txt">纯玩</text>
                            <text class="txt">一价全包</text>
                        </view>
                        <view class="flex">
                            <view class="price">￥<text class="number">152.00</text></view>
                            <view class="info">月销<text>24</text>件</view>
                        </view>
                    </view>
                </view>
                <view class="search-content-box">
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
                <view class="search-content-box">
                    <view class="search-content-img">
                        <image src="/static/images/pimg.png" class="img" :mode="imgmode"></image>
                    </view>
                    <view class="search-content-info">
                        <view class="title">长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深长滩岛旅游项目魔术岛一日游水牛岛海钓海岛跳岛旅游浮潜深</view>
                        <view class="type">
                            经典北疆环游线
                        </view>
                        <view class="label">
                            <text class="txt">纯玩</text>
                            <text class="txt">一价全包</text>
                        </view>
                        <view class="flex">
                            <view class="price">￥<text class="number">152.00</text></view>
                            <view class="info">月销<text>24</text>件</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view v-if="hasInfo&&list.length==0" class="searchInfo">
            搜索无结果
        </view>
    </view>
</template>

<script>
import searchSort from '@/pages/public/components/searchSort.vue'
export default {
    components: {searchSort},
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            hasInfo:false,
            initParams:{
                name:null,
            },
            list:[],
            searchType:false,
            imgmode:'widthFix',
        }
    },
	methods: {
        back:function(){
            uni.navigateBack();
        },
        searchSubmit:function(){
            this.list=[234]
        },
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
    .searchInfo{
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 16px;
    }
    .search{
        width: 100%;
        height: 50px;
        background: #FFC900;
        padding: 5px;
        font-size: 16px;
        display: flex;
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
