import searchSort from '@/pages/public/components/searchSort.vue'
export default {
    components: {
        searchSort
    },
    data(){
        return{
            searchType:false,
            imgmode:'widthFix',
        }
    },
	methods: {
        backInfo:function(){
            this.searchType=!this.searchType;
            if(this.searchType){
                this.imgmode='scaleToFill';
            }else{
                this.imgmode='widthFix';
            }
        }
	},
    
}
