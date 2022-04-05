import { createStore } from 'vuex'

export default createStore({
    state: {
        firstName: 'TO DO',
        lastName: 'LIST',
        title: '',
        description: '',
        priority:'',
        favorites: []
      },
    mutations: {
        UPDATE_FAVORITES(state, payload) {
            state.favorites = payload
          },
          setTitle(state,value){
              state.title=value
          },
          setDescription(state,value){
              state.description=value
          },
          setPriority(state,value){
              state.priority=value
          }
    },
    actions: {
        addToFavorites(context, payload) {
            const favorites = context.state.favorites
            favorites.push(payload)
            context.commit('UPDATE_FAVORITES', favorites)
        },

        deleteToFavorites(context, payload) {
            const favorites = context.state.favorites
            // favorites.splice(payload)
            var newArray = favorites.filter(function(f) { return f !== payload })
            console.log(newArray);
            console.log(payload);
            context.commit('UPDATE_FAVORITES', newArray)
        }
},
    getters: {
        fullName: function (state) {
            return `${state.firstName} ${state.lastName}`
        }
    }
})
