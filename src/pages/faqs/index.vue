<template>
    <view class="content bgfff">
        <view class="faqs-top">
            <view class="faqs-top-con">
                <view class="faqs-top-con-info">
                    <view>共2344个问题，</view>
                    <view>
                        <image src="/static/images/pimg.png" class="faqs-top-img" mode="scaleToFill"></image>
                        <image src="/static/images/show.png" class="faqs-top-img" mode="scaleToFill"></image>
                        <image src="/static/images/banner.png" class="faqs-top-img" mode="scaleToFill"></image>
                        <text>... 正在回答</text>
                    </view>
                </view>
                <view class="faqs-top-con-btn">
                    <ai-radio-group :items="items" v-model="current" :params="{label: 'name',value: 'id'}"></ai-radio-group>
                </view>
            </view>
        </view>
        <navigator class="faqs-hot" :url="'/pages/faqs/list?id='+ encodeURIComponent(JSON.stringify('item.id'))">
            <view><image src="/static/icons/faqs.png" style="width:16px;height:16px;margin-right:10px;" mode="widthFix"></image></view>
            <view class="faqs-hot-info">【聊春运 | 领里程】晒晒家乡的火车站/汽车站/机场</view>
            <view><image src="/static/icons/faqs-right.png" style="width:6px;height:10px;margin-left:10px;" mode="widthFix"></image></view>
        </navigator>
        <view class="faqs-list">
            <navigator class="faqs-list-box" v-for="item in 2" :key="'key'+item" :url="'/pages/faqs/list?id='+ encodeURIComponent(JSON.stringify('item.id'))">
                <view class="faqs-list-box-hot">
                    <view class="faqs-list-box-hotcon">
                        <view class="faqs-list-box-hotbg">
                            <image src="/static/icons/hot.png" style="width:9px;height:10px;margin:0 auto;" mode="widthFix"></image>
                        </view>
                        热门
                    </view>
                </view>
                <view class="faqs-list-box-title">
                      普吉岛有什么好玩的？第一次去要注意什么？  
                </view>
                <view class="faqs-list-box-user">
                    <image src="/static/images/show.png" style="width:21px;height:21px;border-radius:50%;" mode="scaleToFill"></image>
                    <text class="user">从山里走向世界</text>
                    <image src="/static/icons/F1.png" style="width:18px;height:12px;" mode="widthFix"></image>
                </view>
                <view class="faqs-list-box-con">
                    <view class="info">
                        <view class="info-con">
                    　　  <text class="quality">优质</text>杭州ins风拍照地推荐：杭州创意设计中心  这个设计中心特别特别适合拍照，有超多个拍摄点，好多地方都可以拍出很韩剧的感觉！ 而且还有些地方很像美国～有种不花钱就能出国的感觉哈哈哈哈  大多数拍照点在室外，最好选择晴天来。 建议大家穿亮色的衣服。清新韩系的裙子，搭配墨镜小方巾之类的配饰，方便在不同的场景换不同的风格～  拍累了以后，可以到Oneday_.咖啡厅再拍些室内照片～应该算是这边最红的咖啡馆了，非常好看！ 而且饮料和甜点的味道也都蛮好的～
                        </view>                    
                    </view>
                    <view>
                        <image src="/static/images/show.png" style="width:90px;height:66px;border-radius:5px;" mode="scaleToFill"></image>
                    </view>
                </view>
                <view class="font-size12 flex">
                    <view class="faqs-list-box-addr">新疆</view>
                    <view>
                        <text>3352 浏览</text>
                        <text class="ml15">22 回答</text>
                    </view>
                </view>
            </navigator>
            <navigator class="faqs-list-box" v-for="item in 10" :key="'a'+item" :url="'/pages/faqs/list?id='+ encodeURIComponent(JSON.stringify('item.id'))">
                <view class="faqs-list-box-hot" style="display:none;">
                    <view class="faqs-list-box-hotcon">
                        <view class="faqs-list-box-hotbg">
                            <image src="/static/icons/hot.png" style="width:9px;height:10px;margin:0 auto;" mode="widthFix"></image>
                        </view>
                        热门
                    </view>
                </view>
                <view class="faqs-list-box-title">
                    杭州有哪些很美的拍照胜地？
                </view>
                <view class="faqs-list-box-user">
                    <image src="/static/images/banner.png" style="width:21px;height:21px;border-radius:50%;" mode="scaleToFill"></image>
                    <text class="user">从山里走向世界</text>
                    <image src="/static/icons/F3.png" style="width:18px;height:12px;" mode="widthFix"></image>
                </view>
                <view class="faqs-list-box-con">
                    <view class="info">
                        <view class="info-con">
                    　　  杭州ins风拍照地推荐：杭州创意设计中心  这个设计中心特别特别适合拍照，有超多个拍摄点，好多地方都可以拍出很韩剧的感觉！ 而且还有些地方很像美国～有种不花钱就能出国的感觉哈哈哈哈  大多数拍照点在室外，最好选择晴天来。 建议大家穿亮色的衣服。清新韩系的裙子，搭配墨镜小方巾之类的配饰，方便在不同的场景换不同的风格～  拍累了以后，可以到Oneday_.咖啡厅再拍些室内照片～应该算是这边最红的咖啡馆了，非常好看！ 而且饮料和甜点的味道也都蛮好的～
                        </view>                    
                    </view>
                    <view class="ml10">
                        <image src="/static/images/banner.png" style="width:90px;height:66px;border-radius:5px;" mode="scaleToFill"></image>
                    </view>
                </view>
                <view class="font-size12 flex">
                    <view class="faqs-list-box-addr">喀纳斯</view>
                    <view>
                        <text>3352 浏览</text>
                        <text class="ml15">22 回答</text>
                    </view>
                </view>
            </navigator>
        </view>
    </view>
