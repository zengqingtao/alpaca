<template>
	<view class="uni-container">
		<myheader></myheader>
		<!-- 场次信息列表 -->
		<view class="site-num-list">
			<view @click="toaPlacaList(item.play_id,item.scene_id,item.corn_require,item.level,item.scene_icon_two)" class="site-num-item"
			 v-for="(item,index) in sceneList" :key="index">
				<image class="item-img" :src="item.scene_icon"></image>
				<view class="item-right">
					<view class="site-class">{{item.scene_name}} </view>
					<view class="games-limit" v-if="!matching">拥有{{item.corn_require}}个积分即可参加</view>
					<view class="games-limit" v-if="matching">结束后可以查看比赛结果</view>
					<view class="multiple-box">
						<view class="multiple-box-num" :class="matching?'multiple-box-num-color':''">{{item.multiple}}</view>
						<view class="multiple-box-font">倍</view>
					</view>
					<image v-if="!matching" class="to-join" :src="quchanjia"></image>
					<image v-if="matching" class="to-join" :src="jinxinzhong"></image>
					<image v-if="item.is_join==1" class="item-right-img" :src="joinImg"></image>
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
			<view class="version">版本号:{{versionNum}}</view>
		</view>
		<!-- 比赛中 -->
		<view class="cornNum-notEnough" v-if="showMatching">
			<view class="modal-content">
				<image class="headportrait" :src="scene_icon_two"></image>
				<image @click="close" class="close" :src="modalColse"></image>
				<view>
					<view class="modal-title" v-if="matching">
						<view class="modal-title-distance">比赛进行中</view>
						<view>结束后自动发放奖励</view>
					</view>
					<view @click="close" class="confirm-box">
						<image class="confirm" :src="queding"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 积分不足(模态弹框) -->
		<view @touchmove.stop.prevent="moveHandle" class="cornNum-notEnough" v-if="!isNotEnough">
			<view class="modal-content">
				<image class="headportrait" :src="cornHeadportrait"></image>
				<image @click="close" class="close" :src="modalColse"></image>
				<view>
					<view class="modal-title">
						<view class="modal-title-distance">积分不足{{currentCornNum}}</view>
						<view v-if="level==1">无法进入初级场</view>
						<view v-if="level==2">无法进入中级场</view>
						<view v-if="level==3">无法进入高级场</view>
					</view>
					<!-- <view class="modal-title" >
						<view class="modal-title-distance">休赛中无法下注</view>
					</view> -->
					<view @click="close" class="confirm-box">
						<image class="confirm" :src="queding"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 参加了一场，没法参加其他场次(模态弹框) -->
		<view @touchmove.stop.prevent="moveHandle" class="cornNum-notEnough" v-if="showNotJoin">
			<view class="modal-content">
				<image class="headportrait" :src="scene_icon_two"></image>
				<image @click="notJoinConfirm" class="close" :src="modalColse"></image>
				<view>
					<view class="modal-title">
						<view class="modal-title-distance">您已参加{{join_level==1?'初级场':(join_level==2?'中级场':'高级场')}}比赛</view>
						<view>{{level==1?'初级场':(level==2?'中级场':'高级场')}}不可参与</view>
					</view>
					<view @click="notJoinConfirm" class="confirm-box">
						<image class="confirm" :src="queding"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 比赛提示 -->
		<view @touchmove.stop.prevent="moveHandle" class="cornNum-notEnough" v-if="showLJCK">
			<view class="modal-content">
				<image class="headportrait" :src="ljck_img"></image>
				<image @click="closeLJCK" class="close" :src="modalColse"></image>
				<view>
					<view class="modal-title">
						<view class="modal-title-distance">您参加的<text class="sceneName">{{ljck_level==1?'初级场':(ljck_level==2?'中级场':'高级场')}}</text>比赛已<text class="result">决出结果</text></view>
						<view>是否立即查看比赛?</view>
					</view>
					<view @click="toLJCK"  class="confirm-box">
						<image class="confirm" :src="chakanbisai"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 新手引导 v-if="isGuide" -->
		<view @touchmove.stop.prevent="moveHandle" class="cornNum-notEnough" @click="guideHotLinkGo()" v-if="isGuide">
			<image src="../../static/guide/game-guide01.png" mode="widthFix" class="guide-images"></image>
		</view>
	</view>
