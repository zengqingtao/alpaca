<template>
	<view class="uni-container">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowNoteList: false,
			}
		},
		onLoad() {

		},
		methods: {
			
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
</style>
