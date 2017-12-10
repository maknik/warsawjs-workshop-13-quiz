<template>
	<div class="column">
		<div class="ui card one centered">
			<div class="content">
				<div class="header">Set number of Questions!</div>
				<div class="counter">{{ count }}</div>
			</div>
			<div class="extra content">
				<div class="ui two buttons">
					<div @click="less" class="ui primary button">Less</div>
					<div @click="more" class="ui primary button">More</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			count() {
				return this.$store.state.questionsCount;
			}
		},
		methods: {
			more() {
				this.$store.commit('increment');
			},
			less() {
				this.$store.commit('decrement');
			}
		}
	}
</script>
