<template>
    <view class="content">
        <view class="pd12 top">
            <image src="/static/images/show.png" class="img" mode="scaleToFill"></image>
            <text class="top-title">[昆明送签]马来西亚签证沙巴自由行拒签退款全国办理</text>
        </view>
        <view class="bgfff faqs-content">
            <ai-textarea style="border:none;height:200px;" 
            v-model="content" placeholderStyle="color:#999;" :placeholder="placeholder" :autoHeight="false" :maxlength="40"></ai-textarea>
            <view class="btn">
                <view class="btn-con">发布</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    components: {},
    computed:{
        
    },
    created() {
        
    },
    mounted() {
    },
    data(){
        return{
            placeholder:"请写下您的问题，4-40字",
            content:"",
        }
    },
	methods: {
        backTo:function(){
            uni.navigateBack();
        },
        submit:function(){
            if(this.content===""){
                uni.showToast({
                    icon: 'none',
                    title: '请填写回复信息！'
                });
            }
        }
	},
    watch: {
        
    },
}
</script>
<style lang="less" scoped>
    .top{
        display: flex;
        align-items: center;
        height: 52px;
        .img{
            width: 28px;
            height: 28px;
            border-radius: 3px;
            margin-right: 3px;
        }
        .top-title{
            width: calc(100% - 40px);
            display: inline-block;
            overflow: hidden;
            font-weight: bold;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: 5px;
        }
    }
    .faqs-content{
        width: 100%;
        height: calc(100% - 52px);
    }
    .btn{
        border-bottom: 2px solid #F2F2F2;
        padding: 0 15px;
        display: flex;
        justify-content: flex-end;
        .btn-con{
            color: #fff;
            background: #D4D4D4;
            padding: 5px 10px;
            border-radius: 3px;
            margin-bottom: 10px;
        }
    }
</style>
