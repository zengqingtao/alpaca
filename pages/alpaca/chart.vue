<template>
	<view class="qiun-columns">
		<ve-line class="ve-line" :data="chartData1" :settings="chartSettings1" :series="series1" :legend="time_status=='today'?legend1:legend2"
		 :colors="time_status=='today'?colors1:colors2"></ve-line>
	</view>
</template>

<script>
	export default {
		data() {
			this.chartSettings1 = {
				labelMap: {
					hour: '日期',
					// td_new_user_num:"今天",
					// yd_new_user_num:"昨天",
				},
				area: true,
			}
			return {
				chartData1: { //columns必须与rows同语言
					columns: ['hour', 'td_new_user_num', 'yd_new_user_num'],
					rows: []
				},
			}
		},

		methods: {
			mychartFun1() {
				this.series1 = [{
						type: "line",
						name: '昨日',
						data: this.yt_newuser_list,
						lineStyle: {
							type: 'dashed',
							color: "#5FB8A1"
						},
						areaStyle: {
							color: {
								type: 'linear',
								showAllSymbol: true,
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#7EDBC4' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#FFFFFF' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						}
					},
					{
						type: "line",
						name: "今日",
						data: this.td_newuser_list,
						lineStyle: {
							type: 'solid',
							color: "#6486C8"
						},
						areaStyle: {
							color: {
								type: 'linear',
								showAllSymbol: true,
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#6178EA' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#FFFFFF' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						}
					},
				]
			},
		}
	}
</script>

<style>

</style>
