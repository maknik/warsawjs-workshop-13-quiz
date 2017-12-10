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
				<Cards v-on:answer="checkAnswer" :question="question"></Cards>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import Cards from "@/components/Cards";
	import QuestionsList from "@/components/QuestionsList";
	import ProgressBar from "@/components/ProgressBar";
	//uzywanie zewnetrznych komponentow definiujemy przed stworzeniem obiektu Vue
	export default {
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
				return (this.current / this.length) * 100;
			}
		},
		data() {
			return {
				current: 0,
				results: [
					{
						"category": "Science: Computers",
						"type": "boolean",
						"difficulty": "medium",
						"question": "The HTML5 standard was published in 2014.",
						"correct_answer": "True",
						"incorrect_answers": ["False"]
					},
					{
						"category": "Entertainment: Video Games",
						"type": "boolean",
						"difficulty": "easy",
						"question": "Pac- Man was invented by the designer Toru Iwatani while he was eating pizza.",
						"correct_answer": "True",
						"incorrect_answers": ["False"]
					},
					{
						"category": "Entertainment: Video Games",
						"type": "boolean",
						"difficulty": "easy",
						"question": "Rebecca Chambers does not appear in any Resident Evil except for the original Resident Evil and the Gamecube remake.",
						"correct_answer": "False",
						"incorrect_answers": ["True"]
					},
					{
						"category": "Entertainment: Music",
						"type": "boolean",
						"difficulty": "easy",
						"question": "Daft Punk originated in France.",
						"correct_answer": "True",
						"incorrect_answers": ["False"]
					}, {
						"category": "Entertainment: Video Games",
						"type": "boolean",
						"difficulty": "medium",
						"question": "In Monster Hunter Generations, guild style is a type of hunting style.", "correct_answer": "True",
						"incorrect_answers": ["False"]
					}]
			}
		}
	}

</script>

<style></style>