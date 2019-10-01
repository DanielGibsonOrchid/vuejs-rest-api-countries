import Home from './components/Home'
import CountryDetail from './components/CountryDetail'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true,
    meta: {
      title: 'REST API Countries App - Homepage'
    }
  },
  {
    path: '/:country',
    name: 'country-detail',
    component: CountryDetail,
    props: true,
    meta: {
      title: 'REST API Countries App'
    }
  },
]

export default routes