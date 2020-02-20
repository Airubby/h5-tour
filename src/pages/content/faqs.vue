<template>
    <view class="content">
        <view class="pd12 top">
            关于<text class="top-title">[昆明送签]马来西亚签证沙巴自由行拒签退款全国办理</text>的<text>2</text>个问题
        </view>
        <view class="pd12 bgfff mb10">
            <view class="list-box">
                <view class="wen box">
                    <view>
                        <image src="/static/icons/wen.png" class="img" mode="scaleToFill"></image>
                    </view>
                    <view>
                        请问您住的地方干净吗？景点时间安排的合理吗？谢谢
                    </view>
                </view>
                <view class="mt10 box">
                    <view>
                    <image src="/static/icons/da.png" class="img" mode="scaleToFill"></image>
                    </view>
                    <view>
                    住的还算干净了。景点的话，在岛上自己租电车比较好，可以到处跑。最好不跟团了，吃饭很差的！
                    </view>
                </view>
                <navigator :url="'/pages/content/morefaqs?id='+ encodeURIComponent(JSON.stringify('cc'))" class="font-size12 flex mt10">
                    <view class="all-faqs">查看3个回答</view>
                    <view class="color999">2019-12-12 12:12:12</view>
                </navigator>
            </view>
        </view>
        <view class="pd12 bgfff mb10">
            <view class="list-box">
                <view class="wen box">
                    <view>
                        <image src="/static/icons/wen.png" class="img" mode="scaleToFill"></image>
                    </view>
                    <view>
                        请问您住的地方干净吗？景点时间安排的合理吗？谢谢
                    </view>
                </view>
                <view class="mt10 box">
                    <view>
                    <image src="/static/icons/da.png" class="img" mode="scaleToFill"></image>
                    </view>
                    <view>
                    住的还算干净了。景点的话，在岛上自己租电车比较好，可以到处跑。最好不跟团了，吃饭很差的！
                    </view>
                </view>
                <navigator :url="'/pages/content/morefaqs?id='+ encodeURIComponent(JSON.stringify('cc'))" class="font-size12 flex mt10">
                    <view class="all-faqs">查看3个回答</view>
                    <view class="color999">2019-12-12 12:12:12</view>
                </navigator>
            </view>
        </view>
        <view class="bottom-nav-fixed"></view>
        <view class="bottom-nav">
            <navigator class="bottom-nav-img-box" :url="'/pages/content/writeFaqs?id='+ encodeURIComponent(JSON.stringify('cc'))">
                <image src="/static/icons/bi-orange.png" style="width:24px;height:24px;margin-right:10px;" mode="widthFix"></image>
                向已买的人提问
            </navigator>
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
    .img{
        width: 20px;
        height:20px;
        margin-right: 5px;
    }
    .top{
        display: flex;
        align-items: center;
        .top-title{
            width: calc(100% - 130px);
            display: inline-block;
            overflow: hidden;
            font-weight: bold;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: 5px;
        }
    }
    .wen{
        font-size: 16px;
        font-weight: bold;
        color: #333;
    }
    .box{
        display: flex;
    }
    .all-faqs{
        color: #3069b7;
        padding-left: 25px;   
    }
    .bottom-nav-img-box{
       width: 100%;
       font-size: 16px;
       display: flex;
        justify-content: center;
        align-items: center;
    }
    
</style>
