<template>
	<div>
		<div class="weui-panel weui-panel_access" :style="{'marginTop':'56px'}">
			<!--<div class="weui-panel__hd">图文组合列表</div>-->
			<div class="weui-panel__bd">
				<a v-for="(yules,index) in yuleList" @click="goDetails(yules.title)" href="#/yuleDetail" class="weui-media-box weui-media-box_appmsg">
					<div class="weui-media-box__hd">
						<img class="weui-media-box__thumb" :src="yules.picUrl"  alt="">
					</div>
					<div class="weui-media-box__bd">
						<h4 class="weui-media-box__title" v-text="yules.title"></h4>
						<p class="weui-media-box__desc" v-text="yules.description"></p>
					</div>
				</a>
			</div>
			<div class="weui-panel__ft">
				<a @click="getYule()" class="weui-cell weui-cell_access weui-cell_link">
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
				yuleList: [],
				page: 1,
				isShowLoading: 0,
			}
		},
		//		computed: {
		//			searchName: function() {
		////				return this.$store.getters.getSearchName
		//              console.log(this.$store.getters.getSearchName)
		//			}
		//		},
		methods: {
			getYule() {
				this.isShowLoading += 1
				$.ajax({
					type: "GET",
					url: "http://1.vueproject.applinzi.com/public/yule.php",
					data: {
						page: this.page
					},
					dataType: "json",
					success: function(data) {
						this.isShowLoading -= 1;
//						console.log(data);
						this.yuleList = this.yuleList.concat(data.showapi_res_body.newslist);
//						console.log(this.yuleList);
					}.bind(this)
				})
			},
			goDetails(channelId){							
				this.$store.commit('changeYuleId',channelId);
			}
		},
		mounted() {
			this.getYule();
		}
	}
</script>

<style></style>