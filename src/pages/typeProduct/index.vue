<template>
    <view class="content">
        <top></top>
        <view class="list_box">
            <view class="left">
                <scroll-view scroll-y="true" :style="{ 'height':scrollHeight }">
                    <view class="item" 
                        v-for="(item,index) in leftArray"
                        :key="index" 
                        :class="{ 'active':index==leftIndex }" 
                        :data-index="index"
                        @tap="leftTap"
                    >{{item}}</view>
                </scroll-view>
            </view>
            <view class="main">
                <swiper class="swiper" :style="{ 'height':scrollHeight }" 
                    :current="leftIndex" @change="swiperChange"
                    vertical="true" duration="300">
                    <swiper-item v-for="(item,index) in mainArray" :key="index">
                        <scroll-view  scroll-y="true" :style="{ 'height':scrollHeight }">
                            <view class="item">
                                <navigator class="title-content" :url="'/pages/typeProduct/typeSearch?name='+ encodeURIComponent(JSON.stringify(item.title))">
                                    <view>{{item.title}}</view>
                                    <view>
                                        <image src="/static/icons/right.png" style="width:7px;height:13px;" mode="widthFix"></image>
                                    </view>
                                </navigator>
                                <view class="search-content">
                                    <navigator class="search-content-box" v-for="(item2,index2) in item.list" :key="index2" :url="'/pages/typeProduct/typeSearch?name='+ encodeURIComponent(JSON.stringify(item2.title))">
                                        <view class="search-content-img">
                                            <image src="/static/images/pimg.png" class="img" mode="widthFix"></image>
                                        </view>
                                        <view class="search-content-info">
                                            <view class="title">{{item2.title}}</view>
                                        </view>
                                    </navigator>
                                </view>
                            </view>
                        </scroll-view>
                    </swiper-item>
                </swiper>
            </view>
        </view>
    </view>
</template>

<script>
import top from '@/pages/public/top.vue'
	export default {
        components: {top},
		data() {
			return {
				scrollHeight:'500px',
				leftArray:[
                    "目的地","出发日期","跟团游","自由行","主题"
                ],
				mainArray:[
                    {
                        title:"按目的地",
                        list:[
                            {title:"乌鲁木齐"},{title:"喀纳斯"},{title:"阿勒泰"},{title:"北屯"},{title:"那拉提"},
                            {title:"伊宁"},{title:"喀什"},{title:"库尔勒"},{title:"库车"},
                        ]
                    },
                    {
                        title:"按出发日期",
                        list:[
                            {title:"1月"},{title:"2月"},{title:"3月"},{title:"4月"},{title:"5月"},{title:"6月"},
                            {title:"7月"},{title:"8月"},{title:"9月"},{title:"10月"},{title:"11月"},{title:"12月"}
                        ]
                    },
                    {
                        title:"按跟团出游",
                        list:[
                            {title:"新疆跟团游"}
                        ]
                    },
                    {
                        title:"按自由行出游",
                        list:[
                            {title:"新疆自由行"}
                        ]
                    },
                    {
                        title:"按主题出游",
                        list:[
                            {title:"亲子"},{title:"情侣"},{title:"旅拍"},{title:"赏花"},{title:"摄影"},{title:"探秘"}
                        ]
                    }
                ],
				leftIndex:0
			}
		},
		onLoad(){
			/* 设置当前滚动容器的高，若非窗口的高度，请自行修改 */
			uni.getSystemInfo({
				success:(res)=>{
					this.scrollHeight=`${res.windowHeight-118}px`;
				}
			});
		},
		mounted(){
			// this.getListData();
		},
		methods: {
			/* 获取列表数据 */
			getListData(){
				/* 因无真实数据，当前方法模拟数据 */
				let [left,main]=[[],[]];

				for(let i=0;i<30;i++){
					left.push(`${i+1}类商品`);
					
					let list=[];
					let max = Math.floor(Math.random()*15) || 8;
					for(let j=0;j<max;j++){
						list.push(j);
					}
					main.push({
						title:`第${i+1}类商品标题`,
						list
					})
				}
				this.leftArray=left;
				this.mainArray=main;
			},
			/* 左侧导航点击 */
			leftTap(e){
				let index=e.currentTarget.dataset.index;
				this.leftIndex=Number(index);
			},
			/* 轮播图切换 */
			swiperChange(e){
				let index=e.detail.current;
				this.leftIndex=Number(index);
			}
		}
	}
</script>

<style lang="less">
.list_box{
    width:100%;
	display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
	font-size: 24rpx;
	.left{
		width: 200rpx;
		background-color: #f6f6f6;
		line-height: 80rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		.item{
			padding-left: 20rpx;
            position: relative;
            border-left: 3px solid #f6f6f6;
			&:not(:first-child) {
				margin-top: 1px;
				&::after {
					content: '';
					display: block;
					height: 0;
					border-top: #d6d6d6 solid 1px;
					width: 620rpx;
					position: absolute;
					top: -1px;
					right: 0;
					transform:scaleY(0.5);	/* 1px像素 */
				}
			}
			&.active,&:active{
                color: #FF5000;
                border-color: #FF5000;
				background-color: #fff;
			}
		}
	}
	.main{
		background-color: #fff;
		width: 0;
		flex-grow: 1;
		box-sizing: border-box;
		.swiper{
			height: 500px;
		}
		.title-content{
			line-height: 80rpx;
            font-size: 28rpx;
            padding: 0 20rpx;
			color: #666;
			background-color: #fff;
			position: sticky;
			top: 0;
            z-index: 999;
            display: flex;
            justify-content: space-between;
		}
		.search-content-info{
            padding: 5px 0 0 0;
            text-align: center;
            line-height: 16px;
		}
	}
}
</style>
