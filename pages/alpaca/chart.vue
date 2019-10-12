<template>
	<view class="qiun-columns">
		<ve-line class="ve-line" :data="chartData"  :colors="colors" :yAxis="yAxis"  :series="series"></ve-line>
	</view>
</template>

<script>
	export default {
		data() {
			
			return {
				chartData: { //columns必须与rows同语言
					columns: ['hour', 'td_new_user_num'],
					rows: [
						{ 'hour': '1场', 'td_new_user_num': 1},
						{ 'hour': '2场', 'td_new_user_num': 2},
						{ 'hour': '3场', 'td_new_user_num': 1},
						{ 'hour': '4场', 'td_new_user_num': 4},
						{ 'hour': '5场', 'td_new_user_num': 4},
					]
				},
				
			}
		},
		created() {
			this.mychart();
		},
		methods: {
			mychart() {
				this.colors=["#FFAB79"];
				
				this.yAxis = {
					name:["近5场战绩"],
					axisTick:{
						show:false
					},//是否显示刻度
					// type: 'value',
					data:[5,4,3,2,1]
				}
				
				
				this.series = [{
						type: "line",
						data: [1,2,1,4,4],
						lineStyle: {
							type: 'solid',
							color: "#FFAB79"
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
									color: '#FFAB79' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#FFFFFF' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						}
					}
				]
			},
		}
	}
</script>

<style>

</style>
