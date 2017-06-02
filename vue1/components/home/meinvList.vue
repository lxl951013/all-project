<template>
	<div>
		<div class="weui-panel weui-panel_access" :style="{'marginTop':'56px'}">
			<!--<div class="weui-panel__hd">图文组合列表</div>-->
			<div class="weui-panel__bd">
				<a v-for="(meinv,index) in meinvList" @click="goDetails(meinv.title)" class="weui-media-box weui-media-box_appmsg" href="#/homeDetail">
					<div class="weui-media-box__hd">
						<img class="weui-media-box__thumb" :src="meinv.picUrl"  alt="">
					</div>
					<div class="weui-media-box__bd">
						<h4 class="weui-media-box__title" v-text="meinv.title"></h4>
						<p class="weui-media-box__desc" v-text="meinv.description"></p>
					</div>
				</a>
			</div>
			<div class="weui-panel__ft">
				<a @click="getMeinv()" class="weui-cell weui-cell_access weui-cell_link">
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
				meinvList: [],
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
			getMeinv() {
				this.isShowLoading += 1
				$.ajax({
					type: "GET",
					url: "http://localhost/vueproject/public/meinv.php",
					data: {
						page: this.page
					},
					dataType: "json",
					success: function(data) {
						this.isShowLoading -= 1;
//						console.log(data);
						this.meinvList = this.meinvList.concat(data.showapi_res_body.newslist);
//						console.log(this.meinvList);
					}.bind(this)
				})
			},
			goDetails(channelId){							
				this.$store.commit('changeMeinvId',channelId);
			}
		},
		mounted() {
			this.getMeinv();
		}
	}
</script>

<style></style>