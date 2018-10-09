<template>
	<div class="wraper">
		<swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
	    <!-- slides -->
	    <swiper-slide v-for="(item,index) of list" :key="item.id">
	    	<img class="swiper-img" :src="item.imgUrl" alt="">
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'HomeSwiper',
		props:{
			list:Array
		},
		data(){
			return {
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true,
					autoplay:3000
				}
			}
		},
		computed:{
			showSwiper(){
				// 默认显示第一张图片
				return this.list.length
			}
		}
	}
</script>

<style lang="stylus" scoped>
	/* >>>:样式穿透 */
	.wraper >>> .swiper-pagination-bullet-active
		background #fff
	.wraper
		width 100%
		height 0
		overflow hidden
		padding-bottom 31.25%	
		.swiper-img
			width 100%
</style>