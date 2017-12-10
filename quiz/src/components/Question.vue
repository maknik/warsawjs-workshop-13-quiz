<template>
	<div  class="step" v-bind:class="{active: active, completed: completed}">
		<i class="question icon"></i>
		<div class="content">
			<div class="title">Question {{ index + 1 }}</div>
			<div class="description">Question for {{ (index + 1) * 100}}$</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			active: {
				required: true,
				type: Boolean
			},
			completed: {
				required: true,
				type: Boolean
			},
			index: {
				required: true,
				type: Number
			}
		}
	}
</script>