<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="请输入城市或国家" >
		</div>
		<div class="search-con" ref="search" v-show="keyword">
			<ul>
				<li class="item border-bottom" @click="cityClick(item.name)" v-for="item of list" :key="item.id">{{item.name}}</li>
				<li class="item border-bottom" v-show="!list.length">没有找到匹配的城市</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	import BScroll from 'better-scroll'
	export default {
		name:'CitySearch',
		props:{
			cities:Object
		},
		data(){
			return {
				keyword:'',
				list:[],
				timer:null
			}
		},
		methods:{
			cityClick(city){
				this.$store.commit('changeCity',city);
				this.$router.push('/');
			}
		},
		watch:{
			keyword(){
				if (this.timer) {
					clearTimeout(this.timer)
				}
				if (!this.keyword) {
					this.list = [];
					return
				}
				this.timer = setTimeout(() => {
					const res = [];
					for(let i in this.cities){
						this.cities[i].forEach((vlu)=>{
							if (vlu.spell.indexOf(this.keyword) > -1 || vlu.name.indexOf(this.keyword) > -1) {
								res.push(vlu);
							}
						})
					}
					this.list = res;
				},100)
			}
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.search);
		},
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.search
		background $bgColor
		height .72rem
		padding 0 .1rem 
		.search-input
			box-sizing border-box
			width 100%
			text-align center
			padding 0 .1rem 
			border-radius .06rem
			height .62rem
			line-height .62rem
			color #666
	.search-con
		z-index 1
		overflow hidden
		position absolute
		top 1.58rem
		left 0
		right 0
		bottom 0
		background #eee
		.item
			line-height .62rem
			padding-left .2rem
			color #666
			background #fff
</style>