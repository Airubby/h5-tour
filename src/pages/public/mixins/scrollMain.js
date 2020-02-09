export default {
    onLoad(){
        /* 设置当前滚动容器的高，若非窗口的高度，请自行修改 */
        uni.getSystemInfo({
            success:(res)=>{
                this.scrollHeight=`${res.windowHeight-118}px`;
            }
        });
    },
    data(){
        return{
            scrollHeight:'500px'
        }
    },
	methods: {
        
	},
    
}
