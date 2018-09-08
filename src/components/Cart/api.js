import axios from 'axios'



export default {
	getAdata (callback) {
		axios.get('url')
			.then(res => callback(res))
			.catch(err => console.log(err))
			/**
			 * // 回调函数处理办法
			 * 别处（组件内、store中actions）调用 homeApi.getAdata(result => console.log(result))
			 */
	},
	getBdata () {
		return new Promise( (resolve, reject) => {
			axios.get('url')
			.then(res => resolve(res))
			.catch(err => reject(err))
		})
		/**
			 * // promise处理办法
			 * 别处（组件内、store中actions）调用 
			 * 		homeApi.getBdata().then(result => console.log(result))
			 * 						 .catch(err => console.log(err))
			 */
	}
}