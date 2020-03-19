<template>
    <view class="content">
        <nav-bar title="收藏夹" bgColor="#f5f5f5">
            <view class="pdr15" slot="right">
                管理
            </view>
        </nav-bar>
        <view class="top">
            <view v-for="(tab,index) in navBars" :key="'tab'+index" :class="['center-top-nav-list',navIndex==index ? 'active' : '']"
            :id="'tab'+index" :data-current="index" @tap="tapNav">
            {{tab.name}}
            </view>
        </view>
        <swiper :current="navIndex" class="swiper-center-box" :duration="0" @change="changeNav">
            <swiper-item class="swiper-item">
                <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull" @scroll="scrollNav">
                    <line-component v-if="navIndex===0"></line-component>
                </scroll-view>
            </swiper-item>
            <swiper-item class="swiper-item">
                <scroll-view scroll-y="true" :scroll-top="scrollTop" class="heightFull" @scroll="scrollNav">
                    <con-component v-if="navIndex===1"></con-component>
                </scroll-view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
import lineComponent from './favorite/line'
import conComponent from './favorite/content'
export default {
    components: {lineComponent,conComponent},
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            navIndex:0,
            scrollTop:0,
            navBars: [{
                name: '线路',
            }, {
                name: '内容'
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
        justify-content: center;
        padding: 10px 0;
        .center-top-nav-list{
            padding-bottom: 5px;
            margin: 0 10px;
        }
        .active{
            color: #FF5000;
            border-bottom: 2px solid #FF5000;
        }
    }
</style>
