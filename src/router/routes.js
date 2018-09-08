import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Kind from '@/components/Kind'
import Cart from '@/components/Cart'
import User from '@/components/User'
const routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/home',
    	name: 'home',
    	component: Home
    },
    {
    	path: '/kind',
    	name: 'kind',
    	component: Kind
    },
    {
    	path: '/cart',
    	name: 'cart',
    	component: Cart
    },
    {
    	path: '/user',
    	name: 'user',
    	component: User
    }
  ]
export default routes