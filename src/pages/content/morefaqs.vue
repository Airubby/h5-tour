<template>
    <view class="content bgfff">
        <view class="pd12 top">
            <image src="/static/images/show.png" class="img" mode="scaleToFill"></image>
            <text class="top-title">[昆明送签]马来西亚签证沙巴自由行拒签退款全国办理</text>
        </view>
        <view class="pd12 mb10">
            <view>
                <view class="wen box">
                    <view>
                        <image src="/static/icons/wen.png" class="img" mode="scaleToFill"></image>
                    </view>
                    <view>
                        请问您住的地方干净吗？景点时间安排的合理吗？谢谢
                    </view>
                </view>
            </view>
        </view>
        <view class="bg10"></view>
        <view class="pd12">
            <view>
                <view class="wen box">
                    <view>
                    <image src="/static/icons/da.png" class="img" mode="scaleToFill"></image>
                    </view>
                    <view>
                    共3个回答
                    </view>
                </view>
            </view>
        </view>
        <view class="pd12">
            <view class="list-box">
                <view class="user-info">
                    <image src="/static/images/show.png" class="img" mode="scaleToFill"></image>
                    <view>
                        <view>Airubby</view>
                        <view class="time">2017-12-12</view>
                    </view>
                </view>
                <view>
                住的还算干净了。景点的话，在岛上自己租电车比较好，可以到处跑。最好不跟团了，吃饭很差的！
                </view>
            </view>
            <view class="list-box">
                <view class="user-info">
                    <image src="/static/images/show.png" class="img" mode="scaleToFill"></image>
                    <view>
                        <view>Airubby</view>
                        <view class="time">2017-12-12</view>
                    </view>
                </view>
                <view>
                住的还算干净了。景点的话，在岛上自己租电车比较好，可以到处跑。最好不跟团了，吃饭很差的！
                </view>
            </view>
            <view class="list-box">
                <view class="user-info">
                    <image src="/static/images/show.png" class="img" mode="scaleToFill"></image>
                    <view>
                        <view>Airubby</view>
                        <view class="time">2017-12-12</view>
                    </view>
                </view>
                <view>
                住的还算干净了。景点的话，在岛上自己租电车比较好，可以到处跑。最好不跟团了，吃饭很差的！
                </view>
            </view>
        </view>
    </view>
</template>

<script>

export default {
    components: {},
    created() {
        
    },
    onPageScroll: function(e) {
        
    },
    computed:{
        
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
        display: flex;
        align-items: center;
        .img{
            width: 46px;
            height: 46px;
        }
        .top-title{
            width: calc(100% - 52px);
            display: inline-block;
            overflow: hidden;
            font-weight: bold;
            margin-left: 5px;
        }
    }
    .wen{
        font-size: 16px;
        font-weight: bold;
        color: #333;
        .img{
            width: 20px;
            height:20px;
            margin-right: 5px;
        }
    }
    .box{
        display: flex;
    }
    .list-box{
        .user-info{
            display: flex;
            margin-bottom: 10px;
        }
        .img{
            width: 36px;
            height: 36px;
            margin-right: 4px;
            border-radius: 50%;
        }
        .time{
            font-size: 12px;
            color: #999;
        }
        padding-bottom: 15px;
        margin-bottom: 25px;
        border-bottom: 1px solid #E5E5E5;
    }
</style>
