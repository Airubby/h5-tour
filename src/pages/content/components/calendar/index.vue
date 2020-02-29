<template>
	<view class="calendar">
		<view class="calenHead-tradition" v-if="mode=='2'">
			<picker class="dateBox" mode="multiSelector" :range="pickerData.list" :value="pickerData.indexList" @change="bindPickerChange">
				<text class="font-big">{{nowMonth.month}}月</text>
				<text class="font-small">{{nowMonth.year}}年</text>
				<uni-icons type="arrowdown" size="10"></uni-icons>
			</picker>
			<text class="reset" @tap="reset">重置</text>
		</view>
		<scroll-view class="calenHead" scroll-x v-if="mode=='1'">
			<view class="headItem" v-for="(date,index) in monthList" v-bind:key="index" :class="[current==index?'active':'']" @tap="headItemTap(index)">
				<text>{{date.getMonth()+1}}月</text>
				<!-- <text class="calen-text-orange" v-if="monthDatePrice[index].length">&yen;{{monthDatePrice[index][0].price}}</text>
				<text class="calen-text-small" v-if="monthDatePrice[index].length">起</text>
				<text class="calen-text-orange" v-if="!monthDatePrice[index].length">暂无团期</text> -->
			</view>
		</scroll-view>
		<view class="weekBar">
			<view class="weekItem" v-for="(item,index) in weekSort" v-bind:key="index">
				{{item}}
			</view>
		</view>
		<view class="dayBox">
			<view class="day" v-for="(item,index) in space" v-bind:key="9999+index"></view>
			<view class="day" :class="[getDateStr(item.date)==getDateStr(dayActive.date)?'active':'']" v-for="(item,index) in dayList" v-bind:key="index" @tap="selectDate(item)">
				<view :class="[isToday(item.date)?'today':'',isBeforeToday(item.date)?'beforeToday':'']">{{isToday(item.date) ? "今天" : item.date.getDate()}}</view>
				<view class="calen-text-orange">{{item.price?'&yen;'+item.price:''}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "./uni-icons.vue"
	export default {
		name:"Zcalendar",
		components:{uniIcons},
		props:{
			themeColor:{ //主题色  并没有用到  留给以后用吧
				type:String,
				default:"#ff625a"
			},
			datePrice:{  //价格列表 [{date:日期,price:价格}]
				type:Array,
				default:()=>[]
			},
			howManyMonth:{ //包含当月共显示几个月
				type:String,
				default:"6"
			},
			defaultSelect:{  //默认选择的日期
				type:String,
				default:""
			},
			mode:{
				type:String,
				default:"1"    //1:固定月份列表  2:传统日历模式(自由选择日期)
			}
		},
		data(){
			return{
				today:{},//今天日期
				weekSort:["日","一","二","三","四","五","六"],
				current:0, //当前选中的月份下标  团期模式
				nowMonth:{},
				dayActive:false, //选中的日期  {date:date,price:string}  date需要自己格式化  method提供了 getDateStr(date)
				monthList:[],//月份列表 明确的说是 存放的是date对象
				space:0//周几占位个数  例如 周二占位2个
 			}
		},
		mounted() {
			this.today = new Date();
			this.nowMonth = {
				year:this.today.getFullYear(),
				month:(this.today.getMonth()+1<10)?"0"+(this.today.getMonth()+1) : this.today.getMonth()+1
			}
			this.setMonthList()
		},
		updated() {
			if(this.defaultSelect != "" && !this.dayActive){
				this.dayActive = this.getDefaultData(this.defaultSelect)
			}
		},
		computed: { 
		    monthDatePrice: function () {
				//过滤出 每个月份的团期价格list 并且按照对象内的价格排序  以用来显示当前月份xxxx金额起,用于mode1
				let map = {}
				let _that = this;
				this.monthList.forEach((date,i)=>{
					let list = _that.datePrice.filter(item=>new Date(item.date).getFullYear()==date.getFullYear() && new Date(item.date).getMonth()==date.getMonth()).sort(function(a,b){
						return a.price - b.price
					})
					map[i] = list
				})
				return map
		    },
			dayList:function(){
				let list = [];
				let _that = this;
				let date = this.mode == "1" ? this.monthList[this.current] : this.mode == "2"? new Date(this.nowMonth.year+"-"+this.nowMonth.month+"-01"): new Date();
				if(this.monthList.length){
					list = this.getEveryDay(date)
					let num = list[0].date.getDay();
					_that.space = num;
				}
				return list
			},
			pickerData:function(){
				let now = new Date().getFullYear();
				//可选择前/后多少年
				let beforeYears = 0;
				let afterYears = 10;
				let list = []; //用来选择的数据
				let indexList = []; //默认选中的下标list
				let yearList = [];
				let monthList = ["01","02","03","04","05","06","07","08","09","10","11","12"];
				for(let i = now-beforeYears;i<=now+afterYears;i++){
					yearList.push(i.toString())
				}
				list.push(yearList)
				list.push(monthList)
				indexList.push(yearList.indexOf(""+this.nowMonth.year))  //我也不知道为什么 .toString()报错
				indexList.push(monthList.indexOf(""+this.nowMonth.month))
				let map = {
					indexList:indexList,
					list:list
				}
				return map;
			}
		},
		methods:{
			headItemTap(index){
				this.current = index
			},
			getDefaultData(d){ //设置初始值
				let list = this.datePrice.filter(item=>item.date==d);
				let obj={};
				if(list.length>0){      //逻辑依旧是保证没有团期（价格）的不能选中
					obj = {
						date:new Date(list[0].date),
						price:list[0].price
					}
				}else{
					obj = false
				}
				return obj;
			},
			isToday(date){
				return date.getFullYear()==this.today.getFullYear() && date.getMonth()==this.today.getMonth() && date.getDate() == this.today.getDate()
			},
			isBeforeToday(date){
				if(new Date(date).getTime()<new Date(this.getDateStr(new Date())).getTime()){
					return true;
				}
				return false;
			},
			getDateStr(date){   //当前年 月 日
				if(date){
					let year = date.getFullYear();
					let month =(date.getMonth() + 1).toString();
					let day = (date.getDate()).toString();
					if (month.length == 1) {
					  month = "0" + month;
					}
					if (day.length == 1) {
					  day = "0" + day;
					}
					let dateTime = year + "-" + month + "-" + day;
					return dateTime;
				}
			},
			getNextMonth(date,num) {  //获取下几个月 第一天
				let now = new Date(date);
				let ds = new Date(now.setDate(1))
					ds = new Date(ds.setMonth(ds.getMonth() + num));
				let year = ds.getFullYear();
				let mon = ds.getMonth() + 1;
				let day = ds.getDate();
				let s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + "01";
				let newDate = new Date(s)
				return newDate;
			},
			setMonthList(){
				let list = []
				let now = new Date() //以当前月份为第一个月   如果需要自定义开始月份修改这个就行
				for(let i=0;i<this.howManyMonth;i++){
					let month = this.getNextMonth(now,i)
					this.monthList.push(month)
				}
			},
			getEveryDay(date) { //获取月份每一天 date对象
				let _that = this;
				let dayArry = [];
				let d = date;
				let lastDay = new Date(d.getFullYear(),d.getMonth()+1 <10 ? "0"+(d.getMonth()+1):d.getMonth()+1,0).getDate()
				for (let k = 1; k <= lastDay; k++) {
					let price = 0;
					_that.datePrice.forEach(item=>{
						if(item.date == _that.getDateStr(new Date(date.getFullYear(),date.getMonth(),k))){
							price = item.price
						}
					})
					dayArry.push(
						{
							date:new Date(date.getFullYear(),date.getMonth(),k),
							price:price
						}
					);
				}
				return dayArry;
			},
			selectDate(data){ //选择日期
				//多选模式请在这改造
				/* this.$set(this.dayActive,"date",date) */
				if(data.price&&!this.isBeforeToday(data.date)){
					this.dayActive = {
						date:data.date,
						price:data.price
					}
					let map = this.getSelectData()
					this.$emit('changeDate',map)
				}
			},
			getSelectData(){ //获取最终结果
				let map = {
					date:this.getDateStr(this.dayActive.date),
					price:this.dayActive.price
				}
				return map;
			},
			bindPickerChange(e){
				//传统日历模式选择日期
				this.nowMonth.year = this.pickerData.list[0][e.detail.value[0]]
				this.nowMonth.month = this.pickerData.list[1][e.detail.value[1]]
			},
			reset(){
				//重置
				this.nowMonth.year = this.today.getFullYear()
				this.nowMonth.month = this.today.getMonth()+1
				this.dayActive = {}
				this.$emit('changeDate',{})
			}
		}
	}
</script>

<style lang="less" scoped>
	.calendar{
		font-size: 14px;
		color: #333333;
		border-left: 0;
		border-right: 0;
		//日历中用到的小字体
		.calen-text-small{
			font-size: 12px;
		}
		.calen-text-orange{
			color: #FFC900;
			font-size: 12px;
		}
		.calenHead-tradition{
			position: relative;
			vertical-align: bottom;
			height: 40px;
			line-height: 40px;
			background: #f8f8f8;
			.dateBox{
				line-height: 40px;
				display: inline-block;
				height: 40px;
				padding: 0 20px;
				 &:after{
					 border: 0;
				 }
				.font-big{
					font-size: 16px;
					margin-right: 5px;
				}
				.font-small{
					font-size: 10px;
				}
			}
			.reset{
				color: #4a77e6; 
				font-weight: 400;
				float: right;
				padding: 0 15px;
			}
		}
		.calenHead{
			display: flex;
			align-items: flex-start;
			white-space: nowrap;
    		border-bottom: 1px solid #e9e9e9;
			.headItem{
				display: inline-block;
				flex-shrink: 0;
				height: 46px;
				line-height: 46px;
				padding: 0 30px;
				border-bottom: 2px solid #fff;
				text-align: center;
				position: relative;
				&.active{
					border-bottom: 2px solid #FFC900;
				}
			}
		}
		.weekBar{
			border-bottom: 1px solid #F2F3F4;
			display: flex;
			align-items: flex-start;
			.weekItem{
				height: 34px;
				width: 14.28%;
				line-height: 34px;
				text-align: center;
				color: #3d3d3d;
			}
		}
		.dayBox{
			display: flex;
			width: 100%;
			flex: 1;
			flex-direction: row;
			flex-wrap: wrap;
			.day{
				width: 14.285%;
				flex-wrap: nowrap;
				height: 106upx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				&.active{
					background: #FFC900 !important;
					color: #FFFFFF !important;
					view{
						color: #FFFFFF !important;
					}
				}
				.beforeToday,.beforeToday+view{
					color: #ccc;
				}
				.today{
					color: #FFC900;
				}
				view{
					height: 30upx;
				}
			}
		}
	}
</style>
