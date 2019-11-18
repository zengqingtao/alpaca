<template>
	<view class="uni-container">
		<view class="top-box">
			<image class="top-box-img" :src="banned"></image>
			<!-- 左边的可用积分-竞赛 -->
			<view class="left-box">
				<view class="left-box-corn">
					<view class="integration-font">可用积分:</view>
					<view class="integration-num">{{cornNum}}</view>
				</view>
				<view class="left-box-corn">
					<view class="matching-font integration-font">使用中积分:</view>
					<view class="integration-num">{{playCount}}</view>
				</view>
			</view>
			<!-- 右边的竞猜记录 -->
			<!-- @click="toGuesRecord" -->
			<view @click="toGuesRecord" class="right-box">
				<view class="">
					我的竞猜
				</view>
				<view class="iconfont icon-btn_gengduo_xiangyoujiantoux"></view>
			</view>
			<image class="sceneGuessBtn" :src="sceneGuessBtn"></image>
		</view>
		<!-- tab -->
		<view class="top-tabbar" v-if="false">
			<view @click="toMall" class="top-tabbar-item">
				<image class="top-tabbar-img" :src="cornImg"></image>
				<view class="top-tabbar-font">积分商城</view>
			</view>
			<view @click="toGuesRecord" class="top-tabbar-item">
				<image class="top-tabbar-img" :src="guessImg"></image>
				<view class="top-tabbar-font">我的竞猜</view>
			</view>
			<view @click="receiveCorn" class="top-tabbar-item">
				<image class="top-tabbar-img" :src="collectCornImg"></image>
				<view class="top-tabbar-font">领取积分</view>
			</view>
		</view>
		<!-- 跑马灯 -->
		<view class="horse-race-lamp">
			<image class="horse-race-lamp-img" :src="paomadeng"></image>
			<view class="horse-race-lamp-left">
				<image class="horn-img" :src="gonggao"></image>
				<view class="pole"></view>
				<view v-if="!matching" class="left-font">比赛将于<text v-if="timestampDay!=nowDay">明天</text><text class="left-font-color">{{scene_time}}</text>
					开始</view>
				<view v-if="matching" class="left-font">比赛进行中，将于{{scene_time}}</text> 结束</view>
			</view>
			<!-- <view class="horse-race-lamp-right" v-if="!matching">
				<view class="right-title">
					下注倒计时
				</view>
				<view class="uni-countdown" timeup="timeup">
					<view v-if="showDay" class="uni-countdown__number" :style="{borderColor:borderColor, color:color, background:backgroundColor}">{{d}}</view>
					<view v-if="showDay" class="uni-countdown__splitor" :style="{color:splitorColor}">天</view>
					<view class="uni-countdown__number" :style="{borderColor:borderColor, color:color, background:backgroundColor}">{{h}}</view>
					<view class="uni-countdown__splitor" :style="{color:splitorColor}">{{showColon ? ':' : '时'}}</view>
					<view class="uni-countdown__number" :style="{borderColor:borderColor, color:color, background:backgroundColor}">{{i}}</view>
					<view class="uni-countdown__splitor" :style="{color:splitorColor}">{{showColon ? ':' : '分'}}</view>
					<view class="uni-countdown__number" :style="{borderColor:borderColor, color:color, background:backgroundColor}">{{s}}</view>
					<view v-if="!showColon" class="uni-countdown__splitor" :style="{color:splitorColor}">秒</view>
				</view>
			</view> -->
		</view>
		<!-- 领取积分(模态框)  -->
		<view @touchmove.stop.prevent="moveHandle" class="cornNum-notEnough" v-if="isShowFreeReceive">
			<view class="modal-content">
				<image class="headportrait" :src="cornHeadportrait"></image>
				<image @click="receiveClose" class="close" :src="modalClose"></image>
				<view>
					<view class="modal-title">
						免费领取积分
					</view>
					<view class="surplus-num" v-if="receiveObj.lave_num>0">
						剩余 {{receiveObj.lave_num}} 次
					</view>
					<view class="surplus-num-box" v-if="receiveObj.lave_num==0">
						<view class="surplus-num">
							剩余 {{receiveObj.lave_num}} 次
						</view>
						<view class="gains-able-num">
							每天可获得{{receiveObj.have_num}} 次领取次数
						</view>
					</view>
					<view class="confirm-box">
						<view @click="receiveCofirmbtn" v-if="receiveObj.lave_num>0" class="confirm-child-box">
							<image class="confirm-bg-img" src="../../static/button/lingqu.png"></image>
							<view class="lingqu">
								<view>领 取 {{receiveObj.quantity}}</view>
								<image class="confirm-img" :src="cornGrain"></image>
							</view>
						</view>
						<view @click="receiveCofirmbtn" v-if="receiveObj.lave_num==0" class="confirm-child-box">
							<image class="confirm" :src="queding"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 无法领取积分(模态框) -->
		<view @touchmove.stop.prevent="moveHandle" class="cornNum-notEnough" v-if="showGreaterThan">
			<view class="modal-content">
				<image class="headportrait" :src="cornHeadportrait"></image>
				<image @click="unableToReceiveBtn" class="close" :src="modalClose"></image>
				<view>
					<view class="unable-to-receive-box">
						<view>
							当前的积分大于{{receiveObj.corn_limit}}
						</view>
						<view class="unable-to-receive-font">
							无法领取
						</view>
					</view>
					<view class="confirm-box">
						<view class="confirm-child-box">
							<image @click="unableToReceiveBtn" class="confirm" :src="queding"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 恭喜获得（模态弹框） -->
		<view @touchmove.stop.prevent="moveHandle" class="congratulations-modal" v-if="receiveStatus.code==1">
			<view class="congratulations-content">
				<image class="bg-img" src="../../static/modal/congratulations.png"></image>
				<view class="content-box">
					<image v-if="receiveStatus.data.get_num==10" class="num-img" :src="modalImg10"></image>
					<image v-if="receiveStatus.data.get_num==20" class="num-img" :src="modalImg20"></image>
					<image v-if="receiveStatus.data.get_num==50" class="num-img" :src="modalImg50"></image>
					<image v-if="receiveStatus.data.get_num==100" class="num-img" :src="modalImg100"></image>
					<image v-if="receiveStatus.data.get_num==200" class="num-img" :src="modalImg200"></image>
					<image v-if="receiveStatus.data.get_num==500" class="num-img" :src="modalImg500"></image>
					<view class="num-font">您成功获得{{receiveStatus.data.get_num}}个积分</view>
					<image @click="confirmbtn" class="confirm-btn" :src="queding"></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				banned: '../../static/gues/banned.png' + '?versionNum=' + this.$globalVariable.versionNum,
				cornGrain: '../../static/index/corn-grain.png' + '?versionNum=' + this.$globalVariable.versionNum,
				cornImg: '../../static/index/corn.png' + '?versionNum=' + this.$globalVariable.versionNum,
				guessImg: '../../static/index/gues.png' + '?versionNum=' + this.$globalVariable.versionNum,
				collectCornImg: '../../static/index/collect-corn.png' + '?versionNum=' + this.$globalVariable.versionNum,
				gonggao: '../../static/index/gonggao.png' + '?versionNum=' + this.$globalVariable.versionNum,
				cornHeadportrait: '../../static/modal/corn-headportrait.png' + '?versionNum=' + this.$globalVariable.versionNum,
				modalClose: '../../static/modal/close.png' + '?versionNum=' + this.$globalVariable.versionNum,
				modalImg10: '../../static/modal/+10.png' + '?versionNum=' + this.$globalVariable.versionNum,
				modalImg20: '../../static/modal/+20.png' + '?versionNum=' + this.$globalVariable.versionNum,
				modalImg50: '../../static/modal/+50.png' + '?versionNum=' + this.$globalVariable.versionNum,
				modalImg100: '../../static/modal/+100.png' + '?versionNum=' + this.$globalVariable.versionNum,
				modalImg200: '../../static/modal/+200.png' + '?versionNum=' + this.$globalVariable.versionNum,
				modalImg500: '../../static/modal/+500.png' + '?versionNum=' + this.$globalVariable.versionNum,
				queding: '../../static/button/queding.png' + '?versionNum=' + this.$globalVariable.versionNum,
				paomadeng:'../../static/button/paomadeng.png' + '?versionNum=' + this.$globalVariable.versionNum,
				sceneGuessBtn:'../../static/button/sceneGuessBtn.png' + '?versionNum=' + this.$globalVariable.versionNum,
				token: '',
				play_id: '123',
				isShowFreeReceive: false, //是否显示免费领取积分弹框
				showGreaterThan: false, //当前积分是否符合领取积分限制
				cornNum: 0, //可用积分的数量
				playCount: 0, //竞猜数
				scene_time: "", //比赛开始时间
				settlement_time: 0, //结算时间
				matching: false,
				betTime: 0,
				receiveObj: {}, //保存领取积分请求过来数据
				receiveStatus: {
					code: 0
				}, //确认领取请求返回的数据
				// ↓倒计时内容
				timer: null,
				d: '00',
				h: '11',
				i: '11',
				s: '11',
				leftTime: 0,
				seconds: 0,
				showDay: false,
				showColon: true,
				backgroundColor: "#401C0D",
				borderColor: "#401C0D",
				color: "#fff",
				splitorColor: "#222",
				day: 0,
				hour: 0,
				minute: 0,
				second: 0,
				ms_time: 0,
				nowDay: '',
				timestampDay: '',

				// ↑
			}
		},
		created() {
			var url = window.location.href;
			var query = url.split("?")[1];
			var token = query.split("=")[1];
			var token1 = token.split("&")[0];
			this.token = token1;
			uni.$on('updateCornNum', (data) => {
				this.cornNum = data.availableCorn;
				this.playCount = data.guessCorn
			})
			uni.$on('tomatching', (data) => {
				this.getAccount();
				this.matching = data.msg
			})
			this.getTopNotice();
			this.getAccount();
			// ↓倒计时
			this.countDown()
			this.timer = setInterval(() => {
				this.seconds--
				if (this.seconds == 0) {
					this.timeUp()
					return
				}
				this.countDown();
			}, 1000)
			// ↑
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		methods: {
			moveHandle(e) {
				e.stopPropagation()
			},
			// 跳转到竞猜记录
			toGuesRecord() {
				uni.navigateTo({
					url: 'guesRecord?token=' + this.token
				})
			},
			// 跳转到积分商城
			toMall() {
				jWeixin.miniProgram.switchTab({
					url: '/pages/credits-exchange/credits-exchange'
				})
			},
			// 点击领取积分-弹框
			receiveCorn() {
				uni.request({
					url: this.$globalVariable.hostUrl + '/user/signinfo', 
					method: "POST",
					data: {
						token: this.token
					},
					success: (res) => {
						this.receiveObj = res.data.data;
						if (this.cornNum > this.receiveObj.corn_limit) {
							this.showGreaterThan = true;
						} else {
							this.isShowFreeReceive = true;
						}
					}
				});
			},
			// 关闭领取积分弹框
			receiveClose() {
				this.isShowFreeReceive = false;
			},
			// 无法领取“确定”或者“x”
			unableToReceiveBtn() {
				this.showGreaterThan = false;
			},
			// 领取积分的"确定"按钮
			receiveCofirmbtn() {
				this.isShowFreeReceive = false;
				uni.request({
					url: this.$globalVariable.hostUrl + '/user/dailySign',
					method: 'POST',
					data: {
						token: this.token
					},
					success: (res) => {
						console.log("res===:", res);
						this.getAccount();
						this.receiveStatus = res.data;

					}
				});
			},
			// 领取成功点确定
			confirmbtn() {
				this.receiveStatus.code = 0;
			},
			// 请求获取可用积分和竞猜
			getAccount() {
				uni.request({
					url: this.$globalVariable.hostUrl + '/user/account',
					method: "POST",
					data: {
						token: this.token
					},
					success: (res) => {
						var res = res.data.data;
						this.cornNum = res.corn_num;
						this.playCount = res.play_count;
						uni.$emit('toCornNum', {
							cornNum: this.cornNum,
							playCount :this.playCount
						})
					}
				});
			},
			//请求下注倒计时（跑马灯）
			getTopNotice() {
				uni.request({
					url: this.$globalVariable.hostUrl + '/Game/TopNotice', //仅为示例，并非真实接口地址。
					method: "POST",
					data: {
						token: this.token
					},
					success: (res) => {
						// 传时间戳到首页和羊驼列表页
						uni.$emit('toTimestamp',{timestamp:res.timestamp})
						var res = res.data.data;
						this.scene_time = res.scene_time;
						this.settlement_time = res.settlement_time;
						// this.settlement_time = 10;
						var timestamp = res.timestamp;
						// 模拟时间戳测试（秒）
						// var timestamp = 1573729200;
						var time = (timestamp - this.settlement_time) + "000"; //保存开始下注时间戳
						this.betTime = Number(time);
						var date = new Date(this.betTime); //下注时间戳转换为标准时间格式
						var new_date = new Date(); //当前时间
						var difftime = (date - new_date) / 1000;
						var hours = parseInt(difftime / 3600); // 小时 60*60 总小时数-过去的小时数=现在的小时数 
						var minutes = parseInt(difftime % 3600 / 60); // 分钟 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
						var seconds = parseInt(difftime % 60); // 以60秒为一整份 取余 剩下秒数
						this.hour = hours;
						this.minute = minutes;
						this.second = seconds;
						// 倒计时
						this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second);
						// 比赛结束的时间戳减去当前的时间戳，小于0,触发监听事件
						this.ms_time = new Date().getTime();
						this.nowDay = new Date().getDate();

						this.timestampDay = Number(timestamp + '000');
						this.timestampDay = new Date(this.timestampDay).getDate();
						this.ms_time = (timestamp + '000') - this.ms_time;
					}
				});
			},
			// ↓倒计时
			toSeconds(day, hours, minutes, seconds) {
				return (day * 60 * 60 * 24) + (hours * 60 * 60) + (minutes * 60) + seconds
			},
			timeUp() {
				clearInterval(this.timer)
				this.matching = true;
				uni.$emit('matching', {
					matching: this.matching,
					settlement_time: this.ms_time,
				})
			},
			countDown() {
				let seconds = this.seconds
				let [day, hour, minute, second] = [0, 0, 0, 0]
				if (seconds > 0) {
					day = Math.floor(seconds / (60 * 60 * 24))
					hour = Math.floor(seconds / (60 * 60)) - (day * 24)
					minute = Math.floor(seconds / 60) - (day * 24 * 60) - (hour * 60)
					second = Math.floor(seconds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
				} else {
					this.timeUp()
				}
				if (day < 10) {
					day = '0' + day
				}
				if (hour < 10) {
					hour = '0' + hour
				}
				if (minute < 10) {
					minute = '0' + minute
				}
				if (second < 10) {
					second = '0' + second
				}
				this.d = day
				this.h = hour
				this.i = minute
				this.s = second
			},
			// ↑倒计时
		}
	}
