import firebase from 'firebase/app'
import 'firebase/auth'

export const state = () => ({
    items: [],
  });
  export const mutations = {
    addBasketItem(state, item){
      state.items.push(item);
    },
    removeBasketItem(state, index){
      state.items.splice(index, 1);
    },
    increase(state, index) {
      state.items[index].count++;
    },
    decrease(state, index){
      state.items[index].count--;
    },
    _updateBasket(state, data) {
      state.items = data;
    }

  };
  export const actions = {
    addBasket({state, commit}, data) {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].product.id === data.product.id && state.items[i].color === data.color){
          commit('increase', i);
          return true;
        }
      }
      commit('addBasketItem', data);
    },
    increaseBasketItem({state, commit}, id){
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === id){
          commit('increase', i);
          return false;
        }
      }
    },
    decreaseBasketItem({state, commit}, id){
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === id){
          if (state.items[i].count < 2){
            commit('removeBasketItem', i);
          }else{
            commit('decrease', i);
          }
          return false;
        }
      }
    },
    removeBasketItem({state,commit}, id) {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === id){
          commit('removeBasketItem', i);
          return false;
        }
      }
    },
    fetchBasketFromFirebase({commit, rootState}){
      firebase.auth().onAuthStateChanged(user=> {
        if(!user) return null;
        this.$fire.firestore.collection('basket').doc(user.email).get().then(snapshot => {
          let list = [];
          snapshot.forEach(data => {
            list.push(data.data());
          });
          commit('_updateBasket', list);
        });
      });
    },
    syncWithFirebase({commit, state}) {
      firebase.auth().onAuthStateChanged(user=> {
        if(!user) return null;
        this.$fire.firestore.collection('basket').doc(user.email).set({...state.items});
      });
    }
  };
  export const getters = {
    getBasketItems(state){
      return state.items;
    }
  };
