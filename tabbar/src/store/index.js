import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        counter:1000,
        students:[
            {id:100, name:'tom',age:18},
            {id:101, name:'jim',age:33},
            {id:102, name:'red',age:12},
            {id:103, name:'green',age:22},
            {id:104, name:'james',age:24},
            {id:105, name:'kobe',age:44},
        ]
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        }
    },
    getters:{
        powerCounter(state) {
            return state.counter * state.counter
        },

        more20stu(state) {
            return state.students.filter(s => s.age >20)
        },

        moreagestu(state) {
            return age => state.students.filter(s => s.age > age)
        }
    }

})

export default store