import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from '@/components/Home/store'
import kindStore from '@/components/Kind/store'
import cartStore from '@/components/Cart/store'
import userStore from '@/components/User/store'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		home: homeStore, // store.state   ----- store.state.home.list
		kind: kindStore,
		cart: cartStore,
		user: userStore
	}
})

export default store