<template>
    <view class="content bgfff">
        <view class="discuss">
            <view class="discuss-title">
                <view @tap="backTo()">
                    取消
                </view>
                <view @tap="submit()" :class="{'color999':content===''}">
                    发送
                </view>
            </view>
            <view class="discuss-content">
                <ai-textarea style="border:none;height:100%;" v-model="content" placeholderStyle="color:#999;" :placeholder="placeholder"></ai-textarea>
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
            placeholder:"回复楼主",
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
    .discuss{
        width: 100%;
        height: 100%;
    }
    .discuss-content{
        width: 100%;
        height: calc(100% - 50px);
    }
</style>
