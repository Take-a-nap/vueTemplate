<template>
  <div >
    首页
    {{this.$store.state.home.list}}
    {{list}}
    {{banner}}
  </div>
</template>

<script>
import {HOME_BANNER_LIST, HOME_PRO_LIST} from '@/store/mutation-types'
import {mapState} from 'vuex'
import api from './api'
export default {
	computed: {
		...mapState({
			list: state => state.home.list,
			banner: state => state.home.banner
		})
	},
	mounted () {
		api.getBdata().then(data => {
			this.$store.commit(HOME_PRO_LIST, data)
		})
	}
}
</script>
<style ></style>
