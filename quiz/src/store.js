import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
		reset(state) {
			state.questions = []
			state.currentQuestion = 0;
		},
		initQuestions(state, payload) {		
			state.questions = payload;
		},
		increment(state) {
			state.questionsCount ++;
		},
		decrement(state) {
			if(state.questionsCount > 1) {
				state.questionsCount --;
			}
		},
		nextQuestion(state) {
			state.currentQuestion++;
		}
	},
	getters: {
		count: state => {
			return state.questionsCount;
		},
		currentQuestion: state => {
			return state.currentQuestion;
		},
		questions: state => {
			return state.questions;
		},
		percent: state => {
			return state.questions.length ? (state.currentQuestion / state.questions.length) * 100 : 0;
		},
		length: state => {
			return state.questions.length;
		},
		question: state => {
			return state.questions[state.currentQuestion];
		}
	},
	actions: {
		getQuestions({ commit, state }) {
			const url = `https://opentdb.com/api.php?amount=${state.questionsCount}&type=boolean`
			axios.get(url)
				.then(res => commit('initQuestions', res.data.results))
				.catch(err => console.error(err))
		}
	}
})

export default store;