<template>
	<view class="uni-container">
		<view class="top-box">
			<image class="top-box-img" src="../../static/gues/banned.png"></image>
			<!-- 左边的可用玉米-竞赛 -->
			<view class="left-box">
				<view class="left-box-corn">
					<view class="left-box-corn-font">可用玉米：15</view>
					<image class="left-box-img" src="../../static/gues/corn-grain.png"></image>
				</view>
			</view>
		</view>
		<!-- tab -->
		<view class="top-tabbar">
			<view class="top-tabbar-item">
				<view class="item-num">10</view>
				<view class="item-font">竞猜场数</view>
			</view>
			<view class="top-tabbar-item">
				<view class="item-num">4</view>
				<view class="item-font">猜中场数</view>
			</view>
			<view class="top-tabbar-item">
				<view class="item-num">9999</view>
				<view class="item-font">竞猜金额</view>
			</view>
		</view>
		<!--记录列表 -->
		<view class="record-list">
			<!-- 列表头 -->
			<view class="list-header">
				<view class="list-header-font">场次时间</view>
				<view class="list-header-font">级别</view>
				<view class="list-header-font">冠军</view>
				<view class="list-header-font">收益</view>
				<view class="list-header-font">比赛</view>
			</view>
			<!-- 列表项 -->
			<view class="list-item" v-for="n in 2">
				<view class="item-date">2019-10-01</view>
				<view class="item-data" v-for="n in 3">
					<view class="item-data-ing content-width">
						<view>进行中</view>
						<view class="item-data-ing-time">19:35:26</view>
					</view>
					<view class="content-width">中级场</view>
					<view class="content-width">
						<image class="item-data-img" src="../../static/gues/champion.png"></image>
					</view>
					<view class="content-width">---</view>
					<view class="content-width">
						<text class="item-data-see">查看</text>
					</view>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {

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
			width: 260upx;
			height: 49upx;
			border-radius: 25upx;
			position: absolute;
			left: 10upx;
			top: 10upx;
			background: rgba(64, 28, 13, 1);
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-wrap: nowrap;

			.left-box-img {
				width: 30upx;
				height: 30upx;
				margin-left: 12upx;
			}

			.left-box-corn {
				display: flex;

				.left-box-corn-font {
					font-size: 26upx;
					color: rgba(255, 255, 255, 1);
				}
			}
		}
	}

	// 顶部的页卡栏
	.top-tabbar {
		margin: -86upx 20upx 0 20upx;
		position: relative;
		z-index: 10;
		height: 194upx;
		box-sizing: border-box;
		background-color: #fff;
		box-shadow: 0px 5px 17px 1px rgba(82, 82, 82, 0.13);
		border-radius: 16upx;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.top-tabbar-item {
			text-align: center;

			.item-num {
				font-size: 56upx;
				color: rgba(34, 34, 34, 1);
			}

			.item-font {
				font-size: 26upx;
				color: rgba(153, 153, 153, 1);
			}
		}
	}

	// 记录列表
	.record-list {
		margin: 35upx 24upx 0 24upx;
	}

	// 列表头
	.list-header {
		font-size: 26upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		display: flex;
		.list-header-font{
			width:20%;
			text-align: center;
		}
	}

	// 列表项
	.list-item {
		margin-top:33upx;
		.item-date {
			width: 185upx;
			height: 43upx;
			font-size: 24upx;
			color: #fff;
			border-radius: 16upx 16upx 0 0;
			display: flex;
			justify-content: center;
			align-items: center;
			opacity: 0.3;
			background: rgba(117, 118, 128, 1);
			margin-bottom: 32upx;
		}

		.item-data {
			font-size: 24upx;
			color: rgba(34, 34, 34, 1);
			display: flex;
			align-items: center;
			margin-bottom: 32upx;
			.content-width{
				width:20%;
				text-align: center;
			}
			.item-data-img {
				width: 48upx;
				height: 48upx;
			}
			// 进行中的盒子
			.item-data-ing {
				.item-data-ing-time {
					font-weight: 400;
				}
			}
			// 查看
			.item-data-see {
				width: 92upx;
				height: 46upx;
				display: inline-block;
				line-height: 46upx;
				color: rgba(85, 85, 85, 1);
				border-radius: 23upx;
				background: rgba(255, 225, 80, 1);
			}
		}
	}
	// 底部
	.footer{
		padding:20upx 0 ;
		text-align: center;
		font-size:24upx;
		color:rgba(178,178,178,1);
		.crossbar-box{
			display:flex;
			justify-content:center;
			.crossbar{
				margin:15upx 0;
				width:90upx;
				height:2upx;
				background:rgba(178,178,178,1);
			}
		}
	}
</style>
