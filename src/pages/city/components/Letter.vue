<template>
	<ul class="list">
		<li class="items" :ref="item" @click="letterClick" v-for="item of letters" :key="item" @touchstart="listStart"  @touchmove="listMove" @touchend="listEnd">{{item}}</li>
	</ul>
</template>

<script type="text/javascript">
	export default {
		name:'CityLetter',
		props:{
			cities:Object
		},
		data(){
			return {
				touchStatus:false
			}
		},
		computed:{
			letters(){
				const letters = [];
				for (let i in this.cities){
					letters.push(i);
				}
				return letters
			}
		},
		methods:{
			letterClick (e) {
				this.$emit('change',e.target.innerText);
			},
			listStart () {
				this.touchStatus = true
			},
			listMove (e) {
				if (this.touchStatus) {
					const startY = this.$refs['A'][0].offsetTop;
					const tochY = e.touches[0].clientY - 79;
					const index = Math.floor((tochY - startY) / 20);
					if (index >= 0 && index < this.letters.length) {
						this.$emit('change',this.letters[index]);
					}
				}
			},
			listEnd () {
				this.touchStatus = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.list
		display flex
		flex-direction column
		justify-content center
		position absolute
		right 0
		top 1.58rem
		bottom 0
		width .4rem
		.items
			text-align center
			line-height .4rem
			color $bgColor
</style>