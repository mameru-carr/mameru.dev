<script setup>
import QuoteMachine from '@/components/QuoteMachine.vue';
</script>

<template lang="pug">
header
	h1(class="text-4xl font-display") The Lonely Mountain
	Suspense
		QuoteMachine
	hr
</template>

<style scoped lang="sass">
header
	margin: 1rem
	h1
		margin: 1rem
</style>
