<template>
	<div class="ui text container grid" style="margin: 50px 0">
		<div class="row">
			<div class="column">
				<progress-bar :percent="percent"></progress-bar>
			</div>
		</div>
		<div class="row">
			<div class="six wide column">
				<questions-list :list="questions" :current="currentQuestion"></questions-list>
			</div>
			<div class="ten wide column">
				<Cards 
					v-if="question"
					v-on:answer="checkAnswer" 
					:question="question">
				</Cards>
				<div v-else class="ui active inverted dimmer">
					<div class="ui large text loader">Loading</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import axios from "axios";
	import Cards from "@/components/Cards";
	import QuestionsList from "@/components/QuestionsList";
	import ProgressBar from "@/components/ProgressBar";
	import {mapGetters} from "vuex";
	//uzywanie zewnetrznych komponentow definiujemy przed stworzeniem obiektu Vue
	export default {
		//cykl zycia. W momencie, ktorym komponent jest tworzony, wywolywana jest meroda created
		created() {
			//dispatch do asynchronicznych akcji
			this.$store.commit('reset');		
			this.$store.dispatch('getQuestions');
		},
		//rejestracja komponentow z ktorych korzystamy w tym template
		components: {
			Cards,
			'questions-list': QuestionsList,
			'progress-bar': ProgressBar
		},
		methods: {
			checkAnswer(event) {
				if (event === this.question.correct_answer) {
					this.$store.commit('nextQuestion');
					if (this.currentQuestion === this.length) {
						this.$store.commit('reset');
						this.$router.push('/won')
					}
				}
				else {
					alert("Wrong answer")
				}
			},
		},
		computed: mapGetters([
			'currentQuestion',
			'questions',
			'percent',
			'length',
			'question'
		])
		,
	}

</script>

<style></style>