</script>

<style lang="scss">
	.top-box {
		width: 100%;
		height: 334upx;
		position: relative;
		.sceneGuessBtn{
			width:580upx;
			height:84upx;
			position: absolute;
			right: 16upx;
			bottom: 20upx;
		}
		.top-box-img {
			width: 100%;
			height: 100%;
			// z-index: -1
		}
		// 左边的
		.left-box {
			max-width: 506upx;
			height: 58upx;
			border-radius: 30upx;
			position: absolute;
			left: 24upx;
			top: 32upx;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-around;
			// align-items: center;
			color: #fff;
			font-size: 26upx;
			font-weight: 500;
			padding: 0 21upx;
			background-color: rgba(64, 28, 13, 1);

			.left-box-img {
				width: 30upx;
				height: 30upx;
				margin-left: 12upx;
			}

			.left-box-corn {
				display: flex;
				// align-items: center;
				.integration-font{
					height: 58upx;
					font-size:24upx;
					line-height: 58upx;
					padding-right:8upx;
				}
				.matching-font {
					padding-left: 10upx;
				}
				// 积分数字
				.integration-num{
					height:50upx;
					font-size:36upx;
					font-weight:600;
					line-height: 50upx;
				}
			}
		}

		.right-box {
			position: absolute;
			right: 0;
			top: 32upx;
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
		height: 212upx;
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
			width: 110upx;
			height: 110upx;
			border-radius: 50%;
		}

		.top-tabbar-font {
			font-size: 24upx;
		}
	}

	// 跑马灯
	.horse-race-lamp {
		height: 66upx;
		display: flex;
		justify-content: center;
		position:relative;
		margin-top:15upx;
		.horse-race-lamp-img{
			width:716upx;
			height:124upx;
		}
		.horse-race-lamp-left {
			position: absolute;
			top:24upx;
			left:52upx;
			display: flex;
			align-items: center;
			height:66upx;
			.horn-img {
				width: 40upx;
				height: 45upx;
			}
			.pole {
				height: 34upx;
				border: 1upx dashed #CCCCCC;
				margin: 0 20upx;
			}

			.left-font {
				font-size: 40upx;
				font-weight: bold;
				color: rgba(34, 34, 34, 1);

				.left-font-color {
					color: #f00;
					padding: 0 10upx;
				}
			}
		}

		.horse-race-lamp-right {
			display: flex;
			align-items: center;

			.right-title {
				padding-right: 11upx;
				font-size: 24upx;
				font-weight: bold;
				color: rgba(34, 34, 34, 1);
			}
		}
	}

	// 领取积分（模态弹框）
	// 积分不足
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
					margin-top: 50upx;
					position: relative;

					// 领取
					.lingqu {
						width: 320upx;
						height: 98upx;
						display: flex;
						justify-content: center;
						align-items: center;
						position: absolute;
						z-index: 20;
						color: #fff;
					}

					.confirm-bg-img {
						width: 320upx;
						height: 98upx;
						position: absolute;
					}

					.confirm {
						width: 100%;
						height: 100%;
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

	// 无法领取积分（模态框）
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
	.congratulations-modal {
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

		.congratulations-content {
			width: 750upx;
			height: 716upx;
			position: relative;

			.bg-img {
				width: 100%;
				height: 100%;
				position: absolute;
				z-index: -10;
			}

			.content-box {
				text-align: center;

				.num-img {
					margin-top: 380upx;
					width: 70upx;
					height: 41upx;
				}

				.num-font {
					font-size: 24upx;
					color: #fff;
				}

				.confirm-btn {
					width: 244upx;
					height: 78upx;
					margin-top: 81upx;
				}
			}
		}
	}

	//↓倒计时
	$countdown-height:32upx;
	$countdown-width:30upx;

	.uni-countdown {
		padding: 2upx 0;
		display: inline-flex;
		flex-wrap: nowrap;
		justify-content: center;

		&__splitor {
			justify-content: center;
			line-height: $countdown-height;
			padding: 0 upx;
			font-size: $uni-font-size-base;
		}

		&__number {
			line-height: $countdown-height;
			justify-content: center;
			text-align: center;
			width: $countdown-width;
			height: $countdown-height;
			border-radius: $uni-border-radius-base;
			margin: 0 5upx;
			font-size: $uni-font-size-base;
			border: 1px solid #000000;
			font-size: $uni-font-size-sm;
			padding: 0 5upx;
		}
	}

	// ↑倒计时
</style>
