<template>
    <radio-group @change="radioChange" class="radio-group" ref="radio">
        <label v-for="(item, index) in items" :key="item[params.value]" class="radio-label">
            <view class="radio-group-btn">
                <radio :value="item[params.value].toString()" :checked="item[params.value].toString() === value.toString()" />
            </view>
            <view class="radio-group-text" :class="{'radio-active':item[params.value].toString() === value.toString()}">{{item[params.label]}}</view>
        </label>
    </radio-group>
</template>

<script>
    export default {
        props: {
            value: {
				type: [String,Number],
				default: ""
			},
			params:{
				type:Object,
				default(){
					return {
						label: 'label',
						value: 'value',
					}
				}
			},
			items: {
				type: Array,
				default () {
					return [];
				}
			},
        },
        mounted(){
			// this.$refs.radio.style.setProperty("--color",'#ff0000');
        },  
        computed: {
            
        },
        data() {
			return {
				
			}
		},
        methods: {
            radioChange(evt) {
                this.$emit('input', evt.target.value);
			}, 
        }
    }
</script>
<style scoped lang="less">
	.radio-group{
		display:flex;
		flex-wrap:wrap;
		--color:#FFDD00;
	}
	.radio-label{
		margin-right:10px;
		margin-bottom: 10px;
	}
	.radio-group-btn{
		display:none;
	}
	.radio-group-text{
		border: 1px solid #f7f7f7;
		background:#f7f7f7; 
		padding: 3px 10px;
		border-radius: 20px;
		font-size: 14px;
		cursor: pointer;
		color: #292C33;
	}
	.radio-group-text:hover{
		border-color: var(--color);
		color: #fff;
		background-image: linear-gradient(90deg,#ff9300,#f35);
	}
	.radio-active.radio-group-text{
		border-color: #fff;
		background-image: linear-gradient(90deg,#ff9300,#f35);
		color: #fff;
		font-weight: bold;
	}
	.radio-active.radio-group-text:hover{
		color: #fff;
		background-image: linear-gradient(90deg,#ff9300,#f35);
	}
</style>
