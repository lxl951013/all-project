<template>
	<div>
		<closeCp></closeCp>
		<div class="page article js_show" :class="{'box':isIndex}">
			<div class="page__bd">
				<article class="weui-article">
					<h1 v-text="xiangqing.title"></h1>
					<section>
						<h2 v-text="xiangqing.channelName"></h2>
						<section>
							<h3 v-text="xiangqing.pubDate"></h3>
							<p v-text="xiangqing.desc"></p>
							<p>
								<img :src="xiangqing.imageurls?xiangqing.imageurls[0].url:''" alt="">
								<!--<img :src="xiangqing.imageurls[1]?xiangqing.imageurls[1].url:''" alt="">-->
								
							</p>
						</section>
					</section>
				</article>
			</div>
			<div class="weui-gallery" >
				<span class="weui-gallery__img" ></span>
				<div class="weui-gallery__opr">
					<a href="javascript:"  class="weui-gallery__del">

						<p style="color: white">隐藏</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import closeCp from "./close.vue";
	
	export default {
		data:function(){
			return {
                isIndex:true,
				xiangqing:[],
				page:1,
			}
		},
		//获取meinvList传过来的id
	    computed:{
          JunshiId:function(){
           	return this.$store.state.JunshiId;
          }
	    },
	    methods:{ 

           showId(){
           	  console.log(this.JunshiId);
           	 $.ajax({
					type: "GET",
					url: "http://localhost/vueproject/public/junshi.php",
					data: {
						page: this.page
					},
					dataType: "json",
					success: function(data) {
//						this.isShowLoading -= 1;
//						console.log(data);
						this.xiangqing = this.xiangqing.concat(data.showapi_res_body.pagebean.contentlist);
//						console.log(this.xiangqing);

                       for(var i=0;i<this.xiangqing.length;i++){
							if(this.JunshiId==this.xiangqing[i].id){
								this.xiangqing=this.xiangqing[i]
//								console.log(this.xiangqing)
							}
						}
					}.bind(this)
				})
           }
	    },
        //初始化
		mounted() {
			this.showId();
//			this.getId();
		},
		components:{
			closeCp,
			
		}
		
	}
</script>

<style></style>