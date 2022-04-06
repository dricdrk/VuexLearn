import { createStore } from 'vuex'
import allTodolist from '../data/todolists'
export default createStore({
    state: {
        firstName: 'TO DO',
        lastName: 'LIST',
        favorites: [],
        todoList:[]
      },
    mutations: {
        UPDATE_FAVORITES(state, payload) {
            state.favorites = payload
          },
          UPDATE_TodoList(state, payload) {
            state.todoList = payload
          },
    },
    actions: {
        addToDoObject(){
            let title=document.getElementById('title').value;
            let description=document.getElementById('description').value;
            let priority=document.getElementById('priority').value;
            var newToDo={
                Title : title,
                Description : description,
                Priority : priority
            }
            allTodolist.push(newToDo)
            console.log(allTodolist);
            // const todoList = context.state.todoList
            // todoList.push(payload)
            // context.commit('UPDATE_TodoList', todoList)
        },
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
