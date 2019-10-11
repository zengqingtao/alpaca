<template>
	<view class="uni-container">
		<myheader></myheader>
		<!-- 下注信息列表 -->
		<view class="bets-list">
			<view class="bets-item" v-for="n in 3">
				<image class="bets-item-img" src="../../static/index/alpaca.png"></image>
				<view class="bets-item-right">
					<view class="item-alpaca">羊驼A</view>
					<view class="item-corn-num">共收到2500玉米粒</view>
					<view class="item-probability">30%概率取胜 赔率3.8</view>
					<view class="item-btn" @click="tobets">猜ta获胜</view>
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
		<!-- 下注(模态弹框) -->
		<view class="bets-modal-box" v-if="!isclose">
			<view class="modal-content">
				<image class="headportrait" src="../../static/modal/alpaca-headportrait.png"></image>
				<image @click="close" class="close" src="../../static/index/close.png"></image>
				<view>
					<view class="alpaca-class">羊驼A</view>
					<view class="inp-box">
						<input class="inp" @input="input" placeholder="0">
					</view>
					<view class="available-corn-box">
						<view class="available-corn">可用玉米: 15</view>
						<image class="available-corn-img" src="../../static/modal/corn-grain.png"></image>
					</view>
					<view class="available-corn-box revenue">
						<view class="available-corn">预估收益: 0</view>
						<image class="available-corn-img" src="../../static/modal/corn-grain.png"></image>
					</view>
					<view @click="close" class="confirm-box">
						<view class="confirm" @click="confirm">确定</view>
					</view>
					<view class="think" @click="close">
						再想想！
					</view>
				</view>
			</view>
		</view>
		<!-- 下注成功（模态弹框） -->
		<view class="bets-modal-box" v-if="success">
			<view class="modal-content success-modal-content">
				<image class="headportrait" src="../../static/modal/alpaca-headportrait.png"></image>
				<image  @click="successClose" class="close" src="../../static/index/close.png"></image>
				<view>
					<view class="alpaca-class">羊驼A</view>
					<view class="success-title">
						下注成功!
					</view>
					<view class="corn-img-box">
						<image class="corn-img" src="../../static/gues/corn-grain.png"></image>
					</view>
					<view class="click-close" @click="successClose">
						点击关闭弹窗
					</view>
				</view>
			</view>
		</view>
		<!-- 近5场战绩（模态弹框） -->
		<view class="bets-modal-box" >
			<view class="modal-content gains-modal-content">
				<image class="headportrait" src="../../static/modal/alpaca-headportrait.png"></image>
				<image class="close" src="../../static/index/close.png"></image>
				<view>
					<view class="alpaca-class">羊驼A</view>
					
					<view  class="confirm-box">
						<view class="confirm">猜ta获胜</view>
					</view>
					<view class="think" @click="successClose">
						点击关闭弹窗
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
				isclose: true,
				success:false,
			}
		},
		components: {
			myheader
		},
		onLoad() {

		},
		methods: {
			// 关闭
			close() {
				this.isclose = true;
			},
			// 去下注
			tobets() {
				this.isclose = false
			},
			input(e) {
				console.log("value:", e.detail)
			},
			// 确定
			confirm(){
				this.success = true
			},
			// 点击关闭弹框
			successClose(){
				this.success = false
			}
		}
	}
</script>

<style lang="scss">
	// 下注信息列表
	.bets-list {
		margin: 0 24upx;
		padding-top: 14upx;
		box-sizing: border-box;

		.bets-item {
			position: relative;
			height: 190upx;
			display: flex;
			margin-top: 31upx;
			box-shadow: 0px 6upx 13upx 0upx rgba(82, 82, 82, 0.21);
			border-radius: 16upx;

			.bets-item-img {
				width: 204upx;
				height: 190upx;
			}

			.bets-item-right {
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

	// 下注（模态框）
	.bets-modal-box {
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
			height: 710upx;
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
			.alpaca-class {
				font-size: 36upx;
				font-weight: bold;
				margin-top: 140upx;
				text-align: center;
			}

			// 输入框
			.inp-box {
				padding-top: 40upx;
				display: flex;
				justify-content: center;

				.inp {
					width: 287upx;
					height: 50upx;
					font-size: 28upx;
					font-weight: 400;
					text-align: center;
					border: 1upx solid rgba(255, 201, 0, 1);
					border-radius: 8upx;
				}
			}

			// 可用玉米，预估收益
			.available-corn-box {
				display: flex;
				justify-content: center;
				padding-top: 45upx;

				.available-corn {
					font-size: 26upx;
					color: rgba(34, 34, 34, 1);
					text-align: center;
				}

				.available-corn-img {
					width: 40upx;
					height: 40upx;
					margin-left: 20upx;
				}
			}

			.revenue {
				padding-top: 25upx;
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

			// 再想想
			.think {
				padding-top: 35upx;
				font-size: 26upx;
				text-align: center;
				color: rgba(178, 178, 178, 1);
			}
		}
	}

	// 下注成功（模态框）
	.success-modal-content {
		height: 610upx !important;

		.success-title {
			padding-top: 50upx;
			font-size: 73upx;
			text-align: center;
			font-weight: bold;
			color: rgba(34, 34, 34, 1);
		}
		.corn-img-box {
			display: flex;
			justify-content: center;
			padding-top:20upx;
			.corn-img {
				width: 129upx;
				height: 129upx;
			}
		}
		.click-close{
			padding-top:20upx;
			text-align: center;
			font-size:32upx;
			font-weight:400;
			text-decoration:underline;
			color:rgba(153,153,153,1);
		}
	}
	// 近5场战绩（模态框）
	.gains-modal-content{
		height:888upx !important; 
	}
</style>
