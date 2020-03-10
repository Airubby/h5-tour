<template>
    <view class="content bgf5">
        <nav-bar title="账号设置"></nav-bar>
        <view class="top bgfff">
            <image src="/static/images/show.png" style="width:80px;height:80px;border-radius:50%;" mode="scaleToFill"></image>
            <view class="top-info">更换头像</view>
        </view>
        <view class="bgfff">
            <view class="pd12">
                <ai-input v-model="initParams.phone" placeholder="请输入手机号" placeholderStyle="color:#999;"></ai-input>
                <ai-input v-model="initParams.username" placeholder="昵称" placeholderStyle="color:#999;"></ai-input>
                <ai-input v-model="initParams.addr" placeholder="地址" placeholderStyle="color:#999;"></ai-input>
            </view>
            <view class="bg10"></view>
            <view class="btn">保存修改</view>
            <view class="bg10"></view>
            <view class="btn">退出登录</view>
        </view>
    </view>
</template>

<script>
export default {
    components: {},
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            initParams:{
                phone:"",
                username:"",
                addr:"",
            }
        }
    },
	methods: {
        
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    .top{
        text-align: center;
        padding-top: 15px;
        .top-info{
            color: #FF5000;
            margin-top: 5px;
        }
    }
    .btn{
        text-align: center;
        height: 40px;
        line-height: 40px;
        background: #fff;
        cursor: pointer;
    }
</style>
