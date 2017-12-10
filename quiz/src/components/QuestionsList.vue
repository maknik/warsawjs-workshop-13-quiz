<template>
	<div class="ui vertical steps">
		<template v-for="_, index in list">
			<Question 
				:active="index === current" 
				:completed="index < current" 
				:index="index"></Question>
		</template>
	</div>
</template>
<script>
	import Question from "./Question";
	export default {
		components: { Question },
		props: ["list", "current"],
	}
</script>