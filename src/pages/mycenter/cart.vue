<template>
    <view class="content">
        <nav-bar title="购物车" bgColor="#f5f5f5">
        </nav-bar>
        <view class="top-checkall">
            <evan-checkbox-group @change="onGroupChangeAll" v-model="checkall">
                <evan-checkbox label="all" primaryColor="#dedede">全选</evan-checkbox>
            </evan-checkbox-group>
        </view>
        <view class="search-content search-content-more">
            <evan-checkbox-group @change="onGroupChange" v-model="checkbox">
                <view class="evan-checkbox-show__group-item" v-for="item in List" :key="item.id">
                    <evan-checkbox :label="item.id" primaryColor="#dedede">
                        <view class="search-content-box">
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
                                    <view class="font-size12 remove-btn">删除</view>
                                </view>
                            </view>
                        </view>
                    </evan-checkbox>
                </view>
            </evan-checkbox-group>
        </view>
        <view class="bottom-nav-fixed"></view>
        <view class="bottom-nav">
            <view class="bottom-nav-auto">
                <view class="bottom-nav-btn">删除勾选</view>
                <view class="bottom-nav-btn">立即购买</view>
            </view>
        </view>
    </view>
</template>

<script>
import EvanCheckboxGroup from '@/components/evan-checkbox/evan-checkbox-group.vue'
import EvanCheckbox from '@/components/evan-checkbox/evan-checkbox.vue'
export default {
    components: {EvanCheckboxGroup,EvanCheckbox},
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            checkbox:[],
            checkall:[],
            List:[
                {
                    label: '红色',
                    id: 'red'
                },
                {
                    label: '绿色',
                    id: 'green'
                },
                {
                    label: '蓝色',
                    id: 'blue'
                },
                {
                    label: '粉色',
                    id: 'pink'
                },
                {
                    label: '黑色',
                    id: 'black'
                }
            ]
        }
    },
	methods: {
        onGroupChange:function(e){
            console.log(e)
        },
        onGroupChangeAll:function(e){
            console.log(e.length)
            if(e.length>0){
                for(let i=0;i<this.List.length;i++){
                    this.checkbox.push(this.List[i].id);
                }
            }else{  
                this.checkbox=[];
            }
        }
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .top-checkall{
        padding: 0 0 10px 10px;
    }
    .search-content-box{
        width: calc(100% - 30px);
    }
    .remove-btn{
        display: flex;
        align-items: center;
    }
    .bottom-nav-auto{
        padding: 0 12px;
    }
</style>
