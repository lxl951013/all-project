<template>
	<div>
		<div class="weui-panel weui-panel_access">
			<!--<div class="weui-panel__hd">图文组合列表</div>-->
			<div class="weui-panel__bd">
				<a v-for="(news,index) in newss" @click="goDetails(news.id)" class="weui-media-box weui-media-box_appmsg" href="#/details">
					<div class="weui-media-box__hd">
						<img class="weui-media-box__thumb" :src="news.imageurls[0]?news.imageurls[0].url:''">
					</div>
					<div class="weui-media-box__bd">
						<h4 class="weui-media-box__title" v-text="news.title"></h4>
						<p class="weui-media-box__desc" v-text="news.desc"></p>
					</div>
				</a>
			</div>
			<div class="weui-panel__ft">
				<a @click="getNews()" class="weui-cell weui-cell_access weui-cell_link">
					<div class="weui-cell__bd">查看更多</div>
					<span class="weui-cell__ft"></span>
				</a>
			</div>
		</div>
		<div id="loadingToast" :style="{display:isShowLoading?'block':'none'}">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-loading weui-icon_toast"></i>
				<p class="weui-toast__content">数据加载中</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				newss: [],
				page: 1,
				isShowLoading: 0,
				NewsId:'',
			}
		},
		//方法	
		methods: {
			getNews() {
				this.isShowLoading += 1;
				$.ajax({
					type: "GET",
				    url: "http://1.vueproject.applinzi.com/public/news.php",
					data: {
						page: this.page
					},
					dataType: "json",
					success: function(data) {
						this.isShowLoading -= 1;
						console.log(data);
						this.newss = this.newss.concat(data.showapi_res_body.pagebean.contentlist);
//						console.log(this.newss);						
					}.bind(this)
				});
			},
			goDetails(channelId){							
				this.$store.commit('changeNewsId',channelId)
			}
		},
		//初始化
		mounted() {
			this.getNews();
		},
	}
</script>

<style></style>