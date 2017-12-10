import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	//stan początkowy
	state: {
		questionsCount: 5,
		currentQuestion: 0,
		questions: []
	},
	//mozliwe mutacje na store
	mutations: {
		initQuestions() {
			const url = `https://opentdb.com/api.php?amount=${state.questionsCount}&type=boolean`
			axios.get(url)
				.then(res => state.questions = res.data.results)
				.catch(err => console.error(err))
		},
		increment(state) {
			state.questionsCount ++;
		},
		decrement(state) {
			if(state.questionsCount > 1) {
				state.questionsCount --;
			}
		}
	}
})

export default store;