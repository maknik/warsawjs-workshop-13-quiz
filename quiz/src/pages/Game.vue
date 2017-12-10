<template>
	<div class="ui text container grid" style="margin: 50px 0">
		<div class="row">
			<div class="column">
				<progress-bar :percent="percent"></progress-bar>
			</div>
		</div>
		<div class="row">
			<div class="six wide column">
				<questions-list :list="results" :current="current"></questions-list>
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
	//uzywanie zewnetrznych komponentow definiujemy przed stworzeniem obiektu Vue
	export default {
		//cykl zycia. W momencie, ktorym komponent jest tworzony, wywolywana jest meroda created
		created() {
			
			const count = this.$store.state.questionsCount;
			const url = `https://opentdb.com/api.php?amount=${count}&type=boolean`
			axios.get(url)
			.then(res => this.results = res.data.results)
			.catch(err => console.error(err))
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
					this.current += 1;
					if (this.current === this.length) {
						this.$router.push('/won')
					}
				}
				else {
					alert("Wrong answer")
				}
			},
		},
		computed: {
			question() {
				return this.results[this.current];
			},
			length() {
				return this.results.length;
			},
			percent() {
				return this.length ? (this.current / this.length) * 100 : 0;
			}
		},
		data() {
			return {
				current: 0,
				results: [
					]
			}
		}
	}

</script>

<style></style>