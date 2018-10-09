<template>
	<div class="icons">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl" alt="">
						<p class="icon-desc">{{item.desc}}</p>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'HomeIcons',
		props:{
			icon:Array
		},
		data(){
			return {
				swiperOption:{
					pagination:'.swiper-pagination',
					autoplay:false
				}
			}
		},
		computed:{
			pages(){
				const pages = [];
				this.icon.forEach( function(element, index) {
					const page = Math.floor(index / 8);
					if (!pages[page]) {
						pages[page] = [];
					}
					pages[page].push(element);
				});
				return pages;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	@import '~styles/mixins.styl'
	.icons >>> .swiper-container
		overflow hidden
		width 100%
		height 0
		padding-bottom 50%
	.icons
		margin-top .1rem
		.icon
			height 0
			position relative
			overflow hidden
			float left
			width 25%
			padding-bottom 25%
			.icon-img
				position absolute
				top 0px
				left 0px
				right 0px
				bottom .44rem
				box-sizing border-box
				padding .1rem
				background color 
				.icon-img-content
					height 100%
					display block
					margin 0 auto
			.icon-desc
				position absolute
				left 0px
				right 0px
				bottom -.35rem
				height .44rem
				line-height .44rem
				color $pTextColor
				text-align center
				ellipsis()
</style>