<template>
	<view class="">
		<web-view v-if="level==1" :webview-styles="webviewStyles" :src="gameUrlc+url"></web-view>
		<web-view v-if="level==2" :webview-styles="webviewStyles" :src="gameUrlz+url"></web-view>
		<web-view v-if="level==3" :webview-styles="webviewStyles" :src="gameUrlg+url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gameUrlc: this.$globalVariable.gameUrlc,
				gameUrlz: this.$globalVariable.gameUrlz,
				gameUrlg: this.$globalVariable.gameUrlg,
				url:'',
				token: '',
				play_id: '',
				level: '',
				timestamp:'',//时间戳
				webviewStyles: {
					progress: {
						color: '#F33'
					}
				}
			}
		},
		onLoad(options) {
			// 处理IOS页面没回到顶部问题
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			})
			this.token = options.token;
			this.play_id = options.play_id;
			this.level = options.level;
			this.url ='?token='+this.token+'&play_id='+this.play_id+'&versionNum='+this.$globalVariable.versionNum;
		}
	}
</script>

<style>
</style>
