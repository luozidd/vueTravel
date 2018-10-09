<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="items of list" :key="items.id">
				<img class="item-imgs" :src="items.imgUrl" alt="">
				<div class="item-text">
					<p class="item-title">{{items.title}}</p>
					<p class="item-desc">{{items.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'HomeRecommend',
		props:{
			list:Array
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		margin-top .2rem
		line-height .8rem
		background #eee 
		text-indent .2rem
	.item
		overflow hidden
		display flex 
		height 1.9rem
		.item-imgs
			width 1.7rem
			height 1.7rem
			padding .1rem
		.item-text
			flex 1
			min-width 0
			padding .1rem
			.item-title
				line-height .54rem
				font-kerning .32rem
				ellipsis()
			.item-desc
				line-height .4rem
				color #ccc
				ellipsis()
			.item-button
				line-height .44rem
				margin-top .2rem
				color #fff
				background #ff9300 
				padding 0 .2rem
				border-radius .06rem
			
			
</style>