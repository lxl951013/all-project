<template>
<div>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><img class="swiper-img" src="images/cat.jpg" /></div>
			<div class="swiper-slide"><img class="swiper-img" src="images/cat1.jpg" /></div>
			<div class="swiper-slide"><img class="swiper-img" src="images/cat2.jpg" /></div>
			<div class="swiper-slide"><img class="swiper-img" src="images/cat.jpg" /></div>
			<div class="swiper-slide"><img class="swiper-img" src="images/cat1.jpg" /></div>
			<div class="swiper-slide"><img class="swiper-img" src="images/cat2.jpg" /></div>
			<div class="swiper-slide"><img class="swiper-img" src="images/cat.jpg" /></div>
			<div class="swiper-slide"><img class="swiper-img" src="images/cat1.jpg" /></div>
			<div class="swiper-slide"><img class="swiper-img" src="images/cat2.jpg" /></div>
			<div class="swiper-slide"><img class="swiper-img" src="images/cat.jpg" /></div>
		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	</div>
</div>
</template>

<script>
	export default {
		data:function(){
			return {
				
			}
		},
		mounted(){
			var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
		}
		
	}
</script>

<style>

</style>