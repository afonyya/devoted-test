import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items
    },

    ADD_ITEM(state, item) {
      state.items.push(item)
    },

    REMOVE_ITEM(state, id) {
      state.items = state.items.filter(item => item.id !== id)
    }
  },
  actions: {
    async getItems({ commit }) {
      commit(
        'SET_ITEMS',
        await (await fetch('http://localhost:3000/items')).json()
      )
    },

    async postItem({ commit }, data) {
      commit(
        'ADD_ITEM',
        await (
          await fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
          })
        ).json()
      )
    },

    async deleteItem({ commit }, id) {
      await fetch(`http://localhost:3000/items/${id}`, { method: 'DELETE' })
      commit('REMOVE_ITEM', id)
    }
  },
  getters: {
    itemList: state => [...state.items].reverse()
  }
})
