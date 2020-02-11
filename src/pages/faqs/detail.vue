<template>
    <view class="content bgfff">
        <view class="faqs-list-top">
            <view class="faqs-list-box-title">
                普吉岛有什么好玩的？第一次去要注意什么？
            </view>
            <view class="font-size12 flex mt15">
                <view @tap="backTo()">
                    查看全部20条回答<image src="/static/icons/right.png" style="width:7px;height:13px;margin-left:5px;" mode="widthFix"></image>
                </view>
                <view class="faqs-list-top-infot">
                    我来回答
                </view>
            </view>
        </view>
        <view class="bg10"></view>
        <view class="faqs-list">
            <view class="faqs-list-box">
                <view class="faqs-list-box-user">
                    <view class="mr5">
                        <image src="/static/images/banner.png" style="width:32px;height:32px;border-radius:50%;" mode="scaleToFill"></image>
                    </view>
                    <view>
                        <view class="user">
                            <text class="user">从山里走向世界</text>
                            <image src="/static/icons/F2.png" style="width:18px;height:12px;" mode="widthFix"></image>
                        </view>
                        <view class="font-size12 color999">回答于2019-05-12</view>
                    </view>
                </view>
                <view class="mt25">
                    <text class="quality">优质回答</text>
                </view>
                <view class="faqs-list-box-con">
                    <view class="info">
                        <view class="info-con">
                    　　    杭州ins风拍照地推荐：杭州创意设计中心  这个设计中心特别特别适合拍照，有超多个拍摄点，好多地方都可以拍出很韩剧的感觉！ 而且还有些地方很像美国～有种不花钱就能出国的感觉哈哈哈哈  大多数拍照点在室外，最好选择晴天来。 建议大家穿亮色的衣服。清新韩系的裙子，搭配墨镜小方巾之类的配饰，方便在不同的场景换不同的风格～  拍累了以后，可以到Oneday_.咖啡厅再拍些室内照片～应该算是这边最红的咖啡馆了，非常好看！ 而且饮料和甜点的味道也都蛮好的～
                        </view>                    
                    </view>
                </view>
                <view class="show-img">
                    <image src="/static/images/show.png" class="img" mode="widthFix"></image>
                    <image src="/static/images/pimg.png" class="img" mode="widthFix"></image>
                    <image src="/static/images/index-banner.png" class="img" mode="widthFix"></image>
                </view>
                <view class="font-size12 color999">编辑于 2019-10-11</view>
            </view>
        </view>
        <view class="bottom-nav-fixed"></view>
        <view class="bottom-nav">
            <view class="bottom-nav-img-box">
            <navigator class="bottom-nav-img-boxcon" :url="'/pages/buyersShow/writeDiscuss?id='+ encodeURIComponent(JSON.stringify('cc'))">
                <image src="/static/icons/bi-line.png" style="width:18px;height:18px;margin-right:10px;" mode="widthFix"></image>我要回答
            </navigator>
            </view>
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
        
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .faqs-list-top-infot{
        color: #00A2FF;
        font-size: 14px;
    }
    .faqs-list-top{
        padding: 15px 12px 12px;
    }
    .faqs-list-box-user{
        width: 100%;
        height: 32px;
        margin-top: 12px;
        display: flex;
        .user{
            color: #333;
            font-weight: bold;
        }
    }
    .bottom-nav-img-box{
       width: 100%;
       font-size: 16px;
        height: 34px;
        font-weight: bold;
        .bottom-nav-img-boxcon{
            width: 100%;
            background: #FFDD00;
            color: #000;
            height: 100%;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            border-radius: 20px;
        }
    }
    .faqs-list .faqs-list-box{
        border: none;
        padding: 12px 0;
    }
    .show-img .img{
        margin-bottom: 15px;
        border-radius: 3px;
    }
</style>
