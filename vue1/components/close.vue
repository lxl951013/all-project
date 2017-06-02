<template>
	<div>
		<mu-appbar title="Title" :class="{'closeShow':isclose}" >
			<mu-icon-button icon="close" slot="left" @click="goImdex()"/>
			<mu-icon-menu icon="more_vert" slot="right">
				<mu-menu-item title="分享" />
				<mu-menu-item title="另存" />
				<mu-menu-item title="裁剪 " />
			</mu-icon-menu>
		</mu-appbar>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				isclose:true
			}
		},
		methods:{
			goImdex(){
				window.history.back()
			}
		}

	}
</script>

<style>

</style>