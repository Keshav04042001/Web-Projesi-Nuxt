import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state : {
            fetchedProducts : []
        },
        mutations : {
            setProducts(state, products){
                state.fetchedProducts = products
            }
        },
        actions : {
            nuxtServerInit(vuexContext, context){
              vuexContext.commit("setProducts", [
                  {
                        id: "1",
                        title: "",
                        price: 199.99,
                  },
              ])
            },
            setProducts(vuexContext, products){
                vuexContext.commit("setProducts", products)
            }
        },
        getters : {
            getPosts(state){
                return state.fetchedProducts
            }
        }
    })
}

export default createStore