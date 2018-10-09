<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<div class="iconfont header-back">&#xe624;</div>
		</router-link>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'CityHeader'
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		position relative
		height $HeaderHeight
		line-height $HeaderHeight
		background $bgColor
		text-align center
		color #fff
		font-size .33rem
		.header-back
			position absolute
			top 0
			left 0
			width .8rem
			color #fff
</style>