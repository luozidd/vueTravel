<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont back-icon">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{this.$store.state.city}}
				<span class="iconfont arr-icon">&#xe60c;</span>
			</div>
		</router-link>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'HomeHeader',
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		display:flex
		height:$HeaderHeight
		background:$bgColor
		color:#fff
		line-height:$HeaderHeight
		.header-left
			width:.64rem
			float:left
			.back-icon
				text-align center
				display block
		.header-input
			flex:1
			height:.64rem
			line-height:.64rem
			margin-top:.12rem
			margin-bottom:.12rem
			background:#fff
			border-radius:.1rem
			padding-left .2rem
			color:#ccc
		.header-right
			min-width:1.04rem
			padding 0 .1rem 
			float:left
			text-align center
			color #fff
			.arr-icon
				font-size .24rem
</style>