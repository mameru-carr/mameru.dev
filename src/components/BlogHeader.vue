<script setup>
import QuoteMachine from '@/components/QuoteMachine.vue';
</script>

<template lang="pug">
header
	h1(class="text-3xl font-mono") The Lonely Mountain
	Suspense
		QuoteMachine
	hr
</template>

<style scoped lang="sass">
header
	margin: 1rem
	h1
		margin: 0.5rem 0
</style>
