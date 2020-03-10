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
    
</style>
