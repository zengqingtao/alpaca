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
			<navigator url="guesRecord" class="top-tabbar-item">
				<image class="top-tabbar-img" src="../../static/index/gues.png"></image>
				<view class="top-tabbar-font">我的竞猜</view>
			</navigator>
			<view  @click="receiveCorn" class="top-tabbar-item">
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
		<!-- 领取玉米(模态框) -->
		<view class="cornNum-notEnough" v-if="isShowFreeReceive">
			<view class="modal-content">
				<image class="headportrait" src="../../static/modal/corn-headportrait.png"></image>
				<image class="close" src="../../static/modal/close.png"></image>
				<view>
					<view class="modal-title">
						免费领取玉米
					</view>
					<view class="surplus-num"  v-if="receiveNum>0">
						剩余 {{receiveNum}} 次
					</view>
					<view class="surplus-num-box" v-if="receiveNum==0">
						<view class="surplus-num">
							剩余 {{receiveNum}} 次
						</view>
						<view class="gains-able-num">
							每天可获得2次领取次数
						</view>
					</view>
					<view @click="receiveCofirmbtn" class="confirm-box">
						<view class="confirm-child-box">
							<view class="confirm">确 定</view>
							<image class="confirm-img" src="../../static/modal/corn-grain.png"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 无法领取玉米(模态框) -->
		<view class="cornNum-notEnough" v-if="false">
			<view class="modal-content">
				<image class="headportrait" src="../../static/modal/corn-headportrait.png"></image>
				<image class="close" src="../../static/modal/close.png"></image>
				<view>
					<view class="unable-to-receive-box">
						<view>
							当前的玉米粒大于10
						</view>
						<view class="unable-to-receive-font">
							无法领取
						</view>
					</view>
					<view class="confirm-box">
						<view class="confirm-child-box">
							<view class="confirm">确 定</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 恭喜获得（模态弹框） -->
		<view class="congratulations-modal" v-if="false">
			<view class="congratulations-content">
				<image class="bg-img" src="../../static/modal/congratulations.png"></image>
				<view class="content-box">
					<image class="num-img" src="../../static/modal/+10.png"></image>
					<view class="num-font">您成功获得10粒玉米</view>
					<image class="confirm-btn" src="../../static/modal/confirm-btn.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowFreeReceive:false,//是否显示免费领取玉米弹框
				receiveNum:2 //可领取玉米的次数
			}
		},
		onLoad() {

		},
		methods: {
			// 点击领取玉米-弹框
			receiveCorn(){
				this.isShowFreeReceive = true
			},
			// 领取玉米的"确定"按钮
			receiveCofirmbtn(){
				if(this.receiveNum>0){
					this.receiveNum--;
				}
				this.isShowFreeReceive = false;
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

	// 领取玉米（模态弹框）
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
				margin-top: 140upx;
				text-align: center;
			}

			// 剩余次数
			.surplus-num {
				padding-top: 35upx;
				text-align: center;
				font-size: 46upx;
				font-weight: bold;
				color: rgba(252, 61, 61, 1);
			}

			// 每天可获得次数

			.gains-able-num {
				font-size: 24upx;
				font-weight: 400upx;
				color: rgba(153, 153, 153, 1);
				text-align: center;
				padding-top: 20upx;
			}


			// 确定按钮
			.confirm-box {
				display: flex;
				justify-content: center;

				.confirm-child-box {
					width: 320upx;
					height: 98upx;
					display: flex;
					justify-content: center;
					align-items: center;
					line-height: 98upx;
					background: linear-gradient(84deg, rgba(255, 203, 64, 1) 0%, rgba(255, 132, 65, 1) 100%);
					border-radius: 47upx;
					margin-top: 50upx;

					.confirm{
						color: #fff;
						font-size: 36upx;
					}

					.confirm-img {
						width: 52upx;
						height: 52upx;
						margin-left: 20upx;
					}
				}
			}
		}
	}

	// 无法领取玉米（模态框）
	.unable-to-receive-box {
		text-align: center;
		font-size: 36upx;
		font-weight: bold;
		margin-top: 151upx;

		.unable-to-receive-font {
			padding-top: 20upx;
		}
	}
	// 恭喜获得
	.congratulations-modal{
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
		.congratulations-content{
			width: 750upx;
			height: 716upx;
			position: relative;
			.bg-img{
				width:100%;
				height:100%;
				position: absolute;
				z-index: -10;
			}
			.content-box{
				text-align:center;
				.num-img{
					margin-top:380upx;
					width:70upx;
					height:41upx;
				}
				.num-font{
					font-size:24upx;
					color:#fff;
				}
				.confirm-btn{
					width:244upx;
					height:78upx;
					margin-top:81upx;
				}
			}
		}
	}
</style>
