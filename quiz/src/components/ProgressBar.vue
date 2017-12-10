<template>
	<sui-progress v-bind:percent="percent" indicating></sui-progress>
</template>
<script>
	export default {
		props: ["percent"]
	}
</script>