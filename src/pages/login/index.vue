<template>
	<view class="content bgfff">
		<view class="pd15">
			<view style="display:flex;margin-top:30px;justify-content: center;">
				<image src="/static/icons/logo.png" style="width:80px;height:80px;marign:0 auto;" mode="scaleToFill"></image>
			</view>
			<view style="margin-top: 30px;">
				<ai-input v-model="initParams.username" placeholder="请输入手机号" placeholderStyle="color:#999;"></ai-input>
				<ai-input v-if="current" v-model="initParams.password" placeholder="请输入密码" type="password" placeholderStyle="color:#999;"></ai-input>
				<ai-input v-if="!current" v-model="initParams.smsCode" placeholder="请输入验证码" placeholderStyle="color:#999;">
					<text @click="getCode" class="codebtn">获取验证码</text>
				</ai-input>
				<view class="flex">
					<view @tap="changeLogin">{{info}}</view>
					<navigator url="/pages/register/index">
						免费注册
					</navigator>
				</view>
				<view style="margin-top:40px;">
					<button type="warn" size="" class="mt25 font-size18" style="background:#FF8000;" hover-class="warn-hover" @tap="loginFn">登录</button>
				</view>
			</view>
		</view>
    </view>
</template>
<style lang="less" scoped>
	.codebtn{
		width: 100px;
		display: flex;
		align-items: center;
		text-align: right;
		color: #FF5000;
	}
</style>
<script>
import store from '@/store/index'
export default {
	components:{},
	onLoad() {
		
	},
	data() {
		return {
			current:true,
			info:"短信验证码登录",
			initParams:{
				password: "",
  				username: "",
				smsCode:''
			},
		}
	},
	methods: {
		changeLogin:function(){
			this.current=!this.current;
			if(this.current){
				this.info="短信验证码登录";
			}else{
				this.info="账号密码登录";
			}
		},
		getCode:function(){
			console.log("获取验证码")
			//type:register login password
			if(this.initParams.username){
				console.log(this.initParams)
				this.$r.post('/sms/send?mobile='+this.initParams.username+"&type=login", {}, r => {
					console.log(r);
					uni.showToast({
						icon: 'none',
						title: '验证码发送成功，请注意查收！'
					});
				});
			}else{
				this.$notify.warning("请填写手机号");
			}
		},
		onClickItem(index) {
			if (this.current !== index) {
				this.current = index;
			}
		},
		loginFn:function(){
			console.log(this.initParams)
			if(this.initParams.username==""){
				uni.showToast({
					icon: 'none',
					title: '请输入手机号！'
				});
				return;
			}else{
				let reg = /^1[345789]\d{9}$/
				if(!reg.test(this.initParams.username)){
					uni.showToast({
						icon: 'none',
						title: '请检查手机号是否正确！'
					});
					return;
				}
			}
			if(this.current==0){
				if(this.initParams.password==""){
					uni.showToast({
						icon: 'none',
						title: '请输入密码！'
					});
					return;
				}
			}else{
				if(this.initParams.smsCode==""){
					uni.showToast({
						icon: 'none',
						title: '请输入验证码！'
					});
					return;
				}
			}
			console.log(this.$store.getters.ajaxUrl)
			this.$r.post("/auth/login",this.initParams,r=>{
				console.log(r)
				if(r.user.status==1){
					uni.showToast({title: '登录成功！'});
					uni.setStorage({
						key: "token",
						data: r.token,
						success: function () {
							store.dispatch('setStatus',true);
							uni.redirectTo({url: "/pages/myCenter/index"});
						}
					});
				}else{
					uni.showToast({title: '账号不存在！'});
				}
				
			});
			
		}
	}
}
</script>

