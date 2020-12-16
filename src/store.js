import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        products: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeProduct(state, myProducts){
            state.products = myProducts
        }
    },
    actions:{
        getProducts({commit}){
            axios.get('/product')
            .then((myResponse)=>{
                console.log("get product action", myResponse)
                commit('storeProduct', myResponse.data)
            })
            .catch(()=>{
                console.log("error in getProduct action")
            })
        }
    }
})