<template>
	<view class="uni-container">
		<myheader></myheader>
		<view class="top-box">
			<image class="top-box-img" src="../../static/gues/banned.png"></image>
			<!-- 左边的可用玉米-竞赛 -->
			<view class="left-box">
				<view class="left-box-corn">
					<view>可用玉米：15</view>
					<image class="left-box-img" src="../../static/index/corn-grain.png"></image>
				</view>
				<view>竞猜：10</view>
			</view>
			<!-- 右边的竞猜记录 -->
			<navigator class="right-box" url="guesRecord">
				<view class="">
					竞猜记录
				</view>
				<view class="iconfont icon-btn_gengduo_xiangyoujiantoux"></view>
			</navigator>
		</view>
		<!-- tab -->
		<view class="top-tabbar">
			<view class="top-tabbar-item">
				<image class="top-tabbar-img" src="../../static/index/corn.png"></image>
				<view class="top-tabbar-font">玉米商城</view>
			</view>
			<view class="top-tabbar-item">
				<image class="top-tabbar-img" src="../../static/index/gues.png"></image>
				<view class="top-tabbar-font">我的竞猜</view>
			</view>
			<view class="top-tabbar-item">
				<image class="top-tabbar-img" src="../../static/index/collect-corn.png"></image>
				<view class="top-tabbar-font">领取玉米</view>
			</view>
		</view>
		<!-- 跑马灯 -->
		<swiper class="swiper" :vertical="true" :circular="true" :autoplay="true" :interval="3500" :duration="500">
			<swiper-item>
				<view class="swiper-item uni-bg-red">A</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">B</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">C</view>
			</swiper-item>
		</swiper>
		<!-- 场次信息列表 -->
		<view class="site-num-list" v-if="!isShowNoteList">
			<view @click="toNote" class="site-num-item" v-for="n in 3">
				<image class="site-num-item-img" src="../../static/index/primary-chart.png"></image>
				<view class="site-num-item-right">
					<view class="site-class">初级场 2 倍</view>
					<view class="games-limit">拥有一颗玉米粒即可参加</view>
					<view class="multiple-box">
						<view class="multiple-box-num">2</view>
						<view class="multiple-box-font">倍</view>
					</view>
					<view class="to-join">去参加</view>
				</view>
			</view>
		</view>
		<!-- 下注信息列表 -->
		<view class="note-list" v-if="isShowNoteList">
			<view class="note-item" v-for="n in 3">
				<image class="note-item-img" src="../../static/index/alpaca.png"></image>
				<view class="note-item-right">
					<view class="item-alpaca">羊驼A</view>
					<view class="item-corn-num">共收到2500玉米粒</view>
					<view class="item-probability">30%概率取胜 赔率3.8</view>
					<view class="item-btn">猜ta获胜</view>
					<view class="item-get">已下注1000 获胜可得2200</view>
				</view>
			</view>
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
				<image class="headportrait" src="../../static/index/corn-headportrait.png"></image>
				<image @click="close" class="close" src="../../static/index/close.png"></image>
				<view>
					<view class="modal-title">您的玉米粒不足!</view>
					<view class="available-corn">
						<view>可用玉米: 15</view>
						<image class="available-corn-img" src="../../static/gues/corn-grain.png"></image>
					</view>
					<view class="receive">
						<view>领取10 </view>
						<image class="receive-img" src="../../static/gues/corn-grain.png"></image>
					</view>
					<view class="getMore">获取更多</view>
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
				isclose:true
			}
		},
		components:{
			myheader
		},
		onLoad() {

		},
		methods: {
			// 关闭
			close(){
				this.isclose = false
			},
			// 去下注
			toNote() {
				// this.isShowNoteList = true

			}
		}
	}
</script>

