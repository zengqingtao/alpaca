<template>
	<view class="uni-container">
		<myheader></myheader>
		<!-- 下注信息列表 -->
		<view class="bets-list">
			<view class="item-box" v-for="(item,index) in alpacaList" :key="index">
				<view class="bets-item">
					<image @click="recordData(item.alpaca_id,item.scene_id,item.code_name,alpaca_icon_two)" class="bets-item-img" :src="item.alpaca_icon"></image>
					<view class="bets-item-right" @click="tobets(item.alpaca_id,item.scene_id,item.code_name,item.alpaca_icon_two,item.pay_rate,item.bet_total)">
						<view class="item-alpaca">{{item.code_name}}</view>
						<view v-if="level==1" class="item-probability bg-yellow">状态良好
							获胜可得{{item.pay_rate}}倍积分</view>
						<view v-if="level==2" class="item-probability" :class="(item.win_rate<10)?'bg-red':(item.win_rate>25?'bg-green':'bg-yellow')">
							{{10>item.win_rate?'状态较差':(item.win_rate>25?'状态极佳':'状态良好')}}
							获胜可得{{item.pay_rate}}倍积分
						</view>
						<view v-if="level==3" class="item-probability" :class="(item.win_rate<10)?'bg-red':(item.win_rate>20?'bg-green':'bg-yellow')">
							{{10>item.win_rate?'状态较差':(item.win_rate>20?'状态极佳':'状态良好')}}
							获胜可得{{item.pay_rate}}倍积分
						</view>
						<view v-if="item.is_bet==1" class="item-get">
							<view>已支持</view>
							<view> 获胜可得{{item.winning}}积分</view>
						</view>
					</view>
				</view>
				<input class="item-btn" style="z-index:3;caret-color: #ffffff;color:red;" type="number" @click="tobets(item.alpaca_id,item.scene_id,item.code_name,item.alpaca_icon_two,item.pay_rate,item.bet_total)" />
				<image class="item-btn" @click="tobets(item.alpaca_id,item.scene_id,item.code_name,item.alpaca_icon_two,item.pay_rate,item.bet_total)"
				 :src="item.is_bet==1?jixuzhichi:caitahuosheng"></image>
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
		<!-- 新人引导1 -->
		<view @touchmove.stop.prevent="moveHandle" class="bets-modal-box guide-box" v-if="isGuide">
			<image src="../../static/guide/game-guide02.png" mode="widthFix" class="guide-images"></image>
			<view class="guide-hotLink">
				<input class="hotlink-item" v-for="(item,index) in alpacaList" :key="index" style="caret-color: #ffffff;color: transparent;"
				 type="number" pattern="\d*" @click="tobets(item.alpaca_id,item.scene_id,item.code_name,item.alpaca_icon_two,item.pay_rate,item.bet_total)" />
			</view>
		</view>
		<!-- 下注(模态弹框)  -->
		<view @touchmove.stop.prevent="moveHandle" class="bets-modal-box" v-if="!isclose">
			<view class="modal-content">
				<image class="headportrait" :src="alpaca_icon_two"></image>
				<image @click="close" class="close" :src="modalColse"></image>
				<view>
					<view class="alpaca-class">{{guess_codename}}</view>
					<view class="inp-box uni-form-item uni-column">
						<input class="inp" type="number" pattern="\d*" focus @input="input" @focus="inputfocus" @blur="inputblur" :value="ph">
					</view>
					<view class="inpTips-box">
						<view v-if="inpTips" class="inpTips">
							*{{inpTipsFont}}*
						</view>
						<view v-if="greatAvailableCorn" class="inpTips">
							*下注数量大于可用积分*
						</view>
					</view>
					<view v-if="true" class="fixedTips">
						<view class="fixedTips-font">
							*单只羊驼最多可下注{{max_bet}}
						</view>
					</view>
					<view class="available-corn-box">
						<view class="available-corn">可用积分: <span>{{availableCorn}}</span></view>
						<!-- <image class="available-corn-img" :src="cornGrain"></image> -->
					</view>
					<view class="available-corn-box revenue">
						<view class="available-corn">已支持积分: <span>{{bet_total}}</span></view>
						<!-- <image class="available-corn-img" :src="cornGrain"></image> -->
					</view>
					<!-- 					<view class="available-corn-box revenue">
						<view v-if="incomedata ==0" class="available-corn">预估收益: 0 </view>
						<view v-if="incomedata !=0" class="available-corn">预估收益: {{incomedata}} </view>
						<image class="available-corn-img" :src="cornGrain"></image>
					</view> -->
					<view class="available_pay_rate">
						（夺冠可得{{pay_rate}}倍积分）
					</view>
					<view class="confirm-box">
						<image class="confirm confirm-box-btn" @click="confirmbet" :src="queding"></image>
					</view>
					<view class="think" @click="close">
						再想想!
					</view>
				</view>
			</view>
		</view>
		<!-- 下注成功（模态弹框） -->
		<view @touchmove.stop.prevent="moveHandle" class="bets-modal-box" v-if="success">
			<view class="modal-content success-modal-content">
				<image class="headportrait" :src="alpaca_icon_two"></image>
				<image @click="successClose" class="close" :src="modalColse"></image>
				<view>
					<view class="alpaca-class">{{guess_codename}}</view>
					<view class="success-title">
						下注成功!
					</view>
					<view class="corn-img-box">
						<image class="corn-img" :src="cornGrain"></image>
					</view>
					<view class="click-close" @click="successClose">
						点击关闭弹窗
					</view>
				</view>
			</view>
		</view>
		<!-- 比赛进行中 -->
		<view @touchmove.stop.prevent="moveHandle" class="bets-modal-box" v-if="isShowMatching">
			<view class="modal-content success-modal-content">
				<image class="headportrait" :src="alpaca_icon_two"></image>
				<image @click="closeMatching" class="close" :src="modalColse"></image>
				<view>
					<view class="alpaca-class">{{guess_codename}}</view>
					<view class="success-title">
						比赛正在进行中...
					</view>
					<view class="corn-img-box">
						请稍后再来!
					</view>
					<view class="click-close" >
						<image @click="closeMatching" class="click-close-img" :src="queding"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 近5场战绩（模态弹框） -->
		<view @touchmove.stop.prevent="moveHandle" class="bets-modal-box" v-if="showRecordData">
			<view class="modal-content gains-modal-content">
				<image class="headportrait" :src="recordObj.alpaca_icon_two"></image>
				<image @click="recordClose" class="close" :src="modalColse"></image>
				<view>
					<view class="alpaca-class">{{recordObj.code_name}}</view>
					<view class="ucharts-box">
						<!-- ↓ -->
						<view class="qiun-columns">
							<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
								<view class="qiun-title-dot-light ucharts-title">近5场战绩
									<text v-if="recordObj.rank.length==0" class="ucharts-title ucharts-title-nodata">: 暂无</text>
								</view>
							</view>
							<view class="qiun-charts">
								<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
								 :style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
							</view>
						</view>
						<!-- ↑ -->
					</view>
					<view class="subtitle-box">
						<view class="">
							近20场平均名次: {{recordObj.rank_avg}}
						</view>
						<view class="">
							胜率: {{recordObj.win_rate}}%
						</view>
					</view>
					<view class="confirm-box">
						<image @click="toguess" class="confirm" :src="caitahuosheng"></image>
					</view>
					<view class="think" @click="recordClose">
						点击关闭弹窗
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
						<view class="modal-title-distance">您参加的<text class="sceneName">{{ljck_level==1?'初级场':(ljck_level==2?'中级场':'高级场')}}</text>比赛已<text
							 class="result">决出结果</text></view>
						<view>是否立即查看比赛?</view>
					</view>
					<view @click="toLJCK" class="confirm-box">
						<image class="confirm" :src="chakanbisai"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 新人引导2 -->
		<view @touchmove.stop.prevent="moveHandle" class="bets-modal-box" v-if="isGuideEnd" @click="isGuideEnd = false">
			<image src="../../static/guide/game-guide03.png" mode="widthFix" class="guide-end-images"></image>
		</view>
	</view>
