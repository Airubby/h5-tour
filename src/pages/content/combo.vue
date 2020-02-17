<template>
    <view class="content bgfff">
        <view class="pd12">
            <view class="box">
                <view class="show-title">出发地</view>
                <view class="show-box">
                    <ai-radio-group :items="cfd"></ai-radio-group>
                </view>
            </view>
            <view class="box">
                <view class="show-title">套餐类型</view>
                <view class="show-box">
                    <ai-radio-group :items="tclx"></ai-radio-group>
                </view>
            </view>
            <view class="box">
                <view class="show-title">出游人群</view>
                <view class="show-box">
                    <ai-radio-group :items="chuyou"></ai-radio-group>
                </view>
            </view>
        </view>
        <view class="bg10"></view>
        <view class="pd12">
            <view class="top-data flex">
                <view class="data-title">服务</view>
                <view>
                    该商品在支付成功后需等待卖家确认，平均确认时长1分钟，通过率100%
                </view>
            </view>
        </view>
        <view class="bg10"></view>
        <view class="pd12">
            <view class="box">
                <view class="show-title">出发日期</view>
                <view class="show-box">
                   <view>
                        <z-calendar ref="calendar" :datePrice="datePrice" howManyMonth="3" mode="1" @changeDate="changeDate" :defaultSelect="defaultSelect"></z-calendar>
                    </view>
                </view>
            </view>
        </view>
        <view class="bg10"></view>
        <view class="pd12">
            <view class="flex">
                <view>购买数量</view>
                <number-box v-model="number"></number-box>
            </view>
        </view>
        <view class="bottom-nav-fixed"></view>
        <view class="bottom-nav">
            <view class="bottom-nav-price">
                <view><text class="unit">￥</text>2923-4505</view>
            </view>
            <view class="bottom-nav-auto">
                <view class="bottom-nav-btn">加入购物车</view>
                <view class="bottom-nav-btn">立即购买</view>
            </view>
        </view>
    </view>
</template>

<script>
import aiRadioGroup from '@/components/ai-ui/ai-radio-group/index.vue'
import numberBox from './components/number-box.vue'
import zCalendar from "./components/calendar/index.vue"
export default {
    components: {aiRadioGroup,numberBox,zCalendar},
    created() {
        
    },
    onPageScroll: function(e) {
        
    },
    computed:{
        
    },
    mounted() {
        this.selectedData=this.$refs.calendar.getSelectData()
    },
    data(){
        return{
            cfd:[{label:'北京',value:'1'},{label:'上海',value:'2'},{label:'乌鲁木齐',value:'3'}],
            tclx:[{label:'A热卖龙脊2人出行单价',value:'1'},{label:'A热卖龙脊3人出行单价',value:'2'},{label:'B热卖龙脊2人出行单价',value:'3'}],
            chuyou:[{label:'成人',value:'1'},{label:'儿童',value:'2'}],
            number:1,

            defaultSelect:"2020-02-28",
            selectedData:{},
            datePrice:[{
                    date:"2020-03-27",
                    price:"111"
                },
                {
                    date:"2020-02-28",
                    price:"111"
                },
                {
                    date:"2020-03-12",
                    price:"333"
                },
                {
                    date:"2020-03-10",
                    price:"222",
                },
                {
                    date:"2020-03-09",
                    price:"444"
                },
                {
                    date:"2020-03-11",
                    price:"998"
                },
                {
                    date:"2020-04-10",
                    price:"2998"
                },
                {
                    date:"2020-05-10",
                    price:"29928"
                },
                {
                    date:"2020-06-10",
                    price:"29928"
                }]
        }
    },
	methods: {
        changeDate(data){ //选择日期事件  可以将data绑定到此页面以用来提交等操作
            console.log("日期："+data.date);
            console.log("价格:"+data.price);
            this.selectedData = data;
        },
        
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .box{
        border-bottom: 1px solid #F2F3F4;
        margin-bottom: 20px;
        .show-title{
            font-weight: bold;
        }
        .show-box{
            display: flex;
            margin: 10px 0;
        }
    }
    .top-data{
        color: #666;
        margin: 15px 0 10px 0;
        .data-title{
            color: #999;
            margin-right: 10px;
            min-width: 28px;
        }
    }
    .bottom-nav-price{
        width: 168px;
        padding: 0 20px;
        color: #ff5000;
        font-size: 16px;
        .unit{
            font-size: 14px;
        }
    }
    .bottom-nav-auto{
        flex: 1 1 0%;
        display: flex;
        align-items: center;
        padding:0  12px;
        .bottom-nav-btn{
            width: 50%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #fff;
             border-radius: 0 50px 50px 0;
            background: #FF5F1C;
            &:nth-of-type(1){
                background: #FF9D02;
                border-radius: 50px 0 0 50px;
            }
        }
    }
    
</style>
