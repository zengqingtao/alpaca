<template>
	<view class="uni-container">
		<myheader></myheader>
		<!-- 场次信息列表 -->
		<view class="site-num-list" v-if="!isShowNoteList">
			<navigator url="alpaca" class="site-num-item" v-for="n in 3" :key="n">
				<image class="item-img" src="../../static/index/primary-chart.png"></image>
				<view class="item-right">
					<view class="site-class">初级场 2 倍</view>
					<view class="games-limit">拥有一颗玉米粒即可参加</view>
					<view class="multiple-box">
						<view class="multiple-box-num">2</view>
						<view class="multiple-box-font">倍</view>
					</view>
					<view class="to-join">去参加</view>
					<view class="to-join matching">比赛中</view>
					<image class="item-right-img" src="../../static/index/joined.png"></image>
				</view>
			</navigator>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<view>羊驼大赛</view>
			<view class="crossbar-box">
				<view class="crossbar"></view>
			</view>
			<view>到底啦!</view>
		</view>
		<!-- 玉米粒不足(模态弹框) -->
		<view class="cornNum-notEnough" v-if="!isclose">
			<view class="modal-content">
				<image class="headportrait" src="../../static/modal/corn-headportrait.png"></image>
				<image @click="close" class="close" src="../../static/modal/close.png"></image>
				<view>
					<view class="modal-title" v-if="false">
						<view class="modal-title-distance">当前的玉米粒不足100</view>
						<view>无法进入初级场</view>
					</view>
					<view class="modal-title" v-if="false">
						<view class="modal-title-distance">比赛进行中</view>
						<view>结束后自动发放下注简历</view>
					</view>
					<view class="modal-title">
						<view class="modal-title-distance">休赛中无法下注</view>
					</view>
					<view @click="close" class="confirm-box">
						<view class="confirm">确 定</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myheader from "../../components/header.vue"
	export default {
		data() {
			return {
				isShowNoteList: false,
				isclose: true,
				token: 0, //传递过来的用户信息
			}
		},
		components: {
			myheader
		},
		onLoad() {
			console.log("window.location.href:", window.location.href);
			this.splite();
			console.log("$globalVariable:",this.$globalVariable.hostUrl);
			this.getUserData();
		},
		methods: {
			// 截取url的参数
			splite() {
				var url = window.location.href;
				var query = url.split("?")[1];
				var token = query.split("=")[1];
				this.token = token;
				console.log("this.token:", this.token);
			},
			// 关闭
			close() {
				this.isclose = false
			},
			// 请求获取可用玉米粒和竞猜
			getUserData() {
				uni.request({
					url: '/Alpaca/getUserData', //仅为示例，并非真实接口地址。
					method:"POST",
					data: {
						token: this.token
					},
					success: (res) => {
						console.log("res:",res);
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	// 场次信息列表
	.site-num-list {
		margin: 50upx 20upx 0upx 20upx;

		.site-num-item {
			width: 100%;
			height: 228upx;
			box-sizing: border-box;
			box-shadow: 0px 6px 13px 0px rgba(82, 82, 82, 0.13);
			border-radius: 16upx;
			display: flex;
			flex-wrap: nowrap;
			box-sizing: border-box;
			margin-bottom: 32upx;

			.item-img {
				width: 220upx;
				height: 100%;
				border-radius: 16upx 0 0 16upx;
			}

			// item右边的大盒子
			.item-right {
				width: 482upx;
				padding-left: 33upx;
				position: relative;

				// 场次信息多少倍
				.site-class {
					margin-top: 16upx;
					font-size: 36upx;
					font-weight: bold;
					color: rgba(34, 34, 34, 1);
				}

				// 玉米粒有多少即可参加
				.games-limit {
					margin-top: 11.5upx;
					font-size: 26upx;
					color: rgba(153, 153, 153, 1);
				}

				// 多少倍的大盒子
				.multiple-box {
					display: flex;
					align-items: baseline;
					margin-top: 16upx;

					// 多少
					.multiple-box-num {
						font-size: 60upx;
						font-weight: bold;
						color: #f00
					}

					// 倍
					.multiple-box-font {
						padding-left: 8upx;
						font-size: 36upx;
						color: rgba(34, 34, 34, 1);
					}
				}

				// 去参加按钮
				.to-join {
					position: absolute;
					right: 24upx;
					bottom: 29upx;
					font-size: 26upx;
					width: 148upx;
					height: 55upx;
					color: #fff;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 28upx;
					background: linear-gradient(264deg, rgba(255, 132, 65, 1) 0%, rgba(255, 203, 64, 1) 100%);
				}

				// 比赛中
				.matching {
					color: rgba(153, 153, 153, 1);
					border: 1upx solid rgba(191, 191, 191, 1);
					background: #fff;
				}

				// 已参加
				.item-right-img {
					width: 88upx;
					height: 88upx;
					position: absolute;
					top: 0;
					right: 0;
				}
			}
		}
	}

	// 底部
	.footer {
		padding: 59upx 0 20upx 0;
		text-align: center;
		font-size: 24upx;
		color: rgba(178, 178, 178, 1);

		.crossbar-box {
			display: flex;
			justify-content: center;

			.crossbar {
				margin: 15upx 0;
				width: 90upx;
				height: 2upx;
				background: rgba(178, 178, 178, 1);
			}
		}
	}

	// 玉米粒不足
	.cornNum-notEnough {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.89);

		.modal-content {
			width: 604upx;
			height: 503upx;
			position: relative;
			background-color: #fff;
			border-radius: 32upx;
			// display: flex;
			// justify-content: center;

			// 头像
			.headportrait {
				width: 198upx;
				height: 198upx;
				position: absolute;
				top: -62upx;
				left: 50%;
				margin-left: -99upx;
			}

			// 关闭"X"
			.close {
				width: 36upx;
				height: 36upx;
				position: absolute;
				top: 37upx;
				right: 37upx;
			}

			//模态框标题
			.modal-title {
				font-size: 36upx;
				font-weight: bold;
				margin-top: 180upx;
				text-align: center;

				.modal-title-distance {
					padding-bottom: 25upx;
				}
			}

			// 确定按钮
			.confirm-box {
				display: flex;
				justify-content: center;
				align-items: center;

				.confirm {
					width: 320upx;
					height: 98upx;
					line-height: 98upx;
					background: linear-gradient(84deg, rgba(255, 203, 64, 1) 0%, rgba(255, 132, 65, 1) 100%);
					border-radius: 47upx;
					color: #fff;
					font-size: 36upx;
					text-align: center;
					margin-top: 45upx;
				}
			}
		}
	}
</style>
