<template>
	<view class="content bgfff">
		<view class="pd15">
			<view style="display:flex;margin-top:30px;justify-content: center;">
				<image src="/static/icons/logo.png" style="width:80px;height:80px;marign:0 auto;" mode="scaleToFill"></image>
			</view>
			<ai-input v-model="initParams.mobile" placeholder="请输入手机号" placeholderStyle="color:#999;"></ai-input>
			<ai-input v-model="initParams.password" type="password" placeholder="密码" placeholderStyle="color:#999;" style="margin-bottom:5px;"></ai-input>
			<view class="ocolor mb15">密码必须介于6到16个字符之间,包含字母和数字</view>
			<!-- <view class="input"><input :value="initParams.psword" placeholder="邀请码(选填)" placeholder-style="color:#999;"/></view> -->
			<ai-input v-model="initParams.smsCode" placeholder="请输入验证码" placeholderStyle="color:#999;">
				<text @click="getCode" class="codebtn">获取验证码</text>
			</ai-input>
			<view class="mb5">
				<checkbox-group @change="checkboxChange">
                    <label>
                        <checkbox :value="checkbox.value" :checked="checkbox.checked" color="#40a563" style="transform:scale(0.7)"/>
						<text>{{checkbox.name}}</text><text @tap="agreementFn" class="ml10">《用户注册协议》</text>
                    </label>
                </checkbox-group>
			</view>
			<view style="margin-top:35px;">
				<button type="warn" size="" class="mt25 font-size18" style="background:#FF8000;" hover-class="warn-hover" @tap="loginFn">注册</button>
			</view>
			<view style="margin-top:35px;">
				<navigator url="/pages/login/index" class="btnlogin">
					用户登录
				</navigator>
			</view>
		</view>
		<policy :dialogInfo="{title:'用户隐私保护政策'}" ref="policy"></policy>
		<agreement :dialogInfo="{title:'用户注册协议'}" ref="agreement"></agreement>
    </view>
</template>
<style lang="less" scoped>
	.top-title{
		color: #FF5000;
		margin-bottom: 15px;
		padding-bottom: 10px;
		border-bottom: 1px solid #DCDFE6;
	}
	.codebtn{
		width: 100px;
		display: flex;
		align-items: center;
		text-align: right;
		color: #FF5000;
	}
	.btnlogin{
		height: 46px;
		line-height: 46px;
		text-align: center;
		font-size: 16px;
		border: 1px solid #FF5000;
		color: #FF5000;
		border-radius: 5px;
		cursor: pointer;
	}
</style>
<script>
import policy from './components/policy.vue'
import agreement from './components/agreement.vue'
import copyright from '@/components/bottom-copyright.vue'
import loginTop from '@/components/login-top.vue'
export default {
	components:{policy,agreement,copyright,loginTop},
	onLoad() {
		
	},
	data() {
		return {
			checkbox:{
				value: 'true',
				name: '我已阅读并同意遵守',
				checked:false,
			},
			inputButton:{
				width: "105px",
				height: "35px",
				lineHeight: "35px",
				margin: "0",
				background:"#40a563"
			},
			initParams:{
				mobile:"",
				smsCode:"",
				password:"",
			},
		}
	},
	methods: {
		policyFn:function(){
			this.$refs['policy'].open();
		},
		agreementFn:function(){
			this.$refs['agreement'].open();
		},
		checkboxChange: function (e) {
			console.log(e)
			var values = e.detail.value;
			if(values.includes(this.checkbox.value)){
				this.$set(this.checkbox,'checked',true)
			}else{
				this.$set(this.checkbox,'checked',false)
			}
		},
		getCode:function(){
			//type:register login password
			if(this.initParams.mobile){
				this.$r.post('/sms/send?mobile='+this.initParams.mobile+"&type=register", {}, r => {
					console.log(r);
						uni.showToast({
						icon: 'none',
						title: '验证码发送成功，请注意查收！'
					});
				});
			}else{
				uni.showToast({
					icon: 'none',
					title: '请输入手机号！'
				});
			}
			
		},
		sure:function(){
			if(this.initParams.mobile==""){
				uni.showToast({
					icon: 'none',
					title: '请输入手机号！'
				});
				return;
			}else{
				let reg = /^1[345789]\d{9}$/
				if(!reg.test(this.initParams.mobile)){
					uni.showToast({
						icon: 'none',
						title: '请检查手机号是否正确！'
					});
					return;
				}
			}
			if(this.initParams.smsCode==""){
				uni.showToast({
					icon: 'none',
					title: '请输入验证码！'
				});
				return;
			}
			if(this.initParams.password==""){
				uni.showToast({
					icon: 'none',
					title: '请输入密码！'
				});
				return;
			}else{
				let regPos = /^[A-Za-z0-9]{6,20}$/; 
				if(!(/[a-zA-Z]/.test(this.initParams.password) && /[0-9]/.test(this.initParams.password) && 
				this.initParams.password.length>5 && this.initParams.password.length<17)){
					uni.showToast({
						icon: 'none',
						title: '密码格式错误！'
					});
					return;
				}
			}
			if(this.checkbox.checked){
				this.$r.post('/manager/register', this.initParams, r => {
					console.log(r);
					let _this=this;
					uni.showToast({title: '注册成功！'});
					uni.setStorage({
						key: "token",
						data: r.token,
						success: function () {
							uni.redirectTo({url: "/pages/myCenter/index"});
							_this.store.dispatch('setStatus',true);
						}
					});
				});
			}else{
				uni.showToast({
					icon: 'none',
					title: '请阅读协议并确认！'
				});
			}
			
		}
	}
}
</script>

