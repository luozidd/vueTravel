<template>
	<div>
		<home-header></home-header>
		<home-swpier :list='swiperList'></home-swpier>
		<home-icons :icon='icon'></home-icons>
		<home-recommend :list='recommends'></home-recommend>
		<home-weekend :week="weekends"></home-weekend>
	</div>
</template>

<script type="text/javascript">
	import HomeHeader from './components/Header.vue'
	import HomeSwpier from './components/Swpier.vue'
	import HomeIcons from './components/Icons.vue'
	import HomeRecommend from './components/Recommend.vue'
	import HomeWeekend from './components/Weekend.vue'
	import axios from 'axios'
	import { mapState } from 'vuex'
	export default {
		name:'Home',
		data(){
			return {
				swiperList:[],
				icon:[],
				recommends:[],
				weekends:[],
				lastCity:''
			}
		},
		components:{
			HomeHeader,
			HomeSwpier,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		computed:{
			...mapState(['city'])
		},
		methods:{
			getHomeInfo(){
				axios.get('/static/mock//index.json?city=' + this.city).then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res){
				if (res.data.ret && res.data) {
					this.swiperList = res.data.data.swiperList;
					this.icon = res.data.data.iconList;
					this.recommends = res.data.data.recommendList;
					this.weekends = res.data.data.weekendList;
				}
			}
		},
		mounted(){
			this.lastCity = this.city;
			this.getHomeInfo();
		},
		activated(){
			if (this.lastCity !== this.city) {
				this.lastCity = this.city;
				this.getHomeInfo();
			}
		}
	}
</script>

<style>
	
</style>