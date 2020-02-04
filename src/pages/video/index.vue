<template>
    <view class="content">
        <view class="video">
            <template v-for="item in 5">
                <view class="video-box" :key="item">
                    <view class="video-con">
                        <video id="myVideo" src="http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4" 
                        autoplay controls loop width="100%" height="300px"></video>
                    </view>
                    <navigator class="info flex" :url="'/pages/video/detail?id='+ encodeURIComponent(JSON.stringify('item.id'))">
                        <view class="txt">
                            <view class="label">创意短句</view>
                            横店影视城经典套餐--亲子游横店影视城经典套餐--亲子游横店影视城经典套餐--亲子游
                        </view>
                        <view class="icon"><image src="/static/icons/right.png" style="width:8px;height:18px;margin-left:3px;" mode="widthFix"></image></view>
                    </navigator>
                </view>
            </template>
        </view>
    </view>
</template>

<script>
export default {
    components: {},
    onReady: function () {
        
    },
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            
        }
    },
	methods: {
        enterDetail:function(){

        }
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .video{
        padding: 15px;
        .video-box{
            margin-bottom: 15px;
            .video-con{
                background: #000;
                padding-top: 50px;
                border-radius: 15px 15px 0 0;
            }
            .info{
                background: #fff;
                height: 60px;
                line-height: 50px;
                border-radius: 0 0 15px 15px;
                .icon{
                    width: 30px;
                }
                .txt{
                    width: calc(100% - 50px);
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 16px;
                    .label{
                        color: #FF5000;
                        font-size: 12px;
                        border: 1px solid #FF5000;
                        border-radius: 8px;
                        padding: 0px 3px;
                        display: inline;
                        margin: 0 5px 0 10px;
                    }
                }
            }
        }
    }
</style>
