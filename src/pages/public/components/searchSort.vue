<template>
    <view class="public-sort">
        <view :class="{'active':type=='1'}" @tap="searchChange('1')">综合</view>
        <view :class="{'active':type=='2'}" @tap="searchChange('2')">销量</view>
        <view :class="{'active':type=='3'}" @tap="searchChange('3')">新品</view>
        <view class="price" :class="{'active':type=='4'}" @tap="searchChange('4')">
            <view>价格</view>
            <view class="price-icon">
                <view class="ai-icon icon-search-up" :style="{ color: type=='4'&&priceFlag?'#FFC900':'#999' }" />
                <view class="ai-icon icon-search-down" :style="{ color: type=='4'&&!priceFlag?'#FFC900':'#999' }" />
            </view>
        </view>
        <view @tap="changeStyle()" class=""><image src="/static/icons/search-style.png" style="width:16px;height:16px;" mode="widthFix"></image></view>
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
            type:'1',
            priceFlag:true,
        }
    },
	methods: {
        searchChange:function(info){
            this.type=info;
            if(info==='4'){
                this.priceFlag=!this.priceFlag;
            }
        },
        changeStyle:function(){
            this.$emit("backInfo")
        }
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    @font-face {
        font-family: 'aiicons';
        src: url(data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAAIkAA0AAAAABdwAAAHPAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GYACCXhEICmhkCxAAATYCJAMaBCAFgxsHTxvhBMieg01ZnhVxzrEn32LRVX7dnyKe///9aPu8O2IWJ2rEEouMJ7PVLWo3y2RCnlLQLJbJH/6ptb1/d0Cp22grkemiTdxTpyYKkjn/+4/n/5p8Vd4YSUl+pFGAX/Qw1jjA6Z4PcM+rtHBGA/SB0XSbMvAVLz3EoyMifq+Ceju7CYGP77MD8O1c5N3CCOagiegTPWiouhdStLctHtPq/LObQRInE9YeoT+p/W7fkUIAAu4NQj12hcBZsWBF4gAMGdA0sfEn3UCg/pzpvs/3KjEEIIr0kQLS0AAAoQc+EekYB/1gDL0YxxJADyAIU1VcEr3TaPXbTcB3h8nt60GAn7Mv343HD/wfGO5Rs9OgtCNgQAOhGr9cDygCAOjrAeQUQEOPCEG/EtAAADDmA4HoN0Gg6bdJoPQ7QqBHv7MEeg27S6BPvxcEhiz5K+kZFGME1LAFqLAtqAc7pvaaM1H7jHl09JA9P1tzZ0dnZyfcvHxeCJvhuKW1p4OpGx6OzUPvjC3vaUs3d9u+EVgeR8piwfoxwFG5/WCsLZ2mmKcelhbNmS+jDKwOLO6xYzssKM/PXy5cAhq9p580LaXSk96+64fvZRMyt05bT4kr+Zz3dQAAAAA=) format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    .ai-icon {
		font-family: aiicons;
		font-weight: normal;
		font-style: normal;
		line-height: 1;
		display: inline-block;
		text-decoration: none;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        color: #999;
    }
    .icon-search-down:before {
        content: "\e900";
    }
    .icon-search-up:before {
        content: "\e901";
    }

    .public-sort{
        width: 100%;
        height: 48px;
        line-height: 48px;
        display: flex;
        font-size: 16px;
        justify-content: space-around;
        .active{
            color: #FFC900;
        }
        .price{
            display: flex;
            .price-icon{
                position: relative;
                .ai-icon{
                    position: absolute;
                }
                .icon-search-up{
                    top:13px;
                }
                .icon-search-down{
                    bottom: 13px;
                }
            }
        }
    }
</style>
