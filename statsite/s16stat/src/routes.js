//import path here
import FacebookStatPage from './pages/facebookstat'
import TwitterStatPage from './pages/twitterstat'
import YoutubeStatPage from './pages/youtubestat'

export default [
  {
    path: '/',
    component: FacebookStatPage
  },
  {
    path: '/fbStat',
    component: FacebookStatPage
  },
  {
    path: '/twStat',
    component: TwitterStatPage
  },
  {
    path: '/ytStat',
    component: YoutubeStatPage
  }
]