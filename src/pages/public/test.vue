<template>
    <view class="fixedcontent">
       
    </view>
</template>

<script>

export default {
    components:{
        
    },
    mounted(){
        
    },
    onPageScroll: function(e) {
       
    },
    computed:{
        
    },
    data(){
        return{
            
        }
    },
	methods: {
        
			
	},
    watch: {
        
    },
    
}
</script>
<style lang="less" scoped>
    
.fixedcontent{
    width: 100%;
}
.price{
        color: #ff5000;
        font-size: 18px;
    }
    .old-price{
        font-size: 12px;
        color: #999;
        margin-top: 5px;
        .num{
            margin-left: 5px;
            text-decoration: line-through;
        }
    }
    .title{
        color: #333;
        font-size: 16px;
        font-weight: bold;
    }
    .top-info{
        color: #999;
        font-size: 12px;
    }
    .top-data{
        color: #666;
        margin: 15px 0 10px 0;
        .top-data-left{
            display: flex;
            width: calc(100% - 20px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .logo{
                background: #FFCC03;
                font-weight: bold;
                color: #333;
                border-radius: 3px;
                padding: 1px 3px;
            }
        }
        .data-title{
            color: #999;
            margin-right: 10px;
            min-width: 28px;
        }
    }
    .public-title{
        display: flex;
        color: #333;
        justify-content: space-between;
        padding-bottom: 15px;
        .show-all{
            color: #ff5000;
            font-size: 12px;
            display: flex;
            align-items: center;
            .img{
                width:6px;
                height:11px;
                margin-left: 5px;
            }
        }
    }
    .show-title{
        font-weight: bold;
    }
    .discuss{
        border-bottom: 1px solid #f6f6f6;
        padding-bottom: 15px;
        margin-bottom: 15px;
        .discuss-user{
            display: flex;
            align-items: center;
            color: #999;
            margin-bottom: 10px;
            .img{
                width: 24px;
                height: 24px;
                margin-right: 5px;
                border-radius: 50%;
            }
        }
    }
    .faqs-con{
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        .img{
            width: 14px;
            height: 14px;
            margin-right: 5px;
        }
    }
    .company{
        align-items: center;
        .more-info{
            color: #ff5000;
            margin: 0 4px;
        }
        .img-info{
            display: flex;
            align-items: center;
        }
        .company-info{
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
    }
    .lightspot{
        display: flex;
        margin-bottom: 12px;
        .img{
            width: 13px;
            height: 12px;
            margin: 3px 5px 0 0;
            display: flex;
        }
    }
    .explain{
        display: flex;
        border-top: 1px solid #f6f6f6;
        padding: 15px 0;
        .explain-title{
            width: 88px;
            color: #999;
        }
        .explain-con{
            width: calc(100% - 88px);
        }
    }
    .public-scroll-navbar-con{
        border-bottom: 1px solid #f6f6f6;
        margin-bottom: 15px;
        .public-top-nav-list.active{
            border-bottom: 2px solid #FFC900;
            padding-bottom: 5px;
        }
    }
    .day-public{
        position: relative;
        padding-left: 18px;
        padding-bottom: 20px;
        .day-title{
            margin-bottom: 12px;
        }
        &:before{
            content: "";
            position: absolute;
            left: 0;
            top: .48rem;
            width: 7px;
            height: 7px;
            background: #ffc900;
            border-radius: 50%;
            box-shadow: 0 0 1px #fff;
        }
        &:after{
            content: "";
            position: absolute;
            top: .69333rem;
            left: 3px;
            height: 100%;
            border-left: 1px dashed #ccc;
        }
        .day-con{
            background: #FFFEF7;
            font-size: 12px;
        }
        .day-img{
            position: relative;
            .img{
                width: 100%;
                height: 100%;
            }
            .img-info{
                position: absolute;
                right: 0;
                top: 0;
                background: rgba(0,0,0,.7);
                color: #fff;
                font-size: 12px;
                padding: 1px 3px;
            }
        }
    }
    
</style>