</template>

<script>
	import myheader from "../../components/header.vue"
	export default {
		data() {
			return {
				joinImg: '../../static/index/joined.png' + '?versionNum=' + this.$globalVariable.versionNum,
				modalColse: '../../static/modal/close.png' + '?versionNum=' + this.$globalVariable.versionNum,
				cornHeadportrait: '../../static/modal/corn-headportrait.png' + '?versionNum=' + this.$globalVariable.versionNum,
				queding: '../../static/button/queding.png' + '?versionNum=' + this.$globalVariable.versionNum,
				quchanjia: '../../static/button/quchanjia.png' + '?versionNum=' + this.$globalVariable.versionNum,
				jinxinzhong: '../../static/button/jinxinzhong.png' + '?versionNum=' + this.$globalVariable.versionNum,
				chakanbisai: '../../static/button/chakanbisai.png' + '?versionNum=' + this.$globalVariable.versionNum,
				isNotEnough: true, //显示积分是否足够
				showMatching: false, //比赛的状态
				token: '', //传递过来的用户信息
				sceneList: [], //保存场次信息列表
				matching: false,
				settlement_time: 0, //比赛开始到结束的时间段
				timer_time: 3000,
				cornNum: 0, //可用积分
				playCount: 0, //使用中的积分
				currentCornNum: 0, //当前点击项的积分
				level: 1, //当前点击的比赛等级
				showNotJoin: false,
				join_level: '', //已经参加的场次
				scene_icon_two: '', //当前点击场次图像
				ljck_play_id: 0, //立即查看的比赛id
				ljck_level: 0, //立即查看的比赛场次
				showLJCK: false,
				timestamp: '', //头部组件传递过来的时间戳
				ljck_img:'',//头像
				versionNum:0,
				isGuide: false
			}
		},
		components: {
			myheader
		},
		created() {
			this.versionNum=this.$globalVariable.versionNum;
			uni.showLoading({
				title: '加载中'
			});
			// 请求比赛信息
			var url = window.location.href;
			var query = url.split("?")[1];
			var token = query.split("=")[1];
			var token1 = token.split("&")[0];
			this.token = token1;
			this.getCompetitionList();
			uni.$on('toCornNum', (data) => {
				this.cornNum = data.cornNum;
				this.playCount = data.playCount;
			})
			uni.$on('matching', (data) => {
				this.settlement_time = data.settlement_time;
				this.timer_time = Number(this.settlement_time);
				this.matching = true;
				setTimeout(() => {
					// 重新请求列表
					this.getSceneList();
					this.matching = false;
					uni.$emit('tomatching', {
						msg: false
					})
					// this.getCompetitionList();
				}, this.timer_time);
			})
			uni.$on('isJoin', (data) => {
				var isJoin = data.msg;
				//如果传过来的数据是1或者2或者3,就重新请求场次列表
				if (isJoin == 1 || isJoin == 2 || isJoin == 3) {
					this.getSceneList();
				}
			})
			this.getSceneList();
		},
		methods: {
			// 立即查看
			toLJCK(){
				uni.navigateTo({
					url:'playback?token='+this.token+'&play_id='+this.ljck_play_id+'&level='+this.ljck_level
				})
				this.showLJCK = false;
			},
			// 关闭立即查看
			closeLJCK() {
				this.showLJCK = false;
			},
			moveHandle(e) {
				e.stopPropagation()
			},
			// 如果有已经参加的，把参加的场次赋值给join_level,然后判断当前点击的场次是否是已经参加的场次，如果不是，不能进去，如果是，可以进去
			toaPlacaList(play_id, scene_id, corn_require, level, scene_icon_two) {
				this.scene_icon_two = scene_icon_two;
				this.level = level;
				this.join_level = level;
				for (var i = 0; i < this.sceneList.length; i++) {
					if (this.sceneList[i].is_join == 1) {
						this.join_level = this.sceneList[i].level;
					}
				}
				if (this.matching) {
					this.showMatching = true
				} else if (this.join_level != level) {
					this.showNotJoin = true;
				} else if ((this.cornNum + this.playCount) < corn_require) {
					this.currentCornNum = corn_require;
					this.level = level;
					this.isNotEnough = false;
				} else {
					uni.navigateTo({
						url: 'alpaca?token=' + this.token + '&play_id=' + play_id + '&scene_id=' + scene_id + '&level=' + level
					})
				}
			},
			// 关闭提示已经参加的模态框
			notJoinConfirm() {
				this.showNotJoin = false;
			},
			// 截取url的参数
			// 关闭
			close() {
				this.showMatching = false;
				this.isNotEnough = true;
			},
			// 请求场次信息列表(羊驼大赛)
			getSceneList() {
				uni.request({
					url: this.$globalVariable.hostUrl + '/Alpaca/getSceneList',
					method: "POST",
					data: {
						token: this.token
					},
					success: (res) => {
						var res = res.data.data;
						this.sceneList = res.list;
						this.isShowGuide();
						uni.hideLoading();
					}
				});
			},
			// 是否显示新手引导
			isShowGuide(){
				var that = this;
				var guideImageIndex = uni.getStorageSync('guideImageIndex' + that.$globalVariable.versionGuide);
				// 如果能读取缓存对应的key值，列表有数据，不是比赛进行中，没有显示立即查看弹框，就显示新手引导
				if(!guideImageIndex && that.sceneList.length > 0 && !that.matching && !that.showLJCK){
					that.isGuide = true;
					uni.setStorageSync('guideImageIndex' + that.$globalVariable.versionGuide,true);
				}else{
					return
				}
			},
			guideHotLinkGo(){
				uni.navigateTo({
					url: 'alpaca?token=' + this.token + '&play_id=' + this.sceneList[0].play_id + '&scene_id=' + this.sceneList[0].scene_id + '&level=' + this.sceneList[0].level
				}).then(res=>{
					this.isGuide = false;
				})
				
			},
			// 请求比赛信息
			getCompetitionList() {
				uni.request({
					url: this.$globalVariable.hostUrl + '/Game/GameResMsg',
					method: "POST",
					data: {
						token: this.token
					},
					success: (res) => {
						var res = res.data.data;
						console.log("123");
						console.log(res);
						if(res.length>0){
							this.ljck_play_id = res[0].play_id;
							this.ljck_level = res[0].level;
							this.ljck_img = res[0].scene_icon_two
							this.showLJCK = true;
						}else{
							this.showLJCK = false;
						}
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	// 场次信息列表
	.site-num-list {
		margin: 78upx 20upx 0upx 20upx;

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

				// 积分有多少即可参加
				.games-limit {
					margin-top: 11.5upx;
					font-size: 26upx;
					font-weight: bold;
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

					.multiple-box-num-color {
						color: #A2A2A2;
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
					right: 30upx;
					bottom: 25upx;
					width: 158upx;
					height: 77upx;
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
		padding: 40upx 0 29upx 0;
		text-align: center;
		font-size: 24upx;
		color: rgba(178, 178, 178, 1);
		// 版本号
		.version{
			padding-top:20upx;
		}
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
				color: #222;

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
					margin-top: 45upx;
				}
			}
		}
	}
	// 新手引导
	.guide-images{
		width: 742upx;
		height: 606upx;
		position: absolute;
		top: 470upx;
	}
	// 比赛提示
	.sceneName {
		color: #339900;
	}

	.result {
		color: #FF9900;
	}
</style>
