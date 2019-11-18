<template>
	<view class="uni-container">
		<view class="fixdhead-box" :class="scrollTop?'scrollTopFixed':''">
			<view class="top-box">
				<image class="top-box-img" :src="banned"></image>
				<!-- 左边的可用积分-竞赛 -->
				<view class="left-box">
					<view class="left-box-corn">
						<view class="integration-font">可用积分:</view>
						<view class="integration-num">{{corn_num}}</view>
					</view>
					<view class="left-box-corn">
						<view class="matching-font integration-font">使用中积分:</view>
						<view class="integration-num">{{playCount}}</view>
					</view>
				</view>
				<!-- <view class="left-box">
					<view class="left-box-corn">
						<view class="left-box-corn-font">可用：{{guesslist.corn_num}}</view>
						
					</view>
				</view> -->
			</view>
			<!-- tab -->
			<view class="top-tabbar">
				<view class="top-tabbar-item">
					<view class="item-num">{{guesslist.guess_count}}</view>
					<view class="item-font">竞猜场数</view>
				</view>
				<view class="top-tabbar-item">
					<view class="item-num">{{guesslist.win_count}}</view>
					<view class="item-font">猜中次数</view>
				</view>
				<view class="top-tabbar-item">
					<view class="item-num">{{guesslist.income}}</view>
					<view class="item-font">总收益</view>
				</view>
			</view>
			<!-- 列表头 -->
			<view class="list-header">
				<view class="list-header-font">场次时间</view>
				<view class="list-header-font">级别</view>
				<view class="list-header-font">冠军</view>
				<view class="list-header-font">收益</view>
				<view class="list-header-font">比赛</view>
			</view>
			<!-- 有色横条 -->
			<image class="stripe" :src="banned01"></image>
		</view>
		<!--记录列表 -->
		<view class="record-list" :class="scrollTop?'record-list-scrollTop':''">
			<!-- 列表项 -->
			<view class="list-item" v-for="(item,index) in obj" :key="index">
				<view class="item-date">{{item[0].day}}</view>
				<view class="item-data-box">
					<view class="item-data" v-for="(item,index) in item" :key="index">
						<view class="item-data-ing  content-width">
							<view v-if="item.status==1">进行中</view>
							<view v-if="item.status==2">待进行</view>
							<view v-if="item.status==3">已结算</view>
							<view class="item-data-ing-time">{{item.play_time}}</view>
						</view>
						<view class="content-width">{{item.scene_name}}</view>
						<view class="content-width">
							<image v-if="item.status==3" class="item-data-img" :src="item.alpaca_icon_three"></image>
							<view v-if="item.status==1||item.status==2" class="">---</view>
						</view>
						<view v-if="item.status==1" class="content-width">---</view>
						<view v-if="item.status==2" class="content-width">---</view>
						<view v-if="item.status==3&&item.result>=0" class="content-width font font-color1">{{item.result}}</view>
						<view v-if="item.status==3&&item.result<0" class="content-width font font-color2">{{item.result}}</view>
						<view class="content-width">
							<view v-if="item.status==1||item.status==2">---</view>
							<navigator v-if="item.status==3" :url="'playback?token='+token+'&play_id='+item.play_id+'&level='+item.level"
							 class="item-data-see see-timeout-common">查看</navigator>
							<!-- <text v-if="item.result!==''" class="item-data-timeout see-timeout-common">已过期</text> -->
						</view>
					</view>
				</view>
			</view>
			<!-- 底部 -->
			<view class="footer" v-if="this.page==this.pagesTotal">
				<view>羊驼大赛</view>
				<view class="crossbar-box">
					<view class="crossbar"></view>
				</view>
				<view>到底啦!</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banned: '../../static/gues/banned.png' + '?versionNum=' + this.$globalVariable.versionNum,
				cornGrain: '../../static/gues/corn-grain.png' + '?versionNum=' + this.$globalVariable.versionNum,
				banned01: '../../static/gues/banned01.png' + '?versionNum=' + this.$globalVariable.versionNum,
				token: '', //保存用户信息
				guesslist: {}, //保存竞猜记录的所有记录
				obj: {}, //保存竞猜列表数据
				page: 1, //初始化页码
				limit: 7, //每页最多是多少天的记录
				total: 0, //初始化该用户共有多少天的记录
				pagesTotal: 1, //总页码数
				scrollTop: false, //页面滚动到一定的距离后固定的开关
				corn_num:0,//可用积分
				playCount:0,//使用中的积分
			}
		},
		onLoad(options) {
			this.token = options.token;
		},
		// 触底刷新
		onReachBottom(e) {
			if (this.page < this.pagesTotal) {
				this.page++;
				this.playGuess();
			}
		},
		// 监听页面滚动,主要是为了列表标题吸顶固定的功能，若后面需要，直接把最顶的盒子改为固定定位，列表的盒子的top改为0即可
		// onPageScroll(e) {
		// 	if (e.scrollTop >= 223) {
		// 		this.scrollTop = true;
		// 	} else {
		// 		this.scrollTop = false
		// 	}
		// },
		created() {
			this.getAccount();
			this.playGuess();
		},
		methods: {
			// 请求获取竞猜记录的数据
			playGuess() {
				uni.request({
					url: this.$globalVariable.hostUrl + '/user/PlayGuess',
					method: "POST",
					data: {
						page: this.page, //页码
						limit: this.limit, //最大天数
						token: this.token,
					},
					success: (res) => {
						console.log("res:",res);
						var res = res.data.data;
						this.total = res.total;
						this.pagesTotal = this.total / this.limit; //计算总页码
						this.pagesTotal = Math.ceil(this.pagesTotal); //向上取整
						if (this.pagesTotal == 0) {
							this.pagesTotalv = 1
						}
						this.guesslist = res;
						for (var i in res.list) {
							this.obj[i] = res.list[i]
						}
					}
				});
			},
			// 请求可用积分和使用中的积分
			getAccount() {
				uni.request({
					url: this.$globalVariable.hostUrl + '/user/account',
					method: "POST",
					data: {
						token: this.token,
					},
					success: (res) => {
						this.corn_num = res.data.data.corn_num;
						this.playCount = res.data.data.play_count;
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.fixdhead-box {
		width: 100%;
		height: 550upx;
		position: fixed;
		z-index: 200;
		background-color: #fff;
	}

	.scrollTopFixed {
		position: fixed !important;
		top: -450upx;
	}

	.top-box {
		width: 100%;
		height: 334upx;
		position: relative;
		top: 0;

		.top-box-img {
			width: 100%;
			height: 100%;
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
// 		// 左边的
// 		.left-box {
// 			// width: 247upx;
// 			max-width: 300upx;
// 			height: 49upx;
// 			border-radius: 25upx;
// 			position: absolute;
// 			left: 24upx;
// 			top: 32upx;
// 			padding: 0 21upx;
// 			background: rgba(64, 28, 13, 1);
// 			display: flex;
// 			justify-content: space-around;
// 			flex-wrap: nowrap;
// 
// 			.left-box-img {
// 				width: 30upx;
// 				height: 30upx;
// 				margin-left: 12upx;
// 			}
// 
// 			.left-box-corn {
// 				display: flex;
// 				align-items: center;
// 
// 				.left-box-corn-font {
// 					font-size: 26upx;
// 					color: rgba(255, 255, 255, 1);
// 				}
// 			}
// 		}
	}

	// 顶部的页卡栏
	.top-tabbar {
		width: 702upx;
		height: 194upx;
		margin: 0upx 25upx 0 25upx;
		position: relative;
		top: -90upx;
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

	// 列表头
	.list-header {
		font-size: 26upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		margin-top: -55upx;
		display: flex;
		padding: 0 21upx;

		.list-header-font {
			width: 20%;
			text-align: center;
		}
	}

	// 横条
	.stripe {
		width: 100%;
		height: 33upx;
	}

	// 记录列表
	.record-list {
		margin: 0upx 24upx 0 24upx;
		position: relative;
		top: 550upx;
	}

	.record-list-scrollTop {
		position: relative !important;
		top: 700upx !important;
	}

	// 列表项
	.list-item {
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
		}

		.item-data:first-child {
			padding-top: 32upx;
		}

		.item-data:last-child {
			margin-bottom: 32upx;
		}

		.item-data-box {
			background-color: #FFF9F7;
		}

		.item-data {
			font-size: 24upx;
			color: rgba(34, 34, 34, 1);
			display: flex;
			align-items: center;
			padding-bottom: 32upx;

			.content-width {
				width: 20%;
				text-align: center;
			}

			.font {
				font-size: 24upx;
				font-weight: bold;
			}

			.font-color1 {
				color: #22A738
			}

			.font-color2 {
				color: #FD3339
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
			.see-timeout-common {
				width: 92upx;
				height: 46upx;
				display: inline-block;
				line-height: 46upx;
			}

			.item-data-see {
				color: rgba(85, 85, 85, 1);
				border-radius: 23upx;
				background: rgba(255, 225, 80, 1);
			}

			.item-data-timeout {
				color: #222;
			}
		}
	}

	// 底部
	.footer {
		padding: 20upx 0 50upx 0;
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
</style>
