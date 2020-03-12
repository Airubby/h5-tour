<template>
    <view class="content bgf5">
        <nav-bar :title="title" bgColor="#f5f5f5"></nav-bar>
        <view class="top">
            <view v-for="(tab,index) in navBars" :key="'tab'+index" :class="['center-top-nav-list',navIndex==index ? 'active' : '']"
            :id="'tab'+index" :data-current="index" @tap="tapNav">
            {{tab.name}}
            </view>
        </view>
        <swiper :current="navIndex" class="swiper-center-box" :duration="0" @change="changeNav">
            <swiper-item class="swiper-item">
                <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull" @scroll="scrollNav">
                    <all v-if="navIndex===0"></all>
                </scroll-view>
            </swiper-item>
            <swiper-item class="swiper-item">
                <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull" @scroll="scrollNav">
                    <payment v-if="navIndex===1"></payment>
                </scroll-view>
            </swiper-item>
            <swiper-item class="swiper-item">
                <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull" @scroll="scrollNav">
                    <sendout v-if="navIndex===2"></sendout>
                </scroll-view>
            </swiper-item>
            <swiper-item class="swiper-item">
                <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull" @scroll="scrollNav">
                    <receive v-if="navIndex===3"></receive>
                </scroll-view>
            </swiper-item>
            <swiper-item class="swiper-item">
                <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull" @scroll="scrollNav">
                    <discuss v-if="navIndex===4"></discuss>
                </scroll-view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
import all from './order/all.vue'
import sendout from './order/sendout.vue'
import receive from './order/receive.vue'
import payment from './order/payment.vue'
import discuss from './order/discuss.vue'
export default {
    components: {all,sendout,receive,payment,discuss},
    created() {
        
    },
    onLoad(e) {
        this.navIndex = JSON.parse(decodeURIComponent(e.id));
        this.title=this.navBars[this.navIndex]["name"];
    },
    mounted() {
    },
    data(){
        return{
            title:"全部",
            navIndex:0,
            scrollTop:0,
            navBars: [{
                name: '全部',
            }, {
                name: '待付款'
            }, {
                name: '待发货'
            }, {
                name: '待收货'
            }, {
                name: '待评价'
            }],
        }
    },
	methods: {
        scrollNav:function(e){
            this.scrollTop = e.detail.scrollTop
        },
        async changeNav(e) {
            let index = e.target.current;
            this.navIndex = index; //一旦访问data就会出问题
            this.title=this.navBars[this.navIndex]["name"];
        },
        async tapNav(e) { //点击tab-bar
            let index=parseInt(e.target.dataset.current);
            if (this.navIndex === index) {
                return false;
            } else {
                this.navIndex = index;
                this.title=this.navBars[this.navIndex]["name"];
            }
        },
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .top{
        display: flex;
        justify-content: space-around;
        padding-top: 10px;
        .center-top-nav-list{
            padding-bottom: 5px;
        }
        .active{
            color: #FF5000;
            border-bottom: 2px solid #FF5000;
        }
    }
</style>
