<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="items of week" :key="items.id">
				<div class="item-images">
					<img class="item-imgs" :src="items.imgUrl" alt="">
				</div>
				<div class="item-text">
					<p class="item-title">{{items.title}}</p>
					<p class="item-desc">{{items.desc}}</p>
					<!-- <button class="item-button">查看详情</button> -->
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'HomeWeekend',
		props:{
			week:Array
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		line-height .8rem
		background #eee 
		text-indent .2rem
	.item-images
		height 0
		overflow hidden
		padding-bottom 33.9%
		.item-imgs
			width 100%
	.item-text
		padding .1rem
		.item-title
			line-height .54rem
			font-kerning .32rem
			ellipsis()
		.item-desc
			line-height .4rem
			color #ccc
			ellipsis()
			
</style>