<template>
	<div v-if="question" class="ui card one centered">
		<div class="content">
			<!-- v-html renderuje string jak html -->
			<div v-html="question.question"></div>
		</div>
		<div class="extra content">
			<div class="ui two buttons">
				<div v-on:click="answer('True')" v-bind:class="question.correct_answer === 'True' ? 'green' : 'primary'" class="ui basic button">True</div>
				<div v-on:click="answer('False')" v-bind:class="question.correct_answer === 'False' ? 'green' : 'primary'" class="ui basic button">False</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		//komunikacja miedzy komponentami  w dol propsami, w gore eventy
		//mozna props: ['question']
		props: {
			question: {
				required: true,
				Type: Object
			}
		},
		methods: {
			answer(event) {
				this.$emit('answer', event);
			}
		}
	}
</script>