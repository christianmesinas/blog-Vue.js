import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addblog.vue'
import singleBlog from './components/singleblog.vue'

export default[
  { path:'/', component:showBlogs },
  { path: '/add', component:addBlog },
  { path: '/blog/:id', component:singleBlog }

]
