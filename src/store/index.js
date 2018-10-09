import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let city = '上海'

// 如果浏览器不支持localStorage，就抛出异常
try {
	if (localStorage.city) {
		city = localStorage.city;
	}
} catch(e) {
}

export default new Vuex.Store({
	state:{
		city:city
	},
	/*actions:{
		changeCity(ctx,city){
			ctx.commit('changeCity',city);
		}
	},*/
	mutations:{
		changeCity(state,city){
			state.city = city;
			try {
				localStorage.city = city;
			} catch(e) {
			}
		}
	}
})