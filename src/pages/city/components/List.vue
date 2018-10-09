<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="buttton-list">
					<div class="button-wraper">
						<div class="button">{{this.$store.state.city}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="buttton-list">
					<div class="button-wraper" @click="cityClick(item.name)" v-for="(item,index) of list" :key="item.id">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom" @click="cityClick(items.name)" v-for="items of item" :key="items.id">{{items.name}}</div>
				</div>	
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import BScroll from 'better-scroll'
	export default {
		name:'CityList',
		props:{
			list:Array,
			cities:Object,
			lets:String
		},
		methods:{
			cityClick(city){
				this.$store.commit('changeCity',city);
				this.$router.push('/');
			}
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper)
		},
		watch:{
			lets(){
				if (this.lets) {
					const ele = this.$refs[this.lets][0]
					this.scroll.scrollToElement(ele);
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.border-topbottom
		&:before
			border-color #ccc
		&:after
			border-color #ccc
	.border-bottom
		&:before
			border-color #ccc
	.list
		overflow hidden
		position absolute
		top 1.58rem
		left 0
		right 0
		bottom 0
		.title
			line-height .54rem
			background #eee
			padding-left .2rem
			color #666
			font-size .26rem
		.buttton-list
			padding .1rem .6rem .1rem .1rem
			overflow hidden
			.button-wraper
				width 33.33%
				float left
				.button
					text-align center
					padding .1rem 0
					margin .1rem .1rem
					border .02rem solid #ccc
					border-radius .08rem
		.item-list
			.item
				line-height .76rem
				padding-left .2rem
</style>