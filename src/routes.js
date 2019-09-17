import Home from './components/Home'
import CountryDetail from './components/CountryDetail'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:country',
    name: 'country-detail',
    component: CountryDetail
  }
]

export default routes