</template>

<script>
import aiRadioGroup from '@/components/ai-ui/ai-radio-group/index.vue'
export default {
    components: {aiRadioGroup},
    onReady: function () {
        
    },
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            current:0,
            items: [
                {id: 0,name: '全部'},{id: 1,name: '最热'},{id: 2,name: '最新'},{id: 3,name: '待回答'},{id: 4,name: '购物'},
                {id: 5,name: '玩乐体验'},{id: 6,name: '住宿'},{id: 7,name: '美食'},{id: 8,name: '景点'},{id: 9,name: '交通'},
                {id: 10,name: '行程'},{id: 11,name: '其它'}
            ],
        }
    },
	methods: {
        
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .faqs-top{
        width: 100%;
        height: 260px;
        background: url("~@/static/images/faqs-bg.png") no-repeat;
        .faqs-top-con{
            width: 100%;
            padding: 60px 15px 0 15px;
            color: #fff;
            .faqs-top-con-info{
                display: flex;
                font-size: 16px;
                margin-bottom: 20px;
                .faqs-top-img{
                    width: 19px;
                    height: 19px;
                    border-radius: 50%;
                    border: 1px solid #fff;
                    position: relative;
                    &:nth-of-type(2){
                        left: -3px;
                    }
                    &:nth-of-type(3){
                        left: -6px;
                    }
                }
            }
        }
    }
    .faqs-hot{
        width: 100%;
        height: 30px;
        padding: 0 15px;
        display: flex;
        align-items: center;
        background: #FFF5F3;
        color: #FF6647;
        font-size: 12px;
        .faqs-hot-info{
            max-width: calc(100% - 42px);
            height: 30px;
            line-height: 30px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    .faqs-list-box-hot{
        font-size: 12px;
        display: flex;
        height: 18px;
        line-height: 18px;
        margin-bottom: 12px;
        .faqs-list-box-hotcon{
            background: #FFF5F3;
            color: #FF6647;
            display: flex;
            padding-right: 10px;
            border-radius: 20px;
        }
        .faqs-list-box-hotbg{
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #FF6647;
            text-align: center;
            display: flex;
            align-items: center;
            margin-right: 4px;
        }
    }
    .faqs-list-box-user{
        width: 100%;
        height: 21px;
        line-height: 21px;
        margin-top: 12px;
        .user{
            max-width: 100px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 12px;
            margin: 0 5px 0 10px;
        }
    }
</style>
