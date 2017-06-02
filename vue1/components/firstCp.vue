<template>
	<div>
		<swiperCp></swiperCp>
		<newListCp></newListCp>
	</div>
</template>

<script>
	import swiperCp from "./index/swiper.vue";
	import newListCp from "./index/newsList.vue";
	
	export default {
		data:function(){
			return {
				
			}
		},
		components:{
			swiperCp,
			newListCp
			
		}
	}
</script>
   
<style>
</style>