<style lang="scss">
	.top-box {
		width: 100%;
		height: 334upx;
		position: relative;

		.top-box-img {
			width: 100%;
			height: 100%;
			z-index: -10
		}

		// 左边的
		.left-box {
			width: 390upx;
			height: 49upx;
			border-radius: 30upx;
			position: absolute;
			left: 24upx;
			top: 20upx;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-around;
			align-items: center;
			color: #fff;
			font-size: 26upx;
			font-weight: 500;
			background-color: rgba(64, 28, 13, 1);

			.left-box-img {
				width: 30upx;
				height: 30upx;
				margin-left: 12upx;
			}

			.left-box-corn {
				display: flex;
				// align-items:center
			}
		}

		.right-box {
			position: absolute;
			right: 0;
			top: 20upx;
			background-color: #A2710C;
			width: 166upx;
			height: 49upx;
			line-height: 49upx;
			font-size: 24upx;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 30upx 0 0 30upx;

			.icon-btn_gengduo_xiangyoujiantoux {
				font-size: 16upx;
				padding-left: 6upx
			}
		}
	}

	// 顶部的页卡栏
	.top-tabbar {
		height: 172upx;
		display: flex;
		position: relative;
		z-index: 10;
		justify-content: space-around;
		align-items: center;
		box-sizing: border-box;
		border-radius: 16upx;
		margin: -86upx 24upx 0 24upx;
		background-color: #fff;
		box-shadow: 0px 6px 13px 0px rgba(82, 82, 82, 0.21);

		.top-tabbar-item {
			text-align: center
		}

		.top-tabbar-img {
			width: 82upx;
			height: 82upx;
			border-radius: 50%;
		}

		.top-tabbar-font {
			font-size: 24upx;
		}
	}

	// 跑马灯
	.swiper {
		background-color: #FEF4BC;
		margin: 0 20upx;
		height: 40upx;
		border-radius: 20upx;
		margin-top: 20upx;
	}

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

			.site-num-item-img {
				width: 220upx;
				height: 100%;
				border-radius: 16upx 0 0 16upx;
			}

			// item右边的大盒子
			.site-num-item-right {
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
			}
		}
	}

	// 下注信息列表
	.note-list {
		margin: 0 24upx;
		padding-top: 14upx;
		box-sizing: border-box;

		.note-item {
			position: relative;
			height: 190upx;
			display: flex;
			margin-top: 31upx;
			box-shadow: 0px 6upx 13upx 0upx rgba(82, 82, 82, 0.21);
			border-radius: 16upx;

			.note-item-img {
				width: 204upx;
				height: 190upx;
			}

			.note-item-right {
				padding-left: 25upx;

				.item-alpaca {
					font-size: 44upx;
					font-weight: bold;
					color: rgba(34, 34, 34, 1);
					padding-top: 16upx;
				}

				// 收到的玉米粒
				.item-corn-num {
					font-size: 26upx;
					padding-top: 7.5upx;
					color: rgba(102, 102, 102, 1);
				}

				// 取胜概率
				.item-probability {
					width: 224upx;
					height: 26upx;
					font-size: 18upx;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
					margin-top: 9upx;
					background: rgba(255, 180, 0, 1);
					border-radius: 13upx;
				}

				// 按钮
				.item-btn {
					width: 148upx;
					height: 55upx;
					line-height: 55upx;
					position: absolute;
					top: 68upx;
					right: 32upx;
					background: linear-gradient(-90deg, rgba(255, 132, 65, 1) 0%, rgba(255, 203, 64, 1) 100%);
					border-radius: 28upx;
					color: #fff;
					font-size: 26upx;
					text-align: center;
				}

				// 获胜可得
				.item-get {
					width: 283upx;
					height: 30upx;
					line-height: 30upx;
					text-align: center;
					position: absolute;
					top: 0;
					right: 0;
					background: rgba(252, 215, 195, 1);
					border-radius: 0 19upx;
					color: rgba(211, 96, 31, 1);
					font-size: 20upx;
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
			height: 610upx;
			position: relative;
			background-color: #fff;
			border-radius: 32upx;
			display:flex;
			justify-content:center;
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
			//您的玉米粒不足 
			.modal-title {
				font-size: 36upx;
				font-weight: bold;
				margin-top: 180upx;
				text-align: center;
			}

			// 可用玉米
			.available-corn {
				font-size: 26upx;
				color: rgba(64, 28, 13, 1);
				display: flex;
				justify-content: center;
				margin-top: 30upx;
				.available-corn-img {
					width: 36upx;
					height: 36upx;
					margin-left: 12upx;
				}
			}
			// 领取
			.receive{
				width:320upx;
				height:98upx;
				background:linear-gradient(84deg,rgba(255,203,64,1) 0%,rgba(255,132,65,1) 100%);
				border-radius:47upx;
				color:#fff;
				font-size:36upx;
				display:flex;
				justify-content:center;
				align-items:center;
				margin-top:45upx;
				.receive-img{
					width:52upx;
					height:52upx;
					margin-left:21upx;
				}
			}
			// 领取更多
			.getMore{
				width:320upx;
				height:98upx;
				line-height: 98upx;
				margin-top:22upx;
				text-align:center;
				font-size:36upx;
				font-weight:bold;
				color:rgba(133,69,29,1);
				border-radius:47upx;
				border-top:1upx solid #FFCB40;
				border-right:1upx solid #FFDAC0;
				border-left:1upx solid #FFDAC0;
				border-bottom:1upx solid #FFDAC0;
			}
		}
	}
</style>
