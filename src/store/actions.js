import axios from 'axios'

export const getProducts = ({ commit }) => {
  axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => {
      commit('SET_PRODUCTS', response.data.categories)
    }
    )
}