</template>

<script>
	var tt = 11
	import myheader from "../../components/header.vue"
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaLineA = null;
	export default {
		data() {
			return {
				modalColse: '../../static/modal/close.png' + '?versionNum=' + this.$globalVariable.versionNum,
				cornGrain: '../../static/modal/corn-grain.png' + '?versionNum=' + this.$globalVariable.versionNum,
				alpacaHeadportrait: '../../static/modal/alpaca-headportrait.png' + '?versionNum=' + this.$globalVariable.versionNum,
				caitahuosheng: '../../static/button/caitahuosheng.png' + '?versionNum=' + this.$globalVariable.versionNum,
				jixuzhichi: '../../static/button/jixuzhichi.png' + '?versionNum=' + this.$globalVariable.versionNum,
				queding: '../../static/button/queding.png' + '?versionNum=' + this.$globalVariable.versionNum,
				chakanbisai: '../../static/button/chakanbisai.png' + '?versionNum=' + this.$globalVariable.versionNum,
				ph: 0, //输入框占位符
				isclose: true,
				success: false,
				greatAvailableCorn: false, //是否显示下注数量大于可用玉米
				showRecordData: false, //是否显示近5场战绩
				splitNumberlist: [],
				// 
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				play_id: 0, //比赛ID
				scene_id: 0, //场次ID
				level: 0,
				token: '', //用户信息
				pay_rate: 0, //下注的倍率
				alpacaList: [], //羊驼信息列表
				recordObj: {}, //近5场战绩所有数据
				incomedata: 0, //下注获取收益值 
				guess_aid: 0, //竞猜羊驼id
				guess_sid: 0, //竞猜场次id
				guess_codename: '', //竞猜羊驼名称
				bet_num: 0, //下注数量
				availableCorn: 0, //可用积分
				guessCorn: 0, //竞猜积分
				inpTips: false, //是否显示输入框提示
				alpaca_icon_two: '',
				chartdatares: [],
				min_bet: 0, //下注下限
				max_bet: 0, //下注上限
				bet_total: 0, //前下注累计
				// 
				splitNumber: 2, //初始化折线图的分解段数
				dataMin: -3, //折线图的最小值
				// 
				isGuide: false, //是否显示新手引导
				isGuideEnd: false,
				ljck_play_id: 0, //立即查看的比赛id
				ljck_level: 0, //立即查看的比赛场次
				showLJCK: false,
				timestamp: '', //头部组件传递过来的时间戳
				ljck_img: '', //头像
				isMatching: false, //是否是比赛进行中
				isShowMatching: false, //是否显示比赛进行中
			}
		},
		components: {
			myheader
		},
		onLoad(options) {
			this.play_id = options.play_id;
			this.scene_id = options.scene_id;
			this.token = options.token;
			this.level = options.level;
			_self = this;
			this.cWidth = uni.upx2px(550);
			this.cHeight = uni.upx2px(300);
			if (this.level == 1) {
				this.splitNumber = 1
				this.dataMin = -2
			} else if (this.level == 2) {
				this.splitNumber = 4
				this.dataMin = -5
			} else {
				this.splitNumber = 7
				this.dataMin = -8
			}
		},
		created() {
			uni.showLoading({
				title: '加载中'
			});
			uni.$on('toCornNum', (data) => {
				this.availableCorn = data.cornNum;
			})
			this.getAlpacaList(); //请求列表方法
			this.getCompetitionList();

			uni.$on('matching', (data) => {
				var settlement_time = data.settlement_time;
				var timer_time = Number(settlement_time);
				this.isMatching = true;
				setTimeout(() => {
					this.isMatching = true;
					this.getAlpacaList();
				}, timer_time);
			})
		},
		methods: {
			// 关闭立即查看
			closeLJCK() {
				this.showLJCK = false;
			},
			// 立即查看
			toLJCK() {
				uni.navigateTo({
					url: 'playback?token=' + this.token + '&play_id=' + this.ljck_play_id + '&level=' + this.ljck_level
				})
				this.showLJCK = false;
			},
			moveHandle(e) {
				e.stopPropagation()
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
						this.availableCorn = res.corn_num;
						this.guessCorn = res.play_count;
						uni.$emit('updateCornNum', {
							availableCorn: this.availableCorn,
							guessCorn: this.guessCorn
						})
					}
				});
			},
			// 关闭下注框
			close() {
				this.isclose = true;
				this.ph = 0;
				this.incomedata = 0;
				this.inpTips = false;
				this.greatAvailableCorn = false;
				// this.isShowGuideEnd();
				this.isGuideEnd = false
			},
			// 去下注
			tobets(alpaca_id, scene_id, code_name, alpaca_icon_two, pay_rate, bet_total) {
				this.guess_aid = alpaca_id;
				this.guess_sid = scene_id;
				this.guess_codename = code_name;
				this.alpaca_icon_two = alpaca_icon_two;
				this.pay_rate = pay_rate;
				this.bet_total = bet_total;
				if (this.isMatching) {
					this.isShowMatching = true
				} else {
					this.isShowMatching = false;
					setTimeout(() => {
						document.body.scrollTop = document.documentElement.scrollTop = 0;
						this.isclose = false;
					}, 100)
					if (this.isGuide) {
						setTimeout(() => {
							this.isGuide = false;
						}, 1000)
					}
				}
			},
			// 输入框获取焦点时，0消失
			inputfocus() {
				this.ph = '';
			},
			// 输入框失去焦点时，如果value为'',让其为0
			inputblur(e) {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				})
				if (e.detail.value == '') {
					this.ph = 0;
				}
			},
			input(e) {
				var bet_num = Number(e.detail.value);
				var bet_total = bet_num + this.bet_total;
				// 如果下注数量大于0，或者大于可用积分或者不是一个数字，就显示提示，否则请求预估收益
				if (bet_num > this.availableCorn) {
					this.greatAvailableCorn = true
					this.inpTips = false
				} else if ((bet_total > this.max_bet) || isNaN(bet_num)) {
					this.greatAvailableCorn = false;
					this.inpTipsFont = "累计下注数量超出数量限制";
					this.inpTips = true;
				} else {
					this.greatAvailableCorn = false;
					this.inpTips = false;
					this.bet_num = bet_num;
					if (this.bet_num >= this.min_bet) {
						this.incomedata = this.bet_num * this.pay_rate; //下注数量剩余赔率
						this.incomedata = Math.floor(this.incomedata); //收益向下取整
					} else {
						this.incomedata = 0;
					}
				}
			},
			// 点击确定下注，如果输入下注数量正确，就下注，并打开下注成功提示框
			confirmbet() {
				if ((this.bet_num < this.min_bet)) {
					this.inpTipsFont = "每次最少下" + this.min_bet + "积分"
					this.inpTips = true
				} else if (((!this.inpTips) && (!this.greatAvailableCorn)) && (this.ph === '')) {
					this.success = true
					this.alpacaBet();
				}
			},
			// 猜ta获胜
			toguess() {
				this.showRecordData = false;
				this.isclose = false;
			},
			//关闭比赛进行中的弹框
			closeMatching(){
				this.isShowMatching = false
			},
			// 成功下注-关闭弹框
			successClose() {
				this.ph = 0;
				this.incomedata = 0;
				this.success = false;
				this.isShowGuideEnd();
			},
			// 近5场战绩-关闭弹框
			recordClose() {
				this.showRecordData = false;
			},
			// 请求场次内的羊驼信息列表
			getAlpacaList() {
				uni.request({
					url: this.$globalVariable.hostUrl + '/Alpaca/getAlpacaList', //仅为示例，并非真实接口地址。
					method: "POST",
					data: {
						play_id: this.play_id,
						scene_id: this.scene_id,
						token: this.token
					},
					success: (res) => {
						var res = res.data.data;
						this.alpacaList = res.list;
						this.min_bet = res.min_bet;
						this.max_bet = res.max_bet;
						uni.hideLoading();
						this.isShowGuide();
					}
				});
			},
			// 请求近5场战绩
			recordData(alpaca_id, scene_id, code_name, alpaca_icon_two) {
				this.guess_aid = alpaca_id;
				this.guess_sid = scene_id;
				this.guess_codename = code_name;
				this.alpaca_icon_two = alpaca_icon_two;
				uni.request({
					url: this.$globalVariable.hostUrl + '/Alpaca/latest',
					method: "POST",
					data: {
						alpaca_id: alpaca_id,
						scene_id: scene_id,
						token: this.token
					},
					success: (res) => {
						this.recordObj = res.data.data;
						// 数组去重，赋值给ucharts折线图的y轴的splitNumber
						var obj = {};
						this.chartdatares = [];
						for (var i of this.recordObj.rank) {
							if (!obj[i]) {
								this.chartdatares.push(i)
								obj[i] = 1
							}
						}
						this.showRecordData = true;
						this.$nextTick(() => { //初始化
							this.getServerData(); //折线图
						})
					}
				});
			},
			// 点击确认下注
			alpacaBet() {
				uni.request({
					url: this.$globalVariable.hostUrl + '/Game/AlpacaBet',
					method: "POST",
					data: {
						play_id: this.play_id,
						alpaca_id: this.guess_aid,
						bet_num: this.bet_num,
						token: this.token
					},
					success: (res) => {
						uni.$emit('isJoin', {
							msg: this.level
						})
						this.isclose = true;
						this.getAccount();
						this.getAlpacaList(); //下注成功，重新请求列表数据
					}
				});
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
						console.log(res);
						if (res.length > 0) {
							this.ljck_play_id = res[0].play_id;
							this.ljck_level = res[0].level;
							this.ljck_img = res[0].scene_icon_two
							this.showLJCK = true;
						} else {
							this.showLJCK = false;
						}
					}
				});
			},
			// ↓
			getServerData() {
				// 遍历数据,把数据取反
				var rankList = this.recordObj.rank;
				var list = [];
				for (var i = 0; i < rankList.length; i++) {
					this.splitNumberlist.push(rankList[i]);
					var item = '-' + rankList[i];
					item = Number(item);
					list.push(item);
				}
				console.log("list:", list);
				console.log("this.recordObj.rank:", this.recordObj.rank);
				console.log("this.recordObj.rank.length:", this.recordObj.rank.length);
				let LineA = {
					categories: [],
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				LineA.categories = ["1场", "2场", "3场", "4场", "5场"];
				LineA.series = [{
					data: this.recordObj.rank.length == 0 ? [-1.3] : list
				}];
				_self.showLineA("canvasLineA", LineA);
			},
			showLineA(canvasId, chartData) {
				canvaLineA = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					colors: this.recordObj.rank.length == 0 ? ['#FFF'] : ['#FEA168'],
					fontSize: 11,
					padding: [15, 15, 0, 15],
					legend: {
						show: false
					},
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					xAxis: {
						type: 'grid',
						gridColor: '#ccc',
						gridType: 'dash',
						dashLength: 8,
						max: 20,
						// disableGrid:true,
					},
					yAxis: {
						data: [{
							calibration: true,
							position: 'left',
							title: '',
							titleFontSize: 12,
							min: this.dataMin,
							max: -1,
							format: (val) => {
								return (-val).toFixed(0)
							}
						}],
						// showTitle: true,
						gridType: 'dash',
						dashLength: 3,
						splitNumber: this.splitNumber,
						// (this.chartdatares.length - 1) == 0 ? 1 : (this.chartdatares.length - 1)
					},
					dataPointShapeType: "hollow",
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						line: {
							type: 'straight'
						}
					}
				});

			},
			// 是否显示新手引导
			isShowGuide() {
				var that = this;
				var guideImageAlpaca = uni.getStorageSync('guideImageAlpaca' + that.$globalVariable.versionGuide);
				if (!guideImageAlpaca && that.alpacaList.length > 0) {
					that.isGuide = true;
					uni.setStorageSync('guideImageAlpaca' + that.$globalVariable.versionGuide, true);
				} else {
					return
				}
			},
			// 是否显示新手引导
			isShowGuideEnd() {
				var that = this;
				var guideImageAlpacaEnd = uni.getStorageSync('guideImageAlpacaEnd' + that.$globalVariable.versionGuide);
				if (!guideImageAlpacaEnd && that.alpacaList.length > 0) {
					that.isGuideEnd = true;
					uni.setStorageSync('guideImageAlpacaEnd' + that.$globalVariable.versionGuide, true);
				} else {
					return
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		// position: fixed;
	}

	// 下注信息列表
	.bets-list {
		width: 702upx;
		margin: 0 24upx;
		padding-top: 59upx;
		box-sizing: border-box;

		.item-box {
			position: relative;
		}

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
					color: #222;
					padding-top: 35upx;
				}

				// 收到的积分
				.item-corn-num {
					font-size: 26upx;
					padding-top: 7.5upx;
					color: rgba(102, 102, 102, 1);
				}

				// 取胜概率
				.item-probability {
					width: 394upx;
					height: 40upx;
					font-size: 30upx;
					font-weight: 500;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
					margin-top: 44upx;
					border-radius: 20upx;
				}

				.bg-red {
					background-color: #FF0000;
				}

				.bg-yellow {
					background-color: #FFB400
				}

				.bg-green {
					background-color: #15A90D;
				}

				// 获胜可得
				.item-get {
					width: 363upx;
					height: 46upx;
					display: flex;
					justify-content: space-around;
					align-items: center;
					position: absolute;
					top: 0;
					right: 0;
					background: rgba(252, 215, 195, 1);
					border-radius: 0 19upx;
					color: #D3601F;
					font-size: 28upx;
					font-weight: 500;
				}
			}
		}

		// 按钮
		.item-btn {
			width: 166upx;
			height: 66upx;
			position: absolute;
			top: 58upx;
			right: 24upx;
		}
	}

	// 底部
	.footer {
		padding: 59upx 0 69upx 0;
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

	// 新手引导
	.bets-modal {
		position: absolute;
		top: 0upx;
		left: 0upx;
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
			height: 735upx;
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
			.alpaca-class {
				font-size: 36upx;
				font-weight: bold;
				margin-top: 140upx;
				text-align: center;
			}

			// 折线图
			.ucharts-box {
				display: flex;
				justify-content: center;
				padding-top: 30upx;

				.ucharts-title {
					font-size: 26upx;
					color: rgba(34, 34, 34, 1);
					padding-left: 25upx;

					.ucharts-title-nodata {
						padding-left: 5upx;
					}
				}
			}

			// 折线图下的标题
			.subtitle-box {
				width: 100%;
				display: flex;
				justify-content: space-between;
				box-sizing: border-box;
				padding: 51upx 55upx 0 55upx;
				font-size: 26upx;
				color: rgba(153, 153, 153, 1);
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

			// 下注输入提示
			.inpTips-box {
				width: 100%;
				position: absolute;
			}

			.inpTips {
				width: 100%;
				text-align: center;
				text-align: center;
				font-size: 26upx;
				color: #E81F0D;
			}

			// 固定的数量限制
			.fixedTips {
				display: flex;
				justify-content: center;
				margin-top: 37upx;

				.fixedTips-font {
					width: 284upx;
					height: 36upx;
					line-height: 36upx;
					color: #2B9CEB;
					background: #E7F5FC;
					font-size: 24upx;
					font-weight: 500;
					text-align: center;
				}
			}

			// 可用积分，预估收益
			.available-corn-box {
				display: flex;
				justify-content: center;
				padding-top: 25upx;

				.available-corn {
					font-size: 30upx;
					color: rgba(34, 34, 34, 1);
					text-align: center;

					span {
						font-size: 34upx;
						font-weight: 600;
					}
				}

				.available-corn-img {
					width: 40upx;
					height: 40upx;
					margin-left: 20upx;
				}
			}

			.available_pay_rate {
				font-size: 24upx;
				text-align: center;
				padding-top: 10upx;
			}

			.revenue {
				padding-top: 12upx;
			}

			.confirm-box {
				display: flex;
				justify-content: center;
				align-items: center;

				.confirm {
					width: 320upx;
					height: 105upx;
					margin-top: 35upx;
				}
			}

			// 再想想
			.think {
				text-decoration: underline;
				padding-top: 15upx;
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
			font-size: 55upx;
			text-align: center;
			font-weight: bold;
			color: rgba(34, 34, 34, 1);
		}

		.corn-img-box {
			display: flex;
			justify-content: center;
			font-size: 55upx;
			padding-top: 20upx;

			.corn-img {
				width: 129upx;
				height: 129upx;
			}
		}

		.click-close {
			padding-top: 20upx;
			text-align: center;
			font-size: 32upx;
			font-weight: 400;
			text-decoration: underline;
			color: rgba(153, 153, 153, 1);

			.click-close-img {
				width: 320upx;
				height: 105upx;
				margin-top:35upx;
			}
		}
	}

	// 近5场战绩（模态框）
	.gains-modal-content {
		height: 888upx !important;
	}

	// 新手引导
	.guide-images {
		width: 742upx;
		height: 606upx;
		position: absolute;
		top: 470upx;
	}

	.guide-hotLink {
		width: 742upx;
		height: 606upx;
		position: absolute;
		z-index: 2;
		top: 595upx;

		.hotlink-item {
			width: 742upx;
			height: 240upx;
		}
	}

	// 比赛开始时间引导
	.guide-end-images {
		width: 728upx;
		height: 302upx;
		position: absolute;
		top: 470upx;
	}

	// 比赛提示
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

	// 比赛提示
	.sceneName {
		color: #339900;
	}

	.result {
		color: #FF9900;
	}
</style>
