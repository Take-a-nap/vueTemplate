import {HOME_BANNER_LIST, HOME_PRO_LIST} from '@/store/mutation-types'

export default {
	state: {
		banner: [],
		list: [1,2,43]
	},
	getters: {},
	actions: {},
	mutations: {
		[HOME_BANNER_LIST](state, data){
			state.banner = data
		},
		[HOME_PRO_LIST](state, data){
			state.list = data
		}
	}
}