<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :lets = 'le' :list = 'hotCities' :cities="cities"></city-list>
		<city-letter :cities="cities" @change="changes"></city-letter>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	import CityHeader from './components/Header.vue'
	import CitySearch from './components/Search.vue'
	import CityList from './components/List.vue'
	import CityLetter from './components/Letter.vue'
	export default {
		name:'City',
		data(){
			return {
				hotCities:[],
				cities:{},
				le:''
			}
		},
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityLetter
		},
		methods:{
			getHomeInfo(){
				axios.get('/static/mock//city.json').then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res){
				if (res.data.ret && res.data) {
					this.hotCities = res.data.data.hotCities;
					this.cities = res.data.data.cities;
					/*this.swiperList = res.data.data.swiperList;
					this.icon = res.data.data.iconList;
					this.recommends = res.data.data.recommendList;
					this.weekends = res.data.data.weekendList;*/
				}
			},
			changes(le){
				this.le = le;
			}
		},
		mounted(){
			this.getHomeInfo();
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>