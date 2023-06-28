import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from "../views/MovieView.vue"
import BoardView from "../views/BoardView.vue"
import ArticleView from "../views/ArticleView.vue"
import PostView from "../views/PostView.vue"
import ArticleList from '../components/board/ArticleList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },

    {
      path: '/movie/:id',
      name: 'Movie',
      component: MovieView

    },
    {
      path: '/news',
      component: BoardView,
      children: [
        {
          path: '',
          name: 'ArticleList',
          component: ArticleList,
        },
        {
          path: 'article/:id',
          name: 'Article',
          component: ArticleView,
        },
        {
          path: 'newpost',
          name: 'Post',
          component: PostView,
        },
        
      ],
      
    }, 
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
