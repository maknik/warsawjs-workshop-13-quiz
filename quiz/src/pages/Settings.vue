<template>
	<div class="column">
		<div class="ui card one centered">
			<div class="content">
				<div class="header">Set number of Questions!</div>
				<div class="counter">{{ count }}</div>
			</div>
			<div class="extra content">
				<div class="ui two buttons">
					<div @click="decrement" class="ui primary button">Less</div>
					<div @click="increment" class="ui primary button">More</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapMutations, mapGetters } from "vuex";
	export default {
		computed: mapGetters([
			'count'
		]),
		methods: mapMutations([
			'increment',
			'decrement'
		])
	}
</